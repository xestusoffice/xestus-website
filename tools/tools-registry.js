/**
 * XESTUS Tools Platform - Central Registry & Discovery Mesh
 * Comprehensive catalog of practical daily digital tools.
 * All tools are 100% client-side, private, fast, and zero-telemetry.
 */

window.XESTUS_TOOLS_REGISTRY = {
  categories: [
    {
      id: "all",
      title: "All Tools",
      icon: "layout-grid",
      description: "Browse the complete collection of daily practical digital utilities."
    },
    {
      id: "calculators",
      title: "Calculators & Finance",
      icon: "calculator",
      description: "GST calculator, percentage, discount, EMI, salary, and age calculators.",
      color: "#00ff88"
    },
    {
      id: "office",
      title: "Office & Productivity",
      icon: "briefcase",
      description: "Word counter, case converter, QR code maker, invoice generator, and receipt builder.",
      color: "#ffaa00"
    },
    {
      id: "developer",
      title: "Developer Tools",
      icon: "code-2",
      description: "JSON formatter, Base64, JWT decoder, UUID generator, Regex tester, and Diff tool.",
      color: "#00bfff"
    },
    {
      id: "image",
      title: "Image Utilities",
      icon: "image",
      description: "Browser-side image compressor, dimension resizer, and format converters.",
      color: "#a855f7"
    },
    {
      id: "pdf",
      title: "PDF & Documents",
      icon: "file-text",
      description: "Client-side Image to PDF, document merge, and page utilities.",
      color: "#ff5588"
    },
    {
      id: "student",
      title: "Student Tools",
      icon: "graduation-cap",
      description: "CGPA to percentage calculator, Pomodoro study timer, and notes tools.",
      color: "#38d6ff"
    },
    {
      id: "security",
      title: "Security & Crypto",
      icon: "shield-check",
      description: "Cryptographic hash generators, password generators, and entropy checkers.",
      color: "#22c55e"
    }
  ],

  tools: [
    // --- CALCULATORS & FINANCE ---
    {
      slug: "gst-calculator",
      title: "GST Calculator (India Inclusive & Exclusive)",
      category: "calculators",
      icon: "calculator",
      badge: "Popular",
      description: "Calculate GST amount, total price, and CGST/SGST/IGST breakdown for standard rates (5%, 12%, 18%, 28%) or custom tax.",
      keywords: ["gst calculator", "calculate gst online", "gst inclusive exclusive", "india gst tax", "cgst sgst calculator"],
      url: "/tools/calculators/gst-calculator/",
      related: ["percentage-calculator", "discount-calculator", "invoice-generator"]
    },
    {
      slug: "percentage-calculator",
      title: "Percentage Calculator",
      category: "calculators",
      icon: "percent",
      badge: "Essential",
      description: "Calculate percentage of a number, percentage increase/decrease, and what percentage one number is of another in real time.",
      keywords: ["percentage calculator", "percent off calculator", "calculate percentage increase", "percent of number"],
      url: "/tools/calculators/percentage-calculator/",
      related: ["gst-calculator", "discount-calculator", "cgpa-calculator"]
    },
    {
      slug: "age-calculator",
      title: "Age & Date Difference Calculator",
      category: "calculators",
      icon: "calendar",
      badge: "Everyday",
      description: "Find exact age in years, months, weeks, days, and hours, plus calculate exact difference between two dates.",
      keywords: ["age calculator", "calculate exact age", "date difference calculator", "how old am i", "days between dates"],
      url: "/tools/calculators/age-calculator/",
      related: ["timestamp-converter", "percentage-calculator"]
    },
    {
      slug: "discount-calculator",
      title: "Discount & Savings Calculator",
      category: "calculators",
      icon: "tag",
      badge: "Shopping",
      description: "Calculate final sale price, total savings, and double discounts instantly for shopping and retail stores.",
      keywords: ["discount calculator", "sale price calculator", "percentage discount", "calculate savings"],
      url: "/tools/calculators/discount-calculator/",
      related: ["gst-calculator", "percentage-calculator"]
    },
    {
      slug: "emi-calculator",
      title: "Loan EMI Calculator",
      category: "calculators",
      icon: "landmark",
      badge: "Finance",
      description: "Calculate monthly EMI, total interest payable, and loan amortization for home, personal, car, or business loans.",
      keywords: ["emi calculator", "loan emi calculator", "home loan emi", "car loan calculator", "interest calculator"],
      url: "/tools/calculators/emi-calculator/",
      related: ["gst-calculator", "percentage-calculator"]
    },
    {
      slug: "unit-converter",
      title: "Universal Unit Converter",
      category: "calculators",
      icon: "scale",
      badge: "Multi-Unit",
      description: "Convert units of Length (km, m, ft, in), Weight (kg, g, lb), Temperature (°C, °F, K), Area, and Data Storage in real time.",
      keywords: ["unit converter", "length converter", "kg to lbs", "celsius to fahrenheit", "data storage converter"],
      url: "/tools/calculators/unit-converter/",
      related: ["percentage-calculator", "timestamp-converter"]
    },

    // --- OFFICE & PRODUCTIVITY ---
    {
      slug: "word-counter",
      title: "Word & Character Counter",
      category: "office",
      icon: "file-text",
      badge: "Productivity",
      description: "Count words, characters (with & without spaces), sentences, paragraphs, reading time, and speaking time in real time.",
      keywords: ["word counter", "character counter", "word count tool", "sentence counter", "reading time calculator"],
      url: "/tools/office/word-counter/",
      related: ["case-converter", "notes-formatter"]
    },
    {
      slug: "case-converter",
      title: "Text Case Converter",
      category: "office",
      icon: "type",
      badge: "Fast",
      description: "Convert text instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case.",
      keywords: ["case converter", "text uppercase lowercase", "title case converter", "camelcase converter", "snake case"],
      url: "/tools/office/case-converter/",
      related: ["word-counter", "json-formatter"]
    },
    {
      slug: "qr-generator",
      title: "QR Code Generator (Custom & Downloadable)",
      category: "office",
      icon: "qr-code",
      badge: "High-Res",
      description: "Create custom QR codes for URLs, WiFi, plain text, UPI payments, and phone numbers with custom color palette and PNG download.",
      keywords: ["qr code generator", "make qr code", "free qr generator", "upi qr code maker", "wifi qr code"],
      url: "/tools/office/qr-generator/",
      related: ["invoice-generator", "url-encode-decode"]
    },
    {
      slug: "invoice-generator",
      title: "Simple Invoice & Bill Generator",
      category: "office",
      icon: "receipt",
      badge: "Business",
      description: "Generate professional client invoices and receipts client-side with tax calculation, itemized tables, and instant print/PDF download.",
      keywords: ["invoice generator", "free invoice maker", "create bill online", "receipt generator", "simple gst invoice"],
      url: "/tools/office/invoice-generator/",
      related: ["gst-calculator", "qr-generator"]
    },

    // --- IMAGE UTILITIES ---
    {
      slug: "image-compressor",
      title: "Image Compressor & Optimizer",
      category: "image",
      icon: "image-down",
      badge: "100% In-Browser",
      description: "Compress JPG, PNG, and WebP images to reduce file size without noticeable loss of quality. 100% client-side with instant download.",
      keywords: ["image compressor", "compress image size", "reduce photo kb", "compress jpg online", "png optimizer"],
      url: "/tools/image/image-compressor/",
      related: ["image-resizer", "image-to-pdf"]
    },
    {
      slug: "image-resizer",
      title: "Image Dimension Resizer",
      category: "image",
      icon: "crop",
      badge: "Pixel Perfect",
      description: "Resize photo dimensions by exact pixels, percentage, or aspect ratio. Perfect for passport photos, social media, and web assets.",
      keywords: ["image resizer", "resize photo online", "change photo dimensions", "passport size photo resize"],
      url: "/tools/image/image-resizer/",
      related: ["image-compressor", "image-to-pdf"]
    },

    // --- PDF & DOCUMENTS ---
    {
      slug: "image-to-pdf",
      title: "Image to PDF Converter",
      category: "pdf",
      icon: "file-plus",
      badge: "Clean Output",
      description: "Convert single or multiple JPG/PNG images into a single, high-quality PDF document directly in your browser without uploading to servers.",
      keywords: ["image to pdf", "jpg to pdf", "convert photo to pdf", "png to pdf online", "combine images to pdf"],
      url: "/tools/pdf/image-to-pdf/",
      related: ["image-compressor", "image-resizer"]
    },

    // --- STUDENT TOOLS ---
    {
      slug: "cgpa-calculator",
      title: "CGPA to Percentage & GPA Calculator",
      category: "student",
      icon: "graduation-cap",
      badge: "Students",
      description: "Convert 10-point and 4-point CGPA into percentage (CBSE, Mumbai Univ, VTU, KTU formulas) and calculate semester SGPA/CGPA.",
      keywords: ["cgpa to percentage", "cgpa calculator", "gpa calculator", "cbse cgpa to percentage", "sgpa calculator"],
      url: "/tools/student/cgpa-calculator/",
      related: ["percentage-calculator", "pomodoro-timer"]
    },
    {
      slug: "pomodoro-timer",
      title: "Pomodoro Study & Focus Timer",
      category: "student",
      icon: "timer",
      badge: "Focus",
      description: "Boost study and coding productivity with customizable 25-minute focus intervals, short breaks, long breaks, and audio chimes.",
      keywords: ["pomodoro timer", "study timer online", "focus timer", "productivity timer", "25 minute study timer"],
      url: "/tools/student/pomodoro-timer/",
      related: ["cgpa-calculator", "word-counter"]
    },

    // --- DEVELOPER TOOLS ---
    {
      slug: "json-formatter",
      title: "JSON Formatter & Minifier",
      category: "developer",
      icon: "brackets",
      badge: "Popular",
      description: "Format, beautify, validate, and minify JSON with custom indentation, syntax error pointer, and instant copy/download.",
      keywords: ["json formatter", "json beautifier", "json minifier", "pretty json", "json parser"],
      url: "/tools/developer/json-formatter/",
      related: ["json-validator", "jwt-decoder", "base64-encode-decode"]
    },
    {
      slug: "json-validator",
      title: "JSON Schema & Syntax Validator",
      category: "developer",
      icon: "check-circle-2",
      badge: "Essential",
      description: "Validate JSON syntax in real time with line-and-column error highlighting, structure metrics, and tree inspection.",
      keywords: ["json validator", "json syntax check", "validate json schema", "json lint"],
      url: "/tools/developer/json-validator/",
      related: ["json-formatter", "text-diff", "jwt-decoder"]
    },
    {
      slug: "base64-encode-decode",
      title: "Base64 Encoder & Decoder",
      category: "developer",
      icon: "binary",
      badge: "Fast",
      description: "Encode and decode text or files to/from Base64 with full UTF-8 Unicode support and URL-safe mode toggle.",
      keywords: ["base64 encode", "base64 decode", "base64 string converter", "url safe base64"],
      url: "/tools/developer/base64-encode-decode/",
      related: ["url-encode-decode", "jwt-decoder", "hash-generator"]
    },
    {
      slug: "jwt-decoder",
      title: "JWT Debugger & Token Decoder",
      category: "developer",
      icon: "key",
      badge: "Security",
      description: "Inspect JSON Web Tokens (JWT) client-side. Decode Header, Payload, and Signature with real-time expiration validation.",
      keywords: ["jwt decoder", "decode jwt token", "jwt debugger", "jwt expiration checker", "json web token"],
      url: "/tools/developer/jwt-decoder/",
      related: ["base64-encode-decode", "hash-generator", "json-formatter"]
    },
    {
      slug: "uuid-generator",
      title: "UUID / GUID Generator",
      category: "developer",
      icon: "fingerprint",
      badge: "Crypto Safe",
      description: "Generate cryptographically secure RFC 4122 Version 4 UUIDs in bulk (1 to 100) with uppercase and hyphen options.",
      keywords: ["uuid generator", "guid generator", "random uuid v4", "bulk uuid generator"],
      url: "/tools/developer/uuid-generator/",
      related: ["password-generator", "hash-generator"]
    },
    {
      slug: "regex-tester",
      title: "Regex Tester & Matcher",
      category: "developer",
      icon: "search-code",
      badge: "Interactive",
      description: "Test regular expressions with real-time match highlighting, capture group extraction, and flags (g, i, m, s, u).",
      keywords: ["regex tester", "regular expression online", "regex matcher", "regex debugger"],
      url: "/tools/developer/regex-tester/",
      related: ["text-diff", "json-formatter"]
    },
    {
      slug: "url-encode-decode",
      title: "URL Encoder & Decoder",
      category: "developer",
      icon: "link",
      badge: "Utility",
      description: "Encode and decode standard URLs, URI components, and query parameters with full RFC 3986 compliance.",
      keywords: ["url encoder", "url decoder", "percent encoding", "encode uri component"],
      url: "/tools/developer/url-encode-decode/",
      related: ["base64-encode-decode", "jwt-decoder"]
    },
    {
      slug: "timestamp-converter",
      title: "Unix Timestamp & Epoch Converter",
      category: "developer",
      icon: "clock",
      badge: "Epoch",
      description: "Convert Unix timestamps (seconds, milliseconds, microseconds) to human-readable UTC/Local dates and vice versa.",
      keywords: ["unix timestamp converter", "epoch converter", "timestamp to date", "current unix epoch"],
      url: "/tools/developer/timestamp-converter/",
      related: ["age-calculator", "uuid-generator"]
    },
    {
      slug: "text-diff",
      title: "Text & Code Diff Comparator",
      category: "developer",
      icon: "git-compare",
      badge: "Visual Diff",
      description: "Compare two text blocks or code snippets side-by-side with line-by-line additions, deletions, and whitespace toggles.",
      keywords: ["text diff online", "code diff checker", "compare two texts", "diff viewer tool"],
      url: "/tools/developer/text-diff/",
      related: ["json-validator", "case-converter"]
    },

    // --- SECURITY & CRYPTOGRAPHY ---
    {
      slug: "hash-generator",
      title: "Cryptographic Hash Generator",
      category: "security",
      icon: "shield",
      badge: "WebCrypto",
      description: "Calculate SHA-256, SHA-512, SHA-384, SHA-1, and MD5 cryptographic checksums instantly using native Web Crypto API.",
      keywords: ["hash generator", "sha256 online", "sha512 generator", "sha1 checksum", "md5 hash"],
      url: "/tools/developer/hash-generator/",
      related: ["password-generator", "jwt-decoder", "base64-encode-decode"]
    },
    {
      slug: "password-generator",
      title: "Strong Password Generator",
      category: "security",
      icon: "lock",
      badge: "High Entropy",
      description: "Generate high-entropy passwords with custom length (8 to 64), symbols, numbers, and real-time brute-force crack time estimator.",
      keywords: ["password generator", "strong password generator", "random password maker", "secure password tool"],
      url: "/tools/developer/password-generator/",
      related: ["hash-generator", "uuid-generator"]
    },
    {
      slug: "date-calculator",
      title: "Date Difference & Duration Calculator",
      category: "calculators",
      icon: "calendar-days",
      badge: "Calendar",
      description: "Calculate duration between two calendar dates, count working business days, and add/subtract days.",
      keywords: ["date calculator", "days between dates", "date difference calculator", "business days count"],
      url: "/tools/calculators/date-calculator/",
      related: ["age-calculator", "timestamp-converter"]
    },
    {
      slug: "character-counter",
      title: "Character & Letter Limit Counter",
      category: "office",
      icon: "binary",
      badge: "Social Media",
      description: "Count characters with and without whitespace, words, sentences, and check Twitter/Instagram/LinkedIn character limits.",
      keywords: ["character counter", "letter counter", "word count", "twitter limit checker"],
      url: "/tools/office/character-counter/",
      related: ["word-counter", "case-converter"]
    },
    {
      slug: "stopwatch",
      title: "Precision Digital Stopwatch & Lap Timer",
      category: "student",
      icon: "watch",
      badge: "Productivity",
      description: "High-precision millisecond stopwatch with split lap tracking for productivity and timing tasks.",
      keywords: ["online stopwatch", "digital stopwatch", "lap timer", "stopwatch milliseconds"],
      url: "/tools/student/stopwatch/",
      related: ["pomodoro-timer", "age-calculator"]
    },
    {
      slug: "jpg-to-png",
      title: "JPG to PNG & PNG to JPG Converter",
      category: "image",
      icon: "file-output",
      badge: "Format",
      description: "Convert JPG photographs to PNG or PNG images to JPG in seconds directly inside your browser.",
      keywords: ["jpg to png", "png to jpg", "convert image format", "image converter online"],
      url: "/tools/image/jpg-to-png/",
      related: ["image-compressor", "image-resizer", "image-to-pdf"]
    }
  ]
};
