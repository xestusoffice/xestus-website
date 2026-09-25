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

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = getAllHtmlFiles(rootDir);

const adsenseCode = `    <!-- Google AdSense - Official Publisher Code -->\n    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1489572262543869"\n     crossorigin="anonymous"></script>`;

htmlFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const rel = path.relative(rootDir, filePath);
    let changed = false;

    // 1. Remove old commented AdSense placeholders if present
    content = content.replace(/<!--\s*<script async src="https:\/\/pagead2\.googlesyndication[^\n]*ca-pub-[^"]*" crossorigin="anonymous"><\/script>\s*-->/g, '');
    content = content.replace(/<!--\s*Google AdSense Script Placeholder\s*-->\s*<!--\s*Replace ca-pub-[^\n]*-->/g, '');

    // 2. Add or update AdSense script
    if (!content.includes('ca-pub-1489572262543869')) {
        // Insert in <head>
        if (content.includes('</script>\n\n    <meta charset="UTF-8">')) {
            content = content.replace('</script>\n\n    <meta charset="UTF-8">', `</script>\n\n${adsenseCode}\n\n    <meta charset="UTF-8">`);
            changed = true;
        } else if (content.includes('</script>\n    <meta charset="UTF-8">')) {
            content = content.replace('</script>\n    <meta charset="UTF-8">', `</script>\n\n${adsenseCode}\n\n    <meta charset="UTF-8">`);
            changed = true;
        } else if (content.includes('<meta charset="UTF-8">')) {
            content = content.replace('<meta charset="UTF-8">', `${adsenseCode}\n\n    <meta charset="UTF-8">`);
            changed = true;
        } else if (content.includes('</head>')) {
            content = content.replace('</head>', `${adsenseCode}\n</head>`);
            changed = true;
        }
    }

    // 3. Update CSP if present to include pagead2.googlesyndication.com
    if (content.includes('Content-Security-Policy')) {
        content = content.replace(
            /content="default-src 'self'; script-src[^"]*"/,
            `content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.googleadservices.com https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' https://googleads.g.doubleclick.net https://*.googlesyndication.com https://*.google.com; connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://ep1.adtrafficquality.google https://pagead2.googlesyndication.com;"`
        );
        changed = true;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${rel}`);
});

console.log('Finished updating AdSense integration on all HTML pages.');
