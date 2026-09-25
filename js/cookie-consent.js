/**
 * XESTUS Universal Cookie Consent & Google Consent Mode v2 Controller
 * Author: XESTUS Security & Privacy Engineering
 * Version: 1.0.0
 * Compliance: GDPR, CCPA, ePrivacy Directive, Google AdSense & Analytics v2
 */

(function () {
    "use strict";

    const STORAGE_KEY = "xestus_cookie_consent_v2";

    // 1. Google Consent Mode v2 Default Setup
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }

    // Read stored consent if available
    let storedConsent = null;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) storedConsent = JSON.parse(raw);
    } catch (e) {}

    if (storedConsent) {
        gtag("consent", "default", {
            ad_storage: storedConsent.advertising ? "granted" : "denied",
            ad_user_data: storedConsent.advertising ? "granted" : "denied",
            ad_personalization: storedConsent.advertising ? "granted" : "denied",
            analytics_storage: storedConsent.analytics ? "granted" : "denied",
            wait_for_update: 500
        });
    } else {
        // Default restricted state prior to user interaction
        gtag("consent", "default", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "denied",
            wait_for_update: 500
        });
    }

    function updateGoogleConsent(analyticsGranted, adsGranted) {
        gtag("consent", "update", {
            ad_storage: adsGranted ? "granted" : "denied",
            ad_user_data: adsGranted ? "granted" : "denied",
            ad_personalization: adsGranted ? "granted" : "denied",
            analytics_storage: analyticsGranted ? "granted" : "denied"
        });
    }

    function saveConsent(analytics, advertising) {
        const state = {
            timestamp: new Date().toISOString(),
            essential: true,
            analytics: Boolean(analytics),
            advertising: Boolean(advertising)
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}

        updateGoogleConsent(state.analytics, state.advertising);
        removeBanner();
    }

    // 2. Cookie Consent UI Banner Creation
    function renderBanner() {
        if (storedConsent) return; // User already made a choice

        if (document.getElementById("xestusCookieBanner")) return;

        const banner = document.createElement("div");
        banner.id = "xestusCookieBanner";
        banner.className = "xestus-cookie-banner";
        banner.setAttribute("role", "dialog");
        banner.setAttribute("aria-live", "polite");
        banner.setAttribute("aria-label", "Cookie & Privacy Consent");

        banner.innerHTML = `
            <div class="cookie-banner-wrap">
                <div class="cookie-banner-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M7 15.5v.01"></path><path d="M15 15.5v.01"></path><path d="M11 12v.01"></path><path d="M12 18v.01"></path></svg>
                </div>
                <div class="cookie-banner-body">
                    <h3 class="cookie-banner-title">Cookie &amp; Privacy Preferences</h3>
                    <p class="cookie-banner-text">
                        We use essential cookies for platform security, along with privacy-respecting analytics and non-invasive advertising (Google AdSense) to deliver free developer utilities. All tool computations execute 100% in your browser. Review our <a href="/privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a> and <a href="/cookie-policy.html" target="_blank" rel="noopener">Cookie Policy</a>.
                    </p>
                </div>
                <div class="cookie-banner-actions">
                    <button type="button" class="cookie-btn cookie-btn-accept" id="btnCookieAcceptAll">
                        Accept All
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-reject" id="btnCookieRejectOptional">
                        Essential Only
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-manage" id="btnCookieManage">
                        Preferences
                    </button>
                </div>
            </div>
            
            <!-- Preferences Sub-Modal -->
            <div class="cookie-prefs-panel" id="cookiePrefsPanel" style="display: none;">
                <div class="cookie-prefs-header">
                    <h4>Customize Privacy Preferences</h4>
                    <button type="button" class="cookie-prefs-close" id="btnCookiePrefsClose" aria-label="Close preferences">✕</button>
                </div>
                <div class="cookie-prefs-list">
                    <label class="cookie-pref-item">
                        <div class="pref-info">
                            <strong>Strictly Necessary Cookies</strong>
                            <span>Required for navigation, theme settings, security shields, and core functionality. Cannot be disabled.</span>
                        </div>
                        <input type="checkbox" checked disabled class="pref-toggle">
                    </label>
                    <label class="cookie-pref-item">
                        <div class="pref-info">
                            <strong>Performance &amp; Analytics Cookies</strong>
                            <span>Aggregated, anonymous usage telemetry to diagnose site health and improve tool performance.</span>
                        </div>
                        <input type="checkbox" id="prefAnalyticsToggle" checked class="pref-toggle">
                    </label>
                    <label class="cookie-pref-item">
                        <div class="pref-info">
                            <strong>Advertising &amp; Measurement Cookies</strong>
                            <span>Used by Google AdSense to serve relevant advertisements and support free access to our tools.</span>
                        </div>
                        <input type="checkbox" id="prefAdsToggle" checked class="pref-toggle">
                    </label>
                </div>
                <div class="cookie-prefs-footer">
                    <button type="button" class="cookie-btn cookie-btn-accept" id="btnCookieSaveCustom">
                        Save Selected Preferences
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Attach listeners
        const btnAcceptAll = document.getElementById("btnCookieAcceptAll");
        const btnReject = document.getElementById("btnCookieRejectOptional");
        const btnManage = document.getElementById("btnCookieManage");
        const prefsPanel = document.getElementById("cookiePrefsPanel");
        const btnPrefsClose = document.getElementById("btnCookiePrefsClose");
        const btnSaveCustom = document.getElementById("btnCookieSaveCustom");
        const prefAnalytics = document.getElementById("prefAnalyticsToggle");
        const prefAds = document.getElementById("prefAdsToggle");

        function addListener(el, fn) {
            if (!el) return;
            el.addEventListener("click", fn);
            el.addEventListener("touchend", function (e) {
                e.preventDefault();
                fn(e);
            }, { passive: false });
        }

        addListener(btnAcceptAll, () => saveConsent(true, true));
        addListener(btnReject, () => saveConsent(false, false));
        addListener(btnManage, () => {
            if (prefsPanel) {
                prefsPanel.style.display = prefsPanel.style.display === "none" ? "block" : "none";
            }
        });
        addListener(btnPrefsClose, () => {
            if (prefsPanel) prefsPanel.style.display = "none";
        });
        addListener(btnSaveCustom, () => {
            if (prefAnalytics && prefAds) {
                saveConsent(prefAnalytics.checked, prefAds.checked);
            }
        });
    }

    function removeBanner() {
        const banner = document.getElementById("xestusCookieBanner");
        if (banner) {
            banner.style.pointerEvents = "none";
            banner.classList.add("cookie-banner-fadeout");
            setTimeout(() => {
                if (banner.parentNode) banner.parentNode.removeChild(banner);
            }, 300);
        }
    }

    // Expose global method to reopen preferences if user clicks "Cookie Settings" in footer
    window.XESTUS_COOKIE_CONSENT = {
        openPreferences: function () {
            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch (e) {}
            storedConsent = null;
            renderBanner();
            const prefsPanel = document.getElementById("cookiePrefsPanel");
            if (prefsPanel) prefsPanel.style.display = "block";
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderBanner);
    } else {
        renderBanner();
    }
})();
