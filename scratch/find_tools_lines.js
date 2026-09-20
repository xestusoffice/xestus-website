const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('id="tools"') || l.includes('SECTION 04 // XESTUS TOOLS')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});
