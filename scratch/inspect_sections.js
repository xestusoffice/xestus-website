const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<section[^>]*id=["']([^"']+)["'][^>]*>/g;
let match;
console.log('=== SECTIONS IN INDEX.HTML ===');
while ((match = regex.exec(html)) !== null) {
  console.log('Section ID:', match[1]);
}

console.log('\n=== MODALS IN INDEX.HTML ===');
const modalRegex = /<div[^>]*class=["'][^"']*modal[^"']*["'][^>]*id=["']([^"']+)["'][^>]*>/g;
while ((match = modalRegex.exec(html)) !== null) {
  console.log('Modal ID:', match[1]);
}
