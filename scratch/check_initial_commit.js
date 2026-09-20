const { execSync } = require('child_process');

function run(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf8' });
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

console.log('=== FIRST 5 COMMITS ===');
console.log(run('git log --reverse -n 5 --oneline'));

const firstCommit = run('git log --reverse --format="%h"').split('\n')[0].trim();
console.log('Initial commit:', firstCommit);
console.log(run('git show --stat ' + firstCommit));

const firstHtml = run('git show ' + firstCommit + ':index.html');
const firstSections = [...firstHtml.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)];
console.log('\nSections in initial commit (' + firstSections.length + '):');
firstSections.forEach((s, i) => console.log((i+1) + '. #' + s[1]));
