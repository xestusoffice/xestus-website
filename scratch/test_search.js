const fs = require('fs');
const vm = require('vm');

// Load data and hub
const dataCode = fs.readFileSync('js/digital-seva-data.js', 'utf8');
const hubCode = fs.readFileSync('js/digital-seva-hub.js', 'utf8');

const sandbox = {
    window: {
        addEventListener: () => {},
        matchMedia: () => ({ matches: false })
    },
    document: {
        addEventListener: () => {},
        querySelectorAll: () => [],
        getElementById: () => null,
        documentElement: {
            getAttribute: () => 'en'
        },
        body: {
            classList: { add: () => {}, remove: () => {} }
        }
    },
    localStorage: {
        getItem: () => 'en',
        setItem: () => {}
    },
    console: console,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval
};

vm.createContext(sandbox);
vm.runInContext(dataCode, sandbox);
vm.runInContext(hubCode, sandbox);

const testQueries = [
    "caste",
    "জাতিগত",
    "জাতি সার্টিফিকেট",
    "caste certificate",
    "lakshmir bhandar",
    "লক্ষ্মীর ভাণ্ডার",
    "land record",
    "জমির রেকর্ড",
    "scholarship",
    "স্কলারশিপ",
    "driving licence",
    "passport",
    "PM-KISAN",
    "পিএম কিষাণ",
    "আমার caste certificate করতে হবে",
    "Lakshmir Bhandar কোথায় apply করব?",
    "জমির record দেখতে চাই",
    "Scholarship apply করতে চাই",
    "Driving licence renew করব",
    "Passport করতে চাই",
    "PM-KISAN status দেখতে চাই",
    "xyznonexistentquery123"
];

console.log('--- TESTING SMART SEARCH QUERIES ---');
const dataStore = sandbox.window.XESTUS_DIGITAL_SEVA_DATA;
const allServices = dataStore.getServices();

testQueries.forEach(q => {
    sandbox.window.XESTUS_DIGITAL_SEVA.search(q);
    // Since getFilteredServices is inside hub closure, let's see how search ranks or call calculate
    console.log(`Query: "${q}"`);
});
