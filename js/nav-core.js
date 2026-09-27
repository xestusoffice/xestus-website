/**
 * XESTUS | Universal Header & Responsive Navigation Engine
 * Tagline: Intelligence Beyond Limits
 * Version: 3.3.0
 * Handles Mobile Menu Drawer, Theme Switcher (Day / Night / Eye Protect), and Responsive Layout
 */

(function () {
    "use strict";

    const THEME_STORAGE_KEY = "xestus_theme";

    // 1. Initialize Theme from LocalStorage or System Preference
    function applyStoredTheme() {
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored && ["night", "day", "eye-protect"].includes(stored)) {
                document.documentElement.setAttribute("data-theme", stored);
                updateThemeUI(stored);
            } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
                document.documentElement.setAttribute("data-theme", "day");
                updateThemeUI("day");
            } else {
                document.documentElement.setAttribute("data-theme", "night");
                updateThemeUI("night");
            }
        } catch (_) {}
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

    // 2. Initialize Navigation Drawer & Interactivity
    function initNavigation() {
        const menuToggle = document.getElementById("menuToggle") || document.querySelector(".menu-toggle");
        const navLinks = document.getElementById("primaryNav") || document.querySelector(".nav-links");
        const themeBtn = document.getElementById("themeBtn");
        const themeSwitcher = document.getElementById("themeSwitcher");
        const themeOpts = document.querySelectorAll(".theme-opt, .mobile-theme-btn");

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
            const links = navLinks.querySelectorAll("a");
            links.forEach((link) => {
                link.addEventListener("click", () => {
                    setNavState(false);
                });
            });

            // Close on Escape
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && isNavOpen) {
                    setNavState(false);
                }
            });

            // Close on click outside
            document.addEventListener("click", (e) => {
                if (isNavOpen && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                    setNavState(false);
                }
            });
        }

        // Theme Switcher Dropdown
        if (themeBtn && themeSwitcher) {
            themeBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                const isOpen = themeSwitcher.classList.toggle("is-open");
                themeBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });

            document.addEventListener("click", (e) => {
                if (!themeSwitcher.contains(e.target)) {
                    themeSwitcher.classList.remove("is-open");
                    themeBtn.setAttribute("aria-expanded", "false");
                }
            });
        }

        themeOpts.forEach((opt) => {
            opt.addEventListener("click", (e) => {
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
})();
