const fs = require('fs');
const path = require('path');

const rootDir = 's:/XESTUS/07_Website/GitHub/xestus-website';

function getAllFiles(dir, exts = ['.html', '.js', '.css']) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                results = results.concat(getAllFiles(fullPath, exts));
            }
        } else {
            if (exts.includes(path.extname(file))) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const htmlFiles = getAllFiles(rootDir, ['.html']);
console.log(`Found ${htmlFiles.length} HTML files.`);

// 1. Audit index.html internal anchors
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const idMatches = [...indexHtml.matchAll(/id=["']([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]);
const idSet = new Set(idMatches);
console.log(`Found ${idSet.size} unique IDs in index.html.`);

const anchorMatches = [...indexHtml.matchAll(/href=["']#([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]);
const uniqueAnchors = [...new Set(anchorMatches)];
console.log(`Found ${uniqueAnchors.length} unique internal anchors in index.html.`);

const missingAnchors = uniqueAnchors.filter(a => !idSet.has(a));
console.log('Missing anchor targets in index.html:', missingAnchors);

// 2. Check all files for broken relative links
htmlFiles.forEach(file => {
    const relFile = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf8');
    const links = [...content.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
    links.forEach(l => {
        if (!l.startsWith('http') && !l.startsWith('#') && !l.startsWith('mailto:') && !l.startsWith('tel:') && !l.startsWith('javascript:')) {
            const cleanPath = l.split('#')[0].split('?')[0];
            if (cleanPath) {
                const targetPath = path.resolve(path.dirname(file), cleanPath);
                const exists = fs.existsSync(targetPath) || fs.existsSync(targetPath + '.html') || fs.existsSync(path.join(targetPath, 'index.html'));
                if (!exists) {
                    console.log(`Broken link in ${relFile} -> "${l}" (resolved to: ${targetPath})`);
                }
            }
        }
    });
});

// 3. Check for script files referenced
htmlFiles.forEach(file => {
    const relFile = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf8');
    const scripts = [...content.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
    scripts.forEach(s => {
        if (!s.startsWith('http') && !s.startsWith('data:')) {
            const cleanPath = s.split('?')[0];
            const targetPath = path.resolve(path.dirname(file), cleanPath);
            if (!fs.existsSync(targetPath)) {
                console.log(`Missing script/asset in ${relFile} -> "${s}"`);
            }
        }
    });
});
