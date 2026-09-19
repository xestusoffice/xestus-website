const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const lines = css.split('\n');
console.log('Lines 1 to 200 of style.css:');
console.log(lines.slice(0, 200).join('\n'));
