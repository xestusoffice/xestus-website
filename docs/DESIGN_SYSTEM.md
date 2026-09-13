# XESTUS Design System Specification

## 1. Brand Essence & Visual Language
**Brand**: XESTUS  
**Tagline**: *Intelligence Beyond Limits*  
**Aesthetic Profile**: Modern High-End AI / Deep Tech Studio (2026). Minimalist, cinematic, mathematically precise, luminous on dark surfaces without overwhelming neon glare.

---

## 2. Color System & Design Tokens

### 2.1 Backgrounds (Dark Spectrum)
| Token | Hex / HSL | Usage |
| :--- | :--- | :--- |
| `--bg-void` | `#05070c` | Deep background base / absolute canvas |
| `--bg-primary` | `#080c16` | Main page background |
| `--bg-surface` | `#0e1424` | Elevated sections, secondary rows |
| `--bg-card` | `rgba(16, 25, 45, 0.65)` | Translucent card surface (glassmorphic) |
| `--bg-card-hover`| `rgba(20, 32, 58, 0.85)` | Card surface upon interaction |
| `--bg-glass` | `rgba(255, 255, 255, 0.03)` | Subtle glass overlays |

### 2.2 Accents & Luminance
| Token | Hex / HSL | Usage |
| :--- | :--- | :--- |
| `--cyan-primary` | `#00bfff` | Primary brand accent & active states |
| `--cyan-bright` | `#38d6ff` | Hover highlights & gradient stops |
| `--cyan-deep` | `#0077cc` | Dark gradient anchor & shadows |
| `--cyan-glow` | `rgba(0, 191, 255, 0.25)` | Ambient lighting & drop shadows |
| `--cyan-subtle` | `rgba(0, 191, 255, 0.08)` | Badge backgrounds & pill containers |
| `--ember-accent` | `#ff7b00` | Secondary core accents (Orb core, alert states) |

### 2.3 Text & Content Hierarchy
| Token | Value | Usage |
| :--- | :--- | :--- |
| `--text-primary` | `#ffffff` | Headings, primary emphasis, active labels |
| `--text-secondary` | `#cfd7e6` | Body text, feature descriptions |
| `--text-muted` | `#8a96ab` | Meta labels, dates, secondary tags |
| `--text-dim` | `#525f76` | Copyright, inactive states, subtle borders |

### 2.4 Borders & Outlines
| Token | Value | Usage |
| :--- | :--- | :--- |
| `--border-subtle` | `rgba(255, 255, 255, 0.07)` | Standard card and container outline |
| `--border-medium` | `rgba(255, 255, 255, 0.14)` | Interactive element idle border |
| `--border-cyan` | `rgba(0, 191, 255, 0.40)` | Accent borders and active cards |
| `--border-cyan-bright` | `rgba(0, 191, 255, 0.85)` | Focused inputs and hover states |

---

## 3. Typography Hierarchy

**Primary Font Family**: `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

| Scale | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (Hero H1)** | `clamp(44px, 8vw, 84px)` | `44px` | 800 / 900 | 1.05 | `3px` / `0.04em` |
| **Hero Tagline (H2)** | `clamp(24px, 4vw, 36px)` | `22px` | 600 / 700 | 1.25 | `1px` |
| **Section Title (H2)**| `clamp(32px, 5vw, 52px)` | `30px` | 800 | 1.15 | `1.5px` |
| **Card Title (H3)** | `24px` – `28px` | `20px` – `22px` | 700 | 1.3 | `0.5px` |
| **Section Eyebrow** | `13px` – `14px` | `12px` | 700 | 1.4 | `3px` (Uppercase) |
| **Body Large** | `19px` – `21px` | `16px` – `17px` | 400 | 1.8 | `0` |
| **Body Standard** | `15px` – `16px` | `14px` – `15px` | 400 | 1.7 | `0` |
| **Caption / Tags** | `12px` – `13px` | `11px` – `12px` | 600 | 1.4 | `0.5px` |

---

## 4. Spacing, Radii & Grid System

### 4.1 Spacing Scale
- `--space-xs`: `6px`
- `--space-sm`: `12px`
- `--space-md`: `20px`
- `--space-lg`: `32px`
- `--space-xl`: `48px`
- `--space-2xl`: `72px`
- `--space-3xl`: `110px`
- `--container-max`: `1320px`
- `--section-pad-x`: `clamp(16px, 7vw, 8%)`
- `--section-pad-y`: `clamp(70px, 10vw, 130px)`

### 4.2 Border Radii
- `--radius-sm`: `8px` (Tags, small inputs)
- `--radius-md`: `14px` (Buttons, inputs, small cards)
- `--radius-lg`: `22px` (Standard cards, containers)
- `--radius-xl`: `30px` (Hero panels, featured modules)
- `--radius-full`: `9999px` (Pills, circular buttons)

---

## 5. Component Specifications

### 5.1 Buttons
- **Primary Button (`.btn-primary`)**:
  - Background: `linear-gradient(135deg, #00bfff 0%, #0080ff 100%)`
  - Color: `#ffffff`
  - Box Shadow: `0 8px 24px rgba(0, 191, 255, 0.28)`
  - Hover: `transform: translateY(-3px); box-shadow: 0 14px 34px rgba(0, 191, 255, 0.45);`
- **Secondary Button (`.btn-secondary`)**:
  - Background: `rgba(255, 255, 255, 0.04)`
  - Border: `1px solid rgba(0, 191, 255, 0.35)`
  - Color: `#ffffff`
  - Hover: `background: rgba(0, 191, 255, 0.12); border-color: #00bfff; transform: translateY(-3px);`
- **Magnetic Button (`.magnetic-btn`)**:
  - GPU-accelerated smooth spring transition via `transform: translate(x, y)`.

### 5.2 Cards & Panels (`.service-card`, `.project-card`, `.why-card`)
- Backdrop: `blur(16px)` with `background: rgba(14, 22, 40, 0.65)`.
- Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Hover Effect: Elevation (`translateY(-8px)`), border color glow (`#00bfff`), and dynamic radial light sweep (`--x`, `--y`).

### 5.3 Navigation Bar
- Fixed, floating glassmorphic pill bar with `top: 16px`, `backdrop-filter: blur(18px)`.
- Transition into solid `#080c16` with deep drop shadow upon scrolling (`nav.scrolled`).
- Mobile: Off-canvas sliding drawer with accessible toggle button.

### 5.4 3D Hero Orb
- Optimized CSS 3D structure: central glowing core + multi-axis dual orbital rings.
- Mouse interpolation with bounded transformation and touch-safe fallback.

---

## 6. Accessibility & Motion Rules
1. **Focus States**: All interactive elements (`a`, `button`, `input`, `textarea`) provide high-contrast `:focus-visible` outline rings (`2px solid #00bfff`, offset `3px`).
2. **Contrast Ratios**: All text tokens exceed WCAG AA standards (minimum 4.5:1 on dark backgrounds).
3. **Reduced Motion**: All animations (`keyframes`, transforms, cursor trackers, smooth scrolling) are neutralized under `@media (prefers-reduced-motion: reduce)`.
