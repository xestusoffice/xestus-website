const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const matches = [...css.matchAll(/([^{}]+)\{([^{}]+)\}/g)];
matches.forEach(m => {
    const selector = m[1].trim();
    const body = m[2];
    if (selector.includes('seva-service-card') || selector.includes('seva-services-grid') || selector.includes('seva-services-section')) {
        console.log('\n--- SELECTOR: ' + selector + ' ---');
        console.log(body.replace(/\s+/g, ' ').trim());
    }
});
