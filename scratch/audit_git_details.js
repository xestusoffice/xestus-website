const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf8' });
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

console.log('=== ASSETS DIRECTORY CHECK ===');
function listFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(listFiles(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}
console.log('Files in assets/:', listFiles('assets'));

console.log('\n=== GIT LOG OF COMMITS ===');
const commits = run('git log --oneline -n 25').trim().split('\n');
commits.forEach(c => console.log(' - ' + c));

console.log('\n=== SEARCHING GIT HISTORY FOR FOUNDER IMAGES ===');
console.log(run('git log --all --full-history -- "**/founder*" "**/*sudip*" "**/assets/images/*"'));

console.log('\n=== HERO H1 TITLE ACROSS COMMITS ===');
const sampleCommits = ['HEAD', 'f898719', 'b82ac92', '436728b', '4617e99', '3f5671e', '8a280f8', '08e8184', '3149be1', '610aa6c', '2e9a34b', '8239778'];
sampleCommits.forEach(comm => {
    try {
        const html = run(`git show ${comm}:index.html`);
        const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        const heroMatch = html.match(/<section[^>]*id=["']home["'][\s\S]*?<\/section>/i);
        const founderMatch = html.match(/<section[^>]*id=["']founder["'][\s\S]*?<\/section>/i);
        console.log(`\nCommit ${comm}:`);
        if (h1Match) console.log('  H1:', h1Match[1].replace(/\s+/g, ' ').trim());
        if (founderMatch) {
            const imgMatch = founderMatch[0].match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i);
            console.log('  Founder img src:', imgMatch ? imgMatch[1] : 'No img tag');
        } else {
            console.log('  Founder section: NOT FOUND');
        }
    } catch (e) {
        console.log(`  Error on ${comm}:`, e.message.split('\n')[0]);
    }
});
