const fs = require('fs');
const path = require('path');

console.log('=== XESTUS FULL WEBSITE INTEGRITY & ADSENSE AUDIT ===\n');

// 1. Collect all HTML files
const htmlFiles = [];
function findHtml(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') findHtml(full);
    } else if (f.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}
findHtml('.');
console.log('Total HTML pages found:', htmlFiles.length);

// 2. Check internal links and assets in each HTML file
let brokenLinks = 0;
let missingAdSense = [];
let missingMeta = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  // Check AdSense
  if (!content.includes('ca-pub-1489572262543869')) {
    missingAdSense.push(file);
  }

  // Check viewport & charset
  if (!content.includes('viewport') || !content.includes('UTF-8')) {
    missingMeta.push(file);
  }

  // Check internal href / src
  const linkRegex = /(?:href|src)=["']([^"'#?]+)(?:[#?][^"']*)?["']/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const target = match[1];
    if (
      target.startsWith('http://') ||
      target.startsWith('https://') ||
      target.startsWith('mailto:') ||
      target.startsWith('tel:') ||
      target.startsWith('data:') ||
      target.startsWith('javascript:')
    ) {
      continue;
    }

    let resolved;
    if (target.startsWith('/')) {
      resolved = path.join('.', target.replace(/^\/+/, ''));
    } else {
      resolved = path.join(dir, target);
    }

    let exists = fs.existsSync(resolved);
    if (!exists && !path.extname(resolved)) {
      exists = fs.existsSync(path.join(resolved, 'index.html')) || fs.existsSync(resolved + '.html');
    }

    if (!exists) {
      console.log(`[BROKEN LINK/ASSET] in ${file} -> "${target}" (attempted: ${resolved})`);
      brokenLinks++;
    }
  }
}

console.log('\nAudit Summary:');
console.log('Broken Links/Assets:', brokenLinks);
console.log('Pages missing AdSense:', missingAdSense.length, missingAdSense);
console.log('Pages missing core meta:', missingMeta.length, missingMeta);

// 3. Check Legal pages presence
const legalPages = ['privacy-policy.html', 'terms.html', 'disclaimer.html', 'cookie-policy.html', 'about.html', 'contact.html'];
legalPages.forEach(lp => {
  console.log(`Legal page ${lp}:`, fs.existsSync(lp) ? 'PRESENT' : 'MISSING');
});
