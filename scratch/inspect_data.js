const fs = require('fs');
const content = fs.readFileSync('js/digital-seva-data.js', 'utf8');

const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const data = sandbox.window.XESTUS_DIGITAL_SEVA_DATA;
const cats = data.getCategories();
const portals = data.getMasterPortals();
const actions = data.getIWantActions();
const services = data.getServices();
const scams = data.getScamAlerts();

console.log('Categories count:', cats.length);
console.log('Master Portals count:', portals.length);
console.log('IWant Actions count:', actions.length);
console.log('Services count:', services.length);
console.log('Scam Alerts count:', scams.length);

const categoriesFound = new Set();
const govLevels = new Set();
services.forEach(s => {
    categoriesFound.add(s.category);
    govLevels.add(s.government_level);
});
console.log('Distinct Categories in Services (' + categoriesFound.size + '):', Array.from(categoriesFound));
console.log('Distinct Gov Levels:', Array.from(govLevels));

console.log('\n--- ALL INDEXED SERVICES ---');
services.forEach((s, idx) => {
    console.log(`${idx + 1}. [${s.government_level}] ${s.service_name.en} (ID: ${s.service_id})`);
});
