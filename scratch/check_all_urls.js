const fs = require('fs');

// Check index.html
const html = fs.readFileSync('./index.html', 'utf8');
const hrefs = [];
const regex = /href=["']([^"']+)["']/g;
let match;
while ((match = regex.exec(html)) !== null) {
    hrefs.push(match[1]);
}
console.log('Total hrefs in index.html:', hrefs.length);
const externalUrls = hrefs.filter(h => h.startsWith('http://') || h.startsWith('https://'));
console.log('Total external URLs in index.html:', externalUrls.length);

// Check all services in digital-seva-data.js
global.window = {};
const dataCode = fs.readFileSync('./js/digital-seva-data.js', 'utf8');
eval(dataCode);
const data = window.XESTUS_DIGITAL_SEVA_DATA;
const services = data.getServices();
const masterPortals = data.getMasterPortals();

console.log('Master portals:', masterPortals.length);
console.log('Services:', services.length);

// Let's audit all URLs in services
const allUrls = [];
services.forEach(s => {
    ['official_apply_url', 'official_homepage', 'official_status_url', 'source_url'].forEach(f => {
        if (s[f]) {
            allUrls.push({ serviceId: s.service_id, name: s.service_name.en, field: f, url: s[f] });
        }
    });
});

console.log('Total URLs in service definitions:', allUrls.length);

// Let's check for any 404-prone or known deprecated URLs
const issues = [];
allUrls.forEach(u => {
    // Check known outdated domains
    if (u.url.includes('uidai.gov.in') && !u.url.includes('myaadhaar') && u.field === 'official_apply_url') {
        // uidai main page vs myaadhaar
    }
    if (u.url.includes('(S(')) {
        issues.push({ ...u, issue: 'ASP.NET session ID in URL' });
    }
    if (u.url.includes('wbregistration.gov.in/(S(')) {
        issues.push({ ...u, issue: 'Expired session ID in wbregistration' });
    }
    if (!u.url.startsWith('https://') && !u.url.startsWith('http://')) {
        issues.push({ ...u, issue: 'Invalid protocol' });
    }
});

console.log('Issues detected:', issues);
