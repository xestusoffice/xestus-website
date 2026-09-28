const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<section\b([^>]*)>/gi;
let match;
let i = 0;
while ((match = regex.exec(html)) !== null) {
  i++;
  console.log(`Section ${i}: <section ${match[1].replace(/\s+/g, ' ').trim()}>`);
}
