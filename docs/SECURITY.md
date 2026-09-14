# XESTUS Security Policy, Hardening & Audit Specification

**Company**: XESTUS (`https://xestus.in`)
**Target Repository**: `xestusoffice/xestus-website`
**Security Status**: Hardened & Verified
**Revision Date**: September 2026

---

## 1. Threat Model & Hosting Boundary

As a modern AI and software engineering enterprise, XESTUS adheres to strict defense-in-depth principles across all platform layers.

### 1.1 Architecture & Hosting Scope
- **Frontend Hosting**: Static global CDN delivery via GitHub Pages with custom domain binding (`xestus.in` via CNAME).
- **Hosting Boundary Realities**: Static GitHub Pages origins cannot directly configure dynamic origin HTTP response headers (such as `Strict-Transport-Security` or server-injected CSP headers).
- **Defense Strategy**:
  1. Client-layer protections implemented directly in HTML/JS (Meta CSP, `X-Content-Type-Options: nosniff`, DOM sanitization, honeypot traps, client rate-limiting).
  2. Edge proxy / Cloudflare DNS security headers configured for custom domain SSL/TLS termination.
  3. Serverless API proxies (Cloudflare Workers / Supabase) isolating all future private database operations.

---

## 2. Credential Classification & Secrets Audit

### 2.1 Credential Classification Matrix
| Identifier | Location | Classification | Risk Level | Description & Protection Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **EmailJS Public Key** (`MjRM1_6Bb8yJSG3d0`) | `script.js` | **PUBLIC** | Low | Intentionally public client-side dispatch key. Protected by origin domain restrictions, client rate-limiting, and honeypot traps. |
| **EmailJS Service ID** (`service_rumjowb`) | `script.js` | **PUBLIC** | Low | Public service routing identifier. |
| **EmailJS Template ID** (`template_malid0j`) | `script.js` | **PUBLIC** | Low | Public template reference. |
| **Google Analytics** (`G-EF3ZRR55YY`) | `index.html` | **PUBLIC** | Minimal | Standard public web telemetry identifier. |
| **Search Console Token** (`googlebcd2dd6167a83a4f.html`) | Root | **PUBLIC** | Minimal | Standard domain ownership verification marker. |

> [!IMPORTANT]
> **Zero Private Secrets Policy**: No private API keys (OpenAI, Anthropic, Gemini, AWS), database passwords, SMTP secrets, or VAPID private keys exist in or may ever be committed to this repository. All private credentials reside strictly within secure backend environment variables.

---

## 3. Frontend Security Controls & Hardening

### 3.1 Cross-Site Scripting (XSS) & DOM Hardening
- **Sanitization Utility**: `escapeHTML(str)` is implemented in `script.js` to escape `&`, `<`, `>`, `"`, and `'` characters across all dynamic string concatenations.
- **Safe DOM APIs**: User-supplied values (e.g. subscriber emails, status badges) are rendered strictly via `.textContent` / `innerText` rather than raw `innerHTML`.

### 3.2 Form Abuse, Spam & Injection Defense
Both the main **Contact Form** (`#contactForm`) and the **Follow XESTUS Modal** (`#followModalForm`) incorporate multi-layered defenses:
- **Honeypot Trap**: Invisible form inputs (`name="_gotcha_filter"` and `name="_bot_filter"`, `display: none !important`, `tabindex="-1"`) catch automated web crawlers. Submissions with filled honeypots are dropped silently.
- **Submission Throttling**: A 5-second cooldown timer enforces minimum latency between successive form submissions, mitigating button-mashing and API quota exhaustion attacks.
- **Payload Constraints**: All form inputs enforce client-side `maxlength` limits (`100` for names, `150` for emails, `2500` for project briefs).

### 3.3 Content Security Policy (CSP)
A strict Content Security Policy is declared via `<meta http-equiv="Content-Security-Policy">` in `index.html`:
```http
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.jsdelivr.net https://unpkg.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com;
```

---

## 4. Privacy & Telemetry Protections

### 4.1 Follow XESTUS Privacy
- Public users cannot access subscriber databases, individual subscriber emails, IDs, or timestamps.
- Local subscription indicators use browser-local storage only to personalize the user's Follow button state (`"Followed ✓"`), never as a public data source.

### 4.2 Live Stats & Analytics Telemetry
- All public stats represent verified aggregate numbers only.
- No raw IP addresses, tracking cookies, or individual visitor logs are collected or exposed.
- When live analytics data is unavailable or syncing, the UI displays an honest fallback (`"Telemetry Syncing with Node"`) rather than fabricated statistics.

---

## 5. Recommended Cloudflare Edge Headers (Production)

For custom domain deployments on Cloudflare / Edge CDN, the following HTTP response headers are recommended:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

---

## 6. Incident Response & Secret Rotation Protocol

If an unauthorized secret or sensitive token is ever discovered in source control:
1. **Immediate Revocation**: Immediately revoke the exposed token via the service provider dashboard.
2. **History Purge**: Remove the commit from Git history using `git-filter-repo` or BFG Repo-Cleaner before any public sync.
3. **Audit**: Review provider access logs for any unauthorized API invocations during the exposure window.
