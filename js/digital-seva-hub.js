/**
 * XESTUS Digital Seva Command Center — Interactive Controller & Search Engine
 * Version: 2.0.0 (Search -> Discover -> Understand -> Prepare -> Open Official Portal)
 * 
 * Complies with XESTUS Performance Engine (Tier 1-4) and Trilingual System (EN, BN, HI).
 * Independent Service Discovery Architecture.
 * Zero Credential Collection. Strict Government & Private Separation.
 */

"use strict";

(function () {
    function getDataStore() {
        return window.XESTUS_DIGITAL_SEVA_DATA || null;
    }

    // -------------------------------------------------------------------------
    // 1. STATE MANAGEMENT
    // -------------------------------------------------------------------------
    const state = {
        searchQuery: "",
        activeCategory: null,
        activeGovLevel: "all",
        activeCitizen: "all",
        activeServiceType: "all",
        activeDistrict: "All India / Central",
        activeModal: null,
        activeTabInModal: "overview",
        currentLang: "en"
    };

    function getActiveLanguage() {
        try {
            const stored = localStorage.getItem("xestus_user_language");
            if (stored && ["en", "bn", "hi"].includes(stored)) {
                return stored;
            }
            const docLang = document.documentElement.getAttribute("lang");
            if (docLang && ["en", "bn", "hi"].includes(docLang)) {
                return docLang;
            }
        } catch (_) {}
        return "en";
    }

    function getI18nText(obj, lang) {
        if (!obj) return "";
        if (typeof obj === "string") return obj;
        return obj[lang] || obj["en"] || Object.values(obj)[0] || "";
    }

    function escapeHTML(str) {
        if (str === null || str === undefined) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // -------------------------------------------------------------------------
    // 2. MULTILINGUAL NATURAL INTENT SEARCH & RELEVANCE ENGINE
    // -------------------------------------------------------------------------
    const STOPWORDS = new Set([
        // Bengali
        "আমার", "হবে", "করতে", "চাই", "নেই", "কীভাবে", "কোথায়", "কী", "কি", "দরকার", "লাগে", "হচ্ছে", "একটি", "একটা", "জন্য", "থেকে", "আমি", "হাতে", "পাব", "পাবো",
        // Hindi
        "मुझे", "चाहिए", "करना", "है", "कैसे", "कहाँ", "क्या", "के", "लिए", "का", "की", "को", "में", "से", "होगा", "मैं", "पास", "नहीं",
        // English
        "i", "want", "to", "how", "to", "apply", "for", "my", "is", "the", "a", "an", "of", "and", "in", "need", "get", "make", "change", "have", "no"
    ]);

    function normalizeText(text) {
        if (!text) return "";
        return text
            .toString()
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function calculateRelevanceScore(service, query, lang) {
        if (!query) return 1;
        const qNorm = normalizeText(query);
        const rawTokens = qNorm.split(" ").filter((t) => t.length > 0);
        
        let qTokens = rawTokens.filter((t) => !STOPWORDS.has(t) && t.length > 1);
        if (qTokens.length === 0) {
            qTokens = rawTokens.filter((t) => t.length > 1);
        }
        if (qTokens.length === 0 && rawTokens.length > 0) {
            qTokens = rawTokens;
        }
        if (qTokens.length === 0) return 0;

        const nameEn = normalizeText(service.service_name?.en || "");
        const nameBn = normalizeText(service.service_name?.bn || "");
        const nameHi = normalizeText(service.service_name?.hi || "");
        const descEn = normalizeText(service.short_description?.en || "");
        const descBn = normalizeText(service.short_description?.bn || "");
        const descHi = normalizeText(service.short_description?.hi || "");
        const authority = normalizeText(service.authority || "");
        const catName = normalizeText(getI18nText(service.category_name, lang));
        const subcat = normalizeText(service.subcategory || "");

        const intentTags = (service.intent_tags || []).map((t) => normalizeText(t));
        const allIntentStr = intentTags.join(" ");

        let score = 0;
        let matchedCount = 0;

        // Exact query match in title or intent tags (highest priority)
        if (nameEn.includes(qNorm) || nameBn.includes(qNorm) || nameHi.includes(qNorm)) {
            score += 120;
            matchedCount++;
        }
        if (allIntentStr.includes(qNorm)) {
            score += 90;
            matchedCount++;
        }

        // Token scoring
        for (const token of qTokens) {
            let tokenHit = false;

            if (nameEn.includes(token) || nameBn.includes(token) || nameHi.includes(token)) {
                score += 35;
                tokenHit = true;
            }
            if (allIntentStr.includes(token)) {
                score += 30;
                tokenHit = true;
            }
            // Substring stem check (e.g. "জাতি" in "জাতিগত" or "অন্ন" in "অন্নপূর্ণা")
            if (token.length >= 3 && (nameBn.includes(token.slice(0, 4)) || allIntentStr.includes(token.slice(0, 4)) || nameEn.includes(token.slice(0, 4)))) {
                score += 20;
                tokenHit = true;
            }
            if (catName.includes(token) || subcat.includes(token)) {
                score += 15;
                tokenHit = true;
            }
            if (authority.includes(token)) {
                score += 10;
                tokenHit = true;
            }
            if (descEn.includes(token) || descBn.includes(token) || descHi.includes(token)) {
                score += 8;
                tokenHit = true;
            }

            if (tokenHit) matchedCount++;
        }

        // Boost for popular services
        if (service.is_popular && score > 0) {
            score += 5;
        }

        return (matchedCount >= 1 || score > 0) ? score : 0;
    }

    // -------------------------------------------------------------------------
    // 3. TAXONOMY & FILTERING PIPELINE
    // -------------------------------------------------------------------------
    const CATEGORY_GROUPS = {
        government: new Set([
            "identity-docs", "wb-edistrict", "ration-food", "land-property", "healthcare",
            "agriculture", "labour-workers", "welfare-schemes", "pension-security", "women-girls",
            "senior-citizens", "disability-services", "tax-gst", "business-startup", "procurement",
            "legal-services", "rti", "police-cyber", "india-post", "digital-gov", "notices-alerts",
            "panchayat-rural", "municipal-civic", "helpline-grievance"
        ]),
        education: new Set([
            "school-education", "college-admission", "entrance-exams", "polytechnic-iti",
            "free-learning", "international-edu", "research-science", "results-portal",
            "admit-cards", "exam-calendar"
        ]),
        scholarships: new Set([
            "scholarships", "student-credit", "culture-heritage", "research-science", "sports-youth"
        ]),
        jobs: new Set([
            "govt-jobs-central", "railway-jobs", "banking-jobs", "defence-jobs", "wb-govt-jobs",
            "private-jobs", "internships", "skill-development", "career-guidance", "freelance-creator"
        ]),
        transport: new Set([
            "driving-vehicles", "travel-railway"
        ]),
        land: new Set([
            "land-property"
        ]),
        agriculture: new Set([
            "agriculture"
        ]),
        welfare: new Set([
            "welfare-schemes", "women-girls", "pension-security", "labour-workers", "senior-citizens", "disability-services"
        ]),
        women: new Set([
            "women-girls"
        ]),
        youth: new Set([
            "skill-development", "sports-youth", "internships", "free-learning"
        ]),
        finance: new Set([
            "tax-gst", "banking-finance", "insurance"
        ]),
        banking: new Set([
            "banking-finance", "private-digital"
        ]),
        business: new Set([
            "business-startup", "procurement"
        ]),
        utilities: new Set([
            "lpg-gas", "electricity", "municipal-services", "banking-finance", "insurance",
            "solar-energy", "private-digital", "police-cyber", "scam-protection"
        ])
    };

    function serviceMatchesCategory(service, activeCat) {
        if (!activeCat || activeCat === "all") return true;
        if (activeCat === "government") {
            return CATEGORY_GROUPS.government.has(service.category) || service.government_level !== "Private";
        }
        if (activeCat === "education" || activeCat === "college-admission" || activeCat === "entrance-exams") {
            return CATEGORY_GROUPS.education.has(service.category) || service.category === activeCat;
        }
        if (activeCat === "scholarships" || activeCat === "student-credit") {
            return CATEGORY_GROUPS.scholarships.has(service.category) || service.category === activeCat;
        }
        if (activeCat === "jobs" || activeCat === "govt-jobs-central" || activeCat === "wb-govt-jobs" || activeCat === "private-jobs") {
            return CATEGORY_GROUPS.jobs.has(service.category) || service.category === activeCat;
        }
        if (activeCat === "transport" || activeCat === "driving-vehicles" || activeCat === "travel-railway") {
            return CATEGORY_GROUPS.transport.has(service.category) || service.category === "driving-vehicles" || service.category === "travel-railway";
        }
        if (activeCat === "land" || activeCat === "land-property") {
            return CATEGORY_GROUPS.land.has(service.category) || service.category === "land-property";
        }
        if (activeCat === "agriculture") {
            return CATEGORY_GROUPS.agriculture.has(service.category) || service.category === "agriculture";
        }
        if (activeCat === "welfare" || activeCat === "welfare-schemes") {
            return CATEGORY_GROUPS.welfare.has(service.category) || service.category === "welfare-schemes";
        }
        if (activeCat === "women" || activeCat === "women-girls") {
            return CATEGORY_GROUPS.women.has(service.category) || service.category === "women-girls";
        }
        if (activeCat === "youth" || activeCat === "skill-development") {
            return CATEGORY_GROUPS.youth.has(service.category) || service.category === "skill-development";
        }
        if (activeCat === "finance" || activeCat === "tax-gst") {
            return CATEGORY_GROUPS.finance.has(service.category) || service.category === "tax-gst";
        }
        if (activeCat === "banking" || activeCat === "banking-finance") {
            return CATEGORY_GROUPS.banking.has(service.category) || service.category === "banking-finance";
        }
        if (activeCat === "business" || activeCat === "business-startup") {
            return CATEGORY_GROUPS.business.has(service.category) || service.category === "business-startup";
        }
        if (activeCat === "utilities") {
            return CATEGORY_GROUPS.utilities.has(service.category);
        }
        return service.category === activeCat;
    }

    function getFilteredServices() {
        const dataStore = getDataStore();
        if (!dataStore) return [];
        const allServices = dataStore.getServices();
        const lang = getActiveLanguage();

        const resultsWithScores = [];

        for (const service of allServices) {
            // Category Filter
            if (state.activeCategory && !serviceMatchesCategory(service, state.activeCategory)) {
                continue;
            }

            // Gov Level Filter (Central, State, Private)
            if (state.activeGovLevel !== "all") {
                const sGov = String(service.government_level || "").toLowerCase();
                const sState = String(service.state || "").toLowerCase();
                const isWB = sGov === "west bengal" || sGov === "state" || sGov === "wb" || sState === "west bengal";
                const isCentral = sGov === "central" || sGov === "all india" || sGov === "national";
                const isPrivate = sGov === "private";

                if (state.activeGovLevel === "State" || state.activeGovLevel === "West Bengal" || state.activeGovLevel === "wb") {
                    if (!isWB) continue;
                } else if (state.activeGovLevel === "Central" || state.activeGovLevel === "central") {
                    if (!isCentral) continue;
                } else if (state.activeGovLevel === "Private" || state.activeGovLevel === "private") {
                    if (!isPrivate) continue;
                } else if (service.government_level !== state.activeGovLevel) {
                    continue;
                }
            }

            // Search Query Scoring
            let score = 1;
            if (state.searchQuery) {
                score = calculateRelevanceScore(service, state.searchQuery, lang);
                if (score <= 0) continue;
            }

            resultsWithScores.push({ service, score });
        }

        // Sort by relevance score descending
        resultsWithScores.sort((a, b) => b.score - a.score);

        return resultsWithScores.map((r) => r.service);
    }

    // -------------------------------------------------------------------------
    // 4. UI RENDERERS
    // -------------------------------------------------------------------------

    // Render Master Gateways Grid
    function renderMasterPortals() {
        const container = document.getElementById("sevaMasterPortalsGrid");
        if (!container) return;

        const dataStore = getDataStore();
        if (!dataStore) return;

        const lang = getActiveLanguage();
        const portals = dataStore.getMasterPortals();

        container.innerHTML = portals
            .map((p) => {
                const title = getI18nText(p.title, lang);
                const desc = getI18nText(p.desc, lang);
                return `
                    <div class="seva-portal-card">
                        <div class="portal-card-header">
                            <div class="portal-badge-wrap">
                                <span class="portal-auth-tag">${escapeHTML(p.authority)}</span>
                                <span class="portal-verif-badge">${p.badge}</span>
                            </div>
                            <h4 class="portal-name">${escapeHTML(p.name)}</h4>
                            <span class="portal-title">${escapeHTML(title)}</span>
                        </div>
                        <p class="portal-desc">${escapeHTML(desc)}</p>
                        <div class="portal-card-footer">
                            <a href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer" class="btn-portal-link">
                                <span>Official Gateway</span>
                                <i data-lucide="external-link" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                `;
            })
            .join("");

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    // Render Verification Badge Markup
    function getVerificationBadgeHTML(status, lastVerified) {
        switch (status) {
            case "officially_verified":
                return `
                    <span class="seva-badge badge-verified" title="Officially verified on statutory government domain">
                        <span class="badge-dot dot-verified" aria-hidden="true"></span>
                        <span>🟢 Officially Verified</span>
                    </span>
                `;
            case "private_platform":
                return `
                    <span class="seva-badge badge-private" title="Legitimate private platform — non-government">
                        <span class="badge-dot dot-private" aria-hidden="true"></span>
                        <span>🔵 Private Platform</span>
                    </span>
                `;
            default:
                return `
                    <span class="seva-badge badge-source" title="Verified statutory source">
                        <span class="badge-dot dot-source" aria-hidden="true"></span>
                        <span>🟡 Verified Source</span>
                    </span>
                `;
        }
    }

    // Helper: Render a Single Service Card HTML
    function createServiceCardHTML(s, lang) {
        const name = getI18nText(s.service_name, lang);
        const desc = getI18nText(s.short_description, lang);
        const catName = getI18nText(s.category_name, lang);
        const feeText = getI18nText(s.application_fee, lang);
        const isGov = s.government_level !== "Private";
        const officialLink = s.official_apply_url || s.official_homepage || "";

        const sGov = String(s.government_level || "").toLowerCase();
        const sState = String(s.state || "").toLowerCase();
        const isWB = sGov === "west bengal" || sGov === "state" || sGov === "wb" || sState === "west bengal";
        const isPrivate = sGov === "private";

        let levelBadgeText = "🟢 State Govt (WB)";
        let levelBadgeClass = "badge-wb";

        if (isPrivate) {
            levelBadgeClass = "badge-private";
            levelBadgeText = (lang === "bn") ? "🔵 প্রাইভেট প্ল্যাটফর্ম" : (lang === "hi") ? "🔵 प्राइवेट प्लेटफॉर्म" : "🔵 Private Platform";
        } else if (isWB) {
            levelBadgeClass = "badge-wb";
            levelBadgeText = (lang === "bn") ? "🟢 পশ্চিমবঙ্গ সরকার" : (lang === "hi") ? "🟢 पश्चिम बंगाल सरकार" : "🟢 State Govt (WB)";
        } else {
            levelBadgeClass = "badge-central";
            levelBadgeText = (lang === "bn") ? "🟢 কেন্দ্রীয় সরকার" : (lang === "hi") ? "🟢 केंद्र सरकार" : "🟢 Central Govt";
        }

        const docsSummary = (s.required_documents && s.required_documents.en && s.required_documents.en.length > 0)
            ? s.required_documents.en.slice(0, 2).join(", ")
            : "Standard identity & address proof";

        return `
            <div class="seva-service-card" data-service-id="${s.service_id}" tabindex="0" role="region" aria-label="${escapeHTML(name)} Service Card">
                <div class="seva-card-header">
                    <div class="seva-meta-strip">
                        <span class="seva-authority-pill ${levelBadgeClass}">${escapeHTML(levelBadgeText)}</span>
                        <span class="seva-category-tag">${escapeHTML(catName)}</span>
                    </div>
                    <div class="seva-badge-row">
                        ${getVerificationBadgeHTML(s.verification_status, s.last_verified)}
                    </div>
                    <h3 class="seva-card-title">${escapeHTML(name)}</h3>
                    <div class="seva-authority-row">
                        <i data-lucide="landmark" class="auth-icon" aria-hidden="true"></i>
                        <span class="seva-authority-name">${escapeHTML(s.authority)}</span>
                    </div>
                </div>

                <p class="seva-card-desc">${escapeHTML(desc)}</p>

                <!-- Document Checklist Quick Peek -->
                <div class="seva-card-doc-preview">
                    <div class="doc-preview-label">
                        <i data-lucide="file-check-2" aria-hidden="true"></i>
                        <span>${lang === 'bn' ? 'প্রয়োজনীয় নথি:' : lang === 'hi' ? 'जरूरी दस्तावेज:' : 'Key Documents:'}</span>
                    </div>
                    <p class="doc-preview-text">${escapeHTML(docsSummary)}...</p>
                </div>

                <div class="seva-card-fee-strip">
                    <i data-lucide="coins" class="fee-icon" aria-hidden="true"></i>
                    <span class="fee-label">Official Fee:</span>
                    <span class="fee-value">${escapeHTML(feeText)}</span>
                </div>

                <!-- 3 Action Buttons -->
                <div class="seva-card-actions-3col">
                    <button type="button" class="btn-card-action btn-card-guide" data-service-id="${s.service_id}" title="View comprehensive guide and required documents checklist">
                        <i data-lucide="file-text" aria-hidden="true"></i>
                        <span>${lang === 'bn' ? 'গাইড ও চেকলিস্ট' : lang === 'hi' ? 'गाइड व चेकलिस्ट' : 'View Guide & Checklist'}</span>
                    </button>
                    ${officialLink ? `
                        <a href="${escapeHTML(officialLink)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-portal" title="Open authentic official statutory portal">
                            <span>${lang === 'bn' ? 'অফিসিয়াল পোর্টাল' : lang === 'hi' ? 'आधिकारिक पोर्टल' : 'Open Portal'}</span>
                            <i data-lucide="external-link" aria-hidden="true"></i>
                        </a>
                    ` : ''}
                    <button type="button" class="btn-card-action btn-card-assist" data-service-name="${escapeHTML(name)}" title="Request XESTUS assisted typing or checklist support">
                        <i data-lucide="handshake" aria-hidden="true"></i>
                        <span>${lang === 'bn' ? 'সাহায্য চান' : lang === 'hi' ? 'मदद चाहिए' : 'Request Help'}</span>
                    </button>
                </div>
            </div>
        `;
    }

    // Render Main Services Cards Grid & Separated Private Directory
    function renderServicesGrid(triggerHighlight = false) {
        const grid = document.getElementById("sevaServicesGrid");
        const countBadge = document.getElementById("sevaResultCount");
        const emptyState = document.getElementById("sevaEmptyState");
        const fallbackSection = document.getElementById("sevaFallbackSuggestions");
        const fallbackCardsRow = document.getElementById("sevaFallbackCardsRow");
        const activeFilterTags = document.getElementById("sevaActiveFilterTags");
        const privateGrid = document.getElementById("sevaPrivateServicesGrid");
        const privateSection = document.getElementById("privateServicesSection");

        if (!grid) return;

        const lang = getActiveLanguage();
        const filtered = getFilteredServices();

        // Update Count Badge
        if (countBadge) {
            countBadge.textContent = `${filtered.length} Verified ${filtered.length === 1 ? "Service" : "Services"}`;
        }

        // Render Active Filter Tags
        if (activeFilterTags) {
            const tags = [];
            if (state.searchQuery) tags.push({ type: "search", label: `Search: "${state.searchQuery}"` });
            if (state.activeGovLevel !== "all") tags.push({ type: "govLevel", label: `Level: ${state.activeGovLevel}` });
            if (state.activeCategory) {
                const dataStore = getDataStore();
                const catObj = dataStore ? dataStore.getCategories().find((c) => c.id === state.activeCategory) : null;
                const catLabel = catObj ? getI18nText(catObj.name, lang) : state.activeCategory;
                tags.push({ type: "category", label: `Category: ${catLabel}` });
            }

            if (tags.length > 0) {
                activeFilterTags.style.display = "flex";
                activeFilterTags.innerHTML = `
                    <span class="active-filter-title">Active Filters:</span>
                    ${tags.map((t) => `
                        <button type="button" class="filter-tag-pill" data-filter-type="${t.type}">
                            <span>${escapeHTML(t.label)}</span>
                            <i data-lucide="x" class="tag-close-icon" aria-hidden="true"></i>
                        </button>
                    `).join("")}
                    <button type="button" class="btn-clear-all-filters" id="btnClearActiveFilters">Clear All</button>
                `;

                activeFilterTags.querySelectorAll(".filter-tag-pill").forEach((pill) => {
                    pill.addEventListener("click", () => {
                        const type = pill.getAttribute("data-filter-type");
                        if (type === "search") {
                            state.searchQuery = "";
                            const input = document.getElementById("sevaSearchInput");
                            if (input) input.value = "";
                            const clearBtn = document.getElementById("btnSevaClearSearch");
                            if (clearBtn) clearBtn.style.display = "none";
                        } else if (type === "category") {
                            state.activeCategory = null;
                            syncFilterButtons("category", "all");
                            syncTaskCards(null);
                        } else if (type === "govLevel") {
                            state.activeGovLevel = "all";
                            syncFilterButtons("govLevel", "all");
                        }
                        renderServicesGrid(false);
                    });
                });

                const clearBtn = document.getElementById("btnClearActiveFilters");
                if (clearBtn) {
                    clearBtn.addEventListener("click", resetAllFilters);
                }
            } else {
                activeFilterTags.style.display = "none";
                activeFilterTags.innerHTML = "";
            }
        }

        // Handle Empty State & Fallback Suggestions
        if (filtered.length === 0) {
            grid.innerHTML = "";
            if (emptyState) emptyState.style.display = "block";
            if (fallbackSection && fallbackCardsRow) {
                fallbackSection.style.display = "block";
                const dataStore = getDataStore();
                const popular = dataStore ? dataStore.getPopularServices().slice(0, 3) : [];
                fallbackCardsRow.innerHTML = popular.map((s) => createServiceCardHTML(s, lang)).join("");
                attachCardActions(fallbackCardsRow);
            }
            if (privateSection) privateSection.style.display = "none";
            return;
        }

        if (emptyState) emptyState.style.display = "none";
        if (fallbackSection) fallbackSection.style.display = "none";

        // Separate Government/Citizen services vs Private platforms
        const isFilteringPrivateOnly = state.activeGovLevel === "Private";
        const isFilteringGovOnly = state.activeGovLevel === "Central" || state.activeGovLevel === "State";

        let mainServices = filtered;
        let privateServices = [];

        if (!isFilteringPrivateOnly && !state.searchQuery) {
            mainServices = filtered.filter((s) => s.government_level !== "Private");
            privateServices = filtered.filter((s) => s.government_level === "Private");
        } else if (isFilteringPrivateOnly) {
            mainServices = [];
            privateServices = filtered;
        }

        // Render Main Grid
        grid.innerHTML = mainServices.map((s) => createServiceCardHTML(s, lang)).join("");
        attachCardActions(grid);

        // Render Private Services Section
        if (privateGrid && privateSection) {
            if (privateServices.length > 0 && !isFilteringGovOnly) {
                privateSection.style.display = "block";
                privateGrid.innerHTML = privateServices.map((s) => createServiceCardHTML(s, lang)).join("");
                attachCardActions(privateGrid);
            } else {
                privateSection.style.display = "none";
                privateGrid.innerHTML = "";
            }
        }

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }

        if (triggerHighlight) {
            highlightServicesCards();
        }
    }

    // Highlight Matching Service Cards (Slow 3-second 3-times blink animation)
    let highlightCardsTimeout = null;
    function highlightServicesCards() {
        clearTimeout(highlightCardsTimeout);
        const cards = document.querySelectorAll("#sevaServicesGrid .seva-service-card");
        if (!cards || cards.length === 0) return;

        // Highlight up to first 6 matching cards in the grid
        const count = Math.min(cards.length, 6);
        for (let i = 0; i < count; i++) {
            const card = cards[i];
            card.classList.remove("card-blink-highlight");
            // Force DOM reflow to cleanly restart the 3s 3-blink keyframe animation
            void card.offsetWidth;
            card.classList.add("card-blink-highlight");
        }

        // Clean up animation class after 3050ms (3 complete slow pulses)
        highlightCardsTimeout = setTimeout(() => {
            cards.forEach((card) => {
                card.classList.remove("card-blink-highlight");
            });
        }, 3050);
    }

    // Attach click handlers to cards inside any container
    function attachCardActions(container) {
        if (!container) return;

        // View Guide & Checklist button
        container.querySelectorAll(".btn-card-guide").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const sId = btn.getAttribute("data-service-id");
                if (sId) openServiceModal(sId);
            });
        });

        // Request Help button
        container.querySelectorAll(".btn-card-assist").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const sName = btn.getAttribute("data-service-name") || "General Digital Assistance";
                openAssistanceModal(sName);
            });
        });

        // Entire Card click opens modal
        container.querySelectorAll(".seva-service-card").forEach((card) => {
            card.addEventListener("click", (e) => {
                if (e.target.closest("a") || e.target.closest(".btn-card-assist") || e.target.closest(".btn-card-guide")) {
                    return;
                }
                const sId = card.getAttribute("data-service-id");
                if (sId) openServiceModal(sId);
            });
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    if (e.target.closest("a") || e.target.closest(".btn-card-assist")) return;
                    e.preventDefault();
                    const sId = card.getAttribute("data-service-id");
                    if (sId) openServiceModal(sId);
                }
            });
        });
    }

    function syncFilterButtons(filterType, activeVal) {
        document.querySelectorAll(".digital-filter-bar .seva-filter-pill").forEach((btn) => {
            const fType = btn.getAttribute("data-filter-type");
            const val = btn.getAttribute("data-value");
            if (fType === filterType && val === activeVal) {
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");
            } else if (fType === filterType || (activeVal === "all" && btn.getAttribute("data-value") === "all")) {
                btn.classList.toggle("active", btn.getAttribute("data-value") === "all");
                btn.setAttribute("aria-selected", btn.getAttribute("data-value") === "all" ? "true" : "false");
            }
        });
    }

    function syncTaskCards(activeCat) {
        document.querySelectorAll("#sevaTaskGrid .seva-task-card").forEach((card) => {
            const cat = card.getAttribute("data-category");
            const isMatch = Boolean(activeCat && (cat === activeCat));
            card.classList.toggle("active", isMatch);
            card.setAttribute("aria-selected", isMatch ? "true" : "false");
        });
    }

    function resetAllFilters() {
        state.searchQuery = "";
        state.activeCategory = null;
        state.activeGovLevel = "all";

        const input = document.getElementById("sevaSearchInput");
        if (input) input.value = "";

        const clearBtn = document.getElementById("btnSevaClearSearch");
        if (clearBtn) clearBtn.style.display = "none";

        document.querySelectorAll(".digital-filter-bar .seva-filter-pill").forEach((btn) => {
            const isAll = (btn.getAttribute("data-value") || "all") === "all";
            btn.classList.toggle("active", isAll);
            btn.setAttribute("aria-selected", isAll ? "true" : "false");
        });

        syncTaskCards(null);
        renderServicesGrid(false);
    }

    function scrollServicesIntoView() {
        const el = document.getElementById("sevaServicesGrid");
        if (el) {
            const firstCard = el.querySelector(".seva-service-card") || el;
            const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;
            const targetY = firstCard.getBoundingClientRect().top + window.pageYOffset - headerHeight - 25;
            window.scrollTo({
                top: Math.max(0, targetY),
                behavior: "smooth"
            });
            setTimeout(() => {
                highlightServicesCards();
            }, 120);
        }
    }

    // -------------------------------------------------------------------------
    // 5. PROGRESSIVE DISCLOSURE SERVICE DETAIL MODAL
    // -------------------------------------------------------------------------
    function openServiceModal(serviceId) {
        const dataStore = getDataStore();
        if (!dataStore) return;
        const service = dataStore.getServiceById(serviceId);
        if (!service) return;

        const lang = getActiveLanguage();
        const modal = document.getElementById("sevaDetailModal");
        if (!modal) return;

        const titleEl = document.getElementById("sevaModalTitle");
        const bodyEl = document.getElementById("sevaModalBody");

        const name = getI18nText(service.service_name, lang);
        const desc = getI18nText(service.short_description, lang);
        const catName = getI18nText(service.category_name, lang);
        const feeText = getI18nText(service.application_fee, lang);
        const isGov = service.government_level !== "Private";

        const eligibilities = service.eligibility ? service.eligibility[lang] || service.eligibility["en"] || [] : [];
        const documents = service.required_documents ? service.required_documents[lang] || service.required_documents["en"] || [] : [];
        const steps = service.process_steps ? service.process_steps[lang] || service.process_steps["en"] || [] : [];
        const benefits = service.benefits ? service.benefits[lang] || service.benefits["en"] || [] : [];
        const scamWarn = getI18nText(service.scam_warning, lang);
        const xestusHelp = service.xestus_assistance ? getI18nText(service.xestus_assistance, lang) : "XESTUS provides independent document preparation, formatting, scanning, and official portal navigation guidance. All final submissions occur on authentic official servers.";

        const applyUrl = service.official_apply_url || "";
        const homeUrl = service.official_homepage || "";
        const statusUrl = service.official_status_url || "";
        const primaryUrl = applyUrl || homeUrl || "";

        if (titleEl) {
            titleEl.textContent = name;
        }

        const sGov = String(service.government_level || "").toLowerCase();
        const sState = String(service.state || "").toLowerCase();
        const isWB = sGov === "west bengal" || sGov === "state" || sGov === "wb" || sState === "west bengal";
        const isPrivate = sGov === "private";

        let modalBadgeClass = "badge-wb";
        let modalBadgeText = (lang === "bn") ? "🟢 পশ্চিমবঙ্গ সরকার" : (lang === "hi") ? "🟢 पश्चिम बंगाल सरकार" : "🟢 West Bengal Govt";

        if (isPrivate) {
            modalBadgeClass = "badge-private";
            modalBadgeText = (lang === "bn") ? "🔵 প্রাইভেট প্ল্যাটফর্ম" : (lang === "hi") ? "🔵 प्राइवेट प्लेटफॉर्म" : "🔵 Private Platform";
        } else if (!isWB) {
            modalBadgeClass = "badge-central";
            modalBadgeText = (lang === "bn") ? "🟢 কেন্দ্রীয় সরকার" : (lang === "hi") ? "🟢 केंद्र सरकार" : "🟢 Central Govt";
        }

        if (bodyEl) {
            bodyEl.innerHTML = `
                <div class="modal-detail-header">
                    <div class="modal-meta-row">
                        <span class="seva-authority-pill ${modalBadgeClass}">
                            ${escapeHTML(modalBadgeText)}
                        </span>
                        <span class="seva-category-tag">${escapeHTML(catName)}</span>
                        ${getVerificationBadgeHTML(service.verification_status, service.last_verified)}
                    </div>
                    <div class="modal-auth-box">
                        <i data-lucide="landmark" class="modal-auth-icon"></i>
                        <div>
                            <span class="auth-box-label">Governing Statutory Authority / Entity:</span>
                            <h4 class="auth-box-name">${escapeHTML(service.authority)}</h4>
                        </div>
                    </div>
                    <p class="modal-desc-lead">${escapeHTML(desc)}</p>
                </div>

                <!-- Verified Action Links Bar -->
                <div class="modal-action-bar">
                    ${primaryUrl ? `
                        <a href="${escapeHTML(primaryUrl)}" target="_blank" rel="noopener noreferrer" class="btn-modal-action btn-apply-primary">
                            <i data-lucide="external-link"></i>
                            <span>${lang === 'bn' ? 'অফিসিয়াল পোর্টালে সরাসরি যান' : lang === 'hi' ? 'सीधे आधिकारिक पोर्टल पर जाएं' : 'Open Verified Official Portal'}</span>
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    ` : ""}
                    ${statusUrl ? `
                        <a href="${escapeHTML(statusUrl)}" target="_blank" rel="noopener noreferrer" class="btn-modal-action btn-status-sec">
                            <i data-lucide="activity"></i>
                            <span>Track Status</span>
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    ` : ""}
                    <button type="button" class="btn-modal-action btn-assist-modal-trigger" id="btnModalTriggerAssist">
                        <i data-lucide="handshake"></i>
                        <span>Request XESTUS Help</span>
                    </button>
                </div>

                <!-- Progressive Disclosure Tab Navigation -->
                <div class="modal-tab-nav" role="tablist">
                    <button type="button" class="modal-tab-btn active" data-tab="tab-overview" role="tab" aria-selected="true">
                        <i data-lucide="info"></i>
                        <span>Overview &amp; Eligibility</span>
                    </button>
                    <button type="button" class="modal-tab-btn" data-tab="tab-docs" role="tab" aria-selected="false">
                        <i data-lucide="file-check-2"></i>
                        <span>Document Checklist</span>
                    </button>
                    <button type="button" class="modal-tab-btn" data-tab="tab-steps" role="tab" aria-selected="false">
                        <i data-lucide="list-ordered"></i>
                        <span>Process Steps</span>
                    </button>
                    <button type="button" class="modal-tab-btn" data-tab="tab-xestus" role="tab" aria-selected="false">
                        <i data-lucide="sparkles"></i>
                        <span>XESTUS Support</span>
                    </button>
                    <button type="button" class="modal-tab-btn" data-tab="tab-scam" role="tab" aria-selected="false">
                        <i data-lucide="shield-alert"></i>
                        <span>Security Advisory</span>
                    </button>
                </div>

                <!-- Tab Panes -->
                <div class="modal-tab-content">
                    <!-- Tab 1: Overview & Eligibility -->
                    <div class="modal-tab-pane active" id="tab-overview" role="tabpanel">
                        ${eligibilities.length > 0 ? `
                            <div class="modal-pane-section">
                                <h4 class="modal-card-title"><i data-lucide="user-check"></i> ${lang === 'bn' ? 'যোগ্যতার মানদণ্ড (Eligibility)' : lang === 'hi' ? 'पात्रता मानदंड (Eligibility)' : 'Eligibility Criteria'}</h4>
                                <ul class="modal-list-checked">
                                    ${eligibilities.map((e) => `<li><i data-lucide="check"></i> <span>${escapeHTML(e)}</span></li>`).join("")}
                                </ul>
                            </div>
                        ` : ''}

                        ${benefits.length > 0 ? `
                            <div class="modal-pane-section">
                                <h4 class="modal-card-title"><i data-lucide="check-circle-2"></i> ${lang === 'bn' ? 'সুবিধা ও সেবা পরিধি' : lang === 'hi' ? 'लाभ एवं सेवा दायरा' : 'Scope & Key Benefits'}</h4>
                                <ul class="modal-list-checked">
                                    ${benefits.map((b) => `<li><i data-lucide="check"></i> <span>${escapeHTML(b)}</span></li>`).join("")}
                                </ul>
                            </div>
                        ` : ''}

                        <div class="modal-contact-row">
                            <div class="contact-pill">
                                <span class="cp-label">Official Fee:</span>
                                <span class="cp-val">${escapeHTML(feeText)}</span>
                            </div>
                            <div class="contact-pill">
                                <span class="cp-label">Helpline:</span>
                                <span class="cp-val">${escapeHTML(service.official_helpline || "Toll-Free 1800 / State Call Center")}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tab 2: Document Checklist -->
                    <div class="modal-tab-pane" id="tab-docs" role="tabpanel">
                        <div class="modal-pane-section">
                            <h4 class="modal-card-title"><i data-lucide="file-check-2"></i> ${lang === 'bn' ? 'প্রয়োজনীয় কাগজপত্র চেকলিস্ট' : lang === 'hi' ? 'आवश्यक दस्तावेज चेकलिस्ट' : 'Mandatory Document Checklist'}</h4>
                            <ul class="modal-list-docs">
                                ${documents.map((d) => `<li><i data-lucide="file-text"></i> <span>${escapeHTML(d)}</span></li>`).join("")}
                            </ul>
                            <div class="modal-disclaimer-box">
                                <i data-lucide="info"></i>
                                <span>Always keep clear scanned copies (PDF / JPEG under 200KB) ready before beginning application on the official portal to prevent session timeouts.</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tab 3: Process Steps -->
                    <div class="modal-tab-pane" id="tab-steps" role="tabpanel">
                        <div class="modal-pane-section">
                            <h4 class="modal-card-title"><i data-lucide="list-ordered"></i> ${lang === 'bn' ? 'ধাপে ধাপে আবেদন পদ্ধতি' : lang === 'hi' ? 'चरण-दर-चरण आवेदन प्रक्रिया' : 'Step-by-Step Official Workflow'}</h4>
                            <ol class="modal-steps-timeline">
                                ${steps.map((st, idx) => `
                                    <li class="step-item">
                                        <div class="step-num">${idx + 1}</div>
                                        <div class="step-content">
                                            <p>${escapeHTML(st)}</p>
                                        </div>
                                    </li>
                                `).join("")}
                            </ol>
                        </div>
                    </div>

                    <!-- Tab 4: What XESTUS Can Help With -->
                    <div class="modal-tab-pane" id="tab-xestus" role="tabpanel">
                        <div class="modal-pane-section">
                            <h4 class="modal-card-title"><i data-lucide="sparkles"></i> Independent XESTUS Guidance Scope</h4>
                            <p class="modal-guidance-text">${escapeHTML(xestusHelp)}</p>
                            
                            <div class="xestus-support-grid">
                                <div class="support-feature-card">
                                    <i data-lucide="file-edit"></i>
                                    <h5>Checklist &amp; Typing</h5>
                                    <p>Assistance in preparing documents, photo compression, and accurate form typing.</p>
                                </div>
                                <div class="support-feature-card">
                                    <i data-lucide="compass"></i>
                                    <h5>Portal Navigation</h5>
                                    <p>Guided navigation through authentic statutory links to ensure accurate submission.</p>
                                </div>
                                <div class="support-feature-card">
                                    <i data-lucide="lock"></i>
                                    <h5>Zero Credential Guarantee</h5>
                                    <p>We never collect your passwords, OTP, bank PINs, or financial secrets.</p>
                                </div>
                            </div>

                            <button type="button" class="btn-primary btn-modal-request-support" id="btnPaneRequestSupport">
                                <i data-lucide="handshake"></i>
                                <span>Request XESTUS Support for ${escapeHTML(name)}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Tab 5: Security & Scam Warnings -->
                    <div class="modal-tab-pane" id="tab-scam" role="tabpanel">
                        <div class="modal-pane-section">
                            <div class="modal-scam-alert">
                                <div class="scam-alert-header">
                                    <i data-lucide="alert-triangle"></i>
                                    <h4>Official Security &amp; Anti-Fraud Advisory</h4>
                                </div>
                                <p>${escapeHTML(scamWarn || "Always verify you are on the authentic official government portal (.gov.in or .nic.in).")}</p>
                                <span class="scam-callout">XESTUS is an independent discovery and guidance platform and will NEVER ask for your OTP, UPI PIN, passwords, or CVV.</span>
                            </div>
                            <div class="scam-actions-strip">
                                <span>Report cyber fraud immediately: <strong>1930</strong> (National Cybercrime Reporting Portal)</span>
                                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" class="btn-cyber-link">
                                    <span>cybercrime.gov.in ↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Tab Switching Listeners
            bodyEl.querySelectorAll(".modal-tab-btn").forEach((tabBtn) => {
                tabBtn.addEventListener("click", () => {
                    const targetTab = tabBtn.getAttribute("data-tab");
                    bodyEl.querySelectorAll(".modal-tab-btn").forEach((b) => {
                        b.classList.toggle("active", b === tabBtn);
                        b.setAttribute("aria-selected", b === tabBtn ? "true" : "false");
                    });
                    bodyEl.querySelectorAll(".modal-tab-pane").forEach((pane) => {
                        pane.classList.toggle("active", pane.id === targetTab);
                    });
                });
            });

            // Button to trigger assistance modal from inside service modal
            const btnModalAssist = bodyEl.querySelector("#btnModalTriggerAssist");
            if (btnModalAssist) {
                btnModalAssist.addEventListener("click", () => {
                    closeModal(modal);
                    openAssistanceModal(name);
                });
            }
            const btnPaneSupport = bodyEl.querySelector("#btnPaneRequestSupport");
            if (btnPaneSupport) {
                btnPaneSupport.addEventListener("click", () => {
                    closeModal(modal);
                    openAssistanceModal(name);
                });
            }
        }

        // Open Modal
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        state.activeModal = modal;

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    // -------------------------------------------------------------------------
    // 6. XESTUS ASSISTED INQUIRY MODAL CONTROLLER
    // -------------------------------------------------------------------------
    function openAssistanceModal(serviceName) {
        const modal = document.getElementById("sevaAssistModal");
        if (!modal) return;

        const sNameInput = document.getElementById("assistServiceName");
        if (sNameInput) {
            sNameInput.value = serviceName || "General Digital Service Assistance";
        }

        const feedback = document.getElementById("assistSubmitFeedback");
        if (feedback) feedback.style.display = "none";

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        state.activeModal = modal;

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function initAssistanceForm() {
        const form = document.getElementById("sevaAssistForm");
        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const serviceName = document.getElementById("assistServiceName")?.value || "";
            const name = document.getElementById("assistApplicantName")?.value.trim() || "";
            const contact = document.getElementById("assistContactInfo")?.value.trim() || "";
            const helpType = document.getElementById("assistHelpType")?.value || "general";
            const notes = document.getElementById("assistNotes")?.value.trim() || "";
            const feedback = document.getElementById("assistSubmitFeedback");

            if (!name || !contact) {
                if (feedback) {
                    feedback.style.display = "block";
                    feedback.className = "assist-feedback error";
                    feedback.textContent = "Please provide your name and contact info (mobile or email).";
                }
                return;
            }

            if (feedback) {
                feedback.style.display = "block";
                feedback.className = "assist-feedback success";
                feedback.innerHTML = `
                    <div class="feedback-success-box">
                        <i data-lucide="check-circle"></i>
                        <div>
                            <strong>Request Received!</strong>
                            <p>Thank you ${escapeHTML(name)}. Our team has logged your guidance request for <em>${escapeHTML(serviceName)}</em>. We will connect with you shortly on ${escapeHTML(contact)} with checklist and document preparation guidance.</p>
                            <small>Remember: XESTUS will never ask for your passwords, OTP, bank PIN, or payment details.</small>
                        </div>
                    </div>
                `;
                if (window.lucide && typeof window.lucide.createIcons === "function") {
                    window.lucide.createIcons();
                }
            }

            form.reset();
            const sNameInput = document.getElementById("assistServiceName");
            if (sNameInput) sNameInput.value = serviceName;
        });
    }

    // -------------------------------------------------------------------------
    // 7. MASTER 59-CATEGORY DIRECTORY MODAL
    // -------------------------------------------------------------------------
    function openCategoryModal() {
        const modal = document.getElementById("sevaCategoryModal");
        if (!modal) return;

        const lang = getActiveLanguage();
        const grid = document.getElementById("sevaCategoryModalGrid");
        const searchInput = document.getElementById("sevaCategorySearchInput");
        const dataStore = getDataStore();
        const allCategories = dataStore ? dataStore.getCategories() : [];

        function renderCatModalItems(filterText = "") {
            if (!grid) return;
            const norm = normalizeText(filterText);
            const filtered = allCategories.filter((cat) => {
                if (!norm) return true;
                const name = normalizeText(getI18nText(cat.name, lang));
                return name.includes(norm) || cat.id.includes(norm);
            });

            grid.innerHTML = filtered
                .map((cat) => {
                    const name = getI18nText(cat.name, lang);
                    return `
                        <button type="button" class="category-modal-card" data-category-id="${cat.id}">
                            <div class="cat-modal-icon"><i data-lucide="${cat.icon || 'folder'}"></i></div>
                            <div class="cat-modal-info">
                                <h5>${escapeHTML(name)}</h5>
                                <span>${escapeHTML(cat.count)}</span>
                            </div>
                        </button>
                    `;
                })
                .join("");

            grid.querySelectorAll(".category-modal-card").forEach((btn) => {
                btn.addEventListener("click", () => {
                    const cId = btn.getAttribute("data-category-id");
                    state.activeCategory = cId;
                    closeModal(modal);
                    syncFilterButtons("category", cId);
                    renderServicesGrid();
                });
            });

            if (window.lucide && typeof window.lucide.createIcons === "function") {
                window.lucide.createIcons();
            }
        }

        renderCatModalItems();

        if (searchInput) {
            searchInput.value = "";
            searchInput.oninput = (e) => renderCatModalItems(e.target.value);
        }

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        state.activeModal = modal;
    }

    // -------------------------------------------------------------------------
    // 8. SCAM DEFENSE & CYBER PROTECTION HUB MODAL
    // -------------------------------------------------------------------------
    function openScamModal() {
        const modal = document.getElementById("sevaScamModal");
        if (!modal) return;

        const lang = getActiveLanguage();
        const bodyEl = document.getElementById("sevaScamModalBody");
        const list = document.getElementById("scamAlertList");
        const dataStore = getDataStore();
        const alerts = dataStore ? dataStore.getScamAlerts() : [];

        if (bodyEl) {
            bodyEl.innerHTML = `
                <div class="scam-modal-lead">
                    <div class="scam-emergency-banner">
                        <div class="emergency-icon-wrap"><i data-lucide="shield-alert"></i></div>
                        <div class="emergency-info">
                            <h3>National Cyber Crime Helpline: 1930</h3>
                            <p>If you have lost money to online fraud within the last 24 hours, dial <strong>1930</strong> immediately to freeze stolen funds.</p>
                            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" class="btn-cyber-report">
                                <span>File Formal Complaint on Cybercrime.gov.in</span>
                                <i data-lucide="external-link"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <h4 class="scam-alerts-heading">High-Risk Fraud Types &amp; Prevention Rules</h4>
                <div class="scam-alerts-list">
                    ${alerts.map((a) => {
                        const title = getI18nText(a.title, lang);
                        const desc = getI18nText(a.description, lang);
                        const rule = getI18nText(a.golden_rule, lang);
                        return `
                            <div class="scam-alert-item">
                                <div class="scam-item-top">
                                    <span class="scam-pill-badge">${escapeHTML(a.badge)}</span>
                                    <h4>${escapeHTML(title)}</h4>
                                </div>
                                <p class="scam-item-desc">${escapeHTML(desc)}</p>
                                <div class="scam-item-rule">
                                    <i data-lucide="check-shield"></i>
                                    <span><strong>Golden Rule:</strong> ${escapeHTML(rule)}</span>
                                </div>
                            </div>
                        `;
                    }).join("")}
                </div>
            `;
        }

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        state.activeModal = modal;

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function closeModal(modal) {
        if (!modal) modal = state.activeModal;
        if (!modal) return;

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        state.activeModal = null;
    }

    // -------------------------------------------------------------------------
    // 9. EVENT LISTENERS & INITIALIZATION
    // -------------------------------------------------------------------------
    function initEvents() {
        // Search Input with Debounce & Clear Button
        const searchInput = document.getElementById("sevaSearchInput");
        const clearSearchBtn = document.getElementById("btnSevaClearSearch");

        if (searchInput) {
            let debounceTimer = null;
            searchInput.addEventListener("input", (e) => {
                const val = e.target.value.trim();
                if (clearSearchBtn) {
                    clearSearchBtn.style.display = val.length > 0 ? "flex" : "none";
                }
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    state.searchQuery = val;
                    if (val.length > 0) {
                        // Searching clears restrictive category filter to search full database
                        state.activeCategory = null;
                        state.activeGovLevel = "all";
                        syncFilterButtons("category", "all");
                        syncTaskCards(null);
                    }
                    renderServicesGrid(Boolean(val.length > 0));
                    if (val.length > 0) {
                        scrollServicesIntoView();
                    }
                }, 200);
            });

            // Enter key trigger for immediate search, scroll, and 3-second 3-pulse blink highlight
            searchInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    clearTimeout(debounceTimer);
                    const val = searchInput.value.trim();
                    state.searchQuery = val;
                    if (val.length > 0) {
                        state.activeCategory = null;
                        state.activeGovLevel = "all";
                        syncFilterButtons("category", "all");
                        syncTaskCards(null);
                    }
                    renderServicesGrid(true);
                    scrollServicesIntoView();
                }
            });
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener("click", () => {
                if (searchInput) searchInput.value = "";
                clearSearchBtn.style.display = "none";
                state.searchQuery = "";
                renderServicesGrid(false);
            });
        }

        // Search Suggestion Chips
        document.querySelectorAll(".seva-search-chips .search-chip-btn").forEach((chip) => {
            chip.addEventListener("click", () => {
                const q = chip.getAttribute("data-query") || "";
                if (searchInput) {
                    searchInput.value = q;
                    if (clearSearchBtn) clearSearchBtn.style.display = "flex";
                }
                state.searchQuery = q;
                state.activeCategory = null;
                state.activeGovLevel = "all";
                syncFilterButtons("category", "all");
                syncTaskCards(null);
                renderServicesGrid(true);
                scrollServicesIntoView();
            });
        });

        // 12 Task-First Discovery Cards ("I NEED HELP WITH...")
        document.querySelectorAll("#sevaTaskGrid .seva-task-card").forEach((card) => {
            card.addEventListener("click", () => {
                const cat = card.getAttribute("data-category");
                if (cat) {
                    state.activeCategory = cat;
                    state.activeGovLevel = "all";
                    syncFilterButtons("category", cat);
                    syncTaskCards(cat);
                    renderServicesGrid(true);
                    scrollServicesIntoView();
                }
            });
        });

        // Hierarchical Filter Bar Buttons
        document.querySelectorAll(".digital-filter-bar .seva-filter-pill").forEach((btn) => {
            btn.addEventListener("click", () => {
                const filterType = btn.getAttribute("data-filter-type");
                const val = btn.getAttribute("data-value");

                if (filterType === "all") {
                    resetAllFilters();
                } else if (filterType === "govLevel") {
                    state.activeGovLevel = val;
                    state.activeCategory = null;
                    syncFilterButtons("govLevel", val);
                    syncTaskCards(null);
                    renderServicesGrid(true);
                    scrollServicesIntoView();
                } else if (filterType === "category") {
                    state.activeCategory = val;
                    state.activeGovLevel = "all";
                    syncFilterButtons("category", val);
                    syncTaskCards(val);
                    renderServicesGrid(true);
                    scrollServicesIntoView();
                } else if (filterType === "master") {
                    const masterSection = document.getElementById("sevaMasterGatewaysSection");
                    if (masterSection) {
                        masterSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }
            });
        });

        // Trigger All Categories Modal
        const btnAllCategories = document.getElementById("btnViewAllCategories");
        if (btnAllCategories) {
            btnAllCategories.addEventListener("click", openCategoryModal);
        }

        // Trigger Scam Protection Modal
        const btnOpenScamCenter = document.getElementById("btnOpenScamCenter");
        if (btnOpenScamCenter) {
            btnOpenScamCenter.addEventListener("click", openScamModal);
        }

        // Trigger Assistance Modal from Digital Trust Box
        const btnOpenAssistance = document.getElementById("btnOpenAssistanceModal");
        if (btnOpenAssistance) {
            btnOpenAssistance.addEventListener("click", () => {
                const sSelect = btnOpenAssistance.getAttribute("data-service-select") || "General Digital Assistance";
                openAssistanceModal(sSelect);
            });
        }

        // Reset Button inside Empty State
        const btnResetFilters = document.getElementById("btnClearAllFilters");
        if (btnResetFilters) {
            btnResetFilters.addEventListener("click", resetAllFilters);
        }

        // Initialize Assistance Form Handler
        initAssistanceForm();

        // Modal Close Buttons
        document.querySelectorAll(".seva-modal-close-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const modal = btn.closest(".seva-modal") || state.activeModal;
                if (modal) closeModal(modal);
            });
        });

        // Modal Backdrop Click
        document.querySelectorAll(".seva-modal").forEach((modal) => {
            modal.addEventListener("click", (e) => {
                if (e.target === modal || e.target.classList.contains("case-study-backdrop")) {
                    closeModal(modal);
                }
            });
        });

        // Keyboard Escape Key Handler
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && state.activeModal) {
                closeModal(state.activeModal);
            }
        });

        // Language Changes Listener
        const syncLanguage = () => {
            renderMasterPortals();
            renderServicesGrid(false);
        };

        window.addEventListener("xestus:language-changed", syncLanguage);
        window.addEventListener("storage", (e) => {
            if (e.key === "xestus_user_language") {
                syncLanguage();
            }
        });

        let lastObservedLang = getActiveLanguage();
        setInterval(() => {
            const current = getActiveLanguage();
            if (current !== lastObservedLang) {
                lastObservedLang = current;
                syncLanguage();
            }
        }, 1000);
    }

    // -------------------------------------------------------------------------
    // 10. MAIN ENTRYPOINT
    // -------------------------------------------------------------------------
    function initDigitalSevaHub(retryCount = 0) {
        const dataStore = getDataStore();
        if (!dataStore) {
            if (retryCount < 30) {
                setTimeout(() => initDigitalSevaHub(retryCount + 1), 50);
            }
            return;
        }
        renderMasterPortals();
        renderServicesGrid(false);
        initEvents();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDigitalSevaHub);
    } else {
        initDigitalSevaHub();
    }

    // Expose controller methods globally
    window.XESTUS_DIGITAL_SEVA = {
        openService: openServiceModal,
        openCategories: openCategoryModal,
        openScamCenter: openScamModal,
        openAssistance: openAssistanceModal,
        search: (query) => {
            state.searchQuery = query;
            const input = document.getElementById("sevaSearchInput");
            if (input) input.value = query;
            const clearBtn = document.getElementById("btnSevaClearSearch");
            if (clearBtn) clearBtn.style.display = query ? "flex" : "none";
            renderServicesGrid(true);
            scrollServicesIntoView();
        },
        highlightCards: highlightServicesCards,
        reset: resetAllFilters
    };

})();
