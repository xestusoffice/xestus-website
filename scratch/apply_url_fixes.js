const fs = require('fs');
let code = fs.readFileSync('./js/digital-seva-data.js', 'utf8');

// 1. SVMCM
code = code.replace(/https:\/\/svmcm\.wbhed\.gov\.in\/rest\/registration/g, 'https://svmcm.wb.gov.in/');
code = code.replace(/https:\/\/svmcm\.wbhed\.gov\.in\/rest\/login/g, 'https://svmcm.wb.gov.in/');
code = code.replace(/https:\/\/svmcm\.wbhed\.gov\.in\//g, 'https://svmcm.wb.gov.in/');
code = code.replace(/svmcm\.wbhed\.gov\.in/g, 'svmcm.wb.gov.in');

// 2. WBSEDCL
code = code.replace(/https:\/\/www\.wbsedcl\.in\/irj\/go\/km\/docs\/internet\/webpage\/new_connection\.html/g, 'https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html');
code = code.replace(/https:\/\/www\.wbsedcl\.in\/irj\/go\/km\/docs\/internet\/webpage\/Quick_Pay\.html/g, 'https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html');

// 3. Janma-Mrityu Tathya
code = code.replace(/https:\/\/janmamrityutathya\.wb\.gov\.in\//g, 'https://janma-mrityutathya.wb.gov.in/');
code = code.replace(/janmamrityutathya\.wb\.gov\.in/g, 'janma-mrityutathya.wb.gov.in');
code = code.replace(
    /"service_id": "wb-janma-mrityu-birth-cert"[\s\S]*?"official_status_url": "https:\/\/janma-mrityutathya\.wb\.gov\.in\/"/,
    (match) => match.replace('"official_status_url": "https://janma-mrityutathya.wb.gov.in/"', '"official_status_url": "https://janma-mrityutathya.wb.gov.in/verifycertificate"')
);

// 4. Caste Certificate (castcertificatewb.gov.in)
code = code.replace(/https:\/\/castecertificatewb\.gov\.in\/check-status/g, 'https://castcertificatewb.gov.in/');
code = code.replace(/https:\/\/castecertificatewb\.gov\.in\//g, 'https://castcertificatewb.gov.in/');
code = code.replace(/castecertificatewb\.gov\.in/g, 'castcertificatewb.gov.in');

// 5. Food & Supplies (food.wb.gov.in)
code = code.replace(/"official_apply_url": "https:\/\/rcms\.wb\.gov\.in\/",/g, '"official_apply_url": "https://food.wb.gov.in/",');
code = code.replace(/"official_status_url": "https:\/\/food\.wb\.gov\.in\/food\/check-ration-card-status\.aspx",/g, '"official_status_url": "https://food.wb.gov.in/",');

// 6. WB e-Deed Property Registration session id fix
code = code.replace(/https:\/\/wbregistration\.gov\.in\/\(S\([^\)]+\)\)\/Index\.aspx/g, 'https://wbregistration.gov.in/Index.aspx');

fs.writeFileSync('./js/digital-seva-data.js', code, 'utf8');

// Validate data store loads cleanly in JS runtime
global.window = {};
eval(code);
const data = window.XESTUS_DIGITAL_SEVA_DATA;
const services = data.getServices();
console.log('Successfully updated digital-seva-data.js! Total services:', services.length);

const checkList = ['wb-svmcm-scholarship', 'wbsedcl-electricity-services', 'wb-janma-mrityu-birth-cert', 'wb-caste-certificate-sc-st-obc', 'wb-ration-card-food-dept', 'wb-edeed-property-registration'];
checkList.forEach(id => {
    const s = data.getServiceById(id);
    if (s) {
        console.log(`[${s.service_id}] Apply: ${s.official_apply_url} | Home: ${s.official_homepage} | Status: ${s.official_status_url}`);
    }
});
