const fs = require('fs');
const sevaDataJs = fs.readFileSync('js/digital-seva-data.js', 'utf8');

const sandbox = { window: {} };
const fn = new Function('window', sevaDataJs + '; return window.XESTUS_DIGITAL_SEVA_DATA;');
const data = fn(sandbox.window);

const services = data.getServices();
console.log(`Current Total Services: ${services.length}`);
console.log("Service IDs:");
services.forEach((s, i) => console.log(`${i+1}. ${s.service_id} [${s.category}] (${s.authority})`));
