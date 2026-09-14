# XESTUS Multilingual Website Architecture (i18n)

**Company**: XESTUS  
**Supported Languages**: English (`en` - Default), Bengali (`bn` - বাংলা), Hindi (`hi` - हिन्दी)  
**Architecture**: 100% Vanilla Client-Side i18n Dictionary Engine  
**Feature Branch**: `feature/xestus-digital-services-multilingual`  
**Status**: Production-Ready  

---

## 1. Architectural Principles

1. **Static Hosting Compatibility**: Operates seamlessly on GitHub Pages without requiring server-side rendering or translation proxies.
2. **Zero Third-Party Tracking**: No external translation widgets (e.g. Google Translate) that introduce layout shifts, unverified machine translations, or third-party cookies.
3. **Controlled Technical Integrity**: Established brand names and technical identifiers (*XESTUS*, *AI*, *API*, *IoT*, *FastAPI*, *LangGraph*, *Docker*, *Python*, etc.) are preserved across all languages.
4. **Natural & Professional Tone**: Translations are human-crafted, culturally fluent, and avoid awkward literal phrasing.
5. **Local Persistence**: User language preference is stored safely in `localStorage.getItem('xestus_user_language')` with automatic fallback to English (`en`).

---

## 2. Translation Engine Implementation

The dictionary is defined in `js/translations.js` under `window.XESTUS_TRANSLATIONS`:

```javascript
window.XESTUS_TRANSLATIONS = {
  en: { ... },
  bn: { ... },
  hi: { ... }
};
```

### DOM Data Attributes:
- `data-i18n="<key>"`: Text content replacement.
- `data-i18n-placeholder="<key>"`: Form input/textarea placeholder replacement.
- `data-i18n-title="<key>"`: Tooltip title replacement.
- `data-i18n-aria-label="<key>"`: Accessibility label replacement.

---

## 3. Indic Typography & Layout Protection

- **Root Attribute**: `setLanguage(lang)` automatically sets `<html lang="bn">` or `<html lang="hi">`.
- **CSS Line-Height & Font Normalization**:
  ```css
  html[lang="bn"],
  html[lang="hi"] {
      line-height: 1.7;
  }
  html[lang="bn"] body,
  html[lang="hi"] body {
      font-family: 'Poppins', 'Noto Sans Bengali', 'Hind', system-ui, sans-serif;
  }
  ```
- **Overflow Prevention**: Card heights, flex containers, and button paddings accommodate longer Indic glyph strings without clipping or horizontal overflow.

---

## 4. Adding a New Language in the Future

To add another language (e.g., Assamese `as`, Odia `or`, Tamil `ta`):
1. **Extend `js/translations.js`**: Add the new language dictionary object:
   ```javascript
   window.XESTUS_TRANSLATIONS.as = { ... };
   ```
2. **Add Option in `index.html`**:
   - In `.lang-dropdown`: `<button type="button" class="lang-opt" data-lang="as"><span class="lang-native">অসমীয়া</span><span class="lang-code">AS</span></button>`
   - In `.mobile-lang-strip`: `<button type="button" class="mobile-lang-btn" data-lang="as">অসমীয়া</button>`
3. **Add Typography Rules in `style.css`**:
   - Include appropriate font fallback rules under `html[lang="as"]`.
