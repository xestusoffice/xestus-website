/**
 * XESTUS | Progressive Web App Service Worker & Notification Handler
 * Tagline: Intelligence Beyond Limits
 * Version: 1.0.0
 */

"use strict";

const CACHE_NAME = "xestus-v3.5.1";
const STATIC_ASSETS = [
    "/",
    "/index.html",
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
