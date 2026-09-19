const fs = require('fs');

const BATCH_2 = [
    // --- Central Services ---
    {
        service_id: "abc-academic-bank-credits",
        service_name: { en: "Academic Bank of Credits (ABC & APAAR ID)", bn: "একাডেমিক ব্যাঙ্ক অফ ক্রেডিট (ABC ও APAAR)", hi: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC व अपार)" },
        short_description: { en: "National educational digital credit repository under National Education Policy (NEP 2020) enabling seamless credit accumulation, transfer, and degree mobility.", bn: "জাতীয় শিক্ষানীতির অধীনে শিক্ষার্থীদের অ্যাকাডেমিক ক্রেডিট জমা ও এক বিশ্ববিদ্যালয় থেকে অন্যটিতে স্থানান্তরের ডিজিটাল ভল্ট।", hi: "राष्ट्रीय शिक्षा नीति (NEP 2020) के तहत छात्रों के शैक्षणिक क्रेडिट संचय और स्थानांतरण का डिजिटल रिपॉजिटरी।" },
        category: "college-admission",
        category_name: { en: "College & University Admission", bn: "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি", hi: "कॉलेज और विश्वविद्यालय प्रवेश" },
        subcategory: "Higher Education MoE",
        authority: "Ministry of Education / UGC / DigiLocker",
        government_level: "Central",
        service_type: "Education",
        target_users: ["College Student", "University Student", "Youth"],
        eligibility: { en: ["All enrolled students in Indian colleges and universities."], bn: ["ভারতের সমস্ত কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থী।"], hi: ["कॉलेज और विश्वविद्यालय के छात्र।"] },
        required_documents: { en: ["Aadhaar Number", "DigiLocker Account", "College/University Admission ID"], bn: ["আধার নম্বর", "ডিজিলকার অ্যাকাউন্ট", "কলেজের রোল/রেজিস্ট্রেশন নম্বর।"], hi: ["आधार नंबर और कॉलेज विवरण।"] },
        application_fee: { en: "100% Free Government Initiative.", bn: "সম্পূর্ণ বিনামূল্যে।", hi: "निःशुल्क सेवा।" },
        benefits: { en: ["Permanent 12-digit APAAR ID ('One Nation, One Student ID').", "Automated academic credit transfer across universities."], bn: ["স্থায়ী ১২ সংখ্যার APAAR স্টুডেন্ট আইডি।", "বিশ্ববিদ্যালয় পরিবর্তনের সময় গ্রেড ও ক্রেডিট স্থানান্তরের সুবিধা।"], hi: ["12 अंकों की अपार आईडी और क्रेडिट ट्रांसफर।"] },
        process_steps: {
            en: ["Visit official ABC portal (abc.gov.in) or DigiLocker.", "Click 'My Account' > 'Student' and sign in with DigiLocker credentials.", "Select your University/College and create APAAR / ABC ID.", "Share APAAR ID with your college examination cell."],
            bn: ["abc.gov.in বা DigiLocker-এ গিয়ে 'Student' অপশনে লগইন করুন এবং কলেজ নির্বাচন করে APAAR আইডি তৈরি করুন।"],
            hi: ["abc.gov.in पर जाएं और डिजिलॉकर के माध्यम से अपार आईडी बनाएं।"]
        },
        official_homepage: "https://www.abc.gov.in/",
        official_apply_url: "https://www.abc.gov.in/",
        official_status_url: "https://www.abc.gov.in/",
        official_helpline: "1800-111-555",
        official_email: "abc.support@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.abc.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["abc id", "apaar id", "academic bank of credits", "nep 2020", "student credit", "এবিসি আইডি", "আপার আইডি", "एबीसी आईडी", "अपार आईडी"],
        scam_warning: { en: "APAAR/ABC ID creation is 100% free on DigiLocker. Never pay fees for student ID generation.", bn: "APAAR আইডি সম্পূর্ণ বিনামূল্যে তৈরি হয়। কোনো টাকা দেবেন না।", hi: "अपार आईडी बनाना पूरी तरह मुफ्त है।" }
    },
    {
        service_id: "nta-jee-neet-cuet-exams",
        service_name: { en: "NTA National Entrance Examinations (JEE, NEET, CUET)", bn: "এনটিএ জাতীয় প্রবেশিকা পরীক্ষা পোর্টাল (JEE, NEET, CUET)", hi: "एनटीए राष्ट्रीय प्रवेश परीक्षा पोर्टल (JEE, NEET, CUET)" },
        short_description: { en: "Official National Testing Agency (NTA) portal for online applications, city intimation slips, admit cards, answer keys, and scorecards for JEE Main, NEET UG, and CUET.",
            bn: "মেডিকেল (NEET), ইঞ্জিনিয়ারিং (JEE Main) এবং বিশ্ববিদ্যালয় ভর্তির (CUET) প্রবেশিকা পরীক্ষার আবেদন ও অ্যাডমিট কার্ডের অফিসিয়াল পোর্টাল।",
            hi: "जेईई मेन, नीट और सीयूईटी प्रवेश परीक्षाओं के ऑनलाइन आवेदन और परिणाम का आधिकारिक एनटीए पोर्टल।" },
        category: "entrance-exams",
        category_name: { en: "Entrance Examinations (JEE/NEET)", bn: "প্রবেশিকা পরীক্ষা (JEE/NEET)", hi: "प्रवेश परीक्षाएं (JEE/NEET)" },
        subcategory: "NTA MoE",
        authority: "National Testing Agency (NTA), Ministry of Education, Govt of India",
        government_level: "Central",
        service_type: "Education",
        target_users: ["Class 12 Student", "Medical Aspirant", "Engineering Aspirant"],
        eligibility: { en: ["Students appearing for or passed Class 12 / Higher Secondary examination."], bn: ["দ্বাদশ শ্রেণী উত্তীর্ণ বা পরীক্ষার্থী ছাত্র-ছাত্রী।"], hi: ["12वीं कक्षा के छात्र।"] },
        required_documents: { en: ["Passport photograph & Signature scan", "Class 10 & 12 Marksheets/Certificates", "Category Certificate (SC/ST/OBC-NCL/EWS/PwD if applicable)", "Aadhaar Card"], bn: ["ছবি ও সই স্ক্যান", "মাধ্যমিক ও উচ্চ মাধ্যমিক মার্কশিট", "কাস্ট সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)", "আধার কার্ড।"], hi: ["फोटो, हस्ताक्षर, मार्कशीट, जाति प्रमाण पत्र और आधार।"] },
        application_fee: { en: "Standard NTA exam fees vary by course and category (e.g. ₹1,000 for Gen, ₹500 for reserved).", bn: "পরীক্ষা ও ক্যাটাগরি অনুযায়ী নির্ধারিত সরকারি ফি।", hi: "श्रेणी अनुसार निर्धारित परीक्षा शुल्क।" },
        benefits: { en: ["Standardized nationwide entrance to AIIMS, IITs, NITs, and Central Universities.", "Completely transparent computer-based testing (CBT)."], bn: ["সারা ভারতের সেরা মেডিকেল, ইঞ্জিনিয়ারিং ও সেন্ট্রাল ইউনিভার্সিটিতে ভর্তির সুযোগ।"], hi: ["आईआईटी, एम्स और केंद्रीय विश्वविद्यालयों में प्रवेश।"] },
        process_steps: {
            en: ["Visit the official NTA portal (nta.ac.in) or examination specific portal (e.g. jeemain.nta.nic.in, neet.ntaonline.in).", "Click 'New Registration' and fill personal and academic details.", "Upload scanned photograph, signature, and category certificates in specified format.", "Pay application fee online through Payment Gateway and print Confirmation Page."],
            bn: ["অফিসিয়াল nta.ac.in পোর্টালে যান ও নির্দিষ্ট পরীক্ষার লিংকে রেজিস্ট্রেশন সম্পন্ন করুন।"],
            hi: ["nta.ac.in पर जाएं और परीक्षा के लिए ऑनलाइन आवेदन करें।"]
        },
        official_homepage: "https://nta.ac.in/",
        official_apply_url: "https://nta.ac.in/",
        official_status_url: "https://nta.ac.in/",
        official_helpline: "011-40759000 / 011-69227700",
        official_email: "genadmin@nta.ac.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://nta.ac.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["nta", "jee main", "neet ug", "cuet", "nta admit card", "entrance exam", "এনটিএ", "জেইই", "নিট", "সিইউইটি", "एनटीए", "जेईई", "नीट"],
        scam_warning: { en: "Always ensure you are on official 'nta.ac.in' or 'nta.nic.in' domains. Beware of duplicate phishing portals offering 'guaranteed seat booking'.", bn: "সর্বদা nta.ac.in বা nta.nic.in ডোমেইন নিশ্চিত করুন। ভুয়া অ্যাডমিশন লিংকে টাকা দেবেন না।", hi: "केवल आधिकारिक nta.ac.in पोर्टल का उपयोग करें।" }
    },
    {
        service_id: "mca21-company-llp-filing",
        service_name: { en: "MCA21 Corporate & Company Registration", bn: "এমসিএ২১ কোম্পানি ও এলএলপি রেজিস্ট্রেশন", hi: "एमसीए21 कंपनी व एलएलपी पंजीकरण" },
        short_description: { en: "Ministry of Corporate Affairs portal for online incorporation of Private Limited Companies, One Person Companies (OPC), LLPs, DIN allocation, and statutory annual filings.",
            bn: "প্রাইভেট লিমিটেড কোম্পানি, ওয়ান পার্সন কোম্পানি, এলএলপি গঠন, ডিরেক্টর আইডেন্টিফিকেশন নম্বর (DIN) ও বার্ষিক রিটার্ন জমা দেওয়ার সরকারি পোর্টাল।",
            hi: "कंपनी और एलएलपी निगमन, डीआईएन आवंटन और वार्षिक फाइलिंग का कॉर्पोरेट कार्य मंत्रालय का आधिकारिक पोर्टल।" },
        category: "business-startup",
        category_name: { en: "Business & MSME (Udyam Registration)", bn: "ব্যবসা ও এমএসএমই (উদ্যম)", hi: "व्यवसाय और एमएसएमई (उद्यम)" },
        subcategory: "MCA Corporate",
        authority: "Ministry of Corporate Affairs (MCA), Government of India",
        government_level: "Central",
        service_type: "Business",
        target_users: ["Entrepreneur", "Startup Founder", "Chartered Accountant", "Company Secretary"],
        eligibility: { en: ["Any individual or enterprise seeking legal company incorporation in India."], bn: ["ভারতে নতুন কোম্পানি বা এলএলপি খুলতে ইচ্ছুক যেকোনো নাগরিক।"], hi: ["भारत में कंपनी निगमन के इच्छुक उद्यमी।"] },
        required_documents: { en: ["Digital Signature Certificate (DSC)", "PAN & Aadhaar of all Directors", "Proof of Registered Office (Electricity Bill & NOC)", "Memorandum & Articles of Association (MOA/AOA)"], bn: ["ডিজিটাল সিগনেচার সার্টিফিকেট (DSC)", "ডিরেক্টরদের প্যান ও আধার", "অফিসের ঠিকানার প্রমাণ ও বিদ্যুৎ বিল।"], hi: ["डिजिटल सिग्नेचर, पैन, आधार और ऑफिस पता प्रमाण।"] },
        application_fee: { en: "Statutory MCA SPICe+ filing fee & Stamp duty (zero incorporation fee for small capital companies).", bn: "সরকারি নির্ধারিত স্ট্যাম্প ডিউটি ও ফাইলিং ফি।", hi: "निर्धारित सरकारी शुल्क व स्टाम्प ड्यूटी।" },
        benefits: { en: ["Single-window SPICe+ form integrating Company Name, PAN, TAN, EPFO, ESIC, and Bank Account.", "Limited liability protection and equity fundraising capability."], bn: ["একটিমাত্র SPICe+ ফর্মের মাধ্যমে কোম্পানি, প্যান, ট্যান ও ব্যাংক অ্যাকাউন্ট একযোগে চালু।"], hi: ["एकल खिड़की एसपीआईसीई+ निगमन सुविधा।"] },
        process_steps: {
            en: ["Visit official MCA portal (mca.gov.in).", "Log in to MCA V3 portal with Director/Professional credentials.", "Submit SPICe+ Part A for Name Reservation.", "Complete SPICe+ Part B, AGILE-PRO-S, upload DSC, and pay statutory stamp duty."],
            bn: ["mca.gov.in পোর্টালে লগইন করে SPICe+ ফর্মের মাধ্যমে কোম্পানি রেজিস্টার করুন।"],
            hi: ["mca.gov.in पर जाएं और एसपीआईसीई+ फॉर्म जमा करें।"]
        },
        official_homepage: "https://www.mca.gov.in/",
        official_apply_url: "https://www.mca.gov.in/content/mca/global/en/home.html",
        official_status_url: "https://www.mca.gov.in/mcafoportal/trackSRN.do",
        official_helpline: "0124-4832500 (MCA Helpdesk)",
        official_email: "appl.helpdesk@mca.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://mca.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["mca", "company registration", "pvt ltd", "llp registration", "mca21", "spice+", "কোম্পানি রেজিস্ট্রেশন", "এমসিএ", "कंपनी पंजीकरण"],
        scam_warning: { en: "Always file on official mca.gov.in. Verify all authorized signatories on the portal.", bn: "সর্বদা সরকারি mca.gov.in পোর্টাল ব্যবহার করুন।", hi: "केवल आधिकारिक mca.gov.in पोर्टल का उपयोग करें।" }
    },
    {
        service_id: "startup-india-hub",
        service_name: { en: "Startup India Portal & DPIIT Recognition", bn: "স্টার্টআপ ইন্ডিয়া পোর্টাল ও ডিপিআইআইটি স্বীকৃতি", hi: "स्टार्टअप इंडिया पोर्टल व डीपीआईआईटी मान्यता" },
        short_description: { en: "Flagship Government of India initiative empowering startups with DPIIT tax exemption (Section 80-IAC), Angel tax relief, fast-track patent filing, and government seed funds.",
            bn: "ভারত সরকারের স্টার্টআপ প্রকল্প যার মাধ্যমে কর ছাড়, পেটেন্ট সুবিধা ও সরকারি অনুদানের জন্য ডিপিআইআইটি শংসাপত্র পাওয়া যায়।",
            hi: "स्टार्टअप इंडिया पोर्टल - कर छूट, पेटेंट सहायता और सरकारी सीड फंड के लिए डीपीआईआईटी मान्यता।" },
        category: "business-startup",
        category_name: { en: "Business & MSME (Udyam Registration)", bn: "ব্যবসা ও এমএসএমই (উদ্যম)", hi: "व्यवसाय और एमएसएमई (उद्यम)" },
        subcategory: "DPIIT Commerce",
        authority: "Department for Promotion of Industry and Internal Trade (DPIIT), Govt of India",
        government_level: "Central",
        service_type: "Business",
        target_users: ["Startup Founder", "Tech Innovator", "Entrepreneur"],
        eligibility: { en: ["Private Limited / LLP / Partnership incorporated less than 10 years ago with turnover under ₹100 Crore."], bn: ["১০ বছরের মধ্যে গঠিত প্রাইভেট লিমিটেড বা এলএলপি যার টার্নওভার ১০০ কোটির কম।"], hi: ["10 वर्ष के भीतर निगमित स्टार्टअप।"] },
        required_documents: { en: ["Certificate of Incorporation / Registration", "Brief write-up on innovation / scalability", "Pitch deck / Website link"], bn: ["কোম্পানি সার্টিফিকেট", "ইনোভেশন ও ব্যবসার বিবরণী।"], hi: ["निगमन प्रमाण पत्र और नवाचार विवरण।"] },
        application_fee: { en: "100% Free Government Recognition.", bn: "সম্পূর্ণ বিনামূল্যে সরকারি স্বীকৃতি।", hi: "निःशुल्क सरकारी मान्यता।" },
        benefits: { en: ["3-year income tax exemption under 80-IAC.", "80% rebate on patent filing fees and self-certification under 6 labour laws."], bn: ["৩ বছরের আয়কর ছাড় ও পেটেন্ট ফিতে ৮০% সরকারি ছাড়।"], hi: ["3 वर्ष की आयकर छूट और पेटेंट शुल्क में 80% छूट।"] },
        process_steps: {
            en: ["Visit the official Startup India portal (startupindia.gov.in).", "Click 'Register' and create your startup profile.", "Apply for DPIIT Recognition with company incorporation certificate and business innovation note.", "Download official DPIIT Recognition Certificate once approved."],
            bn: ["startupindia.gov.in পোর্টালে প্রোফাইল খুলে DPIIT স্বীকৃতির জন্য আবেদন করুন।"],
            hi: ["startupindia.gov.in पर जाएं और डीपीआईआईटी मान्यता के लिए आवेदन करें।"]
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
        source_url: "https://startupindia.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["startup india", "dpiit", "startup recognition", "seed fund", "angel tax", "স্টার্টআপ ইন্ডিয়া", "স্টার্টআপ", "स्टार्टअप इंडिया"],
        scam_warning: { en: "DPIIT startup recognition carries zero government fee. Do not pay agents for certificate issuance.", bn: "ডিপিআইআইটি স্বীকৃতি সম্পূর্ণ বিনামূল্যে পাওয়া যায়।", hi: "डीपीआईआईटी मान्यता पूरी तरह से निःशुल्क है।" }
    },

    // --- West Bengal Services ---
    {
        service_id: "wb-registration-deeds-stamps",
        service_name: { en: "WB Registration & e-Deed Stamp Revenue", bn: "পশ্চিমবঙ্গ দলিল রেজিস্ট্রেশন ও স্ট্যাম্প রেভিনিউ", hi: "पश्चिम बंगाल विलेख पंजीकरण व स्टाम्प राजस्व" },
        short_description: { en: "Official portal of Directorate of Registration & Stamp Revenue, West Bengal for property market valuation, e-assessment, e-payment of stamp duty, and online deed registration booking.",
            bn: "জমির সরকারি বাজারমূল্য যাচাই, স্ট্যাম্প ডিউটি ই-পেমেন্ট ও দলিল রেজিস্ট্রেশনের জন্য সরকারি পোর্টাল।",
            hi: "पश्चिम बंगाल में संपत्ति बाजार मूल्य निर्धारण, स्टाम्प ड्यूटी भुगतान और रजिस्ट्री बुकिंग का आधिकारिक पोर्टल।" },
        category: "land-property",
        category_name: { en: "Land & Property (Banglarbhumi)", bn: "জমি ও সম্পত্তি (বাংলারভূমি)", hi: "भूमि और संपत्ति (बांगलারভূমি)" },
        subcategory: "Registration Dept WB",
        authority: "Directorate of Registration and Stamp Revenue, Finance Dept, Govt of West Bengal",
        government_level: "State",
        service_type: "Property",
        target_users: ["Property Buyer", "Property Seller", "Citizen"],
        eligibility: { en: ["All citizens executing property sale, gift, partition, or power of attorney deeds in West Bengal."], bn: ["পশ্চিমবঙ্গে জমি বা বাড়ি কেনাবেচা ও দলিলকারী সমস্ত নাগরিক।"], hi: ["पश्चिम बंगाल में संपत्ति रजिस्ट्री कराने वाले नागरिक।"] },
        required_documents: { en: ["Draft Deed document", "PAN & Aadhaar of Buyer & Seller", "Banglarbhumi Khatian / Porcha Copy", "Previous link deeds & tax receipts"], bn: ["দলিলের খসড়া", "ক্রেতা-বিক্রেতার প্যান ও আধার", "বাংলারভূমি খতিয়ান/পর্চা", "পূর্ববর্তী লিংক দলিল।"], hi: ["विलेख मसौदा, पैन, आधार और खतियान पर्चा।"] },
        application_fee: { en: "State statutory stamp duty and registration fees as per market valuation.", bn: "সরকারি বাজারদর অনুযায়ী নির্ধারিত স্ট্যাম্প ডিউটি ও রেজিস্ট্রেশন ফি।", hi: "सरकारी नियमानुसार स्टाम्প ड्यूटी व रजिस्ट्री शुल्क।" },
        benefits: { en: ["Instant online market valuation of plot/flat.", "e-Deed submission and transparent slot booking at Sub-Registrar Office."], bn: ["জমির সরকারি ভ্যালুয়েশন ও অনলাইনে অগ্রিম স্লট বুকিংয়ের সুবিধা।"], hi: ["ऑनलाइन संपत्ति मूल्यांकन और पारदर्शी रजिस्ट्री।"] },
        process_steps: {
            en: ["Visit official portal (wbregistration.gov.in).", "Calculate Market Valuation by entering Mouza, JL Number, and Khatian/Plot details.", "Fill e-Assessment Form and pay Stamp Duty & Registration Fee online through GRIPS.", "Book appointment slot for physical biometric presentation at Sub-Registrar Office."],
            bn: ["wbregistration.gov.in পোর্টালে গিয়ে ভ্যালুয়েশন বের করুন, GRIPS-এ ফি জমা দিন ও অ্যাপয়েন্টমেন্ট বুক করুন।"],
            hi: ["wbregistration.gov.in पर मूल्यांकन जांचें और रजिस्ट्री का समय बुक करें।"]
        },
        official_homepage: "https://wbregistration.gov.in/",
        official_apply_url: "https://wbregistration.gov.in/",
        official_status_url: "https://wbregistration.gov.in/",
        official_helpline: "033-2223-0101 (Helpline)",
        official_email: "support.igrwbr@wb.gov.in",
        state: "West Bengal",
        availability: "Online + Sub-Registrar Office",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://wbregistration.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["wbregistration", "deed registration", "stamp duty", "land valuation", "grips payment", "দলিল রেজিস্ট্রেশন", "স্ট্যাম্প ডিউটি", "জমির ভ্যালুয়েশন", "विलेख पंजीकरण", "स्टाम्प ड्यूटी"],
        scam_warning: { en: "Always calculate valuation on official 'wbregistration.gov.in'. Pay stamp duty exclusively via official GRIPS portal.", bn: "সর্বদা সরকারি wbregistration.gov.in পোর্টাল ও GRIPS-এর মাধ্যমে স্ট্যাম্প ডিউটি দিন।", hi: "केवल आधिकारिक पोर्टल से स्टाम्प ड्यूटी का भुगतान करें।" }
    },
    {
        service_id: "wb-silpasathi-single-window",
        service_name: { en: "SilpaSathi Single Window Business Portal", bn: "শিল্পসাথী সিঙ্গল উইন্ডো ব্যবসা ও ট্রেড লাইসেন্স", hi: "शिल्पसाथी सिंगल विंडो व्यापार व ट्रेड लाइसेंस" },
        short_description: { en: "Government of West Bengal unified business portal offering online issuance of Trade Licences, Fire Safety clearances, Environmental NOCs, and Factory registrations across all municipalities and panchayats.",
            bn: "পশ্চিমবঙ্গ সরকারের একক পোর্টাল যেখান থেকে ট্রেড লাইসেন্স, ফায়ার এনওসি, কারখানা ও পরিবেশ ছাড়পত্র অনলাইনে পাওয়া যায়।",
            hi: "पश्चिम बंगाल सरकार का सिंगल विंडो पोर्टल जहां से ट्रेड लाइसेंस, फायर एनओसी और फैक्ट्री पंजीकरण ऑनलाइन मिलता है।" },
        category: "business-startup",
        category_name: { en: "Business & MSME (Udyam Registration)", bn: "ব্যবসা ও এমএসএমই (উদ্যম)", hi: "व्यवसाय और एमएसएमई (उद्यम)" },
        subcategory: "MSME Dept WB",
        authority: "Micro, Small & Medium Enterprises and Textiles Department, Govt of West Bengal",
        government_level: "State",
        service_type: "Business",
        target_users: ["Shopkeeper", "MSME Entrepreneur", "Trader", "Factory Owner"],
        eligibility: { en: ["All enterprises, commercial establishments, and shops operating in West Bengal."], bn: ["পশ্চিমবঙ্গের সমস্ত দোকান, ব্যবসা ও শিল্প প্রতিষ্ঠান।"], hi: ["पश्चिम बंगाल में व्यवसाय और दुकानें।"] },
        required_documents: { en: ["Trade Premises Proof (Rent Agreement / Property Tax Receipt)", "Identity Proof (Aadhaar / Voter Card)", "PAN of Proprietor/Enterprise"], bn: ["দোকান/ব্যবসার ঠিকানার প্রমাণ (ট্যাক্স রসিদ / ভাড়া চুক্তি)", "আধার ও প্যান কার্ড।"], hi: ["दुकान का पता प्रमाण, पैन और आधार।"] },
        application_fee: { en: "Prescribed municipal/panchayat fees (e.g. ₹500 - ₹2,500 based on trade category).", bn: "পৌরসভা বা পঞ্চায়েতের নির্ধারিত সরকারি ফি।", hi: "नगरपालिका/पंचायत का निर्धारित शुल्क।" },
        benefits: { en: ["Instant digitally signed Trade Licence for rural and urban areas.", "Track application status with legal deemed approval timelines."], bn: ["ডিজিটাল স্বাক্ষরিত তাৎক্ষণিক ট্রেড লাইসেন্স।", "দালাল ছাড়া সরাসরি অনলাইনে ব্যবসা চালু করার ছাড়পত্র।"], hi: ["तत्काल डिजिटल ट्रेड लाइसेंस।"] },
        process_steps: {
            en: ["Visit official SilpaSathi portal (silpasathi.wb.gov.in).", "Register as an Investor / Business Owner with Mobile and Email OTP.", "Select 'Apply for Trade Licence' or required clearance.", "Upload documents, pay fee online, and download valid digital certificate."],
            bn: ["silpasathi.wb.gov.in পোর্টালে যান, তথ্য দিয়ে ফর্ম পূরণ করুন ও অনলাইনে ফি দিয়ে ডিজিটাল ট্রেড লাইসেন্স ডাউনলোড করুন।"],
            hi: ["silpasathi.wb.gov.in पर जाएं और ट्रेड लाइसेंस प्राप्त करें।"]
        },
        official_homepage: "https://silpasathi.wb.gov.in/",
        official_apply_url: "https://silpasathi.wb.gov.in/",
        official_status_url: "https://silpasathi.wb.gov.in/",
        official_helpline: "033-2214-0000 / 033-2287-2101",
        official_email: "support-silpasathi@wb.gov.in",
        state: "West Bengal",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://silpasathi.wb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["silpasathi", "trade licence", "wb trade license", "panchayat trade license", "municipality trade license", "শিল্পসাথী", "ট্রেড লাইসেন্স", "ট্রেড লাইসেন্স আবেদন", "शिल्पसाथी", "ट्रेड लाइसेंस"],
        scam_warning: { en: "Always apply online via silpasathi.wb.gov.in. Never pay unauthorized intermediaries.", bn: "সর্বদা সরকারি silpasathi.wb.gov.in থেকে আবেদন করুন।", hi: "केवल आधिकारिक silpasathi.wb.gov.in पोर्टल का उपयोग करें।" }
    }
];

let content = fs.readFileSync('js/digital-seva-data.js', 'utf8');

const lines = content.split('\n');
let targetIndex = -1;
for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '];' && i < 5300 && i > 5000) {
        targetIndex = i;
        break;
    }
}

if (targetIndex !== -1) {
    console.log(`Found target closing bracket at line ${targetIndex + 1}`);
    
    if (!lines[targetIndex - 1].trim().endsWith(',')) {
        lines[targetIndex - 1] = lines[targetIndex - 1] + ',';
    }

    const formattedBatch = BATCH_2.map(s => {
        return JSON.stringify(s, null, 12).split('\n').map(l => '        ' + l).join('\n');
    }).join(',\n\n');

    lines.splice(targetIndex, 0, '\n        // --- BATCH 2 VERIFIED SERVICES ---\n' + formattedBatch);

    fs.writeFileSync('js/digital-seva-data.js', lines.join('\n'), 'utf8');
    console.log(`Successfully injected ${BATCH_2.length} additional verified services into js/digital-seva-data.js!`);
} else {
    console.error("Could not find closing bracket in expected range.");
}
