const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/digital-seva-data.js'));
const data = global.window.XESTUS_DIGITAL_SEVA_DATA;

console.log('--- DIGITAL SEVA DATA REGISTRY STATS ---');
console.log('Master Portals:', data.getMasterPortals().length);
console.log('Total Services:', data.getServices().length);
console.log('Categories:', data.getCategories().length);

const allServices = data.getServices();
const govLevels = {};
allServices.forEach(s => {
    govLevels[s.government_level] = (govLevels[s.government_level] || 0) + 1;
});
console.log('Breakdown by government_level field:', govLevels);

const missingUrls = allServices.filter(s => !s.official_portal_url || !s.official_portal_url.startsWith('http'));
console.log('Services missing valid URLs:', missingUrls.length);

const missingBn = allServices.filter(s => !s.service_name.bn || !s.short_description.bn);
console.log('Services missing Bengali translations:', missingBn.length);

const missingHi = allServices.filter(s => !s.service_name.hi || !s.short_description.hi);
console.log('Services missing Hindi translations:', missingHi.length);

console.log('Master Portal URLs:');
data.getMasterPortals().forEach(p => {
    console.log(` - ${p.name.en}: ${p.url}`);
});
