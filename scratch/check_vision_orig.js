const { execSync } = require('child_process');

function run(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf8' });
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

const origHtml = run('git show 8239778:index.html');
const visionMatch = origHtml.match(/<section[^>]*id=["']vision["'][\s\S]*?<\/section>/i);
if (visionMatch) {
    console.log('=== VISION SECTION IN 8239778 ===\n', visionMatch[0]);
}

const servicesMatch = origHtml.match(/<section[^>]*id=["']services["'][\s\S]*?<\/section>/i);
if (servicesMatch) {
    console.log('=== SERVICES SECTION IN 8239778 ===\n', servicesMatch[0].substring(0, 1000));
}
