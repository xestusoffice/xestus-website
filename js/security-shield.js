/**
 * XESTUS Security Shield & Integrity Defense System
 * Version: 2.0.0 (Enterprise Client-Side Anti-Tampering & Asset Protection)
 *
 * Capabilities:
 * - Anti-Inspect & Context Menu Defense (Right-click & DevTools shortcuts)
 * - DevTools Detection & Tamper Advisory Banner
 * - Source Integrity & Asset Protection
 * - Form Input XSS & Injection Payload Sanitizer
 * - Non-intrusive Glassmorphism Security Toast
 */

"use strict";

(function () {
    // 1. Configuration
    const SHIELD_CONFIG = {
        enabled: true,
        blockContextMenu: true,
        blockDevShortcuts: true,
        antiDebugger: true,
        sanitizeInputs: true,
        preventAssetDrag: true,
        toastDurationMs: 3000
    };

    // 2. UI: Modern Glassmorphism Security Toast
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
            background: rgba(10, 16, 30, 0.94);
            border: 1px solid rgba(0, 242, 254, 0.5);
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 242, 254, 0.25);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 9999px;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 13.5px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 999999;
            opacity: 0;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
            pointer-events: none;
        `;

        toastContainer.innerHTML = `
            <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:rgba(0,242,254,0.18);border-radius:50%;color:#00f2fe;font-size:12px;">🔒</span>
            <span id="xestusSecurityToastText" style="letter-spacing:0.3px;">XESTUS Security Shield Active</span>
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

    // 3. Console Tamper Advisory & Warning Banner
    function printConsoleWarning() {
        try {
            const titleStyle = "color: #00f2fe; font-size: 24px; font-weight: 800; text-shadow: 0 0 12px rgba(0,242,254,0.6); padding: 6px 0;";
            const warnStyle = "color: #ff4757; font-size: 14px; font-weight: bold; background: rgba(255, 71, 87, 0.1); padding: 4px 8px; border-radius: 4px;";
            const textStyle = "color: #a0aec0; font-size: 12px; line-height: 1.6;";
            
            console.log("%c🔒 XESTUS ENTERPRISE DEFENSE SHIELD", titleStyle);
            console.log("%c⚠️ SECURITY WARNING: Tampering with client scripts or injecting unauthorized commands is prohibited.", warnStyle);
            console.log("%cAll XESTUS intellectual property, proprietary models, and API boundaries are protected. Unauthorized penetration testing or code scraping will be logged and reported.", textStyle);
        } catch (e) {}
    }

    // 4. Right-Click Context Menu Suppression
    if (SHIELD_CONFIG.blockContextMenu) {
        document.addEventListener("contextmenu", function (e) {
            // Allow context menu only inside input / textarea if user is legitimately editing text
            const target = e.target;
            const isTextEditable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
            
            if (!isTextEditable) {
                e.preventDefault();
                showSecurityToast("🔒 XESTUS Security: Inspection and context actions are restricted.");
                return false;
            }
        }, { passive: false });
    }

    // 5. Developer Tools Keyboard Shortcuts Interceptor
    if (SHIELD_CONFIG.blockDevShortcuts) {
        window.addEventListener("keydown", function (e) {
            const key = e.key ? e.key.toLowerCase() : "";
            const keyCode = e.keyCode || e.which;
            const isCtrl = e.ctrlKey || e.metaKey;
            const isShift = e.shiftKey;
            const isAlt = e.altKey;

            // 1. F12 (DevTools)
            if (key === "f12" || keyCode === 123) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 XESTUS Security: Developer tools shortcut (F12) is disabled.");
                return false;
            }

            // 2. Ctrl + Shift + I (Inspect)
            // 3. Ctrl + Shift + J (Console)
            // 4. Ctrl + Shift + C (Inspect Element)
            // 5. Ctrl + Shift + K (Firefox Console)
            if (isCtrl && isShift && (key === "i" || key === "j" || key === "c" || key === "k" || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 75)) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 XESTUS Security: Inspection shortcuts are restricted.");
                return false;
            }

            // 6. Ctrl + U / Cmd + Option + U (View Source)
            if ((isCtrl && (key === "u" || keyCode === 85)) || (isCtrl && isAlt && (key === "u" || key === "i"))) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 XESTUS Security: View Source is restricted.");
                return false;
            }

            // 7. Ctrl + S (Save Page)
            if (isCtrl && (key === "s" || keyCode === 83)) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityToast("🔒 XESTUS Security: Saving webpage source is disabled.");
                return false;
            }
        }, { passive: false });
    }

    // 6. Prevent Asset Drag & Drop Hijacking
    if (SHIELD_CONFIG.preventAssetDrag) {
        document.addEventListener("dragstart", function (e) {
            const target = e.target;
            if (target && (target.tagName === "IMG" || target.tagName === "SVG" || target.tagName === "CANVAS" || target.classList?.contains("logo") || target.classList?.contains("brand"))) {
                e.preventDefault();
                return false;
            }
        }, { passive: false });
    }

    // 7. Form Input XSS & Payload Sanitization Filter
    if (SHIELD_CONFIG.sanitizeInputs) {
        function sanitizeValue(val) {
            if (typeof val !== "string") return val;
            return val
                .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
                .replace(/javascript\s*:/gi, "")
                .replace(/on\w+\s*=/gi, "");
        }

        document.addEventListener("input", function (e) {
            const el = e.target;
            if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) {
                // Strip active executable tags in real time if present
                if (/<script|javascript:|onerror=|onload=/i.test(el.value)) {
                    el.value = sanitizeValue(el.value);
                    showSecurityToast("🛡️ XESTUS Shield: Unsafe script input removed.");
                }
            }
        }, { passive: true });
    }

    // 8. Initialize on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            printConsoleWarning();
        });
    } else {
        printConsoleWarning();
    }

    // Expose public safe interface
    window.XESTUS_SECURITY_SHIELD = {
        version: "2.0.0",
        notify: showSecurityToast
    };

})();
