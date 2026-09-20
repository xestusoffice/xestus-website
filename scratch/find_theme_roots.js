const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const themeRootMatches = [...css.matchAll(/((\:root|html)\[data-theme=["'](?:day|eye-protect|night)["']\][^{]*\{[^}]*\})/gi)];
console.log('Theme Root Blocks:', themeRootMatches.length);
themeRootMatches.forEach(m => console.log('\n--- ROOT BLOCK ---\n', m[0]));
