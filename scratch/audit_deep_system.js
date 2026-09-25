const fs = require('fs');
const path = require('path');

const rootDir = 's:/XESTUS/07_Website/GitHub/xestus-website';

console.log("=== XESTUS DEEP AUDIT & BUG DETECTION SUITE ===");

// 1. Check JS syntax of all scripts in js/ and root
const jsFiles = [
    'script.js',
    'js/security-shield.js',
    'js/cookie-consent.js',
    'js/translations.js',
    'js/digital-seva-data.js',
    'js/digital-seva-hub.js',
    'js/ai-assistant.js',
    'tools/tools-registry.js'
];

jsFiles.forEach(rel => {
    const full = path.join(rootDir, rel);
    if (!fs.existsSync(full)) {
        console.error(`❌ Missing file: ${rel}`);
        return;
    }
    const code = fs.readFileSync(full, 'utf8');
    try {
        // Quick syntax check using Function constructor
        new Function(code);
        console.log(`✅ JS Syntax OK: ${rel}`);
    } catch (e) {
        console.error(`❌ JS Syntax Error in ${rel}:`, e.message);
    }
});

// 2. Check Translations keys coverage
const transCode = fs.readFileSync(path.join(rootDir, 'js/translations.js'), 'utf8');
const sandbox = {};
try {
    const fn = new Function('window', transCode);
    fn(sandbox);
    const dict = sandbox.XESTUS_TRANSLATIONS;
    if (dict && dict.en && dict.bn && dict.hi) {
        const enKeys = Object.keys(dict.en);
        const bnKeys = Object.keys(dict.bn);
        const hiKeys = Object.keys(dict.hi);
        console.log(`✅ Translations Loaded: EN (${enKeys.length}), BN (${bnKeys.length}), HI (${hiKeys.length})`);

        const missingInBn = enKeys.filter(k => !(k in dict.bn));
        const missingInHi = enKeys.filter(k => !(k in dict.hi));
        if (missingInBn.length > 0) console.warn(`⚠️ Missing BN translation keys:`, missingInBn);
        if (missingInHi.length > 0) console.warn(`⚠️ Missing HI translation keys:`, missingInHi);
        if (missingInBn.length === 0 && missingInHi.length === 0) {
            console.log(`✅ Translations 100% complete across all languages!`);
        }
    }
} catch (e) {
    console.error("Error evaluating translations:", e.message);
}

// 3. Check Digital Seva Data integrity
const sevaDataCode = fs.readFileSync(path.join(rootDir, 'js/digital-seva-data.js'), 'utf8');
const sevaSandbox = { window: {} };
try {
    const fn = new Function('window', sevaDataCode);
    fn(sevaSandbox.window);
    const hub = sevaSandbox.window.XESTUS_DIGITAL_SEVA;
    if (hub && hub.services && hub.categories) {
        console.log(`✅ Digital Seva Data Loaded: ${hub.services.length} services, ${hub.categories.length} categories`);
        // Check for duplicate service IDs
        const ids = new Set();
        let dups = 0;
        hub.services.forEach(s => {
            if (ids.has(s.id)) {
                console.error(`❌ Duplicate service ID: ${s.id}`);
                dups++;
            }
            ids.add(s.id);
            if (!s.title || !s.category || !s.portalUrl) {
                console.warn(`⚠️ Incomplete service metadata for: ${s.id}`);
            }
        });
        if (dups === 0) console.log(`✅ All ${hub.services.length} services have unique valid IDs & schemas!`);
    }
} catch (e) {
    console.error("Error evaluating seva data:", e.message);
}

// 4. Check Tools Registry integrity
const toolsRegCode = fs.readFileSync(path.join(rootDir, 'tools/tools-registry.js'), 'utf8');
const toolsSandbox = { window: {} };
try {
    const fn = new Function('window', toolsRegCode);
    fn(toolsSandbox.window);
    const reg = toolsSandbox.window.XESTUS_TOOLS_REGISTRY;
    if (reg && reg.tools && reg.categories) {
        console.log(`✅ Tools Registry Loaded: ${reg.tools.length} tools, ${reg.categories.length} categories`);
        reg.tools.forEach(t => {
            const toolDir = path.join(rootDir, 'tools', t.category, t.slug, 'index.html');
            const altToolDir = path.join(rootDir, 'tools/developer', t.slug, 'index.html');
            const exists = fs.existsSync(toolDir) || fs.existsSync(altToolDir);
            if (!exists) {
                console.error(`❌ Missing tool page for slug "${t.slug}"`);
            }
        });
    }
} catch (e) {
    console.error("Error evaluating tools registry:", e.message);
}
