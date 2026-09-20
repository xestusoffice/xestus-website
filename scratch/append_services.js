const fs = require('fs');

const NEW_SERVICES = [
    // --- ADDITIONAL CENTRAL GOVT SERVICES ---
    {
        service_id: "incometax-efiling-itr",
        service_name: {
            en: "Income Tax e-Filing & ITR Portal",
            bn: "আয়কর ই-ফাইলিং ও আইটিআর পোর্টাল",
            hi: "आयकर ई-फाइलिंग और आईटीआर पोर्टल"
        },
        short_description: {
            en: "Official portal of Income Tax Department to file Income Tax Returns (ITR), check refund status, view 26AS/AIS, and link Aadhaar with PAN.",
            bn: "আয়কর রিটার্ন (ITR) জমা দেওয়া, রিফান্ড স্ট্যাটাস চেক, 26AS/AIS বিবরণী দেখা এবং আধারের সাথে প্যান লিঙ্ক করার সরকারি পোর্টাল।",
            hi: "आयकर रिटर्न (ITR) दाखिल करने, रिফंड स्थिति जांचने और आधार को पैन से लिंक करने का आधिकारिक आयकर पोर्टल।"
        },
        category: "tax-gst",
        category_name: { en: "Income Tax & GST Portal", bn: "আয়কর ও জিএসটি পোর্টাল", hi: "आयकर और जीएसटी पोर्टल" },
        subcategory: "Income Tax (CBDT)",
        authority: "Income Tax Department, Ministry of Finance, Govt of India",
        government_level: "Central",
        service_type: "Tax",
        target_users: ["General Citizen", "Business / MSME", "Salaried Individual", "Professional"],
        eligibility: {
            en: ["All taxpayers, salaried individuals, self-employed professionals, and businesses with taxable income."],
            bn: ["সমস্ত করদাতা, বেতনভোগী কর্মচারী, পেশাজীবী এবং ব্যবসায়ী।"],
            hi: ["सभी करदाता, वेतनभोगी कर्मचारी, पेशेवर और व्यापारी।"]
        },
        required_documents: {
            en: ["PAN Card & Aadhaar Number", "Form 16 / Salary slips", "Bank account details & bank statements", "Interest certificates & investment proofs (80C, 80D)."],
            bn: ["প্যান কার্ড ও আধার নম্বর", "ফর্ম ১৬ / বেতনের প্রমাণপত্র", "ব্যাংক অ্যাকাউন্টের বিবরণী", "বিনিয়োগ ও জমার প্রমাণপত্র (80C, 80D ইত্যাদি)।"],
            hi: ["पैन कार्ड और आधार नंबर", "फॉर्म 16 / वेतन पर्ची", "बैंक खाता विवरण", "निवेश प्रमाण पत्र।"]
        },
        application_fee: {
            en: "Standard e-Filing is Free on the official portal.",
            bn: "অফিসিয়াল পোর্টালে ই-ফাইলিং সম্পূর্ণ বিনামূল্যে।",
            hi: "आधिकारिक पोर्टल पर ई-फाइलिंग निःशुल्क है।"
        },
        benefits: {
            en: ["Mandatory compliance and fast tax refund processing.", "Official income proof for loans, visas, and credit cards.", "Zero paperwork through digital e-verification."],
            bn: ["দ্রুত ট্যাক্স রিফান্ড প্রসেসিং ও আইনসম্মত স্বীকৃতি।", "লোন, ভিসা ও ক্রেডিট কার্ডের জন্য আয়ের বৈধ প্রমাণপত্র।", "ডিজিটাল ই-ভেরিফিকেশনের মাধ্যমে কাগজহীন সুবিধা।"],
            hi: ["शीघ्र टैक्स रिফंड और ऋण/वीजा के लिए वैध आय प्रमाण।"]
        },
        process_steps: {
            en: [
                "Visit the official Income Tax e-Filing portal (incometax.gov.in).",
                "Log in using your PAN as User ID and your password.",
                "Go to 'e-File' > 'Income Tax Returns' > 'File Income Tax Return'.",
                "Select Assessment Year and filing mode (Online).",
                "Choose applicable ITR Form (ITR-1 to 4) and verify pre-filled data.",
                "Review tax calculation, submit, and e-verify using Aadhaar OTP."
            ],
            bn: [
                "অফিসিয়াল আয়কর ই-ফাইলিং পোর্টালে যান (incometax.gov.in)।",
                "প্যান নম্বর ও পাসওয়ার্ড দিয়ে লগইন করুন।",
                "'e-File' > 'Income Tax Returns' > 'File Income Tax Return' নির্বাচন করুন।",
                "সঠিক Assessment Year এবং 'Online' মোড নির্বাচন করুন।",
                "আয়ের ধরন অনুযায়ী ফর্ম (ITR 1-4) পূরণ করে সাবমিট করুন ও আধার ওটিপি দিয়ে ই-ভেরিফাই করুন।"
            ],
            hi: [
                "आयकर पोर्टल (incometax.gov.in) पर लॉगिन करें।",
                "असेसमेंट ईयर और उपयुक्त ITR फॉर्म चुनें।",
                "विवरण सत्यापित कर सबमिट करें और आधार ओटीपी से ई-वेरिफाई करें।"
            ]
        },
        official_homepage: "https://www.incometax.gov.in/",
        official_apply_url: "https://www.incometax.gov.in/iec/foposervices/",
        official_status_url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/itrStatus",
        official_helpline: "1800 180 1961 / 1800 103 0025",
        official_email: "efilingwebmanager@incometax.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://incometax.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["income tax", "itr", "itr filing", "tax refund", "form 16", "26as", "ais", "tax return", "আয়কর", "আইটিআর", "ট্যাক্স", "आयकर", "आईटीआर"],
        scam_warning: {
            en: "NEVER share your Income Tax login password, OTP, or NetBanking credentials on third-party websites or phishing SMS.",
            bn: "কখনোই কোনো মেসেজ বা থার্ড-পার্টি লিংকে আপনার আয়কর পাসওয়ার্ড বা ব্যাংক ওটিপি দেবেন না।",
            hi: "आयकर पासवर्ड या ओटीपी किसी के साथ साझा न करें।"
        }
    },
    {
        service_id: "digilocker-digital-documents",
        service_name: {
            en: "DigiLocker Digital Document Wallet",
            bn: "ডিজিলকার ডিজিটাল নথি ওয়ালেট",
            hi: "डिजिलॉकर डिजिटल दस्तावेज़ वॉलेट"
        },
        short_description: {
            en: "Flagship initiative under Digital India providing citizens with a secure cloud document wallet for legally valid digital driving licences, vehicle RC, marksheets, and Aadhaar.",
            bn: "ডিজিটাল ইন্ডিয়ার অধীনে নাগরিকদের ড্রাইভিং লাইসেন্স, গাড়ির কাগজ, মার্কশিট ও আধার কার্ডের বৈধ ডিজিটাল কপি সংরক্ষণের সরকারি ক্লাউড ওয়ালেট।",
            hi: "डिजिटल इंडिया के तहत ड्राइविंग लाइसेंस, वाहन आरसी, मार्कशीट और आधार के डिजिटल संस्करणों का आधिकारिक सुरक्षित क्लाउड वॉलेट।"
        },
        category: "digital-gov",
        category_name: { en: "Digital India, DigiLocker & UMANG", bn: "ডিজিটাল ভারত ও ডিজিলকার", hi: "डिजिटल इंडिया और डिजिलॉकर" },
        subcategory: "DigiLocker MeitY",
        authority: "Ministry of Electronics and Information Technology (MeitY), Govt of India",
        government_level: "Central",
        service_type: "Document",
        target_users: ["General Citizen", "Student", "Youth"],
        eligibility: {
            en: ["All Indian citizens with an active Aadhaar number and linked mobile."],
            bn: ["আধার কার্ড ও লিংক করা মোবাইল নম্বরধারী সমস্ত ভারতীয় নাগরিক।"],
            hi: ["आधार से जुड़े मोबाइल नंबर वाले सभी भारतीय नागरिक।"]
        },
        required_documents: {
            en: ["Aadhaar Number", "Aadhaar registered mobile for OTP verification."],
            bn: ["আধার নম্বর", "ওটিপির জন্য আধার লিঙ্ক করা মোবাইল নম্বর।"],
            hi: ["आधार संख्या और पंजीकृत मोबाइल नंबर।"]
        },
        application_fee: { en: "100% Free Government Service.", bn: "সম্পূর্ণ বিনামূল্যে সরকারি পরিষেবা।", hi: "100% निःशुल्क सरकारी सेवा।" },
        benefits: {
            en: ["Legally equivalent to original physical documents under Rule 9A of IT Rules 2016.", "Accepted by Traffic Police, Railways, and Airport Security across India."],
            bn: ["আইনগতভাবে মূল নথির সমান মান্য।", "ট্রাফিক পুলিশ, রেলওয়ে ও এয়ারপোর্টে বৈধ হিসেবে স্বীকৃত।"],
            hi: ["मूल दस्तावेज़ के समान कानूनी मान्यता प्राप्त।"]
        },
        process_steps: {
            en: [
                "Visit the official DigiLocker portal (digilocker.gov.in) or mobile app.",
                "Click 'Sign Up' and enter your Full Name, DOB, Gender, Mobile, and 6-digit Security PIN.",
                "Authenticate using Aadhaar Number and OTP.",
                "Search for issuing authority (e.g. CBSE, MoRTH, State Boards, UIDAI).",
                "Fetch verified digital document directly into your Issued Documents repository."
            ],
            bn: [
                "অফিসিয়াল DigiLocker পোর্টাল বা অ্যাপে যান (digilocker.gov.in)।",
                "আধার নম্বর ও ওটিপি দিয়ে সাইন আপ বা লগইন করুন।",
                "প্রয়োজনীয় দপ্তর (CBSE, পরিবহন, বোর্ড ইত্যাদি) সিলেক্ট করে ডিজিটাল নথি যুক্ত করুন।"
            ],
            hi: [
                "डिजिलॉकर पोर्टल (digilocker.gov.in) पर जाएं।",
                "आधार और ओटीपी से लॉगिन करें और जारीकर्ता विभाग से दस्तावेज़ फेच करें।"
            ]
        },
        official_homepage: "https://www.digilocker.gov.in/",
        official_apply_url: "https://www.digilocker.gov.in/",
        official_status_url: "https://www.digilocker.gov.in/",
        official_helpline: "1800-111-555 (Toll Free)",
        official_email: "support@digitallocker.gov.in",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://digilocker.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["digilocker", "digital locker", "dl download", "rc download", "mark sheet", "ডিজিলকার", "ডিজিটাল লকার", "डिजिलॉकर"],
        scam_warning: {
            en: "DigiLocker is an official Government service and NEVER charges fees for document fetching or storage.",
            bn: "ডিজিলকার সম্পূর্ণ সরকারি ও বিনামূল্যে পরিষেবা। নথি সংরক্ষণের জন্য কোনো ফি লাগে না।",
            hi: "डिजिलॉकर पूरी तरह से निःशुल्क सरकारी सेवा है।"
        }
    },
    {
        service_id: "parivahan-vahan-vehicle-rc",
        service_name: {
            en: "Vehicle Registration & RC Services (Vahan)",
            bn: "গাড়ির রেজিস্ট্রেশন ও আরসি পরিষেবা (বাহন)",
            hi: "वाहन पंजीकरण और आरसी सेवाएं (वाहन)"
        },
        short_description: {
            en: "National Vahan citizen portal for Vehicle Registration Certificate (RC) status, RC transfer of ownership, address change, duplicate RC, and fitness renewal.",
            bn: "গাড়ির আরসি (RC) স্ট্যাটাস চেক, মালিকানা হস্তান্তর, ঠিকানা পরিবর্তন, ডুপ্লিকেট আরসি ও ফিটনেস রিনিউয়ালের অফিসিয়াল পোর্টাল।",
            hi: "वाहन पंजीकरण प्रमाणपत्र (आरसी) स्थिति, स्वामित्व हस्तांतरण, पता परिवर्तन और डुप्लीकेट आरसी का आधिकारिक पोर्टल।"
        },
        category: "driving-vehicles",
        category_name: { en: "Driving Licence & Parivahan", bn: "ড্রাইভিং লাইসেন্স ও পরিবহন", hi: "ड्राइविंग लाइसेंस और परिवहन" },
        subcategory: "Vahan MoRTH",
        authority: "Ministry of Road Transport and Highways (MoRTH), Govt of India",
        government_level: "Central",
        service_type: "Transport",
        target_users: ["Vehicle Owner", "Commercial Driver", "General Citizen"],
        eligibility: {
            en: ["All registered motor vehicle owners in India."],
            bn: ["ভারতের সমস্ত রেজিস্টার্ড মোটরযানের মালিক।"],
            hi: ["भारत में सभी पंजीकृत वाहन मालिक।"]
        },
        required_documents: {
            en: ["Vehicle Registration Number & Chassis Number", "Existing Registration Certificate (RC)", "Valid Motor Insurance Certificate", "Pollution Under Control Certificate (PUCC)", "Owner Aadhaar / Identity Proof"],
            bn: ["গাড়ির রেজিস্ট্রেশন নম্বর ও চেসিস নম্বর", "বর্তমান আরসি কপি", "বৈধ ইন্স্যুরেন্স ও দূষণ নিয়ন্ত্রণ শংসাপত্র (PUCC)", "মালিকের আধার / পরিচয়পত্র।"],
            hi: ["वाहन पंजीकरण संख्या, आरसी कॉपी, वैध बीमा और प्रदूषण प्रमाण पत्र (PUC)।"]
        },
        application_fee: {
            en: "Official statutory fees per Central Motor Vehicles Rules (e.g. ₹500 for duplicate RC, state road taxes vary).",
            bn: "সরকারি নির্ধারিত ফি (যেমন ডুপ্লিকেট আরসি ₹৫০০, রাজ্যভেদে কর ভিন্ন)।",
            hi: "सरकारी नियमानुसार निर्धारित शुल्क।"
        },
        benefits: {
            en: ["Online application for transfer of ownership without RTO touts.", "Instant e-RC download legally recognized nationwide."],
            bn: ["দালাল ছাড়াই অনলাইনে গাড়ির মালিকানা বদল ও ঠিকানা পরিবর্তনের আবেদন।", "বৈধ ডিজিটাল ই-আরসি ডাউনলোড।"],
            hi: ["ऑनलाइन आरसी सेवाएं और ई-आरसी डाउनलोड।"]
        },
        process_steps: {
            en: [
                "Visit Parivahan Vahan Citizen Services portal (vahan.parivahan.gov.in).",
                "Select State and Registering RTO Office.",
                "Enter Vehicle Registration Number and verify with Mobile OTP.",
                "Select required service (Transfer of Ownership, Change of Address, Duplicate RC).",
                "Fill application form, upload documents, and pay statutory fees online.",
                "Print receipt and book appointment or upload e-signed Form 29/30."
            ],
            bn: [
                "Parivahan Vahan পোর্টালে যান (vahan.parivahan.gov.in)।",
                "রাজ্য ও আরটিও সিলেক্ট করে গাড়ির নম্বর দিয়ে লগইন করুন।",
                "প্রয়োজনীয় সেবা (মালিকানা বদল, ঠিকানা বদল ইত্যাদি) নির্বাচন করে ফি প্রদান করুন।"
            ],
            hi: [
                "वाहन पोर्टल (vahan.parivahan.gov.in) पर जाएं और आवश्यक सेवा चुनें।"
            ]
        },
        official_homepage: "https://parivahan.gov.in/",
        official_apply_url: "https://vahan.parivahan.gov.in/vahanservice/",
        official_status_url: "https://vahan.parivahan.gov.in/vahanservice/vahan/ui/appl_status/form_Status_Check.xhtml",
        official_helpline: "0120-4925505 (6 AM to 10 PM)",
        official_email: "helpdesk-vahan@gov.in",
        state: "All India",
        availability: "Online + RTO",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://parivahan.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["vahan", "rc transfer", "vehicle rc", "rc status", "car registration", "bike rc", "গাড়ির কাগজ", "আরসি", "বাহন", "वाहन आरसी", "आरसी ट्रांसफर"],
        scam_warning: {
            en: "Beware of fake challan or RC update SMS links. Always check domain is 'parivahan.gov.in'.",
            bn: "ভুয়া আরসি বা চালান মেসেজ থেকে সাবধান। সর্বদা parivahan.gov.in ডোমেইন নিশ্চিত করুন।",
            hi: "फर्जी चालान या आरसी लिंक से बचें। केवल आधिकारिक पोर्टल का उपयोग करें।"
        }
    },
    {
        service_id: "parivahan-echallan-traffic",
        service_name: {
            en: "Traffic eChallan Payment Portal",
            bn: "ট্রাফিক ই-চালান পেমেন্ট পোর্টাল",
            hi: "ट्रैफिक ई-चालान भुगतान पोर्टल"
        },
        short_description: {
            en: "Official nationwide online portal to search, verify, and pay pending traffic violations and motor vehicle e-challans issued by traffic police and transport authorities.",
            bn: "ট্রাফিক পুলিশ ও পরিবহন দপ্তরের জারি করা ট্রাফিক জরিমানার ই-চালান অনুসন্ধান ও অনলাইনে নিরাপদে পেমেন্ট করার সরকারি পোর্টাল।",
            hi: "यातायात पुलिस और परिवहन विभाग द्वारा जारी ई-चालान की जांच और ऑनलाइन भुगतान का आधिकारिक पोर्टल।"
        },
        category: "driving-vehicles",
        category_name: { en: "Driving Licence & Parivahan", bn: "ড্রাইভিং লাইসেন্স ও পরিবহন", hi: "ड्राइविंग लाइसेंस और परिवहन" },
        subcategory: "eChallan MoRTH",
        authority: "Ministry of Road Transport and Highways (MoRTH), Govt of India",
        government_level: "Central",
        service_type: "Transport",
        target_users: ["Vehicle Owner", "Driver", "General Citizen"],
        eligibility: {
            en: ["Any vehicle owner or driver with an issued traffic violation challan."],
            bn: ["ট্রাফিক ফাইন বা চালান পাওয়া যেকোনো গাড়ির মালিক বা চালক।"],
            hi: ["ट्रैफिक चालान प्राप्त कोई भी वाहन मालिक या चालक।"]
        },
        required_documents: {
            en: ["Challan Number OR Vehicle Number + Chassis/Engine Last 5 Digits OR Driving Licence Number"],
            bn: ["চালান নম্বর অথবা গাড়ির নম্বর + চেসিস/ইঞ্জিনের শেষ ৫ সংখ্যা অথবা ডিএল নম্বর।"],
            hi: ["चालान संख्या या वाहन संख्या और चेसिस नंबर।"]
        },
        application_fee: { en: "Actual penalty amount mentioned in the official traffic challan.", bn: "চালানে উল্লেখিত নির্দিষ্ট সরকারি জরিমানার অর্থ।", hi: "चालान में उल्लिखित निर्धारित जुर्माना राशि।" },
        benefits: {
            en: ["Instant online penalty settlement without court visits for compoundable offences.", "Avoid vehicle blacklisting and RC suspension."],
            bn: ["আদালতে না গিয়ে অনলাইনে তাৎক্ষণিক ট্রাফিক ফাইন নিষ্পত্তি।", "গাড়ি ব্ল্যাকলিস্ট হওয়া থেকে রক্ষা।"],
            hi: ["ऑनलाइन चालान निपटान और रसीद प्राप्ति।"]
        },
        process_steps: {
            en: [
                "Visit the official eChallan portal (echallan.parivahan.gov.in).",
                "Enter Challan Number OR Vehicle Number (with chassis/engine last 5 digits).",
                "Enter Captcha and click 'Get Detail'.",
                "Review violation photo, location, and penalty breakdown.",
                "Click 'Pay Now' and complete payment via NetBanking, UPI, or Debit Card.",
                "Download and save official payment receipt for records."
            ],
            bn: [
                "অফিসিয়াল echallan.parivahan.gov.in পোর্টালে যান।",
                "গাড়ির নম্বর ও চেসিস নম্বরের শেষ ৫ সংখ্যা দিয়ে চালান সার্চ করুন।",
                "জরিমানার বিবরণ দেখে অনলাইন পেমেন্ট সম্পন্ন করে রসিদ ডাউনলোড করুন।"
            ],
            hi: [
                "echallan.parivahan.gov.in पर जाएं, चालान खोजें और भुगतान करें।"
            ]
        },
        official_homepage: "https://echallan.parivahan.gov.in/",
        official_apply_url: "https://echallan.parivahan.gov.in/index/accused-challan",
        official_status_url: "https://echallan.parivahan.gov.in/index/accused-challan",
        official_helpline: "0120-4925505 (MoRTH Helpdesk)",
        official_email: "helpdesk-echallan@gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://echallan.parivahan.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["echallan", "traffic fine", "challan payment", "traffic police fine", "car fine", "bike fine", "চালান পেমেন্ট", "ট্রাফিক জরিমানা", "ई-चालान", "ट्रैफिक चालान"],
        scam_warning: {
            en: "SCAM ALERT: Do NOT click on APK download links or suspicious .apk SMS messages claiming unpaid challans. Only use 'echallan.parivahan.gov.in'.",
            bn: "সতর্কবার্তা: অচেনা নম্বর থেকে আসা চালান পরিশোধের APK বা লিংকে ক্লিক করবেন না। কেবল echallan.parivahan.gov.in ব্যবহার করুন।",
            hi: "धोखाधड़ी से बचें: एसएमएस में आए फर्जी एपीके लिंक पर क्लिक न करें।"
        }
    },
    {
        service_id: "gst-portal-goods-services-tax",
        service_name: {
            en: "GST Portal (Goods and Services Tax)",
            bn: "জিএসটি পোর্টাল (পণ্য ও পরিষেবা কর)",
            hi: "जीएसटी पोर्टल (वस्तु एवं सेवा कर)"
        },
        short_description: {
            en: "Official Goods and Services Tax (GST) common portal for new business GST registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), e-Way bill, and tax payment.",
            bn: "নতুন ব্যবসা বা সংস্থার জিএসটি রেজিস্ট্রেশন, রিটার্ন ফাইলিং (GSTR-1, 3B), ই-ওয়ে বিল এবং ট্যাক্স পেমেন্টের আনুষ্ঠানিক কেন্দ্রীয় পোর্টাল।",
            hi: "व्यापार जीएसटी पंजीकरण, रिटर्न फाइलिंग (GSTR-1, GSTR-3B) और ई-वे बिल का आधिकारिक सरकारी पोर्टल।"
        },
        category: "tax-gst",
        category_name: { en: "Income Tax & GST Portal", bn: "আয়কর ও জিএসটি পোর্টাল", hi: "आयकर और जीएसटी पोर्टल" },
        subcategory: "GSTN",
        authority: "Goods and Services Tax Network (GSTN) / CBIC, Govt of India",
        government_level: "Central",
        service_type: "Business",
        target_users: ["Business / MSME", "Trader", "Manufacturer", "Service Provider"],
        eligibility: {
            en: ["Businesses crossing turnover threshold (₹40 Lakh for goods, ₹20 Lakh for services) or voluntary registrations."],
            bn: ["নির্ধারিত টার্নওভারের ব্যবসায়ী, দোকানদার ও পরিষেবা প্রদানকারী প্রতিষ্ঠান।"],
            hi: ["निर्धारित टर्नओवर वाले व्यापारी और व्यवसाय।"]
        },
        required_documents: {
            en: ["PAN Card of Business / Proprietor", "Proof of Business Registration / Constitution", "Proof of Principal Place of Business (Rent Agreement / Electricity Bill)", "Bank Account Details & Cancelled Cheque", "Authorized Signatory Aadhaar & Photo"],
            bn: ["প্যান কার্ড", "ব্যবসার ঠিকানার প্রমাণপত্র (ভাড়া চুক্তি / বিদ্যুৎ বিল)", "ব্যাংক পাসবুক বা চেক", "স্বত্বাধিকারীর আধার ও ছবি।"],
            hi: ["पैन कार्ड, व्यवसाय का पता प्रमाण, बैंक खाता विवरण और आधार।"]
        },
        application_fee: { en: "New GST Registration is 100% Free on official portal.", bn: "নতুন জিএসটি রেজিস্ট্রেশন সরকারি পোর্টালে সম্পূর্ণ বিনামূল্যে।", hi: "आधिकारिक पोर्टल पर जीएसटी पंजीकरण निःशुल्क है।" },
        benefits: {
            en: ["Legal recognition as registered supplier of goods/services.", "Seamless interstate trade and Input Tax Credit (ITC) eligibility."],
            bn: ["আইনি বৈধতা ও ইনপুট ট্যাক্স ক্রেডিট (ITC) পাওয়ার সুবিধা।", "সারা ভারতে অবাধে ব্যবসা করার অধিকার।"],
            hi: ["इनपुट टैक्स क्रेडिट (ITC) और अंतरराज्यीय व्यापार की सुविधा।"]
        },
        process_steps: {
            en: [
                "Visit the official GST Portal (gst.gov.in).",
                "Click 'Services' > 'Registration' > 'New Registration'.",
                "Generate Temporary Reference Number (TRN) using PAN, Email, and Mobile OTP.",
                "Log in with TRN and complete Part-B with business details and document uploads.",
                "Complete Aadhaar authentication for instant biometric/OTP verification.",
                "Receive Application Reference Number (ARN) and track GSTIN approval."
            ],
            bn: [
                "অফিসিয়াল GST পোর্টালে যান (gst.gov.in)।",
                "New Registration থেকে প্যান ও মোবাইল দিয়ে TRN তৈরি করুন।",
                "ব্যবসার বিস্তারিত তথ্য ও নথি আপলোড করে আধার ওটিপি দিয়ে সাবমিট করুন।"
            ],
            hi: [
                "gst.gov.in पर जाएं और न्यू रजिस्ट्रेशन पूरा करें।"
            ]
        },
        official_homepage: "https://www.gst.gov.in/",
        official_apply_url: "https://reg.gst.gov.in/registration/",
        official_status_url: "https://services.gst.gov.in/services/arnstatus",
        official_helpline: "1800-103-4786 (Toll Free)",
        official_email: "helpdesk@gst.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://gst.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["gst", "gst registration", "gstr 1", "gstr 3b", "gst return", "eway bill", "জিএসটি", "জিএসটি রেজিস্ট্রেশন", "জিএসটি রিটার্ন", "जीएसटी", "जीएसटी पंजीकरण"],
        scam_warning: {
            en: "Official GST registration carries ZERO government fee. Do not pay unauthorized agents claiming 'exclusive approval'.",
            bn: "সরকারি জিএসটি রেজিস্ট্রেশন সম্পূর্ণ বিনামূল্যে। অননুমোদিত দালালদের টাকা দেবেন না।",
            hi: "जीएसटी पंजीकरण का कोई सरकारी शुल्क नहीं है। धोखाधड़ी से बचें।"
        }
    },
    {
        service_id: "swayam-nptel-free-learning",
        service_name: {
            en: "SWAYAM & NPTEL Free Learning & Credits",
            bn: "স্বয়ম ও এনপিটিইএল বিনামূল্যে অনলাইন কোর্স ও ক্রেডিট",
            hi: "स्वयं और एनपीटीईएल मुफ्त ऑनलाइन कोर्स और क्रेडिट"
        },
        short_description: {
            en: "National online education platform by Ministry of Education offering free certified college & university level courses by IITs, IIMs, and Central Universities with credit transfer.",
            bn: "শিক্ষা মন্ত্রকের জাতীয় অনলাইন শিক্ষা প্ল্যাটফর্ম যেখানে IIT, IIM ও কেন্দ্রীয় বিশ্ববিদ্যালয়ের অধ্যাপকদের দ্বারা বিনামূল্যে কোর্স ও সার্টিফিকেট প্রদান করা হয়।",
            hi: "आईआईटी और आईआईएम द्वारा संचालित केंद्रीय शिक्षा मंत्रालय का मुफ्त ऑनलाइन कोर्स और सर्टिफिकेट पोर्टल।"
        },
        category: "free-learning",
        category_name: { en: "Free Certified Learning (SWAYAM / NPTEL)", bn: "বিনামূল্যে অনলাইন কোর্স (SWAYAM)", hi: "मुफ्त ऑनलाइन कोर्स (SWAYAM)" },
        subcategory: "Higher Education MoE",
        authority: "Ministry of Education (MoE) / IIT Madras / AICTE, Govt of India",
        government_level: "Central",
        service_type: "Education",
        target_users: ["Student", "College Student", "Teacher", "Professional"],
        eligibility: {
            en: ["Open to all students, lifelong learners, and teachers worldwide."],
            bn: ["সমস্ত শিক্ষার্থী, শিক্ষক ও পেশাজীবীদের জন্য উন্মুক্ত।"],
            hi: ["सभी छात्रों और शिक्षकों के लिए खुला।"]
        },
        required_documents: {
            en: ["Email ID & Mobile Number", "College/Institution details for Academic Bank of Credits (ABC) transfer (optional)."],
            bn: ["ইমেইল আইডি ও মোবাইল নম্বর", "কলেজ/বিশ্ববিদ্যালয়ের তথ্য (ক্রেডিট ট্রান্সফারের জন্য)।"],
            hi: ["ईमेल आईडी और कॉलेज विवरण।"]
        },
        application_fee: { en: "Learning is 100% Free. Nominal fee (₹1,000) only if appearing for proctored certificate exam.", bn: "কোর্স সম্পূর্ণ বিনামূল্যে। শুধুমাত্র অফিসিয়াল সার্টিফিকেট পরীক্ষার জন্য নির্ধারিত ফি ₹১,০০০ প্রযোজ্য।", hi: "कोर्स पूरी तरह से मुफ्त है।" },
        benefits: {
            en: ["UGC recognized credit transfer directly into university degree.", "Industry recognized certificates from IITs and IIMs."],
            bn: ["UGC অনুমোদিত ক্রেডিট ট্রান্সফার যা কলেজের ডিগ্রিতে যুক্ত হয়।", "IIT ও IIM-এর বিশ্বমানের সার্টিফিকেট।"],
            hi: ["यूजीसी मान्य क्रेडिट ट्रांसफर और आईआईटी सर्टिफिकेट।"]
        },
        process_steps: {
            en: [
                "Visit the official SWAYAM portal (swayam.gov.in).",
                "Sign in with Google, Microsoft, or SWAYAM Account.",
                "Browse Course Catalog across Engineering, Science, Humanities, and Commerce.",
                "Click 'Enroll' on desired course and access video lectures, assignments, and forums."
            ],
            bn: [
                "অফিসিয়াল swayam.gov.in পোর্টালে যান।",
                "কোর্স ক্যাটালগ থেকে পছন্দমতো বিষয় বেছে 'Enroll' বাটনে ক্লিক করুন।"
            ],
            hi: [
                "swayam.gov.in पर जाएं और कोर्स में निःशुल्क नामांकन करें।"
            ]
        },
        official_homepage: "https://swayam.gov.in/",
        official_apply_url: "https://swayam.gov.in/",
        official_status_url: "https://swayam.gov.in/",
        official_helpline: "1800-112-154 (Support)",
        official_email: "support@swayam.gov.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://swayam.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["swayam", "nptel", "free courses", "iit course", "online certificate", "ugc credits", "স্বয়ং", "এনপিটিইএল", "অনলাইন কোর্স", "स्वयं", "एनपीटीईएल"],
        scam_warning: {
            en: "SWAYAM course access is 100% free. Never pay third-party sites for enrolment.",
            bn: "SWAYAM কোর্সে ভর্তি সম্পূর্ণ বিনামূল্যে। কোনো থার্ড-পার্টিকে টাকা দেবেন না।",
            hi: "स्वयं कोर्स में नामांकन बिल्कुल मुफ्त है।"
        }
    },

    // --- ADDITIONAL WEST BENGAL GOVT SERVICES ---
    {
        service_id: "wb-bsk-bangla-sahayata-kendra",
        service_name: {
            en: "Bangla Sahayata Kendra (BSK) Master Gateway",
            bn: "বাংলা সহায়তা কেন্দ্র (BSK) মাস্টার পোর্টাল",
            hi: "बांग्ला सहायता केंद्र (बीएसके) मास्टर पोर्टल"
        },
        short_description: {
            en: "Flagship West Bengal Government single-window citizen portal offering 300+ public services, certificates, welfare schemes, and social security completely free of cost across 3,500+ physical centres and online.",
            bn: "পশ্চিমবঙ্গ সরকারের ৩,৫০০+ কেন্দ্রে এবং অনলাইনে সম্পূর্ণ বিনামূল্যে ৩০০+ সরকারি পরিষেবা ও প্রকল্পের সুবিধা পাওয়ার একক সরকারি পোর্টাল।",
            hi: "पश्चिम बंगाल सरकार का 300+ से अधिक सरकारी सेवाओं का निःशुल्क नागरिक सहायता पोर्टल।"
        },
        category: "wb-edistrict",
        category_name: { en: "West Bengal e-District", bn: "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট", hi: "पश्चिम बंगाल ई-डिस्ट्रिक्ट" },
        subcategory: "BSK West Bengal",
        authority: "Personnel & Administrative Reforms Department, Government of West Bengal",
        government_level: "State",
        service_type: "Welfare",
        target_users: ["General Citizen", "Farmer", "Student", "Women", "Senior Citizen"],
        eligibility: {
            en: ["All permanent residents of West Bengal."],
            bn: ["পশ্চিমবঙ্গের সমস্ত স্থায়ী বাসিন্দা।"],
            hi: ["पश्चिम बंगाल के सभी स्थायी निवासी।"]
        },
        required_documents: {
            en: ["Aadhaar Card / Voter Card / Ration Card", "Service-specific supporting documents."],
            bn: ["আধার কার্ড / ভোটার কার্ড / রেশন কার্ড", "নির্দিষ্ট প্রকল্পের সংশ্লিষ্ট নথি।"],
            hi: ["आधार कार्ड / वोटर कार्ड / राशन कार्ड।"]
        },
        application_fee: { en: "100% Free Government Assistance at all BSK centres.", bn: "সমস্ত BSK কেন্দ্রে ১০০% বিনামূল্যে পরিষেবা।", hi: "सभी बीएसके केंद्रों पर 100% निःशुल्क सेवा।" },
        benefits: {
            en: ["Zero fee for form filling, scanning, uploading, and application submission.", "Single unified window for all 40+ state departments."],
            bn: ["ফর্ম পূরণ, স্ক্যানিং ও জমা দেওয়ার জন্য কোনো চার্জ লাগে না।", "রাজ্যের সমস্ত সরকারি দপ্তর একই ছাদের তলায়।"],
            hi: ["फॉर्म भरने और आवेदन करने के लिए शून्य शुल्क।"]
        },
        process_steps: {
            en: [
                "Visit the official BSK portal (bsk.wb.gov.in) or your nearest Gram Panchayat/BDO/Municipality BSK centre.",
                "Browse citizen services by Department (e-District, Food, Agriculture, Education, Health).",
                "Apply online directly or take free assistance from designated BSK operators.",
                "Receive instant SMS confirmation with Application Tracking ID."
            ],
            bn: [
                "অফিসিয়াল bsk.wb.gov.in পোর্টালে যান অথবা নিকটবর্তী বিএসকে কেন্দ্রে যান।",
                "প্রয়োজনীয় সেবা নির্বাচন করে বিনামূল্যে আবেদন সম্পন্ন করুন।"
            ],
            hi: [
                "bsk.wb.gov.in पोर्टल पर जाएं या निकटतम केंद्र पर निःशुल्क आवेदन करें।"
            ]
        },
        official_homepage: "https://bsk.wb.gov.in/",
        official_apply_url: "https://bsk.wb.gov.in/",
        official_status_url: "https://bsk.wb.gov.in/",
        official_helpline: "033-2214-0000 (Toll Free Helpline)",
        official_email: "bskhelpdesk@wb.gov.in",
        state: "West Bengal",
        availability: "Online + 3500+ Kendras",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://bsk.wb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["bsk", "bangla sahayata kendra", "bsk portal", "wb government services", "bangla sahayata", "বিএসকে", "বাংলা সহায়তা কেন্দ্র", "পশ্চিমবঙ্গ সরকারি সেবা", "बीएसके", "बांग्ला सहायता केंद्र"],
        scam_warning: {
            en: "BSK services are completely FREE. Do not pay any money to anyone at or outside BSK centres.",
            bn: "বিএসকে সেবা সম্পূর্ণ বিনামূল্যে। কোনো টাকা কাউকে দেবেন না।",
            hi: "बीएसके की सभी सेवाएं पूरी तरह से निःशुल्क हैं।"
        }
    },
    {
        service_id: "wb-duare-sarkar-camps",
        service_name: {
            en: "Duare Sarkar Outreach & Camps Portal",
            bn: "দুয়ারে সরকার ক্যাম্প ও পরিষেবা পোর্টাল",
            hi: "दुआरे सरकार कैंप व योजना पोर्टल"
        },
        short_description: {
            en: "Government of West Bengal mass outreach initiative delivering 35+ major flagship schemes (Lakshmir Bhandar, Swasthya Sathi, Krishak Bandhu, Caste Certificate) directly at community neighbourhood camps.",
            bn: "পশ্চিমবঙ্গ সরকারের উদ্যোগ যেখানে লক্ষ্মীর ভাণ্ডার, স্বাস্থ্য সাথী, কৃষক বন্ধু, কাস্ট সার্টিফিকেট সহ ৩৫+ প্রকল্পের সুবিধা বাড়ি সংলগ্ন ক্যাম্পে সরাসরি প্রদান করা হয়।",
            hi: "पश्चिम बंगाल सरकार का प्रमुख जनसंपर्क अभियान जहां स्थानीय कैंपों में 35+ से अधिक योजनाओं का लाभ दिया जाता है।"
        },
        category: "welfare-schemes",
        category_name: { en: "Government Welfare Schemes", bn: "সরকারি কল্যাণমূলক প্রকল্প", hi: "सरकारी कल्याण योजनाएं" },
        subcategory: "Duare Sarkar WB",
        authority: "Government of West Bengal",
        government_level: "State",
        service_type: "Welfare",
        target_users: ["General Citizen", "Women", "Farmer", "Youth", "Senior Citizen"],
        eligibility: {
            en: ["All eligible citizens and families residing in West Bengal."],
            bn: ["পশ্চিমবঙ্গের সমস্ত যোগ্য বাসিন্দা ও পরিবার।"],
            hi: ["पश्चिम बंगाल के सभी निवासी।"]
        },
        required_documents: {
            en: ["Aadhaar Card", "Swasthya Sathi Card", "Bank Passbook with linked single account", "Mobile Number & scheme-specific proofs."],
            bn: ["আধার কার্ড", "স্বাস্থ্য সাথী কার্ড", "ব্যাংক পাসবুক (সিঙ্গেল অ্যাকাউন্ট)", "মোবাইল নম্বর ও সংশ্লিষ্ট নথি।"],
            hi: ["आधार कार्ड, स्वास्थ्य साथी कार्ड, बैंक पासबुक।"]
        },
        application_fee: { en: "100% Free Government Camp Service.", bn: "ক্যাম্পে সমস্ত আবেদন সম্পূর্ণ বিনামূল্যে।", hi: "कैंप में सभी आवेदन पूरी तरह से निःशुल्क हैं।" },
        benefits: {
            en: ["Doorstep access to all major state welfare schemes.", "Instant receipt acknowledgement and on-the-spot grievance resolution."],
            bn: ["গ্রাম ও পাড়ায় ক্যাম্পের মাধ্যমে সহজে আবেদন।", "তাৎক্ষণিক প্রাপ্তিস্বীকার রসিদ ও ট্র্যাকিং সুবিধা।"],
            hi: ["स्थानीय कैंप में योजनाओं का सीधा लाभ।"]
        },
        process_steps: {
            en: [
                "Visit the official Duare Sarkar portal (ds.wb.gov.in) to locate upcoming camp dates and venue in your Ward/Gram Panchayat.",
                "Collect official free application form from the designated registration desk at the camp.",
                "Attach required photocopies of Aadhaar, Bank Passbook, and supporting documents.",
                "Submit at the dedicated scheme counter and collect your stamped Acknowledgement Slip."
            ],
            bn: [
                "ds.wb.gov.in পোর্টালে আপনার ওয়ার্ড বা গ্রাম পঞ্চায়েতের ক্যাম্পের তারিখ জানুন।",
                "ক্যাম্প থেকে বিনামূল্যে ফর্ম সংগ্রহ করে নথি সহ জমা দিন এবং রসিদ নিন।"
            ],
            hi: [
                "ds.wb.gov.in पर कैंप की तिथि देखें और कैंप में फॉर्म जमा करें।"
            ]
        },
        official_homepage: "https://ds.wb.gov.in/",
        official_apply_url: "https://ds.wb.gov.in/",
        official_status_url: "https://ds.wb.gov.in/",
        official_helpline: "1800-345-0117 (State Toll Free)",
        official_email: "duaresarkar@wb.gov.in",
        state: "West Bengal",
        availability: "Neighbourhood Camps + Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://ds.wb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["duare sarkar", "duare sarkar camp", "ds portal", "lakshmir bhandar camp", "দুয়ারে সরকার", "দুয়ারে সরকার ক্যাম্প", "দুয়ারে সরকার", "दुआरे सरकार"],
        scam_warning: {
            en: "Duare Sarkar application forms are strictly FREE and distributed only at official camp premises. Never buy forms from outside shops.",
            bn: "দুয়ারে সরকারের ফর্ম সম্পূর্ণ বিনামূল্যে সরকারি ক্যাম্প থেকেই দেওয়া হয়। বাইরে থেকে ফর্ম কিনবেন না।",
            hi: "दुआरे सरकार के फॉर्म केवल आधिकारिक कैंप से निःशुल्क प्राप्त करें।"
        }
    },
    {
        service_id: "wb-yuvasree-employment-bank",
        service_name: {
            en: "Yuvasree Unemployment Assistance (Employment Bank)",
            bn: "যুবশ্রী বেকার ভাতা ও এমপ্লয়মেন্ট ব্যাঙ্ক",
            hi: "युवाश्री बेरोजगारी सहायता (रोजगार बैंक)"
        },
        short_description: {
            en: "West Bengal Government financial assistance scheme providing ₹1,500 monthly stipend to enrolled unemployed youth to enhance employability and skill acquisition.",
            bn: "পশ্চিমবঙ্গ সরকারের যুবশ্রী প্রকল্প যার মাধ্যমে এমপ্লয়মেন্ট ব্যাঙ্কে নথিভুক্ত বেকার যুবক-যুবতীদের মাসে ₹১,৫০০ টাকা আর্থিক অনুদান প্রদান করা হয়।",
            hi: "पश्चिम बंगाल सरकार की युवाश्री योजना जिसके तहत पंजीकृत बेरोजगार युवाओं को ₹1,500 मासिक वित्तीय सहायता दी जाती है।"
        },
        category: "wb-govt-jobs",
        category_name: { en: "West Bengal Govt Jobs (WBPSC/WBP)", bn: "পশ্চিমবঙ্গ সরকারি চাকরি (WBPSC/WBP)", hi: "पश्चिम बंगाल सरकारी नौकरियां" },
        subcategory: "Labour Dept WB",
        authority: "Department of Labour, Government of West Bengal",
        government_level: "State",
        service_type: "Employment",
        target_users: ["Unemployed Youth", "Student", "Job Seeker"],
        eligibility: {
            en: ["Permanent resident of West Bengal aged 18 to 45 years.", "Enrolled in Employment Bank with minimum Class 8 pass qualification.", "Only one member per family eligible, not employed in govt/private sector."],
            bn: ["পশ্চিমবঙ্গের ১৮ থেকে ৪৫ বছর বয়সী স্থায়ী বাসিন্দা।", "ন্যূনতম অষ্টম শ্রেণী পাস এবং এমপ্লয়মেন্ট ব্যাঙ্কে নাম নথিভুক্ত।", "পরিবারের একজন সদস্যই এই সুবিধা পাবেন।"],
            hi: ["पश्चिम बंगाल के 18-45 वर्ष के निवासी, न्यूनतम 8वीं पास।"]
        },
        required_documents: {
            en: ["Employment Bank Enrolment Slip (EB number)", "Madhyamik / Educational Qualification Certificates", "Aadhaar Card / Voter ID / Ration Card", "Bank Passbook with single account in applicant's name"],
            bn: ["এমপ্লয়মেন্ট ব্যাঙ্ক রেজিস্ট্রেশন স্লিপ (EB নম্বর)", "শিক্ষাগত যোগ্যতার প্রমাণপত্র", "আধার কার্ড ও ভোটার কার্ড", "আবেদনকারীর নিজস্ব ব্যাংক পাসবুক।"],
            hi: ["एंप्लॉयमेंट बैंक पंजीकरण पर्ची, शैक्षणिक प्रमाण पत्र, आधार कार्ड और बैंक पासबुक।"]
        },
        application_fee: { en: "100% Free Government Enrolment.", bn: "সম্পূর্ণ বিনামূল্যে আবেদন।", hi: "निःशुल्क आवेदन।" },
        benefits: {
            en: ["₹1,500 monthly direct bank transfer (DBT).", "Access to state skill development courses and job vacancy alerts."],
            bn: ["প্রতি মাসে ₹১,৫০০ টাকা সরাসরি ব্যাংক অ্যাকাউন্টে জমা।", "সরকারি দক্ষতা উন্নয়ন ও চাকরির খবরের অগ্রাধিকার।"],
            hi: ["₹1,500 मासिक सीधा बैंक ट्रांसफर और कौशल प्रशिक्षण।"]
        },
        process_steps: {
            en: [
                "Visit the official Employment Bank portal (employmentbankwb.gov.in).",
                "Click 'New Enrolment (Job Seeker)' and fill the online registration form.",
                "Visit your local Employment Exchange within 60 days with original documents for physical validation.",
                "Check the published Yuvasree beneficiary list on the portal and submit Annexure-I and Annexure-II."
            ],
            bn: [
                "employmentbankwb.gov.in পোর্টালে গিয়ে 'Job Seeker' রেজিস্ট্রেশন করুন।",
                "অরিজিনাল নথি নিয়ে স্থানীয় এমপ্লয়মেন্ট এক্সচেঞ্জে গিয়ে ভেরিফাই করান।",
                "তালিকা প্রকাশের পর Annexure-I ও II জমা দিয়ে ভাতা চালু করুন।"
            ],
            hi: [
                "employmentbankwb.gov.in पर पंजीकरण करें और स्थानीय एक्सचेंज में सत्यापित कराएं।"
            ]
        },
        official_homepage: "https://employmentbankwb.gov.in/",
        official_apply_url: "https://employmentbankwb.gov.in/",
        official_status_url: "https://employmentbankwb.gov.in/",
        official_helpline: "033-2237-6300 (Employment Bank Helpline)",
        official_email: "employmentbank.wb@gmail.com",
        state: "West Bengal",
        availability: "Online + Employment Exchange",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://employmentbankwb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["yuvasree", "employment bank", "bekar bhata", "wb unemployment stipend", "যুবশ্রী", "বেকার ভাতা", "এমপ্লয়মেন্ট ব্যাঙ্ক", "युवाश्री", "बेरोजगारी भत्ता"],
        scam_warning: {
            en: "Never pay money to agents claiming guaranteed Yuvasree selection. Enrolment and beneficiary selection follow strict transparent seniority.",
            bn: "যুবশ্রীতে নাম তোলার নামে দালালদের টাকা দেবেন না। নির্বাচন সম্পূর্ণ সরকারি নিয়মে হয়।",
            hi: "युवाश्री चयन के नाम पर किसी को पैसे न दें।"
        }
    },
    {
        service_id: "wb-banglar-yuva-sathi",
        service_name: {
            en: "Banglar Yuva Sathi Scheme Portal",
            bn: "বাংলার যুব সাথী প্রকল্প পোর্টাল",
            hi: "बांगलार युवा साथी योजना पोर्टल"
        },
        short_description: {
            en: "Official Government of West Bengal youth empowerment portal connecting youth with internships, career skilling, entrepreneurship grants, and digital enablement.",
            bn: "পশ্চিমবঙ্গ সরকারের তরুণ প্রজন্মের জন্য ইন্টার্নশিপ, দক্ষতা বৃদ্ধি ও স্বনির্ভরতার সরকারি পোর্টাল।",
            hi: "पश्चिम बंगाल सरकार का युवा सशक्तिकरण, इंटर्नशिप और कौशल विकास पोर्टल।"
        },
        category: "sports-youth",
        category_name: { en: "Sports, Youth Welfare & Khelo India", bn: "ক্রীড়া ও যুব কল্যাণ", hi: "खेल और युवा कल्याण" },
        subcategory: "Youth Services WB",
        authority: "Department of Youth Services and Sports, Government of West Bengal",
        government_level: "State",
        service_type: "Youth",
        target_users: ["Youth", "Student", "Job Seeker"],
        eligibility: {
            en: ["Youth aged 18 to 35 residing in West Bengal."],
            bn: ["পশ্চিমবঙ্গের ১৮ থেকে ৩৫ বছর বয়সী তরুণ-তরুণী।"],
            hi: ["पश्चिम बंगाल के 18-35 वर्ष के युवा।"]
        },
        required_documents: {
            en: ["Aadhaar Card", "Educational Proof", "Mobile Number & Photo"],
            bn: ["আধার কার্ড", "শিক্ষাগত যোগ্যতার প্রমাণ", "মোবাইল নম্বর ও ছবি।"],
            hi: ["आधार कार्ड और शैक्षणिक प्रमाण पत्र।"]
        },
        application_fee: { en: "Free Government Initiative.", bn: "সম্পূর্ণ বিনামূল্যে সরকারি উদ্যোগ।", hi: "निःशुल्क सरकारी योजना।" },
        benefits: {
            en: ["Skill workshops, digital enablement, and state-level youth competitions."],
            bn: ["দক্ষতা উন্নয়ন কর্মশালা ও রাজ্যভিত্তিক যুব প্রকল্পের সুবিধা।"],
            hi: ["कौशल कार्यशालाएं और राज्य स्तरीय अवसर।"]
        },
        process_steps: {
            en: [
                "Visit the official Government of West Bengal youth portal.",
                "Register with Aadhaar and mobile verification.",
                "Explore available youth schemes, training camps, and apply online."
            ],
            bn: [
                "সরকারি পোর্টালে আধার দিয়ে রেজিস্ট্রেশন করুন ও যুব প্রকল্পের সুবিধা নিন।"
            ],
            hi: [
                "आधिकारिक पोर्टल पर पंजीकरण करें और योजनाओं का लाभ उठाएं।"
            ]
        },
        official_homepage: "https://wb.gov.in/",
        official_apply_url: "https://wb.gov.in/",
        official_status_url: "https://wb.gov.in/",
        official_helpline: "1800-345-0117",
        official_email: "youthservices@wb.gov.in",
        state: "West Bengal",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://wb.gov.in/",
        last_verified: "15 Sep 2026",
        is_popular: false,
        intent_tags: ["banglar yuva sathi", "yuva sathi", "wb youth scheme", "বাংলার যুব সাথী", "যুব সাথী", "बांगलार युवा साथी"],
        scam_warning: {
            en: "Always access through official wb.gov.in portal. Beware of fake portal names like 'Yuva Shakti'.",
            bn: "সর্বদা সরকারি wb.gov.in পোর্টাল ব্যবহার করুন। ভুয়া নামের পোর্টাল থেকে দূরে থাকুন।",
            hi: "केवल आधिकारिक wb.gov.in पोर्टल का उपयोग करें।"
        }
    },

    // --- ADDITIONAL PRIVATE SERVICES ---
    {
        service_id: "pvt-sbi-online-banking",
        service_name: {
            en: "State Bank of India (SBI Online Banking)",
            bn: "স্টেট ব্যাঙ্ক অফ ইন্ডিয়া (এসবিআই ইন্টারনেট ব্যাঙ্কিং)",
            hi: "भारतीय स्टेट बैंक (एसबीआई ऑनलाइन)"
        },
        short_description: {
            en: "Official retail and corporate internet banking portal of State Bank of India (SBI) for fund transfers, account statements, debit card management, and fixed deposits.",
            bn: "স্টেট ব্যাঙ্ক অফ ইন্ডিয়ার অফিসিয়াল ইন্টারনেট ব্যাঙ্কিং পোর্টাল—টাকা ট্রান্সফার, স্টেটমেন্ট ডাউনলোড ও ফিক্সড ডিপোজিটের নিরাপদ সেবা।",
            hi: "भारतीय स्टेट बैंक का आधिकारिक ऑनलाइन पोर्टल - फंड ट्रांसफर, खाता विवरण और सावधि जमा की सुविधा।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Banking",
        authority: "State Bank of India (Corporate Entity)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["SBI Account Holder", "Citizen", "Business"],
        eligibility: {
            en: ["Active SBI Savings/Current account holders with registered mobile number."],
            bn: ["এসবিআই-এর রেজিস্টার্ড মোবাইল নম্বর সহ সেভিংস/কারেন্ট অ্যাকাউন্টধারী।"],
            hi: ["एसबीआई खाताधारक।"]
        },
        required_documents: {
            en: ["SBI Account Number & CIF Number", "Registered Mobile Number for OTP", "SBI ATM / Debit Card for online activation."],
            bn: ["এসবিআই অ্যাকাউন্ট নম্বর ও CIF নম্বর", "রেজিস্টার্ড মোবাইল ও এটিএম কার্ড।"],
            hi: ["एसबीआई खाता संख्या, सीआईएफ नंबर और एटीएम कार्ड।"]
        },
        application_fee: { en: "Free online banking access.", bn: "ইন্টারনেট ব্যাঙ্কিং সম্পূর্ণ বিনামূল্যে।", hi: "निःशुल्क ऑनलाइन बैंकिंग।" },
        benefits: {
            en: ["24x7 IMPS, NEFT, RTGS, and UPI transfers.", "Download official stamped e-statements for government form submissions."],
            bn: ["২৪x৭ ফান্ড ট্রান্সফার ও সরকারি ফর্ম ফিলাপের জন্য ই-স্টেটমেন্ট ডাউনলোড।"],
            hi: ["24x7 फंड ट्रांसफर और ई-स्टेटमेंट डाउनलोड।"]
        },
        process_steps: {
            en: [
                "Visit official SBI portal (onlinesbi.sbi).",
                "Click 'Personal Banking' > 'Login'.",
                "Enter your Username, Password, and Captcha.",
                "Verify using High-Security Password (OTP) received on your registered mobile.",
                "Access banking dashboard for transactions and statements."
            ],
            bn: [
                "অফিসিয়াল onlinesbi.sbi পোর্টালে গিয়ে ইউজারনেম, পাসওয়ার্ড ও ওটিপি দিয়ে নিরাপদে লগইন করুন।"
            ],
            hi: [
                "onlinesbi.sbi पर जाएं और सुरक्षित लॉगिन करें।"
            ]
        },
        official_homepage: "https://www.sbi.co.in/",
        official_apply_url: "https://www.onlinesbi.sbi/",
        official_status_url: "https://www.onlinesbi.sbi/",
        official_helpline: "1800 1234 / 1800 2100 (SBI Toll Free)",
        official_email: "customercare@sbi.co.in",
        state: "All India",
        availability: "Online + App",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.onlinesbi.sbi/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["sbi", "sbi online", "state bank of india", "sbi netbanking", "sbi statement", "yono sbi", "এসবিআই", "স্টেট ব্যাঙ্ক", "এসবিআই লগইন", "एसबीआई", "स्टेट बैंक"],
        scam_warning: {
            en: "NEVER share your SBI Username, Password, ATM PIN, or OTP with anyone. SBI NEVER calls asking for OTPs.",
            bn: "কখনোই এসবিআই পাসওয়ার্ড, এটিএম পিন বা ওটিপি কাউকে জানাবেন না। এসবিআই ফোন করে ওটিপি চায় না।",
            hi: "एसबीआई पासवर्ड, पिन या ओटीपी किसी के साथ साझा न करें।"
        }
    },
    {
        service_id: "pvt-npci-bhim-upi",
        service_name: {
            en: "BHIM & NPCI Digital Payments Portal",
            bn: "ভিম (BHIM) ও এনপিসিআই ডিজিটাল পেমেন্ট",
            hi: "भीम (BHIM) और एनपीसीआई डिजिटल भुगतान"
        },
        short_description: {
            en: "Official National Payments Corporation of India (NPCI) portal for Unified Payments Interface (UPI) consumer guidance, dispute resolution, and BHIM app authentication.",
            bn: "ভারতের জাতীয় পেমেন্ট কর্পোরেশনের (NPCI) অফিসিয়াল পোর্টাল—ইউপিআই লেনদেন বিরোধ নিষ্পত্তি ও ভিম পেমেন্ট সহায়তা।",
            hi: "एनपीसीआई का आधिकारिक यूपीआई उपभोक्ता सहायता और शिकायत निवारण पोर्टल।"
        },
        category: "private-digital",
        category_name: { en: "Essential Private Digital Tools", bn: "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা", hi: "आवश्यक निजी डिजिटल सेवाएं" },
        subcategory: "Payments",
        authority: "National Payments Corporation of India (NPCI)",
        government_level: "Private",
        service_type: "Private",
        target_users: ["All Indian Citizens", "UPI Users"],
        eligibility: { en: ["All Indian bank account holders using UPI payments."], bn: ["ইউপিআই ব্যবহারকারী সমস্ত ভারতীয় নাগরিক।"], hi: ["सभी यूपीआई उपयोगकर्ता।"] },
        required_documents: { en: ["Bank Account Number", "Transaction Reference ID / UTR Number"], bn: ["ব্যাংক অ্যাকাউন্ট ও ইউটিআর (UTR) ট্রানজাকশন নম্বর।"], hi: ["बैंक खाता और यूटीआर नंबर।"] },
        application_fee: { en: "100% Free Public Utility.", bn: "সম্পূর্ণ বিনামূল্যে।", hi: "निःशुल्क सेवा।" },
        benefits: {
            en: ["Direct official channel to escalate failed UPI transactions.", "Verify genuine UPI handles and merchant QR codes."],
            bn: ["ব্যর্থ ইউপিআই লেনদেনের টাকা ফেরতের সরাসরি অভিযোগ নিষ্পত্তির পথ।"],
            hi: ["विफल यूपीआई लेनदेन के लिए शिकायत निवारण।"]
        },
        process_steps: {
            en: [
                "Visit official NPCI portal (npci.org.in/what-we-do/upi/dispute-redressal-mechanism).",
                "Select 'Complaint' and choose nature of transaction (Person-to-Person / Person-to-Merchant).",
                "Enter 12-digit UPI Transaction ID (UTR), Bank Name, Amount, and Date.",
                "Submit complaint for direct inter-bank automated reconciliation."
            ],
            bn: [
                "অফিসিয়াল npci.org.in পোর্টালে যান ও ইউপিআই সংক্রান্ত অভিযোগ দাখিল করুন।"
            ],
            hi: [
                "npci.org.in पर जाएं और यूपीआई शिकायत दर्ज करें।"
            ]
        },
        official_homepage: "https://www.npci.org.in/",
        official_apply_url: "https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism",
        official_status_url: "https://www.npci.org.in/",
        official_helpline: "1800-120-1740 (NPCI Toll Free)",
        official_email: "contact@npci.org.in",
        state: "All India",
        availability: "Online",
        active_status: true,
        verification_status: "officially_verified",
        source_url: "https://www.npci.org.in/",
        last_verified: "15 Sep 2026",
        is_popular: true,
        intent_tags: ["bhim", "npci", "upi dispute", "failed transaction", "upi refund", "ভিম", "ইউপিআই", "এনপিসিআই", "भीम", "यूपीआई"],
        scam_warning: {
            en: "Remember: UPI PIN is ONLY needed to SEND money, NEVER to receive money or refunds.",
            bn: "মনে রাখবেন: টাকা পাঠানোর জন্যই শুধু ইউপিআই পিন লাগে, টাকা পাওয়ার জন্য কখনোই পিন দিতে হয় না।",
            hi: "याद रखें: पैसे प्राप्त करने के लिए कभी भी यूपीआई पिन की आवश्यकता नहीं होती।"
        }
    }
];

let content = fs.readFileSync('js/digital-seva-data.js', 'utf8');

if (content.includes("incometax-efiling-itr")) {
    console.log("Services already exist in js/digital-seva-data.js.");
} else {
    // Find the exact line index of line 3785: "    ];"
    const lines = content.split('\n');
    let targetIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() === '];' && i < 3800 && i > 3700) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex !== -1) {
        console.log(`Found target closing bracket at line ${targetIndex + 1}`);
        
        // Add comma to previous line if needed
        if (!lines[targetIndex - 1].trim().endsWith(',')) {
            lines[targetIndex - 1] = lines[targetIndex - 1] + ',';
        }

        // Format new services
        const formattedNewServices = NEW_SERVICES.map(s => {
            return JSON.stringify(s, null, 12).split('\n').map(l => '        ' + l).join('\n');
        }).join(',\n\n');

        lines.splice(targetIndex, 0, '\n        // --- ADDITIONAL VERIFIED STATUTORY & PRIVATE SERVICES ---\n' + formattedNewServices);

        fs.writeFileSync('js/digital-seva-data.js', lines.join('\n'), 'utf8');
        console.log(`Successfully injected ${NEW_SERVICES.length} verified services into js/digital-seva-data.js!`);
    } else {
        console.error("Could not find closing bracket in line range 3700-3800.");
    }
}
