/**
 * XESTUS Tools Platform - Central Registry
 * Metadata, categories, and relationship mesh for all tools.
 * All tools are 100% client-side, private, and zero-telemetry.
 */

window.XESTUS_TOOLS_REGISTRY = {
  categories: [
    {
      id: "developer",
      title: "Developer Tools",
      icon: "code-2",
      description: "Fast, client-side formatters, validators, decoders, and debuggers for software engineers.",
      color: "#00bfff",
      url: "/tools/developer/"
    },
    {
      id: "security",
      title: "Security & Cryptography",
      icon: "shield-check",
      description: "Hash calculators, token inspectors, cryptographic password generators, and entropy checkers.",
      color: "#00ff88",
      url: "/tools/security/"
    },
    {
      id: "productivity",
      title: "Productivity & Text",
      icon: "file-text",
      description: "Diff comparison, timestamp calculators, text formatters, and conversion utilities.",
      color: "#ffaa00",
      url: "/tools/productivity/"
    },
    {
      id: "pdf",
      title: "PDF & Documents",
      icon: "file-down",
      description: "Client-side document formatting, compression estimators, and metadata inspectors.",
      color: "#ff5588",
      url: "/tools/pdf/"
    },
    {
      id: "image",
      title: "Image Utilities",
      icon: "image",
      description: "Browser-side image resizers, format converters, and SVG optimization tools.",
      color: "#a855f7",
      url: "/tools/image/"
    },
    {
      id: "ai",
      title: "AI & Prompt Tools",
      icon: "brain",
      description: "Token counters, prompt engineering scratchpads, and MCP JSON-RPC formatters.",
      color: "#06b6d4",
      url: "/tools/ai/"
    }
  ],

  tools: [
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
      slug: "hash-generator",
      title: "Cryptographic Hash Generator",
      category: "security",
      icon: "shield",
      badge: "WebCrypto",
      description: "Calculate SHA-256, SHA-512, SHA-1, and MD5 cryptographic checksums instantly using native Web Crypto API.",
      keywords: ["hash generator", "sha256 online", "sha512 generator", "sha1 checksum", "md5 hash"],
      url: "/tools/developer/hash-generator/",
      related: ["password-generator", "jwt-decoder", "base64-encode-decode"]
    },
    {
      slug: "timestamp-converter",
      title: "Unix Timestamp & Epoch Converter",
      category: "productivity",
      icon: "clock",
      badge: "Real-time",
      description: "Convert Unix Epoch timestamps (seconds / milliseconds) to human-readable UTC & Local time, and vice versa.",
      keywords: ["epoch converter", "unix timestamp to date", "current unix time", "timestamp calculator"],
      url: "/tools/developer/timestamp-converter/",
      related: ["jwt-decoder", "json-formatter"]
    },
    {
      slug: "text-diff",
      title: "Text & Code Diff Checker",
      category: "productivity",
      icon: "split",
      badge: "Side-by-Side",
      description: "Compare two text blocks or code snippets side-by-side or unified with character-level additions and deletions.",
      keywords: ["diff checker", "compare text online", "code diff", "text compare tool"],
      url: "/tools/developer/text-diff/",
      related: ["json-validator", "regex-tester"]
    },
    {
      slug: "password-generator",
      title: "Secure Password & Token Generator",
      category: "security",
      icon: "lock",
      badge: "Entropy Check",
      description: "Generate high-entropy cryptographically random passwords and API tokens with customizable character sets and strength meters.",
      keywords: ["password generator", "random token generator", "secure password", "password entropy"],
      url: "/tools/developer/password-generator/",
      related: ["uuid-generator", "hash-generator"]
    }
  ]
};

// Helper methods for discovery and rendering
window.XESTUS_TOOLS_REGISTRY.getToolBySlug = function(slug) {
  return window.XESTUS_TOOLS_REGISTRY.tools.find(t => t.slug === slug);
};

window.XESTUS_TOOLS_REGISTRY.getToolsByCategory = function(category) {
  return window.XESTUS_TOOLS_REGISTRY.tools.filter(t => t.category === category);
};

window.XESTUS_TOOLS_REGISTRY.getRelatedTools = function(slug) {
  const tool = window.XESTUS_TOOLS_REGISTRY.getToolBySlug(slug);
  if (!tool || !tool.related) return [];
  return tool.related.map(rSlug => window.XESTUS_TOOLS_REGISTRY.getToolBySlug(rSlug)).filter(Boolean);
};
