const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const sevaRules = [...css.matchAll(/([a-zA-Z0-9_\-\.\s,>#:+]+)\s*\{([^}]*)\}/g)];
const suspicious = [];
sevaRules.forEach(r => {
    const selector = r[1].trim();
    if (selector.includes('seva-') && !selector.startsWith('.') && !selector.startsWith('#') && !selector.startsWith('@')) {
        suspicious.push(selector);
    }
});
console.log('Suspicious selectors in style.css:');
console.log(suspicious);
