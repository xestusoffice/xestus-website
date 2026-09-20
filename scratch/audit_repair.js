const fs = require('fs');
const path = require('path');

console.log('=== XESTUS COMPREHENSIVE REPAIR AUDIT ===');

const htmlPath = path.join(__dirname, '..', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Check DOM Elements
const expectedIds = [
    'floatingAssistantContainer',
    'floatingFollowBtn',
    'aiLauncherBtn',
    'aiChatPanel',
    'aiChatTitle',
    'aiChatClearBtn',
    'aiChatCloseBtn',
    'aiChatMessages',
    'aiChatInput',
    'aiChatSendBtn',
    'communityModal',
    'communityModalCloseBtn',
    'communityModalBackdrop',
    'btnCommunityInquire',
    'sevaDetailModal',
    'sevaCategoryModal',
    'sevaScamModal',
    'sevaIWantGrid',
    'sevaSearchInput',
    'sevaResultCount',
    'btnViewAllCategories',
    'btnOpenScamCenter',
    'sevaMasterPortalsGrid',
    'sevaServicesGrid'
];

let missingIds = [];
expectedIds.forEach(id => {
    if (!htmlContent.includes(`id="${id}"`)) {
        missingIds.push(id);
    }
});

console.log(`[DOM IDS] Checked ${expectedIds.length} critical IDs. Missing: ${missingIds.length ? missingIds.join(', ') : 'NONE (100% Match)'}`);

// 2. Check Translations
const translationsPath = path.join(__dirname, '..', 'js', 'translations.js');
let translationsCode = fs.readFileSync(translationsPath, 'utf8');

try {
    const fn = new Function('window', `${translationsCode}; return window.XESTUS_TRANSLATIONS;`);
    const mockWin = {};
    const t = fn(mockWin);
    const languages = Object.keys(t);
    console.log(`[TRANSLATIONS] Found languages: ${languages.join(', ')}`);
    
    const enKeys = Object.keys(t.en);
    languages.forEach(lang => {
        const keys = Object.keys(t[lang]);
        const diff = enKeys.filter(k => !t[lang][k]);
        console.log(`[TRANSLATIONS] ${lang.toUpperCase()}: ${keys.length} keys total. Missing from EN: ${diff.length ? diff.join(', ') : '0 (100% complete)'}`);
    });
} catch (err) {
    console.log('[TRANSLATIONS] Error parsing translations:', err.message);
}

// 3. Check CSS rules
const cssPath = path.join(__dirname, '..', 'style.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const expectedClasses = [
    'xestus-floating-assistant',
    'floating-follow-btn',
    'ai-launcher-btn',
    'ai-chat-panel',
    'ai-chat-header',
    'ai-chat-messages',
    'ai-user-message',
    'ai-bot-message',
    'ai-quick-actions',
    'ai-chip-btn',
    'ai-response-actions',
    'ai-nav-btn',
    'ai-typing-indicator',
    'ai-chat-input-area',
    'ai-send-btn',
    'community-dialog',
    'community-channel-card',
    'seva-iwant-pill',
    'seva-search-box',
    'seva-master-portals-grid',
    'seva-portal-card',
    'seva-services-grid',
    'seva-modal-dialog'
];

let missingClasses = [];
expectedClasses.forEach(cls => {
    if (!cssContent.includes(`.${cls}`)) {
        missingClasses.push(cls);
    }
});
console.log(`[CSS CLASSES] Checked ${expectedClasses.length} CSS classes. Missing: ${missingClasses.length ? missingClasses.join(', ') : 'NONE (100% Match)'}`);

console.log('=== AUDIT COMPLETE ===');
