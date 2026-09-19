const fs = require('fs');
const lines = fs.readFileSync('style.css', 'utf8').split('\n');

lines.forEach((line, idx) => {
    if (line.includes('seva-service-card')) {
        console.log(`Line ${idx + 1}: ${line}`);
    }
});
