const fs = require('fs');
const path = require('path');

const imgDir = path.join(process.cwd(), 'assets', 'images');
console.log('Images in assets/images/:');
if (fs.existsSync(imgDir)) {
    fs.readdirSync(imgDir).forEach(f => {
        const full = path.join(imgDir, f);
        const st = fs.statSync(full);
        console.log(` - ${f} (${st.size} bytes)`);
    });
} else {
    console.log('Directory not found:', imgDir);
}
