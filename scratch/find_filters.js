const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const matches = js.match(/filter-btn|data-filter|stitchToolsGrid/gi) || [];
console.log("Filter matches in script.js:", matches);

const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('filter-btn') || l.includes('portfolio-container') || l.includes('toolsGrid') || l.includes('stitchToolsGrid')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
