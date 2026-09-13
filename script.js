/**
 * XESTUS | Core Interactive Logic & Controller
 * Tagline: Intelligence Beyond Limits
 * Version: 3.2.0 (Phase 2 Navigation & Hero Optimization)
 */

"use strict";

// --------------------------------------------------------------------------
// 1. EmailJS Client Initialization (Preserved Configuration)
// --------------------------------------------------------------------------
if (typeof emailjs !== "undefined") {
    emailjs.init({
        publicKey: "MjRM1_6Bb8yJSG3d0",
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

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

    // Sticky Header Scroll State
    function handleHeaderScroll() {
        if (siteHeader) {
            siteHeader.classList.toggle("scrolled", window.scrollY > 30);
        }
        const legacyNav = document.querySelector("nav");
        if (legacyNav) {
            legacyNav.classList.toggle("scrolled", window.scrollY > 30);
        }
    }
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });
    handleHeaderScroll();

    // --------------------------------------------------------------------------
    // 3. Scroll Progress Bar
    // --------------------------------------------------------------------------
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight > 0) {
                const progress = (scrollTop / scrollHeight) * 100;
                progressBar.style.width = `${progress}%`;
            }
        }, { passive: true });
    }

    // --------------------------------------------------------------------------
    // 4. Scroll Reveal (IntersectionObserver)
    // --------------------------------------------------------------------------
    const hiddenElements = document.querySelectorAll(".hidden");
    if (hiddenElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.15 });

        hiddenElements.forEach((el) => revealObserver.observe(el));
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

        const serviceCards = document.querySelectorAll(".service-card");
        serviceCards.forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--x", `${e.clientX - rect.left}px`);
                card.style.setProperty("--y", `${e.clientY - rect.top}px`);
            });
        });

        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card) => {
            const light = card.querySelector(".light");
            if (light) {
                card.addEventListener("pointermove", (e) => {
                    const rect = card.getBoundingClientRect();
                    light.style.left = `${e.clientX - rect.left}px`;
                    light.style.top = `${e.clientY - rect.top}px`;
                });
            }
        });
    }

    // --------------------------------------------------------------------------
    // 9. Contact Form Validation & EmailJS Delivery Adapter
    // --------------------------------------------------------------------------
    const contactForm = document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    if (contactForm && nameInput && emailInput && messageInput && formMessage) {
        let isSubmitting = false;

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (isSubmitting) return;

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                formMessage.innerText = "Please fill out all required fields.";
                formMessage.style.color = "#ff4d4d";
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.innerText = "Please enter a valid email address.";
                formMessage.style.color = "#ff4d4d";
                return;
            }

            isSubmitting = true;
            formMessage.innerText = "Transmitting message to XESTUS...";
            formMessage.style.color = "#00bfff";

            const submitBtn = contactForm.querySelector("button[type='submit']");
            if (submitBtn) submitBtn.disabled = true;

            emailjs.send("service_rumjowb", "template_malid0j", {
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                formMessage.innerText = "Message sent successfully. We will be in touch shortly.";
                formMessage.style.color = "#00ff99";
                contactForm.reset();
            })
            .catch((error) => {
                console.error("XESTUS Contact Error:", error);
                formMessage.innerText = "Message delivery failed. Please email xestus.office@gmail.com directly.";
                formMessage.style.color = "#ff4d4d";
            })
            .finally(() => {
                isSubmitting = false;
                if (submitBtn) submitBtn.disabled = false;
            });
        });
    }

    // --------------------------------------------------------------------------
    // 10. Connection Lost & Network Status Monitor
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