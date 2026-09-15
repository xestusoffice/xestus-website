/**
 * XESTUS | Core Interactive Logic & Controller
 * Tagline: Intelligence Beyond Limits
 * Version: 3.2.0 (Phase 2 Navigation & Hero Optimization)
 */

"use strict";

// --------------------------------------------------------------------------
// 0. Global Configuration & Telemetry Boundaries
// --------------------------------------------------------------------------
window.XESTUS_CONFIG = window.XESTUS_CONFIG || {
    // Analytics & Telemetry Endpoint (Leave empty for static/syncing fallback mode)
    statsApiEndpoint: "", // e.g. "https://api.xestus.in/api/v1/stats" or Serverless / Worker endpoint
    statsRefreshIntervalMs: 300000 // 5 minutes cache TTL
};

// Security sanitization utility against XSS/HTML injection
function escapeHTML(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// --------------------------------------------------------------------------
// 0B. Adaptive Universal Performance Engine (XESTUS Progressive Enhancement)
// --------------------------------------------------------------------------
window.XESTUS_PERF = (function () {
    let activeTier = "tier-1";
    const tierListeners = [];

    function detectHardwareTier() {
        if (typeof window === "undefined") return "tier-1";

        // 1. Accessibility First: Reduced Motion -> Tier 4
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return "tier-4";
        }

        // 2. Data Saver / Low Bandwidth -> Tier 3
        if (typeof navigator !== "undefined" && navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType === "2g" || navigator.connection.effectiveType === "slow-2g")) {
            return "tier-3";
        }

        const cores = (typeof navigator !== "undefined" && navigator.hardwareConcurrency) || 4;
        const memory = (typeof navigator !== "undefined" && navigator.deviceMemory) || 4; // GB (Chrome/Edge/Opera API)
        const isTouchMobile = typeof window !== "undefined" && (window.innerWidth <= 640 || (window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches));

        // 3. Low-End Device -> Tier 3 (Entry Android, <=2GB RAM, <=4 cores on mobile)
        if ((memory <= 2 && isTouchMobile) || (cores <= 2) || (isTouchMobile && memory <= 3)) {
            return "tier-3";
        }

        // 4. Mid-Range Device -> Tier 2 (Tablets, mid phones, low laptops)
        if (isTouchMobile || memory <= 4 || cores <= 4 || window.innerWidth <= 1024) {
            return "tier-2";
        }

        // 5. High-End Desktop / Laptop -> Tier 1
        return "tier-1";
    }

    function setTier(tier) {
        if (activeTier === tier) return;
        activeTier = tier;
        if (typeof document !== "undefined" && document.documentElement) {
            document.documentElement.setAttribute("data-perf-tier", tier);
        }
        tierListeners.forEach((fn) => {
            try { fn(tier); } catch (e) { console.warn("Perf listener error:", e); }
        });
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("xestus:perf-tier-changed", { detail: { tier } }));
        }
    }

    // Initialize immediate tier detection
    activeTier = detectHardwareTier();
    if (typeof document !== "undefined" && document.documentElement) {
        document.documentElement.setAttribute("data-perf-tier", activeTier);
    }

    // Dynamic 60 FPS Watchdog: Monitors frame time and gracefully downscales if lag occurs
    let frameTimes = [];
    let lastFrameTime = (typeof performance !== "undefined" && performance.now) ? performance.now() : 0;
    let isMonitoring = true;
    let downgradeTimer = null;

    function monitorFPS(now) {
        if (!isMonitoring || typeof requestAnimationFrame === "undefined") return;
        const delta = now - lastFrameTime;
        lastFrameTime = now;

        if (delta > 0 && delta < 200) {
            frameTimes.push(1000 / delta);
            if (frameTimes.length > 45) frameTimes.shift();

            // Check average FPS over 45 frames
            if (frameTimes.length >= 30) {
                const avgFPS = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
                if (avgFPS < 38) {
                    if (!downgradeTimer) {
                        downgradeTimer = setTimeout(() => {
                            if (activeTier === "tier-1") {
                                setTier("tier-2");
                                frameTimes = [];
                            } else if (activeTier === "tier-2") {
                                setTier("tier-3");
                                frameTimes = [];
                                isMonitoring = false; // Stop monitoring at tier-3
                            }
                            downgradeTimer = null;
                        }, 2500);
                    }
                } else {
                    if (downgradeTimer) {
                        clearTimeout(downgradeTimer);
                        downgradeTimer = null;
                    }
                }
            }
        }
        requestAnimationFrame(monitorFPS);
    }

    if (typeof requestAnimationFrame !== "undefined" && activeTier !== "tier-4" && activeTier !== "tier-3") {
        requestAnimationFrame(monitorFPS);
    }

    // Listen for OS reduced motion toggle
    if (typeof window !== "undefined" && window.matchMedia) {
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (motionQuery.addEventListener) {
            motionQuery.addEventListener("change", (e) => {
                setTier(e.matches ? "tier-4" : detectHardwareTier());
            });
        }
    }

    return {
        getTier: () => activeTier,
        setTier: (t) => setTier(t),
        onTierChange: (fn) => {
            if (typeof fn === "function") tierListeners.push(fn);
        },
        isLowEnd: () => activeTier === "tier-3" || activeTier === "tier-4",
        isUltra: () => activeTier === "tier-1"
    };
})();

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
    const revealElements = document.querySelectorAll(".reveal-item, .hidden");
    if (revealElements.length > 0) {
        const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (typeof IntersectionObserver === "undefined" || prefersReduced) {
            revealElements.forEach((el) => el.classList.add("show"));
        } else {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });

            revealElements.forEach((el) => revealObserver.observe(el));
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
    // 6. XESTUS 3D Innovation Core & Kinetic Particle Canvas Engine
    // --------------------------------------------------------------------------
    const heroSection = document.getElementById("home");
    const starfieldCanvas = document.getElementById("heroStarfieldCanvas");
    const coreCanvas = document.getElementById("heroInnovationCoreCanvas");
    const coreContainer = document.getElementById("innovationCoreContainer");
    const hudTags = document.querySelectorAll(".hud-tag");
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 6A. High-Performance Adaptive Starfield Canvas
    if (starfieldCanvas && starfieldCanvas.getContext) {
        const ctx = starfieldCanvas.getContext("2d");
        let width = 0, height = 0;
        let particles = [];
        let animId = null;
        let isHeroVisible = true;
        let mousePos = { x: -9999, y: -9999 };

        function getStarfieldConfig() {
            const tier = window.XESTUS_PERF ? window.XESTUS_PERF.getTier() : "tier-1";
            if (tier === "tier-4") return { count: 0, maxDist: 0, connect: false };
            if (tier === "tier-3") return { count: window.innerWidth < 768 ? 10 : 16, maxDist: 0, connect: false };
            if (tier === "tier-2") return { count: window.innerWidth < 768 ? 20 : 32, maxDist: 75, connect: true };
            return { count: window.innerWidth < 768 ? 28 : 55, maxDist: 120, connect: true };
        }

        function resizeCanvas() {
            if (!heroSection) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = heroSection.clientWidth;
            height = heroSection.clientHeight;
            starfieldCanvas.width = width * dpr;
            starfieldCanvas.height = height * dpr;
            starfieldCanvas.style.width = `${width}px`;
            starfieldCanvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        }

        function createParticles() {
            particles = [];
            const config = getStarfieldConfig();
            if (config.count === 0) return;
            const colors = ["#00bfff", "#38d6ff", "#6366f1", "#00ff88", "#ffffff"];
            for (let i = 0; i < config.count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.6 + 0.7,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    baseAlpha: Math.random() * 0.5 + 0.15,
                    alpha: Math.random() * 0.5 + 0.15,
                    pulseSpeed: Math.random() * 0.02 + 0.008,
                    pulsePhase: Math.random() * Math.PI * 2
                });
            }
        }

        function drawStarfield() {
            if (!isHeroVisible) return;
            const tier = window.XESTUS_PERF ? window.XESTUS_PERF.getTier() : "tier-1";
            if (tier === "tier-4") return; // static background for reduced motion

            ctx.clearRect(0, 0, width, height);
            const config = getStarfieldConfig();

            // Update & draw background starfield particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (!prefersReducedMotion && tier !== "tier-4") {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0) p.x = width;
                    else if (p.x > width) p.x = 0;
                    if (p.y < 0) p.y = height;
                    else if (p.y > height) p.y = 0;

                    p.pulsePhase += p.pulseSpeed;
                    p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.2;
                }

                // Interactive mouse repulsion/pull (Tier 1 & Tier 2 only)
                if (tier === "tier-1" || tier === "tier-2") {
                    const dx = mousePos.x - p.x;
                    const dy = mousePos.y - p.y;
                    const distToMouse = Math.hypot(dx, dy);
                    if (distToMouse < 130) {
                        const force = (1 - distToMouse / 130) * 0.7;
                        p.x -= (dx / distToMouse) * force;
                        p.y -= (dy / distToMouse) * force;
                    }
                }

                ctx.save();
                ctx.globalAlpha = Math.max(0.08, Math.min(0.9, p.alpha));
                ctx.fillStyle = p.color;
                if (tier === "tier-1") {
                    ctx.shadowColor = p.color;
                    ctx.shadowBlur = p.radius > 1.5 ? 6 : 3;
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                // Connect nearby nodes
                if (config.connect) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                        if (dist < config.maxDist) {
                            const lineAlpha = (1 - dist / config.maxDist) * 0.15;
                            ctx.save();
                            ctx.globalAlpha = lineAlpha;
                            ctx.strokeStyle = "#00bfff";
                            ctx.lineWidth = 0.65;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                            ctx.restore();
                        }
                    }
                }
            }

            if (!prefersReducedMotion && tier !== "tier-4") {
                animId = requestAnimationFrame(drawStarfield);
            }
        }

        resizeCanvas();
        createParticles();

        if (!prefersReducedMotion) {
            animId = requestAnimationFrame(drawStarfield);
        } else {
            drawStarfield();
        }

        if ("IntersectionObserver" in window && heroSection) {
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    isHeroVisible = entry.isIntersecting;
                    if (isHeroVisible && !prefersReducedMotion && !animId) {
                        animId = requestAnimationFrame(drawStarfield);
                    } else if (!isHeroVisible && animId) {
                        cancelAnimationFrame(animId);
                        animId = null;
                    }
                });
            }, { threshold: 0.05 });
            heroObserver.observe(heroSection);
        }

        if (heroSection) {
            heroSection.addEventListener("pointermove", (e) => {
                const rect = heroSection.getBoundingClientRect();
                mousePos.x = e.clientX - rect.left;
                mousePos.y = e.clientY - rect.top;
            }, { passive: true });

            heroSection.addEventListener("pointerleave", () => {
                mousePos.x = -9999;
                mousePos.y = -9999;
            }, { passive: true });
        }

        window.addEventListener("resize", () => {
            resizeCanvas();
            createParticles();
        }, { passive: true });

        if (window.XESTUS_PERF) {
            window.XESTUS_PERF.onTierChange(() => {
                createParticles();
            });
        }
    }

    // 6B. XESTUS 3D Innovation Core Engine (Hyper-Premium Neural Core & Hologram Matrix)
    if (coreCanvas && coreCanvas.getContext) {
        const ctx = coreCanvas.getContext("2d");
        let coreW = 0, coreH = 0;
        let coreAnimId = null;
        let isCoreVisible = true;

        // 3D Model Dynamic State
        let rotX = 0.12;
        let rotY = 0;
        let targetRotX = 0.12;
        let targetRotY = 0;
        let ringAngle1 = 0;
        let ringAngle2 = 0;
        let ringAngle3 = 0;
        let energyPulse = 0;
        let crystalRot = 0;

        // 1. Dense Fibonacci Neural Constellation Sphere
        const SPHERE_NODE_COUNT = 64;
        const sphereNodes = [];
        for (let i = 0; i < SPHERE_NODE_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / SPHERE_NODE_COUNT);
            const theta = Math.sqrt(SPHERE_NODE_COUNT * Math.PI) * phi;
            const r = 96 + (Math.sin(i * 1.8) * 3);
            sphereNodes.push({
                x: r * Math.sin(phi) * Math.cos(theta),
                y: r * Math.cos(phi),
                z: r * Math.sin(phi) * Math.sin(theta),
                baseR: r,
                size: Math.random() * 2.2 + 1.2,
                color: i % 5 === 0 ? "#ffffff" : (i % 4 === 0 ? "#00ff88" : (i % 3 === 0 ? "#38d6ff" : "#00bfff")),
                pulseOffset: Math.random() * Math.PI * 2
            });
        }

        // Synaptic Signal Impulses traveling across neural connections
        const synapticSignals = [];
        for (let s = 0; s < 12; s++) {
            synapticSignals.push({
                fromIdx: Math.floor(Math.random() * SPHERE_NODE_COUNT),
                toIdx: Math.floor(Math.random() * SPHERE_NODE_COUNT),
                progress: Math.random(),
                speed: Math.random() * 0.02 + 0.015,
                color: s % 2 === 0 ? "#ffffff" : "#38d6ff"
            });
        }

        // 2. Multi-Layer Volumetric 3D "X" Structural Core
        const xStruts = [];
        const X_POINTS = 16;
        const X_SPAN = 64;
        // Diagonal Beam 1: Top-Left to Bottom-Right
        for (let i = 0; i <= X_POINTS; i++) {
            const t = (i / X_POINTS - 0.5) * 2;
            const px = t * X_SPAN;
            const py = t * (X_SPAN * 0.95);
            xStruts.push({ x: px, y: py, z: -8, size: 2.8, beam: 1, color: "#38d6ff" });
            xStruts.push({ x: px, y: py, z: 0, size: 3.6, beam: 1, color: "#ffffff" });
            xStruts.push({ x: px, y: py, z: 8, size: 2.8, beam: 1, color: "#00bfff" });
        }
        // Diagonal Beam 2: Top-Right to Bottom-Left
        for (let i = 0; i <= X_POINTS; i++) {
            const t = (i / X_POINTS - 0.5) * 2;
            const px = t * X_SPAN;
            const py = -t * (X_SPAN * 0.95);
            xStruts.push({ x: px, y: py, z: -8, size: 2.8, beam: 2, color: "#38d6ff" });
            xStruts.push({ x: px, y: py, z: 0, size: 3.6, beam: 2, color: "#ffffff" });
            xStruts.push({ x: px, y: py, z: 8, size: 2.8, beam: 2, color: "#00bfff" });
        }

        // 3. Upward Volumetric Hologram Particle Stream
        const UPWARD_BEAM_PARTICLES = 22;
        const beamParticles = [];
        for (let b = 0; b < UPWARD_BEAM_PARTICLES; b++) {
            beamParticles.push({
                x: (Math.random() - 0.5) * 80,
                y: Math.random() * 120 + 30, // From pedestal upward
                z: (Math.random() - 0.5) * 40,
                vy: Math.random() * 1.5 + 0.8,
                size: Math.random() * 1.8 + 0.8,
                alpha: Math.random() * 0.6 + 0.2
            });
        }

        // 4. Floating 3D Quantum Data Crystal Vertices (Octahedron)
        const crystalVertices = [
            { x: 0, y: -16, z: 0 },
            { x: 14, y: 0, z: 0 },
            { x: 0, y: 0, z: 14 },
            { x: -14, y: 0, z: 0 },
            { x: 0, y: 0, z: -14 },
            { x: 0, y: 16, z: 0 }
        ];
        const crystalEdges = [
            [0, 1], [0, 2], [0, 3], [0, 4],
            [5, 1], [5, 2], [5, 3], [5, 4],
            [1, 2], [2, 3], [3, 4], [4, 1]
        ];

        function resizeCoreCanvas() {
            if (!coreContainer) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            coreW = coreContainer.clientWidth || 480;
            coreH = coreContainer.clientHeight || 480;
            coreCanvas.width = coreW * dpr;
            coreCanvas.height = coreH * dpr;
            coreCanvas.style.width = `${coreW}px`;
            coreCanvas.style.height = `${coreH}px`;
            ctx.scale(dpr, dpr);
        }

        function project3D(x, y, z, cx, cy, focalLength = 400) {
            // Pitch (rotX)
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);
            const y1 = y * cosX - z * sinX;
            const z1 = y * sinX + z * cosX;

            // Yaw (rotY)
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            const x2 = x * cosY + z1 * sinY;
            const z2 = -x * sinY + z1 * cosY;

            const scale = focalLength / (focalLength + z2);
            return {
                x: cx + x2 * scale,
                y: cy + y1 * scale,
                z: z2,
                scale: scale
            };
        }

        // Draw Layered Cybernetic Hologram Emission Pedestal
        function drawCyberPedestal(cx, cy, baseScale = 1, tier = "tier-1") {
            const baseY = cy + 128 * baseScale;
            const baseW = 175 * baseScale;
            const baseH = 44 * baseScale;
            const isLow = tier === "tier-3" || tier === "tier-4";

            ctx.save();

            // 1. Upward Volumetric Hologram Light Pillar
            if (!isLow) {
                const gradBeam = ctx.createLinearGradient(cx, baseY, cx, cy);
                gradBeam.addColorStop(0, "rgba(0, 191, 255, 0.35)");
                gradBeam.addColorStop(0.35, "rgba(56, 214, 255, 0.16)");
                gradBeam.addColorStop(0.7, "rgba(0, 255, 136, 0.08)");
                gradBeam.addColorStop(1, "transparent");

                ctx.fillStyle = gradBeam;
                ctx.beginPath();
                ctx.moveTo(cx - baseW * 0.72, baseY);
                ctx.lineTo(cx - 36 * baseScale, cy);
                ctx.lineTo(cx + 36 * baseScale, cy);
                ctx.lineTo(cx + baseW * 0.72, baseY);
                ctx.closePath();
                ctx.fill();

                // Core Intense Center Light Column
                const centerBeam = ctx.createLinearGradient(cx, baseY, cx, cy);
                centerBeam.addColorStop(0, "rgba(255, 255, 255, 0.5)");
                centerBeam.addColorStop(0.5, "rgba(0, 191, 255, 0.22)");
                centerBeam.addColorStop(1, "transparent");
                ctx.fillStyle = centerBeam;
                ctx.beginPath();
                ctx.moveTo(cx - 20 * baseScale, baseY);
                ctx.lineTo(cx - 8 * baseScale, cy);
                ctx.lineTo(cx + 8 * baseScale, cy);
                ctx.lineTo(cx + 20 * baseScale, baseY);
                ctx.closePath();
                ctx.fill();
            }

            // 2. Concentric Brushed Metallic Glowing Platform Rings
            const rings = isLow
                ? [
                    { r: baseW, color: "rgba(0, 191, 255, 0.65)", w: 2 },
                    { r: baseW * 0.65, color: "rgba(0, 255, 136, 0.5)", w: 1.5 }
                ]
                : [
                    { r: baseW, color: "rgba(0, 191, 255, 0.75)", w: 2.2 },
                    { r: baseW * 0.84, color: "rgba(56, 214, 255, 0.5)", w: 1.2, dashed: true },
                    { r: baseW * 0.68, color: "rgba(0, 255, 136, 0.65)", w: 1.8 },
                    { r: baseW * 0.48, color: "rgba(0, 191, 255, 0.45)", w: 1.2 },
                    { r: baseW * 0.26, color: "rgba(255, 255, 255, 0.8)", w: 2 }
                ];

            rings.forEach((ring) => {
                ctx.beginPath();
                ctx.ellipse(cx, baseY, ring.r, baseH * (ring.r / baseW), 0, 0, Math.PI * 2);
                ctx.strokeStyle = ring.color;
                ctx.lineWidth = ring.w;
                if (ring.dashed) {
                    ctx.setLineDash([5, 5]);
                } else {
                    ctx.setLineDash([]);
                }
                ctx.stroke();
            });
            ctx.setLineDash([]);

            // 3. Radial Circuit Calibration Ticks
            if (!isLow) {
                const tickCount = tier === "tier-2" ? 14 : 24;
                for (let i = 0; i < tickCount; i++) {
                    const angle = (i / tickCount) * Math.PI * 2 + ringAngle1 * 0.4;
                    const rOuter = baseW;
                    const rInner = baseW * 0.88;
                    const x1 = cx + Math.cos(angle) * rOuter;
                    const y1 = baseY + Math.sin(angle) * (baseH * (rOuter / baseW));
                    const x2 = cx + Math.cos(angle) * rInner;
                    const y2 = baseY + Math.sin(angle) * (baseH * (rInner / baseW));

                    ctx.strokeStyle = i % 4 === 0 ? "rgba(0, 255, 136, 0.8)" : "rgba(0, 191, 255, 0.55)";
                    ctx.lineWidth = i % 4 === 0 ? 1.8 : 1;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();

                    // Glowing bead accents on outer ring
                    if (i % 3 === 0) {
                        ctx.fillStyle = i % 6 === 0 ? "#00ff88" : "#38d6ff";
                        ctx.beginPath();
                        ctx.arc(x1, y1, 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // 4. Central Radiant Energy Core on Platform
            const coreDisc = ctx.createRadialGradient(cx, baseY, 0, cx, baseY, 40 * baseScale);
            coreDisc.addColorStop(0, "rgba(255, 255, 255, 0.85)");
            coreDisc.addColorStop(0.3, "rgba(0, 191, 255, 0.65)");
            coreDisc.addColorStop(0.7, "rgba(0, 255, 136, 0.25)");
            coreDisc.addColorStop(1, "transparent");
            ctx.fillStyle = coreDisc;
            ctx.beginPath();
            ctx.ellipse(cx, baseY, 40 * baseScale, 12 * baseScale, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // Draw 3D Orbital Gyroscopic Ring with Realistic Depth and Glowing Beads
        function drawGyroscopicRing(cx, cy, radius, tiltDeg, ringAngle, color, isDashed = false, beadCount = 2, tier = "tier-1", isBack = false) {
            const tiltRad = (tiltDeg * Math.PI) / 180;
            const segments = 64;
            const points = [];

            for (let i = 0; i <= segments; i++) {
                const theta = (i / segments) * Math.PI * 2;
                const rx = radius * Math.cos(theta);
                const ry = radius * Math.sin(theta) * Math.sin(tiltRad);
                const rz = radius * Math.sin(theta) * Math.cos(tiltRad);
                points.push(project3D(rx, ry, rz, cx, cy));
            }

            // Draw either back half (z < 0) or front half (z >= 0) for true 3D interweaving
            ctx.save();
            ctx.strokeStyle = color;
            ctx.lineWidth = isBack ? 1.2 : 1.8;
            if (isDashed) {
                ctx.setLineDash([8, 6]);
            } else {
                ctx.setLineDash([]);
            }

            ctx.beginPath();
            let drawing = false;
            for (let i = 0; i < points.length; i++) {
                const pt = points[i];
                const matchesDepth = isBack ? (pt.z <= 10) : (pt.z > 10);
                if (matchesDepth) {
                    if (!drawing) {
                        ctx.moveTo(pt.x, pt.y);
                        drawing = true;
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                } else {
                    drawing = false;
                }
            }
            ctx.stroke();
            ctx.setLineDash([]);

            // Orbiting Data Beads on the matching depth layer
            for (let b = 0; b < beadCount; b++) {
                const beadTheta = ringAngle + (b * (Math.PI * 2)) / beadCount;
                const bx = radius * Math.cos(beadTheta);
                const by = radius * Math.sin(beadTheta) * Math.sin(tiltRad);
                const bz = radius * Math.sin(beadTheta) * Math.cos(tiltRad);
                const pt = project3D(bx, by, bz, cx, cy);

                const matchesDepth = isBack ? (pt.z <= 10) : (pt.z > 10);
                if (matchesDepth) {
                    // Bead Light Trail
                    if (tier === "tier-1") {
                        for (let t = 1; t <= 4; t++) {
                            const trailTheta = beadTheta - t * 0.05;
                            const tx = radius * Math.cos(trailTheta);
                            const ty = radius * Math.sin(trailTheta) * Math.sin(tiltRad);
                            const tz = radius * Math.sin(trailTheta) * Math.cos(tiltRad);
                            const trailPt = project3D(tx, ty, tz, cx, cy);
                            ctx.fillStyle = color;
                            ctx.globalAlpha = 0.4 / t;
                            ctx.beginPath();
                            ctx.arc(trailPt.x, trailPt.y, (3.5 - t * 0.6) * trailPt.scale, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }

                    // Main Glowing Bead
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = "#ffffff";
                    if (tier === "tier-1") {
                        ctx.shadowColor = color;
                        ctx.shadowBlur = 12;
                    }
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 3.8 * pt.scale, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.restore();
        }

        // Draw Translucent Glass Neural Sphere Shell with Fresnel Rim Glow
        function drawGlassSphereShell(cx, cy, radius, baseScale = 1, tier = "tier-1") {
            ctx.save();

            // Inner volumetric cyan core glow
            const innerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * baseScale);
            innerGlow.addColorStop(0, "rgba(0, 191, 255, 0.22)");
            innerGlow.addColorStop(0.5, "rgba(10, 30, 65, 0.35)");
            innerGlow.addColorStop(0.85, "rgba(0, 191, 255, 0.18)");
            innerGlow.addColorStop(1, "rgba(56, 214, 255, 0.4)");

            ctx.fillStyle = innerGlow;
            ctx.beginPath();
            ctx.arc(cx, cy, radius * baseScale, 0, Math.PI * 2);
            ctx.fill();

            // Glass Sphere Glowing Fresnel Rim
            ctx.strokeStyle = "rgba(56, 214, 255, 0.65)";
            ctx.lineWidth = 2;
            if (tier === "tier-1") {
                ctx.shadowColor = "rgba(0, 191, 255, 0.8)";
                ctx.shadowBlur = 18;
            }
            ctx.stroke();

            // Specular Reflection Highlight Arc (Top-Left)
            ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(cx, cy, radius * baseScale - 2, -Math.PI * 0.85, -Math.PI * 0.45);
            ctx.stroke();

            // Spherical Latitude & Longitude Coordinate Lines (Subtle Wireframe)
            if (tier === "tier-1" || tier === "tier-2") {
                ctx.strokeStyle = "rgba(0, 191, 255, 0.15)";
                ctx.lineWidth = 0.8;
                [-0.5, 0, 0.5].forEach((lat) => {
                    const latR = Math.sqrt(1 - lat * lat) * (radius * baseScale);
                    const latY = cy + lat * (radius * baseScale);
                    ctx.beginPath();
                    ctx.ellipse(cx, latY, latR, latR * 0.25, 0, 0, Math.PI * 2);
                    ctx.stroke();
                });
            }

            ctx.restore();
        }

        // Draw Floating 3D Quantum Tech Crystal (Upper Right)
        function drawQuantumCrystal(cx, cy, baseScale = 1, tier = "tier-1") {
            if (tier === "tier-3" || tier === "tier-4") return;

            const crystalX = cx + 185 * baseScale;
            const crystalY = cy - 115 * baseScale;
            crystalRot += 0.015;

            ctx.save();
            const cosC = Math.cos(crystalRot);
            const sinC = Math.sin(crystalRot);

            // Project crystal vertices
            const projV = crystalVertices.map((v) => {
                // Rotate around Y and X
                const x1 = v.x * cosC - v.z * sinC;
                const z1 = v.x * sinC + v.z * cosC;
                const y2 = v.y * cosC - z1 * sinC;
                const z2 = v.y * sinC + z1 * cosC;
                return {
                    x: crystalX + x1 * baseScale,
                    y: crystalY + y2 * baseScale,
                    z: z2
                };
            });

            // Draw wireframe edges
            ctx.strokeStyle = "rgba(56, 214, 255, 0.8)";
            ctx.lineWidth = 1.4;
            crystalEdges.forEach(([i1, i2]) => {
                ctx.beginPath();
                ctx.moveTo(projV[i1].x, projV[i1].y);
                ctx.lineTo(projV[i2].x, projV[i2].y);
                ctx.stroke();
            });

            // Vertices glowing dots
            projV.forEach((v) => {
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(v.x, v.y, 2 * baseScale, 0, Math.PI * 2);
                ctx.fill();
            });

            // Crystal Core Glow
            ctx.fillStyle = "rgba(0, 191, 255, 0.25)";
            ctx.beginPath();
            ctx.arc(crystalX, crystalY, 14 * baseScale, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        function renderInnovationCore() {
            if (!isCoreVisible) return;
            const tier = window.XESTUS_PERF ? window.XESTUS_PERF.getTier() : "tier-1";

            ctx.clearRect(0, 0, coreW, coreH);

            const cx = coreW / 2;
            const cy = coreH / 2 - 14;
            const baseScale = Math.min(coreW / 480, 1.15);
            const sphereRadius = 96 * baseScale;

            if (!prefersReducedMotion && tier !== "tier-4") {
                // Smooth spring damping for mouse parallax
                rotX += (targetRotX - rotX) * (tier === "tier-3" ? 0.03 : 0.05);
                rotY += (targetRotY - rotY) * (tier === "tier-3" ? 0.03 : 0.05) + (tier === "tier-3" ? 0.005 : 0.008);
                ringAngle1 += 0.016;
                ringAngle2 -= 0.012;
                ringAngle3 += 0.009;
                energyPulse += 0.04;
            }

            // 1. Draw Cybernetic Hologram Emission Pedestal Base
            drawCyberPedestal(cx, cy, baseScale, tier);

            // 2. Upward Beam Floating Particle Streams
            if (tier === "tier-1" || tier === "tier-2") {
                ctx.save();
                beamParticles.forEach((p) => {
                    if (!prefersReducedMotion) {
                        p.y -= p.vy;
                        if (p.y < 0) p.y = 120;
                    }
                    const px = cx + p.x * baseScale;
                    const py = cy + p.y * baseScale;
                    ctx.fillStyle = "#38d6ff";
                    ctx.globalAlpha = p.alpha * (p.y / 120);
                    ctx.beginPath();
                    ctx.arc(px, py, p.size * baseScale, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.restore();
            }

            // 3. Draw BACK Half of Gyroscopic Orbital Rings (Behind the Sphere)
            drawGyroscopicRing(cx, cy, 142 * baseScale, 36, ringAngle1, "rgba(0, 191, 255, 0.75)", false, 3, tier, true);
            drawGyroscopicRing(cx, cy, 168 * baseScale, -28, ringAngle2, "rgba(0, 255, 136, 0.7)", true, 2, tier, true);
            if (tier === "tier-1") {
                drawGyroscopicRing(cx, cy, 192 * baseScale, 64, ringAngle3, "rgba(99, 102, 241, 0.6)", false, 1, tier, true);
            }

            // 4. Draw Translucent Glass Neural Sphere Shell
            drawGlassSphereShell(cx, cy, 96, baseScale, tier);

            // 5. Project Sphere Neural Nodes
            const activeSphereCount = tier === "tier-3" || tier === "tier-4"
                ? 24
                : (tier === "tier-2" ? 44 : SPHERE_NODE_COUNT);

            const activeSphereNodes = sphereNodes.slice(0, activeSphereCount);
            const projectedSphere = activeSphereNodes.map((n, idx) => {
                const pulse = (tier === "tier-3" || tier === "tier-4") ? 0 : Math.sin(energyPulse + n.pulseOffset) * 3.5;
                const r = (n.baseR + pulse) * baseScale;
                const pt = project3D(n.x * (r / n.baseR), n.y * (r / n.baseR), n.z * (r / n.baseR), cx, cy);
                return {
                    ...n,
                    idx: idx,
                    screenX: pt.x,
                    screenY: pt.y,
                    z: pt.z,
                    scale: pt.scale
                };
            });

            // 6. Draw Dense Constellation Neural Network & Triangular Facets
            ctx.save();
            const MAX_DIST = (tier === "tier-1" ? 58 : 46) * baseScale;
            
            // Triangular Cyber Facets (Tier 1 & Tier 2)
            if (tier === "tier-1" || tier === "tier-2") {
                for (let i = 0; i < projectedSphere.length; i++) {
                    const n1 = projectedSphere[i];
                    if (n1.z < -10) continue; // Only front faces

                    for (let j = i + 1; j < projectedSphere.length; j++) {
                        const n2 = projectedSphere[j];
                        if (n2.z < -10) continue;
                        const d12 = Math.hypot(n1.x - n2.x, n1.y - n2.y, n1.z - n2.z);
                        if (d12 > MAX_DIST) continue;

                        for (let k = j + 1; k < projectedSphere.length; k++) {
                            const n3 = projectedSphere[k];
                            if (n3.z < -10) continue;
                            const d23 = Math.hypot(n2.x - n3.x, n2.y - n3.y, n2.z - n3.z);
                            const d31 = Math.hypot(n3.x - n1.x, n3.y - n1.y, n3.z - n1.z);

                            if (d23 < MAX_DIST && d31 < MAX_DIST) {
                                const avgZ = (n1.z + n2.z + n3.z) / 3;
                                const facetAlpha = Math.max(0.02, Math.min(0.12, (avgZ / (96 * baseScale)) * 0.12));
                                ctx.fillStyle = `rgba(0, 191, 255, ${facetAlpha})`;
                                ctx.beginPath();
                                ctx.moveTo(n1.screenX, n1.screenY);
                                ctx.lineTo(n2.screenX, n2.screenY);
                                ctx.lineTo(n3.screenX, n3.screenY);
                                ctx.closePath();
                                ctx.fill();
                            }
                        }
                    }
                }
            }

            // Neural Synaptic Connection Lines
            for (let i = 0; i < projectedSphere.length; i++) {
                const n1 = projectedSphere[i];
                for (let j = i + 1; j < projectedSphere.length; j++) {
                    const n2 = projectedSphere[j];
                    const dx = n1.x - n2.x;
                    const dy = n1.y - n2.y;
                    const dz = n1.z - n2.z;
                    const d3 = Math.hypot(dx, dy, dz);

                    if (d3 < MAX_DIST) {
                        const isBothFront = n1.z > 0 && n2.z > 0;
                        const alpha = (1 - d3 / MAX_DIST) * (isBothFront ? 0.55 : 0.18);
                        ctx.strokeStyle = `rgba(0, 191, 255, ${alpha})`;
                        ctx.lineWidth = (isBothFront ? 1.2 : 0.7) * n1.scale;
                        ctx.beginPath();
                        ctx.moveTo(n1.screenX, n1.screenY);
                        ctx.lineTo(n2.screenX, n2.screenY);
                        ctx.stroke();
                    }
                }
            }

            // Synaptic Active Data Impulses
            if (tier === "tier-1") {
                synapticSignals.forEach((sig) => {
                    if (!prefersReducedMotion) {
                        sig.progress += sig.speed;
                        if (sig.progress > 1) {
                            sig.progress = 0;
                            sig.fromIdx = Math.floor(Math.random() * activeSphereCount);
                            sig.toIdx = Math.floor(Math.random() * activeSphereCount);
                        }
                    }
                    const nA = projectedSphere[sig.fromIdx];
                    const nB = projectedSphere[sig.toIdx];
                    if (nA && nB) {
                        const sx = nA.screenX + (nB.screenX - nA.screenX) * sig.progress;
                        const sy = nA.screenY + (nB.screenY - nA.screenY) * sig.progress;
                        ctx.fillStyle = sig.color;
                        ctx.beginPath();
                        ctx.arc(sx, sy, 2.6 * nA.scale, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });
            }
            ctx.restore();

            // 7. Draw Bold Volumetric Luminous Cybernetic "X" Core
            ctx.save();
            const xArmLength = 62 * baseScale;
            const xThickness = 16 * baseScale;

            // Compute the 4 corner endpoints of the 3D "X" in local coordinates
            const corners = [
                { x: -xArmLength, y: -xArmLength * 0.95, z: 0 }, // Top-Left
                { x: xArmLength, y: xArmLength * 0.95, z: 0 },   // Bottom-Right
                { x: xArmLength, y: -xArmLength * 0.95, z: 0 },  // Top-Right
                { x: -xArmLength, y: xArmLength * 0.95, z: 0 }   // Bottom-Left
            ].map(p => project3D(p.x, p.y, p.z, cx, cy));

            const centerPt = project3D(0, 0, 0, cx, cy);

            // Draw Solid Multi-Layer Polygonal Cybernetic Blades for "X"
            const drawCyberBlade = (p1, p2, width) => {
                const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
                const perp = angle + Math.PI / 2;
                const hw = (width / 2) * p1.scale;

                const c1 = { x: p1.x + Math.cos(perp) * hw, y: p1.y + Math.sin(perp) * hw };
                const c2 = { x: p2.x + Math.cos(perp) * hw, y: p2.y + Math.sin(perp) * hw };
                const c3 = { x: p2.x - Math.cos(perp) * hw, y: p2.y - Math.sin(perp) * hw };
                const c4 = { x: p1.x - Math.cos(perp) * hw, y: p1.y - Math.sin(perp) * hw };

                // Layer A: Outer Neon Aura Glow
                const auraHw = hw * 1.5;
                const a1 = { x: p1.x + Math.cos(perp) * auraHw, y: p1.y + Math.sin(perp) * auraHw };
                const a2 = { x: p2.x + Math.cos(perp) * auraHw, y: p2.y + Math.sin(perp) * auraHw };
                const a3 = { x: p2.x - Math.cos(perp) * auraHw, y: p2.y - Math.sin(perp) * auraHw };
                const a4 = { x: p1.x - Math.cos(perp) * auraHw, y: p1.y - Math.sin(perp) * auraHw };

                ctx.fillStyle = "rgba(0, 191, 255, 0.25)";
                ctx.beginPath();
                ctx.moveTo(a1.x, a1.y);
                ctx.lineTo(a2.x, a2.y);
                ctx.lineTo(a3.x, a3.y);
                ctx.lineTo(a4.x, a4.y);
                ctx.closePath();
                ctx.fill();

                // Layer B: Solid Cybernetic Hull Body with Linear Gradient
                const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                grad.addColorStop(0, "rgba(0, 191, 255, 0.9)");
                grad.addColorStop(0.3, "rgba(56, 214, 255, 0.98)");
                grad.addColorStop(0.5, "rgba(255, 255, 255, 1)");
                grad.addColorStop(0.7, "rgba(56, 214, 255, 0.98)");
                grad.addColorStop(1, "rgba(0, 191, 255, 0.9)");

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.moveTo(c1.x, c1.y);
                ctx.lineTo(c2.x, c2.y);
                ctx.lineTo(c3.x, c3.y);
                ctx.lineTo(c4.x, c4.y);
                ctx.closePath();
                ctx.fill();

                // Layer C: Blade Cybernetic Neon Edge Outlines
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 1.8 * p1.scale;
                ctx.stroke();

                // Layer D: Center High-Intensity White Core Energy Channel
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 3.2 * p1.scale;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            };

            // Glow bloom for the "X"
            if (tier === "tier-1") {
                ctx.shadowColor = "rgba(0, 191, 255, 0.95)";
                ctx.shadowBlur = 32;
            }

            // Draw both crossing blades
            drawCyberBlade(corners[0], corners[1], xThickness);
            drawCyberBlade(corners[3], corners[2], xThickness);

            // Tech End-Cap Coordinate Nodes
            corners.forEach((c, idx) => {
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(c.x, c.y, 5 * c.scale, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = idx % 2 === 0 ? "#00ff88" : "#38d6ff";
                ctx.lineWidth = 2.2;
                ctx.stroke();
            });

            // 8. Super-Bright Quantum Center Singularity Core Flare
            const flareRad = (68 + Math.sin(energyPulse) * 10) * baseScale;
            const centerFlare = ctx.createRadialGradient(centerPt.x, centerPt.y, 0, centerPt.x, centerPt.y, flareRad);
            centerFlare.addColorStop(0, "rgba(255, 255, 255, 1)");
            centerFlare.addColorStop(0.25, "rgba(56, 214, 255, 0.85)");
            centerFlare.addColorStop(0.6, "rgba(0, 191, 255, 0.35)");
            centerFlare.addColorStop(0.88, "rgba(0, 255, 136, 0.15)");
            centerFlare.addColorStop(1, "transparent");

            ctx.fillStyle = centerFlare;
            ctx.beginPath();
            ctx.arc(centerPt.x, centerPt.y, flareRad, 0, Math.PI * 2);
            ctx.fill();

            // Diamond Center Prism Accents
            const prismSize = 16 * baseScale * centerPt.scale;
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(centerPt.x, centerPt.y - prismSize);
            ctx.lineTo(centerPt.x + prismSize, centerPt.y);
            ctx.lineTo(centerPt.x, centerPt.y + prismSize);
            ctx.lineTo(centerPt.x - prismSize, centerPt.y);
            ctx.closePath();
            ctx.stroke();

            ctx.fillStyle = "rgba(0, 255, 255, 0.4)";
            ctx.fill();

            ctx.restore();

            // 9. Draw Front Sphere Neural Nodes
            ctx.save();
            projectedSphere.sort((a, b) => a.z - b.z);
            projectedSphere.forEach((n) => {
                const isFront = n.z > 0;
                ctx.globalAlpha = isFront ? 0.95 : 0.35;
                ctx.fillStyle = n.color;
                if (tier === "tier-1" && isFront) {
                    ctx.shadowColor = n.color;
                    ctx.shadowBlur = 8;
                }
                ctx.beginPath();
                ctx.arc(n.screenX, n.screenY, n.size * n.scale, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();

            // 10. Draw FRONT Half of Gyroscopic Orbital Rings (In Front of Sphere)
            drawGyroscopicRing(cx, cy, 142 * baseScale, 36, ringAngle1, "rgba(0, 191, 255, 0.85)", false, 3, tier, false);
            drawGyroscopicRing(cx, cy, 168 * baseScale, -28, ringAngle2, "rgba(0, 255, 136, 0.8)", true, 2, tier, false);
            if (tier === "tier-1") {
                drawGyroscopicRing(cx, cy, 192 * baseScale, 64, ringAngle3, "rgba(99, 102, 241, 0.75)", false, 1, tier, false);
            }

            // 11. Draw Floating 3D Quantum Data Crystal (Upper Right)
            drawQuantumCrystal(cx, cy, baseScale, tier);

            if (!prefersReducedMotion && tier !== "tier-4") {
                coreAnimId = requestAnimationFrame(renderInnovationCore);
            }
        }

        resizeCoreCanvas();

        if (!prefersReducedMotion) {
            coreAnimId = requestAnimationFrame(renderInnovationCore);
        } else {
            renderInnovationCore();
        }

        if ("IntersectionObserver" in window && heroSection) {
            const coreObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    isCoreVisible = entry.isIntersecting;
                    const tier = window.XESTUS_PERF ? window.XESTUS_PERF.getTier() : "tier-1";
                    if (isCoreVisible && !prefersReducedMotion && tier !== "tier-4" && !coreAnimId) {
                        coreAnimId = requestAnimationFrame(renderInnovationCore);
                    } else if (!isCoreVisible && coreAnimId) {
                        cancelAnimationFrame(coreAnimId);
                        coreAnimId = null;
                    }
                });
            }, { threshold: 0.05 });
            coreObserver.observe(heroSection);
        }

        // Parallax Interaction & Proximity
        if (supportsHover && !prefersReducedMotion && heroSection) {
            heroSection.addEventListener("pointermove", (e) => {
                if (window.XESTUS_PERF && window.XESTUS_PERF.isLowEnd()) return;
                const rect = heroSection.getBoundingClientRect();
                const normX = (e.clientX - rect.left) / rect.width - 0.5;
                const normY = (e.clientY - rect.top) / rect.height - 0.5;

                targetRotY = normX * 0.8;
                targetRotX = 0.12 - normY * 0.5;

                // Subtle parallax on floating HUD tags
                hudTags.forEach((tag, idx) => {
                    const depth = (idx % 2 === 0 ? 1 : -1) * (idx + 1) * 8;
                    tag.style.transform = `translate3d(${normX * depth}px, ${normY * depth}px, 0)`;
                });
            }, { passive: true });

            heroSection.addEventListener("pointerleave", () => {
                targetRotX = 0.12;
                targetRotY = 0;
                hudTags.forEach((tag) => {
                    tag.style.transform = "translate3d(0, 0, 0)";
                });
            }, { passive: true });
        }

        window.addEventListener("resize", () => {
            resizeCoreCanvas();
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
            if (window.XESTUS_PERF && window.XESTUS_PERF.isLowEnd()) return;
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
                if (window.XESTUS_PERF && window.XESTUS_PERF.isLowEnd()) return;
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

        const tiltCards = document.querySelectorAll(".tilt-card, .service-card, .project-card, .product-card, .lab-card, .founder-image-card");
        tiltCards.forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                if (window.XESTUS_PERF && window.XESTUS_PERF.isLowEnd()) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = -(y - centerY) / 28;
                const rotateY = (x - centerX) / 28;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener("pointerleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
            });
        });

        const interactiveCards = document.querySelectorAll(
            ".service-card, .solution-card, .digital-card, .project-card, .product-card, .lab-card, .why-card, .tech-stack-card, .stat-card, .epoch-card, .estimator-opt-btn, .contact-channel-card, .contact-sla-box, .contact-form-wrapper, .founder-image-card"
        );
        interactiveCards.forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                if (window.XESTUS_PERF && window.XESTUS_PERF.isLowEnd()) return;
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

        let lastContactSubmissionTime = 0;

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (isSubmitting) return;

            // Honeypot spam defense
            const botFilter = contactForm.querySelector('input[name="_gotcha_filter"]');
            if (botFilter && botFilter.value.trim() !== "") {
                // Silently trap and drop automated bot submissions
                formMessage.className = "form-status-banner status-success";
                formMessage.innerHTML = '<i data-lucide="check-circle-2"></i> <span>Inquiry received. We will review your requirements.</span>';
                contactForm.reset();
                if (window.lucide) lucide.createIcons();
                return;
            }

            // Client-side rate limiting / cooldown protection (5 seconds)
            const now = Date.now();
            if (lastContactSubmissionTime && (now - lastContactSubmissionTime < 5000)) {
                formMessage.className = "form-status-banner status-error";
                formMessage.innerHTML = '<i data-lucide="alert-circle"></i> <span>Please wait a few seconds before submitting another inquiry.</span>';
                if (window.lucide) lucide.createIcons();
                return;
            }

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
                    lastContactSubmissionTime = Date.now();
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
    // 11. Follow XESTUS & Instant 1-Click Update System
    // --------------------------------------------------------------------------
    const FOLLOW_STORAGE_KEY = "xestus_following_subscriber";

    function getFollowState() {
        try {
            const raw = localStorage.getItem(FOLLOW_STORAGE_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }

    function showFollowToast(message, isSuccess = true) {
        let toast = document.getElementById("xestusFollowToast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "xestusFollowToast";
            toast.className = "xestus-toast";
            document.body.appendChild(toast);
        }

        toast.className = `xestus-toast ${isSuccess ? "toast-success" : "toast-info"} is-visible`;
        toast.innerHTML = `
            <div class="toast-content">
                <i data-lucide="${isSuccess ? 'check-circle-2' : 'bell-off'}" class="toast-icon"></i>
                <span class="toast-text">${message}</span>
            </div>
            <button type="button" class="toast-close-btn" aria-label="Dismiss notification">
                <i data-lucide="x"></i>
            </button>
        `;

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }

        const closeBtn = toast.querySelector(".toast-close-btn");
        if (closeBtn) {
            closeBtn.onclick = () => {
                toast.classList.remove("is-visible");
            };
        }

        if (toast._timer) clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 3600);
    }

    const BASE_FOLLOWERS_COUNT = 1248;

    function getFollowerCount() {
        const state = getFollowState();
        const isFollowing = !!(state && (state.following || state.email));
        return BASE_FOLLOWERS_COUNT + (isFollowing ? 1 : 0);
    }

    function updateFollowerCountDisplays() {
        const count = getFollowerCount();
        const globalFollowersCount = document.getElementById("globalFollowersCount");
        if (globalFollowersCount) {
            globalFollowersCount.textContent = count.toLocaleString();
        }
    }

    function syncFollowUI() {
        const state = getFollowState();
        const isFollowing = !!(state && (state.following || state.email));
        const triggerBtns = document.querySelectorAll(".btn-follow-trigger");
        const currentLang = localStorage.getItem("xestus_user_language") || "en";
        const dict = (window.XESTUS_TRANSLATIONS && window.XESTUS_TRANSLATIONS[currentLang]) ? window.XESTUS_TRANSLATIONS[currentLang] : null;

        const followedText = dict && dict["common.followed"] ? dict["common.followed"] : "Followed ✓";
        const followText = dict && dict["common.follow_xestus"] ? dict["common.follow_xestus"] : "Follow XESTUS";
        const compactFollowText = dict && dict["common.follow"] ? dict["common.follow"] : "Follow";

        triggerBtns.forEach((btn) => {
            const iconWrap = btn.querySelector(".follow-btn-icon");
            const textWrap = btn.querySelector(".follow-btn-text");
            const isCompact = btn.classList.contains("btn-nav-follow");

            if (isFollowing) {
                btn.classList.add("following");
                btn.setAttribute("aria-pressed", "true");
                btn.setAttribute("title", "Following XESTUS (Click to unfollow)");
                btn.setAttribute("aria-label", "Following XESTUS. Click to unfollow.");
                if (textWrap) textWrap.textContent = followedText;
                if (iconWrap) {
                    iconWrap.setAttribute("data-lucide", "check-circle-2");
                }
            } else {
                btn.classList.remove("following");
                btn.setAttribute("aria-pressed", "false");
                btn.setAttribute("title", "Follow XESTUS for technical updates");
                btn.setAttribute("aria-label", "Follow XESTUS updates");
                if (textWrap) textWrap.textContent = isCompact ? compactFollowText : followText;
                if (iconWrap) {
                    iconWrap.setAttribute("data-lucide", "bell");
                }
            }
        });

        updateFollowerCountDisplays();

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function toggleFollow(triggerBtn) {
        const state = getFollowState();
        const isFollowing = !!(state && (state.following || state.email));
        const currentLang = localStorage.getItem("xestus_user_language") || "en";
        const dict = (window.XESTUS_TRANSLATIONS && window.XESTUS_TRANSLATIONS[currentLang]) ? window.XESTUS_TRANSLATIONS[currentLang] : null;

        if (isFollowing) {
            localStorage.removeItem(FOLLOW_STORAGE_KEY);
            syncFollowUI();
            const msg = (dict && dict["follow.toast_unfollowed"]) || "You have unfollowed XESTUS.";
            showFollowToast(msg, false);
        } else {
            const record = {
                following: true,
                followedAt: new Date().toISOString()
            };
            localStorage.setItem(FOLLOW_STORAGE_KEY, JSON.stringify(record));
            syncFollowUI();

            // Optional Web Push permission request
            if ("Notification" in window && Notification.permission === "default") {
                try {
                    Notification.requestPermission();
                } catch (_) {}
            }

            const msg = (dict && dict["follow.toast_followed"]) || "You are now following XESTUS updates!";
            showFollowToast(msg, true);
        }
    }

    // Attach click listener to all follow trigger buttons (1-click follow toggle)
    document.querySelectorAll(".btn-follow-trigger").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleFollow(btn);
        });
    });

    // Initialize Follow UI on load
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

    // --------------------------------------------------------------------------
    // 13. Multilingual Translation Controller (i18n)
    // --------------------------------------------------------------------------
    const LANG_STORAGE_KEY = "xestus_user_language";
    const SUPPORTED_LANGS = ["en", "bn", "hi"];
    const langSwitcher = document.getElementById("langSwitcher");
    const langBtn = document.getElementById("langBtn");
    const langDropdown = document.getElementById("langDropdown");
    const langOpts = document.querySelectorAll(".lang-opt");
    const mobileLangBtns = document.querySelectorAll(".mobile-lang-btn");
    const currentLangLabel = document.querySelector(".lang-current-label");

    function detectPreferredLanguage() {
        try {
            // 1. URL search parameter
            const urlParams = new URLSearchParams(window.location.search);
            const paramLang = (urlParams.get("lang") || "").toLowerCase().trim();
            if (paramLang && SUPPORTED_LANGS.includes(paramLang)) {
                return paramLang;
            }

            // 2. User LocalStorage preference
            const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
            if (storedLang && SUPPORTED_LANGS.includes(storedLang)) {
                return storedLang;
            }

            // 3. Browser Navigator detection
            const browserLangs = navigator.languages ? Array.from(navigator.languages) : [navigator.language || ""];
            for (const bLang of browserLangs) {
                const norm = (bLang || "").toLowerCase();
                if (norm.startsWith("bn")) return "bn";
                if (norm.startsWith("hi")) return "hi";
            }
        } catch (e) {}

        // 4. Default canonical fallback
        return "en";
    }

    function setLanguage(lang, updateUrl = true) {
        const allTrans = window.XESTUS_TRANSLATIONS || window.translations;
        if (!allTrans) {
            return;
        }
        if (!SUPPORTED_LANGS.includes(lang) || !allTrans[lang]) {
            lang = "en";
        }

        const dict = allTrans[lang] || {};
        const fallbackDict = allTrans["en"] || {};

        document.documentElement.setAttribute("lang", lang);
        try {
            localStorage.setItem(LANG_STORAGE_KEY, lang);
        } catch (e) {}

        // Update URL query parameter without page reload
        if (updateUrl && window.history && window.history.replaceState) {
            try {
                const url = new URL(window.location.href);
                if (lang !== "en") {
                    url.searchParams.set("lang", lang);
                } else {
                    url.searchParams.delete("lang");
                }
                window.history.replaceState({}, "", url.toString());
            } catch (e) {}
        }

        // Dynamic Document Title and Meta Description Updates
        const pageTitle = dict["meta.title"] || fallbackDict["meta.title"];
        if (pageTitle) {
            document.title = pageTitle;
        }
        const metaDescEl = document.querySelector('meta[name="description"]');
        const pageDesc = dict["meta.description"] || fallbackDict["meta.description"];
        if (metaDescEl && pageDesc) {
            metaDescEl.setAttribute("content", pageDesc);
        }

        // Update current indicator in navbar
        if (currentLangLabel) {
            currentLangLabel.textContent = lang.toUpperCase();
        }

        // Update active classes on dropdown options
        langOpts.forEach((opt) => {
            const optLang = opt.getAttribute("data-lang");
            opt.classList.toggle("active", optLang === lang);
        });

        // Update active classes on mobile strip buttons
        mobileLangBtns.forEach((btn) => {
            const btnLang = btn.getAttribute("data-lang");
            btn.classList.toggle("active", btnLang === lang);
        });

        // Translate data-i18n elements with zero-failure English fallback
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const val = dict[key] || fallbackDict[key];
            if (val) {
                el.textContent = val;
            }
        });

        // Translate placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            const val = dict[key] || fallbackDict[key];
            if (val) {
                el.placeholder = val;
            }
        });

        // Translate titles
        document.querySelectorAll("[data-i18n-title]").forEach((el) => {
            const key = el.getAttribute("data-i18n-title");
            const val = dict[key] || fallbackDict[key];
            if (val) {
                el.title = val;
            }
        });

        // Translate aria-labels
        document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
            const key = el.getAttribute("data-i18n-aria-label");
            const val = dict[key] || fallbackDict[key];
            if (val) {
                el.setAttribute("aria-label", val);
            }
        });

        // Synchronize Follow UI button texts in active language
        if (typeof syncFollowUI === "function") {
            syncFollowUI();
        }

        // Synchronize Live Stats UI in active language
        if (typeof syncLiveStatsUI === "function") {
            syncLiveStatsUI();
        }

        if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
            lucide.createIcons();
        }
    }

    // Toggle language dropdown
    if (langBtn && langSwitcher) {
        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = langSwitcher.classList.toggle("is-open");
            langBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.addEventListener("click", (e) => {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove("is-open");
                langBtn.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && langSwitcher.classList.contains("is-open")) {
                langSwitcher.classList.remove("is-open");
                langBtn.setAttribute("aria-expanded", "false");
                langBtn.focus();
            }
        });
    }

    // Dropdown option clicks
    langOpts.forEach((opt) => {
        opt.addEventListener("click", () => {
            const selectedLang = opt.getAttribute("data-lang");
            if (selectedLang) {
                setLanguage(selectedLang);
            }
            if (langSwitcher) {
                langSwitcher.classList.remove("is-open");
                if (langBtn) langBtn.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Mobile lang button clicks
    mobileLangBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            if (selectedLang) {
                setLanguage(selectedLang);
            }
        });
    });

    // --------------------------------------------------------------------------
    // 14. Digital Services Assistance Form Pre-Selection
    // --------------------------------------------------------------------------
    document.querySelectorAll("[data-service-select]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const serviceSelect = document.getElementById("service");
            const messageInput = document.getElementById("message");
            if (serviceSelect) {
                const targetValue = (btn.getAttribute("data-service-select") || "").toLowerCase();
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    const optVal = serviceSelect.options[i].value.toLowerCase();
                    if (targetValue && (optVal === targetValue || optVal.includes(targetValue) || (targetValue === "digital" && optVal.includes("digital")))) {
                        serviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }
            if (messageInput) {
                setTimeout(() => {
                    messageInput.focus();
                }, 300);
            }
        });
    });

    // --------------------------------------------------------------------------
    // 14b. Interactive Project Estimator & Scope Builder Controller
    // --------------------------------------------------------------------------
    const ESTIMATOR_DATA = {
        ai: {
            title: "Autonomous AI & Agent Swarms",
            desc: "Custom retrieval-augmented LLM reasoning, Model Context Protocol integration, and high-performance vector retrieval.",
            selectValue: "AI & Autonomous Agents",
            starter: {
                turnaround: "1–2 Weeks",
                deliverables: [
                    "Single-Agent Task Pipeline & Prompt System",
                    "Knowledge Base Ingestion & Vector Search",
                    "100% Code Ownership & Documentation"
                ]
            },
            pro: {
                turnaround: "2–3 Weeks",
                deliverables: [
                    "Multi-Agent LangGraph Swarm with Critic Verification",
                    "Bidirectional MCP Tool Discovery & Execution",
                    "Custom Retrieval-Augmented Generation (RAG) Architecture",
                    "100% Code Ownership & Deployment CI/CD"
                ]
            },
            enterprise: {
                turnaround: "3–5 Weeks",
                deliverables: [
                    "Distributed Multi-Agent Cluster with Custom Tool Mesh",
                    "On-Premise / Sovereign Quantized Model Inference",
                    "Enterprise Role-Based Access Control (RBAC) & Audit Logs",
                    "24/7 Priority Architecture Support & SLA"
                ]
            }
        },
        web: {
            title: "Custom Web Platforms & Portals",
            desc: "Ultra-fast digital platforms and customer portals engineered with modern frontend architecture and cloud infrastructure.",
            selectValue: "Full-Stack Web Architecture",
            starter: {
                turnaround: "3–5 Days",
                deliverables: [
                    "High-Speed Responsive Web Experience",
                    "Tokenized Design System & Accessibility Compliance",
                    "SEO Optimization & Social Media Cards"
                ]
            },
            pro: {
                turnaround: "1–2 Weeks",
                deliverables: [
                    "Full-Stack Web Portal with Dynamic Routing",
                    "FastAPI / Node.js Microservices Integration",
                    "Interactive Data Visualizations & Analytics Dashboard",
                    "Edge CDN Deployment with A+ SSL Security"
                ]
            },
            enterprise: {
                turnaround: "2–4 Weeks",
                deliverables: [
                    "Multi-Tenant SaaS Portal Architecture",
                    "High-Throughput Database Clustering & Caching",
                    "Enterprise Authentication & SSO Integration",
                    "Global Edge Reverse Proxy & Dedicated Cloud SLA"
                ]
            }
        },
        auto: {
            title: "Event-Driven Workflow Automation",
            desc: "Autonomous pipelines that connect CRMs, databases, messaging channels, and payment systems with zero event loss.",
            selectValue: "Workflow Automation",
            starter: {
                turnaround: "2–4 Days",
                deliverables: [
                    "Omnichannel Lead Notification & CRM Sync",
                    "Webhook Integration with Error Recovery",
                    "Workflow Documentation & Runbook"
                ]
            },
            pro: {
                turnaround: "1–2 Weeks",
                deliverables: [
                    "Complex Multi-App Event Mesh (n8n / Python)",
                    "Self-Healing Webhook Queue & Data Reconciliation",
                    "Automated Invoicing & Transaction Reconciliation",
                    "Real-Time Telemetry & Alerting System"
                ]
            },
            enterprise: {
                turnaround: "2–3 Weeks",
                deliverables: [
                    "Enterprise-Wide Distributed Event Hub",
                    "High-Throughput Redis Queue Clusters",
                    "Custom API Adapters & Legacy System Bridges",
                    "Dedicated SLA & 24/7 Pipeline Monitoring"
                ]
            }
        },
        digital: {
            title: "Digital Help & Online Form Assistance",
            desc: "Step-by-step guidance for admissions, scholarships, job applications, and government citizen portal registrations.",
            selectValue: "Digital Services & Online Form Assistance",
            starter: {
                turnaround: "24–48 Hours",
                deliverables: [
                    "Accurate Online Form Completion & Submission",
                    "Document Scanning, Compression & Target Resizing",
                    "Acknowledgment Receipt & Application Tracking"
                ]
            },
            pro: {
                turnaround: "2–3 Days",
                deliverables: [
                    "Multi-Portal Application Assistance (Scholarships & Grants)",
                    "Complete Document Portfolio Verification & PDF Formatting",
                    "Application Status Monitoring & Follow-Up Guidance",
                    "Direct Support via WhatsApp / Phone"
                ]
            },
            enterprise: {
                turnaround: "3–5 Days",
                deliverables: [
                    "Comprehensive Institutional Batch Application Support",
                    "Structured Document Archive & Verification Log",
                    "Dedicated Personal Digital Concierge",
                    "Priority Submission & Slot Booking Support"
                ]
            }
        },
        cad: {
            title: "AutoCAD 2D Technical Drafting",
            desc: "Layer-standardized 2D architectural blueprints, geometric dimensioning, and fabrication-ready drafting solutions.",
            selectValue: "AutoCAD 2D Technical Drafting",
            starter: {
                turnaround: "2–3 Days",
                deliverables: [
                    "Standardized 2D Layout or Part Schematic",
                    "Dimension Verification & Title Block Setup",
                    "Plot-Ready PDF & DWG Deliverables"
                ]
            },
            pro: {
                turnaround: "4–7 Days",
                deliverables: [
                    "Multi-Sheet Technical Blueprint Suite",
                    "Layer Standard Compliance (AIA / ISO)",
                    "Parametric Dimensioning & Fabrication Details",
                    "Full DWG, DXF & High-Resolution Vector PDFs"
                ]
            },
            enterprise: {
                turnaround: "1–2 Weeks",
                deliverables: [
                    "Complete Architectural / Engineering Plan Set",
                    "Custom AutoCAD Template Suite & Dynamic Blocks",
                    "Comprehensive Bill of Materials (BOM) Integration",
                    "Dedicated Drafting Lead & Unlimited Revision Passes"
                ]
            }
        }
    };

    let currentEstimatorService = "ai";
    let currentEstimatorScale = "starter";

    function updateEstimatorUI() {
        const data = ESTIMATOR_DATA[currentEstimatorService];
        if (!data) return;
        const scaleData = data[currentEstimatorScale] || data.starter;

        const titleEl = document.getElementById("summaryDomainTitle");
        const descEl = document.getElementById("summaryDomainDesc");
        const turnaroundEl = document.getElementById("summaryTurnaroundVal");
        const deliverablesListEl = document.getElementById("summaryDeliverablesList");

        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        if (turnaroundEl) turnaroundEl.textContent = scaleData.turnaround;

        if (deliverablesListEl) {
            deliverablesListEl.innerHTML = "";
            scaleData.deliverables.forEach((item) => {
                const li = document.createElement("li");
                li.innerHTML = '<i data-lucide="check"></i> <span>' + item + '</span>';
                deliverablesListEl.appendChild(li);
            });
            if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
                lucide.createIcons();
            }
        }
    }

    const serviceOptBtns = document.querySelectorAll("#estimatorServiceOptions .estimator-opt-btn");
    serviceOptBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            serviceOptBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentEstimatorService = btn.getAttribute("data-service-key") || "ai";
            updateEstimatorUI();
        });
    });

    const scaleOptBtns = document.querySelectorAll("#estimatorScaleOptions .estimator-opt-btn");
    scaleOptBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            scaleOptBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentEstimatorScale = btn.getAttribute("data-scale-key") || "starter";
            updateEstimatorUI();
        });
    });

    const btnTransferToInquiry = document.getElementById("btnTransferToInquiry");
    if (btnTransferToInquiry) {
        btnTransferToInquiry.addEventListener("click", () => {
            const data = ESTIMATOR_DATA[currentEstimatorService];
            const scaleData = data ? data[currentEstimatorScale] : null;
            const serviceSelect = document.getElementById("service");
            const messageInput = document.getElementById("message");
            const contactSection = document.getElementById("contact");

            if (serviceSelect && data) {
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    if (serviceSelect.options[i].value === data.selectValue || serviceSelect.options[i].value.includes(data.selectValue)) {
                        serviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }

            if (messageInput && data && scaleData) {
                const scaleLabel = currentEstimatorScale.toUpperCase();
                messageInput.value = `[Scope Builder Specification]\nService Domain: ${data.title}\nComplexity Tier: ${scaleLabel}\nTarget Turnaround: ${scaleData.turnaround}\n\nKey Requirements:\n- ${scaleData.deliverables.join("\n- ")}\n\nAdditional Project Details / Specific Goals: `;
            }

            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                if (messageInput) {
                    setTimeout(() => messageInput.focus(), 600);
                }
            }
        });
    }

    // --------------------------------------------------------------------------
    // 14c. FAQ Accordion & Category Filter Controller
    // --------------------------------------------------------------------------
    const faqTabBtns = document.querySelectorAll(".faq-tab-btn");
    const faqItems = document.querySelectorAll(".faq-item");

    faqTabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            faqTabBtns.forEach((b) => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");

            const category = btn.getAttribute("data-faq-cat");
            faqItems.forEach((item) => {
                const itemCat = item.getAttribute("data-faq-cat");
                if (category === "all" || itemCat === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    faqItems.forEach((item) => {
        const questionBtn = item.querySelector(".faq-question");
        if (questionBtn) {
            questionBtn.addEventListener("click", () => {
                const isOpen = item.classList.toggle("is-open");
                questionBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
        }
    });

    // --------------------------------------------------------------------------
    // 15. XESTUS Live Stats & Real Telemetry Controller
    // --------------------------------------------------------------------------
    const STATS_CACHE_KEY = "xestus_live_stats_cache_v1";
    const heroLiveStats = document.getElementById("heroLiveStats");
    const statsSkeleton = document.getElementById("statsSkeleton");
    const statsActiveData = document.getElementById("statsActiveData");
    const statsSyncingFallback = document.getElementById("statsSyncingFallback");
    const heroVisitsCount = document.getElementById("heroVisitsCount");
    const heroVisitsLabel = document.getElementById("heroVisitsLabel");
    const heroFollowersCount = document.getElementById("heroFollowersCount");
    const heroFollowersLabel = document.getElementById("heroFollowersLabel");
    const btnStatsInspect = document.getElementById("btnStatsInspect");

    const statsModal = document.getElementById("statsModal");
    const statsModalBackdrop = document.getElementById("statsModalBackdrop");
    const statsModalCloseBtn = document.getElementById("statsModalCloseBtn");
    const btnStatsDone = document.getElementById("btnStatsDone");

    const colWebsiteHeader = document.getElementById("colWebsiteHeader");
    const colFollowersHeader = document.getElementById("colFollowersHeader");
    const statWeb24h = document.getElementById("statWeb24h");
    const statFollow24h = document.getElementById("statFollow24h");
    const statWeb7d = document.getElementById("statWeb7d");
    const statFollow7d = document.getElementById("statFollow7d");
    const statWeb30d = document.getElementById("statWeb30d");
    const statFollow30d = document.getElementById("statFollow30d");
    const statWeb12m = document.getElementById("statWeb12m");
    const statFollow12m = document.getElementById("statFollow12m");

    let lastStatsFocusedElement = null;
    let currentLiveStatsData = null;

    function formatNumberCompact(num) {
        if (typeof num !== "number" || isNaN(num)) return "--";
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M+";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
        }
        return num.toLocaleString();
    }

    function animateCounter(el, targetNum, isCompact = false) {
        if (!el) return;
        if (typeof targetNum !== "number" || isNaN(targetNum)) {
            el.textContent = "--";
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            el.textContent = isCompact ? formatNumberCompact(targetNum) : targetNum.toLocaleString();
            return;
        }

        const duration = 900;
        const startTime = performance.now();
        const startVal = 0;

        function updateCount(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(startVal + (targetNum - startVal) * easeProgress);

            if (progress < 1) {
                el.textContent = isCompact ? formatNumberCompact(currentVal) : currentVal.toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                el.textContent = isCompact ? formatNumberCompact(targetNum) : targetNum.toLocaleString();
            }
        }
        requestAnimationFrame(updateCount);
    }

    function renderLiveStatsData(data) {
        if (!data || !data.metrics) {
            renderStatsFallback("stats.syncing");
            return;
        }

        currentLiveStatsData = data;

        const webMetric = data.metrics.website || {};
        const followMetric = data.metrics.followers || {};

        if (statsSkeleton) statsSkeleton.style.display = "none";
        if (statsSyncingFallback) statsSyncingFallback.style.display = "none";
        if (statsActiveData) statsActiveData.style.display = "inline-flex";

        // Determine current language dictionary
        const currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "en";
        const dict = (window.XESTUS_TRANSLATIONS && window.XESTUS_TRANSLATIONS[currentLang]) ? window.XESTUS_TRANSLATIONS[currentLang] : null;

        // Populate Hero Pill
        if (heroVisitsCount && typeof webMetric.total === "number") {
            animateCounter(heroVisitsCount, webMetric.total, true);
        }
        if (heroVisitsLabel) {
            const isPageViews = webMetric.type === "pageviews" || webMetric.type === "page_views";
            heroVisitsLabel.textContent = dict ? (isPageViews ? (dict["stats.page_views"] || "Page Views") : (dict["stats.visits"] || "Visits")) : (isPageViews ? "Page Views" : "Visits");
        }

        if (heroFollowersCount && typeof followMetric.total === "number") {
            animateCounter(heroFollowersCount, followMetric.total, true);
        }
        if (heroFollowersLabel) {
            heroFollowersLabel.textContent = dict && dict["stats.followers"] ? dict["stats.followers"] : "Followers";
        }

        // Populate Table Column Headers
        if (colWebsiteHeader) {
            const isPageViews = webMetric.type === "pageviews" || webMetric.type === "page_views";
            colWebsiteHeader.textContent = dict ? (isPageViews ? (dict["stats.page_views"] || "Page Views") : (dict["stats.website_header"] || "Website Visits")) : (isPageViews ? "Page Views" : "Website Visits");
        }
        if (colFollowersHeader) {
            colFollowersHeader.textContent = dict && dict["stats.followers_header"] ? dict["stats.followers_header"] : "Confirmed Followers";
        }

        // Populate Table Time Window Cells
        const setCell = (el, val) => {
            if (!el) return;
            if (typeof val === "number") {
                el.innerHTML = `<span class="val-num">${val.toLocaleString()}</span>`;
            } else {
                el.innerHTML = `<span class="table-fallback-dash">--</span>`;
            }
        };

        setCell(statWeb24h, webMetric.last24h);
        setCell(statFollow24h, followMetric.last24h);
        setCell(statWeb7d, webMetric.last7d);
        setCell(statFollow7d, followMetric.last7d);
        setCell(statWeb30d, webMetric.last30d);
        setCell(statFollow30d, followMetric.last30d);
        setCell(statWeb12m, webMetric.last12m);
        setCell(statFollow12m, followMetric.last12m);
    }

    function renderStatsFallback(msgKey = "stats.syncing") {
        currentLiveStatsData = null;
        if (statsSkeleton) statsSkeleton.style.display = "none";
        if (statsActiveData) statsActiveData.style.display = "none";
        if (statsSyncingFallback) {
            statsSyncingFallback.style.display = "inline-flex";
            const textEl = statsSyncingFallback.querySelector(".stats-sync-text");
            if (textEl) {
                const currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "en";
                const dict = (window.XESTUS_TRANSLATIONS && window.XESTUS_TRANSLATIONS[currentLang]) ? window.XESTUS_TRANSLATIONS[currentLang] : null;
                textEl.textContent = dict && dict[msgKey] ? dict[msgKey] : (msgKey === "stats.unavailable" ? "Stats Temporarily Unavailable" : "Telemetry Syncing with Node");
            }
        }
    }

    function syncLiveStatsUI() {
        if (currentLiveStatsData) {
            renderLiveStatsData(currentLiveStatsData);
        } else {
            renderStatsFallback("stats.syncing");
        }
    }
    window.syncLiveStatsUI = syncLiveStatsUI;

    async function initLiveStats() {
        // 1. Check Session Storage Cache
        try {
            const rawCache = sessionStorage.getItem(STATS_CACHE_KEY);
            if (rawCache) {
                const parsed = JSON.parse(rawCache);
                const ttl = (window.XESTUS_CONFIG && window.XESTUS_CONFIG.statsRefreshIntervalMs) || 300000;
                if (parsed && parsed.timestamp && (Date.now() - parsed.timestamp < ttl) && parsed.data) {
                    renderLiveStatsData(parsed.data);
                    return;
                }
            }
        } catch (e) {}

        // 2. Check if a real endpoint is configured
        const endpoint = window.XESTUS_CONFIG && window.XESTUS_CONFIG.statsApiEndpoint;
        if (!endpoint || typeof endpoint !== "string" || !endpoint.trim()) {
            // Graceful fallback for static GitHub Pages without backend
            renderStatsFallback("stats.syncing");
            return;
        }

        // 3. Fetch from Telemetry API Endpoint
        try {
            const res = await fetch(endpoint, {
                method: "GET",
                headers: { "Accept": "application/json" }
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const data = await res.json();
            if (data && data.metrics) {
                try {
                    sessionStorage.setItem(STATS_CACHE_KEY, JSON.stringify({
                        timestamp: Date.now(),
                        data: data
                    }));
                } catch (e) {}
                renderLiveStatsData(data);
            } else {
                renderStatsFallback("stats.unavailable");
            }
        } catch (err) {
            // Data integrity: Never display fabricated stats on network error
            renderStatsFallback("stats.unavailable");
        }
    }

    function openStatsModal(triggerBtn) {
        if (!statsModal) return;
        lastStatsFocusedElement = triggerBtn || document.activeElement;
        statsModal.classList.add("is-open");
        statsModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        if (statsModalCloseBtn) {
            statsModalCloseBtn.focus();
        }
    }

    function closeStatsModal() {
        if (!statsModal) return;
        statsModal.classList.remove("is-open");
        statsModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        if (lastStatsFocusedElement && typeof lastStatsFocusedElement.focus === "function") {
            lastStatsFocusedElement.focus();
        }
    }

    if (btnStatsInspect) {
        btnStatsInspect.addEventListener("click", () => openStatsModal(btnStatsInspect));
    }
    const btnFollowersCount = document.getElementById("btnFollowersCount");
    if (btnFollowersCount) {
        btnFollowersCount.addEventListener("click", () => openStatsModal(btnFollowersCount));
    }
    if (statsModalCloseBtn) {
        statsModalCloseBtn.addEventListener("click", closeStatsModal);
    }
    if (statsModalBackdrop) {
        statsModalBackdrop.addEventListener("click", closeStatsModal);
    }
    if (btnStatsDone) {
        btnStatsDone.addEventListener("click", closeStatsModal);
    }

    document.addEventListener("keydown", (e) => {
        if (statsModal && statsModal.classList.contains("is-open")) {
            if (e.key === "Escape") {
                closeStatsModal();
            } else if (e.key === "Tab") {
                trapFocus(e, statsModal);
            }
        }
    });

    updateEstimatorUI();
    initLiveStats();

    // Initialize language with multi-layer detection (URL param -> LocalStorage -> Browser locale -> English default)
    const initialLang = detectPreferredLanguage();
    setLanguage(initialLang, false);
});

window.addEventListener("load", () => {
    if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
});