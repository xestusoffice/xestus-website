const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

console.log('--- REVEAL ITEM & INTERSECTION OBSERVER CHECK ---');
const revealMatches = [...css.matchAll(/\.reveal-item[^{]*\{[^}]*\}/gi)];
revealMatches.forEach(m => console.log(m[0]));

const contentVisMatches = [...css.matchAll(/content-visibility[^\n;]*[;\n]/gi)];
console.log('\n--- CONTENT-VISIBILITY USAGE (' + contentVisMatches.length + ') ---');
contentVisMatches.forEach(m => console.log(m[0].trim()));
