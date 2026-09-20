const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const lines = css.split('\n');
console.log('=== CSS RULES FOR SEVA & DIGITAL SERVICES ===');
lines.forEach((l, idx) => {
    if (l.includes('seva-master-portals') || l.includes('seva-services') || l.includes('private-services') || l.includes('seva-fallback')) {
        console.log(`Line ${idx+1}: ${l}`);
    }
});
