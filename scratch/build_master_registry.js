const fs = require('fs');

// Read current digital-seva-data.js to retain all existing high quality services and add the missing ones
const currentData = fs.readFileSync('js/digital-seva-data.js', 'utf8');

// Let's create the master service data registry file
// We'll write a node script to generate the full clean file.
console.log("Building master registry...");
