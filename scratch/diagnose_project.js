const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find all sections
const sectionMatches = [...html.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)];
console.log('--- ALL SECTIONS FOUND IN index.html (' + sectionMatches.length + ') ---');
sectionMatches.forEach((m, idx) => {
    console.log((idx + 1) + '. ID: #' + m[1] + ' | Full: ' + m[0].substring(0, 100));
});

// Check all buttons inside section #digital-services
const dsMatch = html.match(/<section[^>]*id=["']digital-services["'][\s\S]*?<\/section>/i);
if (dsMatch) {
    const dsHtml = dsMatch[0];
    console.log('\n--- DIGITAL SEVA BUTTONS & LINKS ---');
    const btnMatches = [...dsHtml.matchAll(/<(button|a)[^>]*>/gi)];
    console.log('Total buttons/links inside #digital-services:', btnMatches.length);
    btnMatches.forEach((b, i) => {
        console.log((i+1) + ': ' + b[0]);
    });
}
