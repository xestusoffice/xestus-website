const { execSync } = require('child_process');

function run(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf8' });
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

console.log('=== BRANCHES ===');
console.log(run('git branch -a'));

console.log('=== RECENT COMMITS ===');
console.log(run('git log -n 12 --oneline'));

console.log('=== SECTIONS IN COMMIT f898719 (HEAD before our edits) ===');
const headHtml = run('git show f898719:index.html');
const headSections = [...headHtml.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)];
console.log('Total sections in f898719:', headSections.length);
headSections.forEach((s, i) => console.log((i+1) + '. #' + s[1]));

console.log('\n=== SECTIONS IN COMMIT 436728b (master evolution) ===');
const evoHtml = run('git show 436728b:index.html');
const evoSections = [...evoHtml.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)];
console.log('Total sections in 436728b:', evoSections.length);
evoSections.forEach((s, i) => console.log((i+1) + '. #' + s[1]));

console.log('\n=== SECTIONS IN COMMIT 610aa6c (revamp v1) ===');
const revampHtml = run('git show 610aa6c:index.html');
const revampSections = [...revampHtml.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)];
console.log('Total sections in 610aa6c:', revampSections.length);
revampSections.forEach((s, i) => console.log((i+1) + '. #' + s[1]));
