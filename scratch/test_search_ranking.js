const fs = require('fs');
const vm = require('vm');

const dataCode = fs.readFileSync('js/digital-seva-data.js', 'utf8');
const hubCode = fs.readFileSync('js/digital-seva-hub.js', 'utf8');

const sandbox = {
    window: { addEventListener: () => {}, matchMedia: () => ({ matches: false }) },
    document: { addEventListener: () => {}, querySelectorAll: () => [], getElementById: () => null, documentElement: { getAttribute: () => 'en' }, body: { classList: { add: () => {}, remove: () => {} } } },
    localStorage: { getItem: () => 'en', setItem: () => {} },
    console: console,
    setTimeout: setTimeout, clearTimeout: clearTimeout, setInterval: setInterval, clearInterval: clearInterval
};

vm.createContext(sandbox);
vm.runInContext(dataCode, sandbox);

// Extract calculateRelevanceScore from hub
const hubContent = fs.readFileSync('js/digital-seva-hub.js', 'utf8');
const vmSandbox = {
    window: sandbox.window,
    dataStore: sandbox.window.XESTUS_DIGITAL_SEVA_DATA
};
vm.createContext(vmSandbox);

const testCode = `
${hubContent}
`;

// Let's test the search directly on services
const services = sandbox.window.XESTUS_DIGITAL_SEVA_DATA.getServices();

const STOPWORDS = new Set([
    "আমার", "হবে", "করতে", "চাই", "নেই", "কীভাবে", "কোথায়", "কী", "কি", "দরকার", "লাগে", "হচ্ছে", "একটি", "একটা", "জন্য", "থেকে", "আমি", "হাতে", "পাব", "পাবো", "করব", "দেখতে", "apply", "করব?",
    "मुझे", "चाहिए", "करना", "है", "कैसे", "कहाँ", "क्या", "के", "लिए", "का", "की", "को", "में", "से", "होगा", "मैं", "पास", "नहीं",
    "i", "want", "to", "how", "to", "apply", "for", "my", "is", "the", "a", "an", "of", "and", "in", "need", "get", "make", "change", "have", "no", "status", "renew"
]);

function normalizeText(text) {
    if (!text) return "";
    return text.toString().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'?!]/g, " ").replace(/\s+/g, " ").trim();
}

function getI18nText(obj, lang) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj["en"] || Object.values(obj)[0] || "";
}

function scoreService(service, query, lang = 'en') {
    if (!query) return 1;
    const qNorm = normalizeText(query);
    const rawTokens = qNorm.split(" ").filter((t) => t.length > 0);
    let qTokens = rawTokens.filter((t) => !STOPWORDS.has(t) && t.length > 1);
    if (qTokens.length === 0) {
        qTokens = rawTokens.filter((t) => t.length > 1);
    }
    if (qTokens.length === 0 && rawTokens.length > 0) {
        qTokens = rawTokens;
    }
    if (qTokens.length === 0) return 0;

    const nameEn = normalizeText(service.service_name.en);
    const nameBn = normalizeText(service.service_name.bn);
    const nameHi = normalizeText(service.service_name.hi);
    const descEn = normalizeText(service.short_description.en);
    const descBn = normalizeText(service.short_description.bn);
    const descHi = normalizeText(service.short_description.hi);
    const authority = normalizeText(service.authority);
    const catName = normalizeText(getI18nText(service.category_name, lang));
    const subcat = normalizeText(service.subcategory);
    const intentTags = (service.intent_tags || []).map((t) => normalizeText(t));
    const allIntentStr = intentTags.join(" ");

    let score = 0;
    if (nameEn.includes(qNorm) || nameBn.includes(qNorm) || nameHi.includes(qNorm)) score += 100;
    if (allIntentStr.includes(qNorm)) score += 80;

    let matchedCount = 0;
    for (const token of qTokens) {
        let tokenHit = false;
        if (nameEn.includes(token) || nameBn.includes(token) || nameHi.includes(token)) {
            score += 40;
            tokenHit = true;
        }
        if (allIntentStr.includes(token)) {
            score += 35;
            tokenHit = true;
        }
        if (catName.includes(token) || subcat.includes(token)) {
            score += 20;
            tokenHit = true;
        }
        if (authority.includes(token)) {
            score += 15;
            tokenHit = true;
        }
        if (descEn.includes(token) || descBn.includes(token) || descHi.includes(token)) {
            score += 10;
            tokenHit = true;
        }
        if (tokenHit) matchedCount++;
    }

    if (service.is_popular && score > 0) score += 5;

    return matchedCount >= 1 ? score : 0;
}

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
    "আমার caste certificate করতে হবে",
    "Lakshmir Bhandar কোথায় apply করব?",
    "জমির record দেখতে চাই",
    "Scholarship apply করতে চাই",
    "Driving licence renew করব",
    "Passport করতে চাই",
    "PM-KISAN status দেখতে চাই"
];

console.log('=== TEST SEARCH RESULTS ===');
testQueries.forEach(q => {
    const scored = services.map(s => ({ s, score: scoreService(s, q) }))
                           .filter(item => item.score > 0)
                           .sort((a, b) => b.score - a.score);
    const top = scored.slice(0, 2);
    console.log(`Query: "${q}" -> Hits: ${scored.length}`);
    top.forEach((t, i) => console.log(`   ${i + 1}. [${t.score}] ${t.s.service_name.en} (${t.s.service_id})`));
    if (scored.length === 0) console.log('   (No exact match - Fallback triggered)');
});
