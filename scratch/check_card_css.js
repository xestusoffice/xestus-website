const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const matches = [...css.matchAll(/seva-service-card[^{]*\{[^}]*\}/gi)];
console.log('Matches for seva-service-card in style.css (' + matches.length + '):');
matches.forEach(m => console.log(m[0]));
