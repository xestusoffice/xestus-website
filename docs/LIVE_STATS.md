# XESTUS Live Stats & Activity Telemetry System

## 1. Overview & Core Philosophy

The **XESTUS Live Stats** system provides a privacy-first, verified social-proof component in the XESTUS website Hero section accompanied by an accessible rolling-timeframe activity breakdown modal.

### Critical Data Integrity Policy
All public statistics on `xestus.in` **must represent genuine aggregate data**.
- **No Fabricated Stats**: We strictly never invent, simulate, hardcode, or randomize visitor counts or subscriber numbers.
- **Graceful Fallback**: When the telemetry endpoint is unconfigured or temporarily syncing with the data cluster, the frontend displays `"Telemetry Syncing with Node"` / skeleton state without fabricating numbers.
- **Privacy-First**: No personal identification information (PII), subscriber email addresses, raw IP addresses, or tracking cookies are exposed or stored.

---

## 2. Metric Definitions & Taxonomy

To ensure mathematical precision and honest social proof, XESTUS maintains strict distinctions between metric types:

| Metric Name | Public Label | Technical Definition | Telemetry Source |
| :--- | :--- | :--- | :--- |
| **Website Visits** | `Visits` | Aggregate count of user sessions on `xestus.in` separated by a 30-minute inactivity window. | Privacy-preserving session hash |
| **Website Page Views** | `Page Views` | Aggregate count of all HTML document loads and page navigations across the domain. | Privacy-preserving edge counter |
| **Unique Visitors** | `Unique Visitors` | Number of distinct daily visitors calculated using a daily-rotating salted cryptographic hash (no persistent cookies). | Edge proxy / telemetry worker |
| **Confirmed Followers** | `Followers` | Aggregate count of active, verified email and browser push subscribers who have opted into the XESTUS Follow system and have not unsubscribed. | Follow XESTUS subscriber database |

---

## 3. Rolling Time Window Methodology

All time-range statistics are computed using rolling temporal windows rather than static calendar months:

1. **Last 24 Hours (`last24h`)**: Dynamic rolling 24-hour window from the current Unix timestamp ($T - 86,400\text{s}$ to $T$).
2. **Last 7 Days (`last7d`)**: Dynamic rolling 7-day window ($T - 604,800\text{s}$ to $T$).
3. **Last 30 Days (`last30d`)**: Dynamic rolling 30-day window ($T - 2,592,000\text{s}$ to $T$).
4. **Last 12 Months (`last12m`)**: Dynamic rolling 365-day window ($T - 31,536,000\text{s}$ to $T$).

---

## 4. Frontend Component Architecture

### 4.1 Hero Section Placement
The social-proof badge is positioned directly within `.hero-content` above the capability strip:
- **Pulsing Status Dot**: Emerald green pulsing indicator (`#00ff88`) denoting active telemetry monitoring.
- **Pill Container**: Glassmorphic capsule (`rgba(10, 18, 34, 0.75)`, 16px backdrop blur, cyan border accent).
- **Summary Counters**: Compact number format (e.g. `12.8K+ Visits · 426 Followers`) with smooth count-up animation (`requestAnimationFrame`, easing out cubic).
- **View Activity CTA**: Accessible button (`#btnStatsInspect`) with `aria-haspopup="dialog"` and `aria-controls="statsModal"`.

### 4.2 Detailed Activity Dialog (`#statsModal`)
An accessible modal dialog (`role="dialog"`, `aria-modal="true"`) presenting:
- Matrix table with periods: `Last 24 Hours`, `Last 7 Days`, `Last 30 Days`, `Last 12 Months`.
- Real-time columns for Website Engagement and Follower Net Growth.
- Privacy & Data Integrity Guarantee notice.
- Keyboard navigation: `Escape` key close, focus trap (`trapFocus`), and focus restoration.

---

## 5. Telemetry API Specification & Data Schema

### 5.1 Client Configuration
The telemetry client in `script.js` is decoupled and configured via:
```javascript
window.XESTUS_CONFIG = window.XESTUS_CONFIG || {
    statsApiEndpoint: "https://api.xestus.in/api/v1/stats", // Or Cloudflare Worker / Serverless proxy
    statsRefreshIntervalMs: 300000 // 5 minutes cache TTL
};
```

