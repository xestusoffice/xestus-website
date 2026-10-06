/**
 * XESTUS Universal Spotlight Search & Pro Micro-Interactions Engine
 * Provides Ctrl+K / Cmd+K Command Palette & 1-Click Copy Feedback
 * 100% Client-Side, Zero External Dependencies, CSP & AdSense Compliant
 */

(function () {
  'use strict';

  // 1. Comprehensive Tools Directory Dataset for Instant Search
  const XESTUS_TOOLS_CATALOG = [
    // Calculators
    { slug: 'gst-calculator', name: 'GST Tax Calculator (India)', cat: 'Calculators', icon: 'calculator', desc: 'Inclusive & Exclusive GST with CGST, SGST, IGST tax breakdown.', url: '/tools/calculators/gst-calculator/' },
    { slug: 'percentage-calculator', name: 'Percentage Calculator', cat: 'Calculators', icon: 'percent', desc: 'Find percentage of a number, percentage increase/decrease, ratios.', url: '/tools/calculators/percentage-calculator/' },
    { slug: 'age-calculator', name: 'Age & Date Difference Calculator', cat: 'Calculators', icon: 'calendar', desc: 'Exact age in years, months, weeks, days, hours & next birthday.', url: '/tools/calculators/age-calculator/' },
    { slug: 'emi-calculator', name: 'Loan EMI & Amortization Calculator', cat: 'Calculators', icon: 'landmark', desc: 'Monthly loan EMI, interest breakdown, and amortization schedule.', url: '/tools/calculators/emi-calculator/' },
    { slug: 'discount-calculator', name: 'Discount & Sale Savings Calculator', cat: 'Calculators', icon: 'tag', desc: 'Final sale price, discount amount, and stacked coupon savings.', url: '/tools/calculators/discount-calculator/' },
    { slug: 'date-calculator', name: 'Date Difference & Duration Calculator', cat: 'Calculators', icon: 'calendar-days', desc: 'Calculate days, weeks, months, and business days between dates.', url: '/tools/calculators/date-calculator/' },
    { slug: 'unit-converter', name: 'Universal Unit Converter', cat: 'Calculators', icon: 'ruler', desc: 'Convert length, mass, temperature, speed, area, and digital data.', url: '/tools/calculators/unit-converter/' },

    // Developer
    { slug: 'json-formatter', name: 'JSON Formatter & Beautifier', cat: 'Developer', icon: 'file-code-2', desc: 'Format, prettify, and minify raw JSON payloads with indentation.', url: '/tools/developer/json-formatter/' },
    { slug: 'json-validator', name: 'JSON Validator & Error Inspector', cat: 'Developer', icon: 'check-check', desc: 'Validate RFC 8259 syntax, pinpoint exact line and column errors.', url: '/tools/developer/json-validator/' },
    { slug: 'base64-encode-decode', name: 'Base64 Encoder & Decoder', cat: 'Developer', icon: 'binary', desc: 'Encode text and binary to Base64 and decode back to plaintext.', url: '/tools/developer/base64-encode-decode/' },
    { slug: 'jwt-decoder', name: 'JWT Decoder & Claims Inspector', cat: 'Developer', icon: 'key-round', desc: 'Decode JSON Web Tokens, inspect header, payload claims and expiry.', url: '/tools/developer/jwt-decoder/' },
    { slug: 'uuid-generator', name: 'UUID / GUID v4 Generator', cat: 'Developer', icon: 'hash', desc: 'Generate RFC 4122 compliant Version-4 unique identifiers using CSPRNG.', url: '/tools/developer/uuid-generator/' },
    { slug: 'hash-generator', name: 'Cryptographic Hash Generator', cat: 'Developer', icon: 'shield-alert', desc: 'SHA-256, SHA-512, MD5, SHA-1 cryptographic checksums in browser.', url: '/tools/developer/hash-generator/' },
    { slug: 'password-generator', name: 'Strong Password Generator', cat: 'Developer', icon: 'lock', desc: 'High-entropy random passwords with NIST SP 800-63B strength meter.', url: '/tools/developer/password-generator/' },
    { slug: 'regex-tester', name: 'Regex Tester & Debugger', cat: 'Developer', icon: 'search-code', desc: 'Test regular expressions with real-time match and capture highlighting.', url: '/tools/developer/regex-tester/' },
    { slug: 'text-diff', name: 'Text & Code Diff Checker', cat: 'Developer', icon: 'git-compare', desc: 'Side-by-side text difference tracker with Myers diff algorithm.', url: '/tools/developer/text-diff/' },
    { slug: 'timestamp-converter', name: 'Unix Timestamp & Epoch Converter', cat: 'Developer', icon: 'clock', desc: 'Convert Unix epoch timestamps to UTC, ISO 8601, and local timezone.', url: '/tools/developer/timestamp-converter/' },
    { slug: 'url-encode-decode', name: 'URL Percent Encoder & Decoder', cat: 'Developer', icon: 'link-2', desc: 'RFC 3986 percent-encode and decode special characters and query strings.', url: '/tools/developer/url-encode-decode/' },

    // Image & PDF
    { slug: 'image-compressor', name: 'Client-Side Image Compressor', cat: 'Image', icon: 'image-down', desc: 'Compress JPG, PNG, and WebP images up to 80% without server upload.', url: '/tools/image/image-compressor/' },
    { slug: 'image-resizer', name: 'Image Dimension Resizer', cat: 'Image', icon: 'scaling', desc: 'Resize image dimensions in pixels with locked aspect ratio.', url: '/tools/image/image-resizer/' },
    { slug: 'jpg-to-png', name: 'JPG to PNG Format Converter', cat: 'Image', icon: 'file-image', desc: 'Convert compressed JPEG photos into lossless PNG format.', url: '/tools/image/jpg-to-png/' },
    { slug: 'image-to-pdf', name: 'Image to PDF Document Maker', cat: 'PDF', icon: 'file-text', desc: 'Compile multiple photos into a single organized, printable PDF.', url: '/tools/pdf/image-to-pdf/' },

    // Office & Productivity
    { slug: 'qr-generator', name: 'Custom QR Code Generator', cat: 'Office', icon: 'qr-code', desc: 'Generate high-res vector SVG and PNG QR codes for URLs, Wi-Fi, UPI.', url: '/tools/office/qr-generator/' },
    { slug: 'invoice-generator', name: 'GST Invoice & Receipt Maker', cat: 'Office', icon: 'receipt', desc: 'Generate professional GST-compliant PDF client invoices and receipts.', url: '/tools/office/invoice-generator/' },
    { slug: 'word-counter', name: 'Word & Paragraph Counter', cat: 'Office', icon: 'file-text', desc: 'Word, sentence, character counts, reading time, and keyword density.', url: '/tools/office/word-counter/' },
    { slug: 'character-counter', name: 'Character & Letter Counter', cat: 'Office', icon: 'type', desc: 'Count letters, spaces, and track limits for Twitter, SMS, and Meta tags.', url: '/tools/office/character-counter/' },
    { slug: 'case-converter', name: 'Text Case Converter', cat: 'Office', icon: 'case-sensitive', desc: 'Convert text to UPPERCASE, Title Case, camelCase, snake_case, kebab-case.', url: '/tools/office/case-converter/' },

    // Student Tools
    { slug: 'cgpa-calculator', name: 'CGPA to Percentage & GPA Calculator', cat: 'Student', icon: 'graduation-cap', desc: 'CBSE 9.5 multiplier, AICTE formula, and semester SGPA converter.', url: '/tools/student/cgpa-calculator/' },
    { slug: 'pomodoro-timer', name: 'Pomodoro Study & Focus Timer', cat: 'Student', icon: 'timer', desc: '25 min deep focus + 5 min break timer for study and productivity.', url: '/tools/student/pomodoro-timer/' },
    { slug: 'stopwatch', name: 'Online Stopwatch & Lap Timer', cat: 'Student', icon: 'watch', desc: 'High-resolution microsecond timer with unlimited split laps.', url: '/tools/student/stopwatch/' }
  ];

  // 2. Build and Inject Modal HTML & Styles into DOM
  let modalContainer = null;
  let searchInput = null;
  let resultsList = null;
  let selectedIndex = 0;
  let activeFilteredTools = [];

  function createSpotlightModal() {
    if (modalContainer) return;

    modalContainer = document.createElement('div');
    modalContainer.id = 'xestusSpotlightModal';
    modalContainer.className = 'xestus-spotlight-backdrop';
    modalContainer.setAttribute('aria-hidden', 'true');
    modalContainer.setAttribute('role', 'dialog');
    modalContainer.setAttribute('aria-label', 'Spotlight Command Palette');

    modalContainer.innerHTML = `
      <div class="xestus-spotlight-dialog" role="document">
        <div class="spotlight-search-header">
          <svg class="spotlight-search-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="xestusSpotlightInput" class="spotlight-input" placeholder="Type a tool name or math keyword... (e.g. GST, Age, JSON, QR)" autocomplete="off" spellcheck="false">
          <kbd class="spotlight-esc-pill" id="spotlightCloseKbd">ESC</kbd>
        </div>

        <div class="spotlight-categories-strip">
          <span class="spotlight-strip-label">Quick Hubs:</span>
          <a href="/tools/calculators/" class="spotlight-pill">Calculators</a>
          <a href="/tools/developer/" class="spotlight-pill">Developer</a>
          <a href="/tools/image/" class="spotlight-pill">Image</a>
          <a href="/tools/office/" class="spotlight-pill">Office</a>
          <a href="/tools/student/" class="spotlight-pill">Student</a>
        </div>

        <div class="spotlight-results-container" id="xestusSpotlightResults" role="listbox">
          <!-- Dynamically populated -->
        </div>

        <div class="spotlight-footer">
          <div class="spotlight-footer-hint">
            <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Open Tool</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
          <div class="spotlight-footer-brand">
            <span>⚡ XESTUS Instant Engine</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalContainer);

    searchInput = document.getElementById('xestusSpotlightInput');
    resultsList = document.getElementById('xestusSpotlightResults');

    // Event listeners
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        closeSpotlight();
      }
    });

    const closeKbd = document.getElementById('spotlightCloseKbd');
    if (closeKbd) {
      closeKbd.addEventListener('click', closeSpotlight);
    }

    searchInput.addEventListener('input', () => {
      renderResults(searchInput.value.trim());
    });

    searchInput.addEventListener('keydown', handleKeyNavigation);
  }

  function openSpotlight() {
    createSpotlightModal();
    modalContainer.classList.add('active');
    modalContainer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    searchInput.value = '';
    selectedIndex = 0;
    renderResults('');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSpotlight() {
    if (!modalContainer) return;
    modalContainer.classList.remove('active');
    modalContainer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderResults(query) {
    if (!resultsList) return;

    if (!query) {
      // Default: Top 8 Popular & Essential Tools
      activeFilteredTools = XESTUS_TOOLS_CATALOG.slice(0, 8);
    } else {
      const q = query.toLowerCase();
      activeFilteredTools = XESTUS_TOOLS_CATALOG.filter(tool => {
        return tool.name.toLowerCase().includes(q) ||
               tool.desc.toLowerCase().includes(q) ||
               tool.cat.toLowerCase().includes(q) ||
               tool.slug.toLowerCase().includes(q);
      });
    }

    if (activeFilteredTools.length === 0) {
      resultsList.innerHTML = `
        <div class="spotlight-no-results">
          <p>No tools matched "<strong>${escapeHtml(query)}</strong>"</p>
          <span>Try searching for 'GST', 'Age', 'JSON', 'Hash', 'EMI', or 'Compress'</span>
        </div>
      `;
      return;
    }

    selectedIndex = Math.min(selectedIndex, activeFilteredTools.length - 1);
    if (selectedIndex < 0) selectedIndex = 0;

    resultsList.innerHTML = activeFilteredTools.map((tool, idx) => {
      const isSelected = idx === selectedIndex;
      return `
        <a href="${tool.url}" class="spotlight-item ${isSelected ? 'selected' : ''}" data-index="${idx}" role="option" aria-selected="${isSelected ? 'true' : 'false'}">
          <div class="spotlight-item-icon">
            <span class="spotlight-cat-tag">${tool.cat}</span>
          </div>
          <div class="spotlight-item-info">
            <div class="spotlight-item-title">${tool.name}</div>
            <div class="spotlight-item-desc">${tool.desc}</div>
          </div>
          <div class="spotlight-item-action">
            <span>Open &rarr;</span>
          </div>
        </a>
      `;
    }).join('');

    // Attach click listeners to items
    resultsList.querySelectorAll('.spotlight-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        setSelectedIndex(idx);
      });
    });
  }

  function setSelectedIndex(newIdx) {
    if (newIdx < 0 || newIdx >= activeFilteredTools.length) return;
    selectedIndex = newIdx;
    const items = resultsList.querySelectorAll('.spotlight-item');
    items.forEach((item, idx) => {
      const isSel = idx === selectedIndex;
      item.classList.toggle('selected', isSel);
      item.setAttribute('aria-selected', isSel ? 'true' : 'false');
      if (isSel) {
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }

  function handleKeyNavigation(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeFilteredTools[selectedIndex]) {
        window.location.href = activeFilteredTools[selectedIndex].url;
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeSpotlight();
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  // 3. Global Keyboard Trigger: Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modalContainer && modalContainer.classList.contains('active')) {
        closeSpotlight();
      } else {
        openSpotlight();
      }
    } else if (e.key === 'Escape') {
      if (modalContainer && modalContainer.classList.contains('active')) {
        closeSpotlight();
      }
    }
  });

  // 4. Universal Toast Notification for Copy Actions
  function showCopyToast(message = 'Copied to Clipboard!') {
    let toast = document.getElementById('xestusGlobalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'xestusGlobalToast';
      toast.className = 'xestus-copy-toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="toast-content">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${message}</span>
      </div>
    `;

    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // Hook into copy button events across all tools
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .tool-btn, .btn-copy, [id*="Copy"], [id*="copy"]');
    if (target) {
      const text = target.textContent.toLowerCase();
      if (text.includes('copy') || target.id.toLowerCase().includes('copy')) {
        setTimeout(() => {
          showCopyToast('Result Copied to Clipboard!');
        }, 150);
      }
    }
  });

  // Expose API for external calls
  window.XestusSpotlight = {
    open: openSpotlight,
    close: closeSpotlight,
    showToast: showCopyToast
  };

})();
