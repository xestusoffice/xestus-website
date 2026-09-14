# XESTUS System Architecture Documentation

**Company**: XESTUS
**Tagline**: *Intelligence Beyond Limits*
**Domain**: [https://xestus.in](https://xestus.in)
**Status**: Production & Master Evolution Platform

---

## 1. Architectural Overview

XESTUS is engineered with a decoupled, high-performance static frontend at its public entry point, delivering zero layout shift, sub-second global CDN asset loading, dual-track business services (enterprise AI & practical digital help), an interactive product pipeline, and seamless readiness for future microservices backends.

```
+-----------------------------------------------------------------------------------------+
|                                  XESTUS PUBLIC CLIENT                                   |
|                                https://xestus.in (Global Edge)                          |
|                                                                                         |
|   +---------------------+  +----------------------+  +-------------------------------+  |
|   |     index.html      |  |      style.css       |  |           script.js           |  |
|   |   Semantic HTML5    |  |  Token Design System |  | Dynamic Controllers & i18n    |  |
|   |   & SEO Microdata   |  |  & 3D Perspective    |  | Estimator, Live Stats, Modals |  |
|   +---------------------+  +----------------------+  +-------------------------------+  |
|                                                                                         |
+--------------------------------------------+--------------------------------------------+
                                             |
                         +-------------------+-------------------+
                         |                                       |
                         v                                       v
+--------------------------------------------+   +----------------------------------------+
|          CLIENT DISPATCH ADAPTER           |   |       FUTURE TELEMETRY / CRM API       |
|               EmailJS Cloud                |   |          api.xestus.in (FastAPI)       |
|    - Instant inquiry dispatch              |   |    - Live visits & follower counts     |
|    - SLA-backed engineering routing        |   |    - Automated newsletter delivery     |
+--------------------------------------------+   +----------------------------------------+
                                                                 |
                                                                 v
+-----------------------------------------------------------------------------------------+
|                     ISOLATED RESEARCH LAB: SAMSUNG GALAXY F41                           |
|                               (ARM64 Linux Test Node)                                   |
|   - Internal API prototyping & local quantized SLMs                                     |
|   - Tailscale encrypted WireGuard mesh networking                                       |
|   - 100% decoupled from public production uptime                                        |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Production Component Breakdown

### 2.1 Public Frontend Experience Layer
1. **Interactive Hero & 3D Orb**: CSS perspective and GPU-accelerated 3D coordinate tracking with zero layout shifts.
2. **Dual-Track Service Matrix**: High-end AI & software engineering alongside accessible digital form assistance for ordinary citizens.
3. **Interactive Project Estimator**: Dynamic scope generator with real-time turnaround calculations and 1-click inquiry transfer.
4. **Future Products Showcase**: Dedicated architectural foundation for *XESTUS FlowAgent*, *XESTUS DataSync*, and *XESTUS EdgeNode*.
5. **Interactive Technology Roadmap**: 4-Epoch vision timeline documenting foundational progress to global edge computing.
6. **Enterprise & Digital FAQ**: Accessible accordion answering client questions on IP ownership, NDAs, turnarounds, and pricing.
7. **Follow XESTUS & Live Stats**: Privacy-first aggregate telemetry with rolling-window breakdown modals.

### 2.2 Multilingual Engine (i18n)
- Preloaded dictionary (`js/translations.js`) supporting **English (`en`)**, **Bengali (`bn`)**, and **Hindi (`hi`)** with 100% key parity across 319 unique translation keys.
- 4-tier waterfall detection: URL query param $\rightarrow$ localStorage $\rightarrow$ browser locale $\rightarrow$ English canonical default.

---

## 3. Security, Privacy & Integrity Standards

1. **Zero Fake Metrics**: All social proof and live stats represent honest aggregate data or display graceful syncing states.
2. **IP & Source Code Sovereignty**: Clients retain 100% ownership of custom software upon project settlement.
3. **Defense-in-Depth**: Strict honeypot spam protection, CSP-compliant markup, Subresource Integrity, and encrypted HTTPS.
