const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');

lines.forEach((l, idx) => {
    if (l.includes('<script') && l.includes('src=')) {
        console.log(`Line ${idx+1}: ${l.trim()}`);
    }
});
