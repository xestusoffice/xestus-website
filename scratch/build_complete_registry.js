// Helper script to verify and augment digital-seva-data.js
const fs = require('fs');
const vm = require('vm');

const originalCode = fs.readFileSync('js/digital-seva-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(originalCode, sandbox);

const originalData = sandbox.window.XESTUS_DIGITAL_SEVA_DATA;
const existingServices = originalData.getServices();
const existingIds = new Set(existingServices.map(s => s.service_id));

console.log('Existing services count:', existingServices.length);
console.log('Existing IDs:', Array.from(existingIds));
