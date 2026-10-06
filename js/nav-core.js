/**
 * XESTUS | Universal Header & Responsive Navigation Engine
 * Tagline: Intelligence Beyond Limits
 * Version: 4.0.0
 * Handles Mobile Menu Drawer, Theme Switcher (Night / Day / Eye Protect), Dropdowns & Smooth Anchor Navigation
 */

(function () {
    "use strict";

    const THEME_STORAGE_KEY = "xestus_theme";

    // 1. Initialize Theme (Day / Night / Eye Protect)
    function applyStoredTheme() {
        try {
            const saved = localStorage.getItem(THEME_STORAGE_KEY) || "night";
            setTheme(saved);
        } catch (_) {
            setTheme("night");
        }
    }

    function updateThemeUI(theme) {
        const themeLabels = {
            "night": "Night",
            "day": "Day",
            "eye-protect": "Eye Protect"
        };
        const themeIcons = {
            "night": "moon",
            "day": "sun",
            "eye-protect": "glasses"
        };

        const currentLabel = document.querySelector(".theme-current-label");
        if (currentLabel) {
            currentLabel.textContent = themeLabels[theme] || "Night";
        }

        const activeIcon = document.querySelector(".theme-active-icon");
        if (activeIcon) {
            activeIcon.setAttribute("data-lucide", themeIcons[theme] || "moon");
        }

        const themeOpts = document.querySelectorAll(".theme-opt, .mobile-theme-btn");
        themeOpts.forEach((opt) => {
            const optTheme = opt.getAttribute("data-theme");
            opt.classList.toggle("active", optTheme === theme);
        });

        // Update single-button toggle icon if present
        const singleToggle = document.getElementById("themeToggle");
        if (singleToggle) {
            const icon = singleToggle.querySelector("[data-lucide]");
            if (icon) {
                icon.setAttribute("data-lucide", theme === "night" ? "sun" : "moon");
            }
        }

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function setTheme(theme) {
        if (!["night", "day", "eye-protect"].includes(theme)) return;
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (_) {}
        updateThemeUI(theme);
        window.dispatchEvent(new CustomEvent("xestus:theme-changed", { detail: { theme } }));
    }

    // 2. Initialize Navigation Drawer & Dropdowns
    function initNavigation() {
        const menuToggle = document.getElementById("menuToggle") || document.querySelector(".menu-toggle");
        const navLinks = document.getElementById("primaryNav") || document.querySelector(".nav-links");
        const mobileDrawer = document.getElementById("mobileDrawer");
        const drawerClose = document.getElementById("drawerClose");
        const themeBtn = document.getElementById("themeBtn");
        const themeSwitcher = document.getElementById("themeSwitcher");
        const themeOpts = document.querySelectorAll(".theme-opt, .mobile-theme-btn");
        const singleThemeToggle = document.getElementById("themeToggle");

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
            if (mobileDrawer) {
                mobileDrawer.classList.toggle("open", isNavOpen);
                mobileDrawer.setAttribute("aria-hidden", isNavOpen ? "false" : "true");
            }
            document.body.classList.toggle("nav-open", isNavOpen);
        }

        if (menuToggle) {
            menuToggle.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                setNavState(!isNavOpen);
            });
        }

        if (drawerClose) {
            drawerClose.addEventListener("click", (e) => {
                e.preventDefault();
                setNavState(false);
            });
        }

        // Close on clicking any link inside navigation
        const allNavLinks = document.querySelectorAll("#primaryNav a, .nav-links a, #mobileDrawer a");
        allNavLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                const href = link.getAttribute("href");
                if (href && href.startsWith("#") && href.length > 1) {
                    const targetEl = document.querySelector(href);
                    if (targetEl) {
                        e.preventDefault();
                        setNavState(false);
                        const header = document.querySelector(".site-header") || document.querySelector(".nav-container");
                        const headerOffset = header ? header.offsetHeight + 10 : 75;
                        const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: Math.max(0, targetY),
                            behavior: "smooth"
                        });
                        if (window.history && window.history.pushState) {
                            window.history.pushState(null, "", href);
                        }
                    } else {
                        setNavState(false);
                    }
                } else {
                    setNavState(false);
                }
            });
        });

        // Close on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (isNavOpen) setNavState(false);
                if (themeSwitcher) {
                    themeSwitcher.classList.remove("is-open");
                    if (themeBtn) themeBtn.setAttribute("aria-expanded", "false");
                }
            }
        });

        // Close on click outside
        document.addEventListener("click", (e) => {
            if (isNavOpen) {
                const clickedInsideNav = (navLinks && navLinks.contains(e.target)) || (mobileDrawer && mobileDrawer.contains(e.target));
                const clickedToggle = menuToggle && menuToggle.contains(e.target);
                if (!clickedInsideNav && !clickedToggle) {
                    setNavState(false);
                }
            }
            if (themeSwitcher && !themeSwitcher.contains(e.target)) {
                themeSwitcher.classList.remove("is-open");
                if (themeBtn) themeBtn.setAttribute("aria-expanded", "false");
            }
        });

        // Theme Switcher Dropdown
        if (themeBtn && themeSwitcher) {
            themeBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = themeSwitcher.classList.toggle("is-open");
                themeBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
        }

        themeOpts.forEach((opt) => {
            opt.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                const t = opt.getAttribute("data-theme");
                if (t) {
                    setTheme(t);
                    if (themeSwitcher) {
                        themeSwitcher.classList.remove("is-open");
                        if (themeBtn) themeBtn.setAttribute("aria-expanded", "false");
                    }
                }
            });
        });

        // Single Theme Toggle Button (cycle between night and day)
        if (singleThemeToggle) {
            singleThemeToggle.addEventListener("click", (e) => {
                e.preventDefault();
                const current = document.documentElement.getAttribute("data-theme") || "night";
                const next = current === "night" ? "day" : "night";
                setTheme(next);
            });
        }

        // Current saved theme UI update
        const currentTheme = document.documentElement.getAttribute("data-theme") || "night";
        updateThemeUI(currentTheme);

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    // Run on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            applyStoredTheme();
            initNavigation();
        });
    } else {
        applyStoredTheme();
        initNavigation();
    }

    // Auto-load Spotlight Command Search Engine
    try {
        if (!window.XestusSpotlight && !document.querySelector('script[src*="spotlight-search.js"]')) {
            const spotlightScript = document.createElement('script');
            spotlightScript.src = (window.location.origin || '') + '/js/spotlight-search.js?v=4.0.0';
            spotlightScript.defer = true;
            document.head.appendChild(spotlightScript);
        }
    } catch (_) {}
})();
