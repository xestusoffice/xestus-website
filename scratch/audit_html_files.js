const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'scratch') {
                getAllHtmlFiles(fullPath, fileList);
            }
        } else if (file.endsWith('.html') && !file.startsWith('google')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const htmlFiles = getAllHtmlFiles(path.resolve(__dirname, '..'));
console.log(`Found ${htmlFiles.length} HTML files:`);

htmlFiles.forEach(file => {
    const rel = path.relative(path.resolve(__dirname, '..'), file);
    const content = fs.readFileSync(file, 'utf8');
    const hasAdSense = content.includes('ca-pub-1489572262543869');
    const hasAnyAdSense = content.includes('adsbygoogle');
    const hasCookieConsent = content.includes('cookie-consent.js');
    const hasSecurityShield = content.includes('security-shield.js');
    const hasCursor = content.includes('cursor-dot') || content.includes('cursor-outline');
    console.log(`- ${rel}: AdSense=${hasAdSense} (any=${hasAnyAdSense}), Consent=${hasCookieConsent}, Shield=${hasSecurityShield}, Cursor=${hasCursor}`);
});
