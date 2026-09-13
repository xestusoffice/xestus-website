# XESTUS Deployment & Operations Manual

**Production URL**: [https://xestus.in](https://xestus.in)  
**Host**: GitHub Pages  
**Target Repository**: `xestusoffice/xestus-website`  
**Primary Branch**: `main`

---

## 1. Production Deployment Workflow

### 1.1 Golden Rule of Git Operations
> [!CAUTION]
> **Production Safety**: Never commit experimental or unreviewed code directly to `main`. Never force push (`git push --force`) to `main`.

```
Feature / Revamp Branch (e.g., revamp/xestus-premium-v1)
        │
        ▼ (Local Browser & Subagent Verification)
Staging Validation / Pre-merge Review
        │
        ▼ (Explicit Approval)
Pull Request / Fast-Forward Merge into `main`
        │
        ▼ (Automated GitHub Pages Build)
Production Live Deployment at https://xestus.in
```

---

## 2. Infrastructure Checklist

- [x] **`CNAME`**: Contains `xestus.in` (Never delete or modify).
- [x] **DNS Records**: Pointer to GitHub Pages IP addresses (`185.199.108.153`, `185.199.109.153`, etc.).
- [x] **Enforce HTTPS**: Enabled in GitHub repository settings.
- [x] **`robots.txt`**: Directs search engine crawlers to `https://xestus.in/sitemap.xml`.
- [x] **`sitemap.xml`**: Canonical index for all public pages.
- [x] **Google Search Console**: `googlebcd2dd6167a83a4f.html` verification file present in root.

---

## 3. Local Development & Preview
To run and verify the website locally without modifying production:

```bash
# Start lightweight local web server
python -m http.server 8080

# Access in browser
http://localhost:8080/
```
