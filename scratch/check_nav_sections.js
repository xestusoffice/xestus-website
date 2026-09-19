const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log("=== ALL SECTION IDS IN index.html ===");
const sectionRegex = /<section[^>]*id=["']([^"']+)["']/gi;
let match;
while ((match = sectionRegex.exec(html)) !== null) {
  console.log("Section ID:", match[1]);
}

console.log("\n=== ALL NAV LINKS IN index.html ===");
const navRegex = /<a[^>]+href=["']([^"']+)["'][^>]*class=["'][^"']*nav-link[^"']*["'][^>]*>(.*?)<\/a>/gi;
while ((match = navRegex.exec(html)) !== null) {
  console.log(`Nav Link: ${match[1]} -> ${match[2].replace(/<[^>]+>/g, '').trim()}`);
}

console.log("\n=== CHECK TARGET EXISTENCE FOR NAV LINKS ===");
const allIds = new Set();
const idRegex = /id=["']([^"']+)["']/gi;
while ((match = idRegex.exec(html)) !== null) {
  allIds.add(match[1]);
}

const checkNavRegex = /<a[^>]+href=["']#([^"']+)["']/gi;
const missingTargets = [];
while ((match = checkNavRegex.exec(html)) !== null) {
  const targetId = match[1];
  if (!allIds.has(targetId)) {
    missingTargets.push(targetId);
  }
}
console.log("Missing anchor targets in index.html:", [...new Set(missingTargets)]);
