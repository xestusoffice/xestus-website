const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const dsMatch = html.match(/<section[^>]*id=["']digital-services["'][\s\S]*?<\/section>/i);
if (dsMatch) {
    console.log('=== DIGITAL SERVICES HTML STRUCTURE ===');
    const subDivs = [...dsMatch[0].matchAll(/<div[^>]*class=["']([^"']+)["'][^>]*id=["']?([^"'\s>]*)["']?[^>]*>/gi)];
    subDivs.forEach(d => {
        console.log(`Class: "${d[1]}" | ID: "${d[2]}"`);
    });
}
