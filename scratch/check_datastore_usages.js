const fs = require('fs');
const js = fs.readFileSync('js/digital-seva-hub.js', 'utf8');

const lines = js.split('\n');
lines.forEach((l, idx) => {
    if (l.includes('dataStore')) {
        console.log(`Line ${idx+1}: ${l.trim()}`);
    }
});
