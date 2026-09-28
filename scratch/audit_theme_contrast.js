const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const xestusToolsCss = fs.readFileSync('css/xestus-tools.css', 'utf8');

console.log("Analyzing style.css and css/xestus-tools.css for hardcoded colors and potential Day/Eye-Protect mode contrast bugs...\n");

// 1. Find all hardcoded color: #fff or color: white or color: rgba(255,255,255
const rules = [];
const ruleRegex = /([^{}]+)\{([^}]+)\}/g;
let match;

let hardcodedWhiteText = [];
let hardcodedDarkText = [];
let hardcodedDarkBg = [];
let hardcodedLightBg = [];
let explicitDayOverrides = [];
let explicitEyeOverrides = [];

while ((match = ruleRegex.exec(css)) !== null) {
    const selector = match[1].trim();
    const body = match[2].trim();

    if (selector.includes('[data-theme="day"]') || selector.includes('[data-theme=day]')) {
        explicitDayOverrides.push(selector);
    }
    if (selector.includes('[data-theme="eye-protect"]') || selector.includes('[data-theme=eye-protect]')) {
        explicitEyeOverrides.push(selector);
    }

    // Check color
    const colorMatch = body.match(/(?:^|;|\s)color\s*:\s*([^;!]+)/i);
    if (colorMatch) {
        const colorVal = colorMatch[1].trim();
        if (colorVal === '#fff' || colorVal === '#ffffff' || colorVal === 'white' || colorVal.startsWith('rgba(255, 255, 255') || colorVal.startsWith('rgba(255,255,255')) {
            // Check if selector is theme-scoped
            if (!selector.includes('data-theme') && !selector.includes('.btn-primary') && !selector.includes('.badge-primary')) {
                hardcodedWhiteText.push({ selector, color: colorVal, body: body.substring(0, 100) });
            }
        }
    }

    // Check background
    const bgMatch = body.match(/(?:^|;|\s)background(?:-color)?\s*:\s*([^;!]+)/i);
    if (bgMatch) {
        const bgVal = bgMatch[1].trim();
        if (bgVal.includes('#05070c') || bgVal.includes('#080c16') || bgVal.includes('#0d1322') || bgVal.includes('#10172a') || bgVal.includes('rgba(16, 25, 45')) {
            if (!selector.includes('data-theme')) {
                hardcodedDarkBg.push({ selector, bg: bgVal });
            }
        }
        if (bgVal === '#fff' || bgVal === '#ffffff' || bgVal === 'white') {
            if (!selector.includes('data-theme')) {
                hardcodedLightBg.push({ selector, bg: bgVal });
            }
        }
    }
}

console.log(`Total explicit Day overrides: ${explicitDayOverrides.length}`);
console.log(`Total explicit Eye-Protect overrides: ${explicitEyeOverrides.length}`);
console.log(`Selectors with hardcoded WHITE/LIGHT text without theme scope: ${hardcodedWhiteText.length}`);
console.log(`Selectors with hardcoded DARK background without theme scope: ${hardcodedDarkBg.length}`);
console.log(`Selectors with hardcoded LIGHT background without theme scope: ${hardcodedLightBg.length}`);

console.log("\n--- Top 30 Hardcoded White Text Selectors ---");
hardcodedWhiteText.slice(0, 30).forEach(item => {
    console.log(`Selector: ${item.selector} => ${item.color}`);
});

console.log("\n--- Top 20 Hardcoded Dark BG Selectors ---");
hardcodedDarkBg.slice(0, 20).forEach(item => {
    console.log(`Selector: ${item.selector} => ${item.bg}`);
});

console.log("\n--- Top 20 Hardcoded Light BG Selectors ---");
hardcodedLightBg.slice(0, 20).forEach(item => {
    console.log(`Selector: ${item.selector} => ${item.bg}`);
});
