# XESTUS Digital Seva Hub System Architecture

**Module**: Digital Seva Hub + Verified Service Discovery System  
**Parent Platform**: XESTUS ([https://xestus.in](https://xestus.in))  
**Tagline**: *আপনার প্রয়োজনীয় সেবা, সঠিক জায়গায়।* / *One Place to Find the Right Service.*  
**Status**: Feature Branch (`feature/xestus-digital-seva-hub`)  
**Revision**: 1.0.0 (Production-Ready Architecture)

---

## 1. Executive Summary & Design Philosophy

The **XESTUS Digital Seva Hub** is an independent, zero-trust digital service discovery and civic utility navigation system engineered to bridge the gap between Indian citizens (with special emphasis on West Bengal) and authentic public/statutory service portals.

### Core Architectural Pillars
1. **Absolute Non-Impersonation**: Operates strictly as a navigational discovery directory. Never claims to be, mimics, or replaces any Government portal.
2. **Zero Sensitive Data Ingestion**: Does **NOT** collect, store, or process Aadhaar numbers, PAN credentials, bank OTPs, debit card PINs, or biometric tokens.
3. **Strict Source Verification**: Every indexed service is cataloged with authentic top-level statutory domains (`.gov.in`, `.nic.in`, official statutory boards) and tagged with a 4-tier verification status badge.
4. **Trilingual First-Class Citizen**: Complete localized taxonomy, search indices, and user guidance across English (`en`), Bengali (`bn`), and Hindi (`hi`).
5. **Decoupled Client-Side Engine**: Fully functioning static architecture utilizing instant local vector-like token indexing, with a prepared REST API contract for future microservices backends.

```
+---------------------------------------------------------------------------------------------------+
|                                   XESTUS DIGITAL SEVA HUB ENGINE                                  |
|                                       (Client Presentation Layer)                                 |
+---------------------------------------------------------------------------------------------------+
                                                  |
     +-------------------+------------------------+-----------------------+------------------+
     |                   |                        |                       |                  |
     v                   v                        v                       v                  v
+----------+    +------------------+    +-------------------+   +--------------------+  +------------+
|  Search  |    |     Universal    |    |   59-Category     |   |   Action Intent    |  | Cyber 1930 |
|  & NLP   |    |     Gateways     |    |   Directory       |   |   Shortcuts        |  | Anti-Fraud |
|  Matcher |    | (India/Digi/WB)  |    | (Full Taxonomy)   |   | ("I Want To...")   |  | Defense    |
+----------+    +------------------+    +-------------------+   +--------------------+  +------------+
     |                   |                        |                       |                  |
     +-------------------+------------------------+-----------------------+------------------+
                                                  |
                                                  v
                     +---------------------------------------------------------+
                     |           4-TIER VERIFICATION ENFORCEMENT ENGINE         |
                     |  🟢 Officially Verified  |  🟡 Source Verified          |
                     |  🔵 Private Platform     |  ⚠️ Verification Required    |
                     +---------------------------------------------------------+
                                                  |
                                                  v
                     +---------------------------------------------------------+
                     |       AUTHENTIC STATUTORY REDIRECTION & MODAL ENGINE     |
                     |  - Step-by-Step Procedure Checklist                     |
                     |  - Official Helplines & Direct Links (rel="noopener")    |
                     +---------------------------------------------------------+
```

---

## 2. 59-Category Master Taxonomy

The system architecture organizes all digital civic, statutory, utility, and welfare services into 59 canonical categories, divided across 12 high-level domain clusters:

### Cluster A: Identity, Civil & Legal Records
1. `cat-identity-aadhaar`: Aadhaar & UIDAI Services
2. `cat-identity-voter`: Voter Cards, EPIC & Electoral Registration
3. `cat-identity-pan`: PAN Card Creation, Correction & Aadhaar Linking
4. `cat-identity-passport`: Passport Seva & Visa Facilitation
5. `cat-identity-driving`: Driving License & Learner's Permits (Sarathi)
6. `cat-identity-rc`: Vehicle Registration & RC Services (Vahan)
7. `cat-identity-ration`: Digital Ration Cards & PDS Services
8. `cat-civil-birth-death`: Birth, Death & Vital Event Certificates
9. `cat-civil-caste`: Caste, Tribe & OBC Certificates (OBC/SC/ST)
10. `cat-civil-domicile`: Domicile, Residential & Local Status Certificates
11. `cat-civil-income`: Income & Asset Certificates
12. `cat-civil-marriage`: Marriage Registration & Special Marriage Act
13. `cat-civil-legal-heir`: Legal Heir & Succession Certificates
14. `cat-civil-disability`: Disability ID Cards (UDID Portal)

### Cluster B: Land, Property & Urban Municipalities
15. `cat-land-records`: Banglarbhumi, RoR (Khatian) & Plot Mutation
16. `cat-land-mutation`: Land Conversion & Title Regularization
17. `cat-land-tax`: Khajna (Land Revenue) Online Payment
18. `cat-property-registry`: Property Registration & Stamp Duty (e-Deed)
19. `cat-urban-property-tax`: Municipal Corporation Property Tax & Holding Tax
20. `cat-urban-trade-license`: Trade License Application & Renewal
21. `cat-urban-building-plan`: Building Plan Sanction & Completion Certs

### Cluster C: Education, Student Schemes & Academics
22. `cat-edu-scholarships-wb`: WB State Scholarships (SVMCM, Oasis, Aikyashree)
23. `cat-edu-scholarships-nat`: National Scholarship Portal (NSP)
24. `cat-edu-student-credit`: West Bengal Student Credit Card Scheme (WBSCC)
25. `cat-edu-school-admissions`: School Admissions & Banglar Shiksha Portal
26. `cat-edu-college-admissions`: Centralized College & University Admissions (WBCAP)
27. `cat-edu-exams-recruitment`: Public Recruitment (WBPSC, WBP, SSC, UPSC, IBPS)
28. `cat-edu-internships`: National Internship & Skill Development Portals

### Cluster D: Healthcare, Wellness & Insurance
29. `cat-health-swasthya-sathi`: Swasthyasathi Smart Card Management
30. `cat-health-ayushman-bharat`: Ayushman Bharat PM-JAY & ABHA Health ID
31. `cat-health-telemedicine`: eSanjeevani & National Teleconsultation
32. `cat-health-blood-organ`: eRaktKosh Blood Bank & Organ Donation Registries

### Cluster E: Direct Benefit Transfers & Social Welfare
33. `cat-welfare-lakshmir-bhandar`: Lakshmir Bhandar Financial Assistance
34. `cat-welfare-kanyashree`: Kanyashree Prakalpa (K1, K2, K3)
35. `cat-welfare-rupashree`: Rupashree Prakalpa Marriage Assistance
36. `cat-welfare-yuvasree`: Yuvasree Employment Bank Assistance
37. `cat-welfare-pensions`: Old Age, Widow & Disability Pensions (Jai Bangla)
38. `cat-welfare-pm-kisan`: PM-Kisan Samman Nidhi & Krishak Bandhu

### Cluster F: Agriculture, Farmers & Rural Development
39. `cat-agri-krishak-bandhu`: Krishak Bandhu (Assured Income & Death Benefit)
40. `cat-agri-crop-insurance`: Bangla Shasya Bima (BSB) & PMFBY
41. `cat-agri-kcc`: Kisan Credit Card & Agri-Loans
42. `cat-agri-seeds-machinery`: Matir Katha, Fertilizer Subsidies & Farm Mechanization

### Cluster G: Business, MSME & Commercial Compliance
43. `cat-biz-udyam`: Udyam MSME Registration
44. `cat-biz-gst`: Goods & Services Tax (GST) Portal
45. `cat-biz-fssai`: Food Safety License & FoSCoS Registrations
46. `cat-biz-company-mca`: MCA21 Company Incorporation & Annual Filing
47. `cat-biz-gem`: Government e-Marketplace (GeM) Vendor Onboarding

### Cluster H: Utilities, Energy & Connectivity
48. `cat-utility-electricity-wb`: WBSEDCL & CESC Electricity Bill & New Connections
49. `cat-utility-water`: Municipal Water Connection & Pipeline Billing
50. `cat-utility-lpg`: Bharat Gas, Indane & HP Gas Cylinder Booking & Ujjwala
51. `cat-utility-solar`: PM Surya Ghar Muft Bijli Yojana & Solar Rooftop

### Cluster I: Taxation, Banking & Financial Inclusion
52. `cat-tax-income-tax`: Income Tax e-Filing & Annual Information Statement (AIS)
53. `cat-fin-epfo`: EPFO UAN Member Portal & PF Passbook / Withdrawal
54. `cat-fin-esic`: ESIC Medical Benefits & Insured Person Portal
55. `cat-fin-atal-pension`: Atal Pension Yojana (APY) & NPS Trust

### Cluster J: Judicial, Police & Public Grievances
56. `cat-police-ecourts`: eCourts Services, Case Status & Cause Lists
57. `cat-police-cybercrime`: National Cyber Crime Reporting Portal (1930)
58. `cat-police-lost-found`: General Diary & Lost Property Online Submission
59. `cat-grievance-cpgrams`: CPGRAMS & WB CMO Grievance Portal

---

## 3. Data Model & Verification Hierarchy

### Service Data Schema
Every service record within `js/digital-seva-data.js` adheres to the following structural interface:

```typescript
interface DigitalSevaService {
  id: string;                      // Unique slug (e.g. 'uidai-aadhaar-download')
  categoryId: string;              // Maps to 59-Category Master Taxonomy
  title: {
    en: string;
    bn: string;
    hi: string;
  };
  description: {
    en: string;
    bn: string;
    hi: string;
  };
  keywords: string[];              // Multilingual synonyms and intent triggers
  authority: {
    name: string;                  // e.g. "UIDAI / Ministry of Electronics & IT"
    level: "Central" | "State" | "Municipal" | "Autonomous";
    state?: string;                // e.g. "West Bengal" or "All India"
  };
  verificationStatus: "OFFICIAL_GOV" | "SOURCE_VERIFIED" | "PRIVATE_PLATFORM" | "UNVERIFIED";
  verificationBadge: {
    icon: string;                  // "🟢" | "🟡" | "🔵" | "⚠️"
    code: string;                  // "badge-gov" | "badge-source" | "badge-private" | "badge-review"
    labelKey: string;              // Key in translations.js
  };
  primaryUrl: string;              // Genuine canonical URL (.gov.in / .nic.in)
  isDirectLink: boolean;           // True if directly leads to the specific application form
  turnaroundTime: {
    en: string;
    bn: string;
    hi: string;
  };
  feeStructure: {
    isFree: boolean;
    amount?: string;
    detailsKey?: string;
  };
  requiredDocuments: Array<{
    nameKey: string;
    mandatory: boolean;
  }>;
  procedureSteps: Array<{
    stepNumber: number;
    title: { en: string; bn: string; hi: string };
    detail: { en: string; bn: string; hi: string };
  }>;
  helpline: {
    phone: string;
    email?: string;
    operatingHours?: string;
  };
  relatedServiceIds: string[];
}
```

### Verification Badge Matrix
| Status Code | Badge Visual | CSS Token | Criteria |
| :--- | :--- | :--- | :--- |
| `OFFICIAL_GOV` | 🟢 Officially Verified | `.badge-gov` | Registered `.gov.in`, `.nic.in`, or constitutional/statutory apex authority. |
| `SOURCE_VERIFIED` | 🟡 Source Verified | `.badge-source` | Recognized statutory board, university apex body, or government-notified undertaking. |
| `PRIVATE_PLATFORM` | 🔵 Private Platform | `.badge-private` | Authorized private aggregator or utility distributor (e.g. CESC, NSDL, UTIITSL). |
| `UNVERIFIED` | ⚠️ Verification Required | `.badge-review` | Third-party or newly indexed link pending security & cryptographic domain audit. |

---

## 4. Trilingual NLP & Natural Language Intent Matcher

The client-side search engine (`js/digital-seva-hub.js`) features an in-memory normalized tokenizer optimized for multi-script transliteration and natural language intent classification:

```
[Raw User Input] (e.g., "আমার ভোটার কার্ড হারিয়ে গেছে", "pan aadhar link", "কৃষক বন্ধু টাকা কবে ঢুকবে")
       |
       v
[Script Normalizer & Diacritic Stripper]
       |
       v
[Token Extractor & Intent Classifier]
       |
       +---> Exact Token Match (Weight: 10x)
       +---> Keyword / Synonym Ingestion (Weight: 6x)
       +---> Category Match (Weight: 4x)
       +---> Title Match (Weight: 3x)
       +---> Description & Tag Match (Weight: 1x)
       |
       v
[Confidence Scoring & Multi-Filter Ranking Engine]
       |
       v
[Dynamic UI DOM Stream with Micro-Transitions]
```

### Intent Matching Matrix
| Language Script | User Query Example | Normalized Tokens | Matched Service Target |
| :--- | :--- | :--- | :--- |
| **Bengali** (বাংলা) | `"ভোটার কার্ড সংশোধন করতে চাই"` | `ভোটার`, `কার্ড`, `সংশোধন` | `voters-eci-epic-download`, `voters-eci-correction` |
| **Bengali** (বাংলা) | `"জমির খতিয়ান এবং পরচা ডাউনলোড"` | `জমি`, `খতিয়ান`, `পরচা` | `banglarbhumi-khatian-ror` |
| **Hindi** (हिन्दी) | `"राशन कार्ड का नाम चेक करना है"` | `राशन`, `कार्ड`, `नाम` | `wb-ration-card-status`, `wbpds-digital-ration` |
| **Hindi** (हिन्दी) | `"बिजली का नया कनेक्शन कैसे मिलेगा"` | `बिजली`, `नया`, `कनेक्शन` | `wbsedcl-new-connection` |
| **English** | `"lost my aadhar card how to get"` | `lost`, `aadhar`, `download` | `uidai-aadhaar-download` |

---

## 5. Scam Protection & Cyber Crime Defense Architecture (Helpline 1930)

```
+---------------------------------------------------------------------------------------------------+
|                            CYBER DEFENSE & ANTI-PHISHING BARRIER                                  |
+---------------------------------------------------------------------------------------------------+
|  1. ZERO SENSITIVE DATA INGESTION: System client never renders input fields for PIN/OTP/Aadhaar   |
|  2. CRYPTOGRAPHIC EXTERNAL LINK OUTING: All outbound portals enforce rel="noopener noreferrer"    |
|  3. TOP-LEVEL DOMAIN WARNING: System prompts warning if user navigates outside .gov.in/.nic.in    |
|  4. 1930 INSTANT ACTION DISPATCH: 1-Click emergency dialer to National Cyber Crime Center        |
|  5. PHISHING MODAL ADVISORY: Real-time warnings against fraudulent WhatsApp/APK job scams        |
+---------------------------------------------------------------------------------------------------+
```

### Prohibited Storage Patterns (Strict Zero-Data Policy)
- **NO Aadhaar Number (12 digits)** stored in cookies, `localStorage`, `sessionStorage`, or telemetry.
- **NO PAN Number (10 alphanumeric)** stored or mirrored.
- **NO Bank Account / Debit Card Credentials**.
- **NO OTPs / Login Passwords**.

---

## 6. Microservices Backend Architecture (`/api/v1/seva/*`)

While the static version operates 100% autonomously in the browser, the architecture defines the target REST microservice for backend scaling:

```
                  +------------------------------------------------+
                  |           API Gateway: api.xestus.in           |
                  |                (FastAPI / Go)                  |
                  +------------------------------------------------+
                                          |
        +---------------------------------+--------------------------------+
        |                                 |                                |
        v                                 v                                v
+--------------------+          +--------------------+          +--------------------+
|   GET /services    |          |   GET /search      |          |   POST /verify     |
| List with filters  |          | Full-text & vector |          | Domain audit check |
+--------------------+          +--------------------+          +--------------------+
        |                                 |                                |
        +---------------------------------+--------------------------------+
                                          |
                                          v
                  +------------------------------------------------+
                  |         PostgreSQL 16 (Relational Cache)       |
                  |             + pgvector for Semantic Search     |
                  +------------------------------------------------+
```

### PostgreSQL Relational Schema (DDL)
```sql
CREATE TABLE seva_categories (
    id VARCHAR(64) PRIMARY KEY,
    cluster VARCHAR(32) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_bn VARCHAR(255) NOT NULL,
    title_hi VARCHAR(255) NOT NULL,
    icon VARCHAR(64) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE seva_services (
    id VARCHAR(64) PRIMARY KEY,
    category_id VARCHAR(64) REFERENCES seva_categories(id),
    title_en VARCHAR(255) NOT NULL,
    title_bn VARCHAR(255) NOT NULL,
    title_hi VARCHAR(255) NOT NULL,
    authority_name VARCHAR(255) NOT NULL,
    authority_level VARCHAR(32) CHECK (authority_level IN ('Central', 'State', 'Municipal', 'Autonomous')),
    verification_status VARCHAR(32) CHECK (verification_status IN ('OFFICIAL_GOV', 'SOURCE_VERIFIED', 'PRIVATE_PLATFORM', 'UNVERIFIED')),
    primary_url TEXT NOT NULL,
    is_direct_link BOOLEAN DEFAULT FALSE,
    helpline_phone VARCHAR(64),
    helpline_email VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_seva_category ON seva_services(category_id);
CREATE INDEX idx_seva_verification ON seva_services(verification_status);
```

---

## 7. Performance & Hardware Tiering Integration

XESTUS implements an adaptive performance tier system (`tier-1` to `tier-4`). Digital Seva Hub components integrate smoothly:

- **Tier 1 & 2 (High Performance / Desktop GPU)**: Full CSS backdrop blur (`backdrop-filter: blur(16px)`), dynamic radial gradient glow on card hover, and micro-spring entrance animations.
- **Tier 3 & 4 (Low Power / Mobile Battery Saver)**: Disables backdrop-filter in favor of solid high-contrast alpha backgrounds (`rgba(10, 15, 29, 0.96)`), hardware-accelerated static transitions, and virtualized list DOM node recycling for low memory footprints.

---

## 8. Verification & Legal Disclaimer Protocol

1. **Non-Government Attribution**: The hub footer, header, and all modal dialogs prominently declare:
   > *"XESTUS Digital Seva Hub is an independent civic utility discovery platform created to assist citizens. It is not affiliated with or endorsed by any Government ministry or department. All service trademarks and logos belong to their respective statutory authorities."*
2. **Cryptographic Link Security**: All external portals are opened in separate tabs via `target="_blank"` with `rel="noopener noreferrer"` to prevent window opener hijacking and referrer token leakage.
