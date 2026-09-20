const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

console.log('=== THEME SELECTORS IN style.css ===');
const themeBlocks = [...css.matchAll(/(\[data-theme=["'][^"']+["']\][^{]*\{[^}]*\})/gi)];
console.log('Found theme blocks:', themeBlocks.length);
themeBlocks.forEach(b => {
    console.log('\n--- BLOCK ---');
    console.log(b[0]);
});

console.log('\n=== ROOT VARIABLES (NIGHT DEFAULT) ===');
const rootMatch = css.match(/:root\s*\{[^}]*\}/i);
if (rootMatch) {
    console.log(rootMatch[0].substring(0, 1500));
}
