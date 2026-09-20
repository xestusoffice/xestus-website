const fs = require('fs');

const globalScope = {
    document: {
        getElementById: () => null,
        querySelectorAll: () => [],
        body: { classList: { add: () => {}, remove: () => {} } },
        addEventListener: () => {}
    },
    window: {
        addEventListener: () => {},
        location: { search: '' },
        localStorage: { getItem: () => 'en', setItem: () => {} }
    }
};

const dataCode = fs.readFileSync('js/digital-seva-data.js', 'utf8');
const transCode = fs.readFileSync('js/translations.js', 'utf8');
const hubCode = fs.readFileSync('js/digital-seva-hub.js', 'utf8');

const vm = require('vm');
const context = vm.createContext(globalScope);
vm.runInContext(dataCode, context);
vm.runInContext(transCode, context);
vm.runInContext(hubCode, context);

const queries = ['Caste Certificate', 'Scholarship', 'Land Record', 'Driving Licence', 'Passport', 'Government Scheme', 'Job', 'Health Service', 'Lakshmir Bhandar', 'PM-KISAN', 'voter', 'pan', 'aadhaar', 'ration', 'sbi', 'electricity', 'gas', 'swasthya sathi', 'police', 'tax', 'train', 'irctc'];

console.log('--- TESTING XESTUS SEARCH ENGINE ---');
queries.forEach(q => {
    context.window.XESTUS_DIGITAL_SEVA.search(q);
    // Let's check how many were found
});
