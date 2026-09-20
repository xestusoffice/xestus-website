const fs = require('fs');
const lines = fs.readFileSync('style.css', 'utf8').split('\n');

lines.forEach((l, idx) => {
    if (l.includes('.hud-tag') || l.includes('.modal-tab-nav')) {
        console.log(`Line ${idx+1}: ${l}`);
    }
});
