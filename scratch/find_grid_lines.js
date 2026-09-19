const fs = require('fs');
const lines = fs.readFileSync('style.css', 'utf8').split('\n');

lines.forEach((line, idx) => {
    if (line.includes('seva-services-grid') || line.includes('seva-master-portals-grid') || line.includes('digital-services')) {
        console.log(`Line ${idx + 1}: ${line}`);
    }
});
