# XESTUS Security Policy & Audit Specification

**Company**: XESTUS  
**Target Repository**: `xestusoffice/xestus-website`  
**Status**: Active

---

## 1. Security Baseline & Threat Model

As a public-facing website representing an AI & technology enterprise, security is integrated across all deployment tiers.

### 1.1 Credential Classification Matrix
| Identifier | Location | Classification | Risk Level | Protection Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **EmailJS Public Key** (`MjRM1_6Bb8yJSG3d0`) | `script.js` | **PUBLIC** | Low | Client identifier. Protected by client rate-limits, honeypot fields, and EmailJS origin restrictions. |
| **EmailJS Service ID** (`service_rumjowb`) | `script.js` | **PUBLIC** | Low | Public service identifier. |
| **EmailJS Template ID** (`template_malid0j`) | `script.js` | **PUBLIC** | Low | Public template reference. |
| **Google Analytics** (`G-EF3ZRR55YY`) | `index.html` | **PUBLIC** | Minimal | Standard public telemetry tag. |
| **Search Console Token** (`googlebcd2dd6167a83a4f.html`) | Root | **PUBLIC** | Minimal | Standard domain ownership file. |

> [!IMPORTANT]
> **Zero Private Secrets in Frontend**: Private credentials (database passwords, private API keys like OpenAI/Anthropic/AWS) must NEVER be committed to this repository. All private keys will reside strictly in the future server-side XESTUS API environment.

---

## 2. Frontend Security Protections

### 2.1 Cross-Site Scripting (XSS) Prevention
- Direct `innerHTML` usage with unescaped user input is prohibited across all JavaScript components.
- Text insertion uses `textContent` / `innerText`.

### 2.2 Subresource Integrity (SRI)
- Third-party CDN scripts (e.g., EmailJS, Lucide) must be pinned to immutable version tags with cryptographic `integrity="sha384-..."` attributes to prevent upstream supply chain tampering.

### 2.3 Form Abuse & Spam Defense
- **Honeypot Field**: An invisible form input (`display: none`, `tabindex="-1"`) traps automated spam bots before dispatching requests to EmailJS.
- **Client Debounce**: Form submission buttons are disabled during active API dispatch (`isSubmitting = true`) to prevent rapid multi-clicks and quota exhaustion.

### 2.4 Content Security Policy (CSP) Directives (Target Headers)
```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com https://www.google-analytics.com;
```

---

## 3. Incident Response Protocol
In the event that an unauthorized API key or private credential is ever discovered in client-side code:
1. **Immediate Revocation**: Revoke/rotate the exposed token immediately at the provider dashboard.
2. **Git History Scrub**: Purge the commit from git history using `git-filter-repo` or BFG Repo-Cleaner before any public sync.
3. **Audit Access Logs**: Inspect provider logs for unauthorized access during the exposure window.
