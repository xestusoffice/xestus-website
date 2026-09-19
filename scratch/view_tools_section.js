const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const toolsIndex = html.indexOf('id="tools"');
if (toolsIndex !== -1) {
  const start = Math.max(0, toolsIndex - 100);
  const end = Math.min(html.length, toolsIndex + 3000);
  console.log(html.substring(start, end));
} else {
  console.log("Not found with id=\"tools\"");
}