### 5.2 JSON Response Schema
When requested (`GET /api/v1/stats`), the endpoint returns the following verified aggregate JSON:
```json
{
  "status": "ok",
  "updatedAt": "2026-09-14T05:00:00Z",
  "metrics": {
    "website": {
      "type": "visits",
      "label": "Visits",
      "total": 12840,
      "last24h": 84,
      "last7d": 612,
      "last30d": 2430,
      "last12m": 12840
    },
    "followers": {
      "type": "confirmed_followers",
      "label": "Followers",
      "total": 426,
      "last24h": 3,
      "last7d": 18,
      "last30d": 71,
      "last12m": 426
    }
  }
}
```

### 5.3 Caching & Performance
- The client caches successful responses in `sessionStorage` under `xestus_live_stats_cache_v1`.
- The client executes **at most one asynchronous fetch per session** (or after `statsRefreshIntervalMs` expires).
- **Zero Polling**: No continuous interval polling is conducted to preserve client CPU and bandwidth.

---

## 6. GitHub Pages Static Hosting & Backend Integration

### 6.1 Constraint Analysis
GitHub Pages serves static assets over a global CDN and cannot:
1. Run server-side runtimes (Node.js, Python, Go).
2. Protect secret database credentials from public browser inspection.
3. Serve mutable write APIs or store subscriber lists.

### 6.2 Free-Tier Serverless Telemetry Architectures

To bridge static hosting with real telemetry without ongoing infrastructure costs, consider any of the following free-tier backends:

```
+---------------------------+        +----------------------------------------+        +-----------------------+
|  Static Frontend          |  HTTP  | Cloudflare Worker / Vercel Serverless  | Query  | Supabase / KV Store   |
|  (GitHub Pages: xestus.in)| ------>|  - Verifies CORS                       | ------>|  - Public Aggregates  |
|  script.js                |        |  - Sanitizes private fields            |        |  - Zero PII exposure  |
+---------------------------+        +----------------------------------------+        +-----------------------+
```

#### Option A: Cloudflare Workers + D1 / KV (Recommended)
- **Cost**: 100% Free tier (100,000 requests/day).
- **Setup**:
  - Deploy a Cloudflare Worker at `api.xestus.in/stats`.
  - Maintain an aggregate counters table in Cloudflare D1 / KV.
  - Return cached public aggregate JSON.

#### Option B: Supabase Edge Functions (Free Tier)
- **Cost**: 100% Free tier (500,000 invocations/month).
- **Setup**:
  - Store subscriber counts in Postgres with Row-Level Security (RLS) enabled.
  - Create a public RPC view `get_public_telemetry()` returning aggregate numbers only.

#### Option C: Privacy-Respecting Analytics Engine (GoatCounter / Umami)
- **Cost**: Free open-source / cloud tier.
- **Setup**:
  - Use GoatCounter or self-hosted Umami API to read aggregate stats securely.

---

## 7. Security & Privacy Guarantees

1. **Zero Public PII**: No subscriber emails, IDs, names, or phone numbers are included in public API payloads.
2. **Key Isolation**: VAPID private keys, database credentials, and SMTP credentials remain strictly in secure backend environment variables.
3. **No Invasive Cookies**: Telemetry operates cookie-free, fully compliant with GDPR, PECR, and CCPA standards.

---

## 8. Multilingual Support

The live stats component and modal are fully integrated into the XESTUS multilingual engine (`js/translations.js`):
- **English (`en`)**: `"LIVE STATS"`, `"Visits"`, `"Followers"`, `"Telemetry Syncing with Node"`.
- **Bengali (`bn`)**: `"লাইভ স্ট্যাটস"`, `"ভিজিট"`, `"অনুসারী"`, `"টেলিমেট্রি নোডের সাথে সিঙ্ক হচ্ছে"`.
- **Hindi (`hi`)**: `"लाइव स्टैट्स"`, `"विज़िट्स"`, `"फ़ॉलोअर्स"`, `"नोड के साथ टेलीमेट्री सिंक हो रही है"`.

---

## 9. Future Scope: Private Owner / Admin Analytics

In future phases, the founder can deploy a secure, authenticated admin portal (`admin.xestus.in`) with:
- Visual chart graphs (traffic spikes, referrers, geographic distributions).
- Detailed subscriber retention and unsubscribed rates.
- 1-click update dispatch composer for technical newsletters.
- System cluster health monitoring (CPU load, memory, edge proxy response times).
