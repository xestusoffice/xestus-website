const fs = require('fs');
const path = require('path');

const rootDir = 's:/XESTUS/07_Website/GitHub/xestus-website';
const toolsDir = path.join(rootDir, 'tools');

function getAllHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllHtmlFiles(fullPath));
        } else if (file.endsWith('.html')) {
            results.push(fullPath);
        }
    });
    return results;
}

const toolHtmlFiles = getAllHtmlFiles(toolsDir);
console.log(`Found ${toolHtmlFiles.length} tool HTML files to check.`);

const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndicationv2.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.googleadservices.com https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' https://googleads.g.doubleclick.net https://*.googlesyndication.com https://*.google.com; connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://ep1.adtrafficquality.google https://pagead2.googlesyndicationv2.com;">`;

toolHtmlFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const relFromRoot = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const depth = relFromRoot.split('/').length - 1; // e.g. tools/index.html -> 1, tools/developer/index.html -> 2, tools/developer/uuid/index.html -> 3
    const prefix = '../'.repeat(depth);

    let changed = false;

    // 1. Add/Update Cookie Consent Script if missing
    if (!content.includes('cookie-consent.js')) {
        const cookieScript = `    <!-- Google Consent Mode v2 & Cookie Consent Controller -->\n    <script src="${prefix}js/cookie-consent.js?v=1.0.0"></script>\n`;
        content = content.replace(/<head>/i, `<head>\n${cookieScript}`);
        changed = true;
    }

    // 2. Add/Update CSP
    if (!content.includes('Content-Security-Policy')) {
        content = content.replace(/<meta name="viewport"[^>]*>/i, match => `${match}\n    <meta http-equiv="X-Content-Type-Options" content="nosniff">\n    ${cspMeta}`);
        changed = true;
    } else {
        content = content.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/i, cspMeta);
        changed = true;
    }

    // 3. Add Google Analytics if missing
    if (!content.includes('G-EF3ZRR55YY')) {
        const gaCode = `    <!-- Google Analytics (gtag.js) -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EF3ZRR55YY"></script>\n    <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-EF3ZRR55YY');\n    </script>\n`;
        content = content.replace(/<head>/i, `<head>\n${gaCode}`);
        changed = true;
    }

    // 4. Update Footer Legal Links
    const legalLinksBlock = `                <div class="footer-legal-links">
                    <a href="${prefix}privacy-policy.html" class="legal-link-btn">Privacy Policy</a>
                    <span class="legal-sep" aria-hidden="true">•</span>
                    <a href="${prefix}terms.html" class="legal-link-btn">Terms of Service</a>
                    <span class="legal-sep" aria-hidden="true">•</span>
                    <a href="${prefix}disclaimer.html" class="legal-link-btn">Disclaimer</a>
                    <span class="legal-sep" aria-hidden="true">•</span>
                    <a href="${prefix}cookie-policy.html" class="legal-link-btn">Cookie Policy</a>
                </div>`;

    if (!content.includes('footer-legal-links') && content.includes('footer-copyright')) {
        content = content.replace(/(<div class="footer-copyright">[\s\S]*?<\/div>)/i, `$1\n${legalLinksBlock}`);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${relFromRoot}`);
    }
});
console.log('Sync complete.');
