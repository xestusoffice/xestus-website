const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const toolsSection = html.match(/<section[^>]*id=["']tools["'][\s\S]*?<\/section>/i)[0];

const cardRegex = /<div class=["']stitch-tool-card["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
// let's extract all tool cards
const cards = [];
const cardSplit = toolsSection.split(/<div class=["']stitch-tool-card["']/gi);
cardSplit.slice(1).forEach((chunk, i) => {
  const titleMatch = chunk.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').trim() : 'Unknown';
  const badgeMatch = chunk.match(/class=["'](stitch-tool-badge-[^"']+)["'][^>]*>([\s\S]*?)<\/span>/i);
  const badge = badgeMatch ? badgeMatch[2].trim() : 'None';
  const linkMatch = chunk.match(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
  const link = linkMatch ? linkMatch[1] : (chunk.match(/<button[^>]+disabled/i) ? 'DISABLED BUTTON' : 'No link');
  cards.push({ title, badge, link });
});

console.log("=== TOOL CARDS IN INDEX.HTML ===");
console.table(cards);
