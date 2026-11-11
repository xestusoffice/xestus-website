/**
 * XESTUS | Progressive Web App Service Worker & Notification Handler
 * Tagline: Intelligence Beyond Limits
 * Version: 5.0.0
 */

"use strict";

const CACHE_NAME = "xestus-v5.0.0";
const STATIC_ASSETS = [
    "/",
    "/index.html",
    "/style.min.css",
    "/assets/images/xestus-logo.png"
];

// Install Event: Cache Core Offline Shell Assets
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS).catch(() => {
                // Graceful fallback if any asset fails to pre-cache
            });
        }).then(() => self.skipWaiting())
    );
});

// Activate Event: Clean up stale caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event: Meets Chromium PWA installability requirements
// Strategy: Network-first for HTML navigations; Cache-first with background revalidation for same-origin assets
self.addEventListener("fetch", (event) => {
    // Only handle GET requests
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);

    // Bypass analytics, ads, and third-party advertising scripts
    if (
        url.hostname.includes("googletagmanager.com") ||
        url.hostname.includes("google-analytics.com") ||
        url.hostname.includes("pagead2.googlesyndication.com") ||
        url.hostname.includes("googleads") ||
        url.hostname.includes("doubleclick.net") ||
        url.hostname.includes("adtrafficquality.google")
    ) {
        return;
    }

    // HTML Document Navigations: Network-first to always ensure fresh content
    if (event.request.mode === "navigate") {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match(event.request).then((cachedResponse) => {
                        return cachedResponse || caches.match("/index.html");
                    });
                })
        );
        return;
    }

    // Same-origin static assets: Cache-first with silent network revalidation
    if (url.origin === self.location.origin) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    fetch(event.request)
                        .then((networkResponse) => {
                            if (networkResponse && networkResponse.status === 200) {
                                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
                            }
                        })
                        .catch(() => {});
                    return cachedResponse;
                }
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                });
            })
        );
    }
});

// Push Event: Handle Inbound Web Push Notifications
self.addEventListener("push", (event) => {
    let payload = {
        title: "XESTUS Intelligence",
        body: "A new technology update has been published by XESTUS.",
        icon: "/assets/images/xestus-logo.png",
        badge: "/assets/images/xestus-logo.png",
        url: "https://xestus.in"
    };

    if (event.data) {
        try {
            payload = Object.assign(payload, event.data.json());
        } catch {
            payload.body = event.data.text();
        }
    }

    const options = {
        body: payload.body,
        icon: payload.icon || "/assets/images/xestus-logo.png",
        badge: payload.badge || "/assets/images/xestus-logo.png",
        data: {
            url: payload.url || "https://xestus.in"
        },
        vibrate: [100, 50, 100],
        actions: [
            { action: "explore", title: "View Update" }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(payload.title, options)
    );
});

// Notification Click Event: Navigate to relevant update URL
self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    const targetUrl = (event.notification.data && event.notification.data.url)
        ? event.notification.data.url
        : "https://xestus.in";

    event.waitUntil(
        clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url === targetUrl && "focus" in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
