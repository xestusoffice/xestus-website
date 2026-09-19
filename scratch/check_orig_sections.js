const { execSync } = require('child_process');

function run(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf8' });
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

const origHtml = run('git show 8239778:index.html');
const origSections = [...origHtml.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)];
console.log('Sections in original commit 8239778 (' + origSections.length + '):');
origSections.forEach((s, i) => console.log((i+1) + '. #' + s[1]));
