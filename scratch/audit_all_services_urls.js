const fs = require('fs');
global.window = {};
eval(fs.readFileSync('./js/digital-seva-data.js', 'utf8'));
const data = window.XESTUS_DIGITAL_SEVA_DATA;
const services = data.getServices();

const results = services.map((s, idx) => ({
    idx: idx + 1,
    id: s.service_id,
    name: s.service_name.en,
    apply: s.official_apply_url,
    home: s.official_homepage,
    status: s.official_status_url,
    authority: s.authority
}));

fs.writeFileSync('./scratch/services_urls_dump.json', JSON.stringify(results, null, 2));
console.log('Saved', results.length, 'services to ./scratch/services_urls_dump.json');
