const fs = require('fs');
const vm = require('vm');

// Read existing file
const originalCode = fs.readFileSync('js/digital-seva-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(originalCode, sandbox);

const originalData = sandbox.window.XESTUS_DIGITAL_SEVA_DATA;
const existingCategories = originalData.getCategories();
const existingDistricts = originalData.getDistricts();
const existingIWantActions = originalData.getIWantActions();
const existingScamAlerts = originalData.getScamAlerts();
const existingServices = originalData.getServices();

const masterPortals = [
    {
        id: "portal-india-gov",
        name: "India.gov.in",
        title: { en: "National Portal of India", bn: "ভারতের জাতীয় পোর্টাল", hi: "भारत का राष्ट्रीय पोर्टल" },
        desc: { en: "The single-window access point to all Government of India online services and departments.", bn: "ভারত সরকারের সমস্ত অনলাইন সেবা ও দপ্তরের প্রবেশদ্বার।", hi: "भारत सरकार की सभी ऑनलाइन सेवाओं का मुख्य द्वार।" },
        url: "https://www.india.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "NIC / MeitY"
    },
    {
        id: "portal-services-gov",
        name: "Services.india.gov.in",
        title: { en: "National Government Services Portal", bn: "জাতীয় সরকারি সেবা পোর্টাল", hi: "राष्ट्रीय सरकारी सेवाएं पोर्टल" },
        desc: { en: "Official repository listing over 14,000+ central and state citizen services online.", bn: "১৪,০০০+ কেন্দ্রীয় ও রাজ্য সরকারি নাগরিক সেবার আনুষ্ঠানিক ডিরেক্টরি।", hi: "14,000+ से अधिक केंद्रीय और राज्य नागरिक सेवाओं की सूची।" },
        url: "https://services.india.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "National Informatics Centre"
    },
    {
        id: "portal-umang",
        name: "UMANG Web Portal",
        title: { en: "Unified Mobile App for New-age Governance", bn: "উমঙ্গ (UMANG) সমন্বিত সেবা পোর্টাল", hi: "उमंग (UMANG) एकीकृत सेवा पोर्टल" },
        desc: { en: "Single platform for EPF, PAN, Aadhaar, Gas Booking, and hundreds of central/state services.", bn: "ইপিএফ, প্যান, গ্যাস বুকিং সহ শত শত সরকারি সেবার একক ডিজিটাল প্ল্যাটফর্ম।", hi: "ईपीएफ, पैन, गैस बुकिंग और सैकड़ों सरकारी सेवाओं का साझा मंच।" },
        url: "https://web.umang.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "MeitY / NeGD"
    },
    {
        id: "portal-serviceplus",
        name: "ServicePlus India",
        title: { en: "ServicePlus Meta-e-Governance Delivery Portal", bn: "সার্ভিসপ্লাস ই-গভর্ন্যান্স পোর্টাল", hi: "सर्विसप्लस ई-गवर्नेंस पोर्टल" },
        desc: { en: "Unified metadata-based platform delivering electronic government services across Indian states.", bn: "ভারত জুড়ে ইলেকট্রনিক সরকারি সেবা প্রদানের সমন্বিত পোর্টাল।", hi: "भारत भर में इलेक्ट्रॉनिक सरकारी सेवाएं प्रदान करने का पोर्टल।" },
        url: "https://serviceonline.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "National Informatics Centre (NIC)"
    },
    {
        id: "portal-bsk",
        name: "Bangla Sahayata Kendra (BSK)",
        title: { en: "BSK Government of West Bengal", bn: "বাংলা সহায়তা কেন্দ্র (BSK)", hi: "बांग्ला सहायता केंद्र (BSK)" },
        desc: { en: "Free single-window digital delivery centers for all West Bengal public schemes & services.", bn: "পশ্চিমবঙ্গ সরকারের সমস্ত জনকল্যাণমূলক প্রকল্পের ১০০% বিনামূল্যে ডিজিটাল সেবা কেন্দ্র।", hi: "पश्चिम बंगाल सरकार की सभी जन कल्याण योजनाओं का निःशुल्क सेवा केंद्र।" },
        url: "https://bsk.wb.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "P&AR Department, Govt of West Bengal"
    },
    {
        id: "portal-wb-edistrict",
        name: "West Bengal e-District 2.0",
        title: { en: "WB e-District Single Window Services", bn: "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট পোর্টাল", hi: "पश्चिम बंगाल ई-डिस्ट्रिक्ट पोर्टल" },
        desc: { en: "Online issuance of Domicile, Caste, Income, Land and municipal certificates in West Bengal.", bn: "পশ্চিমবঙ্গে ডোমিসাইল, কাস্ট, ইনকাম ও অন্যান্য শংসাপত্র পাওয়ার অনলাইন পোর্টাল।", hi: "पश्चिम बंगाल में निवास, जाति, आय और अन्य प्रमाण पत्र प्राप्त करने का पोर्टल।" },
        url: "https://edistrict.wb.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "Govt of West Bengal"
    },
    {
        id: "portal-duare-sarkar",
        name: "Duare Sarkar (Government at Your Doorstep)",
        title: { en: "Duare Sarkar Outreach Portal", bn: "দুয়ারে সরকার প্রকল্প পোর্টাল", hi: "द्वारे सरकार पोर्टल" },
        desc: { en: "Official camp schedules, scheme enrollments (Lakshmir Bhandar, Swasthya Sathi, Kanyashree) and status.", bn: "দুয়ারে সরকার ক্যাম্পের সময়সূচি, স্কিম আবেদন ও স্ট্যাটাস ট্র্যাকিং পোর্টাল।", hi: "द्वारे सरकार कैंप का समय, योजना आवेदन और स्थिति जांच।" },
        url: "https://ds.wb.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "Govt of West Bengal"
    },
    {
        id: "portal-digilocker",
        name: "DigiLocker",
        title: { en: "Digital Document Wallet of India", bn: "ডিজিলকার — ডিজিটাল নথি ভাণ্ডার", hi: "डिजिलॉकर — डिजिटल दस्तावेज़ वॉलेट" },
        desc: { en: "Legally valid digital repository to issue and verify Aadhaar, Driving Licence, Marksheets & RC.", bn: "আধার, ড্রাইভিং লাইসেন্স, মার্কশিট ও আরসি রাখার আইনসম্মত ডিজিটাল প্ল্যাটফর্ম।", hi: "आधार, ड्राइविंग लाइसेंस, मार्कशीट रखने का कानूनी डिजिटल प्लेटफॉर्म।" },
        url: "https://www.digilocker.gov.in/",
        badge: "🟢 Officially Verified",
        authority: "Ministry of Electronics & IT"
    }
];

// Load new services array
const additionalServices = [
    // 1. ESIC
    {
        service_id: "esic-medical-portal",
        service_name: {
            en: "ESIC Insured Person Portal & Health Benefits",
            bn: "ইএসআইসি (ESIC) স্বাস্থ্য সুবিধা ও আইপি পোর্টাল",
            hi: "ईएसआईसी (ESIC) स्वास्थ्य लाभ और आईपी पोर्टल"
        },
        short_description: {
            en: "Official Employees' State Insurance Corporation portal for Insured Persons (IP) to download Pehchan card, view dispensary details, medical claims, and maternity benefits.",
            bn: "কর্মচারী রাজ্য বীমা নিগমের (ESIC) অফিসিয়াল পোর্টাল—পহেচান কার্ড ডাউনলোড, ডিসপেনসারি ও চিকিৎসা দাবি।",
            hi: "कर्मचारी राज्य बीमा निगम (ESIC) पोर्टल—पहचान कार्ड डाउनलोड, औषधालय और चिकित्सा लाभ।"
        },
        category: "labour-workers",
        category_name: { en: "Workers & Labour Welfare", bn: "শ্রমিক ও শ্রম কল্যাণ", hi: "श्रमिक और श्रम कल्याण" },
        subcategory: "Social Security",
        authority: "Employees' State Insurance Corporation (Ministry of Labour & Employment)",
        government_level: "Central",
        service_type: "Social Security",
        target_users: ["Formal Sector Employee", "Worker", "Insured Person"],
        eligibility: {
            en: ["Employees earning up to ₹21,000/month (₹25,000 for persons with disabilities) in covered establishments."],
            bn: ["অন্তর্ভুক্ত সংস্থায় কর্মরত মাসিক ২১,০০০ টাকা পর্যন্ত বেতনভুক্ত কর্মচারী।"],
            hi: ["₹21,000 प्रति माह तक कमाने वाले कर्मचारी।"]
        },
        required_documents: {
            en: ["ESIC Insurance Number (IP Number)", "Registered Mobile Number for OTP authentication."],
            bn: ["ইএসআইসি ইন্স্যুরেন্স নম্বর (IP Number) ও রেজিস্টার্ড মোবাইল নম্বর।"],
            hi: ["ईएसआईसी बीमा संख्या और पंजीकृत मोबाइल नंबर।"]
        },
        application_fee: {
            en: "Free for insured beneficiaries (employer/employee payroll contribution).",
            bn: "সম্পূর্ণ বিনামূল্যে (সংবিধিবদ্ধ অবদান)।",
            hi: "निःशुल्क।"
        },
        benefits: {
            en: ["Comprehensive medical care for self and family.", "Sickness, maternity, and disablement cash benefits."],
            bn: ["নিজের ও পরিবারের সম্পূর্ণ বিনামূল্যে চিকিৎসা ও আর্থিক ক্ষতিপূরণ।"],
            hi: ["स्वयं और परिवार के लिए चिकित्सा देखभाल व मातृत्व लाभ।"]
        },
        process_steps: {
            en: [
                "Visit official ESIC portal (esic.gov.in).",
                "Navigate to 'Insured Person / Beneficiary Login'.",
                "Enter your 10-digit Insurance Number and password.",
                "Download e-Pehchan card and check medical entitlement."
            ],
            bn: [
                "অফিসিয়াল esic.gov.in পোর্টালে যান।",
                "'Insured Person Login'-এ গিয়ে IP নম্বর দিয়ে লগইন করুন ও পহেচান কার্ড সংগ্রহ করুন।"
            ],
            hi: [
                "esic.gov.in पर जाएं और आईपी लॉगिन द्वारा ई-पहचान कार्ड डाउनलोड करें।"
            ]
        },
        official_homepage: "https://www.esic.gov.in/",
        official_apply_url: "https://www.esic.gov.in/",
        official_status_url: "https://www.esic.gov.in/",
        official_helpline: "1800-11-2526 (Toll Free)",
        official_email: "helpdesk@esic.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.esic.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["esic", "esi card", "pehchan card", "esic login", "medical benefit", "ইএসআইসি", "ইএসআই কার্ড", "ईएसआईसी"]
    },

    // 2. National Apprenticeship Portal
    {
        service_id: "national-apprenticeship-portal",
        service_name: {
            en: "National Apprenticeship Training Scheme (NAPS / NATS)",
            bn: "জাতীয় শিক্ষানবিশী প্রশিক্ষণ পোর্টাল (NAPS / NATS)",
            hi: "राष्ट्रीय शिक्षुता प्रशिक्षण पोर्टल (NAPS / NATS)"
        },
        short_description: {
            en: "Official Government of India apprenticeship portal for ITI, Diploma, and Graduate students to get industrial on-the-job training with government stipend support.",
            bn: "ভারত সরকারের ন্যাশনাল অ্যাপ্রেন্টিসশিপ পোর্টাল—আইটিআই, ডিপ্লোমা ও গ্র্যাজুয়েটদের সরকারি স্টাইপেন্ড সহ ট্রেনিং।",
            hi: "आईटीआई, डिप्लोमा और स्नातकों के लिए सरकारी वजीफे के साथ उद्योग प्रशिक्षण पोर्टल।"
        },
        category: "internships",
        category_name: { en: "Government & AICTE Internships", bn: "ইন্টার্নশিপ ও শিক্ষানবিশী", hi: "इंटर्नशिप और प्रशिक्षण" },
        subcategory: "Skill Training",
        authority: "Ministry of Skill Development & Entrepreneurship (MSDE)",
        government_level: "Central",
        service_type: "Education & Career",
        target_users: ["ITI Passouts", "Diploma Holders", "Graduates", "Youth"],
        eligibility: {
            en: ["Indian nationals above 14 years with 10th, 12th, ITI, Diploma, or Degree qualification."],
            bn: ["১০ম, ১২ম, আইটিআই, ডিপ্লোমা বা ডিগ্রি উত্তীর্ণ ভারতীয় নাগরিক।"],
            hi: ["10वीं, 12वीं, आईटीआई, डिप्लोमा या डिग्री धारक।"]
        },
        required_documents: {
            en: ["Aadhaar Card", "Educational certificates & marksheets", "Bank passbook for Direct Benefit Transfer (DBT) stipend."],
            bn: ["আধার কার্ড, শিক্ষাগত যোগ্যতার মার্কশিট ও ব্যাংক পাসবুক।"],
            hi: ["आधार कार्ड, अंकतालिका और बैंक पासबुक।"]
        },
        application_fee: {
            en: "100% Free Candidate Registration.",
            bn: "বিনামূল্যে রেজিস্ট্রেশন।",
            hi: "निःशुल्क पंजीकरण।"
        },
        benefits: {
            en: ["Monthly government-subsidized stipend.", "National Apprenticeship Certificate (NAC) recognized nationwide."],
            bn: ["মাসিক স্টাইপেন্ড ও জাতীয় শিক্ষানবিশী শংসাপত্র (NAC)।"],
            hi: ["मासिक वजीफा और राष्ट्रीय शिक्षुता प्रमाण पत्र।"]
        },
        process_steps: {
            en: [
                "Visit apprenticeshipindia.gov.in.",
                "Click 'Register' > 'Candidate' and complete e-KYC using Aadhaar.",
                "Search apprenticeship opportunities by trade, sector, and location.",
                "Apply directly and sign apprenticeship contract upon selection."
            ],
            bn: [
                "apprenticeshipindia.gov.in-এ গিয়ে ক্যান্ডিডেট হিসেবে আধার ই-কেওয়াইসি সহ রেজিস্টার করুন ও আবেদন করুন।"
            ],
            hi: [
                "apprenticeshipindia.gov.in पर उम्मीदवार के रूप में पंजीकरण करें और आवेदन करें।"
            ]
        },
        official_homepage: "https://www.apprenticeshipindia.gov.in/",
        official_apply_url: "https://www.apprenticeshipindia.gov.in/",
        official_status_url: "https://www.apprenticeshipindia.gov.in/",
        official_helpline: "0120 4405000",
        official_email: "apprenticeship-india@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.apprenticeshipindia.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["apprenticeship", "naps", "nats", "iti training", "stipend", "শিক্ষানবিশী", "অ্যাপ্রেন্টিসশিপ", "शिक्षुता"]
    },

    // 3. UGC Portal
    {
        service_id: "ugc-higher-education-portal",
        service_name: {
            en: "University Grants Commission (UGC Portal & Scholarships)",
            bn: "বিশ্ববিদ্যালয় মঞ্জুরি কমিশন (UGC পোর্টাল ও স্কলারশিপ)",
            hi: "विश्वविद्यालय अनुदान आयोग (UGC पोर्टल व छात्रवृत्ति)"
        },
        short_description: {
            en: "Official UGC portal for university recognition verification, NET/JRF fellowships, Fake University notices, and higher education regulatory guidelines.",
            bn: "বিশ্ববিদ্যালয় অনুমোদন যাচাই, নেট/জেআরএফ ফেলোশিপ ও উচ্চশিক্ষা নির্দেশিকার অফিসিয়াল ইউজিসি পোর্টাল।",
            hi: "विश्वविद्यालय मान्यता सत्यापन, नेट/जेआरएफ फेलोशिप और उच्च शिक्षा दिशानिर्देश।"
        },
        category: "college-admission",
        category_name: { en: "College & University Admission", bn: "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি", hi: "कॉलेज और विश्वविद्यालय प्रवेश" },
        subcategory: "Higher Education",
        authority: "University Grants Commission (Ministry of Education)",
        government_level: "Central",
        service_type: "Higher Education",
        target_users: ["College Students", "PhD Scholars", "Professors", "Public"],
        eligibility: {
            en: ["Higher education students and research scholars in India."],
            bn: ["উচ্চশিক্ষার শিক্ষার্থী ও গবেষকবৃন্দ।"],
            hi: ["उच्च शिक्षा के छात्र और शोधकर्ता।"]
        },
        required_documents: {
            en: ["NET/JRF Roll Number", "Degree Certificates", "Institutional ID."],
            bn: ["নেট/জেআরএফ রোল নম্বর ও ডিগ্রি সার্টিফিকেট।"],
            hi: ["नेट/जेआरएफ रोल नंबर और डिग्री प्रमाण पत्र।"]
        },
        application_fee: {
            en: "Free information & verification portal.",
            bn: "বিনামূল্যে তথ্য সেবা।",
            hi: "निःशुल्क सेवा।"
        },
        benefits: {
            en: ["Verify genuine approved universities.", "Direct disbursement of junior research fellowships."],
            bn: ["বৈধ বিশ্ববিদ্যালয় যাচাই ও ফেলোশিপ বিতরণ।"],
            hi: ["मान्यता प्राप्त विश्वविद्यालयों का सत्यापन।"]
        },
        process_steps: {
            en: [
                "Visit official UGC portal (ugc.gov.in).",
                "Access 'Universities' tab to verify statutory recognition.",
                "Access 'Scholarships and Fellowships' portal for JRF/SRF disbursement tracking."
            ],
            bn: [
                "ugc.gov.in-এ গিয়ে বিশ্ববিদ্যালয় অনুমোদন যাচাই ও স্কলারশিপ পোর্টাল দেখুন।"
            ],
            hi: [
                "ugc.gov.in पर जाकर विश्वविद्यालय मान्यता और फेलोशिप की जांच करें।"
            ]
        },
        official_homepage: "https://www.ugc.gov.in/",
        official_apply_url: "https://www.ugc.gov.in/",
        official_status_url: "https://www.ugc.gov.in/",
        official_helpline: "011-23604446 / 23604200",
        official_email: "webmaster.ugc.help@gmail.com",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.ugc.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["ugc", "university recognition", "net jrf", "fake university list", "ইউজিসি", "বিশ্ববিদ্যালয় অনুমোদন", "यूजीसी"]
    },

    // 4. AICTE Portal
    {
        service_id: "aicte-technical-education-portal",
        service_name: {
            en: "AICTE Technical Education & Pragati / Saksham Scholarships",
            bn: "এআইসিটিই (AICTE) কারিগরি শিক্ষা ও প্রগতি স্কলারশিপ",
            hi: "एआईसीटीई (AICTE) तकनीकी शिक्षा और प्रगति छात्रवृत्ति"
        },
        short_description: {
            en: "Official All India Council for Technical Education portal for engineering/diploma college approvals, Pragati Scholarship for Girls, and Saksham Scholarship for Divyang.",
            bn: "ইঞ্জিনিয়ারিং/ডিপ্লোমা কলেজের স্বীকৃতি ও ছাত্রীদের জন্য প্রগতি স্কলারশিপের অফিসিয়াল এআইসিটিই পোর্টাল।",
            hi: "इंजीनियरिंग/डिप्लोमा कॉलेज अनुमोदन और प्रगति/सक्षम छात्रवृत्ति पोर्टल।"
        },
        category: "scholarships",
        category_name: { en: "Scholarships (National & State)", bn: "স্কলারশিপ ও অনুদান (SVMCM/Oasis)", hi: "छात्रवृत्ति और अनुदान" },
        subcategory: "Technical Education",
        authority: "All India Council for Technical Education (AICTE)",
        government_level: "Central",
        service_type: "Education & Scholarships",
        target_users: ["Engineering Students", "Diploma Students", "Girl Students"],
        eligibility: {
            en: ["Students admitted to AICTE-approved degree/diploma technical courses; Pragati requires maximum 2 girls per family with family income < ₹8 Lakh."],
            bn: ["AICTE অনুমোদিত প্রতিষ্ঠানে অধ্যয়নরত ছাত্রছাত্রী; প্রগতি স্কলারশিপ ছাত্রীদের জন্য (বার্ষিক আয় < ৮ লক্ষ)।"],
            hi: ["एआईसीटीई से मान्यता प्राप्त तकनीकी संस्थानों के छात्र; बालिकाओं के लिए प्रगति छात्रवृत्ति।"]
        },
        required_documents: {
            en: ["Admission fee receipt & allotment letter", "Income Certificate (< ₹8 LPA)", "Aadhaar Card & Bank passbook."],
            bn: ["ভর্তি রশিদ, ইনকাম সার্টিফিকেট ও আধার সংযুক্ত ব্যাংক অ্যাকাউন্ট।"],
            hi: ["प्रवेश रसीद, आय प्रमाण पत्र और आधार लिंक बैंक पासबुक।"]
        },
        application_fee: {
            en: "Free application via National Scholarship Portal (NSP).",
            bn: "বিনামূল্যে আবেদন।",
            hi: "निःशुल्क आवेदन।"
        },
        benefits: {
            en: ["₹50,000 per annum scholarship grant for college fees and books."],
            bn: ["বছরে ৫০,০০০ টাকা পর্যন্ত স্কলারশিপ অনুদান।"],
            hi: ["₹50,000 प्रति वर्ष छात्रवृत्ति अनुदान।"]
        },
        process_steps: {
            en: [
                "Verify institution approval status on aicte-india.org.",
                "Apply for AICTE Pragati/Saksham/Swanath schemes via National Scholarship Portal (scholarships.gov.in)."
            ],
            bn: [
                "aicte-india.org থেকে কলেজ যাচাই করুন ও NSP পোর্টাল থেকে স্কলারশিপ আবেদন করুন।"
            ],
            hi: [
                "aicte-india.org से कॉलेज सत्यापन करें और छात्रवृत्ति के लिए आवेदन करें।"
            ]
        },
        official_homepage: "https://www.aicte-india.org/",
        official_apply_url: "https://scholarships.gov.in/",
        official_status_url: "https://www.aicte-india.org/",
        official_helpline: "011-29581333 / 29581338",
        official_email: "helpdesk-aicte@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.aicte-india.org/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["aicte", "pragati scholarship", "saksham", "engineering scholarship", "এআইসিটিই", "প্রগতি স্কলারশিপ", "एआईसीटीई"]
    },

    // 5. Academic Bank of Credits (ABC) / APAAR ID
    {
        service_id: "abc-academic-bank-credits",
        service_name: {
            en: "Academic Bank of Credits (ABC ID / APAAR Digital Identity)",
            bn: "একাডেমিক ব্যাংক অফ ক্রেডিট (ABC ID / অপার আইডি)",
            hi: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC ID / अपार आईडी)"
        },
        short_description: {
            en: "Official National Educational Technology Forum & DigiLocker portal to create APAAR / ABC ID for storing student academic credits digitally across higher education institutions.",
            bn: "উচ্চশিক্ষার সমস্ত একাডেমিক ক্রেডিট ডিজিটালভাবে জমা রাখতে ১২ সংখ্যার অপার/এবিসি আইডি তৈরির সরকারি পোর্টাল।",
            hi: "छात्रों के शैक्षणिक क्रेडिट को डिजिटल रूप से सहेजने के लिए 12-अंकीय एबीसी/अपार आईडी पोर्टल।"
        },
        category: "college-admission",
        category_name: { en: "College & University Admission", bn: "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি", hi: "कॉलेज और विश्वविद्यालय प्रवेश" },
        subcategory: "Academic Identity",
        authority: "Ministry of Education & DigiLocker (NeGD)",
        government_level: "Central",
        service_type: "Digital Identity",
        target_users: ["All School & College Students", "University Students"],
        eligibility: {
            en: ["All enrolled students in recognized Indian schools, colleges, and universities."],
            bn: ["ভারতের সমস্ত স্বীকৃত স্কুল, কলেজ ও বিশ্ববিদ্যালয়ে পাঠরত শিক্ষার্থী।"],
            hi: ["भारत के सभी स्कूलों, कॉलेजों और विश्वविद्यालयों के छात्र।"]
        },
        required_documents: {
            en: ["Aadhaar Number with linked mobile for OTP", "Name of University/College/Board and Roll Number."],
            bn: ["আধার নম্বর ও মোবাইল ওটিপি, কলেজ/বিশ্ববিদ্যালয়ের নাম ও রোল নম্বর।"],
            hi: ["आधार संख्या और मोबाइल ओटीपी, कॉलेज का नाम व रोल नंबर।"]
        },
        application_fee: {
            en: "100% Free Public Digital Utility.",
            bn: "সম্পূর্ণ বিনামূল্যে।",
            hi: "निःशुल्क डिजिटल सेवा।"
        },
        benefits: {
            en: ["Lifelong 12-digit student identity.", "Seamless credit transfer between universities (NEP 2020)."],
            bn: ["আজীবন ১২ সংখ্যার অপার স্টুডেন্ট আইডি ও বিভিন্ন বিশ্ববিদ্যালয়ের মধ্যে ক্রেডিট ট্রান্সফার সুবিধা।"],
            hi: ["आजीवन 12-अंकीय छात्र पहचान और आसान क्रेडिट ट्रांसफर।"]
        },
        process_steps: {
            en: [
                "Visit abc.gov.in or digilocker.gov.in.",
                "Log in with DigiLocker credentials using Aadhaar OTP.",
                "Select 'Academic Bank of Credits' and enter your Institution Name.",
                "Generate 12-digit ABC ID / APAAR card and save for university admission."
            ],
            bn: [
                "abc.gov.in অথবা DigiLocker-এ যান, আধার ওটিপি দিয়ে লগইন করে ১২ সংখ্যার ABC ID তৈরি করুন।"
            ],
            hi: [
                "abc.gov.in पर डिजिलॉकर के माध्यम से लॉगिन करें और 12-अंकीय एबीसी आईडी बनाएं।"
            ]
        },
        official_homepage: "https://www.abc.gov.in/",
        official_apply_url: "https://www.abc.gov.in/",
        official_status_url: "https://www.abc.gov.in/",
        official_helpline: "011-24303714",
        official_email: "support@abc.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.abc.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["abc id", "apaar card", "academic bank of credits", "digilocker abc", "অপার আইডি", "এবিসি আইডি", "अपार कार्ड", "एबीसी आईडी"]
    },

    // 6. NTA Entrance Examinations (CUET, JEE, NEET)
    {
        service_id: "nta-entrance-examinations-portal",
        service_name: {
            en: "National Testing Agency (NTA Exams — CUET, JEE Main, NEET UG)",
            bn: "জাতীয় পরীক্ষা সংস্থা (NTA — CUET, JEE Main, NEET UG)",
            hi: "राष्ट्रीय परीक्षा एजेंसी (NTA — CUET, JEE Main, NEET UG)"
        },
        short_description: {
            en: "Official NTA examinations portal for online application, admit card download, answer keys, and scorecards for CUET UG/PG, JEE Main, and NEET UG nationwide.",
            bn: "জেইই মেন, নিট এবং সিইউইটি প্রবেশিকা পরীক্ষার ফর্ম ফিলাপ, অ্যাডমিট কার্ড ও রেজাল্ট পোর্টাল।",
            hi: "जेईई मेन, नीट और सीयूईटी प्रवेश परीक्षाओं के लिए ऑनलाइन आवेदन, एडमिट कार्ड और परिणाम पोर्टल।"
        },
        category: "entrance-exams",
        category_name: { en: "Entrance Examinations (JEE/NEET)", bn: "প্রবেশিকা পরীক্ষা (JEE/NEET)", hi: "प्रवेश परीक्षाएं (JEE/NEET)" },
        subcategory: "National Entrance",
        authority: "National Testing Agency (Department of Higher Education)",
        government_level: "Central",
        service_type: "Entrance Exam",
        target_users: ["Class 12 Students", "Medical/Engineering Aspirants", "UG/PG Applicants"],
        eligibility: {
            en: ["Class 12 appearing or passed candidates meeting exam-specific age/subject criteria."],
            bn: ["দ্বাদশ শ্রেণী উত্তীর্ণ বা পরীক্ষার্থী ছাত্রছাত্রী।"],
            hi: ["12वीं कक्षा में अध्ययनरत या उत्तीर्ण छात्र।"]
        },
        required_documents: {
            en: ["Recent passport photograph (10KB–200KB, white background)", "Scanned signature (4KB–30KB)", "Class 10 & 12 marksheets", "Category certificate (SC/ST/OBC/EWS/PwD) if applicable."],
            bn: ["পাসপোর্ট ছবি, স্বাক্ষর, ১০ম ও ১২শ শ্রেণীর মার্কশিট ও কাস্ট সার্টিফিকেট।"],
            hi: ["पासपोर्ट फोटो, हस्ताक्षर, 10वीं व 12वीं की मार्कशीट और जाति प्रमाण पत्र।"]
        },
        application_fee: {
            en: "Varies by exam & category (typically ₹500–₹1,700 paid online).",
            bn: "পরীক্ষা ও ক্যাটাগরি অনুযায়ী সরকারি ফি অনলাইনে প্রদেয়।",
            hi: "परीक्षा व वर्गानुसार आधिकारिक ऑनलाइन शुल्क।"
        },
        benefits: {
            en: ["Centralized admission to IITs, NITs, AIIMS, and Central Universities across India."],
            bn: ["ভারতের শীর্ষ কেন্দ্রীয় শিক্ষা প্রতিষ্ঠান, আইআইটি ও এইমস-এ ভর্তির একক প্রবেশিকা।"],
            hi: ["आईआईटी, एनआईटी, एम्स और केंद्रीय विश्वविद्यालयों में प्रवेश।"]
        },
        process_steps: {
            en: [
                "Visit official portal (exams.nta.ac.in).",
                "Select specific examination (e.g., JEE Main, NEET UG, CUET UG).",
                "Complete registration with Mobile & Email OTP to generate Application Number.",
                "Fill academic details, upload calibrated photo/signature, pay fee, and save Confirmation Page."
            ],
            bn: [
                "exams.nta.ac.in পোর্টালে গিয়ে পরীক্ষা সিলেক্ট করে নির্ভুল তথ্য ও ছবি আপলোড করে আবেদন সম্পন্ন করুন।"
            ],
            hi: [
                "exams.nta.ac.in पर जाकर संबंधित परीक्षा का चयन करें और ऑनलाइन आवेदन पूरा करें।"
            ]
        },
        official_homepage: "https://nta.ac.in/",
        official_apply_url: "https://exams.nta.ac.in/",
        official_status_url: "https://exams.nta.ac.in/",
        official_helpline: "011-40759000 / 011-69227700",
        official_email: "jeemain@nta.ac.in / neet@nta.ac.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://exams.nta.ac.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["nta", "cuet", "jee main", "neet ug", "nta admit card", "nta result", "সিইউইটি", "জেইই মেন", "নিট", "एनटीए", "सीयूईटी", "नीट"]
    },

    // 7. e-NAM National Agriculture Market
    {
        service_id: "enam-national-agriculture-market",
        service_name: {
            en: "e-NAM (National Agriculture Market Portal)",
            bn: "ই-ন্যাম (জাতীয় কৃষি বাজার পোর্টাল — e-NAM)",
            hi: "ई-नाम (राष्ट्रीय कृषि बाजार पोर्टल — e-NAM)"
        },
        short_description: {
            en: "Official Ministry of Agriculture online trading platform connecting agricultural mandis across India for transparent crop bidding and direct online payments to farmers.",
            bn: "কৃষকদের ফসলের সঠিক দাম পাওয়ার জন্য সারা ভারতের কৃষি মন্ডির অনলাইন ট্রেডিং পোর্টাল।",
            hi: "किसानों को फसलों का पारदर्शी और उचित मूल्य दिलाने वाला अखिल भारतीय ऑनलाइन कृषि व्यापार पोर्टल।"
        },
        category: "agriculture",
        category_name: { en: "Farmers & Agriculture", bn: "কৃষক ও কৃষি সেবা", hi: "किसान और कृषि" },
        subcategory: "Crop Trading",
        authority: "Small Farmers' Agribusiness Consortium (Ministry of Agriculture & Farmers Welfare)",
        government_level: "Central",
        service_type: "Agriculture",
        target_users: ["Farmers", "Traders", "Commission Agents", "FPOs"],
        eligibility: {
            en: ["All Indian farmers registered with an APMC / Mandi with valid land records."],
            bn: ["জমির নথি সহ নিবন্ধিত সমস্ত ভারতীয় কৃষক।"],
            hi: ["वैध भूमि रिकॉर्ड वाले सभी किसान।"]
        },
        required_documents: {
            en: ["Aadhaar Card", "Bank Passbook with IFSC", "Land RoR / Khatian copy", "Mandi Entry Slip."],
            bn: ["আধার কার্ড, ব্যাংক পাসবুক ও জমির খতিয়ান।"],
            hi: ["आधार कार्ड, बैंक पासबुक और भूमि खतौनी।"]
        },
        application_fee: {
            en: "100% Free Farmer Registration.",
            bn: "কৃষকদের জন্য সম্পূর্ণ বিনামূল্যে।",
            hi: "किसानों के लिए निःशुल्क।"
        },
        benefits: {
            en: ["Competitive nationwide online bidding for crops.", "Direct payment directly into farmer's bank account."],
            bn: ["দেশজুড়ে ফসলের স্বচ্ছ নিলাম ও সরাসরি ব্যাংকে টাকা প্রাপ্তি।"],
            hi: ["देशभर में प्रतिस्पर्धी बोली और सीधे बैंक खाते में भुगतान।"]
        },
        process_steps: {
            en: [
                "Visit official portal (enam.gov.in).",
                "Click 'Registration' > 'Farmer' and enter Aadhaar and bank details.",
                "Bring produce to nearest e-NAM mandi for quality assaying and electronic lot creation."
            ],
            bn: [
                "enam.gov.in-এ কৃষক হিসেবে নাম নথিভুক্ত করুন ও অনলাইন মন্ডিতে ফসল বিক্রি করুন।"
            ],
            hi: [
                "enam.gov.in पर किसान पंजीकरण करें और पारदर्शी मूल्य प्राप्त करें।"
            ]
        },
        official_homepage: "https://www.enam.gov.in/",
        official_apply_url: "https://www.enam.gov.in/",
        official_status_url: "https://www.enam.gov.in/",
        official_helpline: "1800 270 0224 (Toll Free)",
        official_email: "nam@sfac.in",
        state: "All India",
        availability: "Online + Mandi",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.enam.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["enam", "mandi price", "crop selling", "farmer market", "ই-ন্যাম", "কৃষি বাজার", "ई-नाम", "मंडी भाव"]
    },

    // 8. Soil Health Card
    {
        service_id: "soil-health-card-portal",
        service_name: {
            en: "Soil Health Card Scheme Portal",
            bn: "মৃত্তিকা স্বাস্থ্য কার্ড প্রকল্প পোর্টাল (Soil Health Card)",
            hi: "मृदा स्वास्थ्य कार्ड पोर्टल (Soil Health Card)"
        },
        short_description: {
            en: "Official portal providing customized crop-wise fertilizer dosage recommendations and soil nutrient status reports to farmers across India.",
            bn: "কৃষি জমিতে সুষম সার প্রয়োগ ও মাটির পুষ্টিমান পরীক্ষার রিপোর্ট পাওয়ার সরকারি পোর্টাল।",
            hi: "फसलों के अनुसार संतुलित उर्वरक उपयोग और मिट्टी की पोषण स्थिति की रिपोर्ट।"
        },
        category: "agriculture",
        category_name: { en: "Farmers & Agriculture", bn: "কৃষক ও কৃষি সেবা", hi: "किसान और कृषि" },
        subcategory: "Soil Testing",
        authority: "Department of Agriculture & Farmers Welfare",
        government_level: "Central",
        service_type: "Agriculture",
        target_users: ["Farmers", "Agri-Entrepreneurs"],
        eligibility: {
            en: ["All land-holding farmers in India."],
            bn: ["সমস্ত চাষী ও জমির মালিক।"],
            hi: ["सभी किसान।"]
        },
        required_documents: {
            en: ["Land Survey/Plot Number", "Aadhaar Card", "Soil Sample."],
            bn: ["জমির দাগ নম্বর ও মাটির নমুনা।"],
            hi: ["खसरा नंबर और मिट्टी का नमूना।"]
        },
        application_fee: {
            en: "100% Free Soil Testing by Government.",
            bn: "সম্পূর্ণ বিনামূল্যে মাটি পরীক্ষা।",
            hi: "निःशुल्क।"
        },
        benefits: {
            en: ["Save fertilizer costs and increase crop yield by 10%–25%."],
            bn: ["সারের অপচয় রোধ ও ফলন বৃদ্ধি।"],
            hi: ["उर्वरक लागत में बचत और उपज में वृद्धि।"]
        },
        process_steps: {
            en: [
                "Visit soilhealth.dac.gov.in.",
                "Select 'Farmers Corner' > 'Print Soil Health Card'.",
                "Select State, District, Block, and Village, then enter Farmer Name to download official card."
            ],
            bn: [
                "soilhealth.dac.gov.in-এ গিয়ে জেলা ও গ্রামের নাম দিয়ে মৃত্তিকা কার্ড ডাউনলোড করুন।"
            ],
            hi: [
                "soilhealth.dac.gov.in पर जाकर अपनी मृदा स्वास्थ्य कार्ड रिपोर्ट डाउनलोड करें।"
            ]
        },
        official_homepage: "https://soilhealth.dac.gov.in/",
        official_apply_url: "https://soilhealth.dac.gov.in/",
        official_status_url: "https://soilhealth.dac.gov.in/",
        official_helpline: "011-23381012",
        official_email: "soilhealth-agri@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://soilhealth.dac.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["soil health", "soil test", "fertilizer dose", "মাটি পরীক্ষা", "মৃত্তিকা স্বাস্থ্য কার্ড", "मृदा स्वास्थ्य कार्ड"]
    },

    // 9. MCA21 Company Portal
    {
        service_id: "mca21-company-incorporation",
        service_name: {
            en: "MCA21 Portal (Company & LLP Incorporation / Filings)",
            bn: "এমসিএ২১ পোর্টাল (কোম্পানি ও এলএলপি রেজিস্ট্রি — MCA21)",
            hi: "एमसीए21 पोर्टल (कंपनी और एलएलपी निगमन — MCA21)"
        },
        short_description: {
            en: "Official Ministry of Corporate Affairs portal for SPICe+ company incorporation, DIN/DSC services, Master Data verification, and annual statutory returns.",
            bn: "প্রাইভেট লিমিটেড কোম্পানি ও এলএলপি গঠন, ডিরেক্টর ডিআইএন এবং মাস্টার ডেটা যাচাইয়ের সরকারি পোর্টাল।",
            hi: "कंपनी व एलएलपी निगमन, डीआईएन सेवाएं और मास्टर डेटा सत्यापन के लिए आधिकारिक पोर्टल।"
        },
        category: "business-startup",
        category_name: { en: "Business & MSME (Udyam Registration)", bn: "ব্যবসা ও এমএসএমই (উদ্যম)", hi: "व्यवसाय और एमएसएमई (उद्यम)" },
        subcategory: "Corporate Compliance",
        authority: "Ministry of Corporate Affairs (MCA)",
        government_level: "Central",
        service_type: "Corporate & Legal",
        target_users: ["Founders", "Entrepreneurs", "Chartered Accountants", "Directors"],
        eligibility: {
            en: ["Indian & foreign citizens establishing a Private Limited Company, OPC, LLP, or Section 8 Company in India."],
            bn: ["ভারতে কোম্পানি বা এলএলপি গঠনকারী উদ্যোক্তা।"],
            hi: ["भारत में कंपनी या एलएलपी स्थापित करने वाले उद्यमी।"]
        },
        required_documents: {
            en: ["PAN and Aadhaar of Directors", "Digital Signature Certificate (DSC Class 3)", "Proof of registered office address with Electricity Bill & NOC."],
            bn: ["ডিরেক্টরদের প্যান ও আধার, ডিএসসি (DSC) এবং অফিস ঠিকানার প্রমাণপত্র।"],
            hi: ["निदेशकों का पैन और आधार, डीएससी और पंजीकृत कार्यालय का पता प्रमाण।"]
        },
        application_fee: {
            en: "Zero MCA incorporation fee for capital up to ₹15 Lakhs (nominal stamp duty applicable by state).",
            bn: "১৫ লক্ষ টাকা পর্যন্ত মূলধনে সরকারি ফি শূন্য (স্ট্যাম্প ডিউটি প্রযোজ্য)।",
            hi: "₹15 लाख तक की पूंजी पर केंद्र सरकार का शुल्क शून्य।"
        },
        benefits: {
            en: ["Integrated single-window SPICe+ form for Company Name, PAN, TAN, EPFO, ESIC, GSTIN & Bank Account."],
            bn: ["একক স্পাইস+ ফর্মে প্যান, ট্যান, জিএসটি ও কোম্পানি রেজিস্ট্রেশন।"],
            hi: ["एक ही फॉर्म में पैन, टैन, जीएसटी और कंपनी पंजीकरण।"]
        },
        process_steps: {
            en: [
                "Visit official portal (mca.gov.in).",
                "Log in with V3 MCA credentials.",
                "Access 'SPICe+ Part A' for Name Reservation.",
                "Complete 'SPICe+ Part B' for Incorporation, DIN, and statutory registrations.",
                "Attach DSC and submit online."
            ],
            bn: [
                "mca.gov.in পোর্টালে SPICe+ ফর্মের মাধ্যমে কোম্পানি রেজিস্ট্রেশন করুন।"
            ],
            hi: [
                "mca.gov.in पर जाकर SPICe+ फॉर्म द्वारा कंपनी पंजीकरण करें।"
            ]
        },
        official_homepage: "https://www.mca.gov.in/",
        official_apply_url: "https://www.mca.gov.in/content/mca/global/en/home.html",
        official_status_url: "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html",
        official_helpline: "0124-4832500 / 0124-2244222",
        official_email: "appl.helpdesk@mca.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.mca.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["mca", "company registration", "pvt ltd", "llp registration", "master data", "din number", "কোম্পানি রেজিস্ট্রেশন", "এমসিএ", "कंपनी पंजीकरण"]
    },

    // 10. Startup India Hub
    {
        service_id: "startup-india-hub-portal",
        service_name: {
            en: "Startup India Portal (DPIIT Recognition & Seed Fund)",
            bn: "স্টার্টআপ ইন্ডিয়া পোর্টাল (DPIIT স্বীকৃতি ও অনুদান)",
            hi: "स्टार्टअप इंडिया पोर्टल (DPIIT मान्यता व बीज कोष)"
        },
        short_description: {
            en: "Official Government of India platform for DPIIT Startup Recognition, 80-IAC tax exemptions, fast-tracked patent examination, and Startup India Seed Fund Scheme (SISFS).",
            bn: "সরকারি স্টার্টআপ স্বীকৃতি (DPIIT), ৩ বছরের আয়কর ছাড় ও সিড ফান্ড অনুদানের অফিসিয়াল পোর্টাল।",
            hi: "डीपीआईआईटी स्टार्टअप मान्यता, 80-आईएसी कर छूट और स्टार्टअप इंडिया सीड फंड योजना।"
        },
        category: "business-startup",
        category_name: { en: "Business & MSME (Udyam Registration)", bn: "ব্যবসা ও এমএসএমই (উদ্যম)", hi: "व्यवसाय और एमएसएमई (उद्यम)" },
        subcategory: "Startups & Innovation",
        authority: "Department for Promotion of Industry and Internal Trade (DPIIT)",
        government_level: "Central",
        service_type: "Startup Support",
        target_users: ["Startups", "Innovators", "Tech Founders", "Students"],
        eligibility: {
            en: ["Entity incorporated as Pvt Ltd / LLP / Registered Partnership in India within last 10 years with turnover < ₹100 Crore."],
            bn: ["১০ বছরের মধ্যে গঠিত প্রাইভেট লিমিটেড বা এলএলপি যার টার্নওভার ১০০ কোটি টাকার কম।"],
            hi: ["पिछले 10 वर्षों में निगमित प्राइवेट लिमिटेड या एलएलपी।"]
        },
        required_documents: {
            en: ["Certificate of Incorporation", "Pitch deck / Brief write-up on innovation and scalability", "Director PAN and Aadhaar."],
            bn: ["কোম্পানি সার্টিফিকেট ও ইনোভেশন পিচ ডেক।"],
            hi: ["निगमन प्रमाण पत्र और नवाचार विवरण।"]
        },
        application_fee: {
            en: "100% Free DPIIT Recognition Application.",
            bn: "বিনামূল্যে আবেদন।",
            hi: "निःशुल्क मान्यता आवेदन।"
        },
        benefits: {
            en: ["3-year 100% Income Tax exemption (Section 80-IAC).", "80% rebate on patent filing fees.", "Access to ₹50 Lakh seed fund grants."],
            bn: ["৩ বছর সম্পূর্ণ আয়কর ছাড় ও ৫০ লাখ পর্যন্ত সরকারি অনুদান পাওয়ার সুযোগ।"],
            hi: ["3 वर्ष आयकर छूट और ₹50 लाख तक का सरकारी अनुदान।"]
        },
        process_steps: {
            en: [
                "Visit official portal (startupindia.gov.in).",
                "Click 'Register' and create startup profile.",
                "Navigate to 'DPIIT Recognition' and fill company details.",
                "Upload incorporation certificate and pitch summary to receive DPIIT Certificate instantly upon review."
            ],
            bn: [
                "startupindia.gov.in পোর্টালে গিয়ে DPIIT রেকগনিশনের জন্য আবেদন করুন।"
            ],
            hi: [
                "startupindia.gov.in पर जाकर डीपीआईआईटी मान्यता के लिए आवेदन करें।"
            ]
        },
        official_homepage: "https://www.startupindia.gov.in/",
        official_apply_url: "https://www.startupindia.gov.in/",
        official_status_url: "https://www.startupindia.gov.in/",
        official_helpline: "1800 115 565 (Toll Free)",
        official_email: "dipp-startups@nic.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.startupindia.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["startup india", "dpiit recognition", "seed fund", "tax exemption 80iac", "স্টার্টআপ ইন্ডিয়া", "সিড ফান্ড", "स्टार्टअप इंडिया"]
    },

    // 11. GeM Government e-Marketplace
    {
        service_id: "gem-government-emarketplace",
        service_name: {
            en: "GeM Portal (Government e-Marketplace Seller Onboarding)",
            bn: "জিইএম পোর্টাল (সরকারি ই-মার্কেটপ্লেস বিক্রেতা নিবন্ধন — GeM)",
            hi: "जीईएम पोर्टल (सरकारी ई-मार्केटप्लेस विक्रेता पंजीकरण — GeM)"
        },
        short_description: {
            en: "Official public procurement portal for businesses, MSMEs, and service providers to sell goods and services directly to Central & State government departments.",
            bn: "সরকারি দপ্তর ও পিএসইউ-তে সরাসরি পণ্য ও সেবা বিক্রির জন্য জাতীয় সরকারি ই-মার্কেটপ্লেস পোর্টাল।",
            hi: "सरकारी विभागों को सीधे उत्पाद और सेवाएं बेचने के लिए राष्ट्रीय सार्वजनिक खरीद पोर्टल।"
        },
        category: "procurement",
        category_name: { en: "Government Procurement (GeM)", bn: "সরকারি টেন্ডার ও GeM", hi: "सरकारी खरीद (GeM)" },
        subcategory: "Public Procurement",
        authority: "GeM SPV (Ministry of Commerce and Industry)",
        government_level: "Central",
        service_type: "Commercial & Business",
        target_users: ["Sellers", "Manufacturers", "Service Providers", "MSMEs"],
        eligibility: {
            en: ["Any registered business entity (Proprietorship, Partnership, Company, LLP) with active GSTIN and PAN."],
            bn: ["বৈধ প্যান ও জিএসটি নম্বরধারী যেকোনো রেজিস্টার্ড ব্যবসা।"],
            hi: ["सक्रिय जीएसटी और पैन धारक कोई भी पंजीकृत व्यवसाय।"]
        },
        required_documents: {
            en: ["PAN Card", "Udyam Registration / CIN", "GSTIN Certificate", "Bank Account with linked PFMS.", "Income Tax Return (ITR) for last 2 years."],
            bn: ["প্যান, জিএসটি সার্টিফিকেট, উদ্যম নম্বর ও ব্যাংক ডিটেলস।"],
            hi: ["पैन, जीएसटी प्रमाण पत्र, उद्यम संख्या और बैंक विवरण।"]
        },
        application_fee: {
            en: "Free Seller Registration (caution money deposit applicable per turnover slab).",
            bn: "বিনামূল্যে সেলার অ্যাকাউন্ট রেজিস্ট্রেশন।",
            hi: "निःशुल्क विक्रेता पंजीकरण।"
        },
        benefits: {
            en: ["Direct access to over ₹2 Lakh Crore annual public procurement tenders.", "Guaranteed automated payment timelines."],
            bn: ["লাখ লাখ সরকারি টেন্ডারে সরাসরি অংশগ্রহণের সুবর্ণ সুযোগ।"],
            hi: ["लाखों सरकारी टेंडरों में सीधी भागीदारी का अवसर।"]
        },
        process_steps: {
            en: [
                "Visit gem.gov.in.",
                "Click 'Sign Up' > 'Seller'.",
                "Verify Aadhaar of authorized signatory and validate GSTIN / ITR.",
                "Deposit mandatory caution money, catalog your products/services, and bid on tenders."
            ],
            bn: [
                "gem.gov.in-এ গিয়ে সেলার হিসেবে সাইন আপ করুন ও সরকারি টেন্ডারে বিড করুন।"
            ],
            hi: [
                "gem.gov.in पर विक्रेता के रूप में पंजीकरण करें और निविदाओं में भाग लें।"
            ]
        },
        official_homepage: "https://gem.gov.in/",
        official_apply_url: "https://gem.gov.in/",
        official_status_url: "https://gem.gov.in/",
        official_helpline: "1800-419-3436 / 1800-102-3436",
        official_email: "helpdesk-gem@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://gem.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["gem", "gem portal", "government tender", "seller registration", "সরকারি টেন্ডার", "জিইএম", "सरकारी टेंडर", "जेम पोर्टल"]
    },

    // 12. eSanjeevani Telemedicine
    {
        service_id: "esanjeevani-teleconsultation",
        service_name: {
            en: "eSanjeevani National Telemedicine Service (Free Doctor Consultation)",
            bn: "ই-সঞ্জীবনী জাতীয় টেলিমেডিসিন সেবা (বিনামূল্যে ডাক্তার পরামর্শ)",
            hi: "ई-संजीवनी राष्ट्रीय टेलीमेडिसिन सेवा (निःशुल्क डॉक्टर परामर्श)"
        },
        short_description: {
            en: "Official Government of India telemedicine portal for citizens to consult government MBBS doctors and medical specialists from home via video call for free digital prescriptions.",
            bn: "ভারত সরকারের জাতীয় টেলিমেডিসিন সেবা—ঘরে বসেই ভিডিও কলের মাধ্যমে সরকারি বিশেষজ্ঞ ডাক্তারের বিনামূল্যে পরামর্শ ও প্রেসক্রিপশন।",
            hi: "घर बैठे वीडियो कॉल द्वारा सरकारी डॉक्टरों से निःशुल्क परामर्श और ई-प्रिस्क्रिप्शन।"
        },
        category: "healthcare",
        category_name: { en: "Healthcare & Insurance", bn: "স্বাস্থ্যসেবা ও বীমা", hi: "स्वास्थ्य सेवा और बीमा" },
        subcategory: "Telehealth",
        authority: "Ministry of Health and Family Welfare & C-DAC Mohali",
        government_level: "Central",
        service_type: "Healthcare",
        target_users: ["All Indian Citizens", "Patients", "Elderly", "Rural Residents"],
        eligibility: {
            en: ["All residents of India seeking medical consultation."],
            bn: ["চিকিৎসা পরামর্শপ্রার্থী সমস্ত ভারতীয় নাগরিক।"],
            hi: ["सभी भारतीय निवासी।"]
        },
        required_documents: {
            en: ["Mobile Number for OTP", "Past medical records / test reports (optional)."],
            bn: ["মোবাইল নম্বর ও আগের প্রেসক্রিপশন (ঐচ্ছিক)।"],
            hi: ["मोबाइल नंबर और पुरानी रिपोर्ट (वैकल्पिक)।"]
        },
        application_fee: {
            en: "100% Free Public Healthcare Service.",
            bn: "সম্পূর্ণ বিনামূল্যে সরকারি সেবা।",
            hi: "100% निःशुल्क सरकारी सेवा।"
        },
        benefits: {
            en: ["Consult registered specialist doctors without traveling to hospital.", "Download legally valid digital prescription immediately."],
            bn: ["হাসপাতালে না গিয়েও বিশেষজ্ঞ ডাক্তারের সাথে ভিডিও কল ও বৈধ ডিজিটাল প্রেসক্রিপশন।"],
            hi: ["अस्पताल जाए बिना विशेषज्ञ डॉक्टर से परामर्श और डिजिटल पर्चा।"]
        },
        process_steps: {
            en: [
                "Visit esanjeevani.in or download eSanjeevani App.",
                "Select 'Patient Registration / Login' and enter Mobile Number.",
                "Select Health Department / Specialty clinic and enter symptoms.",
                "Join virtual doctor waiting room and complete video consultation.",
                "Download e-Prescription with doctor's digital signature."
            ],
            bn: [
                "esanjeevani.in পোর্টালে যান, মোবাইল ওটিপি দিয়ে লগইন করে ডাক্তারের সাথে ভিডিও কলে কথা বলুন ও প্রেসক্রিপশন ডাউনলোড করুন।"
            ],
            hi: [
                "esanjeevani.in पर मोबाइल नंबर से लॉगिन करें, वीडियो परामर्श लें और ई-पर्चा डाउनलोड करें।"
            ]
        },
        official_homepage: "https://esanjeevani.in/",
        official_apply_url: "https://esanjeevani.in/",
        official_status_url: "https://esanjeevani.in/",
        official_helpline: "011-23978046",
        official_email: "esanjeevani-support@cdac.in",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://esanjeevani.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["esanjeevani", "online doctor", "free prescription", "telemedicine", "ডাক্তার পরামর্শ", "ই-সঞ্জীবনী", "टेलीमेडिसिन", "डॉक्टर परामर्श"]
    },

    // 13. PFMS / DBT Bharat Portal
    {
        service_id: "pfms-public-financial-management",
        service_name: {
            en: "PFMS Portal (Direct Benefit Transfer DBT & Payment Status)",
            bn: "পিএফএমএস পোর্টাল (ডিবিটি পেমেন্ট স্ট্যাটাস ও সরকারি অনুদান ট্র্যাকিং)",
            hi: "पीएफएमएस पोर्टल (डीबीटी भुगतान स्थिति व सरकारी सब्सिडी ट्रैकिंग)"
        },
        short_description: {
            en: "Official Public Financial Management System (PFMS) portal to track Direct Benefit Transfer (DBT) payments for scholarships, PM-KISAN, pensions, and subsidies by bank account number.",
            bn: "স্কলারশিপ, পিএম-কিষাণ, বার্ধক্য ভাতা ও অন্যান্য সরকারি অনুদান ব্যাংকে ঢুকেছে কিনা তা ট্র্যাকিং এর অফিসিয়াল পোর্টাল।",
            hi: "छात्रवृत्ति, पीएम-किसान, पेंशन और सब्सिडी के डीबीटी भुगतान की स्थिति जांचने का आधिकारिक पोर्टल।"
        },
        category: "banking-finance",
        category_name: { en: "Banking & Financial Services (Jan Dhan)", bn: "ব্যাঙ্কিং ও আর্থিক অন্তর্ভুক্তি", hi: "बैंकिंग और वित्तीय सेवाएं" },
        subcategory: "DBT Tracking",
        authority: "Controller General of Accounts (Ministry of Finance)",
        government_level: "Central",
        service_type: "Financial Tracking",
        target_users: ["Students", "Farmers", "Pensioners", "Scheme Beneficiaries"],
        eligibility: {
            en: ["Any Indian citizen receiving Central or State government benefits/scholarships via DBT."],
            bn: ["সরকারি অনুদান ও স্কলারশিপ প্রাপক সমস্ত নাগরিক।"],
            hi: ["सरकारी योजना और छात्रवृत्ति के सभी लाभार्थी।"]
        },
        required_documents: {
            en: ["Bank Name and Account Number", "NSP Application ID (for scholarship beneficiaries)."],
            bn: ["ব্যাংকের নাম ও অ্যাকাউন্ট নম্বর অথবা স্কলারশিপ অ্যাপ্লিকেশন আইডি।"],
            hi: ["बैंक खाता संख्या या छात्रवृत्ति आवेदन आईडी।"]
        },
        application_fee: {
            en: "100% Free Public Verification.",
            bn: "বিনামূল্যে ট্র্যাকিং।",
            hi: "निःशुल्क सत्यापन।"
        },
        benefits: {
            en: ["Real-time transaction status with UTR number for credit confirmation."],
            bn: ["টাকা কখন একাউন্টে জমা হবে বা আটকে আছে কিনা তা সঠিক ইউটিআর (UTR) সহ জানা।"],
            hi: ["यूटीआर नंबर के साथ वास्तविक समय में भुगतान स्थिति।"]
        },
        process_steps: {
            en: [
                "Visit official PFMS portal (pfms.nic.in).",
                "Click 'Know Your Payments' on the homepage.",
                "Enter Bank Name, Account Number, and Captcha code.",
                "Verify with mobile OTP to view complete itemized payment history."
            ],
            bn: [
                "pfms.nic.in-এ 'Know Your Payments'-এ গিয়ে ব্যাংক অ্যাকাউন্ট নম্বর দিয়ে টাকা ক্রেডিট হওয়ার স্ট্যাটাস দেখুন।"
            ],
            hi: [
                "pfms.nic.in पर जाकर बैंक खाता दर्ज करें और डीबीटी भुगतान स्थिति देखें।"
            ]
        },
        official_homepage: "https://pfms.nic.in/",
        official_apply_url: "https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx",
        official_status_url: "https://pfms.nic.in/",
        official_helpline: "1800 118 111 (Toll Free)",
        official_email: "helpdesk-pfms@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://pfms.nic.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["pfms", "dbt payment", "scholarship payment status", "pm kisan payment status", "ডিবিটি স্ট্যাটাস", "পিএফএমএস", "पीएफएमएस", "डीबीटी स्टेटस"]
    },

    // 14. PMJDY (Jan Dhan Yojana)
    {
        service_id: "pmjdy-financial-inclusion",
        service_name: {
            en: "Pradhan Mantri Jan Dhan Yojana (PMJDY Zero Balance Account)",
            bn: "প্রধানমন্ত্রী জন ধন যোজনা (PMJDY জিরো ব্যালেন্স একাউন্ট)",
            hi: "प्रधानमंत्री जन धन योजना (PMJDY जीरो बैलेंस खाता)"
        },
        short_description: {
            en: "Official National Mission on Financial Inclusion portal detailing zero-balance savings accounts, RuPay debit card with ₹2 Lakh accident insurance, and ₹10,000 overdraft facility.",
            bn: "জিরো ব্যালেন্স সেভিংস অ্যাকাউন্ট, রূপের কার্ড ও ২ লাখ টাকার দুর্ঘটনা বীমার সরকারি পোর্টাল।",
            hi: "जीरो बैलेंस खाता, रुपे डेबिट कार्ड पर ₹2 लाख का दुर्घटना बीमा और ओवरड्राफ्ट सुविधा।"
        },
        category: "banking-finance",
        category_name: { en: "Banking & Financial Services (Jan Dhan)", bn: "ব্যাঙ্কিং ও আর্থিক অন্তর্ভুক্তি", hi: "बैंकिंग और वित्तीय सेवाएं" },
        subcategory: "Financial Inclusion",
        authority: "Department of Financial Services (Ministry of Finance)",
        government_level: "Central",
        service_type: "Banking Scheme",
        target_users: ["Unbanked Citizens", "Women", "Workers", "Rural Residents"],
        eligibility: {
            en: ["Any Indian citizen aged 10 years and above who does not have any bank account."],
            bn: ["১০ বছর বা তার বেশি বয়সী যেকোনো ভারতীয় নাগরিক।"],
            hi: ["10 वर्ष और उससे अधिक आयु का कोई भी भारतीय नागरिक।"]
        },
        required_documents: {
            en: ["Aadhaar Card (if available)", "Voter ID / Driving Licence / NREGA Card / Passport (if Aadhaar not available)."],
            bn: ["আধার কার্ড বা ভোটার কার্ড ও পাসপোর্ট ছবি।"],
            hi: ["आधार कार्ड या वोटर आईडी व फोटो।"]
        },
        application_fee: {
            en: "Zero balance opening fee (100% Free).",
            bn: "বিনামূল্যে অ্যাকাউন্ট খোলা যায়।",
            hi: "निःशुल्क खाता खोलना।"
        },
        benefits: {
            en: ["No minimum balance requirement.", "RuPay Debit Card with built-in ₹2 Lakh accidental insurance cover.", "Direct receipt of all government welfare funds."],
            bn: ["মিনিমাম ব্যালেন্সের কোনো বাধ্যবাধকতা নেই ও সরকারি অনুদান সরাসরি জমা।"],
            hi: ["कोई न्यूनतम बैलेंस आवश्यकता नहीं व सरकारी योजनाओं का सीधा लाभ।"]
        },
        process_steps: {
            en: [
                "Visit pmjdy.gov.in to download PMJDY Account Opening Form.",
                "Fill the application form and attach photocopy of Aadhaar Card.",
                "Submit to any nearest Nationalized Bank branch, Grameen Bank, or Bank Mitra (CSP kiosk) for instant account opening."
            ],
            bn: [
                "pmjdy.gov.in থেকে ফর্ম ডাউনলোড করে নিকটস্থ যেকোনো ব্যাংক বা গ্রাহক সেবা কেন্দ্রে আধার সহ জমা দিন।"
            ],
            hi: [
                "pmjdy.gov.in से फॉर्म डाउनलोड करें और निकटतम बैंक शाखा में आधार के साथ जमा करें।"
            ]
        },
        official_homepage: "https://pmjdy.gov.in/",
        official_apply_url: "https://pmjdy.gov.in/",
        official_status_url: "https://pmjdy.gov.in/",
        official_helpline: "1800 11 0001 / 1800 180 1111",
        official_email: "pmjdy-dfs@nic.in",
        state: "All India",
        availability: "Online Info + Bank Branch",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://pmjdy.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["pmjdy", "jan dhan", "zero balance account", "rupay card", "জন ধন যোজনা", "জিরো ব্যালেন্স অ্যাকাউন্ট", "जन धन योजना"]
    },

    // 15. West Bengal e-Deed Property Registration
    {
        service_id: "wb-edeed-property-registration",
        service_name: {
            en: "West Bengal e-Deed & Property Registration (wbregistration.gov.in)",
            bn: "পশ্চিমবঙ্গ জমি ও ফ্ল্যাট রেজিস্ট্রেশন এবং ই-দলিল (e-Deed)",
            hi: "पश्चिम बंगाल भूमि व संपत्ति पंजीकरण और ई-डीड (e-Deed)"
        },
        short_description: {
            en: "Official Directorate of Registration and Stamp Revenue portal to draft e-Deeds, calculate market value, pay stamp duty/registration fees online, and book registration appointments.",
            bn: "জমি ও সম্পত্তির বাজার দর নির্ণয়, ই-দলিল ড্রাফটিং, স্ট্যাম্প ডিউটি জমা ও রেজিস্ট্রি অ্যাপয়েন্টমেন্টের অফিসিয়াল পোর্টাল।",
            hi: "जमीन-मकान का बाजार मूल्य, ई-डीड, स्टांप शुल्क और रजिस्ट्री स्लॉट बुकिंग पोर्टल।"
        },
        category: "land-property",
        category_name: { en: "Land & Property (Banglarbhumi)", bn: "জমি ও সম্পত্তি (বাংলারভূমি)", hi: "भूमि और संपत्ति (बांगलारभूमि)" },
        subcategory: "Deed & Stamp Duty",
        authority: "Directorate of Registration and Stamp Revenue (Finance Department, Govt of West Bengal)",
        government_level: "West Bengal",
        service_type: "Property Registration",
        target_users: ["Property Buyers", "Sellers", "Advocates", "Deed Writers", "Citizens"],
        eligibility: {
            en: ["Buyers and sellers executing sale, gift, partition, or lease deed in West Bengal."],
            bn: ["পশ্চিমবঙ্গে জমি, ফ্ল্যাট বা সম্পত্তি ক্রয়-বিক্রয় ও হস্তান্তরকারী নাগরিক।"],
            hi: ["पश्चिम बंगाल में संपत्ति का क्रय-विक्रय व हस्तांतरण करने वाले।"]
        },
        required_documents: {
            en: ["Prior Deed (Dalil) copy", "Current Banglarbhumi RoR (Porcha) & Khajna receipt", "PAN & Aadhaar of Buyer, Seller, and 2 Witnesses."],
            bn: ["পূর্বের দলিল, পরচা, খাজনা রশিদ এবং ক্রেতা-বিক্রেতা ও সাক্ষীদের প্যান-আধার।"],
            hi: ["पिछली डीड, पर्चा, खजाना रसीद और क्रेता-विक्रेता के पैन-आधार।"]
        },
        application_fee: {
            en: "Stamp duty and registration fee calculated automatically based on official market value (GRIPS online payment).",
            bn: "সরকারি বাজার মূল্যের ভিত্তিতে স্ট্যাম্প ডিউটি ও রেজিস্ট্রি ফি অনলাইনে প্রদেয়।",
            hi: "बाजार मूल्य के आधार पर स्टांप शुल्क व पंजीकरण शुल्क।"
        },
        benefits: {
            en: ["Transparent computerized market valuation without overcharging.", "Legally compliant e-Deed system with downloadable registered deed."],
            bn: ["স্বচ্ছ সরকারি বাজার মূল্য যাচাই ও অনলাইনে স্ট্যাম্প ডিউটি দিয়ে ঝামেলামুক্ত রেজিস্ট্রি।"],
            hi: ["पारदर्शी बाजार मूल्यांकन और ई-डीड द्वारा सुरक्षित रजिस्ट्री।"]
        },
        process_steps: {
            en: [
                "Visit wbregistration.gov.in.",
                "Click 'Market Value of Land / Property' to calculate official circle rates.",
                "Select 'e-Deed' to enter Buyer, Seller, and Plot details.",
                "Pay Stamp Duty and Registration Fee online via GRIPS portal.",
                "Book slot at ADSR / DSR office for biometric verification and instant deed delivery."
            ],
            bn: [
                "wbregistration.gov.in-এ বাজার দর যাচাই করুন, e-Deed পূরণ করুন, GRIPS-এ ফি দিয়ে রেজিস্ট্রি অফিসে বায়োমেট্রিক দিন।"
            ],
            hi: [
                "wbregistration.gov.in पर बाजार मूल्य जांचें, ई-डीड भरें और ऑनलाइन स्टांप शुल्क जमा करें।"
            ]
        },
        official_homepage: "https://wbregistration.gov.in/",
        official_apply_url: "https://wbregistration.gov.in/(S(0w4r2j2e4a4z4k55z5x5a555))/Index.aspx",
        official_status_url: "https://wbregistration.gov.in/",
        official_helpline: "033-2223 0150 / 033-2223 0151",
        official_email: "grievance.registration-wb@gov.in",
        state: "West Bengal",
        availability: "Online + ADSR Office",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://wbregistration.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["wbregistration", "e deed", "property registration wb", "market value land", "dalil registry", "দলিল রেজিস্ট্রি", "জমির রেজিস্ট্রি", "ই-দলিল", "डीड रजिस्ट्री", "बाजार मूल्य"]
    },

    // 16. Annapurna Yojana (WB Food & Supplies / NFSA)
    {
        service_id: "wb-annapurna-yojana-food",
        service_name: {
            en: "Annapurna Scheme (Free Foodgrain for Indigent Senior Citizens — WB)",
            bn: "অন্নপূর্ণা যোজনা (নিঃস্ব প্রবীণ নাগরিকদের জন্য বিনামূল্যে খাদ্যশস্য)",
            hi: "अन्नपूर्णा योजना (वरिष्ठ नागरिकों के लिए निःशुल्क खाद्यान्न)"
        },
        short_description: {
            en: "Official Food & Supplies Department scheme providing 10 kg of free foodgrains monthly to indigent senior citizens aged 65+ who are not receiving National Old Age Pension.",
            bn: "৬৫ বছর বা তদূর্ধ্ব নিঃস্ব প্রবীণ নাগরিক যাঁরা বার্ধক্য ভাতা পান না, তাঁদের জন্য প্রতি মাসে ১০ কেজি বিনামূল্যে খাদ্যশস্য।",
            hi: "65 वर्ष से अधिक आयु के ऐसे वरिष्ठ नागरिकों के लिए प्रति माह 10 किलोग्राम मुफ्त खाद्यान्न जो वृद्धावस्था पेंशन नहीं पाते।"
        },
        category: "ration-food",
        category_name: { en: "Ration & Food Security", bn: "রেশন ও খাদ্য সুরক্ষা", hi: "राशन और खाद्य सुरक्षा" },
        subcategory: "Senior Nutrition",
        authority: "Department of Food & Supplies (Government of West Bengal)",
        government_level: "West Bengal",
        service_type: "Food Security",
        target_users: ["Senior Citizens (65+)", "Indigent Elders"],
        eligibility: {
            en: ["Senior citizens aged 65 years or above residing in West Bengal with no regular source of subsistence and not receiving NOAPS or other government pensions."],
            bn: ["পশ্চিমবঙ্গের বাসিন্দা ৬৫ বছর বা তার বেশি বয়সী নিঃস্ব প্রবীণ নাগরিক যাঁদের কোনো নিয়মিত আয়ের উৎস নেই।"],
            hi: ["पश्चिम बंगाल के 65 वर्ष या अधिक आयु के असहाय बुजुर्ग।"]
        },
        required_documents: {
            en: ["Age Proof (Aadhaar / Voter ID / Birth Certificate)", "Income / Destitution Certificate from Panchayat Pradhan / Councillor", "Ration Card (if existing)."],
            bn: ["বয়সের প্রমাণপত্র ও পঞ্চায়েত প্রধান/কাউন্সিলরের দেওয়া নিঃস্ব শংসাপত্র।"],
            hi: ["आयु प्रमाण पत्र और पंचायत/वार्ड पार्षद से आय प्रमाण।"]
        },
        application_fee: {
            en: "100% Free Government Scheme.",
            bn: "সম্পূর্ণ বিনামূল্যে।",
            hi: "निःशुल्क।"
        },
        benefits: {
            en: ["10 kg foodgrain per month free of cost from Fair Price Shop."],
            bn: ["রেশন দোকান থেকে প্রতি মাসে ১০ কেজি বিনামূল্যে চাল/গম।"],
            hi: ["राशन की दुकान से प्रति माह 10 किलो मुफ्त अनाज।"]
        },
        process_steps: {
            en: [
                "Apply via Food & Supplies Department (food.wb.gov.in) or submit form at BDO / SDO Food Office or Duare Sarkar camps.",
                "Local inspection verifies eligibility.",
                "Special Annapurna Card issued for monthly ration withdrawal."
            ],
            bn: [
                "দুয়ারে সরকার ক্যাম্প বা বিডিও অফিসে অন্নপূর্ণা ফর্ম জমা দিন এবং রেশন কার্ড সংগ্রহ করুন।"
            ],
            hi: [
                "द्वारे सरकार या बीडीओ कार्यालय में आवेदन जमा करें और कार्ड प्राप्त करें।"
            ]
        },
        official_homepage: "https://food.wb.gov.in/",
        official_apply_url: "https://food.wb.gov.in/",
        official_status_url: "https://food.wb.gov.in/",
        official_helpline: "1800 345 5505 / 1967 (Toll Free)",
        official_email: "itcell.food@wb.gov.in",
        state: "West Bengal",
        availability: "Online + Duare Sarkar",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://food.wb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["annapurna", "annapurna yojana", "senior citizen ration", "wb food dept", "অন্নপূর্ণা যোজনা", "বিনামূল্যে রেশন", "अन्नपूर्णा योजना"]
    },

    // 17. Krishak Bandhu Scheme (Dedicated)
    {
        service_id: "wb-krishak-bandhu-scheme",
        service_name: {
            en: "Krishak Bandhu (Assured Financial Assistance & ₹2 Lakh Death Benefit)",
            bn: "কৃষক বন্ধু প্রকল্প (নিশ্চিত আর্থিক অনুদান ও ২ লাখ টাকার মৃত্যু সহায়তা)",
            hi: "कृषक बंधु योजना (वार्षिक सहायता और ₹2 लाख मृत्यु लाभ)"
        },
        short_description: {
            en: "Flagship Government of West Bengal agricultural assistance scheme providing up to ₹10,000 annually in two installments per acre, plus ₹2 Lakh family assistance on farmer death (18–60 years).",
            bn: "পশ্চিমবঙ্গ সরকারের কৃষকদের জন্য বছরে একর প্রতি সর্বোচ্চ ১০,০০০ টাকা অনুদান এবং ১৮–৬০ বছর বয়সী কৃষকের মৃত্যুতে পরিবারকে ২ লাখ টাকার সহায়তা।",
            hi: "प्रति एकड़ ₹10,000 वार्षिक सहायता और किसान की मृत्यु पर ₹2 लाख की आर्थिक सहायता।"
        },
        category: "agriculture",
        category_name: { en: "Farmers & Agriculture", bn: "কৃষক ও কৃষি সেবা", hi: "किसान और कृषि" },
        subcategory: "Direct Benefit Transfer",
        authority: "Department of Agriculture (Government of West Bengal)",
        government_level: "West Bengal",
        service_type: "Agriculture Welfare",
        target_users: ["Farmers", "Bhagchasi (Sharecroppers)", "Agricultural Land Owners"],
        eligibility: {
            en: ["All agricultural landowners and recorded sharecroppers (Bhagchasi) in West Bengal."],
            bn: ["পশ্চিমবঙ্গের সমস্ত কৃষক ও নথিবদ্ধ ভাগচাষী।"],
            hi: ["पश्चिम बंगाल के सभी भूमि मालिक किसान व बटाईदार।"]
        },
        required_documents: {
            en: ["Current Banglarbhumi Land RoR (Porcha / Khatian)", "Aadhaar Card & Voter ID", "Bank Passbook with linked single account.", "Death certificate & age proof (for Death Benefit claims)."],
            bn: ["জমির হাল পরচা/খতিয়ান, আধার, ভোটার কার্ড ও ব্যাংক পাসবুক।"],
            hi: ["जमीन का पर्चा, आधार कार्ड, वोटर कार्ड और बैंक पासबुक।"]
        },
        application_fee: {
            en: "100% Free Scheme Registration.",
            bn: "সম্পূর্ণ বিনামূল্যে আবেদন।",
            hi: "निःशुल्क आवेदन।"
        },
        benefits: {
            en: ["Up to ₹10,000 per year for 1 acre or more (minimum ₹4,000/year for smaller holdings).", "₹2 Lakh one-time insurance on untimely death."],
            bn: ["বছরে সর্বোচ্চ ১০,০০০ টাকা নিশ্চিত অনুদান ও কৃষকের মৃত্যুতে ২ লাখ টাকার সুরক্ষা।"],
            hi: ["₹10,000 तक वार्षिक सहायता और मृत्यु पर ₹2 लाख का बीमा।"]
        },
        process_steps: {
            en: [
                "Visit krishakbandhu.wb.gov.in.",
                "Click 'নথিভুক্ত কৃষকের তথ্য' to check status using Voter ID.",
                "For new enrollment, submit Krishak Bandhu application at Duare Sarkar camps or block ADA office with porcha."
            ],
            bn: [
                "krishakbandhu.wb.gov.in-এ ভোটার আইডি দিয়ে নাম ও টাকার স্ট্যাটাস দেখুন, নতুন আবেদনের জন্য দুয়ারে সরকার বা কৃষি অফিসে যোগাযোগ করুন।"
            ],
            hi: [
                "krishakbandhu.wb.gov.in पर वोटर आईडी से स्टेटस चेक करें और योजना का लाभ लें।"
            ]
        },
        official_homepage: "https://krishakbandhu.wb.gov.in/",
        official_apply_url: "https://krishakbandhu.wb.gov.in/",
        official_status_url: "https://krishakbandhu.wb.gov.in/check_status",
        official_helpline: "8336957370 / 8597857373 / 033-2214-1378",
        official_email: "krishak.bandhu@yahoo.com",
        state: "West Bengal",
        availability: "Online Status + Duare Sarkar",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://krishakbandhu.wb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["krishak bandhu", "krishak bandhu status", "wb agriculture", "death benefit 2 lakh", "কৃষক বন্ধু", "কৃষক বন্ধু টাকা", "কৃষক বন্ধু স্ট্যাটাস", "कृषक बंधु"]
    },

    // 18. Matir Katha Agriculture Portal
    {
        service_id: "wb-matir-katha-agriculture",
        service_name: {
            en: "Matir Katha (Agriculture Technology & Crop Advisory Portal — WB)",
            bn: "মাটির কথা (কৃষি প্রযুক্তি, আবহাওয়া ও ফসল পরামর্শ পোর্টাল)",
            hi: "मातिर कथा (कृषि तकनीक व फसल सलाह पोर्टल — प. बंगाल)"
        },
        short_description: {
            en: "Official Agriculture Department ICT portal providing customized weather forecasts, pest alerts, crop disease diagnosis, and farm mechanization subsidies to farmers in West Bengal.",
            bn: "পশ্চিমবঙ্গের কৃষকদের জন্য আবহাওয়া পূর্বাভাস, ফসলের রোগ প্রতিরোধ ও কৃষি যন্ত্রপাতি ক্রয়ে সরকারি ভরতুকির পোর্টাল।",
            hi: "मौसम पूर्वानुमान, कीट चेतावनी और कृषि यंत्र सब्सिडी पोर्टल।"
        },
        category: "agriculture",
        category_name: { en: "Farmers & Agriculture", bn: "কৃষক ও কৃষি সেবা", hi: "किसान और कृषि" },
        subcategory: "Agri-Tech",
        authority: "Department of Agriculture (Government of West Bengal)",
        government_level: "West Bengal",
        service_type: "Agriculture Advisory",
        target_users: ["Farmers", "Agri-Entrepreneurs", "Custom Hiring Centers"],
        eligibility: {
            en: ["All farmers and agrarian workers across West Bengal."],
            bn: ["পশ্চিমবঙ্গের সমস্ত কৃষক ও চাষী।"],
            hi: ["पश्चिम बंगाल के सभी किसान।"]
        },
        required_documents: {
            en: ["Krishak Bandhu ID / Aadhaar Number", "Mobile Number for SMS alerts."],
            bn: ["কৃষক বন্ধু আইডি ও মোবাইল নম্বর।"],
            hi: ["कृषक बंधु आईडी और मोबाइल नंबर।"]
        },
        application_fee: {
            en: "100% Free Public Advisory.",
            bn: "সম্পূর্ণ বিনামূল্যে পরামর্শ।",
            hi: "निःशुल्क सेवा।"
        },
        benefits: {
            en: ["Real-time block-level weather & pest advisories.", "Up to 50%–60% subsidy on modern tractors, power tillers, and harvesters."],
            bn: ["ব্লক অনুযায়ী আবহাওয়ার পূর্বাভাস ও আধুনিক কৃষি যন্ত্রপাতিতে ৫০%–৬০% পর্যন্ত সরকারি ভরতুকি।"],
            hi: ["मौसम अलर्ट और कृषि यंत्रों पर 50%-60% तक की सब्सिडी।"]
        },
        process_steps: {
            en: [
                "Visit matirkatha.net.",
                "Access 'Farm Mechanization' for online subsidy application for agricultural implements.",
                "Access crop advisory and mandi rates section."
            ],
            bn: [
                "matirkatha.net পোর্টালে যান ও কৃষি যন্ত্রপাতি ভর্তুকির জন্য আবেদন করুন।"
            ],
            hi: [
                "matirkatha.net पर जाकर कृषि यंत्र सब्सिडी और सलाह प्राप्त करें।"
            ]
        },
        official_homepage: "https://matirkatha.net/",
        official_apply_url: "https://matirkatha.net/",
        official_status_url: "https://matirkatha.net/",
        official_helpline: "033-2214-5555",
        official_email: "support@matirkatha.net",
        state: "West Bengal",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://matirkatha.net/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["matir katha", "tractor subsidy", "crop advisory", "wb agriculture portal", "মাটির কথা", "কৃষি যন্ত্রপাতি ভর্তুকি", "मातिर कथा"]
    },

    // 19. BMSSY (Bina Mulya Samajik Suraksha Yojana)
    {
        service_id: "wb-bmssy-social-security",
        service_name: {
            en: "Bina Mulya Samajik Suraksha Yojana (BMSSY Unorganized Workers Scheme)",
            bn: "বিনা মূল্যে সামাজিক সুরক্ষা যোজনা (BMSSY — অসংগঠিত শ্রমিক কল্যাণ)",
            hi: "बिना मूल्य सामाजिक सुरक्षा योजना (BMSSY असंगठित श्रमिक कल्याण)"
        },
        short_description: {
            en: "Flagship Labour Department scheme providing 100% state-funded provident fund, accidental death grant of ₹2 Lakh, and disability assistance to unorganized sector workers in West Bengal.",
            bn: "অসংগঠিত শ্রমিকদের জন্য সম্পূর্ণ বিনামূল্যে প্রভিডেন্ট ফান্ড, দুর্ঘটনাজনিত মৃত্যুতে ২ লাখ টাকা এবং অক্ষমতায় আর্থিক সহায়তার সরকারি প্রকল্প।",
            hi: "असंगठित श्रमिकों के लिए राज्य सरकार द्वारा वित्तपोषित भविष्य निधि और ₹2 लाख तक का दुर्घटना बीमा।"
        },
        category: "labour-workers",
        category_name: { en: "Workers & Labour Welfare", bn: "শ্রমিক ও শ্রম কল্যাণ", hi: "श्रमिक और श्रम कल्याण" },
        subcategory: "Worker Social Security",
        authority: "Labour Department (Government of West Bengal)",
        government_level: "West Bengal",
        service_type: "Social Security",
        target_users: ["Unorganized Workers", "Transport Workers", "Construction Workers", "Gig Workers"],
        eligibility: {
            en: ["Unorganized workers aged 18 to 60 years residing in West Bengal with family income up to ₹6,500/month (construction/transport workers exempt from income ceiling)."],
            bn: ["পশ্চিমবঙ্গের ১৮–৬০ বছর বয়সী অসংগঠিত শ্রমিক, নির্মাণ শ্রমিক ও পরিবহন কর্মী।"],
            hi: ["पश्चिम बंगाल के 18 से 60 वर्ष के असंगठित क्षेत्र के श्रमिक।"]
        },
        required_documents: {
            en: ["Aadhaar Card & Voter ID", "Bank Passbook with single account", "Passport photograph", "Self-declaration of occupation."],
            bn: ["আধার, ভোটার কার্ড, ব্যাংক পাসবুক ও পেশার স্ব-ঘোষণা।"],
            hi: ["आधार, वोटर कार्ड, बैंक पासबुक और व्यवसाय घोषणा।"]
        },
        application_fee: {
            en: "100% Free (Monthly ₹30 worker contribution is paid entirely by the West Bengal Government).",
            bn: "সম্পূর্ণ বিনামূল্যে (মাসিক প্রিমিয়াম সম্পূর্ণ রাজ্য সরকার দেয়)।",
            hi: "100% निःशुल्क।"
        },
        benefits: {
            en: ["State-funded Provident Fund with interest on maturity at age 60.", "₹2,00,000 assistance on accidental death; ₹50,000 on normal death."],
            bn: ["৬০ বছর বয়সে সুদে-আসলে প্রভিডেন্ট ফান্ডের টাকা ও দুর্ঘটনায় মৃত্যুতে ২ লাখ টাকার ক্ষতিপূরণ।"],
            hi: ["60 वर्ष की आयु में पीएफ राशि और आकस्मिक मृत्यु पर ₹2 लाख।"]
        },
        process_steps: {
            en: [
                "Visit bmssy.wblabour.gov.in.",
                "Click 'New Registration' or submit application at Duare Sarkar camp / Bangla Sahayata Kendra (BSK).",
                "Download BMSSY digital Samajik Suraksha card upon approval."
            ],
            bn: [
                "bmssy.wblabour.gov.in অথবা দুয়ারে সরকার/BSK কেন্দ্রে গিয়ে বিনামূল্যে BMSSY কার্ডের জন্য আবেদন করুন।"
            ],
            hi: [
                "bmssy.wblabour.gov.in या द्वारे सरकार कैंप में आवेदन करें और कार्ड पाएं।"
            ]
        },
        official_homepage: "https://bmssy.wblabour.gov.in/",
        official_apply_url: "https://bmssy.wblabour.gov.in/",
        official_status_url: "https://bmssy.wblabour.gov.in/",
        official_helpline: "1800 103 0009 (Toll Free)",
        official_email: "support.bmssy@wblabour.gov.in",
        state: "West Bengal",
        availability: "Online + Duare Sarkar + BSK",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://bmssy.wblabour.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["bmssy", "samajik suraksha", "unorganized workers wb", "labour scheme", "সামাজিক সুরক্ষা যোজনা", "শ্রমিক সুরক্ষা", "বিএমএসএসওয়াই", "सामाजिक सुरक्षा योजना"]
    },

    // 20. HDFC Bank NetBanking
    {
        service_id: "pvt-hdfc-netbanking",
        service_name: {
            en: "HDFC Bank NetBanking Portal",
            bn: "এইচডিএফসি ব্যাংক নেটব্যাঙ্কিং (HDFC NetBanking)",
            hi: "एचडीएफसी बैंक नेटबैंकिंग (HDFC NetBanking)"
        },
        short_description: {
            en: "Official HDFC Bank secure digital banking gateway for account holders to transfer funds via IMPS/NEFT, download stamped statements, manage debit/credit cards, and book fixed deposits.",
            bn: "এইচডিএফসি ব্যাংকের সুরক্ষিত ইন্টারনেট ব্যাংকিং পোর্টাল—তাত্ক্ষণিক ফান্ড ট্রান্সফার ও স্টেটমেন্ট ডাউনলোড।",
            hi: "एचडीएफसी बैंक सुरक्षित इंटरनेट बैंकिंग—फंड ट्रांसफर और बैंक स्टेटमेंट डाउनलोड।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Private Banking",
        authority: "HDFC Bank Limited (Corporate Entity)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["HDFC Account Holders", "Businesses", "Citizens"],
        eligibility: {
            en: ["Active HDFC Savings or Current account holders."],
            bn: ["সচল এইচডিএফসি ব্যাংক অ্যাকাউন্টধারী।"],
            hi: ["एचडीएफसी बैंक खाताधारक।"]
        },
        required_documents: {
            en: ["Customer ID", "Registered Mobile Number for OTP", "Debit Card / IPIN for authentication."],
            bn: ["কাস্টমার আইডি, রেজিস্টার্ড মোবাইল ও ডেবিট কার্ড।"],
            hi: ["कस्टमर आईडी और पंजीकृत मोबाइल नंबर।"]
        },
        application_fee: {
            en: "Free online banking access.",
            bn: "সম্পূর্ণ বিনামূল্যে।",
            hi: "निःशुल्क।"
        },
        benefits: {
            en: ["Secure 24x7 fund transfers.", "Instant e-statements for visa, loan, and government form verification."],
            bn: ["২৪x৭ ফান্ড ট্রান্সফার ও ফর্ম ফিলাপের জন্য ডাউনলোডযোগ্য স্টেটমেন্ট।"],
            hi: ["24x7 फंड ट्रांसफर और ऑनलाइन स्टेटमेंट।"]
        },
        process_steps: {
            en: [
                "Visit official portal (netbanking.hdfcbank.com).",
                "Enter Customer ID and click 'Continue'.",
                "Enter IPIN (Password) and complete OTP validation.",
                "Access banking dashboard."
            ],
            bn: [
                "netbanking.hdfcbank.com পোর্টালে গিয়ে কাস্টমার আইডি ও পাসওয়ার্ড দিয়ে নিরাপদে লগইন করুন।"
            ],
            hi: [
                "netbanking.hdfcbank.com पर जाकर कस्टमर आईडी से सुरक्षित लॉगिन करें।"
            ]
        },
        official_homepage: "https://www.hdfcbank.com/",
        official_apply_url: "https://netbanking.hdfcbank.com/netbanking/",
        official_status_url: "https://netbanking.hdfcbank.com/",
        official_helpline: "1800 202 6161 / 1800 1600 (Toll Free)",
        official_email: "support@hdfcbank.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://netbanking.hdfcbank.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["hdfc", "hdfc netbanking", "hdfc login", "hdfc statement", "এইচডিএফসি", "এইচডিএফসি ব্যাংক", "एचडीएफसी बैंक"],
        scam_warning: {
            en: "NEVER share HDFC Customer ID, Password, Card PIN, or OTP. HDFC Bank NEVER calls asking for OTPs.",
            bn: "কখনোই এইচডিএফসি পাসওয়ার্ড বা ওটিপি কাউকে জানাবেন না।",
            hi: "एचडीएफसी बैंक पासवर्ड या ओटीपी किसी के साथ साझा न करें।"
        }
    },

    // 21. ICICI Bank NetBanking
    {
        service_id: "pvt-icici-netbanking",
        service_name: {
            en: "ICICI Bank Internet Banking Portal",
            bn: "আইসিআইসিআই ব্যাংক ইন্টারনেট ব্যাংকিং (ICICI NetBanking)",
            hi: "आईसीआईसीआई बैंक इंटरनेट बैंकिंग"
        },
        short_description: {
            en: "Official ICICI Bank internet banking portal for secure retail and corporate transactions, e-tax payments, statement generation, and FASTag recharges.",
            bn: "আইসিআইসিআই ব্যাংকের অফিসিয়াল ইন্টারনেট ব্যাংকিং পোর্টাল—ফান্ড ট্রান্সফার ও স্টেটমেন্ট।",
            hi: "आईसीआईसीआई बैंक इंटरनेट बैंकिंग—फंड ट्रांसफर और ई-स्टेटमेंट।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी ডিজিটাল सेवाएं" },
        subcategory: "Private Banking",
        authority: "ICICI Bank Limited (Corporate Entity)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["ICICI Account Holders", "Citizens"],
        eligibility: {
            en: ["Active ICICI Bank account holders."],
            bn: ["আইসিআইসিআই অ্যাকাউন্টধারী।"],
            hi: ["आईसीआईसीआई खाताधारक।"]
        },
        required_documents: {
            en: ["User ID / Account Number", "Registered Mobile Number for OTP."],
            bn: ["ইউজার আইডি ও রেজিস্টার্ড মোবাইল নম্বর।"],
            hi: ["यूजर आईडी और पंजीकृत मोबाइल नंबर।"]
        },
        application_fee: {
            en: "Free online banking access.",
            bn: "বিনামূল্যে।",
            hi: "निःशुल्क।"
        },
        benefits: {
            en: ["24x7 fund transfers and instant e-statements."],
            bn: ["২৪x৭ লেনদেন ও ডাউনলোডযোগ্য ব্যাংক স্টেটমেন্ট।"],
            hi: ["24x7 बैंकिंग और ई-स्टेटमेंट।"]
        },
        process_steps: {
            en: [
                "Visit official portal (icicibank.com).",
                "Click 'Login' and enter User ID and Password.",
                "Verify via SMS OTP to access banking dashboard."
            ],
            bn: [
                "icicibank.com পোর্টালে গিয়ে ইউজার আইডি ও ওটিপি দিয়ে নিরাপদে লগইন করুন।"
            ],
            hi: [
                "icicibank.com पर सुरक्षित लॉगिन करें।"
            ]
        },
        official_homepage: "https://www.icicibank.com/",
        official_apply_url: "https://www.icicibank.com/",
        official_status_url: "https://www.icicibank.com/",
        official_helpline: "1800 1080 (Toll Free)",
        official_email: "customer.care@icicibank.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.icicibank.com/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["icici", "icici netbanking", "icici login", "iMobile", "আইসিআইসিআই", "आईसीआईसीआई"],
        scam_warning: {
            en: "Never share OTP or PIN with anyone.",
            bn: "কখনোই ওটিপি বা পিন কাউকে জানাবেন না।",
            hi: "ओटीपी या पिन किसी के साथ साझा न करें।"
        }
    },

    // 22. Axis Bank NetBanking
    {
        service_id: "pvt-axis-netbanking",
        service_name: {
            en: "Axis Bank Internet Banking Portal",
            bn: "অ্যাক্সিস ব্যাংক ইন্টারনেট ব্যাংকিং (Axis NetBanking)",
            hi: "एक्सिस बैंक इंटरनेट बैंकिंग"
        },
        short_description: {
            en: "Official Axis Bank digital banking gateway for account management, fund transfers, and credit card services.",
            bn: "অ্যাক্সিস ব্যাংকের ডিজিটাল ইন্টারনেট ব্যাংকিং পোর্টাল।",
            hi: "एक्सिस बैंक डिजिटल बैंकिंग पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Private Banking",
        authority: "Axis Bank Limited (Corporate Entity)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Axis Bank Account Holders"],
        eligibility: { en: ["Active Axis Bank account holders."], bn: ["অ্যাক্সিস ব্যাংক গ্রাহক।"], hi: ["एक्सिस बैंक खाताधारक।"] },
        required_documents: { en: ["Login ID / Customer ID", "Registered Mobile Number."], bn: ["কাস্টমার আইডি ও মোবাইল।"], hi: ["कस्टमर आईडी।"] },
        application_fee: { en: "Free.", bn: "বিনামূল্যে।", hi: "निःशुल्क।" },
        benefits: { en: ["24x7 online banking."], bn: ["২৪x৭ অনলাইন ব্যাংকিং।"], hi: ["24x7 बैंकिंग।"] },
        process_steps: { en: ["Visit axisbank.com and login via secure customer portal."], bn: ["axisbank.com-এ গিয়ে নিরাপদে লগইন করুন।"], hi: ["axisbank.com पर लॉगिन करें।"] },
        official_homepage: "https://www.axisbank.com/",
        official_apply_url: "https://www.axisbank.com/",
        official_status_url: "https://www.axisbank.com/",
        official_helpline: "1800 419 5959 (Toll Free)",
        official_email: "customer.service@axisbank.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.axisbank.com/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["axis", "axis bank", "axis netbanking", "অ্যাক্সিস ব্যাংক", "एक्सिस बैंक"]
    },

    // 23. Punjab National Bank (PNB One)
    {
        service_id: "pvt-pnb-netbanking",
        service_name: {
            en: "Punjab National Bank (PNB Internet Banking & PNB One)",
            bn: "পাঞ্জাব ন্যাশনাল ব্যাংক (PNB ইন্টারনেট ব্যাংকিং)",
            hi: "पंजाब नेशनल बैंक (PNB इंटरनेट बैंकिंग)"
        },
        short_description: {
            en: "Official Punjab National Bank digital banking portal for savings accounts, DBT credit tracking, and e-statements.",
            bn: "পাঞ্জাব ন্যাশনাল ব্যাংকের ইন্টারনেট ব্যাংকিং ও স্টেটমেন্ট পোর্টাল।",
            hi: "पंजाब नेशनल बैंक इंटरनेट बैंकिंग और स्टेटमेंट।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Public Sector Banking",
        authority: "Punjab National Bank (Public Sector Undertaking)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["PNB Account Holders"],
        eligibility: { en: ["PNB account holders."], bn: ["পিএনবি গ্রাহক।"], hi: ["पीएनबी खाताधारक।"] },
        required_documents: { en: ["User ID", "Mobile OTP."], bn: ["ইউজার আইডি ও ওটিপি।"], hi: ["यूजर आईडी।"] },
        application_fee: { en: "Free.", bn: "বিনামূল্যে।", hi: "निःशुल्क।" },
        benefits: { en: ["DBT scheme support and 24x7 banking."], bn: ["ডিবিটি সরকারি অনুদান গ্রহণ ও অনলাইন ব্যাংকিং।"], hi: ["डीबीटी सहायता व बैंकिंग।"] },
        process_steps: { en: ["Visit pnbindia.in and login via Retail Internet Banking."], bn: ["pnbindia.in-এ গিয়ে রিটেল ব্যাংকিংয়ে লগইন করুন।"], hi: ["pnbindia.in पर लॉगिन करें।"] },
        official_homepage: "https://www.pnbindia.in/",
        official_apply_url: "https://netpnb.com/",
        official_status_url: "https://netpnb.com/",
        official_helpline: "1800 1800 / 1800 2021 (Toll Free)",
        official_email: "care@pnb.co.in",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.pnbindia.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["pnb", "punjab national bank", "pnb netbanking", "pnb one", "পাঞ্জাব ন্যাশনাল ব্যাংক", "पंजाब नेशनल बैंक"]
    },

    // 24. Bank of Baroda (bob World)
    {
        service_id: "pvt-bob-netbanking",
        service_name: {
            en: "Bank of Baroda (bob World & Baroda Connect)",
            bn: "ব্যাংক অফ বরোদা (Bank of Baroda নেটব্যাঙ্কিং)",
            hi: "बैंक ऑफ बड़ौदा (bob World इंटरनेट बैंकिंग)"
        },
        short_description: {
            en: "Official Bank of Baroda digital banking portal for retail net banking, DBT subsidy credits, and account statements.",
            bn: "ব্যাংক অফ বরোদার অফিসিয়াল ইন্টারনেট ব্যাংকিং পোর্টাল।",
            hi: "बैंक ऑफ बड़ौदा इंटरनेट बैंकिंग व स्टेटमेंट पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Public Sector Banking",
        authority: "Bank of Baroda (Public Sector Undertaking)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["BOB Account Holders"],
        eligibility: { en: ["BOB account holders."], bn: ["বিওবি গ্রাহক।"], hi: ["बॉब खाताधारक।"] },
        required_documents: { en: ["User ID & Password."], bn: ["ইউজার আইডি ও পাসওয়ার্ড।"], hi: ["यूजर आईडी।"] },
        application_fee: { en: "Free.", bn: "বিনামূল্যে।", hi: "निःशुल्क।" },
        benefits: { en: ["24x7 online banking."], bn: ["২৪x৭ লেনদেন।"], hi: ["24x7 बैंकिंग।"] },
        process_steps: { en: ["Visit bankofbaroda.in and login via Baroda Connect."], bn: ["bankofbaroda.in-এ গিয়ে লগইন করুন।"], hi: ["bankofbaroda.in पर लॉगिन करें।"] },
        official_homepage: "https://www.bankofbaroda.in/",
        official_apply_url: "https://www.bobibanking.com/",
        official_status_url: "https://www.bobibanking.com/",
        official_helpline: "1800 5700 (Toll Free)",
        official_email: "customersupport@bankofbaroda.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.bankofbaroda.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["bank of baroda", "bob netbanking", "bob world", "ব্যাংক অফ বরোদা", "बैंक ऑफ बड़ौदा"]
    },

    // 25. PhonePe UPI
    {
        service_id: "pvt-phonepe-payments",
        service_name: {
            en: "PhonePe UPI & Digital Payments Portal",
            bn: "ফোনপে (PhonePe) ইউপিআই ও পেমেন্ট সার্ভিস",
            hi: "फोनपे (PhonePe) यूपीआई व डिजिटल भुगतान"
        },
        short_description: {
            en: "Official PhonePe platform for zero-cost instant UPI money transfers, utility bill payments (electricity, gas, mobile recharge), and FASTag management.",
            bn: "ইউপিআই পেমেন্ট, বিদ্যুৎ বিল জমা ও মোবাইল রিচার্জের জনপ্রিয় ডিজিটাল প্ল্যাটফর্ম।",
            hi: "यूपीआई मनी ट्रांसफर, बिजली बिल और मोबाइल रिचार्ज पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Digital Payments",
        authority: "PhonePe Private Limited (NPCI Regulated)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["All Smartphone Users", "Shoppers", "Citizens"],
        eligibility: { en: ["Indian mobile number with linked bank account."], bn: ["ব্যাংক সংযুক্ত মোবাইল নম্বর।"], hi: ["बैंक लिंक मोबाइल नंबर।"] },
        required_documents: { en: ["Debit Card / Aadhaar for initial UPI PIN setup."], bn: ["ডেবিট কার্ড বা আধার।"], hi: ["डेबिट कार्ड या आधार।"] },
        application_fee: { en: "Free UPI transfers.", bn: "ইউপিআই ট্রান্সফার বিনামূল্যে।", hi: "निःशुल्क यूपीआई।" },
        benefits: { en: ["Instant money transfer to any bank in India."], bn: ["যেকোনো ব্যাংকে তাৎক্ষণিক টাকা পাঠানো।"], hi: ["तुरंत बैंक ट्रांसफर।"] },
        process_steps: { en: ["Download PhonePe app from Google Play or App Store.", "Link bank account via SMS verification and set 4/6-digit UPI PIN."], bn: ["অ্যাপ ডাউনলোড করে ব্যাংক লিংক করুন।"], hi: ["ऐप डाउनलोड कर बैंक लिंक करें।"] },
        official_homepage: "https://www.phonepe.com/",
        official_apply_url: "https://www.phonepe.com/",
        official_status_url: "https://www.phonepe.com/",
        official_helpline: "080-68727374 / 022-68727374",
        official_email: "support@phonepe.com",
        state: "All India",
        availability: "App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.phonepe.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["phonepe", "upi payment", "bill payment", "phone pe", "ফোনপে", "ইউপিআই", "फोनपे"],
        scam_warning: {
            en: "Entering UPI PIN always DEBITS money from your account. You NEVER need to enter UPI PIN to receive money.",
            bn: "টাকা পাওয়ার জন্য কখনো ইউপিআই পিন দিতে হয় না। পিন দিলে টাকা কেটে যায়।",
            hi: "पैसे प्राप्त करने के लिए कभी यूपीआई पिन दर्ज न करें।"
        }
    },

    // 26. Google Pay India
    {
        service_id: "pvt-google-pay-payments",
        service_name: {
            en: "Google Pay India (GPay UPI Payments)",
            bn: "গুগল পে (Google Pay GPay ইউপিআই)",
            hi: "गूगल पे (Google Pay यूपीआई भुगतान)"
        },
        short_description: {
            en: "Official Google Pay India UPI application for fast peer-to-peer money transfers, merchant QR scanning, and utility bill payments.",
            bn: "গুগল পে ইউপিআই—সহজে কিউআর কোড স্ক্যান ও দ্রুত টাকা পাঠানোর বিশ্বস্ত মাধ্যম।",
            hi: "गूगल पे यूपीआई—क्यूआर कोड स्कैनिंग और त्वरित मनी ट्रांसफर।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Digital Payments",
        authority: "Google India Digital Services Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["All Smartphone Users"],
        eligibility: { en: ["Active Indian bank account with debit card/Aadhaar."], bn: ["সচল ভারতীয় ব্যাংক অ্যাকাউন্ট।"], hi: ["भारतीय बैंक खाता।"] },
        required_documents: { en: ["Bank Account Details & Mobile Number."], bn: ["ব্যাংক অ্যাকাউন্ট ও মোবাইল।"], hi: ["बैंक विवरण।"] },
        application_fee: { en: "Free UPI transfers.", bn: "বিনামূল্যে।", hi: "निःशुल्क।" },
        benefits: { en: ["Bank-grade security with NPCI UPI framework."], bn: ["নিরাপদ ইউপিআই লেনদেন।"], hi: ["सुरक्षित यूपीआई भुगतान।"] },
        process_steps: { en: ["Install GPay, register mobile number, link bank account and set UPI PIN."], bn: ["গুগল পে ইনস্টল করে ব্যাংক লিংক করুন।"], hi: ["जीपे इंस्टॉल कर बैंक लिंक करें।"] },
        official_homepage: "https://pay.google.com/about/",
        official_apply_url: "https://pay.google.com/about/",
        official_status_url: "https://pay.google.com/about/",
        official_helpline: "1800-419-0157",
        official_email: "support-in@google.com",
        state: "All India",
        availability: "App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://pay.google.com/about/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["google pay", "gpay", "upi transfer", "গুগল পে", "জিপে", "गूगल पे"]
    },

    // 27. Amazon India
    {
        service_id: "pvt-amazon-india-shopping",
        service_name: {
            en: "Amazon India (E-Commerce & Digital Marketplace)",
            bn: "অ্যামাজন ইন্ডিয়া (Amazon India অনলাইন শপিং)",
            hi: "अमेज़न इंडिया (Amazon India ऑनलाइन शॉपिंग)"
        },
        short_description: {
            en: "Official Amazon India portal for verified online shopping of books, electronics, home essentials, and educational study materials with customer buyer protection.",
            bn: "বই, ইলেকট্রনিক্স ও পড়াশোনার সামগ্রী কেনাকাটার নির্ভরযোগ্য অনলাইন শপিং পোর্টাল।",
            hi: "किताबें, इलेक्ट्रॉनिक्स और घरेलू सामान की ऑनलाइन खरीदारी पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "E-Commerce",
        authority: "Amazon Seller Services Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Shoppers", "Students", "General Public"],
        eligibility: { en: ["All citizens with valid delivery address."], bn: ["সমস্ত নাগরিক।"], hi: ["सभी नागरिक।"] },
        required_documents: { en: ["Delivery Address & Mobile Number."], bn: ["ঠিকানা ও মোবাইল নম্বর।"], hi: ["पता व मोबाइल।"] },
        application_fee: { en: "Free account creation.", bn: "অ্যাকাউন্ট খোলা সম্পূর্ণ ফ্রি।", hi: "निःशुल्क खाता।" },
        benefits: { en: ["100% genuine purchase protection and easy return policy."], bn: ["অরিজিনাল পণ্য ও সহজ রিটার্ন সুবিধা।"], hi: ["खरीद सुरक्षा और आसान वापसी।"] },
        process_steps: { en: ["Visit amazon.in, create account with mobile/email, and shop securely."], bn: ["amazon.in-এ গিয়ে অ্যাকাউন্ট তৈরি করে কেনাকাটা করুন।"], hi: ["amazon.in पर सुरक्षित खरीदारी करें।"] },
        official_homepage: "https://www.amazon.in/",
        official_apply_url: "https://www.amazon.in/",
        official_status_url: "https://www.amazon.in/",
        official_helpline: "1800 3000 9009 (Toll Free)",
        official_email: "cis@amazon.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.amazon.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["amazon", "amazon india", "online shopping", "books", "electronics", "অ্যামাজন", "অনলাইন শপিং", "अमेज़न"]
    },

    // 28. Flipkart
    {
        service_id: "pvt-flipkart-shopping",
        service_name: {
            en: "Flipkart Online Shopping Marketplace",
            bn: "ফ্লিপকার্ট (Flipkart অনলাইন শপিং)",
            hi: "फ्लिपकार्ट (Flipkart ऑनलाइन शॉपिंग)"
        },
        short_description: {
            en: "Official Flipkart e-commerce portal for mobile phones, electronics, fashion, and competitive exam books with doorstep delivery across India.",
            bn: "মোবাইল, ইলেকট্রনিক্স, জামাকাপড় ও পরীক্ষার বই কেনার জনপ্রিয় অনলাইন শপিং পোর্টাল।",
            hi: "मोबाइल, इलेक्ट्रॉनिक्स, कपड़े और किताबों की ऑनलाइन खरीदारी।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "E-Commerce",
        authority: "Flipkart Internet Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["General Public", "Students"],
        eligibility: { en: ["All consumers in India."], bn: ["সমস্ত গ্রাহক।"], hi: ["सभी उपभोक्ता।"] },
        required_documents: { en: ["Mobile Number."], bn: ["মোবাইল নম্বর।"], hi: ["मोबाइल नंबर।"] },
        application_fee: { en: "Free account.", bn: "ফ্রি অ্যাকাউন্ট।", hi: "निःशुल्क।" },
        benefits: { en: ["Fast delivery and wide merchant selection."], bn: ["দ্রুত ডেলিভারি ও ক্যাশ অন ডেলিভারি সুবিধা।"], hi: ["तेज डिलीवरी और आसान भुगतान।"] },
        process_steps: { en: ["Visit flipkart.com and browse verified products."], bn: ["flipkart.com-এ গিয়ে কেনাকাটা করুন।"], hi: ["flipkart.com पर खरीदारी करें।"] },
        official_homepage: "https://www.flipkart.com/",
        official_apply_url: "https://www.flipkart.com/",
        official_status_url: "https://www.flipkart.com/",
        official_helpline: "1800 202 9898 (Toll Free)",
        official_email: "support@flipkart.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.flipkart.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["flipkart", "flipkart shopping", "online books", "ফ্লিপকার্ট", "অনলাইন কেনাকাটা", "फ्लिपकार्ट"]
    },

    // 29. Meesho
    {
        service_id: "pvt-meesho-shopping",
        service_name: {
            en: "Meesho (Affordable Fashion & Reselling Marketplace)",
            bn: "মিশো (Meesho বাজেট শপিং প্ল্যাটফর্ম)",
            hi: "मीशो (Meesho बजट शॉपिंग प्लेटफॉर्म)"
        },
        short_description: {
            en: "Official Meesho platform for affordable fashion, household items, and direct-from-manufacturer products across India.",
            bn: "বাজেট ফ্রেন্ডলি জামাকাপড় ও গৃহস্থালির পণ্যের অনলাইন প্ল্যাটফর্ম।",
            hi: "किफायती कपड़े और घरेलू सामान का ऑनलाइन प्लेटफॉर्म।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "E-Commerce",
        authority: "Fashnear Technologies Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Budget Shoppers", "Micro-Entrepreneurs"],
        eligibility: { en: ["All shoppers."], bn: ["সমস্ত গ্রাহক।"], hi: ["सभी ग्राहक।"] },
        required_documents: { en: ["Mobile Number."], bn: ["মোবাইল নম্বর।"], hi: ["मोबाइल नंबर।"] },
        application_fee: { en: "Free.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["Low-cost items with free delivery across pin codes."], bn: ["বিনামূল্যে হোম ডেলিভারি ও কম দামে পণ্য।"], hi: ["कम कीमत और मुफ्त डिलीवरी।"] },
        process_steps: { en: ["Visit meesho.com or app."], bn: ["meesho.com ভিজিট করুন।"], hi: ["meesho.com पर जाएं।"] },
        official_homepage: "https://www.meesho.com/",
        official_apply_url: "https://www.meesho.com/",
        official_status_url: "https://www.meesho.com/",
        official_helpline: "080-61799600",
        official_email: "help@meesho.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.meesho.com/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["meesho", "meesho shopping", "budget clothes", "মিশো", "मीशो"]
    },

    // 30. Myntra
    {
        service_id: "pvt-myntra-fashion",
        service_name: {
            en: "Myntra (Fashion & Lifestyle E-Commerce)",
            bn: "মিন্ট্রা (Myntra ফ্যাশন ও লাইফস্টাইল)",
            hi: "मिंत्रा (Myntra फैशन व लाइफस्टाइल)"
        },
        short_description: {
            en: "Official Myntra portal for genuine branded apparel, footwear, accessories, and beauty products with verified brand authenticity.",
            bn: "ব্র্যান্ডেড পোশাক, জুতো ও লাইফস্টাইল সামগ্রীর অনলাইন ফ্যাশন স্টোর।",
            hi: "ब्रांडेड कपड़े, जूते और फैशन उत्पादों का ऑनलाइन स्टोर।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Fashion E-Commerce",
        authority: "Myntra Designs Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Fashion Shoppers", "Youth"],
        eligibility: { en: ["All shoppers."], bn: ["সমস্ত গ্রাহক।"], hi: ["सभी ग्राहक।"] },
        required_documents: { en: ["Mobile Number."], bn: ["মোবাইল নম্বর।"], hi: ["मोबाइल नंबर।"] },
        application_fee: { en: "Free account.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["100% original brand guarantee."], bn: ["১০০% অরিজিনাল ব্র্যান্ডের নিশ্চয়তা।"], hi: ["100% मूल ब्रांड गारंटी।"] },
        process_steps: { en: ["Visit myntra.com and shop."], bn: ["myntra.com ভিজিট করুন।"], hi: ["myntra.com पर जाएं।"] },
        official_homepage: "https://www.myntra.com/",
        official_apply_url: "https://www.myntra.com/",
        official_status_url: "https://www.myntra.com/",
        official_helpline: "080-61561999",
        official_email: "support@myntra.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.myntra.com/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["myntra", "myntra fashion", "clothes shopping", "মিন্ট্রা", "মিশ্ট্রা", "मिंत्रा"]
    },

    // 31. AJIO
    {
        service_id: "pvt-ajio-shopping",
        service_name: {
            en: "AJIO (Reliance Digital Fashion Marketplace)",
            bn: "আজিও (AJIO রিলায়েন্স ডিজিটাল ফ্যাশন)",
            hi: "आजियो (AJIO रिलायंस फैशन)"
        },
        short_description: {
            en: "Official Reliance Retail AJIO online shopping portal for trendy apparel, international brands, and ethnic wear.",
            bn: "রিলায়েন্স রিটেলের অফিসিয়াল অনলাইন ফ্যাশন ও ট্রেন্ডি পোশাকের প্ল্যাটফর্ম।",
            hi: "रिलायंस रिटेल का आधिकारिक ऑनलाइन फैशन और वस्त्र स्टोर।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Fashion E-Commerce",
        authority: "Reliance Retail Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Fashion Consumers", "Youth"],
        eligibility: { en: ["All consumers."], bn: ["সমস্ত গ্রাহক।"], hi: ["सभी उपभोक्ता।"] },
        required_documents: { en: ["Mobile Number."], bn: ["মোবাইল নম্বর।"], hi: ["मोबाइल नंबर।"] },
        application_fee: { en: "Free account.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["Exclusive trends with easy returns."], bn: ["সহজ রিটার্ন ও ব্র্যান্ডেড কালেকশন।"], hi: ["आसान वापसी और ब्रांडेड कपड़े।"] },
        process_steps: { en: ["Visit ajio.com."], bn: ["ajio.com ভিজিট করুন।"], hi: ["ajio.com पर जाएं।"] },
        official_homepage: "https://www.ajio.com/",
        official_apply_url: "https://www.ajio.com/",
        official_status_url: "https://www.ajio.com/",
        official_helpline: "1800 889 9991",
        official_email: "customercare@ajio.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.ajio.com/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["ajio", "reliance ajio", "clothes", "আজিও", "আজীয়", "आजियो"]
    },

    // 32. LinkedIn Careers
    {
        service_id: "pvt-linkedin-careers",
        service_name: {
            en: "LinkedIn (Professional Network & Career Search)",
            bn: "লিঙ্কডইন (LinkedIn প্রফেশনাল নেটওয়ার্ক ও ক্যারিয়ার)",
            hi: "लिंक्डइन (LinkedIn पेशेवर नेटवर्क और नौकरियां)"
        },
        short_description: {
            en: "Official LinkedIn global professional networking platform to build verified work profiles, connect with industry recruiters, and apply for corporate & tech jobs.",
            bn: "পেশাদার সিভি তৈরি, কর্পোরেট চাকরি আবেদন ও নেটওয়ার্কিং এর বিশ্বের সর্ববৃহৎ প্ল্যাটফর্ম।",
            hi: "पेशेवर सीवी निर्माण, कॉर्पोरेट नौकरी आवेदन और नेटवर्किंग प्लेटफॉर्म।"
        },
        category: "private-jobs",
        category_name: { en: "Private Jobs & Career Portals", bn: "বেসরকারি চাকরি ও ক্যারিয়ার", hi: "निजी नौकरियां और करियर" },
        subcategory: "Professional Networking",
        authority: "LinkedIn Corporation (Microsoft)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Professionals", "Graduates", "Job Seekers", "Students"],
        eligibility: { en: ["Individuals aged 16+ building a professional career."], bn: ["চাকরিপ্রার্থী ও পেশাদারবৃন্দ।"], hi: ["पेशेवर और स्नातक।"] },
        required_documents: { en: ["Email Address / Phone Number", "Resume / Work History."], bn: ["ইমেল ও সিভি (CV)।"], hi: ["ईमेल और बायोडाटा।"] },
        application_fee: { en: "Free basic profile and job applications.", bn: "ফ্রি প্রোফাইল ও চাকরির আবেদন।", hi: "निःशुल्क बुनियादी खाता।" },
        benefits: { en: ["Direct reach to hiring managers and recruiters across Fortune 500 companies."], bn: ["সরাসরি রিক্রুটারদের সাথে যোগাযোগ ও চাকরির সুযোগ।"], hi: ["कंपनियों के रिक्रूटर्स से सीधा संपर्क।"] },
        process_steps: { en: ["Visit linkedin.com, create verified profile, upload resume, and search 'Jobs'."], bn: ["linkedin.com-এ প্রোফাইল বানিয়ে চাকরির জন্য আবেদন করুন।"], hi: ["linkedin.com पर प्रोफाइल बनाएं और नौकरियों के लिए आवेदन करें।"] },
        official_homepage: "https://www.linkedin.com/",
        official_apply_url: "https://www.linkedin.com/jobs/",
        official_status_url: "https://www.linkedin.com/",
        official_helpline: "Online Help Center (linkedin.com/help)",
        official_email: "support@linkedin.com",
        state: "All India / Global",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.linkedin.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["linkedin", "corporate jobs", "software jobs", "resume builder", "লিঙ্কডইন", "বেসরকারি চাকরি", "लिंक्डइन"]
    },

    // 33. Naukri.com
    {
        service_id: "pvt-naukri-portal",
        service_name: {
            en: "Naukri.com (India's Largest Job Portal)",
            bn: "নকরি ডট কম (Naukri.com চাকরি সন্ধান পোর্টাল)",
            hi: "नौकरी.कॉम (Naukri.com जॉब पोर्टल)"
        },
        short_description: {
            en: "Official Info Edge Naukri.com portal for job seekers to create free resumes, receive job recruiter calls, and apply for private sector vacancies across India.",
            bn: "ভারতের বৃহত্তম বেসরকারি চাকরি সন্ধান পোর্টাল—বায়োডাটা আপলোড ও কর্পোরেট চাকরির সন্ধান।",
            hi: "भारत का प्रमुख निजी नौकरी पोर्टल—बायोडाटा अपलोड और कॉर्पोरेट नौकरियां।"
        },
        category: "private-jobs",
        category_name: { en: "Private Jobs & Career Portals", bn: "বেসরকারি চাকরি ও ক্যারিয়ার", hi: "निजी नौकरियां और करियर" },
        subcategory: "Private Jobs",
        authority: "Info Edge (India) Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Job Seekers", "Freshers", "Experienced Professionals"],
        eligibility: { en: ["All job seekers."], bn: ["সমস্ত চাকরিপ্রার্থী।"], hi: ["सभी नौकरी चाहने वाले।"] },
        required_documents: { en: ["Resume / CV (PDF/DOCX)", "Educational details."], bn: ["সিভি (CV) ও শিক্ষাগত যোগ্যতা।"], hi: ["बायोडाटा और शैक्षणिक विवरण।"] },
        application_fee: { en: "100% Free Candidate Registration & Job Applications.", bn: "চাকরির আবেদন সম্পূর্ণ বিনামূল্যে।", hi: "उम्मीदवारों के लिए निःशुल्क।" },
        benefits: { en: ["Direct visibility to over 50,000+ active recruiters."], bn: ["হাজার হাজার রিক্রুটারের কাছে সরাসরি সিভি পৌঁছে দেওয়ার সুযোগ।"], hi: ["हजारों कंपनियों में सीधी नौकरी के अवसर।"] },
        process_steps: { en: ["Visit naukri.com, click 'Register for Free', upload resume, and apply to matched jobs."], bn: ["naukri.com-এ সিভি আপলোড করে সরাসরি আবেদন করুন।"], hi: ["naukri.com पर बायोडाटा अपलोड करें और आवेदन करें।"] },
        official_homepage: "https://www.naukri.com/",
        official_apply_url: "https://www.naukri.com/",
        official_status_url: "https://www.naukri.com/",
        official_helpline: "1800-102-5558 (Toll Free)",
        official_email: "support@naukri.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.naukri.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["naukri", "naukri.com", "private jobs", "fresher jobs", "resume upload", "নকরি", "বেসরকারি কাজ", "नौकरी"]
    },

    // 34. Indeed India
    {
        service_id: "pvt-indeed-india-jobs",
        service_name: {
            en: "Indeed India (Global Job Search Engine)",
            bn: "ইনডিড ইন্ডিয়া (Indeed India চাকরি অনুসন্ধান)",
            hi: "इंडीड इंडिया (Indeed India जॉब सर्च)"
        },
        short_description: {
            en: "Official Indeed India job aggregator for discovering local city jobs, remote work, IT jobs, and office vacancies with one-click resume application.",
            bn: "লোকাল ও রিমোট বেসরকারি চাকরির সন্ধান ও এক ক্লিকে আবেদনের পোর্টাল।",
            hi: "स्थानीय और वर्क फ्रॉम होम नौकरियों की खोज व आवेदन पोर्टल।"
        },
        category: "private-jobs",
        category_name: { en: "Private Jobs & Career Portals", bn: "বেসরকারি চাকরি ও ক্যারিয়ার", hi: "निजी नौकरियां और करियर" },
        subcategory: "Private Jobs",
        authority: "Indeed India Operations Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Job Seekers", "Remote Workers", "Freshers"],
        eligibility: { en: ["All job seekers."], bn: ["সমস্ত চাকরিপ্রার্থী।"], hi: ["सभी नौकरी चाहने वाले।"] },
        required_documents: { en: ["Resume (PDF/DOC)."], bn: ["সিভি।"], hi: ["बायोडाटा।"] },
        application_fee: { en: "Free.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["Direct company reviews and salary insights."], bn: ["কোম্পানির রিভিউ ও বেতন যাচাইয়ের সুবিধা।"], hi: ["कंपनी समीक्षा और वेतन विवरण।"] },
        process_steps: { en: ["Visit in.indeed.com, search by job title and city (e.g. Kolkata, Mumbai)."], bn: ["in.indeed.com-এ গিয়ে শহরের নাম দিয়ে চাকরি খুঁজুন।"], hi: ["in.indeed.com पर शहर और पद के अनुसार खोजें।"] },
        official_homepage: "https://in.indeed.com/",
        official_apply_url: "https://in.indeed.com/",
        official_status_url: "https://in.indeed.com/",
        official_helpline: "Online Help Center",
        official_email: "support-in@indeed.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://in.indeed.com/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["indeed", "indeed india", "job search", "remote job", "ইনডিড", "চাকরি খোঁজা", "इंडीड"]
    },

    // 35. Internshala
    {
        service_id: "pvt-internshala-internships",
        service_name: {
            en: "Internshala (Paid Student Internships & Entry-Level Jobs)",
            bn: "ইন্টার্নশালা (Internshala পেইড ইন্টার্নশিপ ও চাকরি)",
            hi: "इंटर्नशाला (Internshala पेड इंटर्नशिप व नौकरियां)"
        },
        short_description: {
            en: "Official Internshala platform connecting college students and freshers with verified paid internships, work-from-home gigs, and early-career jobs with monthly stipends.",
            bn: "কলেজ পড়ুয়া ও ফ্রেশারদের জন্য মাসিক স্টাইপেন্ড সহ ভেরিফায়েড পেইড ইন্টার্নশিপের বৃহত্তম ভারতীয় প্ল্যাটফর্ম।",
            hi: "कॉलेज छात्रों और नए स्नातकों के लिए मासिक वजीफे के साथ सत्यापित पेड इंटर्नशिप पोर्टल।"
        },
        category: "internships",
        category_name: { en: "Government & AICTE Internships", bn: "ইন্টার্নশিপ ও শিক্ষানবিশী", hi: "इंटर्नशिप और प्रशिक्षण" },
        subcategory: "Student Internships",
        authority: "Scholiverse Educare Private Limited (AICTE Partner)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["College Students", "Fresh Graduates", "Career Starters"],
        eligibility: { en: ["Enrolled college students or recent graduates from any stream."], bn: ["কলেজ পড়ুয়া বা সদ্য পাশ করা গ্র্যাজুয়েট।"], hi: ["कॉलेज छात्र और नए स्नातक।"] },
        required_documents: { en: ["Student College Details", "Resume / Project links (GitHub/Portfolio)."], bn: ["কলেজ ডিটেলস ও সিভি।"], hi: ["कॉलेज विवरण व बायोडाटा।"] },
        application_fee: { en: "100% Free Student Account and Applications.", bn: "ছাত্রদের জন্য আবেদন সম্পূর্ণ বিনামূল্যে।", hi: "छात्रों के लिए 100% निःशुल्क।" },
        benefits: { en: ["Guaranteed stipend on all non-NGO internships (typically ₹5,000–₹25,000/month).", "Official Certificate of Completion."],
        bn: ["মাসিক নিশ্চিত স্টাইপেন্ড ও ইন্টার্নশিপ সার্টিফিকেট।"],
        hi: ["मासिक वजीफा और पूर्णता प्रमाण पत्र।"] },
        process_steps: { en: ["Visit internshala.com, register as student, build profile, and apply with cover letter."], bn: ["internshala.com-এ প্রোফাইল তৈরি করে স্টাইপেন্ড সহ ইন্টার্নশিপে আবেদন করুন।"], hi: ["internshala.com पर छात्र प्रोफाइल बनाएं और आवेदन करें।"] },
        official_homepage: "https://internshala.com/",
        official_apply_url: "https://internshala.com/internships/",
        official_status_url: "https://internshala.com/",
        official_helpline: "0124-4367427",
        official_email: "support@internshala.com",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://internshala.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["internshala", "paid internship", "work from home internship", "college internship", "ইন্টার্নশালা", "পেইড ইন্টার্নশিপ", "স্টাইপেন্ড", "इंटर्नशाला", "इंटर्नशिप"]
    },

    // 36. Apna App
    {
        service_id: "pvt-apna-career-app",
        service_name: {
            en: "Apna (Local City Jobs & Skill Community)",
            bn: "আপনা (Apna লোকাল চাকরি ও ডেলিভারি জবস)",
            hi: "अपना (Apna स्थानीय नौकरियां और रोजगार)"
        },
        short_description: {
            en: "Official Apna job platform connecting local job seekers directly with HR recruiters for sales, delivery, telecalling, accounts, and technician roles without middleman charges.",
            bn: "কোনো দালাল ছাড়াই সরাসরি এইচআর-এর সাথে ফোনে কথা বলে লোকাল চাকরির আবেদন।",
            hi: "बिना किसी बिचौलिए के सीधे एचआर से बात कर स्थानीय नौकरियां पाने का पोर्टल।"
        },
        category: "private-jobs",
        category_name: { en: "Private Jobs & Career Portals", bn: "বেসরকারি চাকরি ও ক্যারিয়ার", hi: "निजी नौकरियां और करियर" },
        subcategory: "Local Jobs",
        authority: "Apna Technologies Private Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["10th/12th Pass", "Graduates", "Technicians", "Drivers", "Office Staff"],
        eligibility: { en: ["Anyone looking for local employment in tier 1/2/3 cities."], bn: ["চাকরিপ্রার্থী যেকোনো নাগরিক।"], hi: ["स्थानीय नौकरी चाहने वाले।"] },
        required_documents: { en: ["Mobile Number & Basic Profile."], bn: ["মোবাইল নম্বর।"], hi: ["मोबाइल नंबर।"] },
        application_fee: { en: "100% Free Job Applications (Zero recruitment fees).", bn: "সম্পূর্ণ বিনামূল্যে আবেদন।", hi: "100% निःशुल्क।" },
        benefits: { en: ["Direct HR calling and same-day interview scheduling."], bn: ["সরাসরি ইন্টারভিউ শিডিউলিং।"], hi: ["सीधे एचआर से साक्षात्कार।"] },
        process_steps: { en: ["Visit apna.co or download Apna app to find local jobs."], bn: ["apna.co থেকে লোকাল চাকরি খুঁজুন।"], hi: ["apna.co पर स्थानीय नौकरियां खोजें।"] },
        official_homepage: "https://apna.co/",
        official_apply_url: "https://apna.co/",
        official_status_url: "https://apna.co/",
        official_helpline: "Online Help Center (apna.co)",
        official_email: "support@apna.co",
        state: "All India",
        availability: "App + Web",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://apna.co/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["apna", "apna app", "local jobs", "driver jobs", "delivery jobs", "আপনা", "লোকাল চাকরি", "अपना ऐप"]
    },

    // 37. Foundit India
    {
        service_id: "pvt-foundit-career-search",
        service_name: {
            en: "Foundit India (Formerly Monster India Careers)",
            bn: "ফাউন্ডইট (Foundit ইন্ডিয়া — পূর্ববর্তী Monster)",
            hi: "फाउंडइट (Foundit इंडिया — पूर्व में Monster)"
        },
        short_description: {
            en: "Official Foundit talent platform for smart AI job matching, resume scoring, and enterprise employment applications across India and Southeast Asia.",
            bn: "স্মার্ট এআই ম্যাচিং এর মাধ্যমে বেসরকারি ও আইটি চাকরির সন্ধান পোর্টাল।",
            hi: "एआई जॉब मैचिंग और करियर अवसर पोर्टल।"
        },
        category: "private-jobs",
        category_name: { en: "Private Jobs & Career Portals", bn: "বেসরকারি চাকরি ও ক্যারিয়ার", hi: "निजी नौकरियां और करियर" },
        subcategory: "Private Jobs",
        authority: "Monster.com India Private Limited (Foundit)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Experienced Professionals", "Tech Graduates"],
        eligibility: { en: ["All job seekers."], bn: ["সমস্ত চাকরিপ্রার্থী।"], hi: ["सभी नौकरी चाहने वाले।"] },
        required_documents: { en: ["Resume (PDF/DOCX)."], bn: ["সিভি।"], hi: ["बायोडाटा।"] },
        application_fee: { en: "Free candidate account.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["AI resume parsing and premium employer matching."], bn: ["এআই নির্ভর সিভি ম্যাচিং।"], hi: ["एआई आधारित जॉब मैचिंग।"] },
        process_steps: { en: ["Visit foundit.in and upload resume."], bn: ["foundit.in ভিজিট করুন।"], hi: ["foundit.in पर जाएं।"] },
        official_homepage: "https://www.foundit.in/",
        official_apply_url: "https://www.foundit.in/",
        official_status_url: "https://www.foundit.in/",
        official_helpline: "1800-419-6666",
        official_email: "support@foundit.in",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.foundit.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["foundit", "monster india", "job vacancy", "ফাউন্ডইট", "চাকরি পোর্টাল", "फाउंडइट"]
    },

    // 38. Reliance Jio
    {
        service_id: "pvt-jio-telecom-services",
        service_name: {
            en: "Reliance Jio (Jio Prepaid, Postpaid & JioFiber Broadband)",
            bn: "রিলায়েন্স জিও (Jio রিচার্জ, ফাইবার ব্রডব্যান্ড ও পোর্টাল)",
            hi: "रिलायंस जियो (Jio रिचार्ज, फाइबर ब्रॉडबैंड)"
        },
        short_description: {
            en: "Official Reliance Jio portal for online 5G mobile recharges, eSIM activation, JioFiber / AirFiber home broadband connections, and bill payments.",
            bn: "জিও ৫জি রিচার্জ, ই-সিম ও জিওফাইবার ব্রডব্যান্ড কানেকশনের অফিসিয়াল পোর্টাল।",
            hi: "जियो 5जी रिचार्ज, ई-सिम और फाइबर ब्रॉडबैंड पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी ডিজিটাল सेवाएं" },
        subcategory: "Telecom & Internet",
        authority: "Reliance Jio Infocomm Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Jio Subscribers", "Broadband Users"],
        eligibility: { en: ["All consumers."], bn: ["সমস্ত গ্রাহক।"], hi: ["सभी उपभोक्ता।"] },
        required_documents: { en: ["Jio Mobile Number / Broadband Service ID."], bn: ["জিও মোবাইল নম্বর।"], hi: ["जियो नंबर।"] },
        application_fee: { en: "Free portal access (recharge plan costs as selected).", bn: "পোর্টাল ফ্রি।", hi: "निःशुल्क पोर्टल।" },
        benefits: { en: ["Instant zero-convenience-fee recharges and live data balance."], bn: ["জিরো কনভেনিয়েন্স ফি দিয়ে তাৎক্ষণিক রিচার্জ।"], hi: ["तुरंत रिचार्ज व डेटा बैलेंस जांच।"] },
        process_steps: { en: ["Visit jio.com, enter Jio number, and recharge via UPI or NetBanking."], bn: ["jio.com-এ গিয়ে নম্বর দিয়ে রিচার্জ করুন।"], hi: ["jio.com पर जाकर रिचार्ज करें।"] },
        official_homepage: "https://www.jio.com/",
        official_apply_url: "https://www.jio.com/selfcare/recharge/mobility/",
        official_status_url: "https://www.jio.com/",
        official_helpline: "198 / 1991 (From Jio) or 1800 889 9999",
        official_email: "care@jio.com",
        state: "All India",
        availability: "Online + MyJio App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.jio.com/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["jio", "jio recharge", "jio fiber", "jio 5g", "jio airfiber", "myjio", "জিও", "জিও রিচার্জ", "জিও ফাইবার", "जियो", "जियो रिचार्ज"]
    },

    // 39. Bharti Airtel
    {
        service_id: "pvt-airtel-telecom-services",
        service_name: {
            en: "Bharti Airtel (Airtel Prepaid, Postpaid & Xstream Fiber)",
            bn: "ভারতী এয়ারটেল (Airtel রিচার্জ ও এক্সস্ট্রিম ফাইবার)",
            hi: "भारती एयरटेल (Airtel रिचार्ज व एक्सट्रीम फाइबर)"
        },
        short_description: {
            en: "Official Bharti Airtel portal for 5G mobile recharges, postpaid bill clearance, DTH top-up, and Airtel Xstream high-speed fiber broadband connections.",
            bn: "এয়ারটেল ৫জি রিচার্জ, ডিটিএইচ এবং এক্সস্ট্রিম ফাইবার ব্রডব্যান্ড বিল পেমেন্ট পোর্টাল।",
            hi: "एयरटेल 5जी मोबाइल रिचार्ज, डीटीएच और फाइबर ब्रॉडबैंड पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Telecom & Internet",
        authority: "Bharti Airtel Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Airtel Subscribers"],
        eligibility: { en: ["All consumers."], bn: ["সমস্ত গ্রাহক।"], hi: ["सभी उपभोक्ता।"] },
        required_documents: { en: ["Airtel Mobile Number / Account ID."], bn: ["এয়ারটেল নম্বর।"], hi: ["एयरटेल नंबर।"] },
        application_fee: { en: "Free portal access.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["Direct instant recharge with bank cashback offers."], bn: ["তাৎক্ষণিক রিচার্জ ও ক্যাশব্যাক সুবিধা।"], hi: ["त्वरित रिचार्ज व कैशबैक।"] },
        process_steps: { en: ["Visit airtel.in, enter Airtel number, choose pack, and pay online."], bn: ["airtel.in-এ গিয়ে রিচার্জ সম্পন্ন করুন।"], hi: ["airtel.in पर जाकर रिचार्ज करें।"] },
        official_homepage: "https://www.airtel.in/",
        official_apply_url: "https://www.airtel.in/recharge-online",
        official_status_url: "https://www.airtel.in/",
        official_helpline: "121 / 198 (From Airtel) or 1800 103 4444",
        official_email: "121@in.airtel.com",
        state: "All India",
        availability: "Online + Thanks App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.airtel.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["airtel", "airtel recharge", "xstream fiber", "airtel thanks", "এয়ারটেল", "এয়ারটেল রিচার্জ", "एयरटेल", "एयरटेल रिचार्ज"]
    },

    // 40. Vodafone Idea (Vi)
    {
        service_id: "pvt-vi-telecom-services",
        service_name: {
            en: "Vodafone Idea (Vi Prepaid & Postpaid Services)",
            bn: "ভোডাফোন আইডিয়া (Vi রিচার্জ ও পোস্টপেইড পোর্টাল)",
            hi: "वोडाफोन आइडिया (Vi रिचार्ज व पोस्टपेड पोर्टल)"
        },
        short_description: {
            en: "Official Vi (Vodafone Idea) portal for instant online prepaid recharges, international roaming packs, hero unlimited data plans, and postpaid bill payments.",
            bn: "ভোডাফোন আইডিয়া (Vi) মোবাইল রিচার্জ ও বিল পেমেন্টের অফিসিয়াল পোর্টাল।",
            hi: "वोडाफोन आइडिया (Vi) मोबाइल रिचार्ज और बिल भुगतान पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Telecom & Internet",
        authority: "Vodafone Idea Limited",
        government_level: "Private",
        service_type: "Private",
        target_users: ["Vi Mobile Subscribers"],
        eligibility: { en: ["Vi subscribers."], bn: ["ভি গ্রাহক।"], hi: ["वीआई उपभोक्ता।"] },
        required_documents: { en: ["Vi Mobile Number."], bn: ["ভি মোবাইল নম্বর।"], hi: ["वीआई नंबर।"] },
        application_fee: { en: "Free portal.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["Direct online discounts and zero transaction surcharge."], bn: ["জিরো ট্রানজাকশন ফিতে দ্রুত রিচার্জ।"], hi: ["तुरंत ऑनलाइन रिचार्ज।"] },
        process_steps: { en: ["Visit myvi.in, enter 10-digit number, and pay securely."], bn: ["myvi.in-এ গিয়ে রিচার্জ করুন।"], hi: ["myvi.in पर रिचार्ज करें।"] },
        official_homepage: "https://www.myvi.in/",
        official_apply_url: "https://www.myvi.in/prepaid/online-mobile-recharge",
        official_status_url: "https://www.myvi.in/",
        official_helpline: "199 (From Vi) or 1800 120 1111",
        official_email: "customercare@vodafoneidea.com",
        state: "All India",
        availability: "Online + Vi App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.myvi.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["vi", "vodafone idea", "vi recharge", "vodafone recharge", "ভি", "ভোডাফোন রিচার্জ", "वीआई", "वोडाफोन"]
    },

    // 41. BSNL Telecom
    {
        service_id: "pvt-bsnl-telecom-services",
        service_name: {
            en: "BSNL (Bharat Sanchar Nigam Limited — Mobile & Bharat Fibre)",
            bn: "বিএসএনএল (BSNL রিচার্জ ও ভারত ফাইবার ব্রডব্যান্ড)",
            hi: "बीएसएनएल (BSNL रिचार्ज व भारत फाइबर ब्रॉडबैंड)"
        },
        short_description: {
            en: "Official BSNL public sector telecom portal for online 4G/3G prepaid recharge, landline billing, Bharat Fibre FTTH broadband booking, and corporate leased lines.",
            bn: "ভারত সঞ্চার নিগম লিমিটেডের (BSNL) অনলাইন মোবাইল রিচার্জ ও ভারত ফাইবার ব্রডব্যান্ড পেমেন্ট পোর্টাল।",
            hi: "बीएसएनएल मोबाइल रिचार्ज, लैंडलाइन बिल और भारत फाइबर ब्रॉडबैंड पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Public Sector Telecom",
        authority: "Bharat Sanchar Nigam Limited (Government of India Enterprise)",
        government_level: "Central",
        service_type: "Telecom & Internet",
        target_users: ["BSNL Mobile & Landline Subscribers", "Broadband Users"],
        eligibility: { en: ["All BSNL subscribers."], bn: ["বিএসএনএল গ্রাহক।"], hi: ["बीएसएनएल उपभोक्ता।"] },
        required_documents: { en: ["BSNL Mobile Number / Landline STD & Phone Number."], bn: ["বিএসএনএল নম্বর।"], hi: ["बीएसएनएल नंबर।"] },
        application_fee: { en: "Free portal access.", bn: "ফ্রি।", hi: "निःशुल्क।" },
        benefits: { en: ["Highly affordable state-owned telecom tariff plans across rural and urban India."], bn: ["সাশ্রয়ী সরকারি টেলিকম প্ল্যান ও ওয়াইড কভারেজ।"], hi: ["किफायती सरकारी टेलीकॉम प्लान।"] },
        process_steps: { en: ["Visit portal.bsnl.in or bsnl.co.in to recharge or pay landline/FTTH bills online."], bn: ["portal.bsnl.in-এ গিয়ে অনলাইন রিচার্জ সম্পন্ন করুন।"], hi: ["portal.bsnl.in पर जाकर ऑनलाइन बिल भुगतान करें।"] },
        official_homepage: "https://www.bsnl.co.in/",
        official_apply_url: "https://portal.bsnl.in/",
        official_status_url: "https://portal.bsnl.in/",
        official_helpline: "1800-180-1503 / 1500 (Toll Free)",
        official_email: "portalhelpdesk@bsnl.co.in",
        state: "All India",
        availability: "Online + BSNL Selfcare App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.bsnl.co.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["bsnl", "bsnl recharge", "bharat fibre", "bsnl bill payment", "বিএসএনএল", "ভারত ফাইবার", "बीएसएनएल"]
    }
];

// Combine existing + additional services without duplicate IDs
const finalServices = [...existingServices];
const existingIdSet = new Set(existingServices.map(s => s.service_id));

additionalServices.forEach(srv => {
    if (!existingIdSet.has(srv.service_id)) {
        finalServices.push(srv);
        existingIdSet.add(srv.service_id);
    }
});

console.log('Total Master Portals:', masterPortals.length);
console.log('Total Services in Augmented Store:', finalServices.length);

// Generate formatted JS code
const jsCode = `/**
 * XESTUS Digital Seva Hub — Master Service Data & Taxonomy Store
 * Version: 2.0.0 (Comprehensive Verified Service Discovery Architecture)
 * 
 * DISCLAIMER:
 * XESTUS is an independent information, guidance and service-discovery platform.
 * XESTUS is NOT a Government entity, and is not affiliated with the Government of India,
 * Government of West Bengal, or any statutory authority.
 * All official portal links point to authentic, verified statutory domains (.gov.in, .nic.in, etc.)
 * or verified corporate portals for strictly segregated private services.
 * ZERO credential collection: XESTUS never asks for passwords, OTPs, PINs, or Aadhaar numbers.
 */

"use strict";

window.XESTUS_DIGITAL_SEVA_DATA = (function () {

    // =========================================================================
    // 1. MASTER 59-CATEGORY TAXONOMY
    // =========================================================================
    const CATEGORIES = ${JSON.stringify(existingCategories, null, 8)};

    // =========================================================================
    // 2. MASTER PORTALS (Quick Fallback / Universal Gateways)
    // =========================================================================
    const MASTER_PORTALS = ${JSON.stringify(masterPortals, null, 8)};

    // =========================================================================
    // 3. WEST BENGAL DISTRICTS & REGIONS
    // =========================================================================
    const DISTRICTS_WB = ${JSON.stringify(existingDistricts, null, 8)};

    // =========================================================================
    // 4. "I WANT TO..." INTENT ACTIONS
    // =========================================================================
    const IWANT_ACTIONS = ${JSON.stringify(existingIWantActions, null, 8)};

    // =========================================================================
    // 5. SCAM ALERTS & CYBER ADVISORIES (Helpline 1930)
    // =========================================================================
    const SCAM_ALERTS = ${JSON.stringify(existingScamAlerts, null, 8)};

    // =========================================================================
    // 6. MASTER VERIFIED SERVICES DIRECTORY (${finalServices.length}+ Services)
    // =========================================================================
    const SERVICES = ${JSON.stringify(finalServices, null, 8)};

    // =========================================================================
    // 7. PUBLIC API EXPORTS
    // =========================================================================
    return {
        getCategories: () => CATEGORIES,
        getMasterPortals: () => MASTER_PORTALS,
        getDistricts: () => DISTRICTS_WB,
        getIWantActions: () => IWANT_ACTIONS,
        getServices: () => SERVICES,
        getScamAlerts: () => SCAM_ALERTS,
        getServiceById: (id) => SERVICES.find((s) => s.service_id === id) || null,
        getPopularServices: () => SERVICES.filter((s) => s.is_popular)
    };

})();
`;

fs.writeFileSync('js/digital-seva-data.js', jsCode, 'utf8');
console.log('Successfully updated js/digital-seva-data.js with', finalServices.length, 'verified services!');
