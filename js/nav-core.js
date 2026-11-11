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
        const navMoreDropdown = document.getElementById("navMoreDropdown");
        const navMoreBtn = document.getElementById("navMoreBtn");
        const navMoreMenu = document.getElementById("navMoreMenu");

        let isNavOpen = false;

        function closeDropdowns() {
            if (navMoreDropdown) {
                navMoreDropdown.classList.remove("is-open");
                navMoreDropdown.classList.add("dropdown-dismissed");
                if (navMoreBtn) navMoreBtn.setAttribute("aria-expanded", "false");
            }
            if (themeSwitcher) {
                themeSwitcher.classList.remove("is-open");
                if (themeBtn) themeBtn.setAttribute("aria-expanded", "false");
            }
        }

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
            if (!isNavOpen) {
                closeDropdowns();
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

        // More Dropdown Controller
        if (navMoreBtn && navMoreDropdown) {
            navMoreBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (navMoreDropdown.classList.contains("dropdown-dismissed")) {
                    navMoreDropdown.classList.remove("dropdown-dismissed");
                    navMoreDropdown.classList.add("is-open");
                    navMoreBtn.setAttribute("aria-expanded", "true");
                } else {
                    const isOpen = navMoreDropdown.classList.toggle("is-open");
                    navMoreBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
                }
            });

            navMoreDropdown.addEventListener("mouseleave", () => {
                navMoreDropdown.classList.remove("dropdown-dismissed");
            });
        }

        if (navMoreMenu) {
            navMoreMenu.addEventListener("click", () => {
                closeDropdowns();
            });
        }

        // Handle navigation link clicks
        // If script.js is active on this page (index.html), let script.js manage in-page smooth navigation to prevent conflicting listeners
        const isMainAppActive = typeof window !== "undefined" && !!window.__XESTUS_MAIN_APP_ACTIVE__;
        if (!isMainAppActive) {
            const allNavLinks = document.querySelectorAll("#primaryNav a, .nav-links a, #mobileDrawer a");
            allNavLinks.forEach((link) => {
                link.addEventListener("click", (e) => {
                    closeDropdowns();
                    const href = link.getAttribute("href");
                    if (href && href.startsWith("#") && href.length > 1) {
                        const targetEl = document.querySelector(href) || document.getElementById(href.substring(1));
                        if (targetEl) {
                            e.preventDefault();
                            setNavState(false);
                            const header = document.querySelector(".site-header") || document.querySelector(".nav-container");
                            const headerOffset = header ? (header.offsetHeight || 75) + 15 : 85;
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
        }

        // Close on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (isNavOpen) setNavState(false);
                closeDropdowns();
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
            if (navMoreDropdown && !navMoreDropdown.contains(e.target)) {
                navMoreDropdown.classList.remove("is-open");
                navMoreDropdown.classList.remove("dropdown-dismissed");
                if (navMoreBtn) navMoreBtn.setAttribute("aria-expanded", "false");
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


    // 3. Universal PWA Installation & Toast Notification Controller
    function initPwaEngine() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").catch(() => {});
        }

        let deferredPrompt = window.__xestusDeferredPrompt || null;
        const installBtns = document.querySelectorAll(".btn-install-pwa");
        const bookmarkBtns = document.querySelectorAll(".btn-bookmark-site");

        function showToast(msg) {
            let toast = document.getElementById("xestusGlobalToast");
            if (!toast) {
                toast = document.createElement("div");
                toast.id = "xestusGlobalToast";
                toast.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(100px);z-index:999999;background:rgba(15,23,42,0.96);backdrop-filter:blur(12px);border:1.5px solid #00ff88;color:#ffffff;padding:12px 22px;border-radius:12px;font-size:13.5px;font-weight:600;box-shadow:0 10px 30px rgba(0,0,0,0.5);display:flex;align-items:center;gap:10px;transition:transform 0.3s cubic-bezier(0.16,1,0.3,1),opacity 0.3s ease;opacity:0;pointer-events:none;max-width:90vw;text-align:center;";
                document.body.appendChild(toast);
            }
            toast.textContent = msg;
            toast.style.opacity = "1";
            toast.style.transform = "translateX(-50%) translateY(0)";
            clearTimeout(toast.__timeout);
            toast.__timeout = setTimeout(() => {
                toast.style.opacity = "0";
                toast.style.transform = "translateX(-50%) translateY(100px)";
            }, 3800);
        }
        window.showToastMessage = window.showToastMessage || showToast;

        function showMobileInstallPrompt() {
            if (document.getElementById("xestusMobilePwaPrompt")) return;
            const dismissed = localStorage.getItem("xestus_pwa_dismissed");
            if (dismissed && (Date.now() - parseInt(dismissed, 10) < 5 * 24 * 60 * 60 * 1000)) return;

            const banner = document.createElement("div");
            banner.id = "xestusMobilePwaPrompt";
            banner.style.cssText = "position:fixed;bottom:16px;left:14px;right:14px;max-width:440px;margin:0 auto;z-index:99998;background:rgba(7,12,24,0.95);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1.5px solid rgba(0,255,136,0.5);box-shadow:0 12px 36px rgba(0,0,0,0.6);border-radius:16px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;";
            
            banner.innerHTML = `
                <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
                    <img src="/assets/images/xestus-logo.png" alt="XESTUS" style="width:36px;height:36px;border-radius:8px;flex-shrink:0;">
                    <div style="min-width:0;">
                        <div style="font-weight:700;font-size:13px;color:#ffffff;line-height:1.2;">Install XESTUS App</div>
                        <div style="font-size:11.5px;color:#94a3b8;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Instant offline tools &amp; seva portal</div>
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
                    <button type="button" id="btnPwaPromptInstall" style="background:#00ff88;color:#070c18;font-weight:800;font-size:12px;padding:7px 14px;border-radius:10px;border:none;cursor:pointer;">Install</button>
                    <button type="button" id="btnPwaPromptClose" style="background:transparent;color:#94a3b8;border:none;font-size:18px;cursor:pointer;padding:4px 6px;line-height:1;">&times;</button>
                </div>
            `;
            document.body.appendChild(banner);

            document.getElementById("btnPwaPromptInstall")?.addEventListener("click", () => {
                triggerInstall();
                banner.remove();
            });

            document.getElementById("btnPwaPromptClose")?.addEventListener("click", () => {
                localStorage.setItem("xestus_pwa_dismissed", Date.now().toString());
                banner.remove();
            });
        }

        async function triggerInstall() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === "accepted") {
                    showToast("✓ XESTUS Web App installed to home screen!");
                }
                deferredPrompt = null;
                window.__xestusDeferredPrompt = null;
            } else {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (isIOS) {
                    showToast("📲 Tap Share (⎋) in Safari, then tap 'Add to Home Screen'");
                } else {
                    showToast("📲 Tap browser menu (⋮) -> 'Install App' or 'Add to Home screen'");
                }
            }
        }

        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            deferredPrompt = e;
            window.__xestusDeferredPrompt = e;
            installBtns.forEach(btn => btn.classList.add("ready-to-install"));
            if (window.innerWidth <= 768) {
                setTimeout(showMobileInstallPrompt, 1500);
            }
        });

        installBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                triggerInstall();
            });
        });

        window.addEventListener("appinstalled", () => {
            deferredPrompt = null;
            window.__xestusDeferredPrompt = null;
            showToast("✓ Welcome to XESTUS App!");
            const banner = document.getElementById("xestusMobilePwaPrompt");
            if (banner) banner.remove();
        });

        bookmarkBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                showToast("⭐ Press Ctrl + D (or Cmd + D) to bookmark XESTUS!");
            });
        });
    }

    // Run on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            applyStoredTheme();
            initNavigation();
            initPwaEngine();
        });
    } else {
        applyStoredTheme();
        initNavigation();
        initPwaEngine();
    }

    // Auto-load Spotlight Command Search Engine
    try {
        if (!window.XestusSpotlight && !document.querySelector('script[src*="spotlight-search.js"]')) {
            const spotlightScript = document.createElement('script');
            spotlightScript.src = (window.location.origin || '') + '/js/spotlight-search.min.js?v=4.1.0';
            spotlightScript.defer = true;
            document.head.appendChild(spotlightScript);
        }
    } catch (_) {}
})();
