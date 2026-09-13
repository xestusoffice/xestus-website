# XESTUS System Architecture Documentation

**Company**: XESTUS  
**Tagline**: *Intelligence Beyond Limits*  
**Domain**: [https://xestus.in](https://xestus.in)  
**Status**: Production (GitHub Pages Static Frontend)

---

## 1. Architectural Overview

XESTUS is architected with a decoupled, high-performance static frontend at its public entry point, designed for global edge delivery, zero server maintenance overhead for static assets, and seamless future integration with the XESTUS Backend API.

```
+-------------------------------------------------------------------------+
|                                                                         |
|                          XESTUS PUBLIC CLIENT                           |
|                       https://xestus.in (Edge)                          |
|                                                                         |
|   +-------------------+  +--------------------+  +------------------+   |
|   |    index.html     |  |     style.css      |  |    script.js     |   |
|   |  Semantic HTML5   |  |   Design Tokens    |  |  UI & Controller |   |
|   +-------------------+  +--------------------+  +------------------+   |
|                                                                         |
+------------------------------------+------------------------------------+
                                     |
                                     | Form Dispatches / Inquiries
                                     v
+------------------------------------+------------------------------------+
|                                                                         |
|                        CURRENT DISPATCH ADAPTER                         |
|                             EmailJS Cloud                               |
|                                                                         |
+------------------------------------+------------------------------------+
                                     |
                                     v (Future Evolution)
+------------------------------------+------------------------------------+
|                                                                         |
|                       FUTURE XESTUS API LAYER                           |
|                 FastAPI / Node.js Microservices Layer                   |
|                                                                         |
|   +-------------------+  +--------------------+  +------------------+   |
|   |    Auth & RBAC    |  |  Inquiry & Lead CRM|  |  AI Agents & RAG |   |
|   +-------------------+  +--------------------+  +------------------+   |
|                                                                         |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                                                                         |
|                           DATA PERSISTENCE                              |
|                         PostgreSQL / Redis                              |
|                                                                         |
+-------------------------------------------------------------------------+
```

---

## 2. Current Production Components

### 2.1 Static Delivery Layer
- **Hosting Provider**: GitHub Pages (Edge CDN).
- **Deployment Source**: Branch `main`, root `/` path.
- **Custom Domain**: `xestus.in` configured via DNS CNAME pointer.
- **TLS/SSL**: Automated HTTPS certificates provisioned and managed by GitHub Pages.

### 2.2 Client-Side Codebase
1. **`index.html`**:
   - Single-page application architecture.
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - Integrated Open Graph, Twitter cards, and Schema.org JSON-LD microdata.
2. **`style.css`**:
   - Centralized Design System tokens (`--bg-*`, `--cyan-*`, `--text-*`, `--space-*`, `--radius-*`).
   - Pure CSS glassmorphism, responsive grid systems, and GPU-accelerated transforms.
   - `@media (prefers-reduced-motion: reduce)` accessibility compliance.
3. **`script.js`**:
   - Single controller pattern for client interactions.
   - `IntersectionObserver` for performant scroll-triggered animations.
   - Custom pointer/cursor tracking and CSS 3D orb coordinate interpolation.
   - Offline detection and connection monitor overlay.
   - Inquiry submission handling via EmailJS client SDK.

---

## 3. Data & Communication Flow

### Inquiry Submission Pipeline (Current):
1. Visitor fills out inquiry form on `https://xestus.in#contact`.
2. Client-side validation verifies required fields, email syntax, and honeypot field.
3. `script.js` dispatches payload via EmailJS SDK (`emailjs.send("service_rumjowb", "template_malid0j", {...})`).
4. Instant user feedback delivered via UI state indicators (`formMessage`).
5. Email delivered to `xestus.office@gmail.com`.

---

## 4. Staging vs Production Separation

- **Production**: `main` branch deployed to `xestus.in`.
- **Development**: Feature branches (e.g., `revamp/xestus-premium-v1`) tested locally and in staging environments before merge review.
