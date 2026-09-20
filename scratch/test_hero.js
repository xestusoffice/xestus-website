const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const match = indexHtml.match(/<h1 class="hero-headline">[\s\S]*?<\/h1>/);
console.log('Hero Headline in index.html:');
console.log(match ? match[0] : 'NOT FOUND');

const translations = fs.readFileSync('js/translations.js', 'utf8');
console.log('EN hero.headline_sub:', translations.includes('"hero.headline_sub": "Intelligence Beyond Limits"') ? 'FOUND' : 'MISSING');
