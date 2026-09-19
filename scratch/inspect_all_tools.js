const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'tools');

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles(toolsDir);
console.log("=== ALL TOOLS HTML FILES ===");
htmlFiles.forEach(f => {
  const rel = path.relative(toolsDir, f);
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n--- Tool: ${rel} (${content.length} bytes) ---`);
  // Check scripts referenced
  const scriptMatches = content.match(/<script[^>]*src=["']([^"']+)["']/g) || [];
  const inlineScripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g) || [];
  console.log(`  Scripts referenced: ${scriptMatches.join(', ') || 'None'}`);
  console.log(`  Inline scripts count: ${inlineScripts.length}`);
  
  // Check main input / output elements
  const hasTextarea = /<textarea/i.test(content);
  const hasInputs = /<input/i.test(content);
  const hasButtons = /<button/i.test(content);
  console.log(`  Has Textarea: ${hasTextarea}, Inputs: ${hasInputs}, Buttons: ${hasButtons}`);
});
