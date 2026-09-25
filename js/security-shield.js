/**
 * XESTUS Enterprise Security Shield & Anti-Tamper Defense System
 * Version: 3.2.0 (Fortress Client-Side Protection & Anti-Cloning Shield)
 * Author: XESTUS Core Security Engineering
 *
 * Capabilities:
 * - Domain Authorization & Anti-Cloning Engine (Prevents pirated mirrors)
 * - Anti-Inspect & Context Menu Lock (Right-click & DevTools shortcuts)
 * - Real-Time DevTools Detection, Console Wiper & Tamper Traps
 * - Anti-Debugging & Code Execution Guard
 * - Anti-Scraping & Asset Drag/Copy Protection
 * - Anti-Clickjacking & Phishing Frame Lock (IFrame Sandboxing)
 * - Real-Time Input XSS & Payload Sanitizer
 * - High-Tech Frosted Glass Security Advisory Toast
 */

"use strict";

(function () {
    // 1. Core Shield Configuration
    const SHIELD_CONFIG = {
        enabled: true,
        enforceDomainLock: true,
        blockContextMenu: true,
        blockDevShortcuts: true,
        blockSourceCopy: true,
        antiDevTools: true,
        antiClickjacking: true,
        preventAssetDrag: true,
        sanitizeInputs: true,
        toastDurationMs: 2800,
        authorizedDomains: [
            "xestus.in",
            "www.xestus.in",
            "sudip200424.github.io",
            "localhost",
            "127.0.0.1",
            "0.0.0.0",
            "::1",
            "" // Local file protocol or electron
        ]
    };

    // Check if current user is an automated search / ad verification crawler
    const isSearchBot = typeof navigator !== "undefined" && /Googlebot|Mediapartners-Google|AdsBot-Google|Google-Adwords|Lighthouse|bingbot|Baiduspider/i.test(navigator.userAgent || "");

    // 2. Domain Authorization & Anti-Cloning Engine
    if (SHIELD_CONFIG.enforceDomainLock && !isSearchBot) {
        try {
            const currentHost = (window.location.hostname || "").toLowerCase();
            const isAuthorized = SHIELD_CONFIG.authorizedDomains.some(domain => {
                if (domain === "") return window.location.protocol === "file:";
                return currentHost === domain || currentHost.endsWith("." + domain);
            });

            if (!isAuthorized && currentHost !== "") {
                console.error("🔒 XESTUS Security: Unauthorized domain clone detected. Redirecting to official portal...");
                document.documentElement.innerHTML = `
                    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#05070c;color:#ffffff;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:24px;">
                        <div style="font-size:48px;margin-bottom:16px;">🛡️</div>
                        <h1 style="color:#00f2fe;font-size:24px;margin-bottom:12px;font-weight:700;">XESTUS Security: Unauthorized Clone Restricted</h1>
                        <p style="color:#94a3b8;max-width:480px;font-size:14px;line-height:1.6;margin-bottom:24px;">
                            This website is a protected asset of XESTUS. Unauthorized cloning, scraping, or mirroring is strictly prohibited.
                        </p>
                        <a href="https://xestus.in" style="background:linear-gradient(135deg,#00f2fe,#4facfe);color:#05070c;padding:12px 28px;border-radius:9999px;font-weight:700;text-decoration:none;font-size:14px;box-shadow:0 0 20px rgba(0,242,254,0.4);">
                            Proceed to Official Portal (xestus.in)
                        </a>
                    </div>
                `;
                setTimeout(() => {
                    window.location.replace("https://xestus.in");
                }, 2500);
                return;
            }
        } catch (e) {}
    }

    // 3. Anti-Clickjacking / IFrame Phishing Mirror Defense (AdSense Safe)
    if (SHIELD_CONFIG.antiClickjacking && !isSearchBot) {
        try {
            if (window.top !== window.self) {
                const referrer = document.referrer || "";
                const isAdPreview = /google|doubleclick|googlesyndication|adservice/i.test(referrer);
                if (!isAdPreview) {
                    window.top.location = window.self.location.href;
                }
            }
        } catch (e) {
            // Silently handle sandboxed frame policies without throwing uncaught exceptions
        }
    }


    // 4. UI: Frosted Glass Security Toast Notification
    let toastContainer = null;
    let toastTimer = null;

    function createToastElement() {
        if (toastContainer) return toastContainer;

        toastContainer = document.createElement("div");
        toastContainer.id = "xestusSecurityToast";
        toastContainer.setAttribute("role", "alert");
        toastContainer.setAttribute("aria-live", "assertive");
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 28px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: rgba(10, 16, 30, 0.95);
            border: 1px solid rgba(0, 242, 254, 0.55);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 242, 254, 0.28);
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            color: #ffffff;
            padding: 12px 26px;
            border-radius: 9999px;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.3px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 9999999;
            opacity: 0;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
            pointer-events: none;
            user-select: none;
        `;

        toastContainer.innerHTML = `
            <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:rgba(0,242,254,0.18);border-radius:50%;color:#00f2fe;font-size:12px;">🛡️</span>
            <span id="xestusSecurityToastText">XESTUS Enterprise Security Active</span>
        `;

        document.body.appendChild(toastContainer);
        return toastContainer;
    }

    function showSecurityToast(message) {
        try {
            const toast = createToastElement();
            const textEl = document.getElementById("xestusSecurityToastText");
            if (textEl) textEl.textContent = message;

            toast.style.opacity = "1";
            toast.style.transform = "translateX(-50%) translateY(0)";

            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.style.opacity = "0";
                toast.style.transform = "translateX(-50%) translateY(80px)";
            }, SHIELD_CONFIG.toastDurationMs);
        } catch (e) {}
    }

    // 5. Console Security Banner & Tamper Warning
    function printConsoleWarning() {
        try {
            const titleStyle = "color: #00f2fe; font-size: 20px; font-weight: 800; text-shadow: 0 0 14px rgba(0,242,254,0.7); padding: 8px 0;";
            const warnStyle = "color: #ff4757; font-size: 13px; font-weight: bold; background: rgba(255, 71, 87, 0.12); padding: 4px 10px; border-radius: 4px;";
            const textStyle = "color: #94a3b8; font-size: 11.5px; line-height: 1.6;";

            console.log("%c🔒 XESTUS ENTERPRISE INTEGRITY SHIELD", titleStyle);
            console.log("%c⚠️ UNAUTHORIZED INSPECTION / CODE CLONING RESTRICTED", warnStyle);
            console.log("%cAll XESTUS proprietary software architectures, AI models, algorithms, and interface components are protected under international copyright & cybersecurity standards.", textStyle);
        } catch (e) {}
    }

    // 6. Right-Click Context Menu Defense
    if (SHIELD_CONFIG.blockContextMenu) {
        document.addEventListener("contextmenu", function (e) {
            const target = e.target;
            const isTextEditable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable || target.closest(".allow-context-menu"));

            if (!isTextEditable) {
                e.preventDefault();
                showSecurityToast("🔒 XESTUS Security: Context menu and inspection are restricted.");
                return false;
            }
        }, { passive: false });
    }

    // 7. Keyboard Shortcuts & DevTools Interceptor
    if (SHIELD_CONFIG.blockDevShortcuts) {
        window.addEventListener("keydown", function (e) {
            const key = e.key ? e.key.toLowerCase() : "";
            const keyCode = e.keyCode || e.which;
            const isCtrl = e.ctrlKey || e.metaKey; // Meta key for macOS Command
            const isShift = e.shiftKey;
            const isAlt = e.altKey;
            const target = e.target;
            const isEditable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable || target.closest(".allow-select"));

            // 1. F12 (Developer Tools)
            if (key === "f12" || keyCode === 123) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 Developer Tools shortcut (F12) is disabled.");
                return false;
            }

            // 2. Ctrl + Shift + I / Cmd + Opt + I (Inspect Element)
            // 3. Ctrl + Shift + J / Cmd + Opt + J (Console)
            // 4. Ctrl + Shift + C / Cmd + Opt + C (Element Inspector)
            // 5. Ctrl + Shift + K (Firefox Console)
            // 6. Ctrl + Shift + E (Network Tab)
            if (
                (isCtrl && isShift && (key === "i" || key === "j" || key === "c" || key === "k" || key === "e" || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 75 || keyCode === 69)) ||
                (isCtrl && isAlt && (key === "i" || key === "j" || key === "c" || key === "u"))
            ) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 Inspection shortcuts are restricted.");
                return false;
            }

            // 7. Ctrl + U / Cmd + Opt + U (View Page Source)
            if ((isCtrl && (key === "u" || keyCode === 85)) || (isCtrl && isAlt && (key === "u" || key === "i"))) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 View Page Source is restricted.");
                return false;
            }

            // 8. Ctrl + S (Save Complete Page)
            if (isCtrl && (key === "s" || keyCode === 83)) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 Webpage source saving is disabled.");
                return false;
            }

            // 9. Ctrl + P (Print / PDF Export)
            if (isCtrl && (key === "p" || keyCode === 80)) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 Page printing / PDF export is disabled.");
                return false;
            }

            // 10. Ctrl + A / Ctrl + C on non-input body (Anti-Scraping / Anti-Cloning)
            if (isCtrl && (key === "a" || key === "c") && !isEditable) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🛡️ XESTUS Shield: Content copying is protected.");
                return false;
            }
        }, { passive: false });
    }

    // 8. DevTools Window Detection & Auto-Wipe
    if (SHIELD_CONFIG.antiDevTools) {
        let devToolsOpen = false;
        const threshold = 160;

        function checkDevTools() {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;

            if (widthDiff || heightDiff) {
                if (!devToolsOpen) {
                    devToolsOpen = true;
                    showSecurityToast("🛡️ XESTUS Shield: DevTools detected. Inspection disabled.");
                    try { console.clear(); } catch (e) {}
                    printConsoleWarning();
                }
            } else {
                devToolsOpen = false;
            }
        }

        window.addEventListener("resize", checkDevTools, { passive: true });
        setInterval(checkDevTools, 2000);
    }

    // 9. Asset Drag & Drop Hijack Prevention
    if (SHIELD_CONFIG.preventAssetDrag) {
        document.addEventListener("dragstart", function (e) {
            const target = e.target;
            if (target && (target.tagName === "IMG" || target.tagName === "SVG" || target.tagName === "CANVAS" || target.classList?.contains("logo") || target.classList?.contains("brand"))) {
                e.preventDefault();
                return false;
            }
        }, { passive: false });
    }

    // 10. Form Input XSS & Payload Sanitization Filter
    if (SHIELD_CONFIG.sanitizeInputs) {
        function sanitizeValue(val) {
            if (typeof val !== "string") return val;
            return val
                .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
                .replace(/javascript\s*:/gi, "")
                .replace(/data\s*:\s*text\/html/gi, "")
                .replace(/on\w+\s*=/gi, "");
        }

        document.addEventListener("input", function (e) {
            const el = e.target;
            if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) {
                if (/<script|javascript:|onerror=|onload=|data:text\/html/i.test(el.value)) {
                    el.value = sanitizeValue(el.value);
                    showSecurityToast("🛡️ XESTUS Shield: Unsafe script input neutralized.");
                }
            }
        }, { passive: true });
    }

    // 11. Initialize on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            printConsoleWarning();
        });
    } else {
        printConsoleWarning();
    }

    // Expose public safe interface
    window.XESTUS_SECURITY_SHIELD = {
        version: "3.2.0",
        notify: showSecurityToast
    };
})();
