const fs = require('fs');
const js = fs.readFileSync('js/digital-seva-hub.js', 'utf8');

const fnMatches = [...js.matchAll(/function\s+([a-zA-Z0-9_$]+)\s*\(/g)];
console.log('Functions in digital-seva-hub.js:');
fnMatches.forEach(m => console.log(' - ' + m[1]));
