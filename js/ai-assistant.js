/**
 * XESTUS AI Assistant & Floating Follow Widget
 * Version: 1.0.0
 * 
 * Features:
 * - Unified floating widget container (.xestus-floating-assistant) anchored in bottom-right viewport.
 * - Follow button permanently attached directly ABOVE the AI assistant launcher.
 * - Grounded knowledge base covering all XESTUS services, Digital Seva, projects, products, lab, FAQ, contact.
 * - Actionable responses with deep-link navigation buttons to page sections (#digital-services, #services, #portfolio, etc.).
 * - Chat history, typing indicator, auto-expanding textarea, Enter to send, Shift+Enter for newline.
 * - Provider abstraction for future remote LLM backend connectivity without UI rewrite.
 * - 100% Trilingual & 3-Theme compatible (Day, Night, Eye Protection).
 */

"use strict";

(function () {
    // =========================================================================
    // 1. KNOWLEDGE BASE & INTENT RETRIEVAL MESH
    // =========================================================================
    const xestusKnowledgeBase = {
        about: {
            keywords: ["about", "what is xestus", "who is xestus", "company", "overview", "who are you", "mission", "vision", "origin"],
            title: "About XESTUS",
            summary: "XESTUS is an enterprise AI software engineering and autonomous systems company. We design autonomous agent swarms, Model Context Protocol (MCP) integrations, modern web architectures, and mission-critical enterprise workflow automations, while also providing practical Digital Seva assistance to ordinary citizens.",
            actions: [
                { label: "Explore About Section →", target: "#about" },
                { label: "View Innovation Lab →", target: "#lab" }
            ]
        },
        services: {
            keywords: ["services", "capabilities", "what do you provide", "what do you do", "solutions", "offerings", "ai software", "automation", "web development", "cloud"],
            title: "XESTUS Core Services",
            summary: "XESTUS delivers 4 primary engineering capabilities:\n1. **AI Software**: Custom LLMs, agent swarms, LangGraph DAGs, and RAG search.\n2. **Workflow Automation**: High-throughput n8n, Make, and webhook integration pipelines.\n3. **Web Platforms**: High-performance, lightweight, SEO-optimized web applications.\n4. **Cloud Infrastructure**: Scalable containerized microservices and automated CI/CD.",
            actions: [
                { label: "Explore Core Services →", target: "#services" },
                { label: "Start a Consultation →", target: "#contact" }
            ]
        },
        digitalSeva: {
            keywords: ["digital seva", "digital help", "form filling", "admission", "scholarship", "exam", "admissions", "government portal", "citizen", "ration", "aadhaar", "pan", "passport", "driving licence", "parivahan", "edistrict", "banglarbhumi", "svmcm", "oasis", "nsp", "appointments", "pdf help", "document resize"],
            title: "XESTUS Digital Seva Hub",
            summary: "XESTUS Digital Help is a practical, affordable digital assistance service for ordinary citizens, students, and job seekers. We help with:\n• Online job & exam applications (error-free data validation)\n• School, college & university admissions counseling\n• Government citizen portals (e-District, Ration, Land records, Utility bills)\n• National & State scholarships (SVMCM, Oasis, NSP)\n• Document calibration (exact KB/MB sizing, DPI photo/signature formatting)\n• Online appointments (Passport Seva, Parivahan driving slots, hospital OPDs).",
            actions: [
                { label: "Open Digital Seva Hub →", target: "#digital-services" },
                { label: "Request Form Assistance →", target: "#contact" }
            ]
        },
        projects: {
            keywords: ["projects", "case studies", "portfolio", "work", "past work", "demos", "x-agent", "neurocode", "omnichannel", "defense intel", "sentinel"],
            title: "Featured Projects & Architectures",
            summary: "Key deployed architectures engineered by XESTUS:\n• **X-Agent Swarm Orchestrator**: Multi-agent consensus pipeline coordinating 12 parallel LLM workers.\n• **NeuroCode AI Assistant**: Context-aware developer productivity engine with AST code generation.\n• **Omnichannel Support Mesh**: Real-time multi-platform customer intelligence gateway.\n• **Defense Intelligence Feed**: High-security streaming telemetry and anomaly detection system.",
            actions: [
                { label: "View All Projects →", target: "#portfolio" },
                { label: "Technical Case Studies →", target: "#portfolio" }
            ]
        },
        products: {
            keywords: ["products", "product pipeline", "software products", "platforms", "cognimesh", "agentforge", "neuralflow"],
            title: "XESTUS Product Pipeline",
            summary: "Our proprietary software platforms currently in active engineering & deployment:\n• **XESTUS Sentinel**: Autonomous telemetry monitoring and security guardrails.\n• **CogniMesh**: Distributed vector memory mesh for enterprise RAG.\n• **AgentForge**: Low-code DAG builder for complex multi-agent workflows.\n• **NeuralFlow**: Ultra-fast asynchronous streaming API middleware.",
            actions: [
                { label: "View Product Pipeline →", target: "#products" },
                { label: "Request Early Access →", target: "#contact" }
            ]
        },
        lab: {
            keywords: ["innovation lab", "lab", "research", "mcp", "model context protocol", "edge computing", "r&d", "agent graph", "terminal"],
            title: "XESTUS Innovation Lab",
            summary: "Our experimental R&D lab focuses on cutting-edge autonomous protocols:\n• **Model Context Protocol (MCP)**: JSON-RPC tool discovery and secure agent mesh communication.\n• **LangGraph Swarm Orchestrator**: Cyclic DAG agent consensus systems.\n• **Edge Node Telemetry**: 24/7 low-power ARM64 Linux nodes serving private AI clusters with 99.98% uptime.",
            actions: [
                { label: "Inspect Innovation Lab →", target: "#lab" },
                { label: "View Architecture Roadmap →", target: "#roadmap" }
            ]
        },
        internships: {
            keywords: ["internship", "internships", "training", "students", "careers", "join", "jobs at xestus", "hiring", "apply for job"],
            title: "Internships & Training Programs",
            summary: "XESTUS offers rigorous, hands-on engineering internships for passionate students and developers in:\n• Full-Stack Web Architecture (Vanilla JS, React, Node.js, FastAPI)\n• Autonomous AI Agents & LangGraph Systems\n• Cloud Infrastructure & Edge Computing.\nWe focus on real-world production code, zero fluff, and direct mentorship.",
            actions: [
                { label: "Explore Opportunities →", target: "#roadmap" },
                { label: "Submit Application / Resume →", target: "#contact" }
            ]
        },
        founder: {
            keywords: ["founder", "ceo", "sudip", "sudip khatua", "who made xestus", "architect", "leadership"],
            title: "Founder & Product Architect",
            summary: "XESTUS was founded and is led by **Sudip Khatua**, Founder, CEO & Lead Product Architect. Sudip specializes in autonomous AI agents, distributed systems, high-performance web platforms, and human-centric digital empowerment.",
            actions: [
                { label: "Meet the Founder →", target: "#about" },
                { label: "Connect on LinkedIn ↗", url: "https://www.linkedin.com/in/sudip-khatua-16bb07354" }
            ]
        },
        tools: {
            keywords: ["tools", "xestus tools", "free tools", "json formatter", "jwt", "base64", "hash generator", "password generator", "uuid", "image tools", "pdf tools"],
            title: "XESTUS Developer & Utility Tools",
            summary: "XESTUS provides a suite of 100% private, client-side, zero-telemetry utilities:\n• Developer Tools (JSON Formatter, Base64 Encoder, JWT Decoder, UUID Generator)\n• Security & Cryptography (SHA256/MD5 Hash Calculator, Strong Password Generator)\n• Text & Productivity (Text Diff Inspector, Case Converters)\n• Document & Image Utilities (Client-side Image Resizer, PDF Format Estimator).",
            actions: [
                { label: "Explore XESTUS Tools Platform ↗", url: "/tools/" },
                { label: "View Digital Seva Tools →", target: "#digital-services" }
            ]
        },
        contact: {
            keywords: ["contact", "email", "phone", "touch", "hire", "consultation", "start a project", "quote", "pricing", "inquiry", "support", "help"],
            title: "Contact & Project Inquiries",
            summary: "You can initiate a consultation or request assistance directly through our verified channels:\n• **Direct Inquiry Form**: Pre-configure your service scope and submit below.\n• **Official Email**: xestus.office@gmail.com\n• **Response SLA**: Strict 24-hour response guarantee for all verified inquiries.",
            actions: [
                { label: "Go to Contact Form →", target: "#contact" },
                { label: "Start Project Scope Estimator →", target: "#estimator" }
            ]
        },
        faq: {
            keywords: ["faq", "questions", "frequently asked questions", "cost", "timeline", "privacy", "security"],
            title: "Frequently Asked Questions",
            summary: "Have questions about working with XESTUS? We provide transparent answers on:\n• Project turnaround timelines (typically 2–6 weeks)\n• Intellectual property ownership (100% client-owned)\n• Data privacy & non-disclosure agreements\n• Digital Seva assistance scope and pricing transparency.",
            actions: [
                { label: "View Full FAQ Section →", target: "#faq" }
            ]
        }
    };

    // =========================================================================
    // 2. CONVERSATION INTENT MATCHER
    // =========================================================================
    function matchIntent(query) {
        const cleanQuery = (query || "").toLowerCase().trim();
        if (!cleanQuery) return null;

        // Greetings
        if (/^(hi|hello|hey|namaste|good morning|good afternoon|good evening|holla|hii|helo)\b/i.test(cleanQuery)) {
            return {
                title: "Hello!",
                summary: "Hello! Welcome to XESTUS. I am your AI concierge. I can guide you through our engineering services, autonomous AI projects, product pipeline, or help you with our Digital Seva citizen assistance hub.",
                actions: [
                    { label: "Explore Core Services →", target: "#services" },
                    { label: "Open Digital Seva Hub →", target: "#digital-services" },
                    { label: "Contact XESTUS Team →", target: "#contact" }
                ]
            };
        }

        // Thanks
        if (/^(thanks|thank you|dhanyawad|shukriya|great|awesome|helpful)\b/i.test(cleanQuery)) {
            return {
                title: "You're very welcome!",
                summary: "Happy to help! Let me know if you need anything else regarding XESTUS engineering, software architecture, or digital assistance.",
                actions: [
                    { label: "Initiate Consultation →", target: "#contact" },
                    { label: "Explore Innovation Lab →", target: "#lab" }
                ]
            };
        }

        let bestMatch = null;
        let highestScore = 0;

        for (const [key, item] of Object.entries(xestusKnowledgeBase)) {
            let score = 0;
            for (const kw of item.keywords) {
                if (cleanQuery === kw) {
                    score += 15;
                } else if (cleanQuery.includes(kw)) {
                    score += kw.length > 4 ? 6 : 3;
                }
            }
            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        }

        if (highestScore >= 6 && bestMatch) {
            return bestMatch;
        }

        // Check if query is about official portal verification or safety
        if (/official\b|gov\.in|genuine|fake website|scam|verify website|হ্যাক|প্রতারণা/i.test(cleanQuery)) {
            return {
                title: "Official Portal Verification & Safety",
                summary: "All genuine Government of India and West Bengal citizen portals end in **.gov.in** or **.nic.in** with cryptographic HTTPS encryption. Never enter OTPs, bank passwords, or PINs on third-party websites or unofficial forms. For cyber fraud, call **1930** immediately.",
                actions: [
                    { label: "Open Scam Defense Hub ↗", target: "#digital-services" },
                    { label: "Explore Verified Gateways →", target: "#digital-services" }
                ]
            };
        }

        // Search Grounded Digital Seva Data Store
        if (window.XESTUS_DIGITAL_SEVA_DATA) {
            const services = window.XESTUS_DIGITAL_SEVA_DATA.getServices();
            let matchedService = null;
            let topSevaScore = 0;

            const qTokens = cleanQuery.split(/\s+/).filter(t => t.length > 1);

            for (const s of services) {
                let sScore = 0;
                const nameEn = (s.service_name.en || "").toLowerCase();
                const nameBn = (s.service_name.bn || "").toLowerCase();
                const intentTags = (s.intent_tags || []).map(t => t.toLowerCase());

                if (nameEn.includes(cleanQuery) || nameBn.includes(cleanQuery)) sScore += 50;
                if (intentTags.some(t => t.includes(cleanQuery) || cleanQuery.includes(t))) sScore += 40;

                for (const tok of qTokens) {
                    if (nameEn.includes(tok) || nameBn.includes(tok)) sScore += 15;
                    if (intentTags.some(t => t.includes(tok))) sScore += 12;
                }

                if (sScore > topSevaScore) {
                    topSevaScore = sScore;
                    matchedService = s;
                }
            }

            if (topSevaScore >= 12 && matchedService) {
                const sName = matchedService.service_name.en;
                const sAuth = matchedService.authority;
                const sUrl = matchedService.official_apply_url || matchedService.official_homepage || "";
                const fee = matchedService.application_fee?.en || "Free / Standard Government Fee";
                const docs = matchedService.required_documents?.en ? matchedService.required_documents.en.slice(0, 3).join("; ") : "Identity & address proof";

                return {
                    title: `${sName} (${matchedService.government_level})`,
                    summary: `**Authority**: ${sAuth}\n**Official Fee**: ${fee}\n**Documents usually needed**: ${docs}.\n\n*Safety Advisory*: XESTUS is an independent guidance platform. Please verify the latest instructions and submit applications directly on the official portal.`,
                    actions: [
                        { label: `Open Digital Seva Hub →`, target: "#digital-services" },
                        ...(sUrl ? [{ label: `Open Official Portal ↗`, url: sUrl }] : []),
                        { label: `Request Form Assistance →`, target: "#contact" }
                    ]
                };
            }
        }

        if (highestScore >= 3 && bestMatch) {
            return bestMatch;
        }

        // Default Fallback
        return {
            title: "XESTUS Guidance",
            summary: "I don't have verified information about that specific query yet. You can search our Digital Seva Command Center, explore our engineering sections below, or reach out directly to the XESTUS team.",
            actions: [
                { label: "Search Digital Seva Hub →", target: "#digital-services" },
                { label: "Explore Core Services →", target: "#services" },
                { label: "Contact XESTUS Team →", target: "#contact" }
            ]
        };
    }

    // =========================================================================
    // 3. FLOATING ASSISTANT UI CONTROLLER
    // =========================================================================
    let isChatOpen = false;
    let messageHistory = [];

    const STORAGE_KEY_FOLLOW = "xestus_following";
    const STORAGE_KEY_CHAT = "xestus_ai_chat_history";

    function initFloatingAssistant() {
        const floatingContainer = document.querySelector(".xestus-floating-assistant");
        const followBtn = document.getElementById("floatingFollowBtn");
        const launcherBtn = document.getElementById("aiLauncherBtn");
        const chatPanel = document.getElementById("aiChatPanel");
        const closeBtn = document.getElementById("aiChatCloseBtn");
        const clearBtn = document.getElementById("aiChatClearBtn");
        const messagesContainer = document.getElementById("aiChatMessages");
        const inputField = document.getElementById("aiChatInput");
        const sendBtn = document.getElementById("aiChatSendBtn");
        const communityModal = document.getElementById("communityModal");
        const communityModalClose = document.getElementById("communityModalCloseBtn");
        const communityModalBackdrop = document.getElementById("communityModalBackdrop");

        if (!floatingContainer || !launcherBtn || !chatPanel) {
            return;
        }

        // ---------------------------------------------------------------------
        // A. Follow Button Handler (Directly Above AI Launcher)
        // ---------------------------------------------------------------------
        function updateFollowBtnState() {
            if (!followBtn) return;
            const isFollowing = localStorage.getItem(STORAGE_KEY_FOLLOW) === "true";
            if (isFollowing) {
                followBtn.classList.add("following");
                followBtn.setAttribute("aria-pressed", "true");
                followBtn.innerHTML = `
                    <i data-lucide="check" class="follow-icon"></i>
                    <span>Following ✓</span>
                `;
            } else {
                followBtn.classList.remove("following");
                followBtn.setAttribute("aria-pressed", "false");
                followBtn.innerHTML = `
                    <i data-lucide="user-plus" class="follow-icon"></i>
                    <span>Follow XESTUS</span>
                `;
            }
            if (window.lucide) {
                try { window.lucide.createIcons({ scope: followBtn }); } catch (e) {}
            }
        }

        if (followBtn) {
            updateFollowBtnState();
            followBtn.addEventListener("click", (e) => {
                e.preventDefault();
                const isCurrentlyFollowing = localStorage.getItem(STORAGE_KEY_FOLLOW) === "true";
                if (!isCurrentlyFollowing) {
                    localStorage.setItem(STORAGE_KEY_FOLLOW, "true");
                    updateFollowBtnState();
                    // Open Community Modal Dialog
                    if (communityModal) {
                        communityModal.classList.add("is-open");
                        communityModal.setAttribute("aria-hidden", "false");
                        document.body.classList.add("modal-open");
                    }
                } else {
                    // Open Community channels
                    if (communityModal) {
                        communityModal.classList.add("is-open");
                        communityModal.setAttribute("aria-hidden", "false");
                        document.body.classList.add("modal-open");
                    }
                }
            });
        }

        function closeCommunityModal() {
            if (!communityModal) return;
            communityModal.classList.remove("is-open");
            communityModal.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
        }

        if (communityModalClose) communityModalClose.addEventListener("click", closeCommunityModal);
        if (communityModalBackdrop) communityModalBackdrop.addEventListener("click", closeCommunityModal);

        // ---------------------------------------------------------------------
        // B. Chat Open / Close / Toggle
        // ---------------------------------------------------------------------
        function openChat() {
            isChatOpen = true;
            chatPanel.classList.add("is-open");
            chatPanel.setAttribute("aria-hidden", "false");
            launcherBtn.classList.add("is-active");
            launcherBtn.setAttribute("aria-expanded", "true");

            if (messageHistory.length === 0) {
                renderGreeting();
            }

            setTimeout(() => {
                if (inputField) inputField.focus();
                scrollToBottom();
            }, 100);
        }

        function closeChat() {
            isChatOpen = false;
            chatPanel.classList.remove("is-open");
            chatPanel.setAttribute("aria-hidden", "true");
            launcherBtn.classList.remove("is-active");
            launcherBtn.setAttribute("aria-expanded", "false");
            launcherBtn.focus();
        }

        launcherBtn.addEventListener("click", () => {
            if (isChatOpen) {
                closeChat();
            } else {
                openChat();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", closeChat);
        }

        // Global ESC key listener for floating assistant & community modal
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (isChatOpen) {
                    closeChat();
                }
                if (communityModal && communityModal.classList.contains("is-open")) {
                    closeCommunityModal();
                }
            }
        });

        // ---------------------------------------------------------------------
        // C. Chat Rendering & Messages
        // ---------------------------------------------------------------------
        function scrollToBottom() {
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }

        function renderGreeting() {
            if (!messagesContainer) return;
            messagesContainer.innerHTML = "";

            const greetingHtml = `
                <div class="ai-message ai-message-bot">
                    <div class="ai-avatar">
                        <i data-lucide="bot"></i>
                    </div>
                    <div class="ai-bubble">
                        <div class="ai-bubble-text">
                            <strong>Hi! I'm XESTUS AI Assistant 👋</strong><br>
                            How can I help you today? Ask me about our AI software, engineering services, Digital Seva assistance, or choose a topic below:
                        </div>
                        <div class="ai-quick-actions">
                            <button type="button" class="ai-chip-btn" data-query="Digital Seva">🏛️ Digital Seva</button>
                            <button type="button" class="ai-chip-btn" data-query="Core Services">⚡ Services</button>
                            <button type="button" class="ai-chip-btn" data-query="Projects">🚀 Projects</button>
                            <button type="button" class="ai-chip-btn" data-query="Products">📦 Products</button>
                            <button type="button" class="ai-chip-btn" data-query="Innovation Lab">🔬 Innovation Lab</button>
                            <button type="button" class="ai-chip-btn" data-query="Internships">🎓 Internship</button>
                            <button type="button" class="ai-chip-btn" data-query="FAQ">❓ FAQ</button>
                            <button type="button" class="ai-chip-btn" data-query="Contact">📩 Contact Us</button>
                        </div>
                    </div>
                </div>
            `;

            messagesContainer.innerHTML = greetingHtml;
            wireQuickActionButtons();
            if (window.lucide) {
                try { window.lucide.createIcons({ scope: messagesContainer }); } catch (e) {}
            }
        }

        function appendUserMessage(text) {
            if (!messagesContainer || !text) return;
            const msgEl = document.createElement("div");
            msgEl.className = "ai-message ai-message-user";
            msgEl.innerHTML = `
                <div class="ai-bubble">
                    <div class="ai-bubble-text">${escapeHtml(text)}</div>
                </div>
            `;
            messagesContainer.appendChild(msgEl);
            scrollToBottom();
        }

        function appendTypingIndicator() {
            if (!messagesContainer) return null;
            const typingEl = document.createElement("div");
            typingEl.className = "ai-message ai-message-bot ai-typing-indicator-row";
            typingEl.id = "aiTypingIndicator";
            typingEl.innerHTML = `
                <div class="ai-avatar"><i data-lucide="bot"></i></div>
                <div class="ai-bubble ai-typing-bubble">
                    <span class="ai-typing-dot"></span>
                    <span class="ai-typing-dot"></span>
                    <span class="ai-typing-dot"></span>
                </div>
            `;
            messagesContainer.appendChild(typingEl);
            if (window.lucide) {
                try { window.lucide.createIcons({ scope: typingEl }); } catch (e) {}
            }
            scrollToBottom();
            return typingEl;
        }

        function removeTypingIndicator() {
            const typingEl = document.getElementById("aiTypingIndicator");
            if (typingEl) typingEl.remove();
        }

        function appendBotResponse(intentResult) {
            removeTypingIndicator();
            if (!messagesContainer || !intentResult) return;

            const msgEl = document.createElement("div");
            msgEl.className = "ai-message ai-message-bot";

            let actionsHtml = "";
            if (intentResult.actions && intentResult.actions.length > 0) {
                actionsHtml = `
                    <div class="ai-response-actions">
                        ${intentResult.actions.map(act => {
                            if (act.target) {
                                return `<button type="button" class="ai-nav-btn" data-nav-target="${act.target}"><span>${act.label}</span></button>`;
                            } else if (act.url) {
                                return `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="ai-nav-link"><span>${act.label}</span></a>`;
                            }
                            return "";
                        }).join("")}
                    </div>
                `;
            }

            // Convert simple markdown bold/bullets
            let formattedText = intentResult.summary
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\n• /g, "<br>• ")
                .replace(/\n\d+\. /g, "<br>• ")
                .replace(/\n/g, "<br>");

            msgEl.innerHTML = `
                <div class="ai-avatar"><i data-lucide="bot"></i></div>
                <div class="ai-bubble">
                    <div class="ai-bubble-title">${intentResult.title}</div>
                    <div class="ai-bubble-text">${formattedText}</div>
                    ${actionsHtml}
                </div>
            `;

            messagesContainer.appendChild(msgEl);
            if (window.lucide) {
                try { window.lucide.createIcons({ scope: msgEl }); } catch (e) {}
            }

            // Wire action navigation buttons
            msgEl.querySelectorAll(".ai-nav-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const target = btn.getAttribute("data-nav-target");
                    if (target) {
                        const targetEl = document.querySelector(target);
                        if (targetEl) {
                            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
                            if (window.innerWidth <= 768) {
                                closeChat();
                            }
                        }
                    }
                });
            });

            scrollToBottom();
        }

        function handleUserSubmit(queryText) {
            const clean = (queryText || (inputField ? inputField.value : "")).trim();
            if (!clean) return;

            if (inputField) {
                inputField.value = "";
                inputField.style.height = "auto";
            }
            if (sendBtn) sendBtn.disabled = true;

            appendUserMessage(clean);
            messageHistory.push({ role: "user", text: clean });

            appendTypingIndicator();

            // Simulate natural AI thinking delay (350-600ms)
            setTimeout(() => {
                const response = matchIntent(clean);
                appendBotResponse(response);
                messageHistory.push({ role: "bot", response });
            }, 450);
        }

        function wireQuickActionButtons() {
            if (!messagesContainer) return;
            messagesContainer.querySelectorAll(".ai-chip-btn").forEach(chip => {
                chip.addEventListener("click", () => {
                    const query = chip.getAttribute("data-query");
                    if (query) {
                        handleUserSubmit(query);
                    }
                });
            });
        }

        // Input field events
        if (inputField) {
            inputField.addEventListener("input", () => {
                inputField.style.height = "auto";
                inputField.style.height = Math.min(inputField.scrollHeight, 100) + "px";
                if (sendBtn) {
                    sendBtn.disabled = inputField.value.trim().length === 0;
                }
            });

            inputField.addEventListener("keydown", (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleUserSubmit();
                }
            });
        }

        if (sendBtn) {
            sendBtn.addEventListener("click", (e) => {
                e.preventDefault();
                handleUserSubmit();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                messageHistory = [];
                renderGreeting();
            });
        }
    }

    function escapeHtml(str) {
        if (!str) return "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Initialize once DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initFloatingAssistant);
    } else {
        initFloatingAssistant();
    }
})();
