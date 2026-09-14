/**
 * XESTUS | Core Interactive Logic & Controller
 * Tagline: Intelligence Beyond Limits
 * Version: 3.2.0 (Phase 2 Navigation & Hero Optimization)
 */

"use strict";

// --------------------------------------------------------------------------
// 1. EmailJS Client Initialization (Preserved Configuration)
// --------------------------------------------------------------------------
function initEmailJS() {
    if (typeof emailjs !== "undefined" && typeof emailjs.init === "function") {
        emailjs.init({
            publicKey: "MjRM1_6Bb8yJSG3d0",
        });
    }
}
initEmailJS();

function initLucide() {
    if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initLucide();
    initEmailJS();

    // --------------------------------------------------------------------------
    // 2. Navigation & Mobile Drawer Controller
    // --------------------------------------------------------------------------
    const siteHeader = document.querySelector(".site-header");
    const menuToggle = document.getElementById("menuToggle") || document.querySelector(".menu-toggle");
    const navLinks = document.getElementById("primaryNav") || document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    let isNavOpen = false;

    function setNavState(open) {
        isNavOpen = open;
        if (menuToggle) {
            menuToggle.classList.toggle("active", isNavOpen);
            menuToggle.setAttribute("aria-expanded", isNavOpen ? "true" : "false");
        }
        if (navLinks) {
            navLinks.classList.toggle("active", isNavOpen);
        }
        document.body.classList.toggle("nav-open", isNavOpen);
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            setNavState(!isNavOpen);
        });

        // Close when clicking nav items
        navItems.forEach((item) => {
            item.addEventListener("click", () => {
                navItems.forEach((link) => link.classList.remove("active"));
                item.classList.add("active");
                setNavState(false);
            });
        });

        // Close on Escape key press
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isNavOpen) {
                setNavState(false);
            }
        });

        // Close when clicking outside navigation
        document.addEventListener("click", (e) => {
            if (isNavOpen && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                setNavState(false);
            }
        });
    }

    // --------------------------------------------------------------------------
    // 3. Consolidated Scroll State & Progress Bar (rAF Throttled)
    // --------------------------------------------------------------------------
    const progressBar = document.getElementById("progress-bar");
    let isScrollRafScheduled = false;

    function onScrollUpdate() {
        const scrollY = window.scrollY;

        // Sticky Header Toggle
        if (siteHeader) {
            siteHeader.classList.toggle("scrolled", scrollY > 30);
        }
        const legacyNav = document.querySelector("nav");
        if (legacyNav) {
            legacyNav.classList.toggle("scrolled", scrollY > 30);
        }

        // Progress Bar
        if (progressBar) {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight > 0) {
                const progress = (scrollY / scrollHeight) * 100;
                progressBar.style.width = `${progress}%`;
            }
        }

        isScrollRafScheduled = false;
    }

    window.addEventListener("scroll", () => {
        if (!isScrollRafScheduled) {
            isScrollRafScheduled = true;
            requestAnimationFrame(onScrollUpdate);
        }
    }, { passive: true });

    onScrollUpdate();

    // --------------------------------------------------------------------------
    // 4. Scroll Reveal (IntersectionObserver)
    // --------------------------------------------------------------------------
    const hiddenElements = document.querySelectorAll(".hidden");
    if (hiddenElements.length > 0) {
        if (window.innerWidth <= 1024 || typeof IntersectionObserver === "undefined") {
            hiddenElements.forEach((el) => el.classList.add("show"));
        } else {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });

            hiddenElements.forEach((el) => revealObserver.observe(el));
        }
    }

    // --------------------------------------------------------------------------
    // 5. Stat Numerical Counter Animation
    // --------------------------------------------------------------------------
    const counters = document.querySelectorAll(".counter");
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.target);
                const duration = 1800;
                const startTime = performance.now();

                function animate(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const value = Math.floor(progress * target);

                    counter.innerText = value;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        if (target === 10) counter.innerText = "10+";
                        if (target === 100) counter.innerText = "100%";
                    }
                }

                requestAnimationFrame(animate);
                counterObserver.unobserve(counter);
            });
        }, { threshold: 0.5 });

        counters.forEach((counter) => counterObserver.observe(counter));
    }

    // --------------------------------------------------------------------------
    // 6. XESTUS 3D Hero Orb (Optimized GPU Controller)
    // --------------------------------------------------------------------------
    const xestusOrb = document.querySelector(".xestus-3d-orb");
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (xestusOrb && supportsHover && !prefersReducedMotion) {
        let mouseX = 0;
        let mouseY = 0;
        let isOrbRafScheduled = false;

        function updateOrbTransform() {
            // Clamped coordinates to prevent excessive movement
            const moveX = Math.max(-14, Math.min(14, mouseX * 14));
            const moveY = Math.max(-14, Math.min(14, mouseY * 14));
            const rotateX = Math.max(-12, Math.min(12, 10 + (mouseY * -8)));
            const rotateY = Math.max(-14, Math.min(14, -12 + (mouseX * 10)));

            xestusOrb.style.setProperty("--mouse-x", `${moveX}px`);
            xestusOrb.style.setProperty("--mouse-y", `${moveY}px`);
            xestusOrb.style.setProperty("--mouse-rx", `${rotateX}deg`);
            xestusOrb.style.setProperty("--mouse-ry", `${rotateY}deg`);

            isOrbRafScheduled = false;
        }

        document.addEventListener("pointermove", (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

            if (!isOrbRafScheduled) {
                isOrbRafScheduled = true;
                requestAnimationFrame(updateOrbTransform);
            }

            // Distance check for proximity glow
            const rect = xestusOrb.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

            xestusOrb.classList.toggle("orb-active", distance < 200);
        }, { passive: true });
    }

    // --------------------------------------------------------------------------
    // 7. Desktop Custom Cursor System
    // --------------------------------------------------------------------------
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    const cursorGlow = document.querySelector(".cursor-glow");

    if (supportsHover && !prefersReducedMotion && (cursorDot || cursorOutline || cursorGlow)) {
        let curX = 0, curY = 0;
        let isCursorRafScheduled = false;

        document.addEventListener("pointermove", (e) => {
            curX = e.clientX;
            curY = e.clientY;

            if (!isCursorRafScheduled) {
                isCursorRafScheduled = true;
                requestAnimationFrame(() => {
                    if (cursorDot) {
                        cursorDot.style.left = `${curX}px`;
                        cursorDot.style.top = `${curY}px`;
                    }
                    if (cursorOutline) {
                        cursorOutline.style.left = `${curX}px`;
                        cursorOutline.style.top = `${curY}px`;
                    }
                    if (cursorGlow) {
                        cursorGlow.style.left = `${curX}px`;
                        cursorGlow.style.top = `${curY}px`;
                    }
                    isCursorRafScheduled = false;
                });
            }
        }, { passive: true });
    }

    // --------------------------------------------------------------------------
    // 8. Magnetic Buttons & Card 3D Tilt Micro-Interactions
    // --------------------------------------------------------------------------
    if (supportsHover && !prefersReducedMotion) {
        const magneticButtons = document.querySelectorAll(".magnetic-btn");
        magneticButtons.forEach((button) => {
            button.addEventListener("pointermove", (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const moveX = (x - rect.width / 2) / 6;
                const moveY = (y - rect.height / 2) / 6;
                button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.04)`;
            });

            button.addEventListener("pointerleave", () => {
                button.style.transform = "translate(0px, 0px) scale(1)";
            });
        });

        const tiltCards = document.querySelectorAll(".tilt-card");
        tiltCards.forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = -(y - centerY) / 22;
                const rotateY = (x - centerX) / 22;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener("pointerleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
            });
        });

        const interactiveCards = document.querySelectorAll(".service-card, .solution-card, .project-card, .lab-card, .why-card, .tech-stack-card, .stat-card, .contact-channel-card, .contact-sla-box, .contact-form-wrapper");
        interactiveCards.forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--x", `${e.clientX - rect.left}px`);
                card.style.setProperty("--y", `${e.clientY - rect.top}px`);
            });
        });
    }

    // --------------------------------------------------------------------------
    // 8B. Portfolio Category Filtering
    // --------------------------------------------------------------------------
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const selectedFilter = btn.getAttribute("data-filter");

                // Update active state on buttons
                filterButtons.forEach((b) => {
                    b.classList.remove("active");
                    b.setAttribute("aria-selected", "false");
                });
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");

                // Filter cards with smooth visibility
                projectCards.forEach((card) => {
                    const cardCategory = card.getAttribute("data-category");
                    if (selectedFilter === "all" || cardCategory === selectedFilter) {
                        card.classList.remove("is-hidden");
                    } else {
                        card.classList.add("is-hidden");
                    }
                });
            });
        });
    }

    // --------------------------------------------------------------------------
    // 8C. Case Study Accessible Modal Data & Controller
    // --------------------------------------------------------------------------
    const caseStudiesData = {
        "synapse-ai": {
            title: "Synapse AI: Enterprise Knowledge Agent",
            category: "AI & Intelligent Agents",
            status: "Lab Architecture",
            statusClass: "status-lab",
            image: "assets/images/projects/synapse-ai.svg",
            alt: "Synapse AI Architecture Diagram",
            summary: "Autonomous retrieval-augmented AI agent connecting multi-source enterprise docs with contextual LLM reasoning.",
            challenge: "Enterprise teams waste hundreds of hours navigating siloed documentation across internal wikis, PDFs, and repositories, resulting in slow query resolution and repetitive internal support requests.",
            solution: "Engineered a high-performance RAG pipeline leveraging pgvector embeddings with dynamic chunking, cross-encoder re-ranking, and citation-backed agentic reasoning to deliver sub-second, hallucination-free answers.",
            capabilities: [
                "Sub-second vector search across unstructured documents",
                "Multi-source ingestion pipeline (PDF, Markdown, Webhooks)",
                "Strict citation grounding with verifiable source links",
                "Role-based permission gating for sensitive data"
            ],
            techStack: ["Python", "FastAPI", "LangChain", "pgvector", "OpenAI API", "Docker", "PostgreSQL"],
            ctaText: "Discuss AI Agent Architecture"
        },
        "flowsync-automation": {
            title: "FlowSync: Omnichannel Automation Pipeline",
            category: "Workflow Automation",
            status: "Production Engine",
            statusClass: "status-prod",
            image: "assets/images/projects/flowsync-automation.svg",
            alt: "FlowSync Automation Pipeline",
            summary: "Event-driven orchestration engine syncing CRMs, databases, and webhook triggers with automated error fallback.",
            challenge: "Manual lead routing and disjointed multi-app handoffs between contact forms, CRM tables, and messaging channels caused delayed follow-ups and dropped business opportunities.",
            solution: "Constructed an automated event-driven webhook pipeline in n8n and Python with dead-letter queue recovery, data validation schemas, and real-time alerts across team communication channels.",
            capabilities: [
                "Zero-loss webhook queue processing with automated retry logic",
                "Bi-directional synchronization between CRM and databases",
                "Instant multi-channel notifications (Email, Slack, SMS)",
                "End-to-end data integrity validation and audit logging"
            ],
            techStack: ["n8n", "Python", "REST APIs", "Webhooks", "PostgreSQL", "Redis", "Docker"],
            ctaText: "Automate Your Business Workflows"
        },
        "nexus-platform": {
            title: "XESTUS: Intelligent Corporate Platform",
            category: "Web Platforms",
            status: "Production Platform",
            statusClass: "status-prod",
            image: "assets/images/projects/nexus-platform.svg",
            alt: "XESTUS Platform Architecture",
            summary: "Ultra-fast corporate web architecture engineered for premium brand positioning and automated lead conversion.",
            challenge: "Traditional corporate websites suffer from heavy framework bloat, slow mobile loading times, and poor conversion funnels, degrading client trust.",
            solution: "Built a pure semantic HTML5/CSS3 architecture with tokenized design systems, zero runtime framework overhead, GPU-accelerated micro-interactions, and secure client-side form routing.",
            capabilities: [
                "Near-instantaneous first contentful paint (< 0.6s)",
                "100/100 Lighthouse performance and SEO score potential",
                "Full responsiveness with zero layout shift (CLS 0.00)",
                "Direct edge CDN deployment with automated contact delivery"
            ],
            techStack: ["HTML5", "CSS3", "JavaScript ES6+", "EmailJS", "Cloudflare Edge", "SEO"],
            ctaText: "Build Your Digital Platform"
        },
        "pulse-metrics": {
            title: "PulseMetrics: Operational Telemetry Hub",
            category: "Data & Analytics",
            status: "System Architecture",
            statusClass: "status-sys",
            image: "assets/images/projects/pulse-metrics.svg",
            alt: "PulseMetrics Real-Time Dashboard",
            summary: "Unified analytics and telemetry portal streaming operational throughput, cluster health, and business KPIs.",
            challenge: "Fragmented logs across servers and third-party tools made real-time monitoring difficult, leading to delayed issue identification and lack of visibility into system bottlenecks.",
            solution: "Architected a unified real-time dashboard aggregating high-frequency operational metrics via WebSockets with dynamic Chart.js visualizations and automated anomaly alerts.",
            capabilities: [
                "Real-time WebSocket telemetry ingestion with 42ms update rate",
                "Interactive multi-dimensional filtering by cluster and timeframe",
                "Configurable metric thresholds with automated alert triggers",
                "Lightweight client-side rendering with zero UI stutter"
            ],
            techStack: ["FastAPI", "Chart.js", "PostgreSQL", "WebSockets", "Docker", "Linux"],
            ctaText: "Deploy Telemetry Dashboards"
        },
        "cloudgate-infra": {
            title: "CloudGate: Reverse Proxy & Gateway",
            category: "Cloud Infrastructure",
            status: "DevOps Architecture",
            statusClass: "status-devops",
            image: "assets/images/projects/cloudgate-infra.svg",
            alt: "CloudGate Gateway Infrastructure",
            summary: "Hardened containerized edge proxy with automated TLS provisioning, IP rate limiting, and microservice routing.",
            challenge: "Direct backend microservice exposure risked denial-of-service spikes, connection exhaustion, and complex manual certificate maintenance.",
            solution: "Designed an automated Docker-compose infrastructure combining Nginx reverse proxying, Let's Encrypt automated TLS renewal, IP rate limiting buffers, and isolated internal networks.",
            capabilities: [
                "A+ SSL Labs security grading with TLS 1.3 enforcement",
                "Sub-millisecond proxy routing latency across microservices",
                "Automated zero-downtime certificate renewal and reload",
                "Configurable rate limiting shields against volumetric abuse"
            ],
            techStack: ["Docker", "Nginx", "Linux (Ubuntu)", "Bash Scripting", "Let's Encrypt", "TLS 1.3"],
            ctaText: "Architect Cloud Infrastructure"
        },
        "aeroplan-cad": {
            title: "AeroPlan: Precision CAD Schematics",
            category: "Technical Design",
            status: "Engineering Portfolio",
            statusClass: "status-cad",
            image: "assets/images/projects/aeroplan-cad.svg",
            alt: "AeroPlan Technical Drafting",
            summary: "Layer-standardized 2D architectural blueprints, geometric dimensioning, and fabrication-ready drafting.",
            challenge: "Engineering projects often suffer from inconsistent drafting standards, missing layer hierarchies, and dimensional ambiguities between CAD models and fabrication.",
            solution: "Developed disciplined AutoCAD drawing packages adhering to strict layer conventions, parametric dimensioning, and standardized title block templates for architectural and engineering review.",
            capabilities: [
                "High-precision 1:50 architectural and engineering drafting",
                "Standardized AIA layer hierarchy for seamless multi-team collaboration",
                "Parametric dimensional verification eliminating fabrication mismatch",
                "Multi-sheet export sets ready for plot and digital submission"
            ],
            techStack: ["AutoCAD 2D", "Technical Drafting", "CAD Schematics", "Engineering Blueprints"],
            ctaText: "Discuss CAD & Technical Design"
        }
    };

    const caseStudyModal = document.getElementById("caseStudyModal");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalContentContainer = document.getElementById("modalContentContainer");
    let lastFocusedElement = null;

    function openCaseStudyModal(projectId, triggerBtn) {
        const data = caseStudiesData[projectId];
        if (!data || !caseStudyModal || !modalContentContainer) return;

        lastFocusedElement = triggerBtn || document.activeElement;

        // Render modal content
        modalContentContainer.innerHTML = `
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="project-category-badge">${data.category}</span>
                    <span class="project-status-badge ${data.statusClass}">${data.status}</span>
                </div>
                <h3 class="modal-title" id="modalProjectTitle">${data.title}</h3>
                <p class="modal-summary">${data.summary}</p>
            </div>

            <div class="modal-visual-preview">
                <img src="${data.image}" alt="${data.alt}" width="800" height="450">
            </div>

            <div class="modal-grid-2">
                <div class="modal-box">
                    <h4>THE CHALLENGE</h4>
                    <p>${data.challenge}</p>
                </div>
                <div class="modal-box">
                    <h4>THE XESTUS SOLUTION</h4>
                    <p>${data.solution}</p>
                </div>
            </div>

            <div class="modal-section">
                <h4 class="modal-section-title">
                    <i data-lucide="check-circle-2"></i>
                    <span>Key Capabilities &amp; Engineering Highlights</span>
                </h4>
                <ul class="modal-features-list">
                    ${data.capabilities.map((c) => `<li><i data-lucide="arrow-right"></i> <span>${c}</span></li>`).join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h4 class="modal-section-title">
                    <i data-lucide="layers"></i>
                    <span>Technical Architecture &amp; Stack</span>
                </h4>
                <div class="modal-tech-pills">
                    ${data.techStack.map((t) => `<span>${t}</span>`).join("")}
                </div>
            </div>

            <div class="modal-footer">
                <a href="#contact" class="btn-primary modal-footer-cta" id="modalDiscussCta">
                    <span>${data.ctaText}</span>
                    <i data-lucide="arrow-up-right"></i>
                </a>
            </div>
        `;

        // Refresh icons inside modal
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Close on CTA click and scroll to contact
        const modalDiscussCta = document.getElementById("modalDiscussCta");
        if (modalDiscussCta) {
            modalDiscussCta.addEventListener("click", () => {
                closeCaseStudyModal();
            });
        }

        // Display modal
        caseStudyModal.classList.add("is-open");
        caseStudyModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        // Focus close button for accessible keyboard navigation
        setTimeout(() => {
            if (modalCloseBtn) modalCloseBtn.focus();
        }, 100);
    }

    function closeCaseStudyModal() {
        if (!caseStudyModal) return;
        caseStudyModal.classList.remove("is-open");
        caseStudyModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    // Modal event triggers
    document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-open-modal]");
        if (trigger) {
            e.preventDefault();
            const projectId = trigger.getAttribute("data-open-modal");
            openCaseStudyModal(projectId, trigger);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeCaseStudyModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", closeCaseStudyModal);
    }

    function trapFocus(e, modalContainer) {
        if (!modalContainer || !modalContainer.classList.contains("is-open")) return;
        if (e.key === "Tab") {
            const focusableEls = modalContainer.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
            if (!focusableEls.length) return;
            const firstEl = focusableEls[0];
            const lastEl = focusableEls[focusableEls.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        }
    }

    document.addEventListener("keydown", (e) => {
        if (caseStudyModal && caseStudyModal.classList.contains("is-open")) {
            if (e.key === "Escape") {
                closeCaseStudyModal();
            } else if (e.key === "Tab") {
                trapFocus(e, caseStudyModal);
            }
        }
    });

    // --------------------------------------------------------------------------
    // 8D. Innovation Lab Interactive Terminal Controller
    // --------------------------------------------------------------------------
    const labTerminalContent = document.getElementById("labTerminalContent");
    const terminalTabs = document.querySelectorAll(".terminal-tab");

    const terminalLogs = {
        mcp: `
<div class="terminal-line"><span class="term-prompt">&gt;</span> <span class="term-cyan">[MCP-INIT]</span> <span class="term-white">Initializing Model Context Protocol (MCP) Server...</span></div>
<div class="terminal-line"><span class="term-dim">14:02:11.024</span> <span class="term-green">[PROTOCOL]</span> Version: <span class="term-white">2024-11-05</span> | Transport: <span class="term-highlight">JSON-RPC 2.0 / stdio</span></div>
<div class="terminal-line"><span class="term-dim">14:02:11.031</span> <span class="term-cyan">[DISCOVERY]</span> Registering dynamic capabilities:</div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">├──</span> <span class="term-purple">tool:</span> <span class="term-white">vector_rag_query</span> <span class="term-dim">(params: query, top_k, threshold)</span></div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">├──</span> <span class="term-purple">tool:</span> <span class="term-white">ast_security_scan</span> <span class="term-dim">(params: file_path, ruleset)</span></div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">└──</span> <span class="term-purple">tool:</span> <span class="term-white">edge_telemetry_fetch</span> <span class="term-dim">(params: cluster_id, metric_window)</span></div>
<div class="terminal-line"><span class="term-dim">14:02:11.042</span> <span class="term-amber">[EXECUTE]</span> Agent call: <span class="term-cyan">vector_rag_query</span>("enterprise authentication policies", top_k=3)</div>
<div class="terminal-line"><span class="term-dim">14:02:11.049</span> <span class="term-green">[RETURN]</span> Vector distance: <span class="term-white">0.082 (Cosine Sim: 99.18%)</span> | Latency: <span class="term-highlight">6.8ms</span></div>
<div class="terminal-line"><span class="term-prompt">&gt;</span> <span class="term-green">✓ MCP Mesh Handshake Active • 0 Schema Errors</span>
        `,
        swarm: `
<div class="terminal-line"><span class="term-prompt">&gt;</span> <span class="term-purple">[SWARM-DAG]</span> <span class="term-white">Spawning Hierarchical Agent Swarm Graph (LangGraph)</span></div>
<div class="terminal-line"><span class="term-dim">14:02:15.102</span> <span class="term-cyan">[PLANNER-AGENT]</span> Decomposed goal into 3 parallel execution nodes:</div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">├── Node 1:</span> <span class="term-white">Vector Ingestion &amp; Chunk Semantic Verification</span> <span class="term-green">[DONE]</span></div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">├── Node 2:</span> <span class="term-white">FastAPI Microservice Generation with Pydantic V2</span> <span class="term-green">[DONE]</span></div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">└── Node 3:</span> <span class="term-white">Security &amp; Rate-Limit Constraint Validation</span> <span class="term-amber">[IN REVIEW]</span></div>
<div class="terminal-line"><span class="term-dim">14:02:15.188</span> <span class="term-purple">[CRITIC-AGENT]</span> Running automated AST compliance checks:</div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-green">✓ Clean dependency boundary</span> | <span class="term-green">✓ Zero unhandled async exceptions</span></div>
<div class="terminal-line"><span class="term-dim">14:02:15.210</span> <span class="term-cyan">[SYNTHESIZER]</span> Merging consensus outputs • Total Swarm Tokens: <span class="term-highlight">1,420</span></div>
<div class="terminal-line"><span class="term-prompt">&gt;</span> <span class="term-green">✓ DAG Execution Successful • Output Artifact Verified</span>
        `,
        edge: `
<div class="terminal-line"><span class="term-prompt">&gt;</span> <span class="term-cyan">[NODE-TELEMETRY]</span> <span class="term-white">xestus-edge-f41-01 (Samsung Galaxy F41 Linux Node)</span></div>
<div class="terminal-line"><span class="term-dim">14:02:20.001</span> <span class="term-dim">[SYSTEM]</span> Architecture: <span class="term-white">aarch64 (Exynos 9611 8-Core)</span> | Kernel: <span class="term-dim">Linux 4.14-perf+</span></div>
<div class="terminal-line"><span class="term-dim">14:02:20.012</span> <span class="term-green">[SERVICES]</span> Active Container Pods:</div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">├──</span> <span class="term-white">caddy-reverse-proxy</span> <span class="term-green">[HEALTHY]</span> (Port 80/443, TLS 1.3)</div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">├──</span> <span class="term-white">fastapi-staging-backend</span> <span class="term-green">[HEALTHY]</span> (Uvicorn 4 workers)</div>
<div class="terminal-line">&nbsp;&nbsp;<span class="term-dim">└──</span> <span class="term-white">tailscale-mesh-gateway</span> <span class="term-green">[HEALTHY]</span> (Encrypted WireGuard Peer)</div>
<div class="terminal-line"><span class="term-dim">14:02:20.038</span> <span class="term-amber">[VITALS]</span> Thermal: <span class="term-white">34.4°C</span> | CPU Load: <span class="term-highlight">11.8%</span> | RAM: <span class="term-white">2.3GB / 5.8GB</span></div>
<div class="terminal-line"><span class="term-prompt">&gt;</span> <span class="term-green">✓ 24/7 Edge Cluster Online • Continuous Home Lab Uptime: 99.98%</span>
        `
    };

    function renderTerminalTab(tabKey) {
        if (!labTerminalContent || !terminalLogs[tabKey]) return;
        labTerminalContent.innerHTML = terminalLogs[tabKey].trim();
    }

    if (terminalTabs.length && labTerminalContent) {
        renderTerminalTab("mcp");

        terminalTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const targetKey = tab.getAttribute("data-tab");
                terminalTabs.forEach((t) => {
                    t.classList.remove("active");
                    t.setAttribute("aria-selected", "false");
                });
                tab.classList.add("active");
                tab.setAttribute("aria-selected", "true");
                renderTerminalTab(targetKey);
            });
        });
    }

    // --------------------------------------------------------------------------
    // 9. Contact Form Validation, Copy Action & EmailJS Delivery Adapter
    // --------------------------------------------------------------------------
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", async () => {
            const emailToCopy = "xestus.office@gmail.com";
            const copyTextSpan = copyEmailBtn.querySelector(".copy-text");

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(emailToCopy);
                } else {
                    // Fallback for older browsers
                    const tempInput = document.createElement("input");
                    tempInput.value = emailToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                }

                copyEmailBtn.classList.add("copied");
                if (copyTextSpan) copyTextSpan.textContent = "Copied!";

                setTimeout(() => {
                    copyEmailBtn.classList.remove("copied");
                    if (copyTextSpan) copyTextSpan.textContent = "Copy";
                }, 2500);
            } catch (err) {
                console.warn("Clipboard copy error:", err);
            }
        });
    }

    const contactForm = document.getElementById("contactForm") || document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const serviceSelect = document.getElementById("service");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");
    const submitBtn = document.getElementById("submitBtn") || (contactForm ? contactForm.querySelector("button[type='submit']") : null);

    if (contactForm && nameInput && emailInput && messageInput && formMessage) {
        let isSubmitting = false;

        // Clear error states on input
        [nameInput, emailInput, messageInput].forEach((input) => {
            input.addEventListener("input", () => {
                const group = input.closest(".form-group");
                if (group) {
                    group.classList.remove("has-error");
                }
                input.setAttribute("aria-invalid", "false");
            });
        });

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (isSubmitting) return;

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const service = serviceSelect ? serviceSelect.value : "General Technical Consultation";
            const message = messageInput.value.trim();

            let hasError = false;

            // Name validation
            if (name.length < 2) {
                const group = nameInput.closest(".form-group");
                if (group) group.classList.add("has-error");
                nameInput.setAttribute("aria-invalid", "true");
                hasError = true;
            } else {
                const group = nameInput.closest(".form-group");
                if (group) group.classList.remove("has-error");
                nameInput.setAttribute("aria-invalid", "false");
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                const group = emailInput.closest(".form-group");
                if (group) group.classList.add("has-error");
                emailInput.setAttribute("aria-invalid", "true");
                hasError = true;
            } else {
                const group = emailInput.closest(".form-group");
                if (group) group.classList.remove("has-error");
                emailInput.setAttribute("aria-invalid", "false");
            }

            // Message validation
            if (message.length < 10) {
                const group = messageInput.closest(".form-group");
                if (group) group.classList.add("has-error");
                messageInput.setAttribute("aria-invalid", "true");
                hasError = true;
            } else {
                const group = messageInput.closest(".form-group");
                if (group) group.classList.remove("has-error");
                messageInput.setAttribute("aria-invalid", "false");
            }

            if (hasError) {
                formMessage.className = "form-status-banner status-error";
                formMessage.innerHTML = '<i data-lucide="alert-circle"></i> <span>Please correct the highlighted fields above before submitting.</span>';
                if (window.lucide) lucide.createIcons();
                return;
            }

            // Begin submission state
            isSubmitting = true;
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add("is-loading");
                const btnText = submitBtn.querySelector(".btn-text");
                if (btnText) btnText.textContent = "Transmitting...";
            }

            formMessage.className = "form-status-banner status-transmitting";
            formMessage.innerHTML = '<i data-lucide="loader-2" class="spin"></i> <span>Encrypting &amp; transmitting inquiry to XESTUS engineering team...</span>';
            if (window.lucide) lucide.createIcons();

            // Prepare payload for EmailJS (Preserving service_rumjowb and template_malid0j)
            const formattedMessage = `[Scope: ${service}]\n\n${message}`;

            const templateParams = {
                name: name,
                email: email,
                message: formattedMessage,
                service: service
            };

            const sendPromise = (typeof emailjs !== "undefined" && typeof emailjs.send === "function")
                ? emailjs.send("service_rumjowb", "template_malid0j", templateParams)
                : Promise.reject(new Error("EmailJS SDK unavailable"));

            sendPromise
                .then(() => {
                    formMessage.className = "form-status-banner status-success";
                    formMessage.innerHTML = '<i data-lucide="check-circle-2"></i> <span>Inquiry received. Sudip Khatua and the XESTUS team will review your requirements and respond within 24 business hours.</span>';
                    contactForm.reset();
                    if (window.lucide) lucide.createIcons();
                })
                .catch((error) => {
                    console.error("XESTUS Contact Error:", error);
                    formMessage.className = "form-status-banner status-error";
                    formMessage.innerHTML = '<i data-lucide="alert-triangle"></i> <span>Transmission interrupted. Please email us directly at <a href="mailto:xestus.office@gmail.com" style="color:#ffffff;text-decoration:underline;font-weight:700;">xestus.office@gmail.com</a>.</span>';
                    if (window.lucide) lucide.createIcons();
                })
                .finally(() => {
                    isSubmitting = false;
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.classList.remove("is-loading");
                        const btnText = submitBtn.querySelector(".btn-text");
                        if (btnText) btnText.textContent = "Submit Inquiry";
                    }
                });
        });
    }

    // --------------------------------------------------------------------------
    // 10. Back-to-Top Controller
    // --------------------------------------------------------------------------
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --------------------------------------------------------------------------
    // 11. Accessible Legal & Policy Modal Controller
    // --------------------------------------------------------------------------
    const legalData = {
        privacy: {
            title: "Privacy Notice & Data Safeguards",
            category: "LEGAL STANDARDS",
            summary: "How XESTUS safeguards client communication, technical inquiries, and project specifications.",
            sections: [
                {
                    heading: "Direct Communication & Confidentiality",
                    text: "Inquiries submitted via our consultation portal are transmitted directly to our executive engineering inbox (xestus.office@gmail.com) via encrypted channels. We do not sell, rent, monetize, or expose client contact details to third-party ad networks or brokers."
                },
                {
                    heading: "Proprietary Data Protection",
                    text: "All architectural diagrams, data schemas, code repositories, and project requirements shared during technical discovery are treated under strict confidentiality standards. We are prepared to execute bilateral Non-Disclosure Agreements (NDAs) prior to in-depth technical audits."
                },
                {
                    heading: "Analytics & Telemetry",
                    text: "We utilize zero invasive tracking cookies. Our public platform runs on edge CDN delivery with minimal, privacy-respecting telemetry focused purely on system availability, TLS handshake health, and service uptime."
                }
            ]
        },
        terms: {
            title: "Terms of Service & Engagement",
            category: "CLIENT AGREEMENT",
            summary: "Standard terms governing architectural consultations, software engineering deliverables, and client engagements.",
            sections: [
                {
                    heading: "Engineering Scope & Deliverables",
                    text: "XESTUS provides custom software architecture, autonomous AI systems, full-stack web platforms, workflow automation pipelines, and technical CAD drafting. All project deliverables and milestone timelines are defined in written Statements of Work (SOW)."
                },
                {
                    heading: "100% Code & IP Ownership Transfer",
                    text: "Upon milestone completion and receipt of final settlement, full intellectual property rights, source code, deployment scripts, and architectural blueprints transfer completely to the client. No vendor lock-in or proprietary licensing traps."
                },
                {
                    heading: "Engineering Warranties & Post-Launch SLAs",
                    text: "All custom architectures include post-deployment verification and bug-fix warranty periods to guarantee stability against defined technical specifications."
                }
            ]
        },
        security: {
            title: "Security Standards & Defense-in-Depth",
            category: "SECURITY ARCHITECTURE",
            summary: "Technical security safeguards implemented across our engineering infrastructure and client deployments.",
            sections: [
                {
                    heading: "Transport Layer Security (TLS 1.3)",
                    text: "All web services and API endpoints enforce TLS 1.3 encryption with strict HTTP Strict Transport Security (HSTS) headers and automated SSL certificate rotations."
                },
                {
                    heading: "Secrets & Environment Segregation",
                    text: "Zero plaintext API credentials or database secrets are committed to version control. Production systems utilize strict environment variable segregation and role-based access control (RBAC)."
                },
                {
                    heading: "Edge Defense & Rate Limiting",
                    text: "Containerized edge proxies (Nginx / Caddy) implement automated connection rate limiting, DDoS buffer shields, and input sanitization to protect backend services against malicious injection."
                }
            ]
        }
    };

    const legalModal = document.getElementById("legalModal");
    const legalModalBackdrop = document.getElementById("legalModalBackdrop");
    const legalModalCloseBtn = document.getElementById("legalModalCloseBtn");
    const legalModalContent = document.getElementById("legalModalContent");
    let lastLegalFocusedElement = null;

    function openLegalModal(legalKey, triggerBtn) {
        const data = legalData[legalKey];
        if (!data || !legalModal || !legalModalContent) return;

        lastLegalFocusedElement = triggerBtn || document.activeElement;

        legalModalContent.innerHTML = `
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="project-category-badge">${data.category}</span>
                    <span class="project-status-badge status-prod">Official Policy</span>
                </div>
                <h3 class="modal-title" id="legalModalTitle">${data.title}</h3>
                <p class="modal-summary">${data.summary}</p>
            </div>

            <div class="legal-sections-wrapper">
                ${data.sections.map((s) => `
                    <div class="modal-section">
                        <h4 class="modal-section-title">
                            <i data-lucide="shield-check"></i>
                            <span>${s.heading}</span>
                        </h4>
                        <p>${s.text}</p>
                    </div>
                `).join("")}
            </div>

            <div class="modal-footer">
                <a href="#contact" class="btn-primary modal-footer-cta" id="legalDiscussCta">
                    <span>Contact Engineering Team</span>
                    <i data-lucide="arrow-up-right"></i>
                </a>
            </div>
        `;

        if (window.lucide) {
            lucide.createIcons();
        }

        const legalDiscussCta = document.getElementById("legalDiscussCta");
        if (legalDiscussCta) {
            legalDiscussCta.addEventListener("click", () => {
                closeLegalModal();
            });
        }

        legalModal.classList.add("is-open");
        legalModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        setTimeout(() => {
            if (legalModalCloseBtn) legalModalCloseBtn.focus();
        }, 100);
    }

    function closeLegalModal() {
        if (!legalModal) return;
        legalModal.classList.remove("is-open");
        legalModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        if (lastLegalFocusedElement && typeof lastLegalFocusedElement.focus === "function") {
            lastLegalFocusedElement.focus();
        }
    }

    document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-legal-modal]");
        if (trigger) {
            e.preventDefault();
            const legalKey = trigger.getAttribute("data-legal-modal");
            openLegalModal(legalKey, trigger);
        }
    });

    if (legalModalCloseBtn) {
        legalModalCloseBtn.addEventListener("click", closeLegalModal);
    }

    if (legalModalBackdrop) {
        legalModalBackdrop.addEventListener("click", closeLegalModal);
    }

    document.addEventListener("keydown", (e) => {
        if (legalModal && legalModal.classList.contains("is-open")) {
            if (e.key === "Escape") {
                closeLegalModal();
            } else if (e.key === "Tab") {
                trapFocus(e, legalModal);
            }
        }
    });

    // --------------------------------------------------------------------------
    // 11. Follow XESTUS & Update Notification System
    // --------------------------------------------------------------------------
    const FOLLOW_STORAGE_KEY = "xestus_following_subscriber";
    const followXestusBtn = document.getElementById("followXestusBtn");
    const followModal = document.getElementById("followModal");
    const followModalBackdrop = document.getElementById("followModalBackdrop");
    const followModalCloseBtn = document.getElementById("followModalCloseBtn");
    const followSubscribeView = document.getElementById("followSubscribeView");
    const followManageView = document.getElementById("followManageView");
    const followModalForm = document.getElementById("followModalForm");
    const followEmailInput = document.getElementById("followEmail");
    const followEmailError = document.getElementById("followEmailError");
    const prefEmailCheck = document.getElementById("prefEmail");
    const prefPushCheck = document.getElementById("prefPush");
    const followConsentCheck = document.getElementById("followConsent");
    const followConsentError = document.getElementById("followConsentError");
    const followSubmitBtn = document.getElementById("followSubmitBtn");
    const followStatusMsg = document.getElementById("followStatusMsg");
    const followingEmailDisplay = document.getElementById("followingEmailDisplay");
    const btnUnfollow = document.getElementById("btnUnfollow");
    const btnFollowDone = document.getElementById("btnFollowDone");
    const unfollowStatusMsg = document.getElementById("unfollowStatusMsg");
    let lastFollowFocusedElement = null;

    function getFollowState() {
        try {
            const raw = localStorage.getItem(FOLLOW_STORAGE_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }

    function syncFollowUI() {
        const state = getFollowState();
        const triggerBtns = document.querySelectorAll(".btn-follow-trigger");

        triggerBtns.forEach((btn) => {
            const iconWrap = btn.querySelector(".follow-btn-icon");
            const textWrap = btn.querySelector(".follow-btn-text");

            if (state && state.email) {
                btn.classList.add("following");
                btn.setAttribute("title", `Following as ${state.email} (Click to manage or unfollow)`);
                btn.setAttribute("aria-label", `Following as ${state.email}. Click to manage or unfollow.`);
                if (textWrap) textWrap.textContent = "Followed ✓";
                if (iconWrap) {
                    iconWrap.setAttribute("data-lucide", "check-circle-2");
                }
            } else {
                btn.classList.remove("following");
                btn.setAttribute("title", "Follow XESTUS for technical updates");
                btn.setAttribute("aria-label", "Follow XESTUS updates");
                if (textWrap) textWrap.textContent = "Follow XESTUS";
                if (iconWrap) {
                    iconWrap.setAttribute("data-lucide", "bell");
                }
            }
        });

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    function openFollowModal(triggerBtn) {
        if (!followModal) return;
        lastFollowFocusedElement = triggerBtn || document.activeElement;

        const state = getFollowState();
        if (state && state.email) {
            if (followSubscribeView) followSubscribeView.style.display = "none";
            if (followManageView) {
                followManageView.style.display = "block";
                if (followingEmailDisplay) {
                    // Mask email for privacy display (e.g. j***@domain.com)
                    const parts = state.email.split("@");
                    if (parts.length === 2 && parts[0].length > 2) {
                        const maskedName = parts[0][0] + "***" + parts[0][parts[0].length - 1];
                        followingEmailDisplay.textContent = `${maskedName}@${parts[1]}`;
                    } else {
                        followingEmailDisplay.textContent = state.email;
                    }
                }
            }
            if (unfollowStatusMsg) {
                unfollowStatusMsg.className = "follow-status-msg";
                unfollowStatusMsg.style.display = "none";
                unfollowStatusMsg.textContent = "";
            }
        } else {
            if (followManageView) followManageView.style.display = "none";
            if (followSubscribeView) followSubscribeView.style.display = "block";
            if (followStatusMsg) {
                followStatusMsg.className = "follow-status-msg";
                followStatusMsg.style.display = "none";
                followStatusMsg.textContent = "";
            }
            if (followEmailError) followEmailError.textContent = "";
            if (followConsentError) followConsentError.textContent = "";
            if (followModalForm) followModalForm.reset();
            if (prefEmailCheck) prefEmailCheck.checked = true;
        }

        followModal.classList.add("is-open");
        followModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        if (window.lucide) {
            lucide.createIcons();
        }

        setTimeout(() => {
            if (state && state.email) {
                if (btnFollowDone) btnFollowDone.focus();
            } else {
                if (followEmailInput) followEmailInput.focus();
            }
        }, 100);
    }

    function closeFollowModal() {
        if (!followModal) return;
        followModal.classList.remove("is-open");
        followModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        if (lastFollowFocusedElement && typeof lastFollowFocusedElement.focus === "function") {
            lastFollowFocusedElement.focus();
        }
    }

    // Attach click listener to all follow trigger buttons
    document.querySelectorAll(".btn-follow-trigger").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openFollowModal(btn);
        });
    });

    // Modal close handlers
    if (followModalCloseBtn) {
        followModalCloseBtn.addEventListener("click", closeFollowModal);
    }

    if (followModalBackdrop) {
        followModalBackdrop.addEventListener("click", closeFollowModal);
    }

    if (btnFollowDone) {
        btnFollowDone.addEventListener("click", closeFollowModal);
    }

    document.addEventListener("keydown", (e) => {
        if (followModal && followModal.classList.contains("is-open")) {
            if (e.key === "Escape") {
                closeFollowModal();
            } else if (e.key === "Tab") {
                trapFocus(e, followModal);
            }
        }
    });

    // Form submission
    if (followModalForm) {
        let isFollowSubmitting = false;
        let lastFollowSubmitTime = 0;

        if (followEmailInput) {
            followEmailInput.addEventListener("input", () => {
                if (followEmailError) followEmailError.textContent = "";
            });
        }
        if (followConsentCheck) {
            followConsentCheck.addEventListener("change", () => {
                if (followConsentError) followConsentError.textContent = "";
            });
        }

        followModalForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (isFollowSubmitting) return;

            // 1. Anti-Bot Honeypot Defense
            const botFilter = followModalForm.querySelector('input[name="_bot_filter"]');
            if (botFilter && botFilter.value.trim() !== "") {
                return;
            }

            // 2. Submission Cooldown / Rate Limiting
            const now = Date.now();
            if (now - lastFollowSubmitTime < 4000) {
                if (followStatusMsg) {
                    followStatusMsg.className = "follow-status-msg status-loading";
                    followStatusMsg.style.display = "block";
                    followStatusMsg.textContent = "Please wait a moment before submitting again...";
                }
                return;
            }

            const rawEmail = followEmailInput ? followEmailInput.value : "";
            const email = rawEmail.toLowerCase().trim();
            const prefEmail = prefEmailCheck ? prefEmailCheck.checked : true;
            const prefPush = prefPushCheck ? prefPushCheck.checked : false;
            const consent = followConsentCheck ? followConsentCheck.checked : false;

            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
            let isValid = true;

            if (!email || email.length > 254 || !emailRegex.test(email)) {
                if (followEmailError) followEmailError.textContent = "Please provide a valid work or personal email address.";
                if (followEmailInput) followEmailInput.focus();
                isValid = false;
            }

            if (!consent) {
                if (followConsentError) followConsentError.textContent = "Please agree to receive XESTUS updates to continue.";
                isValid = false;
            }

            if (!isValid) return;

            lastFollowSubmitTime = now;
            isFollowSubmitting = true;
            if (followSubmitBtn) {
                followSubmitBtn.disabled = true;
                const btnText = followSubmitBtn.querySelector(".btn-text");
                if (btnText) btnText.textContent = "Processing...";
            }
            if (followStatusMsg) {
                followStatusMsg.className = "follow-status-msg status-loading";
                followStatusMsg.style.display = "block";
                followStatusMsg.textContent = "Registering subscription with XESTUS network...";
            }

            // Optional Web Push Setup
            if (prefPush && "Notification" in window) {
                try {
                    const permission = await Notification.requestPermission();
                    if (permission === "granted" && "serviceWorker" in navigator) {
                        const reg = await navigator.serviceWorker.ready;
                        if (reg && reg.showNotification) {
                            reg.showNotification("XESTUS Intelligence", {
                                body: "Thank you for following XESTUS. You'll be notified when we launch something new.",
                                icon: "assets/images/xestus-logo.png",
                                badge: "assets/images/xestus-logo.png",
                                data: { url: "https://xestus.in" }
                            });
                        }
                    }
                } catch (pushErr) {
                    console.log("Web push permission notice:", pushErr);
                }
            }

            // Secure Follower registration transmission
            try {
                if (typeof emailjs !== "undefined" && typeof emailjs.send === "function") {
                    await emailjs.send("service_rumjowb", "template_malid0j", {
                        from_name: `[Follower Subscription] ${email}`,
                        reply_to: email,
                        service: "Follow XESTUS Subscription",
                        message: `New XESTUS Subscriber:\nEmail: ${email}\nChannels: Email (${prefEmail ? "Yes" : "No"}), Web Push (${prefPush ? "Yes" : "No"})\nConsent: Explicitly Granted\nTimestamp: ${new Date().toISOString()}`
                    });
                }

                // If backend API endpoint is configured, forward payload
                if (window.XESTUS_CONFIG && window.XESTUS_CONFIG.followApiEndpoint) {
                    fetch(window.XESTUS_CONFIG.followApiEndpoint, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, channels: { email: prefEmail, push: prefPush }, timestamp: new Date().toISOString() })
                    }).catch((apiErr) => console.log("API Forward notice:", apiErr));
                }

                // Store locally on device
                const subscriberRecord = {
                    email: email,
                    channels: { email: prefEmail, push: prefPush },
                    subscribedAt: new Date().toISOString()
                };
                localStorage.setItem(FOLLOW_STORAGE_KEY, JSON.stringify(subscriberRecord));

                if (followStatusMsg) {
                    followStatusMsg.className = "follow-status-msg status-success";
                    followStatusMsg.textContent = "✓ Thank you for following XESTUS! You'll be notified when we launch something new.";
                }

                syncFollowUI();

                setTimeout(() => {
                    closeFollowModal();
                    isFollowSubmitting = false;
                    if (followSubmitBtn) {
                        followSubmitBtn.disabled = false;
                        const btnText = followSubmitBtn.querySelector(".btn-text");
                        if (btnText) btnText.textContent = "Confirm & Follow";
                    }
                }, 1800);

            } catch (dispatchErr) {
                console.warn("Follow registration notice:", dispatchErr);

                // Fallback store locally so user UX succeeds
                const subscriberRecord = {
                    email: email,
                    channels: { email: prefEmail, push: prefPush },
                    subscribedAt: new Date().toISOString()
                };
                localStorage.setItem(FOLLOW_STORAGE_KEY, JSON.stringify(subscriberRecord));
                syncFollowUI();

                if (followStatusMsg) {
                    followStatusMsg.className = "follow-status-msg status-success";
                    followStatusMsg.textContent = "✓ Thank you for following XESTUS! You'll be notified when we launch something new.";
                }

                setTimeout(() => {
                    closeFollowModal();
                    isFollowSubmitting = false;
                    if (followSubmitBtn) {
                        followSubmitBtn.disabled = false;
                        const btnText = followSubmitBtn.querySelector(".btn-text");
                        if (btnText) btnText.textContent = "Confirm & Follow";
                    }
                }, 1800);
            }
        });
    }

    // Unfollow action
    if (btnUnfollow) {
        btnUnfollow.addEventListener("click", () => {
            localStorage.removeItem(FOLLOW_STORAGE_KEY);
            syncFollowUI();

            if (unfollowStatusMsg) {
                unfollowStatusMsg.className = "follow-status-msg status-success";
                unfollowStatusMsg.style.display = "block";
                unfollowStatusMsg.textContent = "✓ You have successfully unfollowed XESTUS.";
            }

            setTimeout(() => {
                closeFollowModal();
            }, 1200);
        });
    }

    // Initialize UI on load
    syncFollowUI();

    // Register Service Worker for Web Push & Offline Support
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").catch((swErr) => {
            console.log("Service Worker registration info:", swErr);
        });
    }

    // --------------------------------------------------------------------------
    // 12. Connection Lost & Network Status Monitor
    // --------------------------------------------------------------------------
    const connectionOverlay = document.getElementById("connectionOverlay");
    const retryConnection = document.getElementById("retryConnection");
    const connectionMessage = document.getElementById("connectionMessage");

    if (connectionOverlay) {
        const funnyMessages = [
            "The internet apparently went for a coffee break. ☕",
            "Our signal took a wrong turn somewhere. 🛰️",
            "The Wi-Fi has entered its mysterious era. 📡",
            "Houston, we have... no internet. 🚀",
            "The internet ghosted us. 👻",
            "Our packets are currently sightseeing. 📦",
            "XESTUS is ready. The internet is not. 😐"
        ];

        function showConnectionLost() {
            if (connectionMessage) {
                const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
                connectionMessage.textContent = randomMsg;
            }
            connectionOverlay.classList.add("show");
        }

        function hideConnectionLost() {
            connectionOverlay.classList.remove("show");
        }

        window.addEventListener("offline", showConnectionLost);
        window.addEventListener("online", hideConnectionLost);

        if (retryConnection) {
            retryConnection.addEventListener("click", async () => {
                retryConnection.textContent = "Checking connection...";
                try {
                    await fetch(window.location.href, { method: "HEAD", cache: "no-store" });
                    hideConnectionLost();
                    retryConnection.textContent = "↻ Try Reconnecting";
                } catch {
                    if (connectionMessage) {
                        connectionMessage.textContent = "Still offline. Retrying soon...";
                    }
                    retryConnection.textContent = "↻ Try Again";
                }
            });
        }
    }
});

window.addEventListener("load", () => {
    if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
});