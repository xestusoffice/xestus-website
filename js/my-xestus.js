/**
 * XESTUS | "My XESTUS" Local Ecosystem & Utilities Engine
 * Version: 1.0.0
 * Features:
 * - 100% Client-Side Privacy (Zero Remote Data Storage)
 * - Favourites / My Tools (☆ Star system)
 * - Recently Used Tools tracking
 * - Native WhatsApp & Web Sharing Engine
 * - Non-intrusive PWA Install Helper
 */

(function () {
    "use strict";

    const STORAGE_KEY_FAVS = "xestus_fav_tools";
    const STORAGE_KEY_RECENTS = "xestus_recent_tools";

    window.MyXESTUS = {
        // --- FAVOURITES SYSTEM ---
        getFavourites: function () {
            try {
                const data = localStorage.getItem(STORAGE_KEY_FAVS);
                return data ? JSON.parse(data) : [];
            } catch (_) {
                return [];
            }
        },

        isFavourite: function (slug) {
            const favs = this.getFavourites();
            return favs.includes(slug);
        },

        toggleFavourite: function (slug) {
            let favs = this.getFavourites();
            if (favs.includes(slug)) {
                favs = favs.filter(s => s !== slug);
            } else {
                favs.push(slug);
            }
            try {
                localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(favs));
            } catch (_) {}
            
            this.updateStarUI(slug);
            window.dispatchEvent(new CustomEvent("xestus:favourites-updated", { detail: { favourites: favs } }));
            return favs.includes(slug);
        },

        // --- RECENTLY USED SYSTEM ---
        getRecents: function () {
            try {
                const data = localStorage.getItem(STORAGE_KEY_RECENTS);
                return data ? JSON.parse(data) : [];
            } catch (_) {
                return [];
            }
        },

        recordToolUsage: function (slug) {
            if (!slug) return;
            let recents = this.getRecents();
            recents = recents.filter(s => s !== slug);
            recents.unshift(slug);
            if (recents.length > 12) recents = recents.slice(0, 12);
            try {
                localStorage.setItem(STORAGE_KEY_RECENTS, JSON.stringify(recents));
            } catch (_) {}
            window.dispatchEvent(new CustomEvent("xestus:recents-updated", { detail: { recents } }));
        },

        // --- SHARING ENGINE ---
        shareTool: function (toolTitle, toolUrl) {
            const title = toolTitle || document.title || "XESTUS Practical Digital Tools";
            const url = toolUrl || window.location.href;
            const text = `Try ${title} on XESTUS — Fast, Free & Private Digital Tools:`;

            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                }).catch(() => {});
            } else {
                const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
                window.open(waUrl, "_blank", "noopener,noreferrer");
            }
        },

        // --- UI BINDINGS ---
        initToolPage: function (toolSlug) {
            if (!toolSlug) return;
            this.recordToolUsage(toolSlug);

            const starBtn = document.getElementById("btnToggleFav");
            if (starBtn) {
                this.updateStarUI(toolSlug);
                starBtn.addEventListener("click", () => {
                    this.toggleFavourite(toolSlug);
                });
            }

            const shareBtn = document.getElementById("btnShareTool");
            if (shareBtn) {
                shareBtn.addEventListener("click", () => {
                    this.shareTool();
                });
            }
        },

        updateStarUI: function (slug) {
            const starBtn = document.getElementById("btnToggleFav");
            if (!starBtn) return;
            const isFav = this.isFavourite(slug);
            const icon = starBtn.querySelector("i");
            const text = starBtn.querySelector("span");

            starBtn.classList.toggle("is-favourite", isFav);
            if (icon) {
                icon.setAttribute("data-lucide", isFav ? "star" : "star");
                icon.style.fill = isFav ? "var(--stitch-yellow, #ffc107)" : "none";
                icon.style.color = isFav ? "var(--stitch-yellow, #ffc107)" : "currentColor";
            }
            if (text) {
                text.textContent = isFav ? "Saved to My Tools" : "Add to My Tools";
            }
            if (window.lucide) lucide.createIcons();
        }
    };

    // Auto-initialize if tool slug is in DOM or URL
    document.addEventListener("DOMContentLoaded", () => {
        const bodySlug = document.body.getAttribute("data-tool-slug");
        if (bodySlug) {
            window.MyXESTUS.initToolPage(bodySlug);
        }
    });
})();
