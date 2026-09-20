const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/digital-seva-data.js'));
const data = global.window.XESTUS_DIGITAL_SEVA_DATA;

console.log('Sample Master Portal keys & values:');
console.log(data.getMasterPortals()[0]);

console.log('\nSample Service keys:');
const s = data.getServices()[0];
console.log(Object.keys(s));
console.log('Sample service portal URL field:', s.official_url || s.portal_url || s.url || s.official_portal_url || s.source_url || s.link);
console.log('Sample service:', JSON.stringify(s, null, 2).substring(0, 500));
