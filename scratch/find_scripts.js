const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const scriptMatches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Script tags in index.html:', scriptMatches.length);
scriptMatches.forEach((m, idx) => {
    console.log(`\n--- SCRIPT ${idx+1} ---`);
    console.log(m[0].substring(0, 150));
});
