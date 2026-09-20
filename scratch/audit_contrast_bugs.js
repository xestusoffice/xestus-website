const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

console.log('=== SEARCHING FOR HARDCODED WHITE TEXT ON TRANSPARENT/DEFAULT BACKGROUNDS ===');
// Find rules with color: #ffffff or color: white or color: #fff without data-theme qualification
const rules = [...css.matchAll(/([^{}]+)\{([^{}]+)\}/g)];
const hardcodedWhite = [];
const hardcodedBlack = [];

rules.forEach(r => {
    const selector = r[1].trim();
    const body = r[2];
    if (selector.includes('data-theme') || selector.includes('@media') || selector.includes('@keyframes')) return;
    
    if (/\bcolor\s*:\s*(#ffffff|#fff|white)\b/i.test(body) && !/background\s*:\s*(#[0-9a-f]{3,6}|rgba\(0,\s*0,\s*0|linear-gradient)/i.test(body)) {
        hardcodedWhite.push({ selector, body: body.replace(/\s+/g, ' ').trim() });
    }
});

console.log(`Found ${hardcodedWhite.length} rules with hardcoded white text that may lack explicit dark background in Day mode:`);
hardcodedWhite.slice(0, 35).forEach((item, idx) => {
    console.log(`${idx + 1}. Selector: ${item.selector}`);
    console.log(`   Body: ${item.body.substring(0, 120)}`);
});
