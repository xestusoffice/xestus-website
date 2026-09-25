/**
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
    const CATEGORIES = [
        {
                "id": "identity-docs",
                "icon": "id-card",
                "name": {
                        "en": "Identity & Documents",
                        "bn": "পরিচয়পত্র ও নথি",
                        "hi": "पहचान और दस्तावेज"
                },
                "count": "12+ Services"
        },
        {
                "id": "wb-edistrict",
                "icon": "file-check",
                "name": {
                        "en": "West Bengal e-District",
                        "bn": "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট",
                        "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट"
                },
                "count": "25+ Services"
        },
        {
                "id": "ration-food",
                "icon": "utensils",
                "name": {
                        "en": "Ration & Food Security",
                        "bn": "রেশন ও খাদ্য সুরক্ষা",
                        "hi": "राशन और खाद्य सुरक्षा"
                },
                "count": "6+ Services"
        },
        {
                "id": "land-property",
                "icon": "map-pin",
                "name": {
                        "en": "Land & Property (Banglarbhumi)",
                        "bn": "জমি ও সম্পত্তি (বাংলারভূমি)",
                        "hi": "भूमि और संपत्ति (बांगलारभूमि)"
                },
                "count": "8+ Services"
        },
        {
                "id": "healthcare",
                "icon": "heart-pulse",
                "name": {
                        "en": "Healthcare & Insurance",
                        "bn": "স্বাস্থ্যসেবা ও বীমা",
                        "hi": "स्वास्थ्य सेवा और बीमा"
                },
                "count": "10+ Services"
        },
        {
                "id": "agriculture",
                "icon": "sprout",
                "name": {
                        "en": "Farmers & Agriculture",
                        "bn": "কৃষক ও কৃষি সেবা",
                        "hi": "किसान और कृषि"
                },
                "count": "7+ Services"
        },
        {
                "id": "labour-workers",
                "icon": "hard-hat",
                "name": {
                        "en": "Workers & Labour Welfare",
                        "bn": "শ্রমিক ও শ্রম কল্যাণ",
                        "hi": "श्रमिक और श्रम कल्याण"
                },
                "count": "8+ Services"
        },
        {
                "id": "welfare-schemes",
                "icon": "gift",
                "name": {
                        "en": "Government Welfare Schemes",
                        "bn": "সরকারি কল্যাণমূলক প্রকল্প",
                        "hi": "सरकारी कल्याण योजनाएं"
                },
                "count": "18+ Services"
        },
        {
                "id": "pension-security",
                "icon": "shield",
                "name": {
                        "en": "Pension & Social Security",
                        "bn": "পেনশন ও সামাজিক সুরক্ষা",
                        "hi": "पेंशन और सामाजिक सुरक्षा"
                },
                "count": "9+ Services"
        },
        {
                "id": "women-girls",
                "icon": "sparkles",
                "name": {
                        "en": "Women & Girls Schemes",
                        "bn": "নারী ও কন্যাশ্রী প্রকল্প",
                        "hi": "महिला और बालिका योजनाएं"
                },
                "count": "11+ Services"
        },
        {
                "id": "disability-services",
                "icon": "accessibility",
                "name": {
                        "en": "Persons with Disabilities (UDID)",
                        "bn": "প্রতিবন্ধী সুরক্ষা ও UDID",
                        "hi": "दिव्यांगजन सेवाएं (UDID)"
                },
                "count": "5+ Services"
        },
        {
                "id": "senior-citizens",
                "icon": "users",
                "name": {
                        "en": "Senior Citizens Welfare",
                        "bn": "প্রবীণ নাগরিক কল্যাণ",
                        "hi": "वरिष्ठ नागरिक कल्याण"
                },
                "count": "6+ Services"
        },
        {
                "id": "school-education",
                "icon": "book-open",
                "name": {
                        "en": "School Education & Boards",
                        "bn": "বিদ্যালয় শিক্ষা ও বোর্ড",
                        "hi": "स्कूली शिक्षा और बोर्ड"
                },
                "count": "8+ Services"
        },
        {
                "id": "college-admission",
                "icon": "graduation-cap",
                "name": {
                        "en": "College & University Admission",
                        "bn": "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি",
                        "hi": "कॉलेज और विश्वविद्यालय प्रवेश"
                },
                "count": "14+ Services"
        },
        {
                "id": "entrance-exams",
                "icon": "file-signature",
                "name": {
                        "en": "Entrance Examinations (JEE/NEET)",
                        "bn": "প্রবেশিকা পরীক্ষা (JEE/NEET)",
                        "hi": "प्रवेश परीक्षाएं (JEE/NEET)"
                },
                "count": "10+ Services"
        },
        {
                "id": "govt-jobs-central",
                "icon": "briefcase",
                "name": {
                        "en": "Central Govt Competitive Exams (SSC/UPSC)",
                        "bn": "কেন্দ্রীয় সরকারি চাকরি (SSC/UPSC)",
                        "hi": "केंद्रीय सरकारी परीक्षाएं (SSC/UPSC)"
                },
                "count": "15+ Services"
        },
        {
                "id": "railway-jobs",
                "icon": "train",
                "name": {
                        "en": "Railway Jobs & RRB",
                        "bn": "রেলওয়ে চাকরি ও RRB",
                        "hi": "रेलवे नौकरियां और RRB"
                },
                "count": "6+ Services"
        },
        {
                "id": "banking-jobs",
                "icon": "landmark",
                "name": {
                        "en": "Banking Jobs (IBPS/SBI)",
                        "bn": "ব্যাঙ্কিং চাকরি (IBPS/SBI)",
                        "hi": "बैंकिंग नौकरियां (IBPS/SBI)"
                },
                "count": "7+ Services"
        },
        {
                "id": "defence-jobs",
                "icon": "shield-alert",
                "name": {
                        "en": "Defence & Armed Forces (Army/Navy/AirForce)",
                        "bn": "প্রতিরক্ষা ও সেনাবাহিনী",
                        "hi": "रक्षा और सशस्त्र बल"
                },
                "count": "8+ Services"
        },
        {
                "id": "wb-govt-jobs",
                "icon": "building-2",
                "name": {
                        "en": "West Bengal Govt Jobs (WBPSC/WBP)",
                        "bn": "পশ্চিমবঙ্গ সরকারি চাকরি (WBPSC/WBP)",
                        "hi": "पश्चिम बंगाल सरकारी नौकरियां"
                },
                "count": "12+ Services"
        },
        {
                "id": "private-jobs",
                "icon": "laptop",
                "name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "count": "10+ Services"
        },
        {
                "id": "internships",
                "icon": "user-check",
                "name": {
                        "en": "Government & AICTE Internships",
                        "bn": "ইন্টার্নশিপ ও শিক্ষানবিশী",
                        "hi": "इंटर्नशिप और प्रशिक्षण"
                },
                "count": "9+ Services"
        },
        {
                "id": "skill-development",
                "icon": "wrench",
                "name": {
                        "en": "Skill Development & PMKVY",
                        "bn": "দক্ষতা উন্নয়ন ও PMKVY",
                        "hi": "कौशल विकास और PMKVY"
                },
                "count": "11+ Services"
        },
        {
                "id": "scholarships",
                "icon": "award",
                "name": {
                        "en": "Scholarships (National & State)",
                        "bn": "স্কলারশিপ ও অনুদান (SVMCM/Oasis)",
                        "hi": "छात्रवृत्ति और अनुदान"
                },
                "count": "16+ Services"
        },
        {
                "id": "student-credit",
                "icon": "credit-card",
                "name": {
                        "en": "Student Credit Card & Education Loan",
                        "bn": "স্টুডেন্ট ক্রেডিট কার্ড ও শিক্ষা ঋণ",
                        "hi": "स्टूडेंट क्रेडिट कार्ड और शिक्षा ऋण"
                },
                "count": "5+ Services"
        },
        {
                "id": "driving-vehicles",
                "icon": "car",
                "name": {
                        "en": "Driving Licence & Parivahan",
                        "bn": "ড্রাইভিং লাইসেন্স ও পরিবহন",
                        "hi": "ड्राइविंग लाइसेंस और परिवहन"
                },
                "count": "10+ Services"
        },
        {
                "id": "lpg-gas",
                "icon": "flame",
                "name": {
                        "en": "LPG / Cooking Gas & Ujjwala",
                        "bn": "রান্নার গ্যাস ও উজ্জ্বলা",
                        "hi": "रसोई गैस और उज्ज्वला"
                },
                "count": "6+ Services"
        },
        {
                "id": "electricity",
                "icon": "zap",
                "name": {
                        "en": "Electricity Services (WBSEDCL/CESC)",
                        "bn": "বিদ্যুৎ পরিষেবা ও সংযোগ",
                        "hi": "बिजली सेवाएं और कनेक्शन"
                },
                "count": "7+ Services"
        },
        {
                "id": "municipal-services",
                "icon": "building",
                "name": {
                        "en": "Water & Municipal Services (KMC/ULB)",
                        "bn": "পৌর পরিষেবা ও পানীয় জল",
                        "hi": "नगर पालिका और जल सेवाएं"
                },
                "count": "9+ Services"
        },
        {
                "id": "banking-finance",
                "icon": "coins",
                "name": {
                        "en": "Banking & Financial Services (Jan Dhan)",
                        "bn": "ব্যাঙ্কিং ও আর্থিক অন্তর্ভুক্তি",
                        "hi": "बैंकिंग और वित्तीय सेवाएं"
                },
                "count": "8+ Services"
        },
        {
                "id": "insurance",
                "icon": "umbrella",
                "name": {
                        "en": "Life & General Insurance (PMJJBY/PMSBY)",
                        "bn": "জীবন ও সাধারণ বীমা",
                        "hi": "जीवन और सामान्य बीमा"
                },
                "count": "6+ Services"
        },
        {
                "id": "tax-gst",
                "icon": "receipt",
                "name": {
                        "en": "Income Tax & GST Portal",
                        "bn": "আয়কর ও জিএসটি পোর্টাল",
                        "hi": "आयकर और जीएसटी पोर्टल"
                },
                "count": "8+ Services"
        },
        {
                "id": "business-startup",
                "icon": "rocket",
                "name": {
                        "en": "Business & MSME (Udyam Registration)",
                        "bn": "ব্যবসা ও এমএসএমই (উদ্যম)",
                        "hi": "व्यवसाय और एमएसएमई (उद्यम)"
                },
                "count": "12+ Services"
        },
        {
                "id": "procurement",
                "icon": "shopping-bag",
                "name": {
                        "en": "Government Procurement (GeM)",
                        "bn": "সরকারি টেন্ডার ও GeM",
                        "hi": "सरकारी खरीद (GeM)"
                },
                "count": "4+ Services"
        },
        {
                "id": "legal-services",
                "icon": "scale",
                "name": {
                        "en": "Legal Aid & e-Courts Services",
                        "bn": "আইনি সহায়তা ও ই-কোর্ট",
                        "hi": "कानूनी सहायता और ई-कोर्ट"
                },
                "count": "7+ Services"
        },
        {
                "id": "rti",
                "icon": "file-text",
                "name": {
                        "en": "Right to Information (RTI Online)",
                        "bn": "তথ্য জানার অধিকার (RTI)",
                        "hi": "सूचना का अधिकार (RTI)"
                },
                "count": "3+ Services"
        },
        {
                "id": "police-cyber",
                "icon": "shield-alert",
                "name": {
                        "en": "Police & Cyber Crime Reporting (1930)",
                        "bn": "পুলিশ ও সাইবার ক্রাইম হেল্পলাইন",
                        "hi": "पुलिस और साइबर क्राइम पोर्टल"
                },
                "count": "8+ Services"
        },
        {
                "id": "india-post",
                "icon": "mail",
                "name": {
                        "en": "India Post & Postal Banking (IPPB)",
                        "bn": "ডাক বিভাগ ও পোস্টাল ব্যাঙ্ক",
                        "hi": "भारतीय डाक और पोस्टल बैंक"
                },
                "count": "6+ Services"
        },
        {
                "id": "travel-railway",
                "icon": "navigation",
                "name": {
                        "en": "Travel & Railway Booking (IRCTC)",
                        "bn": "রেল টিকিট ও ভ্রমণ (IRCTC)",
                        "hi": "रेल यात्रा और आईआरसीटीसी"
                },
                "count": "5+ Services"
        },
        {
                "id": "solar-energy",
                "icon": "sun",
                "name": {
                        "en": "PM Surya Ghar & Solar Rooftop",
                        "bn": "প্রধানমন্ত্রী সূর্য ঘর ও সৌর বিদ্যুৎ",
                        "hi": "पीएम सूर्य घर और सौर ऊर्जा"
                },
                "count": "4+ Services"
        },
        {
                "id": "digital-gov",
                "icon": "globe",
                "name": {
                        "en": "Digital India, DigiLocker & UMANG",
                        "bn": "ডিজিটাল ভারত ও ডিজিলকার",
                        "hi": "डिजिटल इंडिया और डिजिलॉकर"
                },
                "count": "8+ Services"
        },
        {
                "id": "notices-alerts",
                "icon": "bell",
                "name": {
                        "en": "Government Notices, Gazettes & Alerts",
                        "bn": "সরকারি বিজ্ঞপ্তি ও গ্যাজেট",
                        "hi": "सरकारी सूचनाएं और अलर्ट"
                },
                "count": "6+ Services"
        },
        {
                "id": "exam-calendar",
                "icon": "calendar",
                "name": {
                        "en": "Official Exam Calendar & Schedules",
                        "bn": "পরীক্ষার সময়সূচি ও ক্যালেন্ডার",
                        "hi": "परीक्षा समय सारणी"
                },
                "count": "7+ Services"
        },
        {
                "id": "results-portal",
                "icon": "check-square",
                "name": {
                        "en": "Verified Exam Results Portal",
                        "bn": "পরীক্ষার ফলাফল পোর্টাল",
                        "hi": "परीक्षा परिणाम पोर्टल"
                },
                "count": "9+ Services"
        },
        {
                "id": "admit-cards",
                "icon": "ticket",
                "name": {
                        "en": "Hall Tickets & Admit Cards",
                        "bn": "অ্যাডমিট কার্ড ও হল টিকিট",
                        "hi": "प्रवेश पत्र (Admit Cards)"
                },
                "count": "8+ Services"
        },
        {
                "id": "application-status",
                "icon": "activity",
                "name": {
                        "en": "Track Application & Grievance Status",
                        "bn": "আবেদনের স্থিতি ও ট্র্যাকিং",
                        "hi": "आवेदन स्थिति और ट्रैकिंग"
                },
                "count": "10+ Services"
        },
        {
                "id": "helpline-grievance",
                "icon": "phone-call",
                "name": {
                        "en": "CPGRAMS & State Grievance Portals",
                        "bn": "অভিযোগ প্রতিকার ও হেল্পলাইন",
                        "hi": "शिकायत निवारण और हेल्पलाइन"
                },
                "count": "9+ Services"
        },
        {
                "id": "panchayat-rural",
                "icon": "home",
                "name": {
                        "en": "Panchayat & Rural Development",
                        "bn": "পঞ্চায়েত ও গ্রামীণ উন্নয়ন",
                        "hi": "पंचायत और ग्रामीण विकास"
                },
                "count": "7+ Services"
        },
        {
                "id": "municipal-civic",
                "icon": "layout-grid",
                "name": {
                        "en": "Urban Civic & Trade Licences",
                        "bn": "ট্রেড লাইসেন্স ও পৌর কর",
                        "hi": "ट्रेड लाइसेंस और नगर निगम"
                },
                "count": "8+ Services"
        },
        {
                "id": "career-guidance",
                "icon": "compass",
                "name": {
                        "en": "Career & Professional Guidance",
                        "bn": "ক্যারিয়ার পরামর্শ ও দিকনির্দেশনা",
                        "hi": "करियर मार्गदर्शन"
                },
                "count": "6+ Services"
        },
        {
                "id": "freelance-creator",
                "icon": "pen-tool",
                "name": {
                        "en": "Freelancing & Creator Opportunities",
                        "bn": "ফ্রিল্যান্সিং ও ক্রিয়েটর প্ল্যাটফর্ম",
                        "hi": "फ्रीलांसिंग और क्रिएटर"
                },
                "count": "5+ Services"
        },
        {
                "id": "private-digital",
                "icon": "smartphone",
                "name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "count": "8+ Services"
        },
        {
                "id": "polytechnic-iti",
                "icon": "cpu",
                "name": {
                        "en": "Polytechnic, ITI & Technical Admissions (WBSCTE)",
                        "bn": "পলিটেকনিক, ITI ও কারিগরি শিক্ষা",
                        "hi": "पॉलिटेक्निक, आईटीआई व तकनीकी"
                },
                "count": "6+ Services"
        },
        {
                "id": "research-science",
                "icon": "microscope",
                "name": {
                        "en": "Research Fellowships & Science Grants",
                        "bn": "গবেষণা ফেলোশিপ ও বিজ্ঞান অনুদান",
                        "hi": "अनुसंधान फेलोशिप और अनुदान"
                },
                "count": "5+ Services"
        },
        {
                "id": "sports-youth",
                "icon": "trophy",
                "name": {
                        "en": "Sports, Youth Welfare & Khelo India",
                        "bn": "ক্রীড়া ও যুব কল্যাণ (খেলো ইন্ডিয়া)",
                        "hi": "खेल और युवा कल्याण"
                },
                "count": "5+ Services"
        },
        {
                "id": "culture-heritage",
                "icon": "palette",
                "name": {
                        "en": "Culture, Art & Heritage Fellowships",
                        "bn": "সংস্কৃতি ও শিল্পকলা স্কলারশিপ",
                        "hi": "संस्कृति और कला फैलोशिप"
                },
                "count": "4+ Services"
        },
        {
                "id": "free-learning",
                "icon": "sparkle",
                "name": {
                        "en": "Free Certified Learning (SWAYAM / NPTEL)",
                        "bn": "বিনামূল্যে অনলাইন কোর্স (SWAYAM)",
                        "hi": "मुफ्त ऑनलाइन कोर्स (SWAYAM)"
                },
                "count": "7+ Services"
        },
        {
                "id": "international-edu",
                "icon": "plane",
                "name": {
                        "en": "Study Abroad, Passports & Visas",
                        "bn": "বিদেশে উচ্চশিক্ষা, পাসপোর্ট ও ভিসা",
                        "hi": "विदेश में शिक्षा, पासपोर्ट व वीजा"
                },
                "count": "6+ Services"
        },
        {
                "id": "scam-protection",
                "icon": "alert-triangle",
                "name": {
                        "en": "Scam Protection & Cyber Defense Hub",
                        "bn": "সাইবার প্রতারণা প্রতিরোধ কেন্দ্র",
                        "hi": "धोखाधड़ी से सुरक्षा केंद्र"
                },
                "count": "10+ Guidelines"
        }
];

    // =========================================================================
    // 2. MASTER PORTALS (Quick Fallback / Universal Gateways)
    // =========================================================================
    const MASTER_PORTALS = [
        {
                "id": "portal-india-gov",
                "name": "India.gov.in",
                "title": {
                        "en": "National Portal of India",
                        "bn": "ভারতের জাতীয় পোর্টাল",
                        "hi": "भारत का राष्ट्रीय पोर्टल"
                },
                "desc": {
                        "en": "The single-window access point to all Government of India online services and departments.",
                        "bn": "ভারত সরকারের সমস্ত অনলাইন সেবা ও দপ্তরের প্রবেশদ্বার।",
                        "hi": "भारत सरकार की सभी ऑनलाइन सेवाओं का मुख्य द्वार।"
                },
                "url": "https://www.india.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "NIC / MeitY"
        },
        {
                "id": "portal-services-gov",
                "name": "Services.india.gov.in",
                "title": {
                        "en": "National Government Services Portal",
                        "bn": "জাতীয় সরকারি সেবা পোর্টাল",
                        "hi": "राष्ट्रीय सरकारी सेवाएं पोर्टल"
                },
                "desc": {
                        "en": "Official repository listing over 14,000+ central and state citizen services online.",
                        "bn": "১৪,০০০+ কেন্দ্রীয় ও রাজ্য সরকারি নাগরিক সেবার আনুষ্ঠানিক ডিরেক্টরি।",
                        "hi": "14,000+ से अधिक केंद्रीय और राज्य नागरिक सेवाओं की सूची।"
                },
                "url": "https://services.india.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "National Informatics Centre"
        },
        {
                "id": "portal-umang",
                "name": "UMANG Web Portal",
                "title": {
                        "en": "Unified Mobile App for New-age Governance",
                        "bn": "উমঙ্গ (UMANG) সমন্বিত সেবা পোর্টাল",
                        "hi": "उमंग (UMANG) एकीकृत सेवा पोर्टल"
                },
                "desc": {
                        "en": "Single platform for EPF, PAN, Aadhaar, Gas Booking, and hundreds of central/state services.",
                        "bn": "ইপিএফ, প্যান, গ্যাস বুকিং সহ শত শত সরকারি সেবার একক ডিজিটাল প্ল্যাটফর্ম।",
                        "hi": "ईपीएफ, पैन, गैस बुकिंग और सैकड़ों सरकारी सेवाओं का साझा मंच।"
                },
                "url": "https://web.umang.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "MeitY / NeGD"
        },
        {
                "id": "portal-serviceplus",
                "name": "ServicePlus India",
                "title": {
                        "en": "ServicePlus Meta-e-Governance Delivery Portal",
                        "bn": "সার্ভিসপ্লাস ই-গভর্ন্যান্স পোর্টাল",
                        "hi": "सर्विसप्लस ई-गवर्नेंस पोर्टल"
                },
                "desc": {
                        "en": "Unified metadata-based platform delivering electronic government services across Indian states.",
                        "bn": "ভারত জুড়ে ইলেকট্রনিক সরকারি সেবা প্রদানের সমন্বিত পোর্টাল।",
                        "hi": "भारत भर में इलेक्ट्रॉनिक सरकारी सेवाएं प्रदान करने का पोर्टल।"
                },
                "url": "https://serviceonline.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "National Informatics Centre (NIC)"
        },
        {
                "id": "portal-bsk",
                "name": "Bangla Sahayata Kendra (BSK)",
                "title": {
                        "en": "BSK Government of West Bengal",
                        "bn": "বাংলা সহায়তা কেন্দ্র (BSK)",
                        "hi": "बांग्ला सहायता केंद्र (BSK)"
                },
                "desc": {
                        "en": "Free single-window digital delivery centers for all West Bengal public schemes & services.",
                        "bn": "পশ্চিমবঙ্গ সরকারের সমস্ত জনকল্যাণমূলক প্রকল্পের ১০০% বিনামূল্যে ডিজিটাল সেবা কেন্দ্র।",
                        "hi": "पश्चिम बंगाल सरकार की सभी जन कल्याण योजनाओं का निःशुल्क सेवा केंद्र।"
                },
                "url": "https://bsk.wb.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "P&AR Department, Govt of West Bengal"
        },
        {
                "id": "portal-wb-edistrict",
                "name": "West Bengal e-District 2.0",
                "title": {
                        "en": "WB e-District Single Window Services",
                        "bn": "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট পোর্টাল",
                        "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट पोर्टल"
                },
                "desc": {
                        "en": "Online issuance of Domicile, Caste, Income, Land and municipal certificates in West Bengal.",
                        "bn": "পশ্চিমবঙ্গে ডোমিসাইল, কাস্ট, ইনকাম ও অন্যান্য শংসাপত্র পাওয়ার অনলাইন পোর্টাল।",
                        "hi": "पश्चिम बंगाल में निवास, जाति, आय और अन्य प्रमाण पत्र प्राप्त करने का पोर्टल।"
                },
                "url": "https://edistrict.wb.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "Govt of West Bengal"
        },
        {
                "id": "portal-duare-sarkar",
                "name": "Duare Sarkar (Government at Your Doorstep)",
                "title": {
                        "en": "Duare Sarkar Outreach Portal",
                        "bn": "দুয়ারে সরকার প্রকল্প পোর্টাল",
                        "hi": "द्वारे सरकार पोर्टल"
                },
                "desc": {
                        "en": "Official camp schedules, scheme enrollments (Annapurna Bhandar, Swasthya Sathi, Kanyashree) and status.",
                        "bn": "দুয়ারে সরকার ক্যাম্পের সময়সূচি, স্কিম আবেদন (অন্নপূর্ণা ভাণ্ডার, স্বাস্থ্য সাথী, কন্যাশ্রী) ও স্ট্যাটাস ট্র্যাকিং পোর্টাল।",
                        "hi": "द्वारे सरकार कैंप का समय, योजना आवेदन (अन्नपूर्णा भंडार, स्वास्थ्य साथी) और स्थिति जांच।"
                },
                "url": "https://ds.wb.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "Govt of West Bengal"
        },
        {
                "id": "portal-digilocker",
                "name": "DigiLocker",
                "title": {
                        "en": "Digital Document Wallet of India",
                        "bn": "ডিজিলকার — ডিজিটাল নথি ভাণ্ডার",
                        "hi": "डिजिलॉकर — डिजिटल दस्तावेज़ वॉलेट"
                },
                "desc": {
                        "en": "Legally valid digital repository to issue and verify Aadhaar, Driving Licence, Marksheets & RC.",
                        "bn": "আধার, ড্রাইভিং লাইসেন্স, মার্কশিট ও আরসি রাখার আইনসম্মত ডিজিটাল প্ল্যাটফর্ম।",
                        "hi": "आधार, ड्राइविंग लाइसेंस, मार्कशीट रखने का कानूनी डिजिटल प्लेटफॉर्म।"
                },
                "url": "https://www.digilocker.gov.in/",
                "badge": "🟢 Officially Verified",
                "authority": "Ministry of Electronics & IT"
        }
];

    // =========================================================================
    // 3. WEST BENGAL DISTRICTS & REGIONS
    // =========================================================================
    const DISTRICTS_WB = [
        "All India / Central",
        "West Bengal (State-wide)",
        "Kolkata",
        "North 24 Parganas",
        "South 24 Parganas",
        "Howrah",
        "Hooghly",
        "Purba Medinipur",
        "Paschim Medinipur",
        "Jhargram",
        "Bankura",
        "Purulia",
        "Nadia",
        "Murshidabad",
        "Birbhum",
        "Purba Bardhaman",
        "Paschim Bardhaman",
        "Malda",
        "Uttar Dinajpur",
        "Dakshin Dinajpur",
        "Jalpaiguri",
        "Alipurduar",
        "Cooch Behar",
        "Darjeeling",
        "Kalimpong"
];

    // =========================================================================
    // 4. "I WANT TO..." INTENT ACTIONS
    // =========================================================================
    const IWANT_ACTIONS = [
        {
                "id": "act-aadhaar",
                "icon": "🪪",
                "label": {
                        "en": "Make or Update Aadhaar",
                        "bn": "আধার কার্ড তৈরি / সংশোধন",
                        "hi": "आधार कार्ड बनाएं / अपडेट करें"
                },
                "query": "aadhaar"
        },
        {
                "id": "act-voter",
                "icon": "🗳️",
                "label": {
                        "en": "Apply for Voter ID",
                        "bn": "নতুন ভোটার কার্ড আবেদন",
                        "hi": "नया वोटर कार्ड आवेदन"
                },
                "query": "voter"
        },
        {
                "id": "act-pan",
                "icon": "💳",
                "label": {
                        "en": "Apply for Instant PAN",
                        "bn": "প্যান কার্ড আবেদন",
                        "hi": "पैन कार्ड आवेदन"
                },
                "query": "pan"
        },
        {
                "id": "act-ration",
                "icon": "🍚",
                "label": {
                        "en": "Ration Card Application",
                        "bn": "রেশন কার্ড আবেদন ও ট্রান্সফার",
                        "hi": "राशन कार्ड आवेदन"
                },
                "query": "ration"
        },
        {
                "id": "act-land",
                "icon": "🏠",
                "label": {
                        "en": "Check Land Record (Banglarbhumi)",
                        "bn": "জমির খতিয়ান ও মিউটেশন",
                        "hi": "जमीन का रिकॉर्ड व म्यूटेशन"
                },
                "query": "banglarbhumi"
        },
        {
                "id": "act-swasthya",
                "icon": "🏥",
                "label": {
                        "en": "Swasthya Sathi / Ayushman Bharat",
                        "bn": "স্বাস্থ্য সাথী ও আয়ুষ্মান ভারত",
                        "hi": "स्वास्थ्य साथी / आयुष्मान भारत"
                },
                "query": "health"
        },
        {
                "id": "act-college",
                "icon": "🎓",
                "label": {
                        "en": "College Admission (WBCAP)",
                        "bn": "কলেজ ভর্তি পোর্টাল (WBCAP)",
                        "hi": "कॉलेज प्रवेश (WBCAP)"
                },
                "query": "admission"
        },
        {
                "id": "act-exam",
                "icon": "📝",
                "label": {
                        "en": "Find Competitive Exams",
                        "bn": "সরকারি চাকরির পরীক্ষা ও অ্যাডমিট",
                        "hi": "प्रतियोगी परीक्षाएं व एडमिट"
                },
                "query": "exam"
        },
        {
                "id": "act-job",
                "icon": "💼",
                "label": {
                        "en": "Find Verified Govt Jobs",
                        "bn": "সরকারি চাকরি অনুসন্ধান",
                        "hi": "सरकारी नौकरी खोजें"
                },
                "query": "jobs"
        },
        {
                "id": "act-scholarship",
                "icon": "💰",
                "label": {
                        "en": "Apply for Scholarships (SVMCM/Oasis)",
                        "bn": "স্কলারশিপ আবেদন (SVMCM/Oasis)",
                        "hi": "छात्रवृत्ति आवेदन (SVMCM)"
                },
                "query": "scholarship"
        },
        {
                "id": "act-internship",
                "icon": "🧑‍💻",
                "label": {
                        "en": "Find AICTE / Govt Internship",
                        "bn": "সরকারি ইন্টার্নশিপ খুঁজুন",
                        "hi": "सरकारी इंटर्नशिप खोजें"
                },
                "query": "internship"
        },
        {
                "id": "act-dl",
                "icon": "🚗",
                "label": {
                        "en": "Apply for Driving Licence",
                        "bn": "ড্রাইভিং লাইসেন্স ও লার্নার",
                        "hi": "ड्राइविंग लाइसेंस आवेदन"
                },
                "query": "driving"
        },
        {
                "id": "act-passport",
                "icon": "🛂",
                "label": {
                        "en": "Apply for Passport Online",
                        "bn": "পাসপোর্ট আবেদন ও অ্যাপয়েন্টমেন্ট",
                        "hi": "पासपोर्ट ऑनलाइन आवेदन"
                },
                "query": "passport"
        },
        {
                "id": "act-lpg",
                "icon": "🔥",
                "label": {
                        "en": "Book LPG Cylinder / Subsidy",
                        "bn": "রান্নার গ্যাস বুকিং ও ভর্তুকি",
                        "hi": "रसोई गैस बुकिंग व सब्सिडी"
                },
                "query": "lpg"
        },
        {
                "id": "act-electricity",
                "icon": "⚡",
                "label": {
                        "en": "Electricity Bill & Connection (WBSEDCL)",
                        "bn": "বিদ্যুৎ বিল পেমেন্ট ও নতুন কানেকশন",
                        "hi": "बिजली बिल व नया कनेक्शन"
                },
                "query": "electricity"
        },
        {
                "id": "act-business",
                "icon": "🏢",
                "label": {
                        "en": "Register MSME / Business (Udyam)",
                        "bn": "ব্যবসা ও এমএসএমই রেজিস্টার",
                        "hi": "एमएसएमई / व्यापार पंजीकरण"
                },
                "query": "business"
        },
        {
                "id": "act-gst",
                "icon": "🧾",
                "label": {
                        "en": "Income Tax Filing & GST Portal",
                        "bn": "আইটিআর ও জিএসটি পোর্টাল",
                        "hi": "इनकम टैक्स व जीएसटी पोर्टल"
                },
                "query": "tax"
        },
        {
                "id": "act-legal",
                "icon": "⚖️",
                "label": {
                        "en": "Check Case Status on e-Courts",
                        "bn": "ই-কোর্টে মামলার স্থিতি",
                        "hi": "ई-कोर्ट में केस स्टेटस"
                },
                "query": "legal"
        },
        {
                "id": "act-cyber",
                "icon": "🚨",
                "label": {
                        "en": "Report Cyber Crime (1930 Helpline)",
                        "bn": "সাইবার প্রতারণা রিপোর্ট (১৯৩০)",
                        "hi": "साइबर फ्रॉड रिपोर्ट (1930)"
                },
                "query": "cyber"
        }
];

    // =========================================================================
    // 5. SCAM ALERTS & CYBER ADVISORIES (Helpline 1930)
    // =========================================================================
    const SCAM_ALERTS = [
        {
                "id": "scam-job-fraud",
                "badge": "⚠️ HIGH RISK FRAUD",
                "title": {
                        "en": "Fake Government Job Offers & Placement Fees",
                        "bn": "ভুয়া সরকারি চাকরির নিয়োগ ও প্রলোভন স্ক্যাম",
                        "hi": "फर्जी सरकारी नौकरी और प्लेसमेंट धोखाधड़ी"
                },
                "description": {
                        "en": "Scammers create fake appointment letters for Railway, Postal, WBPSC, or SSC demanding ₹5,000 to ₹50,000 'processing fees'. Real government jobs NEVER demand direct cash transfers.",
                        "bn": "রেলওয়ে, ডাকবিভাগ বা রাজ্য সরকারের ভুয়া নিয়োগপত্র দেখিয়ে 'প্রসেসিং ফি' হিসেবে টাকা চাওয়া হয়। মনে রাখবেন, কোনো সরকারি চাকরি কখনো ঘুষ বা ব্যক্তিগত একাউন্টে টাকায় মেলে না।",
                        "hi": "रेलवे, डाक विभाग या सरकारी नौकरियों के नाम पर पैसे मांगने वाले फर्जी नियुक्ति पत्रों से बचें। सरकारी नौकरियां केवल आधिकारिक परीक्षा से मिलती हैं।"
                },
                "golden_rule": {
                        "en": "Government recruitment applications are processed ONLY through official .gov.in / .nic.in portals with nominal statutory fees.",
                        "bn": "সরকারি চাকরির আবেদন কেবলমাত্র অফিশিয়াল .gov.in পোর্টালে পরীক্ষার ফি দিয়ে হয়।",
                        "hi": "सरकारी भर्ती केवल आधिकारिक .gov.in वेबसाइटों के माध्यम से होती है।"
                }
        },
        {
                "id": "scam-otp-pin",
                "badge": "🚨 CRITICAL WARNING",
                "title": {
                        "en": "Aadhaar OTP, UPI PIN & Banking Fraud",
                        "bn": "আধার ওটিপি, ইউপিআই পিন ও ব্যাংক প্রতারণা",
                        "hi": "आधार ओटीपी, यूपीआई पिन और बैंकिंग धोखाधड़ी"
                },
                "description": {
                        "en": "Fraudsters pose as bank managers, telecom operators, or government officers asking for Aadhaar OTP or asking you to enter your UPI PIN to 'receive' money. UPI PIN is ONLY used to SEND money.",
                        "bn": "ব্যাংক ম্যানেজার বা সরকারি অফিসার সেজে ওটিপি চাওয়া বা টাকা 'পাওয়ার' জন্য ইউপিআই পিন দিতে বলা সম্পূর্ণ প্রতারণা। টাকা পেতে কখনো পিন লাগে না।",
                        "hi": "पैसे प्राप्त करने के लिए कभी भी यूपीआई पिन दर्ज न करें। यूपीआई पिन केवल पैसे भेजने के लिए होता है।"
                },
                "golden_rule": {
                        "en": "NEVER share OTP, CVV, Net Banking Password, or UPI PIN with ANYONE, even if they claim to be government officials.",
                        "bn": "কখনোই কাউকে আপনার ওটিপি, ইউপিআই পিন বা ব্যাংকের পাসওয়ার্ড শেয়ার করবেন না।",
                        "hi": "कभी भी किसी के साथ ओटीपी या यूपीआई पिन साझा न करें।"
                }
        },
        {
                "id": "scam-electricity-sms",
                "badge": "⚠️ PHISHING ALERT",
                "title": {
                        "en": "Fake Electricity Disconnection SMS / APK",
                        "bn": "বিদ্যুৎ লাইন কাটার ভুয়া এসএমএস ও এপিকে স্ক্যাম",
                        "hi": "फर्जी बिजली बिल डिस्कनेक्शन मैसेज और ऐप"
                },
                "description": {
                        "en": "Messages threatening 'Your electricity power will be disconnected at 9:30 PM due to unpaid bill' asking you to call a personal mobile number or download a malicious .apk file to steal bank balances.",
                        "bn": "'আজ রাতে আপনার বিদ্যুৎ কেটে দেওয়া হবে'—এমন ভুয়া এসএমএস পাঠিয়ে কোনো ব্যক্তিগত নম্বরে কল করতে বা কোনো অচেনা অ্যাপ (.apk) ডাউনলোড করতে বলা হলে সাবধান হন।",
                        "hi": "बिजली काटने की धमकी देने वाले फर्जी मैसेज पर दिए नंबर पर कॉल न करें और न ही कोई ऐप डाउनलोड करें।"
                },
                "golden_rule": {
                        "en": "Pay utility bills ONLY through official portals (e.g. wbsedcl.in) or verified banking apps. Electricity boards never use private WhatsApp numbers.",
                        "bn": "বিদ্যুৎ বিল শুধুমাত্র অফিশিয়াল wbsedcl.in বা অনুমোদিত অ্যাপ দিয়ে দিন।",
                        "hi": "बिजली बिल का भुगतान केवल आधिकारिक वेबसाइट या अधिकृत ऐप से करें।"
                }
        },
        {
                "id": "scam-certificate-guarantee",
                "badge": "⚠️ FRAUDULENT SERVICE",
                "title": {
                        "en": "Guaranteed Certificate & Ration Card Agents",
                        "bn": "টাকা দিয়ে দ্রুত সার্টিফিকেট ও রেশন কার্ড বানিয়ে দেওয়ার প্রতারণা",
                        "hi": "गारंटीड प्रमाण पत्र और राशन कार्ड एजेंट धोखाधड़ी"
                },
                "description": {
                        "en": "Unauthorized private operators promising 'Immediate Caste / Domicile Certificate for ₹2,000' generate fake forged PDFs with invalid QR codes that fail government scrutiny.",
                        "bn": "টাকার বিনিময়ে দ্রুত কাস্ট বা ডোমিসাইল সার্টিফিকেট দেওয়ার দাবি করা ভুয়া এজেন্টরা নকল শংসাপত্র দেয়, যা ভেরিফিকেশনে ধরা পড়লে ফৌজদারি অপরাধ হিসেবে গণ্য হয়।",
                        "hi": "पैसे लेकर फर्जी प्रमाण पत्र बनाने वाले अनधिकृत एजेंटों से बचें। यह कानूनी अपराध है।"
                },
                "golden_rule": {
                        "en": "Apply directly on West Bengal e-District (edistrict.wb.gov.in) or visit official Bangla Sahayata Kendras (BSK) for free assistance.",
                        "bn": "সরাসরি edistrict.wb.gov.in বা সরকারি বাংলা সহায়তা কেন্দ্রে (BSK) বিনামূল্যে আবেদন করুন।",
                        "hi": "केवल आधिकारिक ई-डिस्ट्रिक्ट पोर्टल या सरकारी सहायता केंद्र से आवेदन करें।"
                }
        },
        {
                "service_id": "abc-academic-bank-credits",
                "service_name": {
                        "en": "Academic Bank of Credits (ABC & APAAR ID)",
                        "bn": "একাডেমিক ব্যাঙ্ক অফ ক্রেডিট (ABC ও APAAR)",
                        "hi": "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC व अपार)"
                },
                "short_description": {
                        "en": "National educational digital credit repository under National Education Policy (NEP 2020) enabling seamless credit accumulation, transfer, and degree mobility.",
                        "bn": "জাতীয় শিক্ষানীতির অধীনে শিক্ষার্থীদের অ্যাকাডেমিক ক্রেডিট জমা ও এক বিশ্ববিদ্যালয় থেকে অন্যটিতে স্থানান্তরের ডিজিটাল ভল্ট।",
                        "hi": "राष्ट्रीय शिक्षा नीति (NEP 2020) के तहत छात्रों के शैक्षणिक क्रेडिट संचय और स्थानांतरण का डिजिटल रिपॉजिटरी।"
                },
                "category": "college-admission",
                "category_name": {
                        "en": "College & University Admission",
                        "bn": "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি",
                        "hi": "कॉलेज और विश्वविद्यालय प्रवेश"
                },
                "subcategory": "Higher Education MoE",
                "authority": "Ministry of Education / UGC / DigiLocker",
                "government_level": "Central",
                "service_type": "Education",
                "target_users": [
                        "College Student",
                        "University Student",
                        "Youth"
                ],
                "eligibility": {
                        "en": [
                                "All enrolled students in Indian colleges and universities."
                        ],
                        "bn": [
                                "ভারতের সমস্ত কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থী।"
                        ],
                        "hi": [
                                "कॉलेज और विश्वविद्यालय के छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Number",
                                "DigiLocker Account",
                                "College/University Admission ID"
                        ],
                        "bn": [
                                "আধার নম্বর",
                                "ডিজিলকার অ্যাকাউন্ট",
                                "কলেজের রোল/রেজিস্ট্রেশন নম্বর।"
                        ],
                        "hi": [
                                "आधार नंबर और कॉलेज विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Government Initiative.",
                        "bn": "সম্পূর্ণ বিনামূল্যে।",
                        "hi": "निःशुल्क सेवा।"
                },
                "benefits": {
                        "en": [
                                "Permanent 12-digit APAAR ID ('One Nation, One Student ID').",
                                "Automated academic credit transfer across universities."
                        ],
                        "bn": [
                                "স্থায়ী ১২ সংখ্যার APAAR স্টুডেন্ট আইডি।",
                                "বিশ্ববিদ্যালয় পরিবর্তনের সময় গ্রেড ও ক্রেডিট স্থানান্তরের সুবিধা।"
                        ],
                        "hi": [
                                "12 अंकों की अपार आईडी और क्रेडिट ट्रांसफर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official ABC portal (abc.gov.in) or DigiLocker.",
                                "Click 'My Account' > 'Student' and sign in with DigiLocker credentials.",
                                "Select your University/College and create APAAR / ABC ID.",
                                "Share APAAR ID with your college examination cell."
                        ],
                        "bn": [
                                "abc.gov.in বা DigiLocker-এ গিয়ে 'Student' অপশনে লগইন করুন এবং কলেজ নির্বাচন করে APAAR আইডি তৈরি করুন।"
                        ],
                        "hi": [
                                "abc.gov.in पर जाएं और डिजिलॉकर के माध्यम से अपार आईडी बनाएं।"
                        ]
                },
                "official_homepage": "https://www.abc.gov.in/",
                "official_apply_url": "https://www.abc.gov.in/",
                "official_status_url": "https://www.abc.gov.in/",
                "official_helpline": "1800-111-555",
                "official_email": "abc.support@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.abc.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "abc id",
                        "apaar id",
                        "academic bank of credits",
                        "nep 2020",
                        "student credit",
                        "এবিসি আইডি",
                        "আপার আইডি",
                        "एबीसी आईडी",
                        "अपार आईडी"
                ],
                "scam_warning": {
                        "en": "APAAR/ABC ID creation is 100% free on DigiLocker. Never pay fees for student ID generation.",
                        "bn": "APAAR আইডি সম্পূর্ণ বিনামূল্যে তৈরি হয়। কোনো টাকা দেবেন না।",
                        "hi": "अपार आईडी बनाना पूरी तरह मुफ्त है।"
                }
        },
        {
                "service_id": "nta-jee-neet-cuet-exams",
                "service_name": {
                        "en": "NTA National Entrance Examinations (JEE, NEET, CUET)",
                        "bn": "এনটিএ জাতীয় প্রবেশিকা পরীক্ষা পোর্টাল (JEE, NEET, CUET)",
                        "hi": "एनटीए राष्ट्रीय प्रवेश परीक्षा पोर्टल (JEE, NEET, CUET)"
                },
                "short_description": {
                        "en": "Official National Testing Agency (NTA) portal for online applications, city intimation slips, admit cards, answer keys, and scorecards for JEE Main, NEET UG, and CUET.",
                        "bn": "মেডিকেল (NEET), ইঞ্জিনিয়ারিং (JEE Main) এবং বিশ্ববিদ্যালয় ভর্তির (CUET) প্রবেশিকা পরীক্ষার আবেদন ও অ্যাডমিট কার্ডের অফিসিয়াল পোর্টাল।",
                        "hi": "जेईई मेन, नीट और सीयूईटी प्रवेश परीक्षाओं के ऑनलाइन आवेदन और परिणाम का आधिकारिक एनटीए पोर्टल।"
                },
                "category": "entrance-exams",
                "category_name": {
                        "en": "Entrance Examinations (JEE/NEET)",
                        "bn": "প্রবেশিকা পরীক্ষা (JEE/NEET)",
                        "hi": "प्रवेश परीक्षाएं (JEE/NEET)"
                },
                "subcategory": "NTA MoE",
                "authority": "National Testing Agency (NTA), Ministry of Education, Govt of India",
                "government_level": "Central",
                "service_type": "Education",
                "target_users": [
                        "Class 12 Student",
                        "Medical Aspirant",
                        "Engineering Aspirant"
                ],
                "eligibility": {
                        "en": [
                                "Students appearing for or passed Class 12 / Higher Secondary examination."
                        ],
                        "bn": [
                                "দ্বাদশ শ্রেণী উত্তীর্ণ বা পরীক্ষার্থী ছাত্র-ছাত্রী।"
                        ],
                        "hi": [
                                "12वीं कक्षा के छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Passport photograph & Signature scan",
                                "Class 10 & 12 Marksheets/Certificates",
                                "Category Certificate (SC/ST/OBC-NCL/EWS/PwD if applicable)",
                                "Aadhaar Card"
                        ],
                        "bn": [
                                "ছবি ও সই স্ক্যান",
                                "মাধ্যমিক ও উচ্চ মাধ্যমিক মার্কশিট",
                                "কাস্ট সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)",
                                "আধার কার্ড।"
                        ],
                        "hi": [
                                "फोटो, हस्ताक्षर, मार्कशीट, जाति प्रमाण पत्र और आधार।"
                        ]
                },
                "application_fee": {
                        "en": "Standard NTA exam fees vary by course and category (e.g. ₹1,000 for Gen, ₹500 for reserved).",
                        "bn": "পরীক্ষা ও ক্যাটাগরি অনুযায়ী নির্ধারিত সরকারি ফি।",
                        "hi": "श्रेणी अनुसार निर्धारित परीक्षा शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Standardized nationwide entrance to AIIMS, IITs, NITs, and Central Universities.",
                                "Completely transparent computer-based testing (CBT)."
                        ],
                        "bn": [
                                "সারা ভারতের সেরা মেডিকেল, ইঞ্জিনিয়ারিং ও সেন্ট্রাল ইউনিভার্সিটিতে ভর্তির সুযোগ।"
                        ],
                        "hi": [
                                "आईआईटी, एम्स और केंद्रीय विश्वविद्यालयों में प्रवेश।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official NTA portal (nta.ac.in) or examination specific portal (e.g. jeemain.nta.nic.in, neet.ntaonline.in).",
                                "Click 'New Registration' and fill personal and academic details.",
                                "Upload scanned photograph, signature, and category certificates in specified format.",
                                "Pay application fee online through Payment Gateway and print Confirmation Page."
                        ],
                        "bn": [
                                "অফিসিয়াল nta.ac.in পোর্টালে যান ও নির্দিষ্ট পরীক্ষার লিংকে রেজিস্ট্রেশন সম্পন্ন করুন।"
                        ],
                        "hi": [
                                "nta.ac.in पर जाएं और परीक्षा के लिए ऑनलाइन आवेदन करें।"
                        ]
                },
                "official_homepage": "https://nta.ac.in/",
                "official_apply_url": "https://nta.ac.in/",
                "official_status_url": "https://nta.ac.in/",
                "official_helpline": "011-40759000 / 011-69227700",
                "official_email": "genadmin@nta.ac.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://nta.ac.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "nta",
                        "jee main",
                        "neet ug",
                        "cuet",
                        "nta admit card",
                        "entrance exam",
                        "এনটিএ",
                        "জেইই",
                        "নিট",
                        "সিইউইটি",
                        "एनटीए",
                        "जेईई",
                        "नीट"
                ],
                "scam_warning": {
                        "en": "Always ensure you are on official 'nta.ac.in' or 'nta.nic.in' domains. Beware of duplicate phishing portals offering 'guaranteed seat booking'.",
                        "bn": "সর্বদা nta.ac.in বা nta.nic.in ডোমেইন নিশ্চিত করুন। ভুয়া অ্যাডমিশন লিংকে টাকা দেবেন না।",
                        "hi": "केवल आधिकारिक nta.ac.in पोर्टल का उपयोग करें।"
                }
        },
        {
                "service_id": "mca21-company-llp-filing",
                "service_name": {
                        "en": "MCA21 Corporate & Company Registration",
                        "bn": "এমসিএ২১ কোম্পানি ও এলএলপি রেজিস্ট্রেশন",
                        "hi": "एमसीए21 कंपनी व एलएलपी पंजीकरण"
                },
                "short_description": {
                        "en": "Ministry of Corporate Affairs portal for online incorporation of Private Limited Companies, One Person Companies (OPC), LLPs, DIN allocation, and statutory annual filings.",
                        "bn": "প্রাইভেট লিমিটেড কোম্পানি, ওয়ান পার্সন কোম্পানি, এলএলপি গঠন, ডিরেক্টর আইডেন্টিফিকেশন নম্বর (DIN) ও বার্ষিক রিটার্ন জমা দেওয়ার সরকারি পোর্টাল।",
                        "hi": "कंपनी और एलएलपी निगमन, डीआईएन आवंटन और वार्षिक फाइलिंग का कॉर्पोरेट कार्य मंत्रालय का आधिकारिक पोर्टल।"
                },
                "category": "business-startup",
                "category_name": {
                        "en": "Business & MSME (Udyam Registration)",
                        "bn": "ব্যবসা ও এমএসএমই (উদ্যম)",
                        "hi": "व्यवसाय और एमएसएमई (उद्यम)"
                },
                "subcategory": "MCA Corporate",
                "authority": "Ministry of Corporate Affairs (MCA), Government of India",
                "government_level": "Central",
                "service_type": "Business",
                "target_users": [
                        "Entrepreneur",
                        "Startup Founder",
                        "Chartered Accountant",
                        "Company Secretary"
                ],
                "eligibility": {
                        "en": [
                                "Any individual or enterprise seeking legal company incorporation in India."
                        ],
                        "bn": [
                                "ভারতে নতুন কোম্পানি বা এলএলপি খুলতে ইচ্ছুক যেকোনো নাগরিক।"
                        ],
                        "hi": [
                                "भारत में कंपनी निगमन के इच्छुक उद्यमी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Digital Signature Certificate (DSC)",
                                "PAN & Aadhaar of all Directors",
                                "Proof of Registered Office (Electricity Bill & NOC)",
                                "Memorandum & Articles of Association (MOA/AOA)"
                        ],
                        "bn": [
                                "ডিজিটাল সিগনেচার সার্টিফিকেট (DSC)",
                                "ডিরেক্টরদের প্যান ও আধার",
                                "অফিসের ঠিকানার প্রমাণ ও বিদ্যুৎ বিল।"
                        ],
                        "hi": [
                                "डिजिटल सिग्नेचर, पैन, आधार और ऑफिस पता प्रमाण।"
                        ]
                },
                "application_fee": {
                        "en": "Statutory MCA SPICe+ filing fee & Stamp duty (zero incorporation fee for small capital companies).",
                        "bn": "সরকারি নির্ধারিত স্ট্যাম্প ডিউটি ও ফাইলিং ফি।",
                        "hi": "निर्धारित सरकारी शुल्क व स्टाम्प ड्यूटी।"
                },
                "benefits": {
                        "en": [
                                "Single-window SPICe+ form integrating Company Name, PAN, TAN, EPFO, ESIC, and Bank Account.",
                                "Limited liability protection and equity fundraising capability."
                        ],
                        "bn": [
                                "একটিমাত্র SPICe+ ফর্মের মাধ্যমে কোম্পানি, প্যান, ট্যান ও ব্যাংক অ্যাকাউন্ট একযোগে চালু।"
                        ],
                        "hi": [
                                "एकल खिड़की एसपीआईसीई+ निगमन सुविधा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official MCA portal (mca.gov.in).",
                                "Log in to MCA V3 portal with Director/Professional credentials.",
                                "Submit SPICe+ Part A for Name Reservation.",
                                "Complete SPICe+ Part B, AGILE-PRO-S, upload DSC, and pay statutory stamp duty."
                        ],
                        "bn": [
                                "mca.gov.in পোর্টালে লগইন করে SPICe+ ফর্মের মাধ্যমে কোম্পানি রেজিস্টার করুন।"
                        ],
                        "hi": [
                                "mca.gov.in पर जाएं और एसपीआईसीई+ फॉर्म जमा करें।"
                        ]
                },
                "official_homepage": "https://www.mca.gov.in/",
                "official_apply_url": "https://www.mca.gov.in/content/mca/global/en/home.html",
                "official_status_url": "https://www.mca.gov.in/mcafoportal/trackSRN.do",
                "official_helpline": "0124-4832500 (MCA Helpdesk)",
                "official_email": "appl.helpdesk@mca.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://mca.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "mca",
                        "company registration",
                        "pvt ltd",
                        "llp registration",
                        "mca21",
                        "spice+",
                        "কোম্পানি রেজিস্ট্রেশন",
                        "এমসিএ",
                        "कंपनी पंजीकरण"
                ],
                "scam_warning": {
                        "en": "Always file on official mca.gov.in. Verify all authorized signatories on the portal.",
                        "bn": "সর্বদা সরকারি mca.gov.in পোর্টাল ব্যবহার করুন।",
                        "hi": "केवल आधिकारिक mca.gov.in पोर्टल का उपयोग करें।"
                }
        },
        {
                "service_id": "startup-india-hub",
                "service_name": {
                        "en": "Startup India Portal & DPIIT Recognition",
                        "bn": "স্টার্টআপ ইন্ডিয়া পোর্টাল ও ডিপিআইআইটি স্বীকৃতি",
                        "hi": "स्टार्टअप इंडिया पोर्टल व डीपीआईआईटी मान्यता"
                },
                "short_description": {
                        "en": "Flagship Government of India initiative empowering startups with DPIIT tax exemption (Section 80-IAC), Angel tax relief, fast-track patent filing, and government seed funds.",
                        "bn": "ভারত সরকারের স্টার্টআপ প্রকল্প যার মাধ্যমে কর ছাড়, পেটেন্ট সুবিধা ও সরকারি অনুদানের জন্য ডিপিআইআইটি শংসাপত্র পাওয়া যায়।",
                        "hi": "स्टार्टअप इंडिया पोर्टल - कर छूट, पेटेंट सहायता और सरकारी सीड फंड के लिए डीपीआईआईटी मान्यता।"
                },
                "category": "business-startup",
                "category_name": {
                        "en": "Business & MSME (Udyam Registration)",
                        "bn": "ব্যবসা ও এমএসএমই (উদ্যম)",
                        "hi": "व्यवसाय और एमएसएमई (उद्यम)"
                },
                "subcategory": "DPIIT Commerce",
                "authority": "Department for Promotion of Industry and Internal Trade (DPIIT), Govt of India",
                "government_level": "Central",
                "service_type": "Business",
                "target_users": [
                        "Startup Founder",
                        "Tech Innovator",
                        "Entrepreneur"
                ],
                "eligibility": {
                        "en": [
                                "Private Limited / LLP / Partnership incorporated less than 10 years ago with turnover under ₹100 Crore."
                        ],
                        "bn": [
                                "১০ বছরের মধ্যে গঠিত প্রাইভেট লিমিটেড বা এলএলপি যার টার্নওভার ১০০ কোটির কম।"
                        ],
                        "hi": [
                                "10 वर्ष के भीतर निगमित स्टार्टअप।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Certificate of Incorporation / Registration",
                                "Brief write-up on innovation / scalability",
                                "Pitch deck / Website link"
                        ],
                        "bn": [
                                "কোম্পানি সার্টিফিকেট",
                                "ইনোভেশন ও ব্যবসার বিবরণী।"
                        ],
                        "hi": [
                                "निगमन प्रमाण पत्र और नवाचार विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Government Recognition.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি স্বীকৃতি।",
                        "hi": "निःशुल्क सरकारी मान्यता।"
                },
                "benefits": {
                        "en": [
                                "3-year income tax exemption under 80-IAC.",
                                "80% rebate on patent filing fees and self-certification under 6 labour laws."
                        ],
                        "bn": [
                                "৩ বছরের আয়কর ছাড় ও পেটেন্ট ফিতে ৮০% সরকারি ছাড়।"
                        ],
                        "hi": [
                                "3 वर्ष की आयकर छूट और पेटेंट शुल्क में 80% छूट।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official Startup India portal (startupindia.gov.in).",
                                "Click 'Register' and create your startup profile.",
                                "Apply for DPIIT Recognition with company incorporation certificate and business innovation note.",
                                "Download official DPIIT Recognition Certificate once approved."
                        ],
                        "bn": [
                                "startupindia.gov.in পোর্টালে প্রোফাইল খুলে DPIIT স্বীকৃতির জন্য আবেদন করুন।"
                        ],
                        "hi": [
                                "startupindia.gov.in पर जाएं और डीपीआईआईटी मान्यता के लिए आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.startupindia.gov.in/",
                "official_apply_url": "https://www.startupindia.gov.in/",
                "official_status_url": "https://www.startupindia.gov.in/",
                "official_helpline": "1800 115 565 (Toll Free)",
                "official_email": "dipp-startups@nic.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://startupindia.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "startup india",
                        "dpiit",
                        "startup recognition",
                        "seed fund",
                        "angel tax",
                        "স্টার্টআপ ইন্ডিয়া",
                        "স্টার্টআপ",
                        "स्टार्टअप इंडिया"
                ],
                "scam_warning": {
                        "en": "DPIIT startup recognition carries zero government fee. Do not pay agents for certificate issuance.",
                        "bn": "ডিপিআইআইটি স্বীকৃতি সম্পূর্ণ বিনামূল্যে পাওয়া যায়।",
                        "hi": "डीपीआईआईटी मान्यता पूरी तरह से निःशुल्क है।"
                }
        },
        {
                "service_id": "wb-registration-deeds-stamps",
                "service_name": {
                        "en": "WB Registration & e-Deed Stamp Revenue",
                        "bn": "পশ্চিমবঙ্গ দলিল রেজিস্ট্রেশন ও স্ট্যাম্প রেভিনিউ",
                        "hi": "पश्चिम बंगाल विलेख पंजीकरण व स्टाम्प राजस्व"
                },
                "short_description": {
                        "en": "Official portal of Directorate of Registration & Stamp Revenue, West Bengal for property market valuation, e-assessment, e-payment of stamp duty, and online deed registration booking.",
                        "bn": "জমির সরকারি বাজারমূল্য যাচাই, স্ট্যাম্প ডিউটি ই-পেমেন্ট ও দলিল রেজিস্ট্রেশনের জন্য সরকারি পোর্টাল।",
                        "hi": "पश्चिम बंगाल में संपत्ति बाजार मूल्य निर्धारण, स्टाम्प ड्यूटी भुगतान और रजिस्ट्री बुकिंग का आधिकारिक पोर्टल।"
                },
                "category": "land-property",
                "category_name": {
                        "en": "Land & Property (Banglarbhumi)",
                        "bn": "জমি ও সম্পত্তি (বাংলারভূমি)",
                        "hi": "भूमि और संपत्ति (बांगलারভূমি)"
                },
                "subcategory": "Registration Dept WB",
                "authority": "Directorate of Registration and Stamp Revenue, Finance Dept, Govt of West Bengal",
                "government_level": "State",
                "service_type": "Property",
                "target_users": [
                        "Property Buyer",
                        "Property Seller",
                        "Citizen"
                ],
                "eligibility": {
                        "en": [
                                "All citizens executing property sale, gift, partition, or power of attorney deeds in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গে জমি বা বাড়ি কেনাবেচা ও দলিলকারী সমস্ত নাগরিক।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल में संपत्ति रजिस्ट्री कराने वाले नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Draft Deed document",
                                "PAN & Aadhaar of Buyer & Seller",
                                "Banglarbhumi Khatian / Porcha Copy",
                                "Previous link deeds & tax receipts"
                        ],
                        "bn": [
                                "দলিলের খসড়া",
                                "ক্রেতা-বিক্রেতার প্যান ও আধার",
                                "বাংলারভূমি খতিয়ান/পর্চা",
                                "পূর্ববর্তী লিংক দলিল।"
                        ],
                        "hi": [
                                "विलेख मसौदा, पैन, आधार और खतियान पर्चा।"
                        ]
                },
                "application_fee": {
                        "en": "State statutory stamp duty and registration fees as per market valuation.",
                        "bn": "সরকারি বাজারদর অনুযায়ী নির্ধারিত স্ট্যাম্প ডিউটি ও রেজিস্ট্রেশন ফি।",
                        "hi": "सरकारी नियमानुसार स्टाम्প ड्यूटी व रजिस्ट्री शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Instant online market valuation of plot/flat.",
                                "e-Deed submission and transparent slot booking at Sub-Registrar Office."
                        ],
                        "bn": [
                                "জমির সরকারি ভ্যালুয়েশন ও অনলাইনে অগ্রিম স্লট বুকিংয়ের সুবিধা।"
                        ],
                        "hi": [
                                "ऑनलाइन संपत्ति मूल्यांकन और पारदर्शी रजिस्ट्री।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (wbregistration.gov.in).",
                                "Calculate Market Valuation by entering Mouza, JL Number, and Khatian/Plot details.",
                                "Fill e-Assessment Form and pay Stamp Duty & Registration Fee online through GRIPS.",
                                "Book appointment slot for physical biometric presentation at Sub-Registrar Office."
                        ],
                        "bn": [
                                "wbregistration.gov.in পোর্টালে গিয়ে ভ্যালুয়েশন বের করুন, GRIPS-এ ফি জমা দিন ও অ্যাপয়েন্টমেন্ট বুক করুন।"
                        ],
                        "hi": [
                                "wbregistration.gov.in पर मूल्यांकन जांचें और रजिस्ट्री का समय बुक करें।"
                        ]
                },
                "official_homepage": "https://wbregistration.gov.in/",
                "official_apply_url": "https://wbregistration.gov.in/",
                "official_status_url": "https://wbregistration.gov.in/",
                "official_helpline": "033-2223-0101 (Helpline)",
                "official_email": "support.igrwbr@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online + Sub-Registrar Office",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wbregistration.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbregistration",
                        "deed registration",
                        "stamp duty",
                        "land valuation",
                        "grips payment",
                        "দলিল রেজিস্ট্রেশন",
                        "স্ট্যাম্প ডিউটি",
                        "জমির ভ্যালুয়েশন",
                        "विलेख पंजीकरण",
                        "स्टाम्प ड्यूटी"
                ],
                "scam_warning": {
                        "en": "Always calculate valuation on official 'wbregistration.gov.in'. Pay stamp duty exclusively via official GRIPS portal.",
                        "bn": "সর্বদা সরকারি wbregistration.gov.in পোর্টাল ও GRIPS-এর মাধ্যমে স্ট্যাম্প ডিউটি দিন।",
                        "hi": "केवल आधिकारिक पोर्टल से स्टाम्प ड्यूटी का भुगतान करें।"
                }
        },
        {
                "service_id": "wb-silpasathi-single-window",
                "service_name": {
                        "en": "SilpaSathi Single Window Business Portal",
                        "bn": "শিল্পসাথী সিঙ্গল উইন্ডো ব্যবসা ও ট্রেড লাইসেন্স",
                        "hi": "शिल्पसाथी सिंगल विंडो व्यापार व ट्रेड लाइसेंस"
                },
                "short_description": {
                        "en": "Government of West Bengal unified business portal offering online issuance of Trade Licences, Fire Safety clearances, Environmental NOCs, and Factory registrations across all municipalities and panchayats.",
                        "bn": "পশ্চিমবঙ্গ সরকারের একক পোর্টাল যেখান থেকে ট্রেড লাইসেন্স, ফায়ার এনওসি, কারখানা ও পরিবেশ ছাড়পত্র অনলাইনে পাওয়া যায়।",
                        "hi": "पश्चिम बंगाल सरकार का सिंगल विंडो पोर्टल जहां से ट्रेड लाइसेंस, फायर एनओसी और फैक्ट्री पंजीकरण ऑनलाइन मिलता है।"
                },
                "category": "business-startup",
                "category_name": {
                        "en": "Business & MSME (Udyam Registration)",
                        "bn": "ব্যবসা ও এমএসএমই (উদ্যম)",
                        "hi": "व्यवसाय और एमएसएमई (उद्यम)"
                },
                "subcategory": "MSME Dept WB",
                "authority": "Micro, Small & Medium Enterprises and Textiles Department, Govt of West Bengal",
                "government_level": "State",
                "service_type": "Business",
                "target_users": [
                        "Shopkeeper",
                        "MSME Entrepreneur",
                        "Trader",
                        "Factory Owner"
                ],
                "eligibility": {
                        "en": [
                                "All enterprises, commercial establishments, and shops operating in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত দোকান, ব্যবসা ও শিল্প প্রতিষ্ঠান।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल में व्यवसाय और दुकानें।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Trade Premises Proof (Rent Agreement / Property Tax Receipt)",
                                "Identity Proof (Aadhaar / Voter Card)",
                                "PAN of Proprietor/Enterprise"
                        ],
                        "bn": [
                                "দোকান/ব্যবসার ঠিকানার প্রমাণ (ট্যাক্স রসিদ / ভাড়া চুক্তি)",
                                "আধার ও প্যান কার্ড।"
                        ],
                        "hi": [
                                "दुकान का पता प्रमाण, पैन और आधार।"
                        ]
                },
                "application_fee": {
                        "en": "Prescribed municipal/panchayat fees (e.g. ₹500 - ₹2,500 based on trade category).",
                        "bn": "পৌরসভা বা পঞ্চায়েতের নির্ধারিত সরকারি ফি।",
                        "hi": "नगरपालिका/पंचायत का निर्धारित शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Instant digitally signed Trade Licence for rural and urban areas.",
                                "Track application status with legal deemed approval timelines."
                        ],
                        "bn": [
                                "ডিজিটাল স্বাক্ষরিত তাৎক্ষণিক ট্রেড লাইসেন্স।",
                                "দালাল ছাড়া সরাসরি অনলাইনে ব্যবসা চালু করার ছাড়পত্র।"
                        ],
                        "hi": [
                                "तत्काल डिजिटल ट्रेड लाइसेंस।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official SilpaSathi portal (silpasathi.wb.gov.in).",
                                "Register as an Investor / Business Owner with Mobile and Email OTP.",
                                "Select 'Apply for Trade Licence' or required clearance.",
                                "Upload documents, pay fee online, and download valid digital certificate."
                        ],
                        "bn": [
                                "silpasathi.wb.gov.in পোর্টালে যান, তথ্য দিয়ে ফর্ম পূরণ করুন ও অনলাইনে ফি দিয়ে ডিজিটাল ট্রেড লাইসেন্স ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "silpasathi.wb.gov.in पर जाएं और ट्रेड लाइसेंस प्राप्त करें।"
                        ]
                },
                "official_homepage": "https://silpasathi.wb.gov.in/",
                "official_apply_url": "https://silpasathi.wb.gov.in/",
                "official_status_url": "https://silpasathi.wb.gov.in/",
                "official_helpline": "033-2214-0000 / 033-2287-2101",
                "official_email": "support-silpasathi@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://silpasathi.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "silpasathi",
                        "trade licence",
                        "wb trade license",
                        "panchayat trade license",
                        "municipality trade license",
                        "শিল্পসাথী",
                        "ট্রেড লাইসেন্স",
                        "ট্রেড লাইসেন্স আবেদন",
                        "शिल्पसाथी",
                        "ट्रेड लाइसेंस"
                ],
                "scam_warning": {
                        "en": "Always apply online via silpasathi.wb.gov.in. Never pay unauthorized intermediaries.",
                        "bn": "সর্বদা সরকারি silpasathi.wb.gov.in থেকে আবেদন করুন।",
                        "hi": "केवल आधिकारिक silpasathi.wb.gov.in पोर्टल का उपयोग करें।"
                }
        }
];

    // =========================================================================
    // 6. MASTER VERIFIED SERVICES DIRECTORY (94+ Services)
    // =========================================================================
    const SERVICES = [
        {
                "service_id": "wb-annapurna-bhandar-scheme",
                "service_name": {
                        "en": "Annapurna Bhandar Scheme (West Bengal)",
                        "bn": "অন্নপূর্ণা ভাণ্ডার প্রকল্প (পশ্চিমবঙ্গ সরকার)",
                        "hi": "अन्नपूर्णा भंडार योजना (पश्चिम बंगाल सरकार)"
                },
                "short_description": {
                        "en": "West Bengal Government flagship women empowerment financial support scheme providing ₹1,000 per month for General category and ₹1,200 per month for SC/ST women directly via DBT.",
                        "bn": "পশ্চিমবঙ্গ সরকারের অন্যতম জনপ্রিয় নারী ক্ষমতায়ন প্রকল্প: সাধারণ শ্রেণির মহিলাদের প্রতি মাসে ₹১,০০০ এবং তফশিলি জাতি/উপজাতির মহিলাদের প্রতি মাসে ₹১,২০০ সরাসরি ব্যাংক অ্যাকাউন্টে আর্থিক সহায়তা।",
                        "hi": "पश्चिम बंगाल सरकार की महिला सशक्तिकरण योजना: सामान्य वर्ग की महिलाओं को ₹1,000/माह और एससी/एसटी महिलाओं को ₹1,200/माह।"
                },
                "category": "welfare-schemes",
                "category_name": {
                        "en": "Government Welfare Schemes",
                        "bn": "নারী ও সামাজিক কল্যাণ প্রকল্প",
                        "hi": "महिला व कल्याण योजनाएं"
                },
                "subcategory": "Women Direct Support",
                "authority": "Department of Women & Child Development and Social Welfare, Govt of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "Woman"
                ],
                "eligibility": {
                        "en": [
                                "Female resident of West Bengal aged between 25 and 60 years.",
                                "Not receiving regular government salary/pension."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা ২৫ থেকে ৬০ বছর বয়সী নারী।",
                                "সরকারি কর্মচারী বা স্থায়ী সরকারি পেনশন প্রাপক নন এমন যে কেউ।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल की 25 से 60 वर्ष आयु की महिलाएं।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Swasthya Sathi Card (Mandatory)",
                                "Aadhaar Card",
                                "SC/ST Certificate (if applying for ₹1,200 higher benefit)",
                                "Bank Passbook (Single account linked with Aadhaar)",
                                "Passport Size Photograph."
                        ],
                        "bn": [
                                "স্বাস্থ্য সাথী কার্ড (বাধ্যতামূলক)",
                                "আধার কার্ড",
                                "এসসি/এসটি শংসাপত্র (উচ্চতর সহায়তার জন্য)",
                                "আধার সংযুক্ত নিজস্ব ব্যাংক পাসবুক",
                                "পাসপোর্ট সাইজ ছবি।"
                        ],
                        "hi": [
                                "स्वास्थ्य साथी कार्ड",
                                "आधार कार्ड",
                                "जाति प्रमाण पत्र",
                                "बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Forms available free at Duare Sarkar camps.",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন। দুয়ারে সরকার ক্যাম্প থেকে বিনামূল্যে ফর্ম দেওয়া হয়।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct monthly financial assistance of ₹1,000 (General) or ₹1,200 (SC/ST) directly credited to the beneficiary bank account."
                        ],
                        "bn": [
                                "প্রতি মাসে সরাসরি ব্যাংক অ্যাকাউন্টে ₹১,০০০ (সাধারণ) বা ₹১,২০০ (এসসি/এসটি) জমা।"
                        ],
                        "hi": [
                                "प्रति माह ₹1,000 या ₹1,200 सीधे बैंक खाते में।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Collect free application form during official 'Duare Sarkar' camps.",
                                "Fill applicant details and attach photocopies of Swasthya Sathi, Aadhaar, and Bank Passbook.",
                                "Submit form at camp counter and obtain physical counter-signed receipt.",
                                "Track application and payment status online at socialsecurity.wb.gov.in using Aadhaar/Mobile number."
                        ],
                        "bn": [
                                "'দুয়ারে সরকার' ক্যাম্প থেকে অন্নপূর্ণা ভাণ্ডারের ফর্ম সংগ্রহ করুন।",
                                "ফর্ম পূরণ করে স্বাস্থ্যসাথী, আধার, কাস্ট সার্টিফিকেট ও ব্যাংক বইয়ের জেরক্স জুড়ে জমা দিন।",
                                "কাউন্টার থেকে সিলযুক্ত জমা রসিদ সংগ্রহ করুন।",
                                "socialsecurity.wb.gov.in পোর্টালে আধার নম্বর বা মোবাইল নম্বর দিয়ে আবেদনের স্থিতি চেক করুন।"
                        ],
                        "hi": [
                                "दुआरे सरकार शिविर से फॉर्म प्राप्त कर जमा करें।",
                                "रसीद सुरक्षित रखें।",
                                "socialsecurity.wb.gov.in पर आवेदन की स्थिति जांचें।"
                        ]
                },
                "official_homepage": "https://socialsecurity.wb.gov.in/",
                "official_apply_url": "https://socialsecurity.wb.gov.in/",
                "official_status_url": "https://socialsecurity.wb.gov.in/track-applicant-status",
                "official_helpline": "033 2334 1563 / District Social Welfare Helpdesk",
                "official_email": "wcd@wb.gov.in",
                "state": "West Bengal",
                "availability": "Duare Sarkar Camps + BDO/Municipality",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://socialsecurity.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "annapurna bhandar",
                        "annapurna vandar",
                        "annapurna bhander",
                        "annapurna scheme",
                        "lakshmir bhandar",
                        "laxmi bhandar",
                        "wb women scheme",
                        "annapurna bhandar status",
                        "lakshmir bhandar status",
                        "duare sarkar annapurna bhandar",
                        "duare sarkar lakshmi bhandar",
                        "social security wb",
                        "অন্নপূর্ণা ভাণ্ডার",
                        "অন্নপূর্ণা ভান্ডার",
                        "লক্ষ্মীর ভাণ্ডার",
                        "লক্ষ্মী ভাণ্ডার",
                        "মহিলা প্রকল্প",
                        "অন্নপূর্ণা ভাণ্ডার স্ট্যাটাস",
                        "দুয়ারে সরকার",
                        "अन्नपूर्णा भंडार",
                        "लक्ष्मी भंडार",
                        "पश्चिम बंगाल महिला योजना",
                        "अन्नपूर्णा भंडार स्टेटस",
                        "लक्ष्मी भंडार स्टेटस"
                ],
                "scam_warning": {
                        "en": "Annapurna Bhandar forms are strictly distributed FREE at Government Duare Sarkar camps. Never buy forms from private shops.",
                        "bn": "অন্নপূর্ণা ভাণ্ডারের ফর্ম দুয়ারে সরকার ক্যাম্পে বিনামূল্যে পাওয়া যায়। কোনো দোকান থেকে চড়া দামে ফর্ম কিনবেন না।",
                        "hi": "अन्नपूर्णा भंडार फॉर्म सरकारी शिविरों में निःशुल्क मिलता है। पैसे देकर न खरीदें।"
                }
        },
        {
                "service_id": "wb-yuva-shakti-scheme",
                "service_name": {
                        "en": "Yuva Shakti Scheme & Portal (West Bengal)",
                        "bn": "যুবশক্তি প্রকল্প ও এমপ্লয়মেন্ট পোর্টাল (পশ্চিমবঙ্গ সরকার)",
                        "hi": "युवा शक्ति योजना व पोर्टल (पश्चिम बंगाल सरकार)"
                },
                "short_description": {
                        "en": "West Bengal Government flagship youth empowerment initiative providing ₹1,500 monthly financial assistance, career skill training, and direct job placement for registered jobseekers.",
                        "bn": "পশ্চিমবঙ্গ সরকারের অন্যতম জনপ্রিয় যুব সহায়তা প্রকল্প: এমপ্লয়মেন্ট ব্যাংকে নথিবদ্ধ কর্মপ্রার্থীদের প্রতি মাসে ₹১,৫০০ আর্থিক অনুদান, কারিগরি প্রশিক্ষণ ও চাকরির সুযোগ।",
                        "hi": "पश्चिम बंगाल सरकार की युवा कल्याण योजना: पंजीकृत युवाओं को ₹1,500 मासिक वित्तीय सहायता, कौशल प्रशिक्षण और रोजगार सहायता।"
                },
                "category": "welfare-schemes",
                "category_name": {
                        "en": "Youth & Welfare Schemes",
                        "bn": "যুব ও সামাজিক কল্যাণ প্রকল্প",
                        "hi": "युवा व कल्याण योजनाएं"
                },
                "subcategory": "Employment Bank & Youth Support",
                "authority": "Labour Department & Employment Bank, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "Youth",
                        "Jobseeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Unemployed youth resident of West Bengal aged between 18 and 45 years.",
                                "Enrolled on Employment Bank portal (employmentbankwb.gov.in).",
                                "Minimum educational qualification: Passed 8th standard or higher.",
                                "Only one member per family is eligible for financial allowance."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা ১৮ থেকে ৪৫ বছর বয়সী কর্মপ্রার্থী যুব-যুবতী।",
                                "এমপ্লয়মেন্ট ব্যাংক পোর্টালে (employmentbankwb.gov.in) নথিবদ্ধ থাকতে হবে।",
                                "ন্যূনতম অষ্টম শ্রেণী বা তদূর্ধ্ব পরীক্ষায় উত্তীর্ণ।",
                                "পরিবারের একজন সদস্য এই আর্থিক সহায়তা পাবেন।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के 18 से 45 वर्ष आयु के बेरोजगार युवा।",
                                "एंप्लॉयमेंट बैंक पोर्टल पर पंजीकृत।",
                                "न्यूनतम 8वीं पास या उच्चतर।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card / Voter ID",
                                "Employment Bank Registration ID / Acknowledgement",
                                "Madhyamik / 8th Pass Certificate & Marksheet",
                                "Caste Certificate (if SC/ST/OBC)",
                                "Bank Passbook (Single account linked with Aadhaar)",
                                "Passport Size Photograph"
                        ],
                        "bn": [
                                "আধার কার্ড / ভোটার কার্ড",
                                "এমপ্লয়মেন্ট ব্যাংক এনরোলমেন্ট রসিদ",
                                "মাধ্যমিক বা অষ্টম শ্রেণী পাশের সার্টিফিকেট ও মার্কশিট",
                                "কাস্ট সার্টিফিকেট (প্রযোজ্য হলে)",
                                "আধার লিংকযুক্ত নিজস্ব ব্যাংক পাসবুক",
                                "পাসপোর্ট সাইজ রঙিন ছবি"
                        ],
                        "hi": [
                                "आधार कार्ड / वोटर आईडी",
                                "एंप्लॉयमेंट बैंक पंजीकरण पर्ची",
                                "शैक्षणिक योग्यता प्रमाण पत्र",
                                "बैंक पासबुक",
                                "पासपोर्ट फोटो"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Official Employment Bank portal registration.",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন ও রেজিস্ট্রেশন।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct monthly financial allowance of ₹1,500 credited via DBT.",
                                "Free vocational skill development & computer training.",
                                "Direct notifications for government & private job fairs."
                        ],
                        "bn": [
                                "প্রতি মাসে ₹১,৫০০ টাকা সরাসরি ব্যাংক অ্যাকাউন্টে আর্থিক অনুদান।",
                                "বিনামূল্যে বৃত্তিমূলক ও কম্পিউটার প্রশিক্ষণ।",
                                "চাকরির মেলা ও সরাসরি নিয়োগ বিজ্ঞপ্তির অগ্রাধিকার।"
                        ],
                        "hi": [
                                "प्रति माह ₹1,500 की वित्तीय सहायता।",
                                "निःशुल्क कौशल विकास प्रशिक्षण।",
                                "रोजगार सूचनाएं।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official Employment Bank portal (employmentbankwb.gov.in) and click 'JobSeeker New Enrolment'.",
                                "Fill in personal, educational, and contact details and generate JobSeeker Registration ID.",
                                "Visit your local Employment Exchange within 60 days with original documents for physical verification.",
                                "After verification, submit Yuva Shakti Annexure application form to activate monthly financial allowance.",
                                "Track application status and DBT credit online at employmentbankwb.gov.in."
                        ],
                        "bn": [
                                "employmentbankwb.gov.in পোর্টালে গিয়ে 'JobSeeker New Enrolment' এ ক্লিক করে রেজিস্ট্রেশন করুন।",
                                "শিক্ষাগত যোগ্যতা ও ব্যক্তিগত তথ্য দিয়ে এনরোলমেন্ট স্লিপ প্রিন্ট করুন।",
                                "৬০ দিনের মধ্যে স্থানীয় এমপ্লয়মেন্ট এক্সচেঞ্জে আসল নথি নিয়ে গিয়ে ভেরিফাই করান।",
                                "ভেরিফিকেশন সম্পন্ন হলে অ্যানক্সার ফর্ম জমা দিয়ে যুবশক্তি স্কিম চালু করুন।",
                                "পোর্টালে ইউজারনেম ও পাসওয়ার্ড দিয়ে আবেদনের স্ট্যাটাস ও অনুদান ট্র্যাক করুন।"
                        ],
                        "hi": [
                                "employmentbankwb.gov.in पर जाकर JobSeeker New Enrolment करें।",
                                "स्थानीय रोजगार कार्यालय में दस्तावेज सत्यापन करवाएं।",
                                "युवा शक्ति फॉर्म जमा कर स्थिति ट्रैक करें।"
                        ]
                },
                "official_homepage": "https://employmentbankwb.gov.in/",
                "official_apply_url": "https://employmentbankwb.gov.in/",
                "official_status_url": "https://employmentbankwb.gov.in/",
                "official_helpline": "033 2237 6300 / 1800-345-3333",
                "official_email": "employmentbank@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online Portal + Local Employment Exchange",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://employmentbankwb.gov.in/",
                "last_verified": "18 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "yuva shakti",
                        "yuba sakti",
                        "yuvasree",
                        "yubashree",
                        "yubasree",
                        "jubosree",
                        "yuva shakti scheme",
                        "yuba sakti portal",
                        "employment bank",
                        "employment bank wb",
                        "wb employment bank",
                        "youth scheme",
                        "unemployed allowance wb",
                        "যুবশক্তি",
                        "যুবশক্তি প্রকল্প",
                        "যুবশ্রী",
                        "যুবশ্রী প্রকল্প",
                        "এমপ্লয়মেন্ট ব্যাংক",
                        "কর্মসংস্থান",
                        "কর্মশ্রী",
                        "যুব শক্তি",
                        "युवा शक्ति",
                        "युवा शक्ति योजना",
                        "युवाश्री"
                ],
                "scam_warning": {
                        "en": "Employment Bank and Yuva Shakti applications are 100% FREE. Never pay touts or unofficial agencies for registration.",
                        "bn": "এমপ্লয়মেন্ট ব্যাংক ও যুবশক্তি রেজিস্ট্রেশন সম্পূর্ণ বিনামূল্যে সরকারি পোর্টালেই হয়। কোনো দালাল বা প্রতারককে টাকা দেবেন না।",
                        "hi": "एंप्लॉयमेंट बैंक और युवा शक्ति पंजीकरण पूरी तरह निःशुल्क है। किसी को पैसे न दें।"
                }
        },
        {
                "service_id": "aadhaar-myaadhaar-update",
                "service_name": {
                        "en": "Aadhaar Services & Online Update (myAadhaar)",
                        "bn": "আধার কার্ড পরিষেবা ও অনলাইন আপডেট (মাই আধার)",
                        "hi": "आधार सेवाएं और ऑनलाइन अपडेट (माई आधार)"
                },
                "short_description": {
                        "en": "Official UIDAI self-service portal to update address, download e-Aadhaar, order PVC card, check linking status, and lock/unlock biometrics.",
                        "bn": "ইউআইডিএআই-এর অফিসিয়াল পোর্টাল যেখান থেকে ঠিকানা পরিবর্তন, ই-আধার ডাউনলোড, পিভিসি কার্ড অর্ডার এবং বায়োমেট্রিক লক করা যায়।",
                        "hi": "यूआईडीएआई का आधिकारिक पोर्टल जहां से पता अपडेट, ई-आधार डाउनलोड, पीवीसी कार्ड ऑर्डर और बायोमेट्रिक्स लॉक किए जा सकते हैं।"
                },
                "category": "identity-docs",
                "category_name": {
                        "en": "Identity & Documents",
                        "bn": "পরিচয়পত্র ও নথি",
                        "hi": "पहचान और दस्तावेज"
                },
                "subcategory": "Aadhaar UIDAI",
                "authority": "Unique Identification Authority of India (UIDAI)",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "General Citizen",
                        "Student",
                        "Senior Citizen",
                        "Worker"
                ],
                "eligibility": {
                        "en": [
                                "All Indian residents holding an Aadhaar Number.",
                                "Mobile number must be linked with Aadhaar for OTP verification."
                        ],
                        "bn": [
                                "আধার নম্বরধারী সমস্ত ভারতীয় নাগরিক।",
                                "অনলাইন ওটিপি ভেরিফিকেশনের জন্য আধারের সাথে মোবাইল নম্বর লিংক থাকা বাধ্যতামূলক।"
                        ],
                        "hi": [
                                "आधार संख्या रखने वाले सभी भारतीय निवासी।",
                                "ऑनलाइन ओटीपी सत्यापन के लिए आधार के साथ मोबाइल नंबर लिंक होना आवश्यक है।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Valid Proof of Address (Electricity bill, Passport, Bank Passbook, Voter ID, Ration card, etc.)",
                                "Aadhaar Registered Mobile Number for OTP authentication."
                        ],
                        "bn": [
                                "বৈধ ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিল, পাসপোর্ট, ব্যাংক পাসবুক, ভোটার কার্ড, ইত্যাদি)",
                                "ওটিপি পাওয়ার জন্য আধার-সংযুক্ত সচল মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "वैध पते का प्रमाण (बिजली बिल, पासपोर्ट, बैंक पासबुक, वोटर आईडी, आदि)",
                                "ओटीपी प्राप्त करने के लिए आधार से जुड़ा मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Document Update: Free during official promotional windows (otherwise ₹50). PVC Card: ₹50 official fee.",
                        "bn": "নথি আপডেট: অফিসিয়াল বিশেষ সময়সীমার মধ্যে বিনামূল্যে (অন্যথায় ₹৫০)। পিভিসি কার্ড: ₹৫০ সরকারি ফি।",
                        "hi": "दस्तावेज़ अपडेट: विशेष छूट के दौरान निःशुल्क (अन्यथा ₹50)। पीवीसी कार्ड: ₹50 आधिकारिक शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Instant e-Aadhaar download legally equivalent to physical Aadhaar.",
                                "Seamless address correction from home.",
                                "Enhanced security through biometric locking."
                        ],
                        "bn": [
                                "তাত্ক্ষণিক বৈধ ই-আধার ডাউনলোড।",
                                "ঘরে বসেই ঠিকানার নির্ভুল সংশোধন।",
                                "বায়োমেট্রিক লক করে প্রতারণা রোধ।"
                        ],
                        "hi": [
                                "त्वरित ई-आधार डाउनलोड।",
                                "घर बैठे पता सुधार की सुविधा।",
                                "बायोमेट्रिक लॉक द्वारा सुरक्षा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official UIDAI myAadhaar portal (myaadhaar.uidai.gov.in).",
                                "Click 'Login' and enter your 12-digit Aadhaar Number and Captcha.",
                                "Enter the 6-digit OTP received on your Aadhaar-registered mobile number.",
                                "Select 'Address Update' or required service from the dashboard.",
                                "Upload self-attested valid supporting document in PDF/JPEG format.",
                                "Review details carefully and submit the application.",
                                "Note down the Service Request Number (SRN) for tracking status."
                        ],
                        "bn": [
                                "অফিসিয়াল UIDAI myAadhaar পোর্টালে যান (myaadhaar.uidai.gov.in)।",
                                "'Login' বাটনে ক্লিক করে ১২ সংখ্যার আধার নম্বর ও ক্যাপচা লিখুন।",
                                "রেজিস্টার্ড মোবাইলে আসা ৬ সংখ্যার ওটিপি দিয়ে লগইন সম্পন্ন করুন।",
                                "ড্যাশবোর্ড থেকে 'Address Update' অথবা প্রয়োজনীয় সেবা নির্বাচন করুন।",
                                "স্বাক্ষরিত বৈধ সহায়ক নথির কপি (PDF/JPEG) আপলোড করুন।",
                                "সমস্ত তথ্য যাচাই করে সাবমিট করুন।",
                                "ট্র্যাকিং এর জন্য Service Request Number (SRN) সংগ্রহ করে রাখুন।"
                        ],
                        "hi": [
                                "आधिकारिक यूआईडीएआई माई आधार पोर्टल (myaadhaar.uidai.gov.in) पर जाएं।",
                                "'Login' पर क्लिक करके 12 अंकों का आधार नंबर और कैप्चा दर्ज करें।",
                                "पंजीकृत मोबाइल पर आए 6 अंकों के ओटीपी से लॉगिन करें।",
                                "'Address Update' या आवश्यक सेवा का चयन करें।",
                                "स्व-सत्यापित वैध दस्तावेज़ की प्रति अपलोड करें।",
                                "सभी जानकारी की समीक्षा कर सबमिट करें।",
                                "ट्रैकिंग के लिए सर्विस रिक्वेस्ट नंबर (SRN) सुरक्षित रखें।"
                        ]
                },
                "official_homepage": "https://uidai.gov.in/",
                "official_apply_url": "https://myaadhaar.uidai.gov.in/",
                "official_status_url": "https://myaadhaar.uidai.gov.in/check-aadhaar-status",
                "official_helpline": "1947 (Toll Free)",
                "official_email": "help@uidai.gov.in",
                "state": "All India",
                "availability": "Online + Kendra",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://uidai.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "aadhaar",
                        "adhar",
                        "uidai",
                        "myaadhaar",
                        "update address",
                        "download e-aadhaar",
                        "pvc aadhaar",
                        "আধার",
                        "আধার কার্ড",
                        "আধার আপডেট",
                        "আধার ডাউনলোড",
                        "পিভিসি আধার",
                        "आधार",
                        "आधार कार्ड",
                        "आधार डाउनलोड",
                        "आधार अपडेट"
                ],
                "scam_warning": {
                        "en": "NEVER share your Aadhaar OTP or Biometrics with unauthorized persons. UIDAI never calls asking for OTPs.",
                        "bn": "কখনোই কোনো অপরিচিত ব্যক্তিকে আধার ওটিপি জানাবেন না। UIDAI ফোন করে কখনো ওটিপি চায় না।",
                        "hi": "कभी भी किसी अज्ञात व्यक्ति के साथ आधार ओटीपी साझा न करें। यूआईडीएआई कभी फोन पर ओटीपी नहीं मांगता।"
                }
        },
        {
                "service_id": "voter-services-eci",
                "service_name": {
                        "en": "Voters' Service Portal (ECI — Form 6, 7, 8)",
                        "bn": "জাতীয় ভোটার সেবা পোর্টাল (ECI — নতুন কার্ড ও সংশোধন)",
                        "hi": "मतदाता सेवा पोर्टल (ECI — नया कार्ड और संशोधन)"
                },
                "short_description": {
                        "en": "Official Election Commission of India portal for new voter registration (Form 6), overseas registration (Form 6A), deletion (Form 7), and correction/shifting (Form 8).",
                        "bn": "ভারতের নির্বাচন কমিশনের অফিসিয়াল পোর্টাল: নতুন ভোটার তালিকায় নাম তোলা (Form 6), ভুল সংশোধন (Form 8) ও ডিজিটাল EPIC ডাউনলোড।",
                        "hi": "भारत निर्वाचन आयोग का आधिकारिक पोर्टल: नए मतदाता पंजीकरण (Form 6), सुधार (Form 8) और ई-ईपीआईसी डाउनलोड।"
                },
                "category": "identity-docs",
                "category_name": {
                        "en": "Identity & Documents",
                        "bn": "পরিচয়পত্র ও নথি",
                        "hi": "पहचान और दस्तावेज"
                },
                "subcategory": "Voter Services",
                "authority": "Election Commission of India (ECI)",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "Student",
                        "General Citizen",
                        "Senior Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Indian citizen who has attained 18 years of age (or qualifying dates).",
                                "Ordinarily resident in the polling constituency."
                        ],
                        "bn": [
                                "১৮ বছর বা তদূর্ধ্ব ভারতীয় নাগরিক।",
                                "সংশ্লিষ্ট বিধানসভা কেন্দ্রের স্থায়ী বাসিন্দা।"
                        ],
                        "hi": [
                                "18 वर्ष या उससे अधिक आयु के भारतीय नागरिक।",
                                "संबंधित निर्वाचन क्षेत्र के सामान्य निवासी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Proof of Age (Birth Certificate, Class 10 Admit, Aadhaar, PAN, Passport)",
                                "Proof of Address (Electricity bill, Aadhaar, Bank Passbook, Ration card)",
                                "Passport-size recent photograph."
                        ],
                        "bn": [
                                "বয়সের প্রমাণপত্র (জন্ম সার্টিফিকেট, মাধ্যমিক অ্যাডমিট, আধার, প্যান)",
                                "ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিল, আধার, ব্যাংক বই)",
                                "এক কপি সাম্প্রতিক পাসপোর্ট ছবি।"
                        ],
                        "hi": [
                                "आयु प्रमाण (जन्म प्रमाण पत्र, 10वीं का एडमिट, आधार, पैन)",
                                "पते का प्रमाण (बिजली बिल, आधार, बैंक पासबुक)",
                                "पासपोर्ट साइज फोटो।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee for voter registration or correction.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। ভোটার কার্ড তৈরি বা সংশোধনে কোনো সরকারি ফি লাগে না।",
                        "hi": "पूर्णतः निःशुल्क। मतदाता पहचान पत्र पंजीकरण में कोई सरकारी शुल्क नहीं है।"
                },
                "benefits": {
                        "en": [
                                "Fundamental voting right in parliamentary and assembly elections.",
                                "Official valid national identity and address proof.",
                                "Instant downloadable digital e-EPIC."
                        ],
                        "bn": [
                                "গণতান্ত্রিক ভোটাধিকার প্রয়োগ।",
                                "বৈধ সরকারি পরিচয় ও ঠিকানার প্রমাণপত্র।",
                                "ডিজিটাল ই-এপিক (e-EPIC) সরাসরি ডাউনলোড।"
                        ],
                        "hi": [
                                "मतदान का संवैधानिक अधिकार।",
                                "मान्य राष्ट्रीय पहचान और पते का प्रमाण।",
                                "डिजिटल ई-ईपीआईसी डाउनलोड।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit voters.eci.gov.in and create a login account using your mobile number.",
                                "Select 'Fill Form 6' for new registration or 'Fill Form 8' for corrections/shifting.",
                                "Fill personal details, assembly constituency, and present residential address.",
                                "Upload valid Age Proof, Address Proof, and Applicant Photograph.",
                                "Review draft, submit application, and download Reference Acknowledgement.",
                                "Track verification status online using the Reference Number."
                        ],
                        "bn": [
                                "voters.eci.gov.in পোর্টালে গিয়ে মোবাইল নম্বর দিয়ে ফ্রি রেজিস্ট্রেশন বা লগইন করুন।",
                                "নতুন ভোটারের জন্য 'Form 6' অথবা সংশোধনের জন্য 'Form 8' বেছে নিন।",
                                "ব্যক্তিগত বিবরণ, বিধানসভা এলাকা এবং বর্তমান ঠিকানা পূরণ করুন।",
                                "বয়স ও ঠিকানার প্রমাণপত্র এবং ছবি আপলোড করুন।",
                                "তথ্য মিলিয়ে সাবমিট করুন এবং Reference Number সহ রসিদটি সেভ করুন।",
                                "Reference Number দিয়ে আবেদনের স্থিতি নিয়মিত ট্র্যাক করুন।"
                        ],
                        "hi": [
                                "voters.eci.gov.in पर जाकर मोबाइल नंबर से खाता बनाएं।",
                                "नए पंजीकरण के लिए 'Form 6' या सुधार के लिए 'Form 8' चुनें।",
                                "व्यक्तिगत विवरण, विधानसभा क्षेत्र और वर्तमान पता भरें।",
                                "आयु प्रमाण, पता प्रमाण और फोटो अपलोड करें।",
                                "फॉर्म सबमिट करें और संदर्भ रसीद डाउनलोड करें।",
                                "संदर्भ संख्या द्वारा आवेदन की स्थिति की जांच करें।"
                        ]
                },
                "official_homepage": "https://voters.eci.gov.in/",
                "official_apply_url": "https://voters.eci.gov.in/",
                "official_status_url": "https://voters.eci.gov.in/home/track",
                "official_helpline": "1950 (Toll Free National Voter Helpline)",
                "official_email": "complaints@eci.gov.in",
                "state": "All India",
                "availability": "Online + BLO Offline",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://eci.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "voter card",
                        "voters portal",
                        "eci",
                        "form 6",
                        "form 8",
                        "epic download",
                        "new voter card",
                        "voter card correction",
                        "ভোটার কার্ড",
                        "নতুন ভোটার",
                        "ভোটার কার্ড সংশোধন",
                        "ভোটার আইডি",
                        "ভোট",
                        "वोटर कार्ड",
                        "नया वोटर कार्ड",
                        "वोटर आईडी",
                        "मतदाता पहचान पत्र"
                ],
                "scam_warning": {
                        "en": "Voter card services are 100% FREE on official ECI portals. Beware of fake third-party websites demanding money.",
                        "bn": "ভোটার কার্ডের সমস্ত সেবা নির্বাচন কমিশনের পোর্টালে সম্পূর্ণ বিনামূল্যে। টাকা দাবি করা ভুয়া ওয়েবসাইট থেকে সাবধান।",
                        "hi": "चुनाव आयोग के पोर्टल पर वोटर कार्ड सेवाएं पूर्णतः निःशुल्क हैं। पैसे मांगने वाली फर्जी वेबसाइटों से सावधान रहें।"
                }
        },
        {
                "service_id": "pan-card-incometax-apply",
                "service_name": {
                        "en": "PAN Card Application & Instant e-PAN",
                        "bn": "প্যান কার্ড আবেদন ও তাত্ক্ষণিক ই-প্যান (Income Tax)",
                        "hi": "पैन कार्ड आवेदन और तुरंत ई-पैन (आयकर विभाग)"
                },
                "short_description": {
                        "en": "Apply for Permanent Account Number (PAN) via Income Tax e-Filing (Instant e-PAN free via Aadhaar) or Protean/UTIITSL for physical laminated PAN.",
                        "bn": "আয়কর ই-ফাইলিং পোর্টালে আধারের মাধ্যমে বিনামূল্যে তাত্ক্ষণিক ই-প্যান অথবা প্রোটিয়ান/ইউটিআইআইটিএসএল-এর মাধ্যমে ফিজিক্যাল প্যান কার্ড আবেদন।",
                        "hi": "आयकर ई-फाइलिंग द्वारा आधार से निःशुल्क ई-पैन प्राप्त करें या भौतिक पैन कार्ड के लिए आवेदन करें।"
                },
                "category": "identity-docs",
                "category_name": {
                        "en": "Identity & Documents",
                        "bn": "পরিচয়পত্র ও নথি",
                        "hi": "पहचान और दस्तावेज"
                },
                "subcategory": "PAN Services",
                "authority": "Income Tax Department (CBDT / Ministry of Finance)",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "Student",
                        "Job Seeker",
                        "Business Owner",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Any individual or business entity requiring a tax identity in India.",
                                "Instant e-PAN requires Aadhaar with registered mobile."
                        ],
                        "bn": [
                                "যেকোনো ভারতীয় নাগরিক বা করদাতা।",
                                "তাত্ক্ষণিক ই-প্যানের জন্য আধারে মোবাইল নম্বর লিংক থাকা প্রয়োজন।"
                        ],
                        "hi": [
                                "भारत में कर पहचान चाहने वाला कोई भी नागरिक।",
                                "तुरंत ई-पैन के लिए आधार में मोबाइल नंबर लिंक होना आवश्यक है।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card (Single document sufficient for e-KYC instant PAN)",
                                "Proof of Identity, Address, and Date of Birth for physical form."
                        ],
                        "bn": [
                                "আধার কার্ড (ই-কেওয়াইসির জন্য যথেষ্ট)",
                                "ফিজিক্যাল ফর্মের জন্য পরিচয়, ঠিকানা ও জন্মতারিখের প্রমাণপত্র।"
                        ],
                        "hi": [
                                "आधार कार्ड (ई-केवाईसी के लिए पर्याप्त)",
                                "भौतिक फॉर्म के लिए पहचान, पता और जन्म तिथि का प्रमाण।"
                        ]
                },
                "application_fee": {
                        "en": "Instant e-PAN on Income Tax Portal: ₹0 (Free). Physical PAN card dispatched to home: ₹107 official statutory fee.",
                        "bn": "ইনকাম ট্যাক্স পোর্টালে তাত্ক্ষণিক ই-প্যান: ₹০ (বিনামূল্যে)। ফিজিক্যাল প্লাস্টিক প্যান কার্ডের হোম ডেলিভারি ফি: ₹১০৭।",
                        "hi": "आयकर पोर्टल पर तुरंत ई-पैन: ₹0 (निःशुल्क)। घर पर भौतिक पैन कार्ड डिलीवरी शुल्क: ₹107।"
                },
                "benefits": {
                        "en": [
                                "Mandatory for opening bank accounts, filing income tax, investing, and receiving salary.",
                                "Lifetime validity."
                        ],
                        "bn": [
                                "ব্যাংক অ্যাকাউন্ট খোলা, বেতন গ্রহণ, বিনিয়োগ ও আয়কর জমার জন্য অপরিহার্য।",
                                "আজীবন বৈধতা।"
                        ],
                        "hi": [
                                "बैंक खाता खोलने, वेतन प्राप्त करने और आयकर रिटर्न के लिए अनिवार्य।",
                                "आजीवन वैधता।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "For Instant Free e-PAN: Visit incometax.gov.in -> 'Instant e-PAN'.",
                                "Click 'Get New e-PAN' and enter your 12-digit Aadhaar number.",
                                "Validate the OTP received on your Aadhaar-linked mobile.",
                                "Confirm your demographic details fetched from UIDAI.",
                                "Submit and download your digitally signed e-PAN within 10 minutes.",
                                "For Physical Card: Apply through verified portal (protean-tinpan.com or utiitsl.com)."
                        ],
                        "bn": [
                                "তাত্ক্ষণিক ফ্রি ই-প্যানের জন্য: incometax.gov.in পোর্টালে 'Instant e-PAN' অপশনে যান।",
                                "'Get New e-PAN' এ ক্লিক করে ১২ সংখ্যার আধার নম্বর লিখুন।",
                                "আধারে আসা ওটিপি দিয়ে ভেরিফিকেশন সম্পূর্ণ করুন।",
                                "পর্দায় আসা আধার তথ্য মিলিয়ে নিয়ে সম্মতি দিন।",
                                "সাবমিট করুন এবং ১০ মিনিটের মধ্যে ডিজিটাল ই-প্যান ডাউনলোড করুন।",
                                "ফিজিক্যাল কার্ডের জন্য Protean (protean-tinpan.com) বা UTIITSL পোর্টালে আবেদন করুন।"
                        ],
                        "hi": [
                                "निःशुल्क ई-पैन के लिए incometax.gov.in पर 'Instant e-PAN' पर जाएं।",
                                "'Get New e-PAN' पर क्लिक करके आधार नंबर दर्ज करें।",
                                "मोबाइल पर प्राप्त ओटीपी द्वारा सत्यापन करें।",
                                "विवरण की पुष्टि करें और सबमिट करें। 10 मिनट में ई-पैन डाउनलोड करें।",
                                "भौतिक कार्ड के लिए protean-tinpan.com या utiitsl.com पर आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.incometax.gov.in/",
                "official_apply_url": "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan",
                "official_status_url": "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/check-status-download-pan",
                "official_helpline": "1800 180 1961 (IT Dept) / 020 27218080 (Protean)",
                "official_email": "tininfo@proteantech.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.incometax.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "pan card",
                        "e-pan",
                        "income tax pan",
                        "apply pan",
                        "instant pan",
                        "pan status",
                        "utiitsl pan",
                        "protean pan",
                        "প্যান কার্ড",
                        "ই-প্যান",
                        "নতুন প্যান",
                        "প্যান আবেদন",
                        "প্যান লিঙ্ক",
                        "पैन कार्ड",
                        "ई-पैन",
                        "पैन आवेदन",
                        "नया पैन कार्ड"
                ],
                "scam_warning": {
                        "en": "Instant e-PAN is 100% FREE on Income Tax website. Never pay third-party agents for free e-PAN generation.",
                        "bn": "ইনকাম ট্যাক্স ওয়েবসাইটে ইনস্ট্যান্ট ই-প্যান সম্পূর্ণ ফ্রি। ফ্রিতে পাওয়া সেবার জন্য কাউকে টাকা দেবেন না।",
                        "hi": "आयकर वेबसाइट पर तुरंत ई-पैन बिल्कुल मुफ्त है। इसके लिए किसी अनधिकृत एजेंट को पैसे न दें।"
                }
        },
        {
                "service_id": "wb-ration-card-food-dept",
                "service_name": {
                        "en": "West Bengal Ration Card Services (Food & Supplies Dept)",
                        "bn": "পশ্চিমবঙ্গ ডিজিটাল রেশন কার্ড সেবা (খাদ্য ও সরবরাহ দপ্তর)",
                        "hi": "पश्चिम बंगाल राशन कार्ड सेवाएं (खाद्य एवं आपूर्ति विभाग)"
                },
                "short_description": {
                        "en": "Official Food & Supplies Department portal of WB to apply for new digital ration card, member addition (Form 4), shifting (Form 5), surrender, and Aadhaar-Ration linking (e-KYC).",
                        "bn": "পশ্চিমবঙ্গ খাদ্য দপ্তরের অফিশিয়াল পোর্টাল: নতুন রেশন কার্ড (Form 4), সংশোধন (Form 5), পরিবার স্থানান্তর ও আধার লিংকিং (e-KYC)।",
                        "hi": "पश्चिम बंगाल खाद्य विभाग का पोर्टल: नया डिजिटल राशन कार्ड, नाम जोड़ना, संशोधन और आधार लिंकिंग (e-KYC)।"
                },
                "category": "ration-food",
                "category_name": {
                        "en": "Ration & Food Security",
                        "bn": "রেশন ও খাদ্য সুরক্ষা",
                        "hi": "राशन और खाद्य सुरक्षा"
                },
                "subcategory": "Ration Cards WB",
                "authority": "Department of Food & Supplies, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Document",
                "target_users": [
                        "General Citizen",
                        "Farmer",
                        "Worker",
                        "Senior Citizen",
                        "Woman"
                ],
                "eligibility": {
                        "en": [
                                "Permanent resident families of West Bengal.",
                                "Not already enrolled under non-subsidized status elsewhere."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা পরিবার।",
                                "পরিবারের কোনো সদস্যের বৈধ কার্ড থাকলে নতুন সদস্য সংযোজন সহজ।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के स्थायी निवासी परिवार।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar card of all family members",
                                "Birth certificate for children under 5 years",
                                "Head of family ration card number",
                                "Active mobile number."
                        ],
                        "bn": [
                                "পরিবারের সকল সদস্যের আধার কার্ড",
                                "৫ বছরের কম শিশুদের ক্ষেত্রে জন্ম সার্টিফিকেট",
                                "পরিবার প্রধানের রেশন কার্ড নম্বর",
                                "সচল মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "परिवार के सभी सदस्यों के आधार कार्ड",
                                "5 वर्ष से कम बच्चों का जन्म प्रमाण पत्र",
                                "सक्रिय मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee for application, correction, or e-Ration card download.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। আবেদন, সংশোধন ও ই-রেশন কার্ড ডাউনলোডে কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क। आवेदन और ई-राशन कार्ड डाउनलोड में कोई शुल्क नहीं है।"
                },
                "benefits": {
                        "en": [
                                "Free subsidized food grains under Khadya Sathi & NFSA.",
                                "Valid state residence proof.",
                                "Downloadable digital e-Ration card."
                        ],
                        "bn": [
                                "খাদ্য সাথী প্রকল্পের আওতায় বিনামূল্যে খাদ্যশস্য।",
                                "রাজ্যের বৈধ পরিচয় ও ঠিকানার নথি।",
                                "ডিজিটাল ই-রেশন কার্ড ডাউনলোড।"
                        ],
                        "hi": [
                                "खाद्य साथी योजना के तहत मुफ्त अनाज।",
                                "राज्य का मान्य पहचान दस्तावेज।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official portal food.wb.gov.in or rcms.wb.gov.in.",
                                "Go to 'Citizen Centric Services' -> 'Ration Card'.",
                                "Select appropriate form (Form 4 for new member, Form 5 for correction).",
                                "Enter registered mobile number and verify OTP.",
                                "Fill applicant details and upload Aadhaar/Birth proof copies.",
                                "Submit and note down the 16-digit Application Tracking Number.",
                                "Download digital e-Ration card once approved by Block Inspector."
                        ],
                        "bn": [
                                "অফিসিয়াল food.wb.gov.in অথবা rcms.wb.gov.in পোর্টালে যান।",
                                "'Citizen Centric Services' -> 'Ration Card' অপশনে যান।",
                                "প্রয়োজনীয় ফর্ম নির্বাচন করুন (নতুন সদস্যের জন্য Form 4, সংশোধনে Form 5)।",
                                "মোবাইল নম্বর লিখে ওটিপি দিয়ে লগইন করুন।",
                                "সদস্যের আধার ও বিবরণ দিয়ে প্রয়োজনীয় নথি আপলোড করুন।",
                                "সাবমিট করে ১৬ সংখ্যার আবেদন ট্র্যাকিং নম্বর সংগ্রহ করুন।",
                                "অনুমোদন পেলে ওয়েবসাইট থেকে ডিজিটাল ই-রেশন কার্ড ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "food.wb.gov.in या rcms.wb.gov.in पोर्टल पर जाएं।",
                                "'Citizen Centric Services' -> 'Ration Card' विकल्प चुनें।",
                                "संबंधित फॉर्म (नया सदस्य Form 4, सुधार Form 5) का चयन करें।",
                                "मोबाइल नंबर और ओटीपी द्वारा लॉगिन करें।",
                                "विवरण भरें और आवश्यक दस्तावेज़ अपलोड करें।",
                                "सबमिट करें और 16 अंकों की ट्रैकिंग संख्या सुरक्षित रखें।",
                                "मंजूरी के बाद डिजिटल ई-राशन कार्ड डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://food.wb.gov.in/",
                "official_apply_url": "https://food.wb.gov.in/",
                "official_status_url": "https://food.wb.gov.in/",
                "official_helpline": "1967 / 1800 345 5505 (Toll Free Food Helpline)",
                "official_email": "food-wb@nic.in",
                "state": "West Bengal",
                "availability": "Online + BSK / Bangla Sahayata Kendra",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://food.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "ration card wb",
                        "khadya sathi",
                        "wb food dept",
                        "rcms wb",
                        "e-ration card",
                        "ration card apply",
                        "form 4 ration",
                        "form 5 ration",
                        "রেশন কার্ড",
                        "খাদ্য সাথী",
                        "নতুন রেশন কার্ড",
                        "রেশন কার্ড সংশোধন",
                        "ই-রেশন কার্ড ডাউনলোড",
                        "राशन कार्ड पश्चिम बंगाल",
                        "खाद्य साथी",
                        "डिजिटल राशन कार्ड",
                        "ई-राशन कार्ड"
                ],
                "scam_warning": {
                        "en": "Official ration card services on food.wb.gov.in are completely FREE. Do not pay middlemen.",
                        "bn": "পশ্চিমবঙ্গ খাদ্য দপ্তরের সমস্ত সেবা সম্পূর্ণ ফ্রি। দালাল বা মধ্যস্বত্বভোগীদের টাকা দেবেন না।",
                        "hi": "खाद्य विभाग की सभी सेवाएं पूर्णतः मुफ्त हैं। किसी दलाल को पैसे न दें।"
                }
        },
        {
                "service_id": "wb-banglarbhumi-land-records",
                "service_name": {
                        "en": "Banglarbhumi Land Records & Mutation (West Bengal)",
                        "bn": "বাংলারভূমি — জমির খতিয়ান, দাগের তথ্য ও মিউটেশন",
                        "hi": "बांगलारभूमि — भूमि रिकॉर्ड, खतियान व म्यूटेशन (पश्चिम बंगाल)"
                },
                "short_description": {
                        "en": "Official Land & Land Reforms Department portal of West Bengal to search Khatian/Plot information (ROR), apply for online mutation, conversion, certified copies, and check land tax (Khajna).",
                        "bn": "পশ্চিমবঙ্গ ভূমি ও ভূমি সংস্কার দপ্তরের অফিশিয়াল পোর্টাল: খতিয়ান ও দাগের তথ্য (RoR), অনলাইন মিউটেশন, জমির শ্রেণি পরিবর্তন ও খাজনা প্রদান।",
                        "hi": "पश्चिम बंगाल भूमि सुधार विभाग का पोर्टल: खतियान और प्लॉट विवरण (RoR), ऑनलाइन म्यूटेशन और भूमि कर।"
                },
                "category": "land-property",
                "category_name": {
                        "en": "Land & Property (Banglarbhumi)",
                        "bn": "জমি ও সম্পত্তি (বাংলারভূমি)",
                        "hi": "भूमि और संपत्ति (बांगलारभूमि)"
                },
                "subcategory": "Land Records WB",
                "authority": "Land & Land Reforms and Refugee Relief & Rehabilitation Department, Govt of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Document",
                "target_users": [
                        "Farmer",
                        "General Citizen",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Property owners and citizens having registered deeds or ancestral property in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গে নিবন্ধিত দলিল বা পৈতৃক জমির মালিক ও নাগরিকবৃন্দ।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल में पंजीकृत भूमि या संपत्ति के मालिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Registered Deed of Sale / Gift / Heirship Document",
                                "Chain Deeds (if applicable)",
                                "Up-to-date Land Revenue (Khajna) Receipt",
                                "Aadhaar Card and Mobile Number."
                        ],
                        "bn": [
                                "রেজিস্টার্ড দলিল (বিক্রয় / হেবানামা / দানপত্র / ওয়ারিশান)",
                                "পিট দলিল (প্রয়োজনীয় ক্ষেত্রে)",
                                "হাল খাজনার রশিদ",
                                "আধার কার্ড ও মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "पंजीकृत बैनामा (Deed)",
                                "अद्यतन लगान रसीद",
                                "आधार कार्ड और मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "ROR Search: Free. Mutation/Conversion fee: Prescribed nominal statutory government scale based on area and land classification.",
                        "bn": "খতিয়ান/দাগের তথ্য অনুসন্ধান: সম্পূর্ণ বিনামূল্যে। মিউটেশন ও কনভার্সন ফি জমির এলাকা ও শ্রেণি অনুযায়ী সরকারি নির্ধারিত রেট।",
                        "hi": "खतियान जांच: निःशुल्क। म्यूटेशन शुल्क सरकारी दर के अनुसार।"
                },
                "benefits": {
                        "en": [
                                "Legal ownership confirmation in government record of rights.",
                                "Eliminates land disputes and facilitates agricultural loans/schemes.",
                                "Online verified certified copies."
                        ],
                        "bn": [
                                "সরকারি রেকর্ডে আইনসম্মত মালিকানা প্রতিষ্ঠা।",
                                "জমি নিয়ে বিরোধ নিষ্পত্তি ও কৃষি ঋণ পেতে সহায়ক।",
                                "অনলাইনে সার্টিফায়েড পর্চা পাওয়ার সুবিধা।"
                        ],
                        "hi": [
                                "सरकारी रिकॉर्ड में कानूनी मालिकाना हक।",
                                "कृषि ऋण और योजनाओं में सहायक।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit banglarbhumi.gov.in and login to your citizen account.",
                                "For Record Search: Click 'Know Your Property' -> Select District, Block, Mouza -> Enter Khatian or Plot No.",
                                "For Mutation: Click 'Citizen Services' -> 'Online Application' -> 'Mutation Application'.",
                                "Enter Buyer/Seller details, Deed No., Date, and Sub-Registrar Office.",
                                "Upload self-attested copies of Deed, Khajna receipt, and Legal declaration.",
                                "Pay official government fee online through GRIPS portal.",
                                "Download System Generated Mutation Acknowledgment and Notice of Hearing."
                        ],
                        "bn": [
                                "banglarbhumi.gov.in পোর্টালে গিয়ে সিটিজেন অ্যাকাউন্টে লগইন করুন।",
                                "তথ্য দেখতে: 'Know Your Property' তে গিয়ে জেলা, ব্লক, মৌজা ও খতিয়ান/দাগ নম্বর দিন।",
                                "মিউটেশনের জন্য: 'Citizen Services' -> 'Online Application' -> 'Mutation Application' নির্বাচন করুন।",
                                "ক্রেতা ও বিক্রেতার বিবরণ, দলিলের নম্বর, তারিখ ও রেজিস্ট্রি অফিসের নাম পূরণ করুন।",
                                "দলিলের কপি, খাজনার রশিদ ও ঘোষণাপত্র আপলোড করুন।",
                                "GRIPS পোর্টালে সরকারি ফি অনলাইনে জমা দিন।",
                                "মিউটেশন আবেদনপত্র ও হেয়ারিং নোটিশের প্রিন্টআউট সংগ্রহ করুন।"
                        ],
                        "hi": [
                                "banglarbhumi.gov.in पोर्टल पर नागरिक खाते से लॉगिन करें।",
                                "रिकॉर्ड जांच के लिए 'Know Your Property' में जिला, ब्लॉक, मौजा और प्लॉट नंबर चुनें।",
                                "म्यूटेशन के लिए 'Online Application' -> 'Mutation Application' चुनें।",
                                "बैनामा विवरण, खरीदार-विक्रेता की जानकारी भरें और दस्तावेज अपलोड करें।",
                                "GRIPS पोर्टल द्वारा ऑनलाइन सरकारी शुल्क का भुगतान करें।",
                                "म्यूटेशन रसीद और सुनवाई नोटिस डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://banglarbhumi.gov.in/",
                "official_apply_url": "https://banglarbhumi.gov.in/BanglarBhumi/Home",
                "official_status_url": "https://banglarbhumi.gov.in/BanglarBhumi/KnowYourProperty",
                "official_helpline": "1800 345 6655 / District BL&LRO Helpdesk",
                "official_email": "banglarbhumi@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online + BL&LRO Office",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://banglarbhumi.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "banglarbhumi",
                        "land record wb",
                        "khatian plot search",
                        "mutation wb",
                        "khajna payment",
                        "ror wb",
                        "porcha download",
                        "বাংলারভূমি",
                        "জমির রেকর্ড",
                        "খতিয়ান দাগের তথ্য",
                        "মিউটেশন",
                        "পর্চা",
                        "খাজনা",
                        "बांगलारभूमि",
                        "जमीन रिकॉर्ड",
                        "खतियान",
                        "म्यूटेशन पश्चिम बंगाल",
                        "पर्चा"
                ],
                "scam_warning": {
                        "en": "Always pay land mutation fees ONLY through the official WB GRIPS gateway on banglarbhumi.gov.in. Never pay private UPI handles.",
                        "bn": "জমির মিউটেশন ফি শুধুমাত্র banglarbhumi.gov.in এর অফিসিয়াল GRIPS গেটওয়ে দিয়েই দিন। কোনো ব্যক্তিগত UPI বা নম্বরে টাকা দেবেন না।",
                        "hi": "म्यूटेशन शुल्क का भुगतान केवल banglarbhumi.gov.in पर आधिकारिक GRIPS गेटवे द्वारा करें। किसी निजी यूपीआई पर पैसे न भेजें।"
                }
        },
        {
                "service_id": "passport-seva-portal",
                "service_name": {
                        "en": "Passport Seva Portal (Ministry of External Affairs)",
                        "bn": "পাসপোর্ট সেবা পোর্টাল (বিদেশ মন্ত্রক — নতুন ও পুনর্নবীকরণ)",
                        "hi": "पासपोर्ट सेवा पोर्टल (विदेश मंत्रालय — नया व नवीनीकरण)"
                },
                "short_description": {
                        "en": "Official Ministry of External Affairs portal to apply for Fresh Passport, Reissue, Tatkaal, Police Clearance Certificate (PCC), and book PSK/POPSK appointment slots.",
                        "bn": "ভারত সরকারের বিদেশ মন্ত্রকের অফিশিয়াল পোর্টাল: সাধারণ ও তৎকাল পাসপোর্ট আবেদন, পুনর্নবীকরণ (Reissue), ও পিএসকে অ্যাপয়েন্টমেন্ট বুকিং।",
                        "hi": "विदेश मंत्रालय का आधिकारिक पोर्टल: नया पासपोर्ट, तत्काल पासपोर्ट, नवीनीकरण और पीएसके स्लॉट बुकिंग।"
                },
                "category": "identity-docs",
                "category_name": {
                        "en": "Identity & Documents",
                        "bn": "পরিচয়পত্র ও নথি",
                        "hi": "पहचान और दस्तावेज"
                },
                "subcategory": "Passport MEA",
                "authority": "Consular, Passport & Visa Division, Ministry of External Affairs, Govt of India",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "General Citizen",
                        "Student",
                        "Job Seeker",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Indian citizens by birth, descent, or registration without disqualifying criminal proceedings."
                        ],
                        "bn": [
                                "ভারতীয় নাগরিকবৃন্দ।"
                        ],
                        "hi": [
                                "भारतीय नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Proof of Date of Birth (Birth Certificate, Class 10 Admit Card, Aadhaar, PAN)",
                                "Proof of Present Address (Aadhaar, Electricity bill, Bank Passbook, Voter ID)",
                                "Non-ECR proof (Class 10 Pass certificate/Degree for ECNR status)."
                        ],
                        "bn": [
                                "জন্মতারিখের প্রমাণপত্র (বার্থ সার্টিফিকেট, মাধ্যমিক অ্যাডমিট, আধার, প্যান)",
                                "বর্তমান ঠিকানার প্রমাণপত্র (আধার, বিদ্যুৎ বিল, ব্যাংক পাসবুক)",
                                "নন-ইসিআর প্রমাণপত্র (মাধ্যমিক বা তদূর্ধ্ব পাশের শংসাপত্র)।"
                        ],
                        "hi": [
                                "जन्म तिथि प्रमाण (जन्म प्रमाण पत्र, 10वीं एडमिट, आधार)",
                                "वर्तमान पते का प्रमाण (आधार, बिजली बिल, बैंक पासबुक)",
                                "Non-ECR प्रमाण (10वीं पास प्रमाणपत्र)।"
                        ]
                },
                "application_fee": {
                        "en": "Normal Fresh/Re-issue (36 Pages): ₹1,500. Tatkaal Scheme: ₹3,500 official statutory fee.",
                        "bn": "সাধারণ ফ্রেশ/রিইস্যু পাসপোর্ট (৩৬ পৃষ্ঠা): ₹১,৫০০। তৎকাল পাসপোর্ট ফি: ₹৩,৫০০।",
                        "hi": "सामान्य पासपोर्ट (36 पृष्ठ): ₹1,500। तत्काल योजना: ₹3,500।"
                },
                "benefits": {
                        "en": [
                                "Primary legal international travel document and sovereign proof of Indian citizenship.",
                                "Globally recognized travel credential."
                        ],
                        "bn": [
                                "আন্তর্জাতিক ভ্রমণের জন্য অপরিহার্য সার্বভৌম পরিচয়পত্র।",
                                "বিশ্বজুড়ে স্বীকৃত নাগরিকত্বের প্রমাণ।"
                        ],
                        "hi": [
                                "अंतरराष्ट्रीय यात्रा के लिए अनिवार्य पहचान और नागरिकता का दस्तावेज।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Register on the official portal passportindia.gov.in.",
                                "Login and click 'Apply for Fresh Passport / Re-issue of Passport'.",
                                "Fill application details online or upload pre-filled XML file.",
                                "Click 'Pay and Schedule Appointment' to select nearby PSK / Post Office PSK.",
                                "Pay official fee online using debit card, net banking, or SBI challan.",
                                "Print Application Receipt containing ARN and Appointment Batch Details.",
                                "Visit Passport Seva Kendra on scheduled date with original documents."
                        ],
                        "bn": [
                                "অফিসিয়াল passportindia.gov.in পোর্টালে নাম রেজিস্টার করুন।",
                                "লগইন করে 'Apply for Fresh Passport / Re-issue' অপশন সিলেক্ট করুন।",
                                "অনলাইনে ব্যক্তিগত ও ঠিকানার সমস্ত তথ্য সঠিকভাবে পূরণ করুন।",
                                "'Pay and Schedule Appointment' এ গিয়ে নিকটস্থ PSK/POPSK এবং সুবিধাজনক তারিখ বেছে নিন।",
                                "অনলাইনে সরকারি ফি পেমেন্ট করুন।",
                                "ARN নম্বর ও অ্যাপয়েন্টমেন্ট সহ রসিদটি প্রিন্ট করুন।",
                                "নির্দিষ্ট দিনে মূল নথিপত্র সহ পাসপোর্ট সেবা কেন্দ্রে উপস্থিত হন।"
                        ],
                        "hi": [
                                "passportindia.gov.in पोर्टल पर पंजीकरण करें।",
                                "'Apply for Fresh Passport / Re-issue' पर क्लिक करें।",
                                "ऑनलाइन फॉर्म भरें।",
                                "'Pay and Schedule Appointment' में जाकर नजदीकी केंद्र और तारीख चुनें।",
                                "ऑनलाइन शुल्क का भुगतान करें।",
                                "ARN रसीद प्रिंट करें।",
                                "निर्धारित तिथि पर मूल दस्तावेजों के साथ पासपोर्ट सेवा केंद्र जाएं।"
                        ]
                },
                "official_homepage": "https://www.passportindia.gov.in/",
                "official_apply_url": "https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink",
                "official_status_url": "https://portal2.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew",
                "official_helpline": "1800 258 1800 (National Call Centre)",
                "official_email": "psp-helpdesk@gov.in",
                "state": "All India",
                "availability": "Online + PSK / POPSK",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.passportindia.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "passport seva",
                        "apply passport",
                        "tatkaal passport",
                        "passport renewal",
                        "passport status",
                        "psk appointment",
                        "mea passport",
                        "পাসপোর্ট সেবা",
                        "পাসপোর্ট আবেদন",
                        "তৎকাল পাসপোর্ট",
                        "পাসপোর্ট রিনিউ",
                        "পাসপোর্ট স্ট্যাটাস",
                        "पासपोर्ट सेवा",
                        "पासपोर्ट ऑनलाइन",
                        "तत्काल पासपोर्ट",
                        "पासपोर्ट स्टेटस"
                ],
                "scam_warning": {
                        "en": "Beware of fraudulent domains pretending to be Passport Seva (.com/.org). The ONLY official website is passportindia.gov.in.",
                        "bn": "পাসপোর্টের নামে ভুয়া .com বা .org ওয়েবসাইট থেকে সাবধান। একমাত্র সরকারি ওয়েবসাইট হলো passportindia.gov.in।",
                        "hi": "पासपोर्ट सेवा की एकमात्र आधिकारिक वेबसाइट passportindia.gov.in है। फर्जी वेबसाइटों से सावधान रहें।"
                }
        },
        {
                "service_id": "parivahan-driving-licence-sarathi",
                "service_name": {
                        "en": "Driving Licence & Parivahan Sarathi Services",
                        "bn": "ড্রাইভিং লাইসেন্স ও পরিবহন সারথি পোর্টাল (MoRTH)",
                        "hi": "ड्राइविंग लाइसेंस और परिवहन सारथी (सड़क परिवहन मंत्रालय)"
                },
                "short_description": {
                        "en": "Official Ministry of Road Transport & Highways portal for Learner's Licence (LL), Driving Licence (DL), renewal, address change, and vehicle registration (Vahan).",
                        "bn": "কেন্দ্রীয় সড়ক ও পরিবহন মন্ত্রকের অফিশিয়াল পোর্টাল: লার্নার লাইসেন্স, স্থায়ী ড্রাইভিং লাইসেন্স, নবীকরণ, ঠিকানা বদল ও টেস্ট স্লট বুকিং।",
                        "hi": "सड़क परिवहन मंत्रालय का आधिकारिक पोर्टल: लर्नर लाइसेंस, ड्राइविंग लाइसेंस, नवीनीकरण और वाहन सेवाएं।"
                },
                "category": "driving-vehicles",
                "category_name": {
                        "en": "Driving Licence & Vehicles",
                        "bn": "ড্রাইভিং লাইসেন্স ও পরিবহন",
                        "hi": "ड्राइविंग लाइसेंस और परिवहन"
                },
                "subcategory": "Parivahan MoRTH",
                "authority": "Ministry of Road Transport and Highways (MoRTH), Govt of India",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "Student",
                        "General Citizen",
                        "Worker"
                ],
                "eligibility": {
                        "en": [
                                "16+ years for gearless two-wheelers (<50cc), 18+ years for light motor vehicles (LMV), 20+ years for transport/commercial vehicles."
                        ],
                        "bn": [
                                "১৮ বছর বা তদূর্ধ্ব সাধারণ গাড়ির লাইসেন্সের জন্য (LMV)।"
                        ],
                        "hi": [
                                "सामान्य कार/मोटरसाइकिल (LMV) के लिए न्यूनतम आयु 18 वर्ष।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Age Proof (Aadhaar, Birth Certificate, Class 10 Certificate, PAN)",
                                "Address Proof (Aadhaar, Electricity bill, Voter ID)",
                                "Medical Certificate (Form 1A for commercial/age 40+)"
                        ],
                        "bn": [
                                "বয়সের প্রমাণপত্র (আধার, জন্ম সার্টিফিকেট, মাধ্যমিক পাস শংসাপত্র)",
                                "ঠিকানার প্রমাণপত্র (আধার, বিদ্যুৎ বিল, ভোটার আইডি)",
                                "মেডিকেল সার্টিফিকেট (Form 1A প্রয়োজন অনুযায়ী)।"
                        ],
                        "hi": [
                                "आयु प्रमाण (आधार, जन्म प्रमाण पत्र)",
                                "पता प्रमाण (आधार, बिजली बिल)",
                                "चिकित्सा प्रमाण पत्र (फॉर्म 1ए)।"
                        ]
                },
                "application_fee": {
                        "en": "Learner Licence (LL): Approx ₹150–₹200 per class of vehicle + test fee. Driving Licence (DL): Approx ₹200 + smart card fee.",
                        "bn": "লার্নার লাইসেন্স: গাড়ি প্রতি প্রায় ₹১৫০–₹২০০ + টেস্ট ফি। পার্মানেন্ট ডিএল: সরকারি নির্ধারিত স্মার্টকার্ড ফি।",
                        "hi": "लर्नर लाइसेंस: लगभग ₹150-₹200 प्रति श्रेणी। स्थायी लाइसेंस: सरकारी शुल्क के अनुसार।"
                },
                "benefits": {
                        "en": [
                                "Legal authorization to drive motor vehicles across India.",
                                "Digital copy valid in DigiLocker and mParivahan apps for traffic checking."
                        ],
                        "bn": [
                                "ভারত জুড়ে বৈধভাবে গাড়ি চালানোর সরকারি অনুমতি।",
                                "ডিজিলকার ও এম-পরিবহন অ্যাপে বৈধ ডিজিটাল কপি।"
                        ],
                        "hi": [
                                "भारत में वाहन चलाने की वैध अनुमति।",
                                "डिजिलॉकर और एम-परिवहन में डिजिटल रूप से मान्य।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit parivahan.gov.in and select 'Driving Licence Related Services'.",
                                "Select State: 'West Bengal' (or your respective state).",
                                "Click 'Apply for Learner Licence (LL)' and choose Aadhaar Authentication mode.",
                                "Fill applicant profile, educational qualification, and vehicle categories (MCWG/LMV).",
                                "Upload supporting documents and pay government fee online.",
                                "Complete online Learner Licence tutorial/test or book slot at RTO.",
                                "After 30 days of holding valid LL, apply for Permanent Driving Licence (DL)."
                        ],
                        "bn": [
                                "parivahan.gov.in পোর্টালে গিয়ে 'Drivers/ Learners License' অপশনে যান।",
                                "রাজ্য নির্বাচন করুন: 'West Bengal'।",
                                "'Apply for Learner Licence' সিলেক্ট করে আধার ভিত্তিক ই-কেওয়াইসি বেছে নিন।",
                                "ব্যক্তিগত তথ্য, শিক্ষাগত যোগ্যতা ও গাড়ির ধরন (MCWG/LMV) পূরণ করুন।",
                                "নথিপত্র আপলোড করে সরকারি ফি অনলাইনে জমা দিন।",
                                "অনলাইন লার্নার টেস্ট দিন অথবা আরটিও টেস্ট স্লট বুক করুন।",
                                "লার্নার পাওয়ার ৩০ দিন পর পার্মানেন্ট ডিএল-এর ড্রাইভিং টেস্টের জন্য আবেদন করুন।"
                        ],
                        "hi": [
                                "parivahan.gov.in पर जाएं और 'Drivers/ Learners License' चुनें।",
                                "राज्य चुनें: 'West Bengal' या अपना राज्य।",
                                "'Apply for Learner Licence' चुनकर आधार प्रमाणीकरण करें।",
                                "विवरण भरें और शुल्क का ऑनलाइन भुगतान करें।",
                                "ऑनलाइन लर्नर टेस्ट पास करें।",
                                "30 दिन बाद स्थायी ड्राइविंग लाइसेंस के लिए आवेदन करें।"
                        ]
                },
                "official_homepage": "https://parivahan.gov.in/",
                "official_apply_url": "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
                "official_status_url": "https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do",
                "official_helpline": "0120 492 5505 (Parivahan Helpdesk)",
                "official_email": "helpdesk-sarathi@gov.in",
                "state": "All India",
                "availability": "Online + RTO",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://parivahan.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "driving licence",
                        "parivahan",
                        "sarathi",
                        "learner licence",
                        "ll apply",
                        "dl test",
                        "rto licence",
                        "vahan",
                        "ড্রাইভিং লাইসেন্স",
                        "লার্নার লাইসেন্স",
                        "পরিবহন",
                        "ডিএল আবেদন",
                        "আরটিও টেস্ট",
                        "ड्राइविंग लाइसेंस",
                        "लर्नर लाइसेंस",
                        "परिवहन सारथी",
                        "डीएल ऑनलाइन"
                ],
                "scam_warning": {
                        "en": "Parivahan permits direct online Learner Licence tests. Never pay corrupt brokers for guaranteed licences.",
                        "bn": "ঘরে বসেই আধার দিয়ে বৈধ লার্নার লাইসেন্স টেস্ট দেওয়া যায়। ভুয়া দালালদের টাকা দেবেন না।",
                        "hi": "घर बैठे आधार द्वारा लर्नर लाइसेंस परीक्षा संभव है। दलालों के झांसे में न आएं।"
                }
        },
        {
                "service_id": "wb-svmcm-scholarship",
                "service_name": {
                        "en": "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM / Bikash Bhavan)",
                        "bn": "স্বামী বিবেকানন্দ মেরিট-কাম-মিনস স্কলারশিপ (SVMCM / বিকাশ ভবন)",
                        "hi": "स्वामी विवेकानंद मेरिट-कम-मीन्स छात्रवृत्ति (SVMCM)"
                },
                "short_description": {
                        "en": "Premier West Bengal Government scholarship providing ₹12,000 to ₹96,000 annually for meritorious students from Class 11, HS, UG, PG, Polytechnic, Engineering, and Medical courses.",
                        "bn": "পশ্চিমবঙ্গ সরকারের অন্যতম প্রধান স্কলারশিপ: একাদশ, দ্বাদশ, স্নাতক, স্নাতকোত্তর, পলিটেকনিক ও মেডিকেলের মেধাবী শিক্ষার্থীদের জন্য বার্ষিক ₹১২,০০০ থেকে ₹৯৬,০০০ পর্যন্ত আর্থিক অনুদান।",
                        "hi": "पश्चिम बंगाल सरकार की प्रमुख छात्रवृत्ति: 11वीं, 12वीं, स्नातक, स्नातकोत्तर, पॉलिटेक्निक और मेडिकल छात्रों के लिए ₹12,000 से ₹96,000 वार्षिक सहायता।"
                },
                "category": "scholarships",
                "category_name": {
                        "en": "Scholarships",
                        "bn": "স্কলারশিপ ও অনুদান",
                        "hi": "छात्रवृत्ति और अनुदान"
                },
                "subcategory": "WB Higher Education",
                "authority": "Department of Higher Education, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scholarship",
                "target_users": [
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "West Bengal resident enrolled in a recognized institution in WB.",
                                "Minimum 60% marks in qualifying examination (Madhyamik / HS / UG).",
                                "Annual family income not exceeding ₹2,50,000."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা এবং রাজ্যের স্বীকৃত প্রতিষ্ঠানে অধ্যয়নরত।",
                                "পূর্ববর্তী চূড়ান্ত পরীক্ষায় ন্যূনতম ৬০% নম্বর (মাধ্যমিক / উচ্চমাধ্যমিক / স্নাতক)।",
                                "পারিবারিক বার্ষিক আয় অনূর্ধ্ব ২.৫ লক্ষ টাকা।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल का स्थायी निवासी छात्र।",
                                "पिछली परीक्षा में न्यूनतम 60% अंक।",
                                "वार्षिक पारिवारिक आय ₹2,50,000 से कम।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mark sheet of Madhyamik examination or equivalent (both sides)",
                                "Mark sheet of last qualifying examination",
                                "Income Certificate (issued by competent authority / BDO / SDO / Joint BDO)",
                                "Admission receipt of current course",
                                "Bank Passbook showing Account No. and IFSC (linked with Aadhaar)",
                                "Aadhaar Card / Domicile Certificate."
                        ],
                        "bn": [
                                "মাধ্যমিক বা সমমানের মার্কশিট (উভয় পিঠ)",
                                "সর্বশেষ উত্তীর্ণ পরীক্ষার মার্কশিট",
                                "সক্ষম কর্তৃপক্ষের দেওয়া পারিবারিক আয়ের শংসাপত্র (BDO / SDO / Joint BDO)",
                                "বর্তমান ক্লাসে ভর্তির রসিদ",
                                "আধার সংযুক্ত ব্যাংক পাসবুকের প্রথম পাতার কপি",
                                "আধার কার্ড / ডোমিসাইল সার্টিফিকেট।"
                        ],
                        "hi": [
                                "माध्यमिक एवं अंतिम उत्तीर्ण परीक्षा की अंकतालिका",
                                "सक्षम अधिकारी द्वारा आय प्रमाण पत्र",
                                "वर्तमान पाठ्यक्रम की प्रवेश रसीद",
                                "बैंक पासबुक (आधार लिंक)",
                                "आधार कार्ड।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No application fee.",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন। কোনো সরকারি বা প্রক্রিয়াকরণ ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क। कोई आवेदन शुल्क नहीं है।"
                },
                "benefits": {
                        "en": [
                                "Direct Benefit Transfer (DBT) of ₹1,000 to ₹8,000 per month directly into student bank account.",
                                "Continuous renewal throughout course completion."
                        ],
                        "bn": [
                                "সরাসরি ব্যাংক অ্যাকাউন্টে প্রতি মাসে ₹১,০০০ থেকে ₹৮,০০০ অনুদান (DBT)।",
                                "কোর্স চলাকালীন প্রতি বছর নবীকরণের সুযোগ।"
                        ],
                        "hi": [
                                "छात्र के बैंक खाते में ₹1,000 से ₹8,000 प्रति माह सीधे डीबीटी द्वारा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official portal svmcm.wb.gov.in.",
                                "Click 'Registration' -> Select Directorate (DSE / DPI / DTE / DPMU).",
                                "Enter qualifying board details, roll number, year of passing, and current admission info.",
                                "Generate Applicant ID and set a secure password.",
                                "Login and fill complete personal, academic, and bank account details.",
                                "Upload scanned copies of required documents and income certificate.",
                                "Submit application and submit physical copy to your school/college for HOI verification."
                        ],
                        "bn": [
                                "অফিসিয়াল svmcm.wb.gov.in পোর্টালে যান।",
                                "'Registration' এ ক্লিক করে সংশ্লিষ্ট ডিরেক্টরেট বেছে নিন।",
                                "পূর্ববর্তী বোর্ডের রোল নম্বর, পাশের সাল ও বর্তমান ভর্তির তথ্য দিন।",
                                "Applicant ID ও পাসওয়ার্ড তৈরি করে লগইন করুন।",
                                "ব্যক্তিগত বিবরণ ও আধার লিংকড ব্যাংক অ্যাকাউন্ট তথ্য পূরণ করুন।",
                                "আয়ের সার্টিফিকেট ও মার্কশিটের স্ক্যান কপি আপলোড করুন।",
                                "আবেদন সাবমিট করে প্রিন্টআউট ও নথিপত্র স্কুল বা কলেজে ভেরিফিকেশনের জন্য জমা দিন।"
                        ],
                        "hi": [
                                "svmcm.wb.gov.in पोर्टल पर जाएं।",
                                "'Registration' पर क्लिक करके आवश्यक विवरण भरें।",
                                "आवेदक आईडी बनाकर लॉगिन करें।",
                                "व्यक्तिगत, शैक्षणिक और बैंक विवरण भरें।",
                                "दस्तावेज़ और आय प्रमाण पत्र अपलोड करें।",
                                "आवेदन सबमिट करें और कॉलेज/स्कूल में सत्यापन के लिए रसीद जमा करें।"
                        ]
                },
                "official_homepage": "https://svmcm.wb.gov.in/",
                "official_apply_url": "https://svmcm.wb.gov.in/",
                "official_status_url": "https://svmcm.wb.gov.in/",
                "official_helpline": "1800 102 8014 (Toll Free Higher Education Helpdesk)",
                "official_email": "helpdesk.svmcm-wb@gov.in",
                "state": "West Bengal",
                "availability": "Online + HOI Institution",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://svmcm.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "svmcm scholarship",
                        "swami vivekananda scholarship",
                        "bikash bhavan scholarship",
                        "wb scholarship",
                        "svmcm renewal",
                        "svmcm status",
                        "স্বামী বিবেকানন্দ স্কলারশিপ",
                        "বিকাশ ভবন স্কলারশিপ",
                        "এসভিএমসিএম",
                        "স্কলারশিপ আবেদন",
                        "स्वामी विवेकानंद स्कॉलरशिप",
                        "विकास भवन छात्रवृत्ति",
                        "एसवीएमसीएम"
                ],
                "scam_warning": {
                        "en": "SVMCM scholarship applications are 100% FREE on svmcm.wb.gov.in. Never share bank OTPs with anyone.",
                        "bn": "SVMCM স্কলারশিপের আবেদন সম্পূর্ণ বিনামূল্যে। ব্যাংক ওটিপি বা পাসওয়ার্ড কাউকে শেয়ার করবেন না।",
                        "hi": "SVMCM छात्रवृत्ति आवेदन पूरी तरह से मुफ्त है। बैंक ओटीपी किसी से साझा न करें।"
                }
        },
        {
                "service_id": "nsp-national-scholarship-portal",
                "service_name": {
                        "en": "National Scholarship Portal (NSP 2.0 / One-Otr)",
                        "bn": "জাতীয় স্কলারশিপ পোর্টাল (NSP 2.0 / কেন্দ্রীয় স্কলারশিপ)",
                        "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP 2.0 / केंद्र सरकार)"
                },
                "short_description": {
                        "en": "Government of India central portal for Pre-Matric, Post-Matric, Merit-cum-Means, Central Sector Schemes, and AICTE Pragati/Saksham scholarships using One-Time Registration (OTR).",
                        "bn": "ভারত সরকারের কেন্দ্রীয় স্কলারশিপ পোর্টাল: প্রাক-মাধ্যমিক, পোস্ট-ম্যাট্রিক, কেন্দ্রীয় স্কলারশিপ ও এআইসিটিই স্কলারশিপের জন্য একক ওয়ান-টাইম রেজিস্ট্রেশন (OTR)।",
                        "hi": "भारत सरकार का केंद्रीय छात्रवृत्ति पोर्टल: प्री-मैट्रिक, पोस्ट-मैट्रिक और एआईसीटीई छात्रवृत्तियों के लिए साझा पंजीकरण मंच।"
                },
                "category": "scholarships",
                "category_name": {
                        "en": "Scholarships",
                        "bn": "স্কলারশিপ ও অনুদান",
                        "hi": "छात्रवृत्ति और अनुदान"
                },
                "subcategory": "Central Scholarships",
                "authority": "Ministry of Electronics & Information Technology / Ministry of Education, Govt of India",
                "government_level": "Central",
                "service_type": "Scholarship",
                "target_users": [
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian students from Class 1 to PhD level meeting specific scheme criteria (Minority, SC/ST, General Merit, Disabilities, Technical Education)."
                        ],
                        "bn": [
                                "প্রথম শ্রেণি থেকে পিএইচডি পর্যন্ত ভারতীয় শিক্ষার্থী যারা সংশ্লিষ্ট প্রকল্পের মানদণ্ড পূরণ করেন।"
                        ],
                        "hi": [
                                "कक्षा 1 से पीएचडी तक के भारतीय छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card (Mandatory for OTR with facial authentication or biometric)",
                                "Student Photograph",
                                "Educational Marksheet",
                                "Income Certificate",
                                "Caste / Category Certificate (if applicable)",
                                "Bank Account Passbook."
                        ],
                        "bn": [
                                "আধার কার্ড (OTR বায়োমেট্রিক বা ফেস অথেনটিকেশনের জন্য আবশ্যক)",
                                "পাসপোর্ট ছবি",
                                "মার্কশিট",
                                "আয়ের সার্টিফিকেট",
                                "জাতিগত শংসাপত্র (প্রযোজ্য ক্ষেত্রে)",
                                "ব্যাংক পাসবুক।"
                        ],
                        "hi": [
                                "आधार कार्ड (ओटीआर के लिए अनिवार्य)",
                                "फोटो",
                                "अंकतालिका",
                                "आय प्रमाण पत्र",
                                "जाति प्रमाण पत्र",
                                "बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost on scholarships.gov.in.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি পোর্টালে আবেদন।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Full tuition fee waivers, maintenance allowances, and academic stipends paid through direct Aadhaar-based DBT."
                        ],
                        "bn": [
                                "সম্পূর্ণ টিউশন ফি ছাড়, পড়ার খরচ ও মাসিক স্টাইপেন্ড সরাসরি আধার-সংযুক্ত ব্যাংক অ্যাকাউন্টে জমা।"
                        ],
                        "hi": [
                                "ट्यूशन फीस में छूट और मासिक वजीफा सीधे बैंक खाते में।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Download NSP OTR App from Google Play Store or visit scholarships.gov.in.",
                                "Complete One-Time Registration (OTR) using Aadhaar Face Authentication.",
                                "Obtain 14-digit OTR Number and set password.",
                                "Login on scholarships.gov.in with OTR credentials.",
                                "Fill application, select eligible Central / UGC / AICTE scheme.",
                                "Upload necessary supporting documents and submit.",
                                "Track institutional and state nodal officer verification online."
                        ],
                        "bn": [
                                "scholarships.gov.in পোর্টালে যান বা NSP OTR অ্যাপের মাধ্যমে রেজিস্ট্রেশন করুন।",
                                "আধার ফেস রিকগনিশন দিয়ে One-Time Registration (OTR) সম্পন্ন করুন।",
                                "১৪ সংখ্যার OTR নম্বর সংগ্রহ করে লগইন করুন।",
                                "পছন্দের কেন্দ্রীয় বা এআইসিটিই স্কলারশিপ প্রকল্প নির্বাচন করুন।",
                                "নথিপত্র আপলোড করে সাবমিট করুন।",
                                "প্রতিষ্ঠান ও নোডাল অফিসারের ভেরিফিকেশন স্ট্যাটাস অনলাইনে ট্র্যাক করুন।"
                        ],
                        "hi": [
                                "scholarships.gov.in पर जाएं या NSP OTR ऐप द्वारा पंजीकरण करें।",
                                "आधार फेस ऑथेंटिकेशन द्वारा One-Time Registration (OTR) पूरा करें।",
                                "14 अंकों का OTR नंबर प्राप्त कर लॉगिन करें।",
                                "योग्य योजना चुनें और दस्तावेज अपलोड करें।",
                                "आवेदन सबमिट करके ऑनलाइन स्थिति जांचें।"
                        ]
                },
                "official_homepage": "https://scholarships.gov.in/",
                "official_apply_url": "https://scholarships.gov.in/fresh/newstdRegfrmInstruction",
                "official_status_url": "https://scholarships.gov.in/login",
                "official_helpline": "0120 6619540 (NSP Helpdesk)",
                "official_email": "helpdesk@nsp.gov.in",
                "state": "All India",
                "availability": "Online + Institute",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://scholarships.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "nsp scholarship",
                        "national scholarship portal",
                        "otr registration",
                        "central scholarship",
                        "aicte pragati",
                        "post matric scholarship",
                        "জাতীয় স্কলারশিপ",
                        "এনএসপি স্কলারশিপ",
                        "ওটিআর রেজিস্ট্রেশন",
                        "কেন্দ্রীয় স্কলারশিপ",
                        "राष्ट्रीय छात्रवृत्ति",
                        "एनएसपी पोर्टल",
                        "ओटीआर पंजीकरण"
                ],
                "scam_warning": {
                        "en": "NSP applications are handled ONLY on scholarships.gov.in. Do not trust third party mobile APKs.",
                        "bn": "NSP স্কলারশিপের একমাত্র অফিসিয়াল পোর্টাল scholarships.gov.in। অপরিচিত কোনো APK ডাউনলোড করবেন না।",
                        "hi": "NSP छात्रवृत्ति केवल scholarships.gov.in पर उपलब्ध है। किसी अनजान ऐप पर भरोसा न करें।"
                }
        },
        {
                "service_id": "ssc-recruitment-cgl-chsl-gd",
                "service_name": {
                        "en": "Staff Selection Commission (SSC — CGL, CHSL, MTS, GD)",
                        "bn": "স্টাফ সিলেকশন কমিশন (SSC — সিজিএল, সিএইচএসএল, এমটিএস, জিডি)",
                        "hi": "कर्मचारी चयन आयोग (SSC — CGL, CHSL, MTS, GD)"
                },
                "short_description": {
                        "en": "Official Staff Selection Commission one-stop portal for Central Government recruitment examinations: CGL (Graduate), CHSL (12th Pass), MTS (10th Pass), and GD Constable.",
                        "bn": "কেন্দ্রীয় সরকারের সরকারি চাকরি নিয়োগ পোর্টাল: সিজিএল (স্নাতক), সিএইচএসএল (দ্বাদশ শ্রেণী), এমটিএস (মাধ্যমিক) ও জিডি কনস্টেবল পরীক্ষা।",
                        "hi": "केंद्र सरकार की प्रमुख भर्ती परीक्षाएं: सीजीएल (स्नातक), सीएचएसएल (12वीं पास), एमटीएस (10वीं पास) और जीडी कांस्टेबल।"
                },
                "category": "govt-jobs-central",
                "category_name": {
                        "en": "Central Govt Jobs (SSC/UPSC)",
                        "bn": "কেন্দ্রীয় সরকারি চাকরি",
                        "hi": "केंद्रीय सरकारी परीक्षाएं"
                },
                "subcategory": "Staff Selection Commission",
                "authority": "Staff Selection Commission, Department of Personnel and Training (DoPT), Govt of India",
                "government_level": "Central",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian citizen.",
                                "MTS: 10th Pass (18-25/27 yrs).",
                                "CHSL: 12th Pass (18-27 yrs).",
                                "CGL: Graduation (18-32 yrs).",
                                "Age relaxations applicable for SC/ST/OBC/PwD/ExS."
                        ],
                        "bn": [
                                "ভারতীয় নাগরিক।",
                                "এমটিএস: মাধ্যমিক পাশ (১৮-২৫/২৭ বছর)।",
                                "সিএইচএসএল: উচ্চমাধ্যমিক পাশ (১৮-২৭ বছর)।",
                                "সিজিএল: স্নাতক ডিগ্রি (১৮-৩২ বছর)।",
                                "সংরক্ষিত শ্রেণির জন্য বয়স ছাড় প্রযোজ্য।"
                        ],
                        "hi": [
                                "भारतीय नागरिक।",
                                "एमटीएस: 10वीं पास।",
                                "सीएचएसएल: 12वीं पास।",
                                "सीजीएल: स्नातक।",
                                "नियमानुसार आयु में छूट।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Matriculation (10th) Certificate for DOB verification",
                                "Educational Qualification certificates",
                                "Aadhaar / Voter / PAN Card",
                                "Caste / Category certificate",
                                "Live webcam photo & scanned signature."
                        ],
                        "bn": [
                                "মাধ্যমিক সার্টিফিকেট (বয়সের প্রমাণের জন্য)",
                                "শিক্ষাগত যোগ্যতার সার্টিফিকেট ও মার্কশিট",
                                "আধার / ভোটার / প্যান কার্ড",
                                "জাতিগত শংসাপত্র (প্রযোজ্য ক্ষেত্রে)",
                                "লাইভ ওয়েবক্যাম ছবি ও স্বাক্ষর।"
                        ],
                        "hi": [
                                "10वीं का प्रमाण पत्र (जन्म तिथि हेतु)",
                                "शैक्षणिक योग्यता प्रमाण पत्र",
                                "आधार / पहचान पत्र",
                                "जाति प्रमाण पत्र",
                                "लाइव फोटो और हस्ताक्षर।"
                        ]
                },
                "application_fee": {
                        "en": "₹100 for General/OBC Male candidates. Women, SC, ST, PwD, and Ex-Servicemen: 100% Exempted (₹0).",
                        "bn": "জেনারেল/ওবিসি পুরুষ প্রার্থীদের জন্য ₹১০০। মহিলা, তফশিলি জাতি, তফশিলি উপজাতি, প্রতিবন্ধী ও প্রাক্তন সৈনিকদের জন্য সম্পূর্ণ ফ্রি (₹০)।",
                        "hi": "सामान्य/ओबीसी पुरुष: ₹100। महिला, एससी, एसटी, दिव्यांग: पूर्णतः निःशुल्क (₹0)।"
                },
                "benefits": {
                        "en": [
                                "Permanent Central Government Group B and C gazetted & non-gazetted posts with full pension, DA, HRA, and medical benefits."
                        ],
                        "bn": [
                                "কেন্দ্রীয় সরকারের স্থায়ী গ্রুপ 'বি' ও 'সি' পদে নিশ্চিত ক্যারিয়ার, সরকারি সুযোগ-সুবিধা ও ভাতা।"
                        ],
                        "hi": [
                                "केंद्र सरकार में स्थायी ग्रुप बी और सी पद, भत्ते और सुविधाएं।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit ssc.gov.in and complete One-Time Registration (OTR).",
                                "Capture live photograph using webcam/mobile app and upload signature.",
                                "Login to your dashboard and navigate to 'Live Examinations'.",
                                "Click 'Apply' on the active notification (e.g. CGL, CHSL, MTS).",
                                "Choose exam centers, language of CBT (Bengali/Hindi/English available), and verify details.",
                                "Pay ₹100 fee online (if applicable) and submit.",
                                "Download confirmation page and track admit card release."
                        ],
                        "bn": [
                                "অফিসিয়াল ssc.gov.in পোর্টালে গিয়ে One-Time Registration (OTR) সম্পন্ন করুন।",
                                "লাইভ ছবি ক্যাপচার করুন ও ডিজিটাল স্বাক্ষর আপলোড করুন।",
                                "ড্যাশবোর্ডে গিয়ে 'Live Examinations' সেকশন দেখুন।",
                                "বিজ্ঞপ্তি অনুযায়ী 'Apply' বাটনে ক্লিক করুন (যেমন CGL, CHSL, MTS)।",
                                "পরীক্ষা কেন্দ্র ও পরীক্ষার ভাষা (বাংলা/হিন্দি/ইংরেজি) পছন্দ করুন।",
                                "প্রযোজ্য ক্ষেত্রে ₹১০০ ফি পেমেন্ট করে সাবমিট করুন।",
                                "কনফার্মেশন পেজ ডাউনলোড করে অ্যাডমিটের জন্য অপেক্ষা করুন।"
                        ],
                        "hi": [
                                "ssc.gov.in पर OTR पंजीकरण पूरा करें।",
                                "लाइव फोटो और हस्ताक्षर अपलोड करें।",
                                "सक्रिय परीक्षा अधिसूचना (CGL/CHSL/MTS) पर 'Apply' करें।",
                                "परीक्षा केंद्र और भाषा (हिंदी/अंग्रेजी/क्षेत्रीय भाषा) चुनें।",
                                "शुल्क का भुगतान करें और फॉर्म सबमिट करें।",
                                "प्रिंट आउट सुरक्षित रखें।"
                        ]
                },
                "official_homepage": "https://ssc.gov.in/",
                "official_apply_url": "https://ssc.gov.in/login",
                "official_status_url": "https://ssc.gov.in/candidate-portal/application-status",
                "official_helpline": "1800 309 3063 (SSC National Toll Free)",
                "official_email": "enquiry-ssc@gov.in",
                "state": "All India",
                "availability": "Online CBT Examination",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://ssc.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "ssc",
                        "ssc cgl",
                        "ssc chsl",
                        "ssc mts",
                        "ssc gd",
                        "ssc otr",
                        "govt jobs after 12th",
                        "central govt jobs",
                        "ssc exam",
                        "এসএসসি",
                        "এসএসসি সিজিএল",
                        "এসএসসি সিএইচএসএল",
                        "এসএসসি এমটিএস",
                        "কেন্দ্রীয় সরকারি চাকরি",
                        "১২ পাশের সরকারি চাকরি",
                        "एसएससी",
                        "एसएससी सीजीएल",
                        "एसएससी सीएचएसएल",
                        "एसएससी एमटीएस",
                        "सरकारी नौकरी"
                ],
                "scam_warning": {
                        "en": "SSC selection is purely merit-based via computer-based exams. Never give bribes or believe job-guarantee rackets.",
                        "bn": "এসএসসি-তে চাকরি সম্পূর্ণ মেধার ভিত্তিতে কম্পিউটারে পরীক্ষার মাধ্যমে হয়। কোনো দালাল বা চাকরির প্রলোভনে টাকা দেবেন না।",
                        "hi": "एसएससी में चयन केवल योग्यता के आधार पर होता है। नौकरी के नाम पर पैसे मांगने वाले ठगों से सावधान रहें।"
                }
        },
        {
                "service_id": "wb-swasthya-sathi-scheme",
                "service_name": {
                        "en": "Swasthya Sathi Health Card (West Bengal)",
                        "bn": "স্বাস্থ্য সাথী স্বাস্থ্য সুরক্ষা কার্ড (পশ্চিমবঙ্গ সরকার)",
                        "hi": "स्वास्थ्य साथी योजना (पश्चिम बंगाल सरकार)"
                },
                "short_description": {
                        "en": "Flagship universal health assurance scheme of West Bengal offering cashless hospitalization coverage up to ₹5 Lakh per family per year in empaneled hospitals, issued in the name of the female head of the family.",
                        "bn": "পশ্চিমবঙ্গ সরকারের সর্বজনীন স্বাস্থ্য প্রকল্প: তালিকাভুক্ত সরকারি ও বেসরকারি হাসপাতালে পরিবারের প্রতি বছর ₹৫ লক্ষ পর্যন্ত বিনামূল্যে ক্যাশলেস চিকিৎসার সুবিধা (পরিবারের নারী প্রধানের নামে কার্ড)।",
                        "hi": "पश्चिम बंगाल सरकार की स्वास्थ्य योजना: परिवार के लिए प्रति वर्ष ₹5 लाख तक का कैशलेस अस्पताल इलाज।"
                },
                "category": "healthcare",
                "category_name": {
                        "en": "Healthcare & Insurance",
                        "bn": "স্বাস্থ্যসেবা ও বীমা",
                        "hi": "स्वास्थ्य सेवा और बीमा"
                },
                "subcategory": "State Health Scheme",
                "authority": "Department of Health & Family Welfare, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "General Citizen",
                        "Woman",
                        "Senior Citizen",
                        "Farmer",
                        "Worker"
                ],
                "eligibility": {
                        "en": [
                                "All permanent resident families of West Bengal not covered under any other statutory government health reimbursement scheme."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত স্থায়ী বাসিন্দা পরিবার (সরকারি কর্মচারী বা অন্য সরকারি স্বাস্থ্য প্রকল্পের অন্তর্ভুক্ত ছাড়া)।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के सभी स्थायी निवासी परिवार।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Cards of all family members",
                                "Digital Ration Card / Khadya Sathi Card",
                                "Voter ID Card",
                                "Proof of Residence."
                        ],
                        "bn": [
                                "পরিবারের সকল সদস্যের আধার কার্ড",
                                "ডিজিটাল রেশন কার্ডের কপি",
                                "ভোটার আইডি কার্ড",
                                "বাসস্থানের প্রমাণপত্র।"
                        ],
                        "hi": [
                                "सभी सदस्यों के आधार कार्ड",
                                "राशन कार्ड",
                                "वोटर आईडी कार्ड।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Entire premium is paid by the Government of West Bengal.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। সম্পূর্ণ প্রিমিয়াম পশ্চিমবঙ্গ সরকার বহন করে।",
                        "hi": "पूर्णतः निःशुल्क। पूरा प्रीमियम सरकार वहन करती है।"
                },
                "benefits": {
                        "en": [
                                "Cashless indoor hospitalization up to ₹5,00,000 annually per family.",
                                "Pre-existing diseases covered from day one.",
                                "Over 2,200+ empaneled private and government hospitals."
                        ],
                        "bn": [
                                "প্রতি পরিবারে প্রতি বছর ₹৫ লক্ষ পর্যন্ত ক্যাশলেস চিকিৎসা।",
                                "প্রথম দিন থেকেই সমস্ত পুরনো রোগ কভারড।",
                                "রাজ্য ও বাইরের হাজার হাজার তালিকাভুক্ত হাসপাতালে চিকিৎসা।"
                        ],
                        "hi": [
                                "प्रति परिवार प्रति वर्ष ₹5 लाख तक कैशलेस इलाज।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Check enrollment status on swasthyasathi.gov.in using your Aadhaar or Ration Card number.",
                                "If not enrolled, apply via Form B during local Duare Sarkar camps or through BDO / Municipality office.",
                                "Attend scheduled camp for smart card biometric enrollment and photograph.",
                                "Collect laminated Smart Card on the spot.",
                                "To find nearby hospital: Visit website -> 'Active Hospital List'.",
                                "Show Swasthya Sathi card at hospital helpdesk for cashless admission."
                        ],
                        "bn": [
                                "swasthyasathi.gov.in পোর্টালে গিয়ে আধার বা রেশন কার্ড নম্বর দিয়ে কার্ডের স্থিতি চেক করুন।",
                                "নতুন কার্ডের জন্য 'দুয়ারে সরকার' ক্যাম্প বা স্থানীয় BDO/পৌরসভায় 'Form B' জমা দিন।",
                                "নির্দিষ্ট দিনে ক্যাম্পে গিয়ে বায়োমেট্রিক ও ছবি তুলে কার্ড সংগ্রহ করুন।",
                                "হাসপাতাল খুঁজতে: ওয়েবসাইটে 'Hospital Network' দেখুন।",
                                "হাসপাতালে স্বাস্থ্যসাথী কিয়স্কে কার্ড দেখিয়ে ক্যাশলেস চিকিৎসা পরিষেবা গ্রহণ করুন।"
                        ],
                        "hi": [
                                "swasthyasathi.gov.in पर जाकर आधार या राशन नंबर से स्थिति जांचें।",
                                "दुआरे सरकार शिविर या बीडीओ कार्यालय में फॉर्म बी जमा करें।",
                                "बायोमेट्रिक देकर स्मार्ट कार्ड प्राप्त करें।",
                                "अस्पताल में कार्ड दिखाकर कैशलेस इलाज पाएं।"
                        ]
                },
                "official_homepage": "https://swasthyasathi.gov.in/",
                "official_apply_url": "https://swasthyasathi.gov.in/",
                "official_status_url": "https://swasthyasathi.gov.in/Home/FindYourName",
                "official_helpline": "1800 345 5384 (24x7 Toll Free Toll Free)",
                "official_email": "swasthyasathi-wb@gov.in",
                "state": "West Bengal",
                "availability": "Online + Duare Sarkar Camps",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://swasthyasathi.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "swasthya sathi",
                        "swasthyasathi card",
                        "wb health card",
                        "cashless treatment",
                        "duare sarkar swasthya sathi",
                        "hospital list",
                        "স্বাস্থ্য সাথী",
                        "স্বাস্থ্য সাথী কার্ড",
                        "বিনামূল্যে চিকিৎসা",
                        "দুয়ারে সরকার স্বাস্থ্য সাথী",
                        "হাসপাতাল লিস্ট",
                        "स्वास्थ्य साथी",
                        "स्वास्थ्य साथी कार्ड",
                        "कैशलेस इलाज"
                ],
                "scam_warning": {
                        "en": "Swasthya Sathi cards are issued FREE by the State Government. No hospital can charge cash for eligible packages.",
                        "bn": "স্বাস্থ্যসাথী কার্ড সম্পূর্ণ বিনামূল্যে দেওয়া হয়। তালিকাভুক্ত প্যাকেজের জন্য কোনো হাসপাতাল বাড়তি টাকা নিতে পারে না।",
                        "hi": "स्वास्थ्य साथी कार्ड निःशुल्क बनता है। किसी को पैसे न दें।"
                }
        },
        {
                "service_id": "pm-kisan-krishak-bandhu",
                "service_name": {
                        "en": "PM-KISAN Samman Nidhi & Krishak Bandhu (WB)",
                        "bn": "পিএম-কিসান সম্মান নিধি ও কৃষক বন্ধু প্রকল্প (পশ্চিমবঙ্গ)",
                        "hi": "पीएम-किसान सम्मान निधि और कृषक बंधु योजना"
                },
                "short_description": {
                        "en": "Direct financial assistance schemes for farmers: PM-KISAN (₹6,000/year in 3 installments) and West Bengal Krishak Bandhu (₹10,000/year + ₹2 Lakh death benefit).",
                        "bn": "কৃষকদের প্রত্যক্ষ আর্থিক সহায়তা প্রকল্প: কেন্দ্রীয় পিএম-কিসান (বার্ষিক ₹৬,০০০) এবং পশ্চিমবঙ্গ সরকারের কৃষক বন্ধু প্রকল্প (বার্ষিক ₹১০,০০০ অনুদান ও ₹২ লক্ষ মৃত্যুকালীন সুরক্ষা)।",
                        "hi": "किसानों के लिए प्रत्यक्ष वित्तीय सहायता: पीएम-किसान (₹6,000/वर्ष) और कृषक बंधु (₹10,000/वर्ष)।"
                },
                "category": "agriculture",
                "category_name": {
                        "en": "Farmers & Agriculture",
                        "bn": "কৃষক ও কৃষি সেবা",
                        "hi": "किसान और कृषि"
                },
                "subcategory": "Farmer Direct Benefit",
                "authority": "Ministry of Agriculture (Govt of India) / Agriculture Dept (Govt of WB)",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "Farmer"
                ],
                "eligibility": {
                        "en": [
                                "Small and marginal farmers holding cultivable land in their name in revenue records.",
                                "e-KYC mandatory with Aadhaar."
                        ],
                        "bn": [
                                "নিজ নামে চাষযোগ্য জমির মালিক কৃষকবৃন্দ।",
                                "আধারের মাধ্যমে e-KYC সম্পন্ন থাকা বাধ্যতামূলক।"
                        ],
                        "hi": [
                                "खेती योग्य भूमि रखने वाले किसान। आधार ई-केवाईसी अनिवार्य।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card",
                                "Land Records (Banglarbhumi Khatian / Porcha / ROR)",
                                "Bank Account Passbook (Aadhaar linked for DBT)",
                                "Active Mobile Number."
                        ],
                        "bn": [
                                "আধার কার্ড",
                                "জমির পর্চা / খতিয়ান / খতিয়ানের কপি (বাংলারভূমি)",
                                "আধার লিংকড ব্যাংক পাসবুক",
                                "সচল মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "आधार कार्ड",
                                "भूमि रिकॉर्ड (खतियान / पर्चा)",
                                "बैंक पासबुक",
                                "मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি পোর্টালে আবেদন।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "PM-KISAN: ₹6,000 annually in 3 equal payments of ₹2,000.",
                                "Krishak Bandhu: Up to ₹10,000 annually (₹5,000 in Kharif + ₹5,000 in Rabi) + ₹2,00,000 Life Insurance."
                        ],
                        "bn": [
                                "পিএম কিসান: বছরে ₹৬,০০০ (৩ কিস্তিতে ₹২,০০০ করে)।",
                                "কৃষক বন্ধু: বছরে সর্বাধিক ₹১০,০০০ (খারিফ ও রবি মরশুমে) এবং কৃষকের মৃত্যুতে পরিবারকে ₹২ লক্ষ টাকা আর্থিক সাহায্য।"
                        ],
                        "hi": [
                                "पीएम किसान: ₹6,000 प्रति वर्ष। कृषक बंधु: ₹10,000 प्रति वर्ष और ₹2 लाख का बीमा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "For PM-KISAN: Visit pmkisan.gov.in -> 'New Farmer Registration'.",
                                "Enter Aadhaar Number, Select State & District, and authenticate OTP.",
                                "Fill land details (Khasra/Khatian No.) and submit.",
                                "Complete mandatory OTP-based or biometric e-KYC.",
                                "For Krishak Bandhu (WB): Visit krishakbandhu.wb.gov.in or submit form at Block ADA office.",
                                "Check disbursement status online using Voter ID or Aadhaar."
                        ],
                        "bn": [
                                "PM-KISAN এর জন্য: pmkisan.gov.in পোর্টালে 'New Farmer Registration' এ যান।",
                                "আধার নম্বর লিখে ওটিপি দিয়ে বিবরণ ও জমির দাগ-খতিয়ান নম্বর পূরণ করুন।",
                                "অবশ্যই e-KYC সম্পূর্ণ করুন।",
                                "কৃষক বন্ধু (পশ্চিমবঙ্গ) এর জন্য: krishakbandhu.wb.gov.in অথবা স্থানীয় ব্লকের সহ-কৃষি অধিকর্তার (ADA) অফিসে যোগাযোগ করুন।",
                                "অনলাইনে ভোটার বা আধার নম্বর দিয়ে টাকার স্থিতি চেক করুন।"
                        ],
                        "hi": [
                                "pmkisan.gov.in पर जाकर 'New Farmer Registration' चुनें।",
                                "आधार नंबर और जमीन का विवरण भरें।",
                                "अनिवार्य ई-केवाईसी पूरा करें।",
                                "कृषक बंधु के लिए krishakbandhu.wb.gov.in या ब्लॉक कृषि कार्यालय से संपर्क करें।"
                        ]
                },
                "official_homepage": "https://pmkisan.gov.in/",
                "official_apply_url": "https://pmkisan.gov.in/RegistrationFormNew.aspx",
                "official_status_url": "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx",
                "official_helpline": "155261 / 1800 115 526 (PM-KISAN) / 8336957370 (Krishak Bandhu)",
                "official_email": "pmkisan-ict@gov.in",
                "state": "West Bengal",
                "availability": "Online + Block ADA Office",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://pmkisan.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "pm kisan",
                        "krishak bandhu",
                        "farmer scheme",
                        "pm kisan ekyc",
                        "krishak bandhu status",
                        "kisan samman nidhi",
                        "পিএম কিসান",
                        "কৃষক বন্ধু",
                        "কৃষক প্রকল্প",
                        "পিএম কিসান কেওয়াইসি",
                        "কৃষক বন্ধু স্ট্যাটাস",
                        "पीएम किसान",
                        "कृषक बंधु",
                        "किसान सम्मान निधि",
                        "किसान योजना"
                ],
                "scam_warning": {
                        "en": "Beware of fake SMS claiming PM-KISAN installment holds. Official disbursements occur ONLY through DBT.",
                        "bn": "পিএম-কিসানের কিস্তি আটকে থাকার ভুয়া মেসেজ বা লিংকে ক্লিক করবেন না। টাকা সরাসরি ব্যাংকে আসে।",
                        "hi": "पीएम किसान किस्त के नाम पर आने वाले फर्जी मैसेज या लिंक से सावधान रहें।"
                }
        },
        {
                "service_id": "national-cyber-crime-portal-1930",
                "service_name": {
                        "en": "National Cyber Crime Reporting Portal & Helpline 1930",
                        "bn": "জাতীয় সাইবার অপরাধ রিপোর্টিং পোর্টাল ও হেল্পলাইন ১৯৩০",
                        "hi": "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल एवं हेल्पलाइन 1930"
                },
                "short_description": {
                        "en": "Official Ministry of Home Affairs emergency portal and 1930 helpline to report financial cyber fraud, online scams, identity theft, and cyber crimes against women and children.",
                        "bn": "কেন্দ্রীয় স্বরাষ্ট্র মন্ত্রকের জরুরি পোর্টাল ও ১৯৩০ হেল্পলাইন: অনলাইন আর্থিক জালিয়াতি, ওটিপি স্ক্যাম, ব্ল্যাকমেলিং ও সাইবার অপরাধ রুখতে দ্রুত রিপোর্ট করার প্ল্যাটফর্ম।",
                        "hi": "गृह मंत्रालय का आधिकारिक पोर्टल और 1930 हेल्पलाइन: ऑनलाइन वित्तीय धोखाधड़ी और साइबर अपराधों की तत्काल रिपोर्टिंग।"
                },
                "category": "police-cyber",
                "category_name": {
                        "en": "Police & Cyber Crime",
                        "bn": "পুলিশ ও সাইবার ক্রাইম",
                        "hi": "पुलिस और साइबर क्राइम"
                },
                "subcategory": "Emergency Cyber Response",
                "authority": "Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs, Govt of India",
                "government_level": "Central",
                "service_type": "Legal",
                "target_users": [
                        "General Citizen",
                        "Student",
                        "Senior Citizen",
                        "Woman",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Any citizen who is a victim of online financial fraud, identity theft, cyberstalking, or unauthorized digital transactions."
                        ],
                        "bn": [
                                "অনলাইন আর্থিক প্রতারণা, ওটিপি স্ক্যাম বা সাইবার অপরাধের শিকার যেকোনো নাগরিক।"
                        ],
                        "hi": [
                                "साइबर धोखाधड़ी या वित्तीय अपराध का शिकार कोई भी नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Transaction reference / UTR number",
                                "Bank account / UPI ID details of victim and fraudster (if available)",
                                "Screenshots of fraudulent chats, SMS, emails, or fake URLs",
                                "Aadhaar / Identity proof of complainant."
                        ],
                        "bn": [
                                "ব্যাংক লেনদেন বা ইউটিআর (UTR) নম্বর",
                                "প্রতারকের ইউপিআই বা ব্যাংক অ্যাকাউন্ট বিবরণ (থাকলে)",
                                "প্রতারণামূলক মেসেজ, চ্যাট বা ভুয়ো ওয়েবসাইটের স্ক্রিনশট",
                                "অভিযোগকারীর পরিচয়পত্র।"
                        ],
                        "hi": [
                                "लेनदेन संदर्भ (UTR) संख्या",
                                "धोखेबाज का यूपीआई/बैंक विवरण",
                                "चैट, मैसेज या फर्जी लिंक के स्क्रीनशॉट।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি আইনি পরিষেবা।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Immediate freezing of stolen funds in the fraudster's bank/wallet within the 'Golden Hour' via 1930 helpline.",
                                "Official FIR registration and police investigation."
                        ],
                        "bn": [
                                "১৯৩০ নম্বরে ফোন করে 'গোল্ডেন আওয়ারের' মধ্যে চুরি হওয়া টাকা প্রতারকের ব্যাংক বা ওয়ালেটে ফ্রিজ বা আটকে দেওয়া।",
                                "সরকারি এফআইআর ও পুলিশি তদন্তের সূচনা।"
                        ],
                        "hi": [
                                "1930 पर तुरंत कॉल करके धोखेबाज के बैंक खाते में राशि फ्रीज करवाना।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "In case of financial fraud: Call 1930 IMMEDIATELY (within 2-4 hours).",
                                "Provide transaction details, debit bank account, and fraudster details to the operator.",
                                "The Citizen Financial Cyber Fraud Reporting System will initiate an automatic freeze request to the recipient bank.",
                                "You will receive an SMS with an Acknowledgement Number.",
                                "Visit cybercrime.gov.in within 24 hours to complete detailed formal complaint filing.",
                                "Upload transaction receipts, chat screenshots, and phone numbers.",
                                "Track investigation and court refund procedures online."
                        ],
                        "bn": [
                                "আর্থিক প্রতারণার সাথে সাথে: অবিলম্বে ১৯৩০ নম্বরে কল করুন (প্রথম ২-৪ ঘণ্টার মধ্যে)।",
                                "অপারেটরকে লেনদেনের তথ্য, ব্যাংক অ্যাকাউন্ট ও প্রতারকের নম্বর জানান।",
                                "সিস্টেম স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট ব্যাংকে প্রতারকের অ্যাকাউন্ট ফ্রিজ করার নির্দেশ পাঠাবে।",
                                "মোবাইলে আসা Acknowledgement Number দিয়ে ২৪ ঘণ্টার মধ্যে cybercrime.gov.in এ বিস্তারিত অভিযোগ জমা দিন।",
                                "নথিপত্র ও স্ক্রিনশট আপলোড করুন।",
                                "অনলাইনে তদন্তের অগ্রগতি ট্র্যাক করুন।"
                        ],
                        "hi": [
                                "धोखाधड़ी होते ही तुरंत 1930 पर कॉल करें।",
                                "लेनदेन और खाते का विवरण बताएं।",
                                "प्राप्त संदर्भ संख्या के साथ 24 घंटे के भीतर cybercrime.gov.in पर पूरी शिकायत दर्ज करें।",
                                "स्क्रीनशॉट और बैंक स्टेटमेंट अपलोड करें।"
                        ]
                },
                "official_homepage": "https://cybercrime.gov.in/",
                "official_apply_url": "https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx",
                "official_status_url": "https://cybercrime.gov.in/Webform/CheckStatus.aspx",
                "official_helpline": "1930 (National Cyber Crime Helpline — 24x7)",
                "official_email": "cybercrime-incident@gov.in",
                "state": "All India",
                "availability": "Online + 24x7 Phone Helpline",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://cybercrime.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "cyber crime",
                        "1930 helpline",
                        "online fraud",
                        "report scam",
                        "upi fraud",
                        "bank account hack",
                        "cybercrime portal",
                        "সাইবার ক্রাইম",
                        "১৯৩০ হেল্পলাইন",
                        "অনলাইন প্রতারণা",
                        "ইউপিআই ফ্রড",
                        "টাকা চুরি",
                        "সাইবার থানা",
                        "साइबर क्राइम",
                        "1930 हेल्पलाइन",
                        "ऑनलाइन फ्रॉड",
                        "साइबर धोखाधड़ी"
                ],
                "scam_warning": {
                        "en": "The official National Cyber Crime helpline is 1930. Never contact unverified fake police numbers on social media.",
                        "bn": "জাতীয় সাইবার ক্রাইম হেল্পলাইনের একমাত্র নম্বর ১৯৩০। সোশ্যাল মিডিয়ার কোনো ভুয়ো পুলিশ নম্বরে বিশ্বাস করবেন না।",
                        "hi": "राष्ट्रीय साइबर क्राइम का आधिकारिक नंबर 1930 है। सोशल मीडिया पर फर्जी नंबरों से बचें।"
                }
        },
        {
                "service_id": "wbcap-centralized-admission",
                "service_name": {
                        "en": "WB Centralized UG Admission Portal (WBCAP)",
                        "bn": "পশ্চিমবঙ্গ কেন্দ্রীয় স্নাতক ভর্তি পোর্টাল (WBCAP)",
                        "hi": "पश्चिम बंगाल केंद्रीकृत स्नातक प्रवेश पोर्टल (WBCAP)"
                },
                "short_description": {
                        "en": "Official single-window centralized admission portal for Undergraduate (BA, BSc, BCom, Professional) courses across all 460+ Government and Aided Colleges in West Bengal.",
                        "bn": "পশ্চিমবঙ্গের ৪৬০+ সরকারি ও সরকার-পোষিত কলেজে স্নাতক (বিএ, বিএসসি, বিকম) কোর্সে ভর্তির জন্য একক কেন্দ্রীয় অনলাইন পোর্টাল।",
                        "hi": "पश्चिम बंगाल के सभी सरकारी और सहायता प्राप्त कॉलेजों में स्नातक पाठ्यक्रमों में प्रवेश के लिए साझा पोर्टल।"
                },
                "category": "college-admission",
                "category_name": {
                        "en": "College & University Admission",
                        "bn": "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি",
                        "hi": "कॉलेज और विश्वविद्यालय प्रवेश"
                },
                "subcategory": "Undergraduate Admission",
                "authority": "Department of Higher Education, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Admission",
                "target_users": [
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Passed Higher Secondary (10+2) from WBCHSE, CBSE, ISC, or recognized national/state boards."
                        ],
                        "bn": [
                                "উচ্চমাধ্যমিক (১০+২) বা সমমানের পরীক্ষায় উত্তীর্ণ শিক্ষার্থী।"
                        ],
                        "hi": [
                                "12वीं कक्षा उत्तीर्ण छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Class 10 Admit Card (for DOB)",
                                "Class 12 Marksheet & Certificate",
                                "Category/Caste Certificate (if applicable)",
                                "Passport-size Photograph & Signature",
                                "Aadhaar Card."
                        ],
                        "bn": [
                                "মাধ্যমিকের অ্যাডমিট কার্ড",
                                "উচ্চমাধ্যমিকের মার্কশিট",
                                "কাস্ট সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)",
                                "ছবি ও স্বাক্ষর",
                                "আধার কার্ড।"
                        ],
                        "hi": [
                                "10वीं का एडमिट कार्ड",
                                "12वीं की अंकतालिका",
                                "जाति प्रमाण पत्र",
                                "फोटो और हस्ताक्षर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Zero application fee for choosing college and course preferences.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কলেজ বা কোর্স পছন্দ করার জন্য কোনো আবেদন ফি দিতে হয় না।",
                        "hi": "पूर्णतः निःशुल्क। कॉलेज चुनने के लिए कोई आवेदन शुल्क नहीं।"
                },
                "benefits": {
                        "en": [
                                "Apply to up to 25 colleges and courses through a single centralized application.",
                                "Fair, transparent merit-based allotment."
                        ],
                        "bn": [
                                "একটি মাত্র ফর্মের মাধ্যমে ২৫টি পর্যন্ত কলেজ ও কোর্সে আবেদনের সুযোগ।",
                                "সম্পূর্ণ স্বচ্ছ ও মেধাভিত্তিক আসন বণ্টন।"
                        ],
                        "hi": [
                                "एक ही फॉर्म से 25 कॉलेजों और पाठ्यक्रमों में आवेदन की सुविधा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit wbcap.in during active admission window.",
                                "Register with Class 12 Board Name, Roll No., and Year of Passing.",
                                "Fill personal details, address, and academic marks (Top 4 subjects).",
                                "Select preferred universities, colleges, and major/minor courses (up to 25 preferences).",
                                "Upload scanned documents and submit without any fee.",
                                "Check Centralized Merit List and Seat Allotment online.",
                                "Accept allotted seat and pay official college admission fee online."
                        ],
                        "bn": [
                                "ভর্তির সময় wbcap.in পোর্টালে যান।",
                                "উচ্চমাধ্যমিকের বোর্ড, রোল নম্বর ও পাশের সাল দিয়ে রেজিস্টার করুন।",
                                "ব্যক্তিগত তথ্য ও পরীক্ষার প্রাপ্ত নম্বর সাবধানে লিখুন।",
                                "পছন্দ অনুযায়ী ২৫টি পর্যন্ত কলেজ ও অনার্স/পাস সাবজেক্ট সাজান।",
                                "নথিপত্র আপলোড করে ফ্রিতে সাবমিট করুন।",
                                "মেধাতালিকা ও সিট বরাদ্দের ফলাফল দেখুন।",
                                "পছন্দের আসন নিশ্চিত করে অনলাইনে সরকারি কলেজের ভর্তির ফি জমা দিন।"
                        ],
                        "hi": [
                                "wbcap.in पोर्टल पर जाएं।",
                                "12वीं के रोल नंबर से पंजीकरण करें।",
                                "विवरण भरें और 25 पसंदीदा कॉलेज और विषय चुनें।",
                                "दस्तावेज़ अपलोड कर सबमिट करें।",
                                "मेरिट सूची में नाम आने पर ऑनलाइन प्रवेश शुल्क का भुगतान करें।"
                        ]
                },
                "official_homepage": "https://wbcap.in/",
                "official_apply_url": "https://wbcap.in/",
                "official_status_url": "https://wbcap.in/",
                "official_helpline": "1800 102 8014 (Higher Education Helpline)",
                "official_email": "support@wbcap.in",
                "state": "West Bengal",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wbcap.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbcap",
                        "college admission wb",
                        "centralized admission",
                        "ug admission",
                        "ba bsc bcom admission",
                        "west bengal college form",
                        "কলেজ ভর্তি",
                        "ডাব্লুবিসিএপি",
                        "স্নাতক ভর্তি",
                        "কলেজ ফর্ম",
                        "পশ্চিমবঙ্গ কলেজ",
                        "कॉलेज प्रवेश",
                        "डब्ल्यूबीसीएपी",
                        "स्नातक प्रवेश",
                        "पश्चिम बंगाल कॉलेज"
                ],
                "scam_warning": {
                        "en": "WBCAP applications are 100% FREE. Never pay private agents claiming guaranteed college admissions.",
                        "bn": "WBCAP পোর্টালে আবেদন সম্পূর্ণ বিনামূল্যে। কলেজে ভর্তির গ্যারান্টি দেওয়া দালালদের টাকা দেবেন না।",
                        "hi": "WBCAP पर कॉलेज आवेदन बिल्कुल मुफ्त है। दलालों से दूर रहें।"
                }
        },
        {
                "service_id": "aicte-internship-portal-india",
                "service_name": {
                        "en": "AICTE National Internship Portal & PM Internships",
                        "bn": "এআইসিটিই জাতীয় ইন্টার্নশিপ ও পিএম ইন্টার্নশিপ পোর্টাল",
                        "hi": "एआईसीटीई राष्ट्रीय इंटर्नशिप पोर्टल और पीएम इंटर्नशिप"
                },
                "short_description": {
                        "en": "Official Government of India portal connecting engineering, polytechnic, and graduate students with verified government ministries, PSUs, smart cities, and top corporate internships.",
                        "bn": "ভারত সরকারের অফিশিয়াল পোর্টাল: পলিটেকনিক, ইঞ্জিনিয়ারিং ও সাধারণ শিক্ষার্থীদের জন্য বিভিন্ন সরকারি দপ্তর, পিএসইউ ও প্রথম সারির সংস্থায় ইন্টার্নশিপের সুযোগ।",
                        "hi": "सरकारी विभागों, पीएसयू और शीर्ष कंपनियों में छात्रों के लिए सत्यापित इंटर्नशिप पोर्टल।"
                },
                "category": "internships",
                "category_name": {
                        "en": "Internships",
                        "bn": "ইন্টার্নশিপ ও শিক্ষানবিশী",
                        "hi": "इंटर्नशिप और प्रशिक्षण"
                },
                "subcategory": "National Internships",
                "authority": "All India Council for Technical Education (AICTE), Ministry of Education, Govt of India",
                "government_level": "Central",
                "service_type": "Internship",
                "target_users": [
                        "Student",
                        "Job Seeker"
                ],
                "eligibility": {
                        "en": [
                                "Students pursuing Diploma, Polytechnic, B.Tech, B.Sc, B.Com, MCA, or recent graduates from recognized institutions."
                        ],
                        "bn": [
                                "পলিটেকনিক, ডিপ্লোমা, বি.টেক, স্নাতক বা সমমানের কোর্সের শিক্ষার্থী ও সদ্য উত্তীর্ণ তরুণ-তরুণী।"
                        ],
                        "hi": [
                                "पॉलिटेक्निक, डिप्लोमा, बीटेक या स्नातक के छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Student College ID Card",
                                "Resume / CV",
                                "Last Semester Marksheet",
                                "Aadhaar Card",
                                "No Objection Certificate (NOC from Institute)."
                        ],
                        "bn": [
                                "কলেজ আইডি কার্ড",
                                "জীবনবৃত্তান্ত (Resume)",
                                "সর্বশেষ সেমিস্টার মার্কশিট",
                                "আধার কার্ড",
                                "কলেজের এনওসি (NOC)।"
                        ],
                        "hi": [
                                "कॉलेज आईडी",
                                "बायोडाटा (Resume)",
                                "अंकतालिका",
                                "आधार कार्ड।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Zero fee for applying to internships.",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন। কোনো ফি দিতে হয় না।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Official government and corporate internship certificate.",
                                "Monthly stipend (₹5,00,000 based on program).",
                                "Direct industry experience and pre-placement opportunities."
                        ],
                        "bn": [
                                "বৈধ সরকারি ও কর্পোরেট ইন্টার্নশিপ সার্টিফিকেট।",
                                "মাসিক স্টাইপেন্ড (₹৫,০০০ থেকে ₹২৫,০০০)।",
                                "বাস্তব কর্মক্ষেত্রের অভিজ্ঞতা।"
                        ],
                        "hi": [
                                "आधिकारिक इंटर्नशिप प्रमाण पत्र, मासिक वजीफा और अनुभव।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit internship.aicte-india.org and click 'Register' as Student.",
                                "Select your University / College / Polytechnic institute name.",
                                "Fill academic profile, skills, branch, and contact information.",
                                "Search active opportunities by sector: Govt Ministries, Smart Cities, or Private Sector.",
                                "Click 'Apply Now' and submit tailored cover letter and resume.",
                                "Attend online interview / evaluation upon selection.",
                                "Receive official offer letter and start internship."
                        ],
                        "bn": [
                                "internship.aicte-india.org পোর্টালে গিয়ে 'Student Registration' করুন।",
                                "নিজের কলেজ বা পলিটেকনিক প্রতিষ্ঠানের নাম নির্বাচন করুন।",
                                "শিক্ষাগত যোগ্যতা, টেকনিক্যাল স্কিল ও বায়োডাটা সম্পূর্ণ করুন।",
                                "সরকারি বা বেসরকারি দপ্তরে সক্রিয় ইন্টার্নশিপ খুঁজে 'Apply' করুন।",
                                "নির্বাচন হলে অনলাইন ইন্টারভিউতে অংশ নিন।",
                                "অফিসিয়াল অফার লেটার নিয়ে ইন্টার্নশিপ শুরু করুন।"
                        ],
                        "hi": [
                                "internship.aicte-india.org पर छात्र के रूप में पंजीकरण करें।",
                                "कॉलेज का नाम और शैक्षणिक विवरण भरें।",
                                "इच्छुक इंटर्नशिप पर आवेदन करें।",
                                "चयन होने पर आधिकारिक पत्र प्राप्त कर कार्य शुरू करें।"
                        ]
                },
                "official_homepage": "https://internship.aicte-india.org/",
                "official_apply_url": "https://internship.aicte-india.org/register_new.php",
                "official_status_url": "https://internship.aicte-india.org/login_student.php",
                "official_helpline": "011 29581333 (AICTE Internship Support)",
                "official_email": "internship@aicte-india.org",
                "state": "All India",
                "availability": "Online / Hybrid / On-site",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://internship.aicte-india.org/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "aicte internship",
                        "govt internship",
                        "pm internship scheme",
                        "polytechnic internship",
                        "engineering internship",
                        "stipend internship",
                        "এআইসিটিই ইন্টার্নশিপ",
                        "সরকারি ইন্টার্নশিপ",
                        "পলিটেকনিক ইন্টার্নশিপ",
                        "স্টাইপেন্ড ইন্টার্নশিপ",
                        "एआईसीटीई इंटर्नशिप",
                        "सरकारी इंटर्नशिप",
                        "पीएम इंटर्नशिप",
                        "पॉलिटेक्निक इंटर्नशिप"
                ],
                "scam_warning": {
                        "en": "Legitimate internships NEVER ask candidates to pay money for training or selection. Never pay for internships.",
                        "bn": "প্রকৃত ইন্টার্নশিপে কখনো টাকা দিতে হয় না। ইন্টার্নশিপ দেওয়ার নামে টাকা চাওয়া ভুয়া সংস্থা থেকে সাবধান।",
                        "hi": "सच्ची इंटर्नशिप कभी पैसे नहीं मांगती। किसी भी इंटर्नशिप के लिए पैसे न दें।"
                }
        },
        {
                "service_id": "pm-surya-ghar-muft-bijli",
                "service_name": {
                        "en": "PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar)",
                        "bn": "প্রধানমন্ত্রী সূর্য ঘর: বিনামূল্যে বিদ্যুৎ যোজনা (সৌর বিদ্যুৎ)",
                        "hi": "पीएम सूर्य घर: मुफ्त बिजली योजना (रूफटॉप सोलर)"
                },
                "short_description": {
                        "en": "National rooftop solar subsidy scheme providing up to ₹78,000 direct central subsidy for installing 1kW to 3kW residential solar power systems and reducing electricity bills to zero.",
                        "bn": "কেন্দ্রীয় সরকারের ছাদভিত্তিক সৌরবিদ্যুৎ প্রকল্প: বাড়িতে ১ থেকে ৩ কিলোওয়াট সোলার প্যানেল বসানোর জন্য সরাসরি ₹৭৮,০০০ পর্যন্ত সরকারি ভর্তুকি ও বিদ্যুৎ বিল সাশ্রয়।",
                        "hi": "आवासीय घरों पर सोलर पैनल लगाने के लिए ₹78,000 तक की प्रत्यक्ष सरकारी सब्सिडी।"
                },
                "category": "solar-energy",
                "category_name": {
                        "en": "Solar & Renewable Energy",
                        "bn": "সৌর বিদ্যুৎ প্রকল্প",
                        "hi": "सौर ऊर्जा योजनाएं"
                },
                "subcategory": "Rooftop Solar",
                "authority": "Ministry of New and Renewable Energy (MNRE), Govt of India",
                "government_level": "Central",
                "service_type": "Scheme",
                "target_users": [
                        "General Citizen",
                        "Farmer",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Indian residential households with suitable rooftop space and an active electricity connection."
                        ],
                        "bn": [
                                "পাকা ছাদযুক্ত বাড়ি এবং বৈধ বিদ্যুৎ সংযোগধারী যেকোনো আবাসিক গ্রাহক।"
                        ],
                        "hi": [
                                "छत वाले आवासीय मकान और वैध बिजली कनेक्शन वाले नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Latest Electricity Bill (showing Consumer ID / CA Number)",
                                "Aadhaar Card",
                                "Bank Account Passbook / Cancelled Cheque (for subsidy transfer)",
                                "Rooftop Photograph."
                        ],
                        "bn": [
                                "সাম্প্রতিক বিদ্যুৎ বিলের কপি (গ্রাহক নম্বর সহ)",
                                "আধার কার্ড",
                                "ব্যাংক পাসবুক বা বাতিল চেক (ভর্তুকির টাকা পাওয়ার জন্য)",
                                "ছাদের ছবি।"
                        ],
                        "hi": [
                                "नवीनतम बिजली बिल",
                                "आधार कार्ड",
                                "बैंक पासबुक या चेक",
                                "छत की फोटो।"
                        ]
                },
                "application_fee": {
                        "en": "Registration on pmsuryaghar.gov.in is 100% Free. Solar vendor charges applicable after deducting direct subsidy.",
                        "bn": "সরকারি পোর্টালে রেজিস্ট্রেশন সম্পূর্ণ ফ্রি। সরকারি ভর্তুকি বাদে বাকি অর্থ সোলার ভেন্ডরকে প্রদেয়।",
                        "hi": "पोर्टल पर पंजीकरण बिल्कुल मुफ्त है।"
                },
                "benefits": {
                        "en": [
                                "1 kW: ₹30,000 subsidy; 2 kW: ₹60,000 subsidy; 3 kW+: ₹78,000 direct DBT subsidy.",
                                "Up to 300 units free electricity monthly."
                        ],
                        "bn": [
                                "১ কিলোওয়াটে ₹৩০,০০০, ২ কিলোওয়াটে ₹৬০,০০০ এবং ৩ কিলোওয়াটে ₹৭৮,০০০ সরাসরি ব্যাংক ভর্তুকি।",
                                "প্রতি মাসে ৩০০ ইউনিট পর্যন্ত বিদ্যুৎ সাশ্রয়।"
                        ],
                        "hi": [
                                "₹78,000 तक की सीधी सब्सिडी और 300 यूनिट तक मुफ्त बिजली।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit pmsuryaghar.gov.in and click 'Apply for Rooftop Solar'.",
                                "Select State: 'West Bengal' -> Select DISCOM: 'WBSEDCL' or 'CESC'.",
                                "Enter Consumer Account Number and mobile number to register.",
                                "Login and apply for rooftop solar installation.",
                                "Choose registered empaneled vendor and submit feasibility report.",
                                "Upon DISCOM meter installation and commissioning, upload bank details to receive subsidy in 30 days."
                        ],
                        "bn": [
                                "pmsuryaghar.gov.in পোর্টালে গিয়ে 'Apply for Rooftop Solar' এ ক্লিক করুন।",
                                "রাজ্য 'West Bengal' এবং বিদ্যুৎ কোম্পানি 'WBSEDCL' বা 'CESC' নির্বাচন করুন।",
                                "বিদ্যুৎ গ্রাহক নম্বর (Consumer No) লিখে রেজিস্টার করুন।",
                                "অনুমোদিত সোলার ভেন্ডর বেছে নিয়ে আবেদন জমা দিন।",
                                "মিটার ইনস্টল হওয়ার পর ব্যাংক ডিটেইলস আপলোড করলে ৩০ দিনের মধ্যে সরাসরি অ্যাকাউন্টে ভর্তুকির টাকা জমা হবে।"
                        ],
                        "hi": [
                                "pmsuryaghar.gov.in पर जाकर पंजीकरण करें।",
                                "राज्य और बिजली प्रदाता कंपनी (DISCOM) चुनें।",
                                "कंज्यूमर नंबर दर्ज कर आवेदन करें।",
                                "सोलर वेंडर का चयन करें और मीटर लगने के बाद सब्सिडी प्राप्त करें।"
                        ]
                },
                "official_homepage": "https://pmsuryaghar.gov.in/",
                "official_apply_url": "https://pmsuryaghar.gov.in/consumerRegistration",
                "official_status_url": "https://pmsuryaghar.gov.in/consumerLogin",
                "official_helpline": "15555 (National Solar Rooftop Helpline)",
                "official_email": "pmsuryaghar-mnre@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://pmsuryaghar.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "pm surya ghar",
                        "muft bijli yojana",
                        "rooftop solar subsidy",
                        "solar panel apply",
                        "wbsedcl solar",
                        "cesc solar",
                        "পিএম সূর্য ঘর",
                        "সৌর বিদ্যুৎ ভর্তুকি",
                        "সোলার প্যানেল",
                        "বিনামূল্যে বিদ্যুৎ",
                        "पीएम सूर्य घर",
                        "रूफटॉप सोलर",
                        "मुफ्त बिजली योजना",
                        "सोलर सब्सिडी"
                ],
                "scam_warning": {
                        "en": "Install rooftop solar ONLY through vendors empaneled on pmsuryaghar.gov.in. Do not pay unverified solar canvassers.",
                        "bn": "শুধুমাত্র pmsuryaghar.gov.in এর নথিভুক্ত সোলার ভেন্ডরের মাধ্যমেই আবেদন করুন। ভুয়া কোম্পানি থেকে সাবধান।",
                        "hi": "केवल अधिकृत वेंडर के माध्यम से ही सोलर लगवाएं। धोखाधड़ी से बचें।"
                }
        },
        {
                "service_id": "wb-student-credit-card-wbscc",
                "service_name": {
                        "en": "West Bengal Student Credit Card Scheme (WBSCC)",
                        "bn": "পশ্চিমবঙ্গ স্টুডেন্ট ক্রেডিট কার্ড প্রকল্প (WBSCC)",
                        "hi": "पश्चिम बंगाल स्टूडेंट क्रेडिट कार्ड योजना (WBSCC)"
                },
                "short_description": {
                        "en": "State Government collateral-free education loan scheme providing up to ₹10 Lakh at a nominal 4% simple interest rate with 15-year repayment tenure for secondary, higher secondary, diploma, undergraduate, postgraduate, and professional courses.",
                        "bn": "পশ্চিমবঙ্গ সরকারের জামানতবিহীন শিক্ষা ঋণ প্রকল্প: মাত্র ৪% সরল সুদে সর্বোচ্চ ₹১০ লক্ষ পর্যন্ত ঋণ, যা দিয়ে দেশের বা বিদেশের যে কোনো কোর্সের ফি ও থাকা-খাওয়ার খরচ মেটানো যায় (১৫ বছরে পরিশোধযোগ্য)।",
                        "hi": "उच्च शिक्षा के लिए मात्र 4% सरल ब्याज पर बिना किसी गारंटी के ₹10 लाख तक का शिक्षा ऋण।"
                },
                "category": "student-credit",
                "category_name": {
                        "en": "Student Credit Card",
                        "bn": "স্টুডেন্ট ক্রেডিট কার্ড ও শিক্ষা ঋণ",
                        "hi": "स्टूडेंट क्रेडिट कार्ड और शिक्षा ऋण"
                },
                "subcategory": "Education Loan",
                "authority": "Department of Higher Education, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scholarship",
                "target_users": [
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian citizen resident of West Bengal for at least 10 years.",
                                "Age limit up to 40 years at the time of application.",
                                "Enrolled in recognized schools, colleges, universities, professional or competitive coaching institutes."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের অন্তত ১০ বছরের স্থায়ী বাসিন্দা শিক্ষার্থী।",
                                "আবেদনের সময় বয়স অনূর্ধ্ব ৪০ বছর।",
                                "স্বীকৃত বিদ্যালয়, কলেজ, বিশ্ববিদ্যালয় বা কোচিং প্রতিষ্ঠানে পাঠরত।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल में 10 वर्ष से निवासी छात्र। अधिकतम आयु 40 वर्ष।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Applicant & Co-borrower Aadhaar / PAN card",
                                "Admission receipt & Course Fee structure from Institute",
                                "Class 10 Board Registration certificate",
                                "Bank Passbook details of student and co-borrower",
                                "Passport-size photographs."
                        ],
                        "bn": [
                                "শিক্ষার্থী ও অভিভাবকের আধার / প্যান কার্ড",
                                "ভর্তির রসিদ ও কলেজের অফিশিয়াল ফি কাঠামো",
                                "মাধ্যমিক রেজিস্ট্রেশন সার্টিফিকেট",
                                "ব্যাংক পাসবুকের কপি",
                                "ছবি।"
                        ],
                        "hi": [
                                "छात्र और अभिभावक का आधार/पैन",
                                "प्रवेश रसीद और फीस संरचना",
                                "10वीं का प्रमाण पत्र",
                                "बैंक विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No loan processing fee or collateral required.",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন। কোনো প্রসেসিং ফি বা সম্পত্তি বন্ধক রাখার প্রয়োজন নেই।",
                        "hi": "पूर्णतः निःशुल्क। बिना किसी गारंटी का ऋण।"
                },
                "benefits": {
                        "en": [
                                "Up to ₹10,00,000 credit limit.",
                                "Nominal 4% simple interest rate (with 1% subvention for regular repayments).",
                                "15 years long repayment period."
                        ],
                        "bn": [
                                "সর্বোচ্চ ₹১০ লক্ষ পর্যন্ত লোন সুবিধা।",
                                "মাত্র ৪% সহজ সরল সুদ।",
                                "পড়াশোনা শেষ হওয়ার পর চাকরি পেয়ে ১৫ বছরে কিস্তিতে পরিশোধের সুযোগ।"
                        ],
                        "hi": [
                                "₹10 लाख तक का ऋण, 4% सरल ब्याज दर, 15 साल में वापसी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit wbscc.wb.gov.in and click 'Student Registration'.",
                                "Fill basic details, institution name, course details, and contact information.",
                                "Obtain Registration ID and set password.",
                                "Login as 'Student Login' and fill detailed academic and co-borrower profile.",
                                "Upload course fee structure, admission receipt, and bank documents.",
                                "Submit application for online forwarding: Institution -> Higher Education Dept -> Bank.",
                                "Visit bank branch for digital sanction and card issuance upon approval."
                        ],
                        "bn": [
                                "wbscc.wb.gov.in পোর্টালে গিয়ে 'Student Registration' করুন।",
                                "ব্যক্তিগত তথ্য, শিক্ষাপ্রতিষ্ঠানের নাম ও কোর্সের বিবরণ পূরণ করুন।",
                                "রেজিস্ট্রেশন আইডি দিয়ে লগইন করে অভিভাবক ও ব্যাংক তথ্য পূরণ করুন।",
                                "কলেজের ফি স্ট্রাকচার ও প্রয়োজনীয় নথি আপলোড করুন।",
                                "আবেদন সাবমিট করলে তা প্রথমে কলেজ, তারপর উচ্চশিক্ষা দপ্তর এবং শেষে ব্যাংকে পাঠানো হয়।",
                                "অনুমোদন পেলে ব্যাংকে গিয়ে স্টুডেন্ট ক্রেডিট কার্ডের অনুমোদন নিন।"
                        ],
                        "hi": [
                                "wbscc.wb.gov.in पर जाकर पंजीकरण करें।",
                                "कोर्स और अभिभावक का विवरण भरें।",
                                "फीस संरचना और बैंक दस्तावेज अपलोड करें।",
                                "कॉलेज और विभाग के सत्यापन के बाद बैंक द्वारा ऋण स्वीकृत किया जाएगा।"
                        ]
                },
                "official_homepage": "https://wbscc.wb.gov.in/",
                "official_apply_url": "https://wbscc.wb.gov.in/Student_Registration",
                "official_status_url": "https://wbscc.wb.gov.in/Student_Login",
                "official_helpline": "1800 102 8014 (Toll Free Higher Education Support)",
                "official_email": "support-wbscc@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online + Bank Branch",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wbscc.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbscc",
                        "student credit card wb",
                        "education loan wb",
                        "wbscc status",
                        "student loan 10 lakh",
                        "higher education loan",
                        "স্টুডেন্ট ক্রেডিট কার্ড",
                        "শিক্ষা ঋণ",
                        "ডাব্লুবিএসসিসি",
                        "১০ লক্ষ টাকা লোন",
                        "উচ্চশিক্ষা ঋণ",
                        "स्टूडेंट क्रेडिट कार्ड",
                        "पश्चिम बंगाल शिक्षा ऋण",
                        "उच्च शिक्षा लोन"
                ],
                "scam_warning": {
                        "en": "WBSCC is 100% collateral-free directly processed through state banks. Never pay commission to private agents.",
                        "bn": "স্টুডেন্ট ক্রেডিট কার্ডে কোনো দালাল বা মধ্যস্বত্বভোগী লাগে না। ঋণের নামে কমিশন চাওয়া ব্যক্তিদের থেকে সাবধান।",
                        "hi": "यह ऋण बिना किसी गारंटी के मिलता है। किसी एजेंट को कमीशन न दें।"
                }
        },
        {
                "service_id": "udyam-msme-business-registration",
                "service_name": {
                        "en": "Udyam Registration Portal (MSME / Business)",
                        "bn": "উদ্যম রেজিস্ট্রেশন পোর্টাল (MSME / ব্যবসা নিবন্ধন)",
                        "hi": "उद्यम पंजीकरण पोर्टल (एमएसएमई / व्यवसाय)"
                },
                "short_description": {
                        "en": "Official Ministry of Micro, Small and Medium Enterprises portal for free, paperless online registration of Micro, Small, and Medium Enterprises to obtain Udyam Certificate.",
                        "bn": "কেন্দ্রীয় এমএসএমই মন্ত্রকের অফিসিয়াল পোর্টাল: ক্ষুদ্র, ছোট ও মাঝারি ব্যবসার জন্য সম্পূর্ণ বিনামূল্যে ও কাগজবিহীন ডিজিটাল উদ্যম সার্টিফিকেট প্রাপ্তির পোর্টাল।",
                        "hi": "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय का आधिकारिक पोर्टल: बिना किसी शुल्क के एमएसएमई पंजीकरण और उद्यम प्रमाण पत्र।"
                },
                "category": "business-startup",
                "category_name": {
                        "en": "Business & Startup",
                        "bn": "ব্যবসা ও এমএসএমই",
                        "hi": "व्यवसाय और एमएसएमई"
                },
                "subcategory": "MSME Registration",
                "authority": "Ministry of Micro, Small and Medium Enterprises, Govt of India",
                "government_level": "Central",
                "service_type": "Certificate",
                "target_users": [
                        "Business Owner",
                        "Entrepreneur"
                ],
                "eligibility": {
                        "en": [
                                "Any individual or organization operating a manufacturing or service enterprise in India."
                        ],
                        "bn": [
                                "উৎপাদন বা পরিষেবা খাতের যেকোনো ভারতীয় ব্যবসা বা উদ্যোগ।"
                        ],
                        "hi": [
                                "भारत में कार्यरत कोई भी विनिर्माण या सेवा उद्यम।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card of proprietor/partner/director",
                                "PAN Card (Mandatory for GST registered units)",
                                "Bank Account details of enterprise",
                                "Business address and investment figures."
                        ],
                        "bn": [
                                "মালিক/অংশীদারের আধার কার্ড",
                                "প্যান কার্ড",
                                "ব্যবসার ব্যাংক অ্যাকাউন্টের বিবরণ",
                                "বিনিয়োগ ও ব্যবসার ঠিকানার তথ্য।"
                        ],
                        "hi": [
                                "आधार कार्ड",
                                "पैन कार्ड",
                                "बैंक खाता विवरण",
                                "व्यवसाय का पता।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee for Udyam Registration.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। উদ্যম রেজিস্ট্রেশনে কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क। कोई सरकारी शुल्क नहीं।"
                },
                "benefits": {
                        "en": [
                                "Priority sector bank lending at subsidized interest rates.",
                                "Exemption on government tender earnest money deposits (EMD).",
                                "Access to collateral-free CGTMSE loans and subsidies."
                        ],
                        "bn": [
                                "কম সুদে ব্যাংক ঋণ ও সরকারি টেন্ডারে বিশেষ ছাড়।",
                                "জামানতবিহীন ঋণ (CGTMSE) ও সরকারি ভর্তুকির সুবিধা।",
                                "আইনসম্মত সরকারি ব্যবসায়িক শংসাপত্র।"
                        ],
                        "hi": [
                                "सस्ती ब्याज दरों पर बैंक ऋण, सरकारी टेंडरों में छूट और सब्सिडी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit udyamregistration.gov.in.",
                                "Click 'For New Entrepreneurs who are not Registered yet as MSME'.",
                                "Enter 12-digit Aadhaar Number and name of entrepreneur.",
                                "Validate with OTP received on Aadhaar-linked mobile.",
                                "Fill PAN details and validate with Income Tax database.",
                                "Enter enterprise name, location of plant/unit, bank details, and NIC code.",
                                "Submit and download instant verified Udyam Registration Certificate."
                        ],
                        "bn": [
                                "অফিসিয়াল udyamregistration.gov.in পোর্টালে যান।",
                                "'For New Entrepreneurs' লিংকে ক্লিক করুন।",
                                "মালিকের ১২ সংখ্যার আধার নম্বর লিখে ওটিপি ভেরিফিকেশন করুন।",
                                "প্যান নম্বর দিয়ে তথ্য যাচাই করুন।",
                                "ব্যবসার নাম, ঠিকানা, ব্যাংক তথ্য ও কাজের ক্যাটাগরি (NIC Code) নির্বাচন করুন।",
                                "সাবমিট করে সাথে সাথেই QR কোড যুক্ত উদ্যম সার্টিফিকেট ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "udyamregistration.gov.in पर जाएं।",
                                "आधार नंबर दर्ज कर ओटीपी सत्यापन करें।",
                                "पैन विवरण और उद्यम की जानकारी भरें।",
                                "फॉर्म सबमिट करें और तुरंत उद्यम प्रमाण पत्र डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://udyamregistration.gov.in/",
                "official_apply_url": "https://udyamregistration.gov.in/Udyam_Registration.aspx",
                "official_status_url": "https://udyamregistration.gov.in/Print_Certificate.aspx",
                "official_helpline": "011 23063288 (MSME Champions Helpdesk)",
                "official_email": "champions@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://udyamregistration.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "udyam registration",
                        "msme registration",
                        "msme certificate",
                        "business registration",
                        "udyam print",
                        "small business loan",
                        "উদ্যম রেজিস্ট্রেশন",
                        "এমএসএমই সার্টিফিকেট",
                        "ব্যবসা রেজিস্ট্রেশন",
                        "উদ্যম সার্টিফিকেট",
                        "उद्यम पंजीकरण",
                        "एमएसएमई रजिस्ट्रेशन",
                        "उद्यम प्रमाण पत्र",
                        "व्यापार पंजीकरण"
                ],
                "scam_warning": {
                        "en": "Udyam registration is 100% FREE on udyamregistration.gov.in. Fake websites charge ₹1,500–₹3,000 for this free service.",
                        "bn": "উদ্যম রেজিস্ট্রেশন সরকারি ওয়েবসাইটে সম্পূর্ণ ফ্রি। ভুয়ো ওয়েবসাইটে টাকা দিয়ে প্রতারিত হবেন না।",
                        "hi": "उद्यम पंजीकरण सरकारी वेबसाइट पर बिल्कुल मुफ्त है। पैसे वसूलने वाली फर्जी साइटों से बचें।"
                }
        },
        {
                "service_id": "wbsedcl-electricity-services",
                "service_name": {
                        "en": "WBSEDCL Electricity Services & Bill Payment",
                        "bn": "পশ্চিমবঙ্গ বিদ্যুৎ পর্ষদ সেবা ও বিল পেমেন্ট (WBSEDCL)",
                        "hi": "पश्चिम बंगाल राज्य विद्युत सेवाएं और बिल भुगतान (WBSEDCL)"
                },
                "short_description": {
                        "en": "Official West Bengal State Electricity Distribution Company Limited portal for online bill payment, new domestic/commercial connection, meter complaints, and load enhancement.",
                        "bn": "পশ্চিমবঙ্গ রাজ্য বিদ্যুৎ বণ্টন কোম্পানির অফিশিয়াল পোর্টাল: অনলাইন বিদ্যুৎ বিল পেমেন্ট, নতুন মিটার সংযোগের আবেদন ও অভিযোগ প্রতিকার।",
                        "hi": "पश्चिम बंगाल राज्य विद्युत वितरण कंपनी का पोर्टल: ऑनलाइन बिल भुगतान, नया बिजली कनेक्शन और शिकायत निवारण।"
                },
                "category": "electricity",
                "category_name": {
                        "en": "Electricity Services",
                        "bn": "বিদ্যুৎ পরিষেবা ও সংযোগ",
                        "hi": "बिजली सेवाएं और कनेक्शन"
                },
                "subcategory": "Power Utility WB",
                "authority": "West Bengal State Electricity Distribution Company Limited (WBSEDCL)",
                "government_level": "West Bengal",
                "service_type": "Utility",
                "target_users": [
                        "General Citizen",
                        "Farmer",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Electricity consumers and residents of West Bengal under WBSEDCL service area."
                        ],
                        "bn": [
                                "ডাব্লুবিএসইডিসিএল এলাকার বিদ্যুৎ গ্রাহক ও নাগরিকবৃন্দ।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के बिजली उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "For New Connection: Proof of Ownership / Tenancy (Deed, Rent agreement, Tax receipt), Identity Proof (Aadhaar/Voter), Passport photograph.",
                                "For Bill Payment: 9-digit Consumer ID."
                        ],
                        "bn": [
                                "নতুন সংযোগের জন্য: জায়গার মালিকানা বা ভাড়ার প্রমাণ (দলিল, ট্যাক্স রসিদ), পরিচয়পত্র (আধার/ভোটার), ছবি।",
                                "বিল পেমেন্টের জন্য: ৯ সংখ্যার Consumer ID।"
                        ],
                        "hi": [
                                "नए कनेक्शन के लिए पते और पहचान का प्रमाण। बिल भुगतान हेतु 9 अंकों का कंज्यूमर आईडी।"
                        ]
                },
                "application_fee": {
                        "en": "Bill Payment: Actual consumed bill amount with zero transaction surcharge on UPI. New Connection: Prescribed service connection & security deposit.",
                        "bn": "বিল পেমেন্ট: কোনো অতিরিক্ত সারচার্জ ছাড়াই ইউপিআই দিয়ে বিল পেমেন্ট। নতুন সংযোগের ক্ষেত্রে সরকারি কোটেশন ফি।",
                        "hi": "बिल भुगतान पर कोई अतिरिक्त चार्ज नहीं।"
                },
                "benefits": {
                        "en": [
                                "Instant online payment receipts and automated SMS updates.",
                                "Easy online quotation generation for new connections.",
                                "24x7 power outage complaint tracking."
                        ],
                        "bn": [
                                "তাত্ক্ষণিক বিল পেমেন্ট রসিদ ডাউনলোড।",
                                "ঘরে বসে নতুন বিদ্যুৎ মিটারের কোটেশন ও পেমেন্ট।",
                                "বিদ্যুৎ বিভ্রাটের ২৪x৭ অনলাইন অভিযোগ ট্র্যাকিং।"
                        ],
                        "hi": [
                                "तुरंत भुगतान रसीद और नया कनेक्शन ऑनलाइन आवेदन।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit wbsedcl.in or download official Vidyut Sahayogi mobile app.",
                                "For Quick Bill Pay: Click 'Online Payment' -> Enter 9-digit Consumer ID -> Verify bill -> Pay via UPI / Cards.",
                                "For New Connection: Click 'Online Application for New Connection'.",
                                "Register with mobile number, fill applicant details, select load (kW/HP) and connection type.",
                                "Upload Land Document and ID proof.",
                                "Download quotation upon feasibility approval and pay connection charges online."
                        ],
                        "bn": [
                                "wbsedcl.in ওয়েবসাইটে যান বা 'Vidyut Sahayogi' অ্যাপ ব্যবহার করুন।",
                                "বিল পেমেন্টের জন্য: 'Online Payment' এ গিয়ে ৯ সংখ্যার Consumer ID দিন এবং ইউপিআই দিয়ে পেমেন্ট করুন।",
                                "নতুন মিটারের জন্য: 'New Connection' অপশনে যান।",
                                "মোবাইল দিয়ে রেজিস্টার করে প্রয়োজনীয় লোড (kW) ও ব্যক্তিগত তথ্য পূরণ করুন।",
                                "জমির দলিল ও আধার কার্ড আপলোড করুন।",
                                "অনুমোদন পেলে অনলাইনে কোটেশন ফি জমা দিন।"
                        ],
                        "hi": [
                                "wbsedcl.in पोर्टल पर जाएं।",
                                "बिल भुगतान के लिए कंज्यूमर आईडी दर्ज करें।",
                                "नए कनेक्शन के लिए ऑनलाइन आवेदन कर दस्तावेज अपलोड करें।"
                        ]
                },
                "official_homepage": "https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html",
                "official_apply_url": "https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html",
                "official_status_url": "https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html",
                "official_helpline": "19121 (WBSEDCL 24x7 Toll Free Electricity Helpline)",
                "official_email": "customercare@wbsedcl.in",
                "state": "West Bengal",
                "availability": "Online + Customer Care Centre (CCC)",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbsedcl",
                        "electricity bill payment",
                        "new electricity meter wb",
                        "wbsedcl quick pay",
                        "vidyut sahayogi",
                        "wb electricity helpline",
                        "বিদ্যুৎ বিল",
                        "ডাব্লুবিএসইডিসিএল",
                        "নতুন মিটার",
                        "বিদ্যুৎ বিল পেমেন্ট",
                        "বিদ্যুৎ সংযোগ",
                        "बिजली बिल पश्चिम बंगाल",
                        "डब्ल्यूबीएसईडीसीएल",
                        "नया मीटर कनेक्शन"
                ],
                "scam_warning": {
                        "en": "NEVER click links in fake SMS threatening power disconnection tonight. WBSEDCL only sends notices from official headers (WBSEDCL).",
                        "bn": "বিদ্যুৎ লাইন কেটে দেওয়ার ভুয়া এসএমএস বা লিংকে কখনো ক্লিক করবেন না এবং কোনো অপরিচিত নম্বরে টাকা পাঠাবেন না।",
                        "hi": "बिजली काटने की धमकी वाले फर्जी मैसेज या अनजान नंबरों पर पैसे न भेजें।"
                }
        },
        {
                "service_id": "wb-janma-mrityu-birth-cert",
                "service_name": {
                        "en": "Birth & Death Certificate Services (Janma-Mrityu Tathya WB)",
                        "bn": "জন্ম ও মৃত্যু শংসাপত্র সেবা (জন্ম-মৃত্যু তথ্য পশ্চিমবঙ্গ)",
                        "hi": "जन्म और मृत्यु प्रमाण पत्र सेवाएं (जन्म-मृत्यु तथ्य पश्चिम बंगाल)"
                },
                "short_description": {
                        "en": "Official Government of West Bengal portal for digital birth and death registration, searching vital event records, downloading digitally signed certificates with QR code, and correction requests.",
                        "bn": "পশ্চিমবঙ্গ সরকারের অফিসিয়াল পোর্টাল: ডিজিটাল জন্ম ও মৃত্যু রেজিস্ট্রেশন, শংসাপত্র অনুসন্ধান, কিউআর কোডযুক্ত ডিজিটাল সার্টিফিকেট ডাউনলোড ও সংশোধন।",
                        "hi": "पश्चिम बंगाल सरकार का आधिकारिक पोर्टल: जन्म और मृत्यु पंजीकरण, डिजिटल प्रमाण पत्र डाउनलोड और सुधार।"
                },
                "category": "wb-edistrict",
                "category_name": {
                        "en": "West Bengal e-District",
                        "bn": "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট",
                        "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट"
                },
                "subcategory": "Civil Vital Records WB",
                "authority": "Department of Health & Family Welfare, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Certificate",
                "target_users": [
                        "General Citizen",
                        "Parent"
                ],
                "eligibility": {
                        "en": [
                                "Birth or death occurring within the territorial jurisdiction of West Bengal.",
                                "Hospital / institutional discharge certificate or local authority reporting."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের ভৌগোলিক সীমার মধ্যে ঘটিত জন্ম বা মৃত্যু।",
                                "হাসপাতালের ডিসচার্জ সার্টিফিকেট অথবা পঞ্চায়েত/পৌরসভার রিপোর্ট।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल में हुआ जन्म या मृत्यु। अस्पताल का डिस्चार्ज प्रमाणपत्र या स्थानीय रिपोर्ट।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Hospital Discharge Summary / Birth Intimation Slip",
                                "Parent / Informant Aadhaar Card & Voter ID",
                                "Marriage Certificate of Parents (for newborn)",
                                "Burial / Cremation Certificate (in case of death)."
                        ],
                        "bn": [
                                "হাসপাতালের ডিসচার্জ পেপার / বার্থ স্লিপ",
                                "বাবা-মায়ের আধার ও ভোটার কার্ড",
                                "অভিভাবকদের বিবাহ প্রমাণপত্র (প্রযোজ্য ক্ষেত্রে)",
                                "শ্মশান / কবরস্থানের রসিদ (মৃত্যুর ক্ষেত্রে)।"
                        ],
                        "hi": [
                                "अस्पताल का डिस्चार्ज पेपर, माता-पिता का आधार व पहचान प्रमाण, श्मशान/कब्रिस्तान की रसीद।"
                        ]
                },
                "application_fee": {
                        "en": "Free of cost if registered within 21 days of the event. Nominal delayed registration fee as per statutory rules.",
                        "bn": "ঘটনার ২১ দিনের মধ্যে আবেদন করলে সম্পূর্ণ বিনামূল্যে। নির্দিষ্ট সময়ের পর নামমাত্র বিলম্ব ফি প্রযোজ্য।",
                        "hi": "21 दिनों के भीतर निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Legally mandated birth proof for school admissions, passport, and Aadhaar.",
                                "Instant verification via QR code.",
                                "Zero physical visit required for digital downloads."
                        ],
                        "bn": [
                                "স্কুলে ভর্তি, পাসপোর্ট ও আধার তৈরির জন্য আইনগত বাধ্যতামূলক নথি।",
                                "কিউআর কোড দিয়ে তাত্ক্ষণিক সত্যতা যাচাই।",
                                "অনলাইনে তাৎক্ষণিক সার্টিফিকেট ডাউনলোড।"
                        ],
                        "hi": [
                                "स्कूल प्रवेश और पासपोर्ट के लिए अनिवार्य प्रमाण पत्र। त्वरित डिजिटल डाउनलोड।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official Janma-Mrityu Tathya portal (janma-mrityutathya.wb.gov.in).",
                                "Click on 'Citizen Services' -> Select 'Birth' or 'Death' -> 'Apply for New Registration' or 'Download Certificate'.",
                                "Enter mobile number to receive OTP and verify session.",
                                "Fill details of Child/Deceased, Date of Event, Place of Birth/Death, and Parents' details.",
                                "Upload scanned copy of Hospital Discharge slip and Parents' ID proofs.",
                                "Submit application and note Acknowledgement Number for status tracking."
                        ],
                        "bn": [
                                "অফিসিয়াল janma-mrityutathya.wb.gov.in পোর্টালে যান।",
                                "'Citizen Services' এ গিয়ে 'Birth' বা 'Death' নির্বাচন করুন এবং 'Apply' বা 'Download' এ ক্লিক করুন।",
                                "মোবাইল নম্বর দিয়ে ওটিপি ভেরিফিকেশন সম্পন্ন করুন।",
                                "শিশু বা মৃত ব্যক্তির বিবরণ, ঘটনার স্থান ও তারিখ এবং পিতা-মাতার বিবরণ লিখুন।",
                                "হাসপাতালের স্লিপ এবং আধার কার্ড আপলোড করুন।",
                                "ফর্ম সাবমিট করে একনলেজমেন্ট নম্বর সংরক্ষণ করুন।"
                        ],
                        "hi": [
                                "janma-mrityutathya.wb.gov.in पर जाएं।",
                                "सिटिजन सर्विसेज में जाकर जन्म या मृत्यु का चयन करें।",
                                "ओटीपी सत्यापन के बाद विवरण भरें और दस्तावेज अपलोड करें।"
                        ]
                },
                "official_homepage": "https://janma-mrityutathya.wb.gov.in/",
                "official_apply_url": "https://janma-mrityutathya.wb.gov.in/",
                "official_status_url": "https://janma-mrityutathya.wb.gov.in/verifycertificate",
                "official_helpline": "1800-345-5555 (Health Dept WB Toll Free)",
                "official_email": "health-wb@nic.in",
                "state": "West Bengal",
                "availability": "Online + Hospitals + Municipalities / BDO",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://janma-mrityutathya.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "birth certificate",
                        "death certificate",
                        "janma mrityu tathya",
                        "wb birth download",
                        "birth cert correction",
                        "janmo certificate",
                        "জন্ম সার্টিফিকেট",
                        "মৃত্যু সার্টিফিকেট",
                        "জন্ম মৃত্যু তথ্য",
                        "বার্থ সার্টিফিকেট ডাউনলোড",
                        "जन्म प्रमाण पत्र पश्चिम बंगाल",
                        "मृत्यु प्रमाण पत्र",
                        "जन्म मृत्यु तथ्य"
                ],
                "scam_warning": {
                        "en": "Beware of fake websites charging ₹500–₹1,000 for instant certificates. Janma-Mrityu Tathya is the ONLY official portal in West Bengal.",
                        "bn": "টাকা দিয়ে দ্রুত সার্টিফিকেট বানিয়ে দেওয়ার ভুয়া ওয়েবসাইট বা দালালদের থেকে সাবধান থাকুন।",
                        "hi": "फर्जी वेबसाइटों पर पैसे देकर जन्म प्रमाण पत्र न बनवाएं।"
                }
        },
        {
                "service_id": "wb-caste-certificate-sc-st-obc",
                "service_name": {
                        "en": "Caste Certificate Application (SC, ST & OBC — West Bengal)",
                        "bn": "তপশিলি জাতি, উপজাতি ও ওবিসি শংসাপত্র আবেদন (SC/ST/OBC)",
                        "hi": "जाति प्रमाण पत्र आवेदन (SC, ST व OBC — पश्चिम बंगाल)"
                },
                "short_description": {
                        "en": "Official portal of Backward Classes Welfare Department, Government of West Bengal for applying new SC/ST/OBC certificates, checking application status, and downloading digitized digital certificates.",
                        "bn": "পশ্চিমবঙ্গ অনগ্রসর শ্রেণি কল্যাণ দপ্তরের অফিসিয়াল পোর্টাল: নতুন SC/ST/OBC শংসাপত্রের আবেদন, স্থিতির তদন্ত ও ডিজিটাল সার্টিফিকেট ডাউনলোড।",
                        "hi": "पश्चिम बंगाल पिछड़ा वर्ग कल्याण विभाग का पोर्टल: नए SC/ST/OBC जाति प्रमाण पत्र के लिए आवेदन और डाउनलोड।"
                },
                "category": "wb-edistrict",
                "category_name": {
                        "en": "West Bengal e-District",
                        "bn": "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট",
                        "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट"
                },
                "subcategory": "Social Welfare Certificates",
                "authority": "Backward Classes Welfare Department, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Certificate",
                "target_users": [
                        "Student",
                        "Job Seeker",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Permanent resident of West Bengal belonging to notified SC, ST, OBC-A or OBC-B communities.",
                                "Lineage proof / blood relation certificate or local inquiry justification."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা যিনি সরকারি তালিকাভুক্ত SC, ST, OBC-A বা OBC-B সম্প্রদায়ভুক্ত।",
                                "রক্তের সম্পর্কের আত্মীয়ের কাস্ট সার্টিফিকেট অথবা স্থানীয় অনুসন্ধান রিপোর্ট।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के स्थायी निवासी जो अधिसूचित SC, ST या OBC समुदाय से हैं।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Proof of Citizenship & Residence (Voter Card, Ration Card, Aadhaar, Land deed)",
                                "Blood Relation Certificate (Caste certificate of paternal blood relative with pedigree chart / Bansha Talika)",
                                "Proof of local residence (Pradhan / Councilor certificate)",
                                "Recent passport-size photograph."
                        ],
                        "bn": [
                                "নাগরিকত্ব ও বাসস্থানের প্রমাণ (ভোটার কার্ড, রেশন কার্ড, আধার, দলিল)",
                                "রক্তের সম্পর্কের প্রমাণ (পিতার বংশের আত্মীয়ের কাস্ট সার্টিফিকেট ও বংশতালিকা)",
                                "প্রধান / কাউন্সিলরের চারিত্রিক ও আবাসিক শংসাপত্র",
                                "এক কপি পাসপোর্ট ছবি।"
                        ],
                        "hi": [
                                "निवास व नागरिकता प्रमाण, रक्त संबंधी का जाति प्रमाण पत्र, वंशावली, पासपोर्ट फोटो।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Mandatory reservation eligibility for education, colleges, scholarships (Oasis/SVMCM), and government recruitment (WBPSC/WBP/SSC).",
                                "Digitally verifiable QR-coded certificate."
                        ],
                        "bn": [
                                "শিক্ষা, কলেজ ভর্তি, স্কলারশিপ (Oasis) ও সরকারি চাকরির পরীক্ষায় সংরক্ষণের সুযোগ।",
                                "ডিজিটাল কিউআর কোডযুক্ত শংসাপত্র।"
                        ],
                        "hi": [
                                "शिक्षा, छात्रवृत्ति और सरकारी नौकरियों में आरक्षण का लाभ।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit castcertificatewb.gov.in.",
                                "Click on 'Application for SC/ST/OBC Certificate'.",
                                "Select District, Sub-Division, Municipality/Block and apply for SC, ST, OBC-A, or OBC-B.",
                                "Fill applicant personal details, parents' details, and blood relative certificate info.",
                                "Upload applicant photograph and supporting documents.",
                                "Submit online, print the Application Form and Acknowledgement Slip.",
                                "Submit hard copy with self-attested documents at Duare Sarkar camp, BDO Office, or SDO Office for physical verification."
                        ],
                        "bn": [
                                "castcertificatewb.gov.in ওয়েবসাইটে যান।",
                                "'Application for SC/ST/OBC Certificate' অপশনে ক্লিক করুন।",
                                "জেলা, মহকুমা, ব্লক নির্বাচন করে SC/ST/OBC ক্যাটাগরি বেছে নিন।",
                                "ব্যক্তিগত তথ্য, পিতা-মাতার নাম ও রক্তের সম্পর্কের আত্মীয়ের সার্টিফিকেটের বিবরণ দিন।",
                                "ছবি আপলোড করে ফর্মটি সাবমিট করুন।",
                                "আবেদনপত্র ও রসিদটি প্রিন্ট করে নথিপত্র সহ দুয়ারে সরকার বা বিডিও অফিসে জমা দিন।"
                        ],
                        "hi": [
                                "castcertificatewb.gov.in पर जाएं।",
                                "फॉर्म भरकर विवरण दर्ज करें और फोटो अपलोड करें।",
                                "आवेदन पत्र प्रिंट कर आवश्यक दस्तावेजों के साथ बीडीओ या एसडीओ कार्यालय में जमा करें।"
                        ]
                },
                "official_homepage": "https://castcertificatewb.gov.in/",
                "official_apply_url": "https://castcertificatewb.gov.in/",
                "official_status_url": "https://castcertificatewb.gov.in/",
                "official_helpline": "033-2337-4051 (BCW Dept Kolkata)",
                "official_email": "bcw.wb@nic.in",
                "state": "West Bengal",
                "availability": "Online + Duare Sarkar + BDO / SDO Offices",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://castcertificatewb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "caste certificate",
                        "sc certificate wb",
                        "st certificate",
                        "obc certificate wb",
                        "caste certificate check status",
                        "oasis scholarship caste",
                        "কাস্ট সার্টিফিকেট",
                        "এসসি সার্টিফিকেট",
                        "এসটি সার্টিফিকেট",
                        "ওবিসি সার্টিফিকেট",
                        "কাস্ট সার্টিফিকেট স্ট্যাটাস",
                        "जाति प्रमाण पत्र पश्चिम बंगाल",
                        "एससी प्रमाण पत्र",
                        "ओबीसी प्रमाण पत्र"
                ],
                "scam_warning": {
                        "en": "Do NOT pay money to touts claiming to arrange caste certificates without valid blood lineage. Forged certificates lead to criminal prosecution and job cancellation.",
                        "bn": "বংশতালিকা ছাড়া ভুয়া কাস্ট সার্টিফিকেট বানিয়ে দেওয়ার নামে কাউকে টাকা দেবেন না। জাল সার্টিফিকেট ধরা পড়লে চাকরি ও ভর্তি বাতিল হবে।",
                        "hi": "जाली जाति प्रमाण पत्र बनवाने से बचें। यह दंडनीय अपराध है।"
                }
        },
        {
                "service_id": "wb-edistrict-income-domicile",
                "service_name": {
                        "en": "Income, Domicile & Residential Certificates (WB e-District 2.0)",
                        "bn": "ইনকাম ও ডোমিসাইল সার্টিফিকেট (পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট ২.০)",
                        "hi": "आय और निवास प्रमाण पत्र (पश्चिम बंगाल ई-डिस्ट्रिक्ट 2.0)"
                },
                "short_description": {
                        "en": "Unified single-window portal of Government of West Bengal for issuing statutory Domicile, Income, Character, Local Residence, and EWS certificates online.",
                        "bn": "পশ্চিমবঙ্গ সরকারের সমন্বিত পোর্টাল: অনলাইনে ডোমিসাইল, ইনকাম, চারিত্রিক ও অর্থনৈতিক অনগ্রসর (EWS) শংসাপত্র প্রাপ্তির সরকারি ব্যবস্থা।",
                        "hi": "पश्चिम बंगाल का एकल खिड़की पोर्टल: ऑनलाइन निवास (Domicile), आय (Income) और ईडब्ल्यूएस प्रमाण पत्र।"
                },
                "category": "wb-edistrict",
                "category_name": {
                        "en": "West Bengal e-District",
                        "bn": "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট",
                        "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट"
                },
                "subcategory": "Statutory Certificates",
                "authority": "Department of Personnel & Administrative Reforms, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Certificate",
                "target_users": [
                        "Student",
                        "Job Seeker",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Resident of West Bengal.",
                                "For Income: Proof of family annual income. For Domicile: Continuous residence in WB for 10+ years."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা।",
                                "ইনকামের জন্য: বার্ষিক পারিবারিক আয়ের প্রমাণ। ডোমিসাইলের জন্য: রাজ্যে ১০+ বছর একটানা বসবাসের প্রমাণ।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के निवासी। आय व निवास का उचित प्रमाण।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Residential Proof (Voter Card, Ration Card, Aadhaar, Land Tax / Khajna Receipt, Electricity Bill)",
                                "Income Proof (Salary Slip, Form 16, IT Return, or Pradhan/Councilor Income Certificate)",
                                "Passport-size photograph",
                                "Educational certificate / School certificate."
                        ],
                        "bn": [
                                "বাসস্থানের প্রমাণ (ভোটার কার্ড, আধার, খাজনা রসিদ, বিদ্যুৎ বিল)",
                                "আয়ের প্রমাণ (বেতনের স্লিপ, আইটি রিটার্ন বা প্রধান/কাউন্সিলরের আয়ের প্রশংসাপত্র)",
                                "এক কপি পাসপোর্ট ছবি।"
                        ],
                        "hi": [
                                "पते का प्रमाण, आय प्रमाण (सैलरी स्लिप या प्रधान/पार्षद रिपोर्ट), पासपोर्ट फोटो।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost on e-District portal.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Mandatory for state scholarship applications (SVMCM, Aikyashree), college admissions, state recruitment, and competitive quota claims.",
                                "Digitally signed by BDO / SDO."
                        ],
                        "bn": [
                                "স্কলারশিপ (SVMCM), কলেজ ভর্তি ও সরকারি চাকরিতে আবেদন করার জন্য বাধ্যতামূলক।",
                                "বিডিও বা এসডিও দ্বারা ডিজিটালি স্বাক্ষরিত শংসাপত্র।"
                        ],
                        "hi": [
                                "छात्रवृत्ति और सरकारी नौकरियों के लिए आवश्यक।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit edistrict.wb.gov.in.",
                                "Register as a new user or log in with mobile number and password.",
                                "Select 'Certificates' -> Click 'Issuance of Income Certificate' or 'Local Residence / Domicile Certificate'.",
                                "Fill applicant details, family occupation, annual income, and address.",
                                "Upload residential proof, income proof, and applicant photograph.",
                                "Submit application and download the Acknowledgment Slip (AIN Number).",
                                "Track status online; once approved, download the digitally signed certificate directly from portal."
                        ],
                        "bn": [
                                "edistrict.wb.gov.in পোর্টালে যান।",
                                "নতুন ইউজার হিসেবে রেজিস্টার বা লগইন করুন।",
                                "'Certificates' মেনু থেকে 'Income Certificate' বা 'Domicile Certificate' বেছে নিন।",
                                "ব্যক্তিগত বিবরণ, পারিবারিক পেশা, বার্ষিক আয় ও ঠিকানা পূরণ করুন।",
                                "ঠিকানা ও আয়ের প্রমাণপত্র এবং ছবি আপলোড করুন।",
                                "ফর্ম জমা দিয়ে AIN নম্বর সহ একনলেজমেন্ট স্লিপ সেভ করুন।",
                                "অনুমোদন হলে পোর্টাল থেকে ডিজিটালি স্বাক্ষরিত সার্টিফিকেট ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "edistrict.wb.gov.in पर लॉगिन करें।",
                                "इनकम या डोमिसाइल सर्टिफिकेट का चयन कर फॉर्म भरें और दस्तावेज अपलोड करें।",
                                "AIN नंबर से स्टेटस ट्रैक करें और स्वीकृत होने पर डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://edistrict.wb.gov.in/",
                "official_apply_url": "https://edistrict.wb.gov.in/",
                "official_status_url": "https://edistrict.wb.gov.in/",
                "official_helpline": "1800-345-5555 (e-District WB Toll Free)",
                "official_email": "edistrict@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online + BSK + BDO / SDO",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://edistrict.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "income certificate wb",
                        "domicile certificate wb",
                        "wb edistrict",
                        "residential certificate",
                        "edistrict 2.0",
                        "bdo income certificate",
                        "svmcm income",
                        "ইনকাম সার্টিফিকেট",
                        "ডোমিসাইল সার্টিফিকেট",
                        "ই ডিস্ট্রিক্ট",
                        "বিডিও ইনকাম সার্টিফিকেট",
                        "আবাসিক প্রমাণপত্র",
                        "आय प्रमाण पत्र पश्चिम बंगाल",
                        "निवास प्रमाण पत्र",
                        "ई-डिस्ट्रिक्ट पोर्टल"
                ],
                "scam_warning": {
                        "en": "Never pay private cyber cafes extra charges for 'Instant Approval'. Approvals are granted strictly by statutory BDO/SDO officers upon verification.",
                        "bn": "দ্রুত অনুমোদনের মিথ্যা আশ্বাসে অতিরিক্ত টাকা দেবেন না। সমস্ত অনুমোদন সরকারি আধিকারিকদের দ্বারা নিয়মানুযায়ী হয়।",
                        "hi": "त्वरित स्वीकृति के नाम पर किसी को अतिरिक्त पैसे न दें।"
                }
        },
        {
                "service_id": "wb-kanyashree-prakalpa",
                "service_name": {
                        "en": "Kanyashree Prakalpa (K1, K2 & K3 Schemes — West Bengal)",
                        "bn": "কন্যাশ্রী প্রকল্প (K1, K2 ও K3 স্কলারশিপ — পশ্চিমবঙ্গ)",
                        "hi": "कन्याश्री प्रकल्प (K1, K2 और K3 — पश्चिम बंगाल)"
                },
                "short_description": {
                        "en": "UN Public Service Award-winning conditional cash transfer scheme by Government of West Bengal promoting girl child education, preventing child marriage, and providing financial grants (K1 annual scholarship, K2 one-time grant of ₹25,000, and K3 PG scholarship).",
                        "bn": "পশ্চিমবঙ্গ সরকারের বিশ্বখ্যাত প্রকল্প: মেয়েদের পড়াশোনায় আর্থিক সহায়তা ও বাল্যবিবাহ রোধে বার্ষিক অনুদান (K1) এবং ১৮ বছর বয়সে এককালীন ₹২৫,০০০ টাকা (K2) ও স্নাতকোত্তর বৃত্তি (K3)।",
                        "hi": "बालिकाओं की शिक्षा और सशक्तिकरण के लिए पश्चिम बंगाल सरकार की योजना: K1 वार्षिक छात्रवृत्ति, K2 ₹25,000 एकमुश्त अनुदान और K3 उच्च शिक्षा अनुदान।"
                },
                "category": "women-girls",
                "category_name": {
                        "en": "Women & Girls Schemes",
                        "bn": "নারী ও কন্যাশ্রী প্রকল্প",
                        "hi": "महिला और बालिका योजनाएं"
                },
                "subcategory": "Girl Child Empowerment",
                "authority": "Department of Women & Child Development and Social Welfare, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "Student",
                        "Woman"
                ],
                "eligibility": {
                        "en": [
                                "Unmarried female resident students in West Bengal enrolled in recognized schools, colleges, or universities.",
                                "K1: Ages 13-18 enrolled in Class VIII-XII. K2: Ages 18-19 pursuing higher education. K3: Girls pursuing regular Post Graduation."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্বীকৃত বিদ্যালয় বা কলেজে পাঠরতা অবিবাহিতা ছাত্রী।",
                                "K1: ১৩-১৮ বছর (অষ্টম থেকে দ্বাদশ শ্রেণি)। K2: ১৮-১৯ বছর (উচ্চশিক্ষা রত)। K3: নিয়মিত স্নাতকোত্তর পাঠরতা।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल की अविवाहित छात्राएं। K1 (13-18 वर्ष), K2 (18-19 वर्ष) और K3 (पीजी छात्राएं)।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "School / College Admission Proof & ID",
                                "Age Proof (Birth Certificate or Madhyamik Admit Card)",
                                "Applicant's Single-Operated Bank Account Passbook (with IFSC and photo)",
                                "Unmarried declaration signed by parent/guardian",
                                "Aadhaar Card copy."
                        ],
                        "bn": [
                                "স্কুল বা কলেজের ভর্তির প্রমাণপত্র ও আইডি",
                                "বয়সের প্রমাণপত্র (জন্ম সার্টিফিকেট বা মাধ্যমিক অ্যাডমিট)",
                                "ছাত্রীর নিজস্ব সিঙ্গেল ব্যাংক একাউন্ট পাসবুক",
                                "অভিভাবক দ্বারা স্বাক্ষরিত অবিবাহিতা থাকার স্বঘোষণা",
                                "আধার কার্ডের কপি।"
                        ],
                        "hi": [
                                "स्कूल/कॉलेज का प्रमाण, आयु प्रमाण (जन्म प्रमाण पत्र), छात्रा का बैंक पासबुक, आधार कार्ड।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Application forms are provided free by the educational institution.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। স্কুল বা কলেজ থেকে ফর্ম বিনামূল্যে দেওয়া হয়।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "K1: Annual scholarship of ₹1,000.",
                                "K2: One-time grant of ₹25,000 credited directly to the student's bank account upon turning 18.",
                                "K3: Monthly stipend for Science (₹2,500/mo) and Arts/Commerce (₹2,000/mo) PG students."
                        ],
                        "bn": [
                                "K1: বার্ষিক ₹১,০০০ টাকা বৃত্তি।",
                                "K2: ১৮ বছর পূর্ণ হলে এককালীন ₹২৫,০০০ টাকা সরাসরি ব্যাংক একাউন্টে।",
                                "K3: স্নাতকোত্তরে প্রতি মাসে ₹২,০০০ থেকে ₹২,৫০০ টাকা উচ্চশিক্ষা বৃত্তি।"
                        ],
                        "hi": [
                                "K1: ₹1,000 वार्षिक। K2: ₹25,000 एकमुश्त अनुदान। K3: उच्च शिक्षा में मासिक सहायता।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Collect official Kanyashree Form (Form K1 or K2) free of cost from your school or college.",
                                "Fill in personal details, bank account details, and family info.",
                                "Attach birth proof, bank passbook copy, Aadhaar copy, and unmarried certificate.",
                                "Submit completed form to the Head of Institution (HOI / Principal / Headmaster).",
                                "Institution uploads and verifies the data on the official portal (wbkanyashree.gov.in).",
                                "Collect your unique 20-digit Kanyashree ID to track disbursement status online."
                        ],
                        "bn": [
                                "নিজ স্কুল বা কলেজ থেকে বিনামূল্যে কন্যাশ্রী ফর্ম (K1 বা K2) সংগ্রহ করুন।",
                                "ব্যক্তিগত বিবরণ, ব্যাংক একাউন্ট ও অভিভাবকের তথ্য পূরণ করুন।",
                                "জন্ম সার্টিফিকেট, ব্যাংক বই, আধার কার্ড ও অবিবাহিত থাকার সার্টিফিকেট যুক্ত করুন।",
                                "বিদ্যালয়ের প্রধান শিক্ষক বা শিক্ষিকার নিকট ফর্ম জমা দিন।",
                                "বিদ্যালয় পোর্টাল (wbkanyashree.gov.in) এ তথ্য আপলোড করবে।",
                                "২০ সংখ্যার কন্যাশ্রী আইডি দিয়ে অনলাইনে টাকা পাওয়ার স্থিতি ট্র্যাক করুন।"
                        ],
                        "hi": [
                                "अपने स्कूल या कॉलेज से कन्याश्री फॉर्म प्राप्त करें।",
                                "फॉर्म भरकर आवश्यक दस्तावेजों के साथ स्कूल में जमा करें।",
                                "स्कूल द्वारा ऑनलाइन अपलोड किए जाने के बाद आईडी से स्टेटस चेक करें।"
                        ]
                },
                "official_homepage": "https://www.wbkanyashree.gov.in/",
                "official_apply_url": "https://www.wbkanyashree.gov.in/",
                "official_status_url": "https://www.wbkanyashree.gov.in/track_application",
                "official_helpline": "1800-102-8014 (Kanyashree Toll Free Helpline)",
                "official_email": "support.kanyashree@wb.gov.in",
                "state": "West Bengal",
                "availability": "Through Schools / Colleges + Online Portal",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.wbkanyashree.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "kanyashree",
                        "kanyashree k1 k2 k3",
                        "kanyashree status check",
                        "wb kanyashree tracking",
                        "kanyashree 25000",
                        "girl scholarship wb",
                        "কন্যাশ্রী",
                        "কন্যাশ্রী টাকা",
                        "কন্যাশ্রী কে২",
                        "কন্যাশ্রী স্ট্যাটাস চেক",
                        "কন্যাশ্রী ২৫০০০",
                        "कन्याश्री प्रकल्प",
                        "कन्याश्री स्टेटस",
                        "बालिका छात्रवृत्ति"
                ],
                "scam_warning": {
                        "en": "Kanyashree money is transferred ONLY to the student's Aadhaar-linked single bank account. Never share OTP or net banking details with anyone claiming to 'release' funds.",
                        "bn": "কন্যাশ্রীর টাকা পাওয়ার জন্য কাউকে কোনো ওটিপি বা কমিশন দেবেন না। টাকা সরাসরি ব্যাংক একাউন্টে সরকারের তরফ থেকে জমা হয়।",
                        "hi": "कन्याश्री का पैसा केवल छात्रा के बैंक खाते में सीधे आता है। किसी से ओटीपी साझा न करें।"
                }
        },
        {
                "service_id": "wb-rupashree-prakalpa",
                "service_name": {
                        "en": "Rupashree Prakalpa (One-Time Marriage Grant of ₹25,000 — West Bengal)",
                        "bn": "রূপশ্রী প্রকল্প (বিয়ের জন্য এককালীন ₹২৫,০০০ অনুদান — পশ্চিমবঙ্গ)",
                        "hi": "रूपश्री प्रकल्प (विवाह हेतु ₹25,000 एकमुश्त अनुदान — पश्चिम बंगाल)"
                },
                "short_description": {
                        "en": "Government of West Bengal welfare scheme providing a one-time financial grant of ₹25,000 directly to economically disadvantaged adult women at the time of their first marriage.",
                        "bn": "পশ্চিমবঙ্গ সরকারের জনকল্যাণমূলক প্রকল্প: রাজ্যের আর্থিকভাবে পিছিয়ে পড়া পরিবারের প্রাপ্তবয়স্ক কন্যার প্রথম বিয়ের জন্য এককালীন ₹২৫,০০০ টাকার আর্থিক অনুদান।",
                        "hi": "पश्चिम बंगाल सरकार की योजना: आर्थिक रूप से कमजोर परिवार की वयस्क कन्या के प्रथम विवाह हेतु ₹25,000 का एकमुश्त अनुदान।"
                },
                "category": "women-girls",
                "category_name": {
                        "en": "Women & Girls Schemes",
                        "bn": "নারী ও কন্যাশ্রী প্রকল্প",
                        "hi": "महिला और बालिका योजनाएं"
                },
                "subcategory": "Marriage Assistance WB",
                "authority": "Department of Women & Child Development and Social Welfare, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "Woman",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Woman must be at least 18 years of age on marriage date; Groom must be at least 21 years old.",
                                "Applicant must be a resident of West Bengal.",
                                "Annual family income must not exceed ₹1.5 Lakhs.",
                                "Must be the applicant's first marriage."
                        ],
                        "bn": [
                                "কন্যার বয়স বিয়ের দিন ন্যূনতম ১৮ বছর ও বরের বয়স ন্যূনতম ২১ বছর হতে হবে।",
                                "আবেদনকারিণীকে পশ্চিমবঙ্গের স্থায়ী বাসিন্দা হতে হবে।",
                                "পরিবারের বার্ষিক আয় অনূর্ধ্ব ₹১.৫ লক্ষ টাকা হতে হবে।",
                                "এটি কন্যার প্রথম বিবাহ হতে হবে।"
                        ],
                        "hi": [
                                "कन्या की आयु 18 वर्ष और वर की 21 वर्ष से अधिक। वार्षिक पारिवारिक आय ₹1.5 लाख से कम।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Age proof of Applicant & Groom (Birth certificate, Madhyamik admit card, or Voter Card)",
                                "Proof of Marriage (Marriage Invitation Card or Marriage Registration notice)",
                                "Family Income Certificate issued by competent authority",
                                "Applicant's single-operated bank passbook (with IFSC)",
                                "Passport photographs of bride and groom."
                        ],
                        "bn": [
                                "কন্যা ও বরের বয়সের প্রমাণ (জন্ম সার্টিফিকেট, মাধ্যমিক অ্যাডমিট বা ভোটার কার্ড)",
                                "বিয়ের প্রমাণপত্র (বিয়ের নিমন্ত্রণপত্র বা ম্যারেজ রেজিস্ট্রেশন নোটিশ)",
                                "বার্ষিক পারিবারিক আয়ের সরকারি প্রশংসাপত্র",
                                "কন্যার নিজস্ব ব্যাংক পাসবুক",
                                "কন্যা ও বরের পাসপোর্ট ছবি।"
                        ],
                        "hi": [
                                "वर-वधु का आयु प्रमाण, विवाह निमंत्रण पत्र, आय प्रमाण पत्र, बैंक पासबुक और फोटो।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct ₹25,000 one-time financial grant credited to the woman's bank account before the marriage date.",
                                "Zero financial intermediaries."
                        ],
                        "bn": [
                                "বিয়ের তারিখের পূর্বে সরাসরি কন্যার নিজস্ব ব্যাংক একাউন্টে এককালীন ₹২৫,০০০ টাকা জমা।",
                                "সম্পূর্ণ স্বচ্ছ ও সরকারি সরাসরি অনুদান।"
                        ],
                        "hi": [
                                "विवाह से पूर्व बैंक खाते में सीधे ₹25,000 की वित्तीय सहायता।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Download the Rupashree application form from wbrupashree.gov.in or collect free from BDO / SDO / Municipality office.",
                                "Fill applicant, groom, and marriage details carefully.",
                                "Attach age proofs, income certificate, marriage card, and bank passbook.",
                                "Submit the form to your local BDO Office, SDO Office, or Municipality at least 30 to 60 days before the wedding date.",
                                "Inquiry officer conducts physical verification.",
                                "Upon approval, ₹25,000 is directly credited to the applicant's bank account via DBT before the marriage."
                        ],
                        "bn": [
                                "wbrupashree.gov.in ওয়েবসাইট থেকে রূপশ্রী ফর্ম ডাউনলোড করুন বা বিডিও/পৌরসভা থেকে বিনামূল্যে সংগ্রহ করুন।",
                                "কন্যা, বর ও বিয়ের যাবতীয় তথ্য পূরণ করুন।",
                                "বয়সের প্রমাণ, আয়ের সার্টিফিকেট, বিয়ের কার্ড ও ব্যাংক বই যুক্ত করুন।",
                                "বিয়ের অন্তত ৩০-৬০ দিন আগে সংশ্লিষ্ট বিডিও বা পৌরসভা অফিসে জমা দিন।",
                                "সরকারি আধিকারিক দ্বারা স্থানীয় তদন্ত সম্পন্ন হওয়ার পর অনুদান অনুমোদিত হবে।",
                                "বিয়ের আগেই সরাসরি ব্যাংক একাউন্টে ₹২৫,০০০ টাকা ঢুকবে।"
                        ],
                        "hi": [
                                "wbrupashree.gov.in से फॉर्म डाउनलोड करें।",
                                "विवाह से 30-60 दिन पूर्व स्थानीय बीडीओ या नगरपालिका कार्यालय में जमा करें।"
                        ]
                },
                "official_homepage": "https://wbrupashree.gov.in/",
                "official_apply_url": "https://wbrupashree.gov.in/",
                "official_status_url": "https://wbrupashree.gov.in/track_status",
                "official_helpline": "033-2337-4051 (WCD & SW Dept WB)",
                "official_email": "support.rupashree@wb.gov.in",
                "state": "West Bengal",
                "availability": "BDO / SDO / Municipality Offices + Online Tracking",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wbrupashree.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "rupashree",
                        "rupashree prakalpa",
                        "rupashree 25000",
                        "wb marriage assistance",
                        "rupashree tracking",
                        "rupashree form pdf",
                        "রূপশ্রী",
                        "রূপশ্রী প্রকল্প",
                        "রূপশ্রী টাকা",
                        "রূপশ্রী ফর্ম",
                        "বিয়ের জন্য সরকারি টাকা",
                        "रूपश्री योजना",
                        "विवाह अनुदान पश्चिम बंगाल"
                ],
                "scam_warning": {
                        "en": "Do NOT pay commission to brokers promising early approval. Rupashree is an official DBT transfer directly from the State Treasury.",
                        "bn": "রূপশ্রীর টাকা পাইয়ে দেওয়ার নামে কোনো দালালকে টাকা দেবেন না। টাকা সরাসরি সরকারি ট্রেজারি থেকে একাউন্টে আসে।",
                        "hi": "रूपश्री योजना के लिए किसी बिचौलिए को पैसे न दें।"
                }
        },
        {
                "service_id": "wb-jai-bangla-pension",
                "service_name": {
                        "en": "Jai Bangla Pension Scheme (Old Age, Widow & Disability — West Bengal)",
                        "bn": "জয় বাংলা পেনশন প্রকল্প (বার্ধক্য, বিধবা ও প্রতিবন্ধী পেনশন — পশ্চিমবঙ্গ)",
                        "hi": "जय बांग्ला पेंशन योजना (वृद्धावस्था, विधवा और दिव्यांग पेंशन — पश्चिम बंगाल)"
                },
                "short_description": {
                        "en": "Unified umbrella social security pension scheme of Government of West Bengal providing monthly financial pensions (Taposili Bandhu for SC, Jai Johar for ST, Manabik for PwD, Old Age Pension, and Widow Pension) credited directly to bank accounts.",
                        "bn": "পশ্চিমবঙ্গ সরকারের সমন্বিত সামাজিক সুরক্ষা পেনশন প্রকল্প: তপশিলি বন্ধু (SC), জয় জোহার (ST), মানবিক (প্রতিবন্ধী), বার্ধক্য ও বিধবা পেনশনের অধীনে প্রতি মাসে সরাসরি ব্যাংক একাউন্টে পেনশন প্রদান।",
                        "hi": "पश्चिम बंगाल सरकार की एकीकृत सामाजिक सुरक्षा पेंशन योजना: वृद्धावस्था, विधवा, दिव्यांग (मानविक), तपोसिली बंधु (SC) और जय जोहार (ST) मासिक पेंशन।"
                },
                "category": "pension-security",
                "category_name": {
                        "en": "Pension & Social Security",
                        "bn": "পেনশন ও সামাজিক সুরক্ষা",
                        "hi": "पेंशन और सामाजिक सुरक्षा"
                },
                "subcategory": "State Social Pension",
                "authority": "Department of Women & Child Development and Social Welfare / BCW / Tribal Development, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Scheme",
                "target_users": [
                        "Senior Citizen",
                        "Woman",
                        "Person with Disability"
                ],
                "eligibility": {
                        "en": [
                                "Resident of West Bengal.",
                                "Old Age / Taposili Bandhu / Jai Johar: 60+ years of age.",
                                "Widow Pension: Destitute widows.",
                                "Manabik Disability: 40%+ benchmark disability certified by medical board.",
                                "Must not be receiving other government pensions."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের স্থায়ী বাসিন্দা।",
                                "বার্ধক্য / তপশিলি বন্ধু / জয় জোহার: ৬০ বা তদূর্ধ্ব বয়স।",
                                "বিধবা পেনশন: স্বামীহীনা অসচ্ছল নারী।",
                                "মানবিক পেনশন: ৪০% বা তদূর্ধ্ব প্রতিবন্ধকতা শংসাপত্রধারী।",
                                "অন্য কোনো সরকারি পেনশন না পাওয়া বাধ্যতামূলক।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के स्थायी निवासी। वृद्धावस्था हेतु 60+ वर्ष, विधवा या 40%+ दिव्यांगता प्रमाण पत्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card copy",
                                "Voter ID Card copy",
                                "Age Proof (Birth certificate / School admit / Epic card)",
                                "Bank Passbook copy (with IFSC code)",
                                "Caste Certificate (for SC/ST pensions)",
                                "Disability Certificate from Medical Board (for Manabik Pension)",
                                "Husband's Death Certificate (for Widow Pension)."
                        ],
                        "bn": [
                                "আধার কার্ডের কপি",
                                "ভোটার কার্ডের কপি",
                                "বয়সের প্রমাণপত্র",
                                "ব্যাংক পাসবুকের কপি (IFSC কোড সহ)",
                                "কাস্ট সার্টিফিকেট (তপশিলি বন্ধু/জয় জোহারের জন্য)",
                                "মেডিকেল বোর্ডের প্রতিবন্ধী সার্টিফিকেট (মানবিক পেনশনের জন্য)",
                                "স্বামীর মৃত্যু শংসাপত্র (বিধবা পেনশনের জন্য)।"
                        ],
                        "hi": [
                                "आधार, वोटर कार्ड, आयु प्रमाण, बैंक पासबुक, जाति प्रमाण पत्र, मृत्यु प्रमाण पत्र या दिव्यांगता प्रमाण पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Guaranteed monthly financial support (₹1,000 per month) credited directly to bank account via DBT.",
                                "Lifelong social security for senior citizens, widows, and persons with disabilities."
                        ],
                        "bn": [
                                "প্রতি মাসে নির্দিষ্ট মাসিক আর্থিক ভাতা (₹১,০০০/মাস) সরাসরি ব্যাংক একাউন্টে প্রদান।",
                                "প্রবীণ, বিধবা ও প্রতিবন্ধী ভাই-বোনদের আজীবন সামাজিক সুরক্ষা।"
                        ],
                        "hi": [
                                "प्रति माह ₹1,000 की वित्तीय सहायता सीधे बैंक खाते में।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Download Jai Bangla Pension application form from jaibangla.wb.gov.in or collect free from BDO / Municipality / Duare Sarkar camps.",
                                "Fill applicant details, category (Old Age, Widow, Disability, SC, ST), and bank account details.",
                                "Attach Aadhaar, Voter Card, Bank Passbook, and category proof (Death/Disability/Caste cert).",
                                "Submit form at Duare Sarkar camp, BDO Office (Rural), or SDO/Municipality Office (Urban).",
                                "Collect acknowledgement receipt and track approval status on official portal."
                        ],
                        "bn": [
                                "jaibangla.wb.gov.in থেকে 'Jai Bangla' ফর্ম ডাউনলোড করুন বা দুয়ারে সরকার ক্যাম্প/বিডিও অফিস থেকে সংগ্রহ করুন।",
                                "ব্যক্তিগত বিবরণ, পেনশনের ধরন এবং ব্যাংক একাউন্টের তথ্য পূরণ করুন।",
                                "আধার, ভোটার কার্ড, ব্যাংক বই এবং সংশ্লিষ্ট প্রমাণপত্র যুক্ত করুন।",
                                "দুয়ারে সরকার ক্যাম্প বা বিডিও/পৌরসভা অফিসে জমা দিন।",
                                "রসিদ সংগ্রহ করে jaibangla.wb.gov.in পোর্টালে স্থিতি যাচাই করুন।"
                        ],
                        "hi": [
                                "jaibangla.wb.gov.in से फॉर्म डाउनलोड करें या दुआरे सरकार कैंप से प्राप्त करें।",
                                "फॉर्म भरकर आवश्यक दस्तावेजों के साथ बीडीओ या नगरपालिका में जमा करें।"
                        ]
                },
                "official_homepage": "https://jaibangla.wb.gov.in/",
                "official_apply_url": "https://jaibangla.wb.gov.in/",
                "official_status_url": "https://jaibangla.wb.gov.in/",
                "official_helpline": "1800-345-5555 (Govt of West Bengal Toll Free)",
                "official_email": "support.jaibangla@wb.gov.in",
                "state": "West Bengal",
                "availability": "Duare Sarkar Camps + BDO / SDO Offices + Online Portal",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://jaibangla.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "jai bangla pension",
                        "old age pension wb",
                        "widow pension wb",
                        "manabik pension",
                        "taposili bandhu",
                        "jai johar",
                        "wb pension status",
                        "জয় বাংলা পেনশন",
                        "বার্ধক্য পেনশন",
                        "বিধবা পেনশন",
                        "মানবিক পেনশন",
                        "তপশিলি বন্ধু",
                        "পেনশন স্ট্যাটাস",
                        "जय बांग्ला पेंशन",
                        "वृद्धावस्था पेंशन",
                        "विधवा पेंशन पश्चिम बंगाल"
                ],
                "scam_warning": {
                        "en": "Pension funds are disbursed strictly via DBT into the beneficiary's registered bank account. Beware of fake calls demanding OTP or fee payments to 'activate' your pension.",
                        "bn": "পেনশন চালু করে দেওয়ার নাম করে কাউকে ওটিপি বা টাকা দেবেন না। সরকারিভাবে অনুমোদন পেলেই টাকা সরাসরি একাউন্টে আসে।",
                        "hi": "पेंशन चालू करने के नाम पर किसी अज्ञात व्यक्ति को पैसे या ओटीपी न दें।"
                }
        },
        {
                "service_id": "eshram-national-unorganized-workers",
                "service_name": {
                        "en": "e-Shram Portal (National Database of Unorganized Workers — eShram Card)",
                        "bn": "ই-শ্রম পোর্টাল (অসংগঠিত শ্রমিকদের জাতীয় ডেটাবেস ও ই-শ্রম কার্ড)",
                        "hi": "ई-श्रम पोर्टल (असंगठित श्रमिकों का राष्ट्रीय डेटाबेस और ई-श्रम कार्ड)"
                },
                "short_description": {
                        "en": "Official Ministry of Labour & Employment portal to register unorganized workers, gig workers, construction workers, agricultural laborers, and street vendors to receive a 12-digit Universal Account Number (UAN) e-Shram Card and accidental insurance benefits.",
                        "bn": "কেন্দ্রীয় শ্রম ও কর্মসংস্থান মন্ত্রকের অফিশিয়াল পোর্টাল: অসংগঠিত শ্রমিক, দিনমজুর, নির্মাণ শ্রমিক, পরিযায়ী শ্রমিক ও হকারদের ১২ সংখ্যার UAN ই-শ্রম কার্ড ও দুর্ঘটনা বীমা সুবিধা প্রদান।",
                        "hi": "श्रम और रोजगार मंत्रालय का आधिकारिक पोर्टल: असंगठित कामगारों के लिए 12 अंकों का UAN ई-श्रम कार्ड और कल्याणकारी योजनाओं का लाभ।"
                },
                "category": "labour-workers",
                "category_name": {
                        "en": "Workers & Labour Welfare",
                        "bn": "শ্রমিক ও শ্রম কল্যাণ",
                        "hi": "श्रमिक और श्रम कल्याण"
                },
                "subcategory": "Unorganized Workers Database",
                "authority": "Ministry of Labour & Employment, Government of India",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "Worker",
                        "Farmer",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Unorganized worker aged between 16 and 59 years.",
                                "Not an income taxpayer and not a member of EPFO or ESIC."
                        ],
                        "bn": [
                                "১৬ থেকে ৫৯ বছর বয়সী অসংগঠিত শ্রমিক বা স্বনিযুক্ত ব্যক্তি।",
                                "আয়করদাতা না হওয়া এবং EPFO বা ESIC এর সদস্য না হওয়া।"
                        ],
                        "hi": [
                                "16-59 वर्ष आयु वर्ग के असंगठित कामगार, जो आयकर दाता और ईपीएफओ/ईएसआईसी के सदस्य न हों।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Number",
                                "Aadhaar-linked active mobile number",
                                "Active bank account details with IFSC code."
                        ],
                        "bn": [
                                "আধার নম্বর",
                                "আধারের সাথে লিংক থাকা সচল মোবাইল নম্বর",
                                "ব্যাংক একাউন্ট নম্বর ও IFSC কোড।"
                        ],
                        "hi": [
                                "आधार नंबर, आधार से जुड़ा मोबाइल नंबर और बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost on self-registration portal.",
                        "bn": "সেলফ রেজিস্ট্রেশন পোর্টালে সম্পূর্ণ বিনামূল্যে।",
                        "hi": "सेल्फ रजिस्ट्रेशन पोर्टल पर पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "12-digit Universal Account Number (UAN) e-Shram Card valid across India.",
                                "Accidental insurance coverage under PMSBY (₹2 Lakhs on accidental death / permanent disability).",
                                "Direct eligibility for future central and state social security benefits."
                        ],
                        "bn": [
                                "সারাদেশে গ্রহণযোগ্য ১২ সংখ্যার UAN ই-শ্রম কার্ড।",
                                "দুর্ঘটনাজনিত মৃত্যু বা স্থায়ী প্রতিবন্ধকতায় ₹২ লক্ষ টাকার বীমা কভারেজ।",
                                "সরকারি সামাজিক সুরক্ষা প্রকল্পের সরাসরি সুবিধা।"
                        ],
                        "hi": [
                                "12 अंकों का राष्ट्रीय UAN कार्ड और ₹2 लाख तक का दुर्घटना बीमा कवर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit eshram.gov.in and click on 'Register on eShram'.",
                                "Enter Aadhaar-linked mobile number and Captcha, then verify OTP.",
                                "Enter 12-digit Aadhaar Number, agree to terms, and authenticate with Aadhaar OTP.",
                                "Review auto-fetched Aadhaar personal details.",
                                "Fill educational qualification, occupation/skill, and bank account details.",
                                "Preview self-declaration and submit.",
                                "Instantly download and print your UAN e-Shram Card with QR code."
                        ],
                        "bn": [
                                "eshram.gov.in ওয়েবসাইটে যান এবং 'Register on eShram' এ ক্লিক করুন।",
                                "আধার-লিংকড মোবাইল নম্বর ও ক্যাপচা দিয়ে ওটিপি ভেরিফাই করুন।",
                                "১২ সংখ্যার আধার নম্বর দিয়ে আধার ওটিপি নিশ্চিত করুন।",
                                "ব্যক্তিগত তথ্য, শিক্ষাগত যোগ্যতা, পেশা ও ব্যাংকের বিবরণ পূরণ করুন।",
                                "ফর্মটি সাবমিট করে তাৎক্ষণিক কিউআর কোডযুক্ত ১২ সংখ্যার UAN ই-শ্রম কার্ড ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "eshram.gov.in पर जाकर 'Register on eShram' चुनें।",
                                "आधार नंबर और ओटीपी से सत्यापन कर विवरण भरें।",
                                "तुरंत अपना 12 अंकों का UAN ई-श्रम कार्ड डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://eshram.gov.in/",
                "official_apply_url": "https://register.eshram.gov.in/",
                "official_status_url": "https://register.eshram.gov.in/",
                "official_helpline": "14434 (e-Shram National Toll Free Helpline)",
                "official_email": "helpdesk-eshram@gov.in",
                "state": "All India",
                "availability": "Online + CSC (Common Service Centers)",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://eshram.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "eshram",
                        "eshram card download",
                        "e-shram portal",
                        "uan card download",
                        "eshram registration",
                        "unorganized workers card",
                        "ই শ্রম",
                        "ই শ্রম কার্ড",
                        "ই শ্রম রেজিস্ট্রেশন",
                        "ইশ্রম কার্ড ডাউনলোড",
                        "শ্রমিক কার্ড",
                        "ई श्रम कार्ड",
                        "ई श्रम डाउनलोड",
                        "ई श्रम रजिस्ट्रेशन"
                ],
                "scam_warning": {
                        "en": "Self-registration on eshram.gov.in is 100% free. Never pay money on private fake websites mimicking e-Shram logos.",
                        "bn": "ই-শ্রম কার্ড তৈরির জন্য কোনো সরকারি ফি লাগে না। ভুয়া নকল ওয়েবসাইটে টাকা দেওয়া থেকে বিরত থাকুন।",
                        "hi": "ई-श्रम पंजीकरण आधिकारिक पोर्टल पर बिल्कुल मुफ्त है।"
                }
        },
        {
                "service_id": "epfo-uan-member-passbook",
                "service_name": {
                        "en": "EPFO UAN Member Portal & PF Passbook / Claims",
                        "bn": "ইপিএফও সদস্য পোর্টাল, পিএফ পাসবুক ও অনলাইন ক্লেম (EPFO UAN)",
                        "hi": "ईपीएफओ सदस्य पोर्टल, पीएफ पासबुक और ऑनलाइन क्लेम (EPFO UAN)"
                },
                "short_description": {
                        "en": "Official Employees' Provident Fund Organisation (EPFO) portal for activating Universal Account Number (UAN), downloading EPF Passbook, submitting online PF withdrawal/advance claims (Form 31, 19, 10C), and managing KYC.",
                        "bn": "কর্মচারী ভবিষ্য তহবিল সংস্থা (EPFO) এর অফিশিয়াল পোর্টাল: UAN অ্যাক্টিভেশন, পিএফ পাসবুক ডাউনলোড, অগ্রিম পিএফ তোলার অনলাইন ক্লেম এবং কেওয়াইসি আপডেট।",
                        "hi": "कर्मचारी भविष्य निधि संगठन (EPFO) का आधिकारिक पोर्टल: UAN सक्रियण, पीएफ पासबुक डाउनलोड और ऑनलाइन पीएफ निकासी क्लेम।"
                },
                "category": "labour-workers",
                "category_name": {
                        "en": "Workers & Labour Welfare",
                        "bn": "শ্রমিক ও শ্রম কল্যাণ",
                        "hi": "श्रमिक और श्रम कल्याण"
                },
                "subcategory": "Provident Fund Services",
                "authority": "Employees' Provident Fund Organisation, Ministry of Labour & Employment, Government of India",
                "government_level": "Central",
                "service_type": "Banking",
                "target_users": [
                        "Worker",
                        "Job Seeker",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Salaried employees registered under the EPF & MP Act, 1952 with an allotted 12-digit UAN."
                        ],
                        "bn": [
                                "ইপিএফ এর আওতাভুক্ত চাকরিজীবী কর্মচারী যাঁদের ১২ সংখ্যার UAN রয়েছে।"
                        ],
                        "hi": [
                                "12 अंकों का UAN नंबर रखने वाले वेतनभोगी कर्मचारी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "12-digit UAN Number",
                                "Aadhaar-linked active mobile number",
                                "Bank account linked with UAN and verified with IFSC & PAN."
                        ],
                        "bn": [
                                "১২ সংখ্যার UAN নম্বর",
                                "আধার-লিংকড মোবাইল নম্বর",
                                "ব্যাংক একাউন্ট ও প্যান কার্ড।"
                        ],
                        "hi": [
                                "12 अंकों का UAN, आधार लिंक्ड मोबाइल और बैंक खाता।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No charges for PF passbook download or online claims.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। পাসবুক দেখা বা ক্লেম সাবমিট করতে কোনো ফি লাগে না।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct online submission of advance / settlement claims with funds transferred to bank account within 3–7 working days.",
                                "Real-time monthly contribution tracking.",
                                "Consolidated view of multiple past employments."
                        ],
                        "bn": [
                                "ঘরে বসে ৩-৭ দিনের মধ্যে ব্যাংক একাউন্টে পিএফ এর টাকা তোলার সুবিধা।",
                                "প্রতি মাসের পিএফ জমার বিবরণ লাইভ ট্র্যাকিং।",
                                "পুরোনো কোম্পানির পিএফ ব্যালেন্স এক ক্লিকে ট্রান্সফার।"
                        ],
                        "hi": [
                                "घर बैठे ऑनलाइन पीएफ निकासी और पासबुक बैलेंस की जांच।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit unifiedportal-mem.epfindia.gov.in.",
                                "If first time: Click 'Activate UAN' -> Enter UAN, Aadhaar, Name, DOB, Mobile -> Authenticate with OTP.",
                                "Log in with UAN and password, complete Captcha.",
                                "For Passbook: Visit passbook.epfindia.gov.in to view contribution statements.",
                                "For Withdrawal / Advance: Click 'Online Services' -> 'Claim (Form-31, 19, 10C & 10D)'.",
                                "Verify bank account number, select claim purpose, upload scanned cheque / passbook copy, and authenticate via Aadhaar OTP."
                        ],
                        "bn": [
                                "unifiedportal-mem.epfindia.gov.in পোর্টালে যান।",
                                "প্রথমবার হলে: 'Activate UAN' এ গিয়ে আধার ও মোবাইল দিয়ে ওটিপি অ্যাক্টিভেট করুন।",
                                "UAN ও পাসওয়ার্ড দিয়ে লগইন করুন।",
                                "পাসবুক দেখতে passbook.epfindia.gov.in এ যান।",
                                "পিএফ তোলার জন্য: 'Online Services' -> 'Claim' এ গিয়ে ফর্ম ৩১/১৯ পূরণ করুন।",
                                "ব্যাংক একাউন্ট নম্বর ভেরিফাই করে ক্যানসেল চেক আপলোড করুন এবং আধার ওটিপি দিয়ে সাবমিট করুন।"
                        ],
                        "hi": [
                                "unifiedportal-mem.epfindia.gov.in पर लॉगिन करें।",
                                "पासबुक देखने के लिए passbook.epfindia.gov.in पर जाएं।",
                                "ऑनलाइन क्लेम के लिए 'Online Services' में जाकर फॉर्म भरें और आधार ओटीपी से सबमिट करें।"
                        ]
                },
                "official_homepage": "https://www.epfindia.gov.in/",
                "official_apply_url": "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
                "official_status_url": "https://passbook.epfindia.gov.in/MemberPassBook/Login",
                "official_helpline": "1800-118-005 (EPFO National Toll Free)",
                "official_email": "epf-grievance@epfindia.gov.in",
                "state": "All India",
                "availability": "Online + UMANG App + Regional PF Offices",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.epfindia.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "epfo",
                        "epf passbook",
                        "uan login",
                        "pf balance check",
                        "pf withdrawal online",
                        "form 31 advance pf",
                        "member portal epfo",
                        "ইপিএফও",
                        "পিএফ ব্যালেন্স",
                        "পিএফ তোলার নিয়ম",
                        "ইউএএন লগইন",
                        "পিএফ পাসবুক",
                        "ईपीएफओ पासबुक",
                        "पीएफ बैलेंस चेक",
                        "UAN लॉगिन",
                        "पीएफ निकासी"
                ],
                "scam_warning": {
                        "en": "EPFO never asks for your UAN password or OTP over the phone. Never share credentials with third-party unauthorized mobile apps.",
                        "bn": "ইপিএফও কখনো ফোন করে আপনার পাসওয়ার্ড বা ওটিপি জানতে চায় না। কাউকে পাসওয়ার্ড দেওয়া থেকে বিরত থাকুন।",
                        "hi": "ईपीएफओ कभी फोन पर पासवर्ड या ओटीपी नहीं मांगता।"
                }
        },
        {
                "service_id": "irctc-indian-railway-train-booking",
                "service_name": {
                        "en": "IRCTC Official Train Ticket Booking & Live PNR Status",
                        "bn": "আইআরসিটিসি অফিশিয়াল রেল টিকিট বুকিং ও লাইভ পিএনআর স্ট্যাটাস (IRCTC)",
                        "hi": "आईआरसीटीसी आधिकारिक ट्रेन टिकट बुकिंग और लाइव पीएनआर स्टेटस (IRCTC)"
                },
                "short_description": {
                        "en": "Official Indian Railway Catering and Tourism Corporation (IRCTC) portal for reserving online train tickets, Tatkal bookings, checking live PNR status, train running status, and cancellation refunds.",
                        "bn": "ভারতীয় রেলওয়ের অফিশিয়াল ক্যাটারিং ও পর্যটন কর্পোরেশন পোর্টাল: অনলাইন সংরক্ষিত ট্রেনের টিকিট ও তৎকাল বুকিং, লাইভ পিএনআর স্ট্যাটাস এবং ট্রেন রানিং স্ট্যাটাস।",
                        "hi": "भारतीय रेलवे का आधिकारिक आईआरसीटीसी पोर्टल: ऑनलाइन ट्रेन टिकट, तत्काल बुकिंग, लाइव पीएनआर स्थिति और रिफंड।"
                },
                "category": "travel-railway",
                "category_name": {
                        "en": "Travel & Railway Services",
                        "bn": "রেল টিকিট ও ভ্রমণ (IRCTC)",
                        "hi": "रेल यात्रा और आईआरसीटीसी"
                },
                "subcategory": "Public Railway Transportation",
                "authority": "Indian Railway Catering and Tourism Corporation (IRCTC) / Ministry of Railways",
                "government_level": "Central",
                "service_type": "Travel",
                "target_users": [
                        "General Citizen",
                        "Student",
                        "Senior Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Registered IRCTC user with valid mobile number and email ID."
                        ],
                        "bn": [
                                "বৈধ মোবাইল ও ইমেল আইডি দ্বারা রেজিস্ট্রিকৃত আইআরসিটিসি ব্যবহারকারী।"
                        ],
                        "hi": [
                                "पंजीकृत आईआरसीटीसी उपयोगकर्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Valid Government Photo ID during journey (Aadhaar, Voter ID, Driving Licence, Passport)",
                                "IRCTC User ID & Password."
                        ],
                        "bn": [
                                "ভ্রমণকালে সঙ্গে রাখার মতো বৈধ পরিচয়পত্র (আধার, ভোটার, ড্রাইভিং লাইসেন্স বা পাসপোর্ট)।"
                        ],
                        "hi": [
                                "यात्रा के दौरान वैध मूल पहचान पत्र (आधार, वोटर कार्ड, ड्राइविंग लाइसेंस)।"
                        ]
                },
                "application_fee": {
                        "en": "Statutory railway fare + standard IRCTC convenience fee (₹15 + GST for non-AC, ₹30 + GST for AC on UPI).",
                        "bn": "সরকারি ট্রেনের ভাড়া ও নির্দিষ্ট নামমাত্র আইআরসিটিসি কনভেনিয়েন্স ফি।",
                        "hi": "रेलवे का मूल किराया और न्यूनतम आईआरसीटीसी सुविधा शुल्क।"
                },
                "benefits": {
                        "en": [
                                "100% genuine electronic reservation slip (e-Ticket) directly recognized by Indian Railways Ticket Examiners (TTE).",
                                "Instant automated cancellation refunds directly into source bank account.",
                                "Live real-time PNR and chart preparation status."
                        ],
                        "bn": [
                                "টিটিই (TTE) দ্বারা স্বীকৃত ১০০% খাঁটি ডিজিটাল ই-টিকিট।",
                                "টিকিট বাতিলের টাকা সরাসরি ব্যাংক একাউন্টে ফেরত।",
                                "লাইভ পিএনআর ও চার্ট প্রস্তুত হওয়ার সঠিক আপডেট।"
                        ],
                        "hi": [
                                "मान्य ई-टिकट और सुरक्षित रिफंड की सुविधा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official IRCTC website (irctc.co.in) or open official IRCTC Rail Connect App.",
                                "Log in with your verified IRCTC User ID and password.",
                                "Enter Origin Station, Destination Station, Date of Journey, and Class.",
                                "Select train, choose quota (General / Tatkal / Ladies / Senior Citizen) and click 'Book Now'.",
                                "Add passenger details exactly matching Government ID card.",
                                "Pay securely via UPI (BHIM/GooglePay/PhonePe), Debit/Credit Card, or Net Banking.",
                                "Download the Electronic Reservation Slip (ERS) and receive SMS confirmation."
                        ],
                        "bn": [
                                "অফিসিয়াল irctc.co.in ওয়েবসাইটে যান বা 'IRCTC Rail Connect' অ্যাপ খুলুন।",
                                "ইউজার আইডি ও পাসওয়ার্ড দিয়ে লগইন করুন।",
                                "যাত্রা শুরুর স্টেশন, গন্তব্য ও তারিখ নির্বাচন করে ট্রেন খুঁজুন।",
                                "কোটা (General / Tatkal) বেছে নিয়ে 'Book Now' এ ক্লিক করুন।",
                                "যাত্রীর নাম ও বয়স পরিচয়পত্রের সাথে মিলিয়ে পূরণ করুন।",
                                "ইউপিআই (UPI) বা কার্ড দিয়ে পেমেন্ট সম্পন্ন করুন।",
                                "ই-টিকিট সেভ করুন এবং মোবাইলে আসা কনফার্মেশন এসএমএস সংরক্ষণ করুন।"
                        ],
                        "hi": [
                                "irctc.co.in पर लॉगिन करें।",
                                "स्टेशन, तारीख और श्रेणी चुनकर ट्रेन खोजें।",
                                "यात्री विवरण भरकर यूपीआई या कार्ड से भुगतान करें और ई-टिकट डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://www.irctc.co.in/",
                "official_apply_url": "https://www.irctc.co.in/nget/train-search",
                "official_status_url": "https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html",
                "official_helpline": "139 (Indian Railways 24x7 Customer Care & PNR Helpline)",
                "official_email": "care@irctc.co.in",
                "state": "All India",
                "availability": "Online 24x7 + Railway PRS Counters",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.irctc.co.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "irctc",
                        "train ticket booking",
                        "pnr status live",
                        "railway ticket online",
                        "tatkal ticket booking",
                        "indian railways reservation",
                        "irctc login",
                        "আইআরসিটিসি",
                        "ট্রেনের টিকিট বুকিং",
                        "পিএনআর স্ট্যাটাস",
                        "তৎকাল টিকিট",
                        "রেল টিকিট",
                        "आईआरसीटीसी",
                        "ट्रेन टिकट बुकिंग",
                        "पीएनआर स्टेटस",
                        "तत्काल टिकट"
                ],
                "scam_warning": {
                        "en": "Beware of unauthorized third-party apps charging exorbitant hidden fees or selling fake waitlisted tickets. IRCTC (irctc.co.in) is the ONLY official portal for Indian Railways booking.",
                        "bn": "অতিরিক্ত টাকা নেওয়া ভুয়া অ্যাপ বা দালালদের থেকে টিকিট কাটবেন না। কেবলমাত্র অফিশিয়াল irctc.co.in থেকে টিকিট কাটুন।",
                        "hi": "फर्जी ऐप्स या अवैध दलालों से टिकट न खरीदें। केवल आधिकारिक आईआरसीटीसी से टिकट बुक करें।"
                }
        },
        {
                "service_id": "wbtc-wb-government-bus-services",
                "service_name": {
                        "en": "West Bengal Transport Corporation (WBTC Official Bus Booking & Schedules)",
                        "bn": "পশ্চিমবঙ্গ পরিবহন নিগম (WBTC সরকারি বাস টিকিট ও সময়সূচি)",
                        "hi": "पश्चिम बंगाल परिवहन निगम (WBTC सरकारी बस बुकिंग और समय सारणी)"
                },
                "short_description": {
                        "en": "Official Government of West Bengal portal for online booking of state government AC/Non-AC long-distance buses (Kolkata to Digha, Siliguri, Purulia, Bakkhali, Asansol), timetables, and smart transit pass services.",
                        "bn": "পশ্চিমবঙ্গ সরকারের অফিশিয়াল পরিবহন পোর্টাল: দূরপাল্লার সরকারি বাস (কলকাতা থেকে দীঘা, শিলিগুড়ি, পুরুলিয়া, আসানসোল) টিকিট বুকিং ও বাস চলাচলের সময়সূচি।",
                        "hi": "पश्चिम बंगाल सरकार का आधिकारिक पोर्टल: कोलकाता से दीघा, सिलीगुड़ी आदि लंबी दूरी की सरकारी एसी/नॉन-एसी बसों की ऑनलाइन टिकट बुकिंग।"
                },
                "category": "travel-railway",
                "category_name": {
                        "en": "Travel & Railway Services",
                        "bn": "রেল টিকিট ও ভ্রমণ (IRCTC)",
                        "hi": "रेल यात्रा और आईआरসিटीसी"
                },
                "subcategory": "State Public Road Transport",
                "authority": "West Bengal Transport Corporation (WBTC) / Transport Department, Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Travel",
                "target_users": [
                        "General Citizen",
                        "Student",
                        "Senior Citizen"
                ],
                "eligibility": {
                        "en": [
                                "All passengers traveling on West Bengal state transit routes."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সরকারি বাস রুটে ভ্রমণকারী সমস্ত যাত্রী।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल की सरकारी बस सेवाओं में यात्रा करने वाले सभी नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Valid Government Photo ID during journey (Aadhaar, Voter ID, Driving Licence)",
                                "Mobile number to receive m-Ticket SMS."
                        ],
                        "bn": [
                                "যাত্রাকালে প্রদর্শনের জন্য বৈধ পরিচয়পত্র (আধার/ভোটার/ড্রাইভিং লাইসেন্স)।"
                        ],
                        "hi": [
                                "यात्रा के दौरान मान्य फोटो पहचान पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Official Government tariff based on distance and route. Zero commission surcharge.",
                        "bn": "দূরত্ব অনুযায়ী সরকারি ভাড়ার তালিকা। কোনো অতিরিক্ত কমিশন নেই।",
                        "hi": "दूरी और रूट के अनुसार सरकारी निर्धारित किराया।"
                },
                "benefits": {
                        "en": [
                                "Safe, reliable state-run public transit connecting districts of West Bengal.",
                                "Transparent government ticketing with confirmed seat reservation.",
                                "Easy online cancellation as per state transport policy."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত জেলায় নিরাপদ ও নির্ভরযোগ্য সরকারি বাস পরিষেবা।",
                                "সিট কনফার্মেশন সহ স্বচ্ছ সরকারি টিকিট।",
                                "অনলাইনে টিকিট বাতিল ও রিফান্ড সুবিধা।"
                        ],
                        "hi": [
                                "सुरक्षित और विश्वसनीय सरकारी बस सेवा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit wbtc.co.in or official WB Transport booking portal (online.wbtc.co.in).",
                                "Select Origin City, Destination City, and Travel Date.",
                                "View available state buses (AC Volvo, Non-AC Express, Rocket Services) and seat layouts.",
                                "Select preferred seats, enter passenger names, and age.",
                                "Pay official fare securely via UPI, Net Banking, or Debit Cards.",
                                "Download and print the m-Ticket or show SMS to the bus conductor."
                        ],
                        "bn": [
                                "wbtc.co.in বা online.wbtc.co.in পোর্টালে যান।",
                                "যাত্রা শুরুর জায়গা, গন্তব্য এবং তারিখ বেছে নিন।",
                                "উপলব্ধ সরকারি বাসের তালিকা থেকে পছন্দসই সিট নির্বাচন করুন।",
                                "যাত্রীর নাম ও মোবাইল নম্বর দিয়ে ইউপিআই বা কার্ড দিয়ে পেমেন্ট করুন।",
                                "ই-টিকিট সেভ করুন বা মোবাইলের এসএমএস কন্ডাক্টরকে দেখান।"
                        ],
                        "hi": [
                                "wbtc.co.in पर जाएं। रूट और तारीख चुनकर सीट बुक करें और यूपीआई से भुगतान करें।"
                        ]
                },
                "official_homepage": "https://wbtc.co.in/",
                "official_apply_url": "https://online.wbtc.co.in/",
                "official_status_url": "https://online.wbtc.co.in/",
                "official_helpline": "1800-345-3929 (WBTC Toll Free Helpline)",
                "official_email": "support@wbtc.co.in",
                "state": "West Bengal",
                "availability": "Online 24x7 + Bus Terminus Booking Counters",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wbtc.co.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "wbtc",
                        "wbtc bus booking",
                        "wb government bus",
                        "kolkata to digha bus",
                        "kolkata to siliguri sstc bus",
                        "west bengal transport corporation",
                        "পশ্চিমবঙ্গ সরকারি বাস",
                        "ডাব্লুবিটিসি বাস বুকিং",
                        "সরকারি বাস টিকিট",
                        "দীঘা বাস বুকিং",
                        "पश्चिम बंगाल सरकारी बस",
                        "डब्ल्यूबीटीसी बस बुकिंग"
                ],
                "scam_warning": {
                        "en": "Book WBTC government buses only via official wbtc.co.in portal or authorized counters to avoid fraudulent booking charges.",
                        "bn": "সরকারি বাসের জন্য শুধুমাত্র অফিশিয়াল wbtc.co.in ওয়েবসাইট ব্যবহার করুন।",
                        "hi": "सरकारी बस टिकट केवल आधिकारिक wbtc.co.in पोर्टल से ही बुक करें।"
                }
        },
        {
                "service_id": "upsc-civil-services-nda-cds",
                "service_name": {
                        "en": "Union Public Service Commission (UPSC Civil Services, NDA, CDS & OTR)",
                        "bn": "ইউনিয়ন পাবলিক সার্ভিস কমিশন (UPSC আইএএস, এনডিএ, সিডিএস ও ওটিআর)",
                        "hi": "संघ लोक सेवा आयोग (UPSC सिविल सेवा, एनडीए, सीडीएस और ओटीआर)"
                },
                "short_description": {
                        "en": "Constitutional apex recruiting body of India for all-India services and Central civil services examinations (IAS, IPS, IFS, NDA, CDS, CMS, IES) with One Time Registration (OTR) portal.",
                        "bn": "ভারতের সাংবিধানিক শীর্ষ নিয়োগ সংস্থা: আইএএস, আইপিএস, এনডিএ, সিডিএস সহ কেন্দ্রীয় সিভিল সার্ভিস পরীক্ষার অফিশিয়াল ওটিআর ও আবেদন পোর্টাল।",
                        "hi": "भारत का संवैधानिक आयोग: आईएएस, आईपीएस, एनडीए, सीडीएस सहित केंद्रीय सिविल सेवा परीक्षाओं का आधिकारिक पोर्टल।"
                },
                "category": "govt-jobs-central",
                "category_name": {
                        "en": "Central Govt Competitive Exams (SSC/UPSC)",
                        "bn": "কেন্দ্রীয় সরকারি চাকরি (SSC/UPSC)",
                        "hi": "केंद्रीय सरकारी परीक्षाएं (SSC/UPSC)"
                },
                "subcategory": "Constitutional Recruitment",
                "authority": "Union Public Service Commission (UPSC), Government of India",
                "government_level": "Central",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian Citizens holding prescribed educational qualification (Graduation for Civil Services/CDS, 12th for NDA) and age limits as per notification."
                        ],
                        "bn": [
                                "বিজ্ঞপ্তি অনুযায়ী নির্ধারিত শিক্ষাগত যোগ্যতা (সিভিল সার্ভিস/CDS এর জন্য স্নাতক, NDA এর জন্য দ্বাদশ শ্রেণি) ও বয়সসীমা সম্পন্ন ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "अधिसूचना के अनुसार स्नातक (सिविल सेवा) या 12वीं (NDA) उत्तीर्ण भारतीय नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "One Time Registration (OTR) Profile",
                                "Valid Photo ID Card (Aadhaar / Passport / PAN / Voter ID)",
                                "Scanned Passport Photo and Signature as per dimensions",
                                "Degree certificate / Class 10/12 Marksheets."
                        ],
                        "bn": [
                                "ইউপিএসসি ওটিআর (OTR) প্রোফাইল",
                                "বৈধ পরিচয়পত্র (আধার/পাসপোর্ট/প্যান/ভোটার)",
                                "নির্দিষ্ট সাইজের ছবি ও স্বাক্ষর",
                                "শিক্ষাগত যোগ্যতার মার্কশিট ও সার্টিফিকেট।"
                        ],
                        "hi": [
                                "ओटीआर प्रोफाइल, मान्य फोटो आईडी, फोटो, हस्ताक्षर और शैक्षणिक अंकपत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Nominal fee of ₹100 for General/OBC male candidates. 100% Free for Female, SC, ST, and PwBD candidates.",
                        "bn": "সাধারণ ও ওবিসি পুরুষদের জন্য নামমাত্র ₹১০০ টাকা। মহিলা, এসসি, এসটি ও প্রতিবন্ধীদের জন্য সম্পূর্ণ বিনামূল্যে।",
                        "hi": "सामान्य/ओबीसी पुरुष के लिए ₹100। महिला, एससी, एसटी और दिव्यांगों के लिए पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct merit-based selection to premier All India Services (IAS, IPS, IFS) and Group A Central Services.",
                                "Completely transparent constitutional examination process."
                        ],
                        "bn": [
                                "ভারতের সর্বোচ্চ প্রশাসনিক ও সামরিক চাকরিতে সম্পূর্ণ মেধাভিত্তিক নিয়োগ।",
                                "স্বচ্ছ ও সাংবিধানিক পরীক্ষা ব্যবস্থা।"
                        ],
                        "hi": [
                                "भारत की सर्वोच्च प्रशासनिक और रक्षा सेवाओं में चयन का अवसर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit upsconline.nic.in and complete One Time Registration (OTR).",
                                "Log in with OTR ID / Email / Mobile and OTP.",
                                "Go to 'Latest Notifications' and choose the active examination (Civil Services Prelims, NDA, CDS, etc.).",
                                "Fill application details, select exam centre, and enter valid Photo ID number.",
                                "Upload Photo, Signature, and Photo ID PDF.",
                                "Pay examination fee (if applicable) and submit application.",
                                "Download confirmation page and save for future reference."
                        ],
                        "bn": [
                                "upsconline.nic.in ওয়েবসাইটে গিয়ে One Time Registration (OTR) সম্পন্ন করুন।",
                                "ওটিআর আইডি ও পাসওয়ার্ড দিয়ে লগইন করুন।",
                                "'Latest Notifications' এ গিয়ে নির্দিষ্ট পরীক্ষার ফর্ম পূরণ করুন।",
                                "পরীক্ষা কেন্দ্র নির্বাচন করুন এবং ফটো, স্বাক্ষর ও পরিচয়পত্র আপলোড করুন।",
                                "পরীক্ষার ফি জমা দিয়ে কনফার্মেশন পেজ প্রিন্ট করে রাখুন।"
                        ],
                        "hi": [
                                "upsconline.nic.in पर ओटीआर पंजीकरण कर लॉगिन करें।",
                                "अधिसूचित परीक्षा का चयन कर फॉर्म भरें और दस्तावेज अपलोड करें।"
                        ]
                },
                "official_homepage": "https://upsc.gov.in/",
                "official_apply_url": "https://upsconline.nic.in/",
                "official_status_url": "https://upsconline.nic.in/",
                "official_helpline": "011-23385271 (UPSC Facilitation Counter)",
                "official_email": "feedback-upsc@gov.in",
                "state": "All India",
                "availability": "Online 24x7",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://upsc.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "upsc",
                        "upsc civil services",
                        "ias exam apply",
                        "upsc otr registration",
                        "nda exam upsc",
                        "cds exam",
                        "upsc notification",
                        "ইউপিএসসি",
                        "আইএএস পরীক্ষা",
                        "ইউপিএসসি ওটিআর",
                        "এনডিএ পরীক্ষা",
                        "সিভিল সার্ভিস",
                        "यूपीएससी",
                        "आईएएस परीक्षा",
                        "यूपीएससी ओटीआर",
                        "एनडीए परीक्षा"
                ],
                "scam_warning": {
                        "en": "UPSC applications are handled ONLY on upsconline.nic.in. Beware of fraudulent coaching agencies claiming 'Direct Selection Quota'.",
                        "bn": "ইউপিএসসি চাকরির আবেদন কেবলমাত্র অফিশিয়াল upsconline.nic.in পোর্টালে হয়। কোনো দালাল বা ভুয়া সংস্থার প্রলোভনে পা দেবেন না।",
                        "hi": "यूपीएससी भर्ती केवल आधिकारिक upsconline.nic.in पर होती है।"
                }
        },
        {
                "service_id": "wbpsc-recruitment-wbcs-clerkship",
                "service_name": {
                        "en": "West Bengal Public Service Commission (WBPSC — WBCS, Clerkship & Misc)",
                        "bn": "পশ্চিমবঙ্গ পাবলিক সার্ভিস কমিশন (WBPSC — ডাব্লুবিসিএস, ক্লার্কশিপ ও ফুড এসআই)",
                        "hi": "पश्चिम बंगाल लोक सेवा आयोग (WBPSC — डब्ल्यूबीसीएस, क्लर्कशिप)"
                },
                "short_description": {
                        "en": "Official state recruiting agency of West Bengal conducting WBCS (Exe), West Bengal Audit & Accounts, Miscellaneous Services, Clerkship, and specialized department examinations.",
                        "bn": "পশ্চিমবঙ্গ সরকারের রাজ্য সিভিল সার্ভিস ও অন্যান্য গেজেটেড পদে নিয়োগকারী সাংবিধানিক সংস্থা: ডাব্লুবিসিএস, ক্লার্কশিপ ও অন্যান্য সরকারি নিয়োগ পরীক্ষা।",
                        "hi": "पश्चिम बंगाल लोक सेवा आयोग: राज्य सिविल सेवा (WBCS), क्लर्कशिप और अन्य राज्य स्तरीय भर्ती परीक्षाओं का आधिकारिक पोर्टल।"
                },
                "category": "wb-govt-jobs",
                "category_name": {
                        "en": "West Bengal Govt Jobs (WBPSC/WBP)",
                        "bn": "পশ্চিমবঙ্গ সরকারি চাকরি (WBPSC/WBP)",
                        "hi": "पश्चिम बंगाल सरकारी नौकरियां"
                },
                "subcategory": "State Civil Services",
                "authority": "Public Service Commission, West Bengal",
                "government_level": "West Bengal",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian citizen with ability to read, write and speak in Bengali (or Nepali for hill sub-divisions).",
                                "Graduate degree for WBCS / Class 10 Pass for Clerkship."
                        ],
                        "bn": [
                                "বাংলা ভাষায় পড়তে, লিখতে ও বলতে সক্ষম ভারতীয় নাগরিক (দার্জিলিং/কালিম্পং এর ক্ষেত্রে নেপালি)।",
                                "ডাব্লুবিসিএস এর জন্য স্নাতক এবং ক্লার্কশিপের জন্য মাধ্যমিক পাস।"
                        ],
                        "hi": [
                                "भारतीय नागरिक, बंगाली भाषा का ज्ञान, स्नातक या 10वीं पास (पद के अनुसार)।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "One Time Registration (OTR) on psc.wb.gov.in",
                                "Madhyamik Admit Card / Certificate for Age Proof",
                                "Graduation / Educational Certificates",
                                "Caste Certificate (for SC/ST/OBC fee and age concession)",
                                "Scanned Photo & Signature."
                        ],
                        "bn": [
                                "WBPSC পোর্টালে ওটিআর রেজিস্ট্রেশন",
                                "বয়সের প্রমাণ হিসেবে মাধ্যমিকের অ্যাডমিট কার্ড",
                                "শিক্ষাগত যোগ্যতার সার্টিফিকেট",
                                "কাস্ট সার্টিফিকেট (সংরক্ষণের সুবিধার জন্য)",
                                "ছবি ও স্বাক্ষর।"
                        ],
                        "hi": [
                                "ओटीआर प्रोफाइल, 10वीं का एडमिट कार्ड, शैक्षणिक प्रमाण पत्र, जाति प्रमाण पत्र, फोटो व हस्ताक्षर।"
                        ]
                },
                "application_fee": {
                        "en": "₹210 for WBCS / ₹110 for Clerkship (General/OBC). 100% Free for SC, ST of West Bengal and PwBD (40%+).",
                        "bn": "ডাব্লুবিসিএস এর জন্য ₹২১০ এবং ক্লার্কশিপের জন্য ₹১১০ (জেনারেল/ওবিসি)। পশ্চিমবঙ্গের এসসি, এসটি ও প্রতিবন্ধীদের জন্য সম্পূর্ণ বিনামূল্যে।",
                        "hi": "सामान्य/ओबीसी के लिए निर्धारित शुल्क। पश्चिम बंगाल के एससी/एसटी और दिव्यांगों के लिए निःशुल्क।"
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (psc.wb.gov.in).",
                                "Click on 'Candidate's Corner' -> 'One Time Registration' or 'Candidate Login'.",
                                "Select active recruitment advertisement (e.g. WBCS / Clerkship) and click 'Apply Now'.",
                                "Fill application fields, preference of service groups (A, B, C, D), and optional subjects.",
                                "Select preferred preliminary examination centre across West Bengal.",
                                "Upload scanned photo and signature as per prescribed pixel dimensions.",
                                "Pay examination fee online and download final submitted application receipt."
                        ],
                        "bn": [
                                "psc.wb.gov.in ওয়েবসাইটে যান।",
                                "'One Time Registration' বা 'Candidate Login' এ ক্লিক করুন।",
                                "বিজ্ঞপ্তি তালিকা থেকে কাঙ্ক্ষিত পরীক্ষা (WBCS/Clerkship) বেছে নিয়ে 'Apply Now' এ যান।",
                                "ব্যক্তিগত বিবরণ, সার্ভিস গ্রুপ ও অপশনাল বিষয় নির্বাচন করুন।",
                                "পরীক্ষা কেন্দ্র বেছে নিয়ে ছবি ও সই আপলোড করুন।",
                                "ফি জমা দিয়ে আবেদনপত্রটি ডাউনলোড করে প্রিন্ট রাখুন।"
                        ],
                        "hi": [
                                "psc.wb.gov.in पर लॉगिन करें।",
                                "इच्छित भर्ती का चयन कर फॉर्म भरें, परीक्षा केंद्र चुनें और सबमिट करें।"
                        ]
                },
                "official_homepage": "https://psc.wb.gov.in/",
                "official_apply_url": "https://psc.wb.gov.in/",
                "official_status_url": "https://psc.wb.gov.in/",
                "official_helpline": "033-2419-7715 / 033-2419-8187 (WBPSC Helpdesk)",
                "official_email": "pscwbenquiry@gmail.com",
                "state": "West Bengal",
                "availability": "Online Portal 24x7",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://psc.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbpsc",
                        "wbcs apply online",
                        "wbpsc clerkship",
                        "wbpsc recruitment",
                        "food si wbpsc",
                        "psc wb gov in",
                        "west bengal civil services",
                        "ডাব্লুবিসিএস",
                        "ডাব্লুবিপিএসসি",
                        "ক্লার্কশিপ আবেদন",
                        "ফুড এসআই",
                        "পশ্চিমবঙ্গ সরকারি চাকরি",
                        "डब्ल्यूबीपीएससी",
                        "डब्ल्यूबीसीएस भर्ती",
                        "क्लर्कशिप"
                ],
                "scam_warning": {
                        "en": "All WBPSC selections are strictly merit-based through competitive written exams and interviews. Never pay anyone promising backdoor appointments.",
                        "bn": "ডাব্লুবিপিএসসি নিয়োগ সম্পূর্ণ মেধার ভিত্তিতে পরীক্ষার মাধ্যমে হয়। কোনো অসদুপায় বা দালালদের টাকা দেওয়া থেকে সম্পূর্ণ বিরত থাকুন।",
                        "hi": "डब्ल्यूबीपीएससी भर्ती केवल परीक्षा और मेरिट के आधार पर होती है।"
                }
        },
        {
                "service_id": "wbp-police-recruitment-constable-si",
                "service_name": {
                        "en": "West Bengal Police Recruitment Board (WBPRB — Constable, SI & Kolkata Police)",
                        "bn": "পশ্চিমবঙ্গ পুলিশ নিয়োগ বোর্ড (WBPRB — কনস্টেবল, এসআই ও কলকাতা পুলিশ)",
                        "hi": "पश्चिम बंगाल पुलिस भर्ती बोर्ड (WBPRB — कांस्टेबल और सब-इंस्पेक्टर)"
                },
                "short_description": {
                        "en": "Official recruitment portal of West Bengal Police and Kolkata Police for hiring Constables, Lady Constables, Sub-Inspectors (Unarmed & Armed Branch), Wireless Operators, and Excise Constables.",
                        "bn": "পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশের অফিসিয়াল নিয়োগ পোর্টাল: কনস্টেবল, লেডি কনস্টেবল, সাব-ইন্সপেক্টর ও ওয়্যারলেস অপারেটর পদের নিয়োগ বিজ্ঞপ্তি ও আবেদন।",
                        "hi": "पश्चिम बंगाल पुलिस भर्ती बोर्ड का आधिकारिक पोर्टल: कांस्टेबल, लेडी कांस्टेबल और सब-इंस्पेक्टर पदों पर भर्ती।"
                },
                "category": "wb-govt-jobs",
                "category_name": {
                        "en": "West Bengal Govt Jobs (WBPSC/WBP)",
                        "bn": "পশ্চিমবঙ্গ সরকারি চাকরি (WBPSC/WBP)",
                        "hi": "पश्चिम बंगाल सरकारी नौकरियां"
                },
                "subcategory": "Police & Uniformed Forces",
                "authority": "West Bengal Police Recruitment Board (WBPRB), Government of West Bengal",
                "government_level": "West Bengal",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian Citizen aged 18 to 30 years (with statutory age relaxation for SC/ST/OBC/NVF/Civic Volunteers).",
                                "Educational: Madhyamik / 10th Pass for Constable, Graduate for Sub-Inspector.",
                                "Physical Measurement Test (PMT) & Physical Efficiency Test (PET) fitness standards."
                        ],
                        "bn": [
                                "১৮ থেকে ৩০ বছর বয়সী ভারতীয় নাগরিক (সংরক্ষিত শ্রেণির জন্য সরকারি বয়সের ছাড় প্রযোজ্য)।",
                                "শিক্ষাগত যোগ্যতা: কনস্টেবলের জন্য মাধ্যমিক পাস, এসআই এর জন্য স্নাতক।",
                                "শারীরিক মাপজোপ (PMT) ও দৌড় (PET) এর নির্ধারিত যোগ্যতা।"
                        ],
                        "hi": [
                                "18-30 वर्ष आयु, 10वीं पास (कांस्टेबल) या स्नातक (एसआई) और शारीरिक मानक उत्तीर्ण।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Madhyamik / Class 10 Admit Card for Age Proof",
                                "Educational Marksheets & Certificates",
                                "Caste Certificate (for SC/ST/OBC candidates)",
                                "Passport photograph with white background and clear face view",
                                "Scanned Signature."
                        ],
                        "bn": [
                                "বয়সের প্রমাণ হিসেবে মাধ্যমিক অ্যাডমিট কার্ড",
                                "শিক্ষাগত যোগ্যতার মার্কশিট",
                                "কাস্ট সার্টিফিকেট",
                                "সাদা ব্যাকগ্রাউন্ডের সাম্প্রতিক পাসপোর্ট ছবি ও সই।"
                        ],
                        "hi": [
                                "10वीं का एडमिट कार्ड, शैक्षणिक प्रमाण पत्र, जाति प्रमाण पत्र, फोटो और हस्ताक्षर।"
                        ]
                },
                "application_fee": {
                        "en": "Constable: ₹170 (Application ₹150 + Processing ₹20) for General/OBC. Only ₹20 processing fee for SC/ST of West Bengal.",
                        "bn": "কনস্টেবল: ₹১৭০ (জেনারেল/ওবিসি)। পশ্চিমবঙ্গের এসসি/এসটি প্রার্থীদের জন্য মাত্র ₹২০ প্রসেসিং ফি।",
                        "hi": "कांस्टेबल के लिए सामान्य/ओबीसी ₹170, पश्चिम बंगाल के एससी/एसटी के लिए केवल ₹20।"
                },
                "benefits": {
                        "en": [
                                "Prestigious uniformed law enforcement career in West Bengal Police / Kolkata Police.",
                                "Full government salary scale with DA, HRA, Medical, and pension benefits."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গ পুলিশ বা কলকাতা পুলিশে গৌরবময় কর্মসংস্থান।",
                                "সরকারি বেতন স্কেল, ভাতা ও সামাজিক সুরক্ষা।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल पुलिस में प्रतिष्ठित सरकारी सेवा और करियर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit prb.wb.gov.in or wbpolice.gov.in.",
                                "Go to 'Recruitment' tab and select active notification (e.g. Recruitment to the post of Constable in WBP / KP).",
                                "Click 'Fill up Application form online'.",
                                "Register with mobile number and email, then fill personal information, address, and educational details.",
                                "Upload photograph and signature as per strict specified guidelines.",
                                "Pay application & processing fee online via debit card/net banking/UPI.",
                                "Download and print the complete application form with Application Serial Number."
                        ],
                        "bn": [
                                "prb.wb.gov.in বা wbpolice.gov.in ওয়েবসাইটে যান।",
                                "'Recruitment' ট্যাবে গিয়ে সক্রিয় নিয়োগ বিজ্ঞপ্তিতে ক্লিক করুন।",
                                "'Fill up Application form online' বেছে নিন।",
                                "মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করে ব্যক্তিগত ও শিক্ষাগত তথ্য পূরণ করুন।",
                                "নির্দিষ্ট সাইজের ছবি ও সই আপলোড করুন।",
                                "ইউপিআই বা কার্ড দিয়ে ফি পেমেন্ট করুন।",
                                "Application Serial Number সহ সম্পূর্ণ ফর্মটি সেভ করে প্রিন্ট রাখুন।"
                        ],
                        "hi": [
                                "prb.wb.gov.in पर जाकर सक्रिय भर्ती लिंक चुनें।",
                                "फॉर्म भरकर दस्तावेज अपलोड करें और ऑनलाइन फीस जमा करें।"
                        ]
                },
                "official_homepage": "https://prb.wb.gov.in/",
                "official_apply_url": "https://prb.wb.gov.in/",
                "official_status_url": "https://prb.wb.gov.in/",
                "official_helpline": "033-2321-4200 (WBPRB Recruitment Helpline)",
                "official_email": "wbprb10@gmail.com",
                "state": "West Bengal",
                "availability": "Online 24x7",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://prb.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbp recruitment",
                        "wb police constable apply",
                        "kolkata police constable",
                        "wbprb gov in",
                        "wbp lady constable",
                        "wbp si recruitment",
                        "wb police exam",
                        "পশ্চিমবঙ্গ পুলিশ",
                        "কলকাতা পুলিশ কনস্টেবল",
                        "ডাব্লুবিপি কনস্টেবল",
                        "লেডি কনস্টেবল",
                        "পুলিশের চাকরি",
                        "पश्चिम बंगाल पुलिस",
                        "कोलकाता पुलिस कांस्टेबल",
                        "डब्ल्यूपी पुलिस भर्ती"
                ],
                "scam_warning": {
                        "en": "CRITICAL FRAUD ALERT: Recruitment is done purely through official competitive written tests, PMT/PET, and interview by WBPRB. Anyone demanding ₹2–5 Lakhs for guaranteed selection is a FRAUD. Report immediately to 1930.",
                        "bn": "সতর্কবার্তা: পুলিশে চাকরি দেওয়ার নামে লক্ষ লক্ষ টাকা চাওয়া দালাল চক্র থেকে সাবধান থাকুন। নিয়োগ সম্পূর্ণ মেধা ও শারীরিক পরীক্ষার দ্বারা হয়। প্রতারণা দেখলে পুলিশে অভিযোগ জানান।",
                        "hi": "पुलिस भर्ती में किसी भी दलाल को पैसे न दें। चयन केवल योग्यता और शारीरिक परीक्षा के आधार पर होता है।"
                }
        },
        {
                "service_id": "rrb-indian-railway-recruitment-board",
                "service_name": {
                        "en": "Railway Recruitment Boards (RRB Centralized — ALP, Technician, NTPC & Group D)",
                        "bn": "রেলওয়ে রিক্রুটমেন্ট বোর্ড (RRB — সহকারী লোকো পাইলট, টেকনিশিয়ান, এনটিপিসি ও গ্রুপ ডি)",
                        "hi": "रेलवे भर्ती बोर्ड (RRB — एएलपी, तकनीशियन, एनटीपीसी और ग्रुप डी)"
                },
                "short_description": {
                        "en": "Official Centralized Online Application Portal for all 21 Railway Recruitment Boards (RRB Kolkata, Siliguri, Malda, Ranchi, etc.) hiring Assistant Loco Pilots (ALP), Technicians, NTPC, Junior Engineers, and Level-1 Group D staff.",
                        "bn": "ভারতীয় রেলওয়ের সমস্ত ২১টি আরআরবি বোর্ডের একক কেন্দ্রীয় আবেদন পোর্টাল: সহকারী লোকো পাইলট (ALP), টেকনিশিয়ান, এনটিপিসি ও গ্রুপ ডি পদের নিয়োগ পরীক্ষা।",
                        "hi": "सभी 21 रेलवे भर्ती बोर्डों का केंद्रीकृत पोर्टल: सहायक लोको पायलट (ALP), तकनीशियन, एनटीपीसी और ग्रुप डी पदों पर भर्ती।"
                },
                "category": "railway-jobs",
                "category_name": {
                        "en": "Railway Jobs & RRB",
                        "bn": "রেলওয়ে চাকরি ও RRB",
                        "hi": "रेलवे नौकरियां और RRB"
                },
                "subcategory": "Indian Railways Central Recruitment",
                "authority": "Railway Recruitment Control Board, Ministry of Railways, Government of India",
                "government_level": "Central",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Indian citizen with prescribed qualifications: 10th + ITI / Diploma for ALP & Technicians; Graduation / 12th for NTPC; 10th / ITI for Group D."
                        ],
                        "bn": [
                                "বিজ্ঞপ্তি অনুযায়ী শিক্ষাগত যোগ্যতা: মাধ্যমিক + আইটিআই/ডিপ্লোমা (ALP/Technician), দ্বাদশ/স্নাতক (NTPC), মাধ্যমিক/আইটিআই (Group D)।"
                        ],
                        "hi": [
                                "पद के अनुसार 10वीं, आईटीआई, डिप्लोमा या स्नातक उत्तीर्ण।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card for biometric verification",
                                "Educational Certificates (10th/ITI/Diploma/Degree)",
                                "Caste Certificate (Central format for SC/ST/OBC-NCL)",
                                "Recent passport photograph with white background and digital signature."
                        ],
                        "bn": [
                                "বায়োমেট্রিক ভেরিফিকেশনের জন্য আধার কার্ড",
                                "মাধ্যমিক ও আইটিআই/ডিপ্লোমা/ডিগ্রি সার্টিফিকেট",
                                "কেন্দ্রীয় ফরম্যাটে কাস্ট সার্টিফিকেট",
                                "ছবি ও স্বাক্ষর।"
                        ],
                        "hi": [
                                "आधार कार्ड, 10वीं/आईटीआई/डिग्री प्रमाण पत्र, जाति प्रमाण पत्र, फोटो व हस्ताक्षर।"
                        ]
                },
                "application_fee": {
                        "en": "₹500 for General/OBC (₹400 refunded after appearing in CBT-1). ₹250 for SC/ST/Female/Ex-Servicemen/PwBD (Full ₹250 refunded upon appearing in CBT-1).",
                        "bn": "সাধারণ ও ওবিসিদের জন্য ₹৫০০ (প্রথম কম্পিউটার পরীক্ষা CBT-1 এ বসলে ₹৪০০ ফেরত)। এসসি, এসটি, মহিলা ও প্রতিবন্ধীদের জন্য ₹২৫০ (CBT-1 এ বসলে পুরো ₹২৫০ টাকা ব্যাংক একাউন্টে রিফান্ড)।",
                        "hi": "₹500 (सीबीटी-1 परीक्षा में शामिल होने पर ₹400 रिफंड)। एससी/एसटी/महिला के लिए ₹250 (पूरा ₹250 रिफंड)।"
                },
                "benefits": {
                        "en": [
                                "Permanent Central Government employment in Indian Railways with 7th Pay Commission salary scale, free railway passes, medical, and quarters."
                        ],
                        "bn": [
                                "ভারতীয় রেলওয়েতে সপ্তম বেতন কমিশনের স্থায়ী সরকারি চাকরি, বিনামূল্যে রেল পাস ও চিকিৎসা সুবিধা।",
                                "সম্পূর্ণ কম্পিউটারাইজড স্বচ্ছ পরীক্ষা পদ্ধতি।"
                        ],
                        "hi": [
                                "भारतीय रेलवे में स्थायी केंद्रीय सरकारी नौकरी और रेलवे पास के लाभ।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official centralized portal (rrbapply.gov.in).",
                                "Create an account with active mobile number, email, and Aadhaar verification.",
                                "Log in and choose the active Centralized Employment Notice (CEN).",
                                "Select participating RRB (e.g. RRB Kolkata / RRB Malda / RRB Siliguri).",
                                "Fill educational details, trade preference, and bank account for fee refund.",
                                "Upload photograph and signature according to strict specifications.",
                                "Pay examination fee via UPI or Debit/Credit Cards and save Application Summary."
                        ],
                        "bn": [
                                "rrbapply.gov.in পোর্টালে গিয়ে আধার নম্বর ও মোবাইল দিয়ে একাউন্ট তৈরি করুন।",
                                "লগইন করে নির্দিষ্ট বিজ্ঞপ্তি (CEN) নির্বাচন করুন।",
                                "নিজের আরআরবি বোর্ড (যেমন RRB Kolkata / RRB Siliguri / RRB Malda) বেছে নিন।",
                                "শিক্ষাগত যোগ্যতা, ট্রেড এবং রিফান্ডের জন্য ব্যাংক একাউন্ট নম্বর দিন।",
                                "ছবি ও সই আপলোড করে ফি জমা দিন।",
                                "আবেদনপত্রের প্রিন্ট কপি সংগ্রহ করে রাখুন।"
                        ],
                        "hi": [
                                "rrbapply.gov.in पर अकाउंट बनाएं।",
                                "आरआरबी बोर्ड चुनकर विवरण भरें, फोटो अपलोड करें और फीस जमा करें।"
                        ]
                },
                "official_homepage": "https://www.rrbapply.gov.in/",
                "official_apply_url": "https://www.rrbapply.gov.in/",
                "official_status_url": "https://www.rrbapply.gov.in/",
                "official_helpline": "9592-001-188 / 0172-565-3333 (RRB Central Helpdesk)",
                "official_email": "rrb.help@csc.gov.in",
                "state": "All India",
                "availability": "Online Centralized Portal",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.rrbapply.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "rrb apply",
                        "rrb alp recruitment",
                        "railway technician apply",
                        "rrb ntpc apply online",
                        "rrb kolkata",
                        "railway group d exam",
                        "rrbapply gov in",
                        "রেলওয়ে চাকরি",
                        "আরআরবি কলকাতা",
                        "রেলওয়ে লোকো পাইলট",
                        "রেলওয়ে গ্রুপ ডি",
                        "রেলওয়ে টেকনিশিয়ান",
                        "रेलवे भर्ती बोर्ड",
                        "आरआरबी एएलपी",
                        "आरआरबी एनटीपीसी",
                        "रेलवे ग्रुप डी"
                ],
                "scam_warning": {
                        "en": "Railway recruitment is conducted 100% on computerized CBT merit. Beware of fake agents promising railway appointments for cash. Never fall for fake appointment letters.",
                        "bn": "রেলের চাকরি সম্পূর্ণ কম্পিউটারাইজড পরীক্ষার মাধ্যমে হয়। টাকার বিনিময়ে রেলের চাকরি দেওয়ার দাবি করা প্রতারকদের থেকে সম্পূর্ণ দূরে থাকুন।",
                        "hi": "रेलवे में नौकरी केवल सीबीटी परीक्षा से मिलती है। किसी भी दलाल को पैसे न दें।"
                }
        },
        {
                "service_id": "lpg-cylinder-booking-ujjwala",
                "service_name": {
                        "en": "LPG Gas Services (Indane, Bharat Gas, HP Gas & PM Ujjwala Yojana)",
                        "bn": "রান্নার গ্যাস পরিষেবা ও বুকিং (ইন্ডেন, ভারত গ্যাস, এইচপি ও প্রধানমন্ত্রী উজ্জ্বলা)",
                        "hi": "एलपीजी गैस सेवाएं (इंडेन, भारत गैस, एचपी और पीएम उज्ज्वला योजना)"
                },
                "short_description": {
                        "en": "Official single-window portal for online LPG cylinder booking, subsidy status check, new gas connection application, safety guidelines, and PM Ujjwala Yojana 2.0 free connection scheme.",
                        "bn": "অনলাইন রান্নার গ্যাস সিলিন্ডার বুকিং, ব্যাংক একাউন্টে ভর্তুকি ট্র্যাকিং, নতুন গ্যাস সংযোগ এবং প্রধানমন্ত্রী উজ্জ্বলা যোজনা ২.০ এর অফিসিয়াল পোর্টাল।",
                        "hi": "ऑनलाइन रसोई गैस सिलेंडर बुकिंग, सब्सिडी स्टेटस, नया गैस कनेक्शन और पीएम उज्ज्वला योजना 2.0 पोर्टल।"
                },
                "category": "lpg-gas",
                "category_name": {
                        "en": "LPG / Cooking Gas & Ujjwala",
                        "bn": "রান্নার গ্যাস ও উজ্জ্বলা",
                        "hi": "রसोई গ্যাস এবং উজ্জ্বলা"
                },
                "subcategory": "Domestic Energy & Cooking Gas",
                "authority": "Ministry of Petroleum & Natural Gas / IOCL, BPCL, HPCL",
                "government_level": "Central",
                "service_type": "Utility",
                "target_users": [
                        "General Citizen",
                        "Woman"
                ],
                "eligibility": {
                        "en": [
                                "All LPG domestic consumers with Indane, Bharat Gas, or HP Gas.",
                                "PM Ujjwala Yojana: Adult woman from BPL / SC / ST / PMAY poor household without existing LPG connection."
                        ],
                        "bn": [
                                "ইন্ডেন, ভারত গ্যাস বা এইচপি গ্যাসের সমস্ত গ্রাহক।",
                                "উজ্জ্বলা যোজনা: দরিদ্র পরিবারের প্রাপ্তবয়স্ক নারী যাঁদের বাড়িতে পূর্বে কোনো গ্যাস সংযোগ নেই।"
                        ],
                        "hi": [
                                "सभी घरेलू एलपीजी उपभोक्ता। उज्ज्वला योजना: बीपीएल/गरीब परिवार की वयस्क महिला।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "For Cylinder Booking: 17-digit LPG Consumer ID or Registered Mobile Number.",
                                "For PM Ujjwala / New Connection: Aadhaar Card of applicant & adult family members, Ration Card, Bank Passbook with IFSC, Passport photo."
                        ],
                        "bn": [
                                "বুকিংয়ের জন্য: ১৭ সংখ্যার এলপিজি আইডি বা রেজিস্টার্ড মোবাইল নম্বর।",
                                "নতুন সংযোগ/উজ্জ্বলার জন্য: আধার কার্ড, রেশন কার্ড, ব্যাংক পাসবুক ও পাসপোর্ট ছবি।"
                        ],
                        "hi": [
                                "बुकिंग के लिए 17 अंकों की एलपीजी आईडी या मोबाइल नंबर। नए कनेक्शन हेतु आधार, राशन कार्ड और बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "Cylinder Refill: Official subsidized / non-subsidized price regulated by OMC. PM Ujjwala Connection: 100% Free deposit-free connection + free first refill & stove.",
                        "bn": "সিলিন্ডার রিফিল: সরকারি নির্ধারিত দাম। উজ্জ্বলা যোজনার অধীনে সম্পূর্ণ বিনামূল্যে প্রথম সিলিন্ডার ও ওভেন সহ সংযোগ।",
                        "hi": "उज्ज्वला योजना में पहला सिलेंडर और चूल्हा बिल्कुल मुफ्त।"
                },
                "benefits": {
                        "en": [
                                "Instant doorstep cylinder delivery booking with WhatsApp, missed call, or online portal.",
                                "Direct Benefit Transfer for LPG (DBTL / PAHAL) subsidy credited directly to bank account.",
                                "Smoke-free healthy kitchen for rural women."
                        ],
                        "bn": [
                                "হোয়াটসঅ্যাপ বা অনলাইনে ঘরে বসেই তাত্ক্ষণিক গ্যাস বুকিং।",
                                "পাহাল (PAHAL) প্রকল্পের অধীনে সরাসরি ব্যাংক একাউন্টে গ্যাস ভর্তুকি জমা।",
                                "ধোঁয়ামুক্ত সুস্থ রান্নাঘরের পরিবেশ।"
                        ],
                        "hi": [
                                "घर बैठे व्हाट्सएप या ऑनलाइन बुकिंग और सीधे बैंक खाते में सब्सिडी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit mylpg.in and select your gas provider (Indane, Bharat Gas, or HP Gas).",
                                "For Quick Booking: Click 'Quick Book & Pay' -> Enter LPG ID or Registered Mobile Number -> Pay via UPI / Cards.",
                                "To Check Subsidy: Log in to your portal and check 'PAHAL DBTL Subsidy Transfer Status'.",
                                "For Ujjwala 2.0: Visit pmuy.gov.in -> Click 'Apply for New Ujjwala 2.0 Connection' -> Select distributor and upload Aadhaar & Ration Card."
                        ],
                        "bn": [
                                "mylpg.in ওয়েবসাইটে গিয়ে আপনার গ্যাস কোম্পানি (ইন্ডেন / ভারত / এইচপি) বেছে নিন।",
                                "সিলিন্ডার বুকিং করতে: 'Quick Book' এ গিয়ে মোবাইল নম্বর দিন এবং ইউপিআই দিয়ে পেমেন্ট করুন।",
                                "ভর্তুকি চেক করতে: একাউন্টে লগইন করে 'Subsidy Transfer' হিস্ট্রি দেখুন।",
                                "উজ্জ্বলা ২.০ এর জন্য: pmuy.gov.in এ গিয়ে আধার ও রেশন কার্ড দিয়ে নতুন ফ্রি কানেকশনের আবেদন করুন।"
                        ],
                        "hi": [
                                "mylpg.in पर जाकर अपनी गैस कंपनी चुनें।",
                                "मोबाइल नंबर या एलपीजी आईडी से बुकिंग करें और सब्सिडी स्टेटस चेक करें।"
                        ]
                },
                "official_homepage": "https://mylpg.in/",
                "official_apply_url": "https://pmuy.gov.in/",
                "official_status_url": "https://mylpg.in/",
                "official_helpline": "1906 (24x7 National LPG Emergency Leak Helpline) / 1800-2333-555",
                "official_email": "support@mylpg.in",
                "state": "All India",
                "availability": "Online 24x7 + WhatsApp + Local Gas Distributorships",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://mylpg.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "mylpg",
                        "lpg gas booking",
                        "indane gas booking online",
                        "bharat gas booking",
                        "hp gas booking",
                        "pm ujjwala yojana 2.0",
                        "lpg subsidy status check",
                        "1906 lpg helpline",
                        "রান্নার গ্যাস বুকিং",
                        "ইন্ডেন গ্যাস বুকিং",
                        "গ্যাস ভর্তুকি চেক",
                        "উজ্জ্বলা যোজনা",
                        "এলপিজি গ্যাস",
                        "रसोई गैस बुकिंग",
                        "इंडेन गैस ऑनलाइन",
                        "भारत गैस",
                        "उज्ज्वला योजना",
                        "गैस सब्सिडी"
                ],
                "scam_warning": {
                        "en": "LPG leakage emergency: Dial 1906 immediately. Never pay extra cash delivery tips above the printed invoice bill amount.",
                        "bn": "গ্যাস লিকের জরুরি অবস্থায় সঙ্গে সঙ্গে ১৯০৬ নম্বরে ফোন করুন। গ্যাস বিলের অতিরিক্ত কোনো বাড়তি টাকা ডেলিভারি ম্যানকে দেবেন না।",
                        "hi": "गैस रिसाव होने पर तुरंत 1906 डायल करें। बिल से अधिक पैसे न दें।"
                }
        },
        {
                "service_id": "ayushman-bharat-pmjay-abha",
                "service_name": {
                        "en": "Ayushman Bharat PM-JAY & ABHA Digital Health Card (Ayushman Card)",
                        "bn": "আয়ুষ্মান ভারত ও আভা ডিজিটাল স্বাস্থ্য কার্ড (ABHA Health ID & PM-JAY)",
                        "hi": "आयुष्मान भारत और आभा डिजिटल हेल्थ कार्ड (ABHA Health ID & PM-JAY)"
                },
                "short_description": {
                        "en": "National Health Authority (NHA) portal for creating 14-digit ABHA (Ayushman Bharat Health Account) card, linking digital health records, and discovering Ayushman Bharat PM-JAY cashless hospital treatment coverage of ₹5 Lakhs per family.",
                        "bn": "জাতীয় স্বাস্থ্য কর্তৃপক্ষের অফিশিয়াল পোর্টাল: ১৪ সংখ্যার ABHA ডিজিটাল হেলথ আইডি কার্ড তৈরি, ডিজিটাল প্রেসক্রিপশন সংরক্ষণ ও আয়ুষ্মান ভারত তালিকাভুক্ত হাসপাতালে ক্যাশলেস চিকিৎসা।",
                        "hi": "राष्ट्रीय स्वास्थ्य प्राधिकरण का पोर्टल: 14 अंकों का आभा (ABHA) हेल्थ आईडी कार्ड, डिजिटल मेडिकल रिकॉर्ड और ₹5 लाख तक का कैशलेस इलाज।"
                },
                "category": "healthcare",
                "category_name": {
                        "en": "Healthcare & Insurance",
                        "bn": "স্বাস্থ্যসেবা ও বীমা",
                        "hi": "स्वास्थ्य सेवा और बीमा"
                },
                "subcategory": "Universal Digital Healthcare",
                "authority": "National Health Authority (NHA), Ministry of Health & Family Welfare, Government of India",
                "government_level": "Central",
                "service_type": "Health",
                "target_users": [
                        "General Citizen",
                        "Senior Citizen"
                ],
                "eligibility": {
                        "en": [
                                "ABHA ID: Open to all Indian citizens with an Aadhaar number.",
                                "PM-JAY Scheme: Families listed in SECC 2011 database / eligible categories, including all senior citizens aged 70+."
                        ],
                        "bn": [
                                "ABHA আইডি: আধার নম্বরধারী সমস্ত ভারতীয় নাগরিক তৈরি করতে পারবেন।",
                                "PM-JAY সুবিধা: তালিকায় নাম থাকা পরিবার এবং ৭০ বছরের ঊর্ধ্ব সমস্ত প্রবীণ নাগরিক।"
                        ],
                        "hi": [
                                "सभी भारतीय नागरिक (ABHA कार्ड हेतु)। 70 वर्ष से अधिक आयु के सभी वरिष्ठ नागरिक (पीएम-जय हेतु)।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card Number",
                                "Aadhaar-linked mobile number for instant OTP authentication."
                        ],
                        "bn": [
                                "আধার কার্ড নম্বর",
                                "ওটিপি ভেরিফিকেশনের জন্য আধারের সাথে যুক্ত মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "आधार नंबर और आधार से जुड़ा मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No Government fee for ABHA ID creation.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কোনো সরকারি ফি নেই।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "14-digit unique ABHA health card carrying your lifetime digital medical records.",
                                "Paperless doctor consultations and lab reports across hospitals nationwide.",
                                "Cashless hospital treatment up to ₹5 Lakhs/year under PM-JAY."
                        ],
                        "bn": [
                                "সারাদেশের সমস্ত হাসপাতালে গ্রহণযোগ্য ১৪ সংখ্যার ডিজিটাল স্বাস্থ্য পরিচয়পত্র।",
                                "প্রেসক্রিপশন ও ল্যাব টেস্টের রিপোর্ট হারিয়ে যাওয়ার ভয় ছাড়া ডিজিটাল রেকর্ড।",
                                "তালিকাভুক্ত হাসপাতালে ক্যাশলেস চিকিৎসার সুবিধা।"
                        ],
                        "hi": [
                                "14 अंकों का डिजिटल हेल्थ कार्ड, पेपरलेस मेडिकल रिकॉर्ड और कैशलेस इलाज की सुविधा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official ABHA portal (abha.abdm.gov.in) or download the ABHA App.",
                                "Click on 'Create ABHA Number'.",
                                "Select 'Using Aadhaar' and enter your 12-digit Aadhaar Number.",
                                "Authenticate via 6-digit OTP received on your mobile.",
                                "Verify auto-filled personal details and choose your unique ABHA Address (e.g., name@abdm).",
                                "Instantly download and print your laminated ABHA Digital Health Card."
                        ],
                        "bn": [
                                "অফিসিয়াল abha.abdm.gov.in পোর্টালে যান বা 'ABHA App' ডাউনলোড করুন।",
                                "'Create ABHA Number' এ ক্লিক করুন।",
                                "'Using Aadhaar' নির্বাচন করে ১২ সংখ্যার আধার নম্বর দিন।",
                                "মোবাইলে আসা ৬ সংখ্যার ওটিপি দিয়ে ভেরিফাই করুন।",
                                "ব্যক্তিগত তথ্য মিলিয়ে নিজের পছন্দসই ABHA Address তৈরি করুন।",
                                "তাৎক্ষণিক কিউআর কোডযুক্ত ABHA ডিজিটাল হেলথ কার্ড ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "abha.abdm.gov.in पर जाएं और आधार नंबर से ओटीपी सत्यापित करें।",
                                "तुरंत अपना 14 अंकों का आभा हेल्थ कार्ड डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://abdm.gov.in/",
                "official_apply_url": "https://abha.abdm.gov.in/",
                "official_status_url": "https://beneficiary.nha.gov.in/",
                "official_helpline": "14555 / 1800-11-4477 (National Health Authority Toll Free)",
                "official_email": "abdm@nha.gov.in",
                "state": "All India",
                "availability": "Online 24x7 + Government Hospitals",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://abdm.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "abha card",
                        "ayushman bharat card",
                        "abha health id download",
                        "pmjay",
                        "national health authority",
                        "digital health card",
                        "abha registration online",
                        "আভা কার্ড",
                        "আয়ুষ্মান ভারত",
                        "ডিজিটাল হেলথ কার্ড",
                        "আভা হেলথ আইডি ডাউনলোড",
                        "आभा कार्ड",
                        "आयुष्मान भारत कार्ड",
                        "डिजिटल हेल्थ आईडी",
                        "आयुष्मान कार्ड डाउनलोड"
                ],
                "scam_warning": {
                        "en": "ABHA Card generation is 100% free on abha.abdm.gov.in. Never pay cyber cafes more than printing costs. No private agent can sell Ayushman insurance cards.",
                        "bn": "ABHA কার্ড সম্পূর্ণ বিনামূল্যে তৈরি করা যায়। কোনো ভুয়া এজেন্টের পাতা ফাঁদে টাকা দেবেন না।",
                        "hi": "आभा कार्ड बनाना बिल्कुल मुफ्त है।"
                }
        },
        {
                "service_id": "ecourts-services-case-status",
                "service_name": {
                        "en": "e-Courts Services (Case Status, Cause Lists & Judgments — Supreme Court to District Courts)",
                        "bn": "ই-কোর্টস সেবা (মামলার স্থিতি, কার্যতালিকা ও রায় — জেলা ও উচ্চ আদালত)",
                        "hi": "ई-कोर्ट सेवाएं (केस स्टेटस, वाद सूची और निर्णय — जिला व उच्च न्यायालय)"
                },
                "short_description": {
                        "en": "Official Supreme Court of India & e-Committee portal to check real-time case status, next hearing dates, FIR numbers, advocate names, daily orders, and certified judgments across all High Courts and District Courts of India.",
                        "bn": "ভারতের সুপ্রিম কোর্ট ও ই-কমিটির অফিশিয়াল পোর্টাল: ভারতের সমস্ত হাইকোর্ট ও জেলা আদালতের মামলার বর্তমান স্থিতি, পরবর্তী শুনানির তারিখ, দৈনিক আদেশ ও রায়ের কপি পাওয়ার সরকারি ব্যবস্থা।",
                        "hi": "भारत की अदालतों का आधिकारिक पोर्टल: केस स्टेटस, अगली सुनवाई की तारीख, दैनिक आदेश और अंतिम निर्णय की प्रति देखना।"
                },
                "category": "legal-services",
                "category_name": {
                        "en": "Legal Aid & e-Courts Services",
                        "bn": "আইনি সহায়তা ও ই-কোর্ট",
                        "hi": "कानूनी सहायता और ई-कोर्ट"
                },
                "subcategory": "Judicial Public Transparency",
                "authority": "e-Committee, Supreme Court of India & Department of Justice, Government of India",
                "government_level": "Central",
                "service_type": "Legal",
                "target_users": [
                        "General Citizen",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Open to all citizens, litigants, advocates, and businesses involved in legal proceedings in Indian courts."
                        ],
                        "bn": [
                                "আদালতে বিচারাধীন মামলার সাথে যুক্ত যেকোনো নাগরিক, বিচারপ্রার্থী ও আইনজীবী।"
                        ],
                        "hi": [
                                "सभी भारतीय नागरिक और मुवक्किल।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Case Number (CNR Number — 16-digit unique alphanumeric code), or Party Name, Case Type/Number/Year, Advocate Name, or FIR Number."
                        ],
                        "bn": [
                                "মামলার সিএনআর (CNR) নম্বর অথবা বাদীর/বিবাদীর নাম, কেস নম্বর ও সাল, বা এফআইআর নম্বর।"
                        ],
                        "hi": [
                                "16 अंकों का सीएनआर (CNR) नंबर, केस नंबर या पक्षकार का नाम।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. Zero charge to search cases or download court orders.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। মামলার স্থিতি দেখা বা কোর্ট অর্ডার ডাউনলোডে কোনো ফি লাগে না।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Instant transparent tracking of court dates without physical court visit.",
                                "Download digitally signed daily orders and final judgments directly.",
                                "Automated SMS/Email notification alerts for upcoming hearings."
                        ],
                        "bn": [
                                "আদালতে না গিয়েও ঘরে বসে মামলার পরবর্তী তারিখ জানার সুবিধা।",
                                "বিচারকের স্বাক্ষরিত দৈনিক আদেশ ও চূড়ান্ত রায়ের কপি ডাউনলোড।",
                                "শুনানির তারিখের নিয়মিত এসএমএস অ্যালার্ট।"
                        ],
                        "hi": [
                                "घर बैठे अदालती मामलों की स्थिति और निर्णयों की प्रति देखने की सुविधा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit services.ecourts.gov.in or download the official 'eCourts Services' mobile app.",
                                "If you have the 16-digit CNR Number: Enter CNR Number -> Solve Captcha -> Click 'Search'.",
                                "If searching without CNR: Select State (e.g. West Bengal) -> District -> Court Complex.",
                                "Search by 'Party Name', 'Case Number', 'Filing Number', 'Advocate Name', or 'FIR Number'.",
                                "View complete case history, business recorded on date, and next hearing purpose.",
                                "Click on 'Orders / Judgments' to download official court order PDFs."
                        ],
                        "bn": [
                                "services.ecourts.gov.in ওয়েবসাইটে যান বা 'eCourts Services' অ্যাপ খুলুন।",
                                "১৬ সংখ্যার CNR নম্বর থাকলে সেটি লিখুন এবং ক্যাপচা দিয়ে 'Search' করুন।",
                                "CNR নম্বর না থাকলে: রাজ্য (পশ্চিমবঙ্গ) ও জেলা আদালত নির্বাচন করুন।",
                                "বাদীর নাম, কেস নম্বর বা আইনজীবীর নাম দিয়ে খুঁজুন।",
                                "মামলার ইতিহাস, পরবর্তী শুনানির তারিখ ও উদ্দেশ্য দেখুন।",
                                "'Orders' অপশনে ক্লিক করে আদালতের নির্দেশের পিডিএফ ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "services.ecourts.gov.in पर जाएं। सीएनआर नंबर या पक्षकार के नाम से खोजें और कोर्ट ऑर्डर डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://ecourts.gov.in/",
                "official_apply_url": "https://services.ecourts.gov.in/ecourtindia_v6/",
                "official_status_url": "https://services.ecourts.gov.in/ecourtindia_v6/",
                "official_helpline": "e-Committee Supreme Court of India",
                "official_email": "ecommittee-sci@nic.in",
                "state": "All India",
                "availability": "Online 24x7 + eCourts App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://services.ecourts.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "ecourts",
                        "case status online",
                        "cnr number search",
                        "high court case status wb",
                        "district court order download",
                        "ecourts services",
                        "ই কোর্ট",
                        "মামলার স্থিতি",
                        "কোর্ট কেস স্ট্যাটাস",
                        "কোর্ট অর্ডার ডাউনলোড",
                        "আইনি মামলা",
                        "ई-कोर्ट",
                        "केस स्टेटस",
                        "सीएनआर नंबर",
                        "कोर्ट ऑर्डर डाउनलोड"
                ],
                "scam_warning": {
                        "en": "Official court case status is accessed ONLY via services.ecourts.gov.in. Beware of fake legal notice SMS claiming police warrants or demanding online fines.",
                        "bn": "আদালতের মামলার তথ্য শুধুমাত্র অফিশিয়াল ecourts.gov.in এ পাওয়া যায়। ভুয়া ওয়ারেন্ট বা জরিমানার ভয় দেখিয়ে টাকা চাওয়া সাইবার প্রতারকদের থেকে সাবধান থাকুন।",
                        "hi": "फर्जी अदालती नोटिस या चालान के नाम पर पैसे न भेजें।"
                }
        },
        {
                "service_id": "rti-online-portal-india",
                "service_name": {
                        "en": "RTI Online Portal (Right to Information Application & First Appeal)",
                        "bn": "আরটিআই অনলাইন পোর্টাল (তথ্য জানার অধিকার আবেদন ও প্রথম আপিল)",
                        "hi": "आरटीआई ऑनलाइन पोर्टल (सूचना का अधिकार आवेदन और प्रथम अपील)"
                },
                "short_description": {
                        "en": "Official Government of India portal for Indian citizens to file online RTI applications and first appeals to central ministries, departments, autonomous bodies, and public sector undertakings.",
                        "bn": "ভারত সরকারের অফিশিয়াল পোর্টাল: ভারতের যেকোনো নাগরিকের জন্য কেন্দ্রীয় মন্ত্রণালয়, দপ্তর, ব্যাংক ও পাবলিক সেক্টরে তথ্য জানার অধিকার (RTI) আবেদন ও আপিল করার ব্যবস্থা।",
                        "hi": "भारत सरकार का आधिकारिक पोर्टल: केंद्रीय मंत्रालयों और विभागों से सूचना प्राप्त करने के लिए ऑनलाइन आरटीआई आवेदन और प्रथम अपील।"
                },
                "category": "rti",
                "category_name": {
                        "en": "Right to Information (RTI Online)",
                        "bn": "তথ্য জানার অধিকার (RTI)",
                        "hi": "सूचना का अधिकार (RTI)"
                },
                "subcategory": "Democratic Transparency",
                "authority": "Department of Personnel & Training, Government of India",
                "government_level": "Central",
                "service_type": "Legal",
                "target_users": [
                        "General Citizen",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "All citizens of India holding a constitutional right to seek information under RTI Act, 2005."
                        ],
                        "bn": [
                                "আরটিআই আইন ২০০৫ এর অধীনে তথ্য অনুসন্ধানের সাংবিধানিক অধিকার সম্পন্ন সমস্ত ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "आरटीआई अधिनियम 2005 के तहत सभी भारतीय नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar or Government Photo ID details",
                                "Valid Mobile number and Email ID",
                                "Specific, clear questions regarding public records."
                        ],
                        "bn": [
                                "পরিচয়পত্রের বিবরণ",
                                "সচল মোবাইল নম্বর ও ইমেল",
                                "সুনির্দিষ্ট তথ্যের প্রশ্নাবলী।"
                        ],
                        "hi": [
                                "मान्य आईडी, मोबाइल नंबर, ईमेल और स्पष्ट प्रश्न।"
                        ]
                },
                "application_fee": {
                        "en": "Prescribed statutory fee of ₹10 per RTI application. 100% Free of Cost for citizens below poverty line (BPL).",
                        "bn": "প্রতি আবেদনে মাত্র ₹১০ টাকা সরকারি ফি। দারিদ্র্যসীমার নিচে (BPL) থাকা নাগরিকদের জন্য সম্পূর্ণ বিনামূল্যে।",
                        "hi": "मात्र ₹10 सरकारी शुल्क। बीपीएल कार्ड धारकों के लिए निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Mandatory statutory response from Central Public Information Officer (CPIO) within 30 days.",
                                "Direct transparency regarding government schemes, budgets, recruitment rules, and public decisions."
                        ],
                        "bn": [
                                "৩০ দিনের মধ্যে সরকারি সিপিআইও (CPIO) আধিকারিকের থেকে লিখিত তথ্য পাওয়ার আইনি অধিকার।",
                                "সরকারি সিদ্ধান্ত, প্রকল্প ও বাজেট সম্পর্কে সম্পূর্ণ স্বচ্ছতা।"
                        ],
                        "hi": [
                                "30 दिनों के भीतर आधिकारिक जानकारी प्राप्त करने का कानूनी अधिकार।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official RTI portal (rtionline.gov.in).",
                                "Click on 'Submit Request'.",
                                "Read guidelines, check the confirmation box, and click 'Submit'.",
                                "Select Ministry / Department / Apex Body from the dropdown list.",
                                "Fill your personal contact details (Name, Address, Mobile, Email).",
                                "Type your RTI query clearly in the text box (up to 3,000 characters) or upload supporting PDF.",
                                "Pay the ₹10 statutory fee via UPI, Net Banking, or Debit Cards.",
                                "Receive unique Registration Number and track reply status online."
                        ],
                        "bn": [
                                "rtionline.gov.in ওয়েবসাইটে যান।",
                                "'Submit Request' এ ক্লিক করে শর্তাবলীতে সম্মতি দিন।",
                                "ড্রপডাউন থেকে কেন্দ্রীয় মন্ত্রণালয় বা বিভাগ বেছে নিন।",
                                "ব্যক্তিগত যোগাযোগের তথ্য পূরণ করুন।",
                                "আপনার প্রশ্নটি পরিষ্কারভাবে লিখুন (সর্বোচ্চ ৩০০০ অক্ষর)।",
                                "ইউপিআই দিয়ে মাত্র ₹১০ টাকা সরকারি ফি জমা দিন।",
                                "রেজিস্ট্রেশন নম্বর সংরক্ষণ করে অনলাইনে উত্তরের স্থিতি ট্র্যাক করুন।"
                        ],
                        "hi": [
                                "rtionline.gov.in पर जाएं। मंत्रालय चुनकर अपना सवाल लिखें और ₹10 का भुगतान करें।"
                        ]
                },
                "official_homepage": "https://rtionline.gov.in/",
                "official_apply_url": "https://rtionline.gov.in/RTI/index.php",
                "official_status_url": "https://rtionline.gov.in/request/status.php",
                "official_helpline": "011-24622461 (RTI Online Support Helpdesk)",
                "official_email": "rtionline-dopt@nic.in",
                "state": "All India",
                "availability": "Online 24x7",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://rtionline.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "rti",
                        "rti online apply",
                        "right to information portal",
                        "file rti online",
                        "rti status check",
                        "rtionline gov in",
                        "আরটিআই",
                        "তথ্য জানার অধিকার",
                        "অনলাইন আরটিআই",
                        "আরটিআই আবেদন",
                        "आरटीआई",
                        "सूचना का अधिकार",
                        "आरटीआई ऑनलाइन आवेदन"
                ],
                "scam_warning": {
                        "en": "Official central RTI application fee is strictly ₹10 on rtionline.gov.in. Never pay private consultancy websites charging ₹500–₹1,000 to file simple RTIs.",
                        "bn": "সরকারি আরটিআই ফি মাত্র ₹১০ টাকা। বেশি টাকা দাবি করা কোনো বেসরকারি ওয়েবসাইট ব্যবহার করবেন না।",
                        "hi": "सरकारी आरटीआई फीस केवल ₹10 है।"
                }
        },
        {
                "service_id": "ncs-national-career-service",
                "service_name": {
                        "en": "National Career Service Portal (NCS — Free Job Match & Career Centers)",
                        "bn": "জাতীয় ক্যারিয়ার সেবা পোর্টাল (NCS — বিনামূল্যে সরকারি ও বেসরকারি চাকরি সন্ধান)",
                        "hi": "राष्ट्रीय करियर सेवा पोर्टल (NCS — मुफ्त नौकरी और करियर मार्गदर्शन)"
                },
                "short_description": {
                        "en": "Official Mission Mode Project by Ministry of Labour & Employment connecting jobseekers with verified employers across central/state government, public sector, and private enterprises with zero placement fees.",
                        "bn": "কেন্দ্রীয় শ্রম ও কর্মসংস্থান মন্ত্রকের অফিশিয়াল পোর্টাল: চাকরিপ্রার্থীদের সাথে যাচাইকৃত সরকারি ও বেসরকারি নিয়োগকারীদের সম্পূর্ণ বিনামূল্যে সংযুক্ত করার প্ল্যাটফর্ম।",
                        "hi": "श्रम और रोजगार मंत्रालय का आधिकारिक पोर्टल: नौकरी चाहने वालों के लिए सत्यापित सरकारी व निजी नौकरियों का मंच।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "subcategory": "National Employment Exchange",
                "authority": "Ministry of Labour & Employment, Government of India",
                "government_level": "Central",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "All Indian jobseekers from 10th Pass to Post Graduates and technical diploma holders."
                        ],
                        "bn": [
                                "দশম শ্রেণি থেকে স্নাতকোত্তর বা কারিগরি যোগ্যতা সম্পন্ন সমস্ত ভারতীয় চাকরিপ্রার্থী।"
                        ],
                        "hi": [
                                "10वीं पास से लेकर स्नातकोत्तर तक के सभी भारतीय युवा।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "National Career Service ID or Aadhaar Card",
                                "Educational Marksheets & Resume",
                                "Active Mobile number and Email ID."
                        ],
                        "bn": [
                                "আধার কার্ড",
                                "শিক্ষাগত যোগ্যতার প্রমাণপত্র ও বায়োডাটা (Resume)",
                                "মোবাইল ও ইমেল।"
                        ],
                        "hi": [
                                "आधार कार्ड, बायोडाटा और शैक्षणिक प्रमाण पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No registration or job application charges.",
                        "bn": "সম্পূর্ণ বিনামূল্যে। কোনো রেজিস্ট্রেশন বা অ্যাপ্লিকেশন চার্জ নেই।",
                        "hi": "पूर्णतः निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Access to thousands of verified job postings without fraud risks.",
                                "Free career counseling and job fairs organized at District Model Career Centers (MCC).",
                                "Integration with international employment exchanges and apprenticeship portals."
                        ],
                        "bn": [
                                "ভুয়া চাকরির প্রতারণা ছাড়াই যাচাইকৃত কাজের সুযোগ।",
                                "জেলা মডেল ক্যারিয়ার সেন্টারে বিনামূল্যে কাউন্সেলিং ও জব ফেয়ার।",
                                "সরকারি শিক্ষানবিশী ও আন্তর্জাতিক চাকরির সুযোগ।"
                        ],
                        "hi": [
                                "बिना किसी धोखाधड़ी के सत्यापित नौकरियों की जानकारी और मुफ्त करियर परामर्श।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit ncs.gov.in.",
                                "Click on 'Jobseeker' -> 'Register'.",
                                "Register with your Aadhaar or Unique ID, verify OTP, and create profile.",
                                "Fill educational background, skills, work experience, and preferred job locations.",
                                "Search jobs by keyword, industry, state, or minimum salary.",
                                "Apply directly to verified listings on the portal."
                        ],
                        "bn": [
                                "ncs.gov.in পোর্টালে যান।",
                                "'Jobseeker' এ গিয়ে আধার দিয়ে ফ্রি রেজিস্ট্রেশন করুন।",
                                "শিক্ষাগত যোগ্যতা, দক্ষতা ও পছন্দের কর্মক্ষেত্র পূরণ করুন।",
                                "যাচাইকৃত চাকরির তালিকা খুঁজে সরাসরি অনলাইনে আবেদন করুন।"
                        ],
                        "hi": [
                                "ncs.gov.in पर जॉबसीकर के रूप में पंजीकरण कर सत्यापित नौकरियों के लिए आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.ncs.gov.in/",
                "official_apply_url": "https://www.ncs.gov.in/",
                "official_status_url": "https://www.ncs.gov.in/",
                "official_helpline": "1514 (National Career Service Toll Free Helpline)",
                "official_email": "support.ncs@gov.in",
                "state": "All India",
                "availability": "Online 24x7 + District Model Career Centers",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.ncs.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "ncs",
                        "national career service",
                        "govt job portal",
                        "free job search india",
                        "ncs registration jobseeker",
                        "employment exchange online",
                        "জাতীয় ক্যারিয়ার সেবা",
                        "এনসিএস পোর্টাল",
                        "চাকরি খোঁজা",
                        "এমপ্লয়মেন্ট এক্সচেঞ্জ",
                        "राष्ट्रीय करियर सेवा",
                        "एनसीएस पोर्टल",
                        "सरकारी रोजगार पोर्टल"
                ],
                "scam_warning": {
                        "en": "NCS never charges any money for providing job opportunities. Beware of scammers asking for 'interview security deposits' or training fees.",
                        "bn": "চাকরি দেওয়ার নাম করে ইন্টারভিউ ফি বা সিকিউরিটি ডিপোজিট চাওয়া সংস্থা থেকে দূরে থাকুন। সরকারি পোর্টাল সম্পূর্ণ ফ্রি।",
                        "hi": "एनसीएस पर सेवाएं पूरी तरह मुफ्त हैं। किसी को नौकरी के बदले पैसे न दें।"
                }
        },
        {
                "service_id": "private-makemytrip-cleartrip-travel",
                "service_name": {
                        "en": "Private Multi-Modal Travel Portals (MakeMyTrip, RedBus & ClearTrip)",
                        "bn": "বেসরকারি ট্রাভেল ও বাস টিকিট বুকিং পোর্টাল (MakeMyTrip, RedBus ও ClearTrip)",
                        "hi": "निजी यात्रा और बस टिकट बुकिंग पोर्टल (MakeMyTrip, RedBus और ClearTrip)"
                },
                "short_description": {
                        "en": "Legitimate, verified commercial private travel discovery platforms for booking private intercity buses, domestic flights, hotels, and holiday packages across India.",
                        "bn": "ভারতের অন্যতম শীর্ষ বৈধ বেসরকারি ভ্রমণ প্ল্যাটফর্ম: দূরপাল্লার বেসরকারি বিলাসবহুল বাস, অভ্যন্তরীণ বিমান ও হোটেল বুকিংয়ের বাণিজ্যিক সেবা।",
                        "hi": "सत्यापित निजी यात्रा मंच: निजी इंटरसिटी बसें, घरेलू उड़ानें और होटल बुकिंग।"
                },
                "category": "travel-railway",
                "category_name": {
                        "en": "Travel & Railway Services",
                        "bn": "রেল টিকিট ও ভ্রমণ (IRCTC)",
                        "hi": "रेल यात्रा और आईआरসিटीसी"
                },
                "subcategory": "Commercial Private Travel Aggregators",
                "authority": "MakeMyTrip India / RedBus / ClearTrip Private Limited",
                "government_level": "Private",
                "service_type": "Travel",
                "target_users": [
                        "General Citizen",
                        "Business Owner"
                ],
                "eligibility": {
                        "en": [
                                "Open to all domestic and international travelers."
                        ],
                        "bn": [
                                "সমস্ত সাধারণ ভ্রমণকারী নাগরিক।"
                        ],
                        "hi": [
                                "सभी घरेलू और अंतर्राष्ट्रीय यात्री।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Valid Government Photo ID (Aadhaar / Voter ID / Passport) for flight check-in and hotel check-in."
                        ],
                        "bn": [
                                "যাত্রা ও হোটেলে প্রবেশের জন্য বৈধ সচিত্র সরকারি পরিচয়পত্র।"
                        ],
                        "hi": [
                                "होटल और फ्लाइट चेक-इन के लिए वैध सरकारी फोटो पहचान पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Commercial dynamic ticket pricing + platform convenience fee as per private provider terms.",
                        "bn": "বাণিজ্যিক বেসরকারি টিকিট মূল্য এবং প্ল্যাটফর্ম ফি।",
                        "hi": "व्यावसायिक टिकट दर और प्लेटफॉर्म शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Wide multi-operator comparison for private AC sleeper buses (Shyamoli, Greenline, Royal Cruiser, etc.).",
                                "Instant flight price comparisons and hotel reviews.",
                                "24x7 customer support from established booking companies."
                        ],
                        "bn": [
                                "বেসরকারি এসি স্লিপার বাসের অসংখ্য বিকল্প তুলনা করার সুবিধা।",
                                "ফ্লাইট ও হোটেলের দাম যাচাই করে বুকিং।",
                                "প্রতিষ্ঠিত বেসরকারি গ্রাহক সেবা।"
                        ],
                        "hi": [
                                "विभिन्न निजी बस और फ्लाइट विकल्पों की तुलना और त्वरित बुकिंग।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit makemytrip.com or redbus.in.",
                                "Select Travel Mode (Flight / Bus / Hotel), Origin, Destination, and Travel Date.",
                                "Compare operator prices, timings, and seat amenities.",
                                "Select seat, enter passenger details, and pay via UPI, Credit/Debit card, or Net Banking.",
                                "Receive instant confirmed booking voucher via email and SMS."
                        ],
                        "bn": [
                                "makemytrip.com বা redbus.in ওয়েবসাইটে যান।",
                                "বাস বা বিমানের যাত্রা শুরুর স্থান, গন্তব্য ও তারিখ বেছে নিন।",
                                "বিভিন্ন কোম্পানির সময়সূচি ও সিট তুলনা করে সিট নির্বাচন করুন।",
                                "যাত্রীর বিবরণ দিয়ে ইউপিআই বা কার্ড দিয়ে পেমেন্ট করুন।",
                                "ইমেইল ও মোবাইলে বুকিং ভাউচার সেভ করুন।"
                        ],
                        "hi": [
                                "makemytrip.com या redbus.in पर जाकर रूट और तारीख चुनकर टिकट बुक करें।"
                        ]
                },
                "official_homepage": "https://www.makemytrip.com/",
                "official_apply_url": "https://www.makemytrip.com/",
                "official_status_url": "https://www.redbus.in/",
                "official_helpline": "MakeMyTrip Customer Care: 0124-4628747",
                "official_email": "support@makemytrip.com",
                "state": "All India",
                "availability": "Online Web & Mobile Apps 24x7",
                "active_status": true,
                "verification_status": "private_platform",
                "source_url": "https://www.makemytrip.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "makemytrip",
                        "redbus",
                        "flight booking private",
                        "private bus booking kolkata to digha",
                        "private travel platform",
                        "মেকমাইট্রিভ",
                        "রেডবাস",
                        "প্রাইভেট বাস বুকিং",
                        "ফ্লাইট টিকিট",
                        "मेकमाईट्रिप",
                        "रेडबस",
                        "प्राइवेट बस बुकिंग"
                ],
                "scam_warning": {
                        "en": "NOTICE: MakeMyTrip and RedBus are PRIVATE commercial booking platforms, not Government departments. Check cancellation refund policies before booking.",
                        "bn": "বিজ্ঞপ্তি: এগুলি সম্পূর্ণ বেসরকারি বাণিজ্যিক ট্রাভেল পোর্টাল, কোনো সরকারি দপ্তর নয়। বুকিং করার পূর্বে ক্যান্সেলেশন নিয়মাবলী ভালোভাবে পড়ে নিন।",
                        "hi": "सूचना: ये निजी वाणिज्यिक बुकिंग प्लेटफॉर्म हैं, सरकारी नहीं।"
                }
        },
        {
                "service_id": "private-naukri-linkedin-jobs",
                "service_name": {
                        "en": "Verified Private Careers & Job Portals (LinkedIn Jobs & Naukri.com)",
                        "bn": "বেসরকারি চাকরি ও প্রফেশনাল নেটওয়ার্ক (LinkedIn Jobs ও Naukri.com)",
                        "hi": "सत्यापित निजी करियर और नौकरी पोर्टल (LinkedIn Jobs और Naukri.com)"
                },
                "short_description": {
                        "en": "Established, verified professional career networks and employment portals connecting software engineers, corporate executives, creatives, and private sector job seekers with verified corporate recruiters.",
                        "bn": "ভারতের শীর্ষস্থানীয় প্রতিষ্ঠিত বেসরকারি চাকরির পোর্টাল: আইটি, কর্পোরেট, ব্যাংকিং ও প্রযুক্তি ক্ষেত্রে ভেরিফাইড কোম্পানির চাকরির সুযোগ অনুসন্ধান।",
                        "hi": "भारत के प्रमुख निजी रोजगार मंच: आईटी, कॉर्पोरेट और निजी क्षेत्र में नौकरियों की खोज।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निজি नौकरियां और करियर"
                },
                "subcategory": "Commercial Private Employment",
                "authority": "LinkedIn Corporation / Info Edge India Ltd (Naukri)",
                "government_level": "Private",
                "service_type": "Job",
                "target_users": [
                        "Job Seeker",
                        "Student"
                ],
                "eligibility": {
                        "en": [
                                "Job seekers, college graduates, and working professionals."
                        ],
                        "bn": [
                                "চাকরিপ্রার্থী, কলেজ পাস আউট ও অভিজ্ঞ পেশাজীবীগণ।"
                        ],
                        "hi": [
                                "नौकरी चाहने वाले स्नातक और अनुभवी पेशेवर।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Professional Resume / CV in PDF format",
                                "Updated LinkedIn Profile / Portfolio link",
                                "Academic & Employment credentials."
                        ],
                        "bn": [
                                "আপডেট করা সিভি বা বায়োডাটা (PDF)",
                                "লিঙ্কডইন প্রোফাইল বা পোর্টফোলিও",
                                "শিক্ষাগত ও কর্মঅভিজ্ঞতার প্রশংসাপত্র।"
                        ],
                        "hi": [
                                "बायोडाटा (Resume), शैक्षणिक प्रमाण पत्र और लिंक्डइन प्रोफाइल।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free standard job search and direct application to genuine employers.",
                        "bn": "সাধারণ চাকরি খোঁজা ও আবেদনের জন্য সম্পূর্ণ বিনামূল্যে।",
                        "hi": "नौकरी खोजने और आवेदन करने के लिए बिल्कुल मुफ्त।"
                },
                "benefits": {
                        "en": [
                                "Access to millions of private sector tech, corporate, startup, and remote job openings.",
                                "Direct networking with HR managers and verified business leaders.",
                                "Automated job alerts matching your skillset."
                        ],
                        "bn": [
                                "হাজার হাজার কর্পোরেট, প্রযুক্তি ও রিমোট চাকরির সুযোগ।",
                                "সরাসরি এইচআর ও রিক্রুটারদের সাথে যোগাযোগের প্ল্যাটফর্ম।",
                                "দক্ষতা অনুযায়ী স্বয়ংক্রিয় কাজের অ্যালার্ট।"
                        ],
                        "hi": [
                                "लाखों निजी कंपनियों में नौकरियों के अवसर और एचआर से सीधा संपर्क।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit linkedin.com/jobs or naukri.com.",
                                "Create your professional profile, upload updated resume, and list technical skills.",
                                "Search jobs by designation, tech stack, experience level, and preferred location (e.g. Kolkata, Bangalore, Remote).",
                                "Apply with your attached CV directly through 'Easy Apply' or company career portal.",
                                "Track application status and communicate directly with recruiters."
                        ],
                        "bn": [
                                "linkedin.com/jobs বা naukri.com ওয়েবসাইটে যান।",
                                "প্রোফাইল তৈরি করে আপডেট করা বায়োডাটা আপলোড করুন ও দক্ষতা যুক্ত করুন।",
                                "পদ ও পছন্দের শহর অনুযায়ী চাকরি খুঁজুন।",
                                "সরাসরি 'Easy Apply' দিয়ে কোম্পানিতে বায়োডাটা জমা দিন।"
                        ],
                        "hi": [
                                "linkedin.com/jobs या naukri.com पर प्रोफाइल बनाएं और बायोडाटा अपलोड कर आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.linkedin.com/jobs/",
                "official_apply_url": "https://www.linkedin.com/jobs/",
                "official_status_url": "https://www.naukri.com/",
                "official_helpline": "Naukri / LinkedIn Help Center",
                "official_email": "support@naukri.com",
                "state": "All India",
                "availability": "Online Web & Mobile Apps 24x7",
                "active_status": true,
                "verification_status": "private_platform",
                "source_url": "https://www.linkedin.com/jobs/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "private jobs",
                        "naukri com apply",
                        "linkedin jobs india",
                        "software engineer jobs",
                        "private jobs kolkata",
                        "remote jobs",
                        "it jobs",
                        "বেসরকারি চাকরি",
                        "প্রাইভেট চাকরি",
                        "লিঙ্কডইন জবস",
                        "নকরি ডট কম",
                        "আইটি চাকরি",
                        "निजी नौकरी",
                        "नौकरी डॉट कॉम",
                        "लिंक्डइन जॉब्स",
                        "प्राइवेट जॉब्स"
                ],
                "scam_warning": {
                        "en": "NOTICE: LinkedIn and Naukri.com are PRIVATE career platforms. NEVER pay any money, training fee, or laptop deposit to anyone offering a private job. Genuine companies NEVER charge money to hire.",
                        "bn": "বিজ্ঞপ্তি: এগুলি সম্পূর্ণ বেসরকারি ক্যারিয়ার প্ল্যাটফর্ম। কোনো বেসরকারি চাকরি দেওয়ার নামে কেউ টাকা, ট্রেনিং ফি বা ল্যাপটপ সিকিউরিটি চাইলে কখনো টাকা দেবেন না। আসল কোম্পানি কখনো চাকরি দেওয়ার জন্য টাকা নেয় না।",
                        "hi": "सूचना: ये निजी मंच हैं। कोई भी वास्तविक कंपनी नौकरी देने के बदले पैसे नहीं मांगती।"
                }
        },
        {
                "service_id": "incometax-efiling-itr",
                "service_name": {
                        "en": "Income Tax e-Filing & ITR Portal",
                        "bn": "আয়কর ই-ফাইলিং ও আইটিআর পোর্টাল",
                        "hi": "आयकर ई-फाइलिंग और आईटीआर पोर्टल"
                },
                "short_description": {
                        "en": "Official portal of Income Tax Department to file Income Tax Returns (ITR), check refund status, view 26AS/AIS, and link Aadhaar with PAN.",
                        "bn": "আয়কর রিটার্ন (ITR) জমা দেওয়া, রিফান্ড স্ট্যাটাস চেক, 26AS/AIS বিবরণী দেখা এবং আধারের সাথে প্যান লিঙ্ক করার সরকারি পোর্টাল।",
                        "hi": "आयकर रिटर्न (ITR) दाखिल करने, रिফंड स्थिति जांचने और आधार को पैन से लिंक करने का आधिकारिक आयकर पोर्टल।"
                },
                "category": "tax-gst",
                "category_name": {
                        "en": "Income Tax & GST Portal",
                        "bn": "আয়কর ও জিএসটি পোর্টাল",
                        "hi": "आयकर और जीएसटी पोर्टल"
                },
                "subcategory": "Income Tax (CBDT)",
                "authority": "Income Tax Department, Ministry of Finance, Govt of India",
                "government_level": "Central",
                "service_type": "Tax",
                "target_users": [
                        "General Citizen",
                        "Business / MSME",
                        "Salaried Individual",
                        "Professional"
                ],
                "eligibility": {
                        "en": [
                                "All taxpayers, salaried individuals, self-employed professionals, and businesses with taxable income."
                        ],
                        "bn": [
                                "সমস্ত করদাতা, বেতনভোগী কর্মচারী, পেশাজীবী এবং ব্যবসায়ী।"
                        ],
                        "hi": [
                                "सभी करदाता, वेतनभोगी कर्मचारी, पेशेवर और व्यापारी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "PAN Card & Aadhaar Number",
                                "Form 16 / Salary slips",
                                "Bank account details & bank statements",
                                "Interest certificates & investment proofs (80C, 80D)."
                        ],
                        "bn": [
                                "প্যান কার্ড ও আধার নম্বর",
                                "ফর্ম ১৬ / বেতনের প্রমাণপত্র",
                                "ব্যাংক অ্যাকাউন্টের বিবরণী",
                                "বিনিয়োগ ও জমার প্রমাণপত্র (80C, 80D ইত্যাদি)।"
                        ],
                        "hi": [
                                "पैन कार्ड और आधार नंबर",
                                "फॉर्म 16 / वेतन पर्ची",
                                "बैंक खाता विवरण",
                                "निवेश प्रमाण पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Standard e-Filing is Free on the official portal.",
                        "bn": "অফিসিয়াল পোর্টালে ই-ফাইলিং সম্পূর্ণ বিনামূল্যে।",
                        "hi": "आधिकारिक पोर्टल पर ई-फाइलिंग निःशुल्क है।"
                },
                "benefits": {
                        "en": [
                                "Mandatory compliance and fast tax refund processing.",
                                "Official income proof for loans, visas, and credit cards.",
                                "Zero paperwork through digital e-verification."
                        ],
                        "bn": [
                                "দ্রুত ট্যাক্স রিফান্ড প্রসেসিং ও আইনসম্মত স্বীকৃতি।",
                                "লোন, ভিসা ও ক্রেডিট কার্ডের জন্য আয়ের বৈধ প্রমাণপত্র।",
                                "ডিজিটাল ই-ভেরিফিকেশনের মাধ্যমে কাগজহীন সুবিধা।"
                        ],
                        "hi": [
                                "शीघ्र टैक्स रिফंड और ऋण/वीजा के लिए वैध आय प्रमाण।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official Income Tax e-Filing portal (incometax.gov.in).",
                                "Log in using your PAN as User ID and your password.",
                                "Go to 'e-File' > 'Income Tax Returns' > 'File Income Tax Return'.",
                                "Select Assessment Year and filing mode (Online).",
                                "Choose applicable ITR Form (ITR-1 to 4) and verify pre-filled data.",
                                "Review tax calculation, submit, and e-verify using Aadhaar OTP."
                        ],
                        "bn": [
                                "অফিসিয়াল আয়কর ই-ফাইলিং পোর্টালে যান (incometax.gov.in)।",
                                "প্যান নম্বর ও পাসওয়ার্ড দিয়ে লগইন করুন।",
                                "'e-File' > 'Income Tax Returns' > 'File Income Tax Return' নির্বাচন করুন।",
                                "সঠিক Assessment Year এবং 'Online' মোড নির্বাচন করুন।",
                                "আয়ের ধরন অনুযায়ী ফর্ম (ITR 1-4) পূরণ করে সাবমিট করুন ও আধার ওটিপি দিয়ে ই-ভেরিফাই করুন।"
                        ],
                        "hi": [
                                "आयकर पोर्टल (incometax.gov.in) पर लॉगिन करें।",
                                "असेसमेंट ईयर और उपयुक्त ITR फॉर्म चुनें।",
                                "विवरण सत्यापित कर सबमिट करें और आधार ओटीपी से ई-वेरिफाई करें।"
                        ]
                },
                "official_homepage": "https://www.incometax.gov.in/",
                "official_apply_url": "https://www.incometax.gov.in/iec/foposervices/",
                "official_status_url": "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/itrStatus",
                "official_helpline": "1800 180 1961 / 1800 103 0025",
                "official_email": "efilingwebmanager@incometax.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://incometax.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "income tax",
                        "itr",
                        "itr filing",
                        "tax refund",
                        "form 16",
                        "26as",
                        "ais",
                        "tax return",
                        "আয়কর",
                        "আইটিআর",
                        "ট্যাক্স",
                        "आयकर",
                        "आईटीआर"
                ],
                "scam_warning": {
                        "en": "NEVER share your Income Tax login password, OTP, or NetBanking credentials on third-party websites or phishing SMS.",
                        "bn": "কখনোই কোনো মেসেজ বা থার্ড-পার্টি লিংকে আপনার আয়কর পাসওয়ার্ড বা ব্যাংক ওটিপি দেবেন না।",
                        "hi": "आयकर पासवर्ड या ओटीपी किसी के साथ साझा न करें।"
                }
        },
        {
                "service_id": "digilocker-digital-documents",
                "service_name": {
                        "en": "DigiLocker Digital Document Wallet",
                        "bn": "ডিজিলকার ডিজিটাল নথি ওয়ালেট",
                        "hi": "डिजिलॉकर डिजिटल दस्तावेज़ वॉलेट"
                },
                "short_description": {
                        "en": "Flagship initiative under Digital India providing citizens with a secure cloud document wallet for legally valid digital driving licences, vehicle RC, marksheets, and Aadhaar.",
                        "bn": "ডিজিটাল ইন্ডিয়ার অধীনে নাগরিকদের ড্রাইভিং লাইসেন্স, গাড়ির কাগজ, মার্কশিট ও আধার কার্ডের বৈধ ডিজিটাল কপি সংরক্ষণের সরকারি ক্লাউড ওয়ালেট।",
                        "hi": "डिजिटल इंडिया के तहत ड्राइविंग लाइसेंस, वाहन आरसी, मार्कशीट और आधार के डिजिटल संस्करणों का आधिकारिक सुरक्षित क्लाउड वॉलेट।"
                },
                "category": "digital-gov",
                "category_name": {
                        "en": "Digital India, DigiLocker & UMANG",
                        "bn": "ডিজিটাল ভারত ও ডিজিলকার",
                        "hi": "डिजिटल इंडिया और डिजिलॉकर"
                },
                "subcategory": "DigiLocker MeitY",
                "authority": "Ministry of Electronics and Information Technology (MeitY), Govt of India",
                "government_level": "Central",
                "service_type": "Document",
                "target_users": [
                        "General Citizen",
                        "Student",
                        "Youth"
                ],
                "eligibility": {
                        "en": [
                                "All Indian citizens with an active Aadhaar number and linked mobile."
                        ],
                        "bn": [
                                "আধার কার্ড ও লিংক করা মোবাইল নম্বরধারী সমস্ত ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "आधार से जुड़े मोबाइल नंबर वाले सभी भारतीय नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Number",
                                "Aadhaar registered mobile for OTP verification."
                        ],
                        "bn": [
                                "আধার নম্বর",
                                "ওটিপির জন্য আধার লিঙ্ক করা মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "आधार संख्या और पंजीकृत मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Government Service.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি পরিষেবা।",
                        "hi": "100% निःशुल्क सरकारी सेवा।"
                },
                "benefits": {
                        "en": [
                                "Legally equivalent to original physical documents under Rule 9A of IT Rules 2016.",
                                "Accepted by Traffic Police, Railways, and Airport Security across India."
                        ],
                        "bn": [
                                "আইনগতভাবে মূল নথির সমান মান্য।",
                                "ট্রাফিক পুলিশ, রেলওয়ে ও এয়ারপোর্টে বৈধ হিসেবে স্বীকৃত।"
                        ],
                        "hi": [
                                "मूल दस्तावेज़ के समान कानूनी मान्यता प्राप्त।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official DigiLocker portal (digilocker.gov.in) or mobile app.",
                                "Click 'Sign Up' and enter your Full Name, DOB, Gender, Mobile, and 6-digit Security PIN.",
                                "Authenticate using Aadhaar Number and OTP.",
                                "Search for issuing authority (e.g. CBSE, MoRTH, State Boards, UIDAI).",
                                "Fetch verified digital document directly into your Issued Documents repository."
                        ],
                        "bn": [
                                "অফিসিয়াল DigiLocker পোর্টাল বা অ্যাপে যান (digilocker.gov.in)।",
                                "আধার নম্বর ও ওটিপি দিয়ে সাইন আপ বা লগইন করুন।",
                                "প্রয়োজনীয় দপ্তর (CBSE, পরিবহন, বোর্ড ইত্যাদি) সিলেক্ট করে ডিজিটাল নথি যুক্ত করুন।"
                        ],
                        "hi": [
                                "डिजिलॉकर पोर्टल (digilocker.gov.in) पर जाएं।",
                                "आधार और ओटीपी से लॉगिन करें और जारीकर्ता विभाग से दस्तावेज़ फेच करें।"
                        ]
                },
                "official_homepage": "https://www.digilocker.gov.in/",
                "official_apply_url": "https://www.digilocker.gov.in/",
                "official_status_url": "https://www.digilocker.gov.in/",
                "official_helpline": "1800-111-555 (Toll Free)",
                "official_email": "support@digitallocker.gov.in",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://digilocker.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "digilocker",
                        "digital locker",
                        "dl download",
                        "rc download",
                        "mark sheet",
                        "ডিজিলকার",
                        "ডিজিটাল লকার",
                        "डिजिलॉकर"
                ],
                "scam_warning": {
                        "en": "DigiLocker is an official Government service and NEVER charges fees for document fetching or storage.",
                        "bn": "ডিজিলকার সম্পূর্ণ সরকারি ও বিনামূল্যে পরিষেবা। নথি সংরক্ষণের জন্য কোনো ফি লাগে না।",
                        "hi": "डिजिलॉकर पूरी तरह से निःशुल्क सरकारी सेवा है।"
                }
        },
        {
                "service_id": "parivahan-vahan-vehicle-rc",
                "service_name": {
                        "en": "Vehicle Registration & RC Services (Vahan)",
                        "bn": "গাড়ির রেজিস্ট্রেশন ও আরসি পরিষেবা (বাহন)",
                        "hi": "वाहन पंजीकरण और आरसी सेवाएं (वाहन)"
                },
                "short_description": {
                        "en": "National Vahan citizen portal for Vehicle Registration Certificate (RC) status, RC transfer of ownership, address change, duplicate RC, and fitness renewal.",
                        "bn": "গাড়ির আরসি (RC) স্ট্যাটাস চেক, মালিকানা হস্তান্তর, ঠিকানা পরিবর্তন, ডুপ্লিকেট আরসি ও ফিটনেস রিনিউয়ালের অফিসিয়াল পোর্টাল।",
                        "hi": "वाहन पंजीकरण प्रमाणपत्र (आरसी) स्थिति, स्वामित्व हस्तांतरण, पता परिवर्तन और डुप्लीकेट आरसी का आधिकारिक पोर्टल।"
                },
                "category": "driving-vehicles",
                "category_name": {
                        "en": "Driving Licence & Parivahan",
                        "bn": "ড্রাইভিং লাইসেন্স ও পরিবহন",
                        "hi": "ड्राइविंग लाइसेंस और परिवहन"
                },
                "subcategory": "Vahan MoRTH",
                "authority": "Ministry of Road Transport and Highways (MoRTH), Govt of India",
                "government_level": "Central",
                "service_type": "Transport",
                "target_users": [
                        "Vehicle Owner",
                        "Commercial Driver",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "All registered motor vehicle owners in India."
                        ],
                        "bn": [
                                "ভারতের সমস্ত রেজিস্টার্ড মোটরযানের মালিক।"
                        ],
                        "hi": [
                                "भारत में सभी पंजीकृत वाहन मालिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Vehicle Registration Number & Chassis Number",
                                "Existing Registration Certificate (RC)",
                                "Valid Motor Insurance Certificate",
                                "Pollution Under Control Certificate (PUCC)",
                                "Owner Aadhaar / Identity Proof"
                        ],
                        "bn": [
                                "গাড়ির রেজিস্ট্রেশন নম্বর ও চেসিস নম্বর",
                                "বর্তমান আরসি কপি",
                                "বৈধ ইন্স্যুরেন্স ও দূষণ নিয়ন্ত্রণ শংসাপত্র (PUCC)",
                                "মালিকের আধার / পরিচয়পত্র।"
                        ],
                        "hi": [
                                "वाहन पंजीकरण संख्या, आरसी कॉपी, वैध बीमा और प्रदूषण प्रमाण पत्र (PUC)।"
                        ]
                },
                "application_fee": {
                        "en": "Official statutory fees per Central Motor Vehicles Rules (e.g. ₹500 for duplicate RC, state road taxes vary).",
                        "bn": "সরকারি নির্ধারিত ফি (যেমন ডুপ্লিকেট আরসি ₹৫০০, রাজ্যভেদে কর ভিন্ন)।",
                        "hi": "सरकारी नियमानुसार निर्धारित शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Online application for transfer of ownership without RTO touts.",
                                "Instant e-RC download legally recognized nationwide."
                        ],
                        "bn": [
                                "দালাল ছাড়াই অনলাইনে গাড়ির মালিকানা বদল ও ঠিকানা পরিবর্তনের আবেদন।",
                                "বৈধ ডিজিটাল ই-আরসি ডাউনলোড।"
                        ],
                        "hi": [
                                "ऑनलाइन आरसी सेवाएं और ई-आरसी डाउनलोड।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit Parivahan Vahan Citizen Services portal (vahan.parivahan.gov.in).",
                                "Select State and Registering RTO Office.",
                                "Enter Vehicle Registration Number and verify with Mobile OTP.",
                                "Select required service (Transfer of Ownership, Change of Address, Duplicate RC).",
                                "Fill application form, upload documents, and pay statutory fees online.",
                                "Print receipt and book appointment or upload e-signed Form 29/30."
                        ],
                        "bn": [
                                "Parivahan Vahan পোর্টালে যান (vahan.parivahan.gov.in)।",
                                "রাজ্য ও আরটিও সিলেক্ট করে গাড়ির নম্বর দিয়ে লগইন করুন।",
                                "প্রয়োজনীয় সেবা (মালিকানা বদল, ঠিকানা বদল ইত্যাদি) নির্বাচন করে ফি প্রদান করুন।"
                        ],
                        "hi": [
                                "वाहन पोर्टल (vahan.parivahan.gov.in) पर जाएं और आवश्यक सेवा चुनें।"
                        ]
                },
                "official_homepage": "https://parivahan.gov.in/",
                "official_apply_url": "https://vahan.parivahan.gov.in/vahanservice/",
                "official_status_url": "https://vahan.parivahan.gov.in/vahanservice/vahan/ui/appl_status/form_Status_Check.xhtml",
                "official_helpline": "0120-4925505 (6 AM to 10 PM)",
                "official_email": "helpdesk-vahan@gov.in",
                "state": "All India",
                "availability": "Online + RTO",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://parivahan.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "vahan",
                        "rc transfer",
                        "vehicle rc",
                        "rc status",
                        "car registration",
                        "bike rc",
                        "গাড়ির কাগজ",
                        "আরসি",
                        "বাহন",
                        "वाहन आरसी",
                        "आरसी ट्रांसफर"
                ],
                "scam_warning": {
                        "en": "Beware of fake challan or RC update SMS links. Always check domain is 'parivahan.gov.in'.",
                        "bn": "ভুয়া আরসি বা চালান মেসেজ থেকে সাবধান। সর্বদা parivahan.gov.in ডোমেইন নিশ্চিত করুন।",
                        "hi": "फर्जी चालान या आरसी लिंक से बचें। केवल आधिकारिक पोर्टल का उपयोग करें।"
                }
        },
        {
                "service_id": "parivahan-echallan-traffic",
                "service_name": {
                        "en": "Traffic eChallan Payment Portal",
                        "bn": "ট্রাফিক ই-চালান পেমেন্ট পোর্টাল",
                        "hi": "ट्रैफिक ई-चालान भुगतान पोर्टल"
                },
                "short_description": {
                        "en": "Official nationwide online portal to search, verify, and pay pending traffic violations and motor vehicle e-challans issued by traffic police and transport authorities.",
                        "bn": "ট্রাফিক পুলিশ ও পরিবহন দপ্তরের জারি করা ট্রাফিক জরিমানার ই-চালান অনুসন্ধান ও অনলাইনে নিরাপদে পেমেন্ট করার সরকারি পোর্টাল।",
                        "hi": "यातायात पुलिस और परिवहन विभाग द्वारा जारी ई-चालान की जांच और ऑनलाइन भुगतान का आधिकारिक पोर्टल।"
                },
                "category": "driving-vehicles",
                "category_name": {
                        "en": "Driving Licence & Parivahan",
                        "bn": "ড্রাইভিং লাইসেন্স ও পরিবহন",
                        "hi": "ड्राइविंग लाइसेंस और परिवहन"
                },
                "subcategory": "eChallan MoRTH",
                "authority": "Ministry of Road Transport and Highways (MoRTH), Govt of India",
                "government_level": "Central",
                "service_type": "Transport",
                "target_users": [
                        "Vehicle Owner",
                        "Driver",
                        "General Citizen"
                ],
                "eligibility": {
                        "en": [
                                "Any vehicle owner or driver with an issued traffic violation challan."
                        ],
                        "bn": [
                                "ট্রাফিক ফাইন বা চালান পাওয়া যেকোনো গাড়ির মালিক বা চালক।"
                        ],
                        "hi": [
                                "ट्रैफिक चालान प्राप्त कोई भी वाहन मालिक या चालक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Challan Number OR Vehicle Number + Chassis/Engine Last 5 Digits OR Driving Licence Number"
                        ],
                        "bn": [
                                "চালান নম্বর অথবা গাড়ির নম্বর + চেসিস/ইঞ্জিনের শেষ ৫ সংখ্যা অথবা ডিএল নম্বর।"
                        ],
                        "hi": [
                                "चालान संख्या या वाहन संख्या और चेसिस नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Actual penalty amount mentioned in the official traffic challan.",
                        "bn": "চালানে উল্লেখিত নির্দিষ্ট সরকারি জরিমানার অর্থ।",
                        "hi": "चालान में उल्लिखित निर्धारित जुर्माना राशि।"
                },
                "benefits": {
                        "en": [
                                "Instant online penalty settlement without court visits for compoundable offences.",
                                "Avoid vehicle blacklisting and RC suspension."
                        ],
                        "bn": [
                                "আদালতে না গিয়ে অনলাইনে তাৎক্ষণিক ট্রাফিক ফাইন নিষ্পত্তি।",
                                "গাড়ি ব্ল্যাকলিস্ট হওয়া থেকে রক্ষা।"
                        ],
                        "hi": [
                                "ऑनलाइन चालान निपटान और रसीद प्राप्ति।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official eChallan portal (echallan.parivahan.gov.in).",
                                "Enter Challan Number OR Vehicle Number (with chassis/engine last 5 digits).",
                                "Enter Captcha and click 'Get Detail'.",
                                "Review violation photo, location, and penalty breakdown.",
                                "Click 'Pay Now' and complete payment via NetBanking, UPI, or Debit Card.",
                                "Download and save official payment receipt for records."
                        ],
                        "bn": [
                                "অফিসিয়াল echallan.parivahan.gov.in পোর্টালে যান।",
                                "গাড়ির নম্বর ও চেসিস নম্বরের শেষ ৫ সংখ্যা দিয়ে চালান সার্চ করুন।",
                                "জরিমানার বিবরণ দেখে অনলাইন পেমেন্ট সম্পন্ন করে রসিদ ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "echallan.parivahan.gov.in पर जाएं, चालान खोजें और भुगतान करें।"
                        ]
                },
                "official_homepage": "https://echallan.parivahan.gov.in/",
                "official_apply_url": "https://echallan.parivahan.gov.in/index/accused-challan",
                "official_status_url": "https://echallan.parivahan.gov.in/index/accused-challan",
                "official_helpline": "0120-4925505 (MoRTH Helpdesk)",
                "official_email": "helpdesk-echallan@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://echallan.parivahan.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "echallan",
                        "traffic fine",
                        "challan payment",
                        "traffic police fine",
                        "car fine",
                        "bike fine",
                        "চালান পেমেন্ট",
                        "ট্রাফিক জরিমানা",
                        "ई-चालान",
                        "ट्रैफिक चालान"
                ],
                "scam_warning": {
                        "en": "SCAM ALERT: Do NOT click on APK download links or suspicious .apk SMS messages claiming unpaid challans. Only use 'echallan.parivahan.gov.in'.",
                        "bn": "সতর্কবার্তা: অচেনা নম্বর থেকে আসা চালান পরিশোধের APK বা লিংকে ক্লিক করবেন না। কেবল echallan.parivahan.gov.in ব্যবহার করুন।",
                        "hi": "धोखाधड़ी से बचें: एसएमएस में आए फर्जी एपीके लिंक पर क्लिक न करें।"
                }
        },
        {
                "service_id": "gst-portal-goods-services-tax",
                "service_name": {
                        "en": "GST Portal (Goods and Services Tax)",
                        "bn": "জিএসটি পোর্টাল (পণ্য ও পরিষেবা কর)",
                        "hi": "जीएसटी पोर्टल (वस्तु एवं सेवा कर)"
                },
                "short_description": {
                        "en": "Official Goods and Services Tax (GST) common portal for new business GST registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), e-Way bill, and tax payment.",
                        "bn": "নতুন ব্যবসা বা সংস্থার জিএসটি রেজিস্ট্রেশন, রিটার্ন ফাইলিং (GSTR-1, 3B), ই-ওয়ে বিল এবং ট্যাক্স পেমেন্টের আনুষ্ঠানিক কেন্দ্রীয় পোর্টাল।",
                        "hi": "व्यापार जीएसटी पंजीकरण, रिटर्न फाइलिंग (GSTR-1, GSTR-3B) और ई-वे बिल का आधिकारिक सरकारी पोर्टल।"
                },
                "category": "tax-gst",
                "category_name": {
                        "en": "Income Tax & GST Portal",
                        "bn": "আয়কর ও জিএসটি পোর্টাল",
                        "hi": "आयकर और जीएसटी पोर्टल"
                },
                "subcategory": "GSTN",
                "authority": "Goods and Services Tax Network (GSTN) / CBIC, Govt of India",
                "government_level": "Central",
                "service_type": "Business",
                "target_users": [
                        "Business / MSME",
                        "Trader",
                        "Manufacturer",
                        "Service Provider"
                ],
                "eligibility": {
                        "en": [
                                "Businesses crossing turnover threshold (₹40 Lakh for goods, ₹20 Lakh for services) or voluntary registrations."
                        ],
                        "bn": [
                                "নির্ধারিত টার্নওভারের ব্যবসায়ী, দোকানদার ও পরিষেবা প্রদানকারী প্রতিষ্ঠান।"
                        ],
                        "hi": [
                                "निर्धारित टर्नओवर वाले व्यापारी और व्यवसाय।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "PAN Card of Business / Proprietor",
                                "Proof of Business Registration / Constitution",
                                "Proof of Principal Place of Business (Rent Agreement / Electricity Bill)",
                                "Bank Account Details & Cancelled Cheque",
                                "Authorized Signatory Aadhaar & Photo"
                        ],
                        "bn": [
                                "প্যান কার্ড",
                                "ব্যবসার ঠিকানার প্রমাণপত্র (ভাড়া চুক্তি / বিদ্যুৎ বিল)",
                                "ব্যাংক পাসবুক বা চেক",
                                "স্বত্বাধিকারীর আধার ও ছবি।"
                        ],
                        "hi": [
                                "पैन कार्ड, व्यवसाय का पता प्रमाण, बैंक खाता विवरण और आधार।"
                        ]
                },
                "application_fee": {
                        "en": "New GST Registration is 100% Free on official portal.",
                        "bn": "নতুন জিএসটি রেজিস্ট্রেশন সরকারি পোর্টালে সম্পূর্ণ বিনামূল্যে।",
                        "hi": "आधिकारिक पोर्टल पर जीएसटी पंजीकरण निःशुल्क है।"
                },
                "benefits": {
                        "en": [
                                "Legal recognition as registered supplier of goods/services.",
                                "Seamless interstate trade and Input Tax Credit (ITC) eligibility."
                        ],
                        "bn": [
                                "আইনি বৈধতা ও ইনপুট ট্যাক্স ক্রেডিট (ITC) পাওয়ার সুবিধা।",
                                "সারা ভারতে অবাধে ব্যবসা করার অধিকার।"
                        ],
                        "hi": [
                                "इनपुट टैक्स क्रेडिट (ITC) और अंतरराज्यीय व्यापार की सुविधा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official GST Portal (gst.gov.in).",
                                "Click 'Services' > 'Registration' > 'New Registration'.",
                                "Generate Temporary Reference Number (TRN) using PAN, Email, and Mobile OTP.",
                                "Log in with TRN and complete Part-B with business details and document uploads.",
                                "Complete Aadhaar authentication for instant biometric/OTP verification.",
                                "Receive Application Reference Number (ARN) and track GSTIN approval."
                        ],
                        "bn": [
                                "অফিসিয়াল GST পোর্টালে যান (gst.gov.in)।",
                                "New Registration থেকে প্যান ও মোবাইল দিয়ে TRN তৈরি করুন।",
                                "ব্যবসার বিস্তারিত তথ্য ও নথি আপলোড করে আধার ওটিপি দিয়ে সাবমিট করুন।"
                        ],
                        "hi": [
                                "gst.gov.in पर जाएं और न्यू रजिस्ट्रेशन पूरा करें।"
                        ]
                },
                "official_homepage": "https://www.gst.gov.in/",
                "official_apply_url": "https://reg.gst.gov.in/registration/",
                "official_status_url": "https://services.gst.gov.in/services/arnstatus",
                "official_helpline": "1800-103-4786 (Toll Free)",
                "official_email": "helpdesk@gst.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://gst.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "gst",
                        "gst registration",
                        "gstr 1",
                        "gstr 3b",
                        "gst return",
                        "eway bill",
                        "জিএসটি",
                        "জিএসটি রেজিস্ট্রেশন",
                        "জিএসটি রিটার্ন",
                        "जीएसटी",
                        "जीएसटी पंजीकरण"
                ],
                "scam_warning": {
                        "en": "Official GST registration carries ZERO government fee. Do not pay unauthorized agents claiming 'exclusive approval'.",
                        "bn": "সরকারি জিএসটি রেজিস্ট্রেশন সম্পূর্ণ বিনামূল্যে। অননুমোদিত দালালদের টাকা দেবেন না।",
                        "hi": "जीएसटी पंजीकरण का कोई सरकारी शुल्क नहीं है। धोखाधड़ी से बचें।"
                }
        },
        {
                "service_id": "swayam-nptel-free-learning",
                "service_name": {
                        "en": "SWAYAM & NPTEL Free Learning & Credits",
                        "bn": "স্বয়ম ও এনপিটিইএল বিনামূল্যে অনলাইন কোর্স ও ক্রেডিট",
                        "hi": "स्वयं और एनपीटीईएल मुफ्त ऑनलाइन कोर्स और क्रेडिट"
                },
                "short_description": {
                        "en": "National online education platform by Ministry of Education offering free certified college & university level courses by IITs, IIMs, and Central Universities with credit transfer.",
                        "bn": "শিক্ষা মন্ত্রকের জাতীয় অনলাইন শিক্ষা প্ল্যাটফর্ম যেখানে IIT, IIM ও কেন্দ্রীয় বিশ্ববিদ্যালয়ের অধ্যাপকদের দ্বারা বিনামূল্যে কোর্স ও সার্টিফিকেট প্রদান করা হয়।",
                        "hi": "आईआईटी और आईआईएम द्वारा संचालित केंद्रीय शिक्षा मंत्रालय का मुफ्त ऑनलाइन कोर्स और सर्टिफिकेट पोर्टल।"
                },
                "category": "free-learning",
                "category_name": {
                        "en": "Free Certified Learning (SWAYAM / NPTEL)",
                        "bn": "বিনামূল্যে অনলাইন কোর্স (SWAYAM)",
                        "hi": "मुफ्त ऑनलाइन कोर्स (SWAYAM)"
                },
                "subcategory": "Higher Education MoE",
                "authority": "Ministry of Education (MoE) / IIT Madras / AICTE, Govt of India",
                "government_level": "Central",
                "service_type": "Education",
                "target_users": [
                        "Student",
                        "College Student",
                        "Teacher",
                        "Professional"
                ],
                "eligibility": {
                        "en": [
                                "Open to all students, lifelong learners, and teachers worldwide."
                        ],
                        "bn": [
                                "সমস্ত শিক্ষার্থী, শিক্ষক ও পেশাজীবীদের জন্য উন্মুক্ত।"
                        ],
                        "hi": [
                                "सभी छात्रों और शिक्षकों के लिए खुला।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Email ID & Mobile Number",
                                "College/Institution details for Academic Bank of Credits (ABC) transfer (optional)."
                        ],
                        "bn": [
                                "ইমেইল আইডি ও মোবাইল নম্বর",
                                "কলেজ/বিশ্ববিদ্যালয়ের তথ্য (ক্রেডিট ট্রান্সফারের জন্য)।"
                        ],
                        "hi": [
                                "ईमेल आईडी और कॉलेज विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "Learning is 100% Free. Nominal fee (₹1,000) only if appearing for proctored certificate exam.",
                        "bn": "কোর্স সম্পূর্ণ বিনামূল্যে। শুধুমাত্র অফিসিয়াল সার্টিফিকেট পরীক্ষার জন্য নির্ধারিত ফি ₹১,০০০ প্রযোজ্য।",
                        "hi": "कोर्स पूरी तरह से मुफ्त है।"
                },
                "benefits": {
                        "en": [
                                "UGC recognized credit transfer directly into university degree.",
                                "Industry recognized certificates from IITs and IIMs."
                        ],
                        "bn": [
                                "UGC অনুমোদিত ক্রেডিট ট্রান্সফার যা কলেজের ডিগ্রিতে যুক্ত হয়।",
                                "IIT ও IIM-এর বিশ্বমানের সার্টিফিকেট।"
                        ],
                        "hi": [
                                "यूजीसी मान्य क्रेडिट ट्रांसफर और आईआईटी सर्टिफिकेट।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official SWAYAM portal (swayam.gov.in).",
                                "Sign in with Google, Microsoft, or SWAYAM Account.",
                                "Browse Course Catalog across Engineering, Science, Humanities, and Commerce.",
                                "Click 'Enroll' on desired course and access video lectures, assignments, and forums."
                        ],
                        "bn": [
                                "অফিসিয়াল swayam.gov.in পোর্টালে যান।",
                                "কোর্স ক্যাটালগ থেকে পছন্দমতো বিষয় বেছে 'Enroll' বাটনে ক্লিক করুন।"
                        ],
                        "hi": [
                                "swayam.gov.in पर जाएं और कोर्स में निःशुल्क नामांकन करें।"
                        ]
                },
                "official_homepage": "https://swayam.gov.in/",
                "official_apply_url": "https://swayam.gov.in/",
                "official_status_url": "https://swayam.gov.in/",
                "official_helpline": "1800-112-154 (Support)",
                "official_email": "support@swayam.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://swayam.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "swayam",
                        "nptel",
                        "free courses",
                        "iit course",
                        "online certificate",
                        "ugc credits",
                        "স্বয়ং",
                        "এনপিটিইএল",
                        "অনলাইন কোর্স",
                        "स्वयं",
                        "एनपीटीईएल"
                ],
                "scam_warning": {
                        "en": "SWAYAM course access is 100% free. Never pay third-party sites for enrolment.",
                        "bn": "SWAYAM কোর্সে ভর্তি সম্পূর্ণ বিনামূল্যে। কোনো থার্ড-পার্টিকে টাকা দেবেন না।",
                        "hi": "स्वयं कोर्स में नामांकन बिल्कुल मुफ्त है।"
                }
        },
        {
                "service_id": "wb-bsk-bangla-sahayata-kendra",
                "service_name": {
                        "en": "Bangla Sahayata Kendra (BSK) Master Gateway",
                        "bn": "বাংলা সহায়তা কেন্দ্র (BSK) মাস্টার পোর্টাল",
                        "hi": "बांग्ला सहायता केंद्र (बीएसके) मास्टर पोर्टल"
                },
                "short_description": {
                        "en": "Flagship West Bengal Government single-window citizen portal offering 300+ public services, certificates, welfare schemes, and social security completely free of cost across 3,500+ physical centres and online.",
                        "bn": "পশ্চিমবঙ্গ সরকারের ৩,৫০০+ কেন্দ্রে এবং অনলাইনে সম্পূর্ণ বিনামূল্যে ৩০০+ সরকারি পরিষেবা ও প্রকল্পের সুবিধা পাওয়ার একক সরকারি পোর্টাল।",
                        "hi": "पश्चिम बंगाल सरकार का 300+ से अधिक सरकारी सेवाओं का निःशुल्क नागरिक सहायता पोर्टल।"
                },
                "category": "wb-edistrict",
                "category_name": {
                        "en": "West Bengal e-District",
                        "bn": "পশ্চিমবঙ্গ ই-ডিস্ট্রিক্ট",
                        "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट"
                },
                "subcategory": "BSK West Bengal",
                "authority": "Personnel & Administrative Reforms Department, Government of West Bengal",
                "government_level": "State",
                "service_type": "Welfare",
                "target_users": [
                        "General Citizen",
                        "Farmer",
                        "Student",
                        "Women",
                        "Senior Citizen"
                ],
                "eligibility": {
                        "en": [
                                "All permanent residents of West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত স্থায়ী বাসিন্দা।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के सभी स्थायी निवासी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card / Voter Card / Ration Card",
                                "Service-specific supporting documents."
                        ],
                        "bn": [
                                "আধার কার্ড / ভোটার কার্ড / রেশন কার্ড",
                                "নির্দিষ্ট প্রকল্পের সংশ্লিষ্ট নথি।"
                        ],
                        "hi": [
                                "आधार कार्ड / वोटर कार्ड / राशन कार्ड।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Government Assistance at all BSK centres.",
                        "bn": "সমস্ত BSK কেন্দ্রে ১০০% বিনামূল্যে পরিষেবা।",
                        "hi": "सभी बीएसके केंद्रों पर 100% निःशुल्क सेवा।"
                },
                "benefits": {
                        "en": [
                                "Zero fee for form filling, scanning, uploading, and application submission.",
                                "Single unified window for all 40+ state departments."
                        ],
                        "bn": [
                                "ফর্ম পূরণ, স্ক্যানিং ও জমা দেওয়ার জন্য কোনো চার্জ লাগে না।",
                                "রাজ্যের সমস্ত সরকারি দপ্তর একই ছাদের তলায়।"
                        ],
                        "hi": [
                                "फॉर्म भरने और आवेदन करने के लिए शून्य शुल्क।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official BSK portal (bsk.wb.gov.in) or your nearest Gram Panchayat/BDO/Municipality BSK centre.",
                                "Browse citizen services by Department (e-District, Food, Agriculture, Education, Health).",
                                "Apply online directly or take free assistance from designated BSK operators.",
                                "Receive instant SMS confirmation with Application Tracking ID."
                        ],
                        "bn": [
                                "অফিসিয়াল bsk.wb.gov.in পোর্টালে যান অথবা নিকটবর্তী বিএসকে কেন্দ্রে যান।",
                                "প্রয়োজনীয় সেবা নির্বাচন করে বিনামূল্যে আবেদন সম্পন্ন করুন।"
                        ],
                        "hi": [
                                "bsk.wb.gov.in पोर्टल पर जाएं या निकटतम केंद्र पर निःशुल्क आवेदन करें।"
                        ]
                },
                "official_homepage": "https://bsk.wb.gov.in/",
                "official_apply_url": "https://bsk.wb.gov.in/",
                "official_status_url": "https://bsk.wb.gov.in/",
                "official_helpline": "033-2214-0000 (Toll Free Helpline)",
                "official_email": "bskhelpdesk@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online + 3500+ Kendras",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://bsk.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "bsk",
                        "bangla sahayata kendra",
                        "bsk portal",
                        "wb government services",
                        "bangla sahayata",
                        "বিএসকে",
                        "বাংলা সহায়তা কেন্দ্র",
                        "পশ্চিমবঙ্গ সরকারি সেবা",
                        "बीएसके",
                        "बांग्ला सहायता केंद्र"
                ],
                "scam_warning": {
                        "en": "BSK services are completely FREE. Do not pay any money to anyone at or outside BSK centres.",
                        "bn": "বিএসকে সেবা সম্পূর্ণ বিনামূল্যে। কোনো টাকা কাউকে দেবেন না।",
                        "hi": "बीएसके की सभी सेवाएं पूरी तरह से निःशुल्क हैं।"
                }
        },
        {
                "service_id": "wb-duare-sarkar-camps",
                "service_name": {
                        "en": "Duare Sarkar Outreach & Camps Portal",
                        "bn": "দুয়ারে সরকার ক্যাম্প ও পরিষেবা পোর্টাল",
                        "hi": "दुआरे सरकार कैंप व योजना पोर्टल"
                },
                "short_description": {
                        "en": "Government of West Bengal mass outreach initiative delivering 35+ major flagship schemes (Annapurna Bhandar, Swasthya Sathi, Krishak Bandhu, Caste Certificate) directly at community neighbourhood camps.",
                        "bn": "পশ্চিমবঙ্গ সরকারের উদ্যোগ যেখানে অন্নপূর্ণা ভাণ্ডার, স্বাস্থ্য সাথী, কৃষক বন্ধু, কাস্ট সার্টিফিকেট সহ ৩৫+ প্রকল্পের সুবিধা বাড়ি সংলগ্ন ক্যাম্পে সরাসরি প্রদান করা হয়।",
                        "hi": "पश्चिम बंगाल सरकार का प्रमुख जनसंपर्क अभियान जहां स्थानीय कैंपों में 35+ से अधिक योजनाओं (अन्नपूर्णा भंडार, स्वास्थ्य साथी) का लाभ दिया जाता है।"
                },
                "category": "welfare-schemes",
                "category_name": {
                        "en": "Government Welfare Schemes",
                        "bn": "সরকারি কল্যাণমূলক প্রকল্প",
                        "hi": "सरकारी कल्याण योजनाएं"
                },
                "subcategory": "Duare Sarkar WB",
                "authority": "Government of West Bengal",
                "government_level": "State",
                "service_type": "Welfare",
                "target_users": [
                        "General Citizen",
                        "Women",
                        "Farmer",
                        "Youth",
                        "Senior Citizen"
                ],
                "eligibility": {
                        "en": [
                                "All eligible citizens and families residing in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত যোগ্য বাসিন্দা ও পরিবার।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के सभी निवासी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card",
                                "Swasthya Sathi Card",
                                "Bank Passbook with linked single account",
                                "Mobile Number & scheme-specific proofs."
                        ],
                        "bn": [
                                "আধার কার্ড",
                                "স্বাস্থ্য সাথী কার্ড",
                                "ব্যাংক পাসবুক (সিঙ্গেল অ্যাকাউন্ট)",
                                "মোবাইল নম্বর ও সংশ্লিষ্ট নথি।"
                        ],
                        "hi": [
                                "आधार कार्ड, स्वास्थ्य साथी कार्ड, बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Government Camp Service.",
                        "bn": "ক্যাম্পে সমস্ত আবেদন সম্পূর্ণ বিনামূল্যে।",
                        "hi": "कैंप में सभी आवेदन पूरी तरह से निःशुल्क हैं।"
                },
                "benefits": {
                        "en": [
                                "Doorstep access to all major state welfare schemes.",
                                "Instant receipt acknowledgement and on-the-spot grievance resolution."
                        ],
                        "bn": [
                                "গ্রাম ও পাড়ায় ক্যাম্পের মাধ্যমে সহজে আবেদন।",
                                "তাৎক্ষণিক প্রাপ্তিস্বীকার রসিদ ও ট্র্যাকিং সুবিধা।"
                        ],
                        "hi": [
                                "स्थानीय कैंप में योजनाओं का सीधा लाभ।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official Duare Sarkar portal (ds.wb.gov.in) to locate upcoming camp dates and venue in your Ward/Gram Panchayat.",
                                "Collect official free application form from the designated registration desk at the camp.",
                                "Attach required photocopies of Aadhaar, Bank Passbook, and supporting documents.",
                                "Submit at the dedicated scheme counter and collect your stamped Acknowledgement Slip."
                        ],
                        "bn": [
                                "ds.wb.gov.in পোর্টালে আপনার ওয়ার্ড বা গ্রাম পঞ্চায়েতের ক্যাম্পের তারিখ জানুন।",
                                "ক্যাম্প থেকে বিনামূল্যে ফর্ম সংগ্রহ করে নথি সহ জমা দিন এবং রসিদ নিন।"
                        ],
                        "hi": [
                                "ds.wb.gov.in पर कैंप की तिथि देखें और कैंप में फॉर्म जमा करें।"
                        ]
                },
                "official_homepage": "https://ds.wb.gov.in/",
                "official_apply_url": "https://ds.wb.gov.in/",
                "official_status_url": "https://ds.wb.gov.in/",
                "official_helpline": "1800-345-0117 (State Toll Free)",
                "official_email": "duaresarkar@wb.gov.in",
                "state": "West Bengal",
                "availability": "Neighbourhood Camps + Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://ds.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "duare sarkar",
                        "duare sarkar camp",
                        "ds portal",
                        "annapurna bhandar camp",
                        "lakshmir bhandar camp",
                        "দুয়ারে সরকার",
                        "দুয়ারে সরকার ক্যাম্প",
                        "দুয়ারে সরকার",
                        "दुआरे सरकार"
                ],
                "scam_warning": {
                        "en": "Duare Sarkar application forms are strictly FREE and distributed only at official camp premises. Never buy forms from outside shops.",
                        "bn": "দুয়ারে সরকারের ফর্ম সম্পূর্ণ বিনামূল্যে সরকারি ক্যাম্প থেকেই দেওয়া হয়। বাইরে থেকে ফর্ম কিনবেন না।",
                        "hi": "दुआरे सरकार के फॉर्म केवल आधिकारिक कैंप से निःशुल्क प्राप्त करें।"
                }
        },
        {
                "service_id": "wb-banglar-yuva-sathi",
                "service_name": {
                        "en": "Banglar Yuva Sathi Scheme Portal",
                        "bn": "বাংলার যুব সাথী প্রকল্প পোর্টাল",
                        "hi": "बांगलार युवा साथी योजना पोर्टल"
                },
                "short_description": {
                        "en": "Official Government of West Bengal youth empowerment portal connecting youth with internships, career skilling, entrepreneurship grants, and digital enablement.",
                        "bn": "পশ্চিমবঙ্গ সরকারের তরুণ প্রজন্মের জন্য ইন্টার্নশিপ, দক্ষতা বৃদ্ধি ও স্বনির্ভরতার সরকারি পোর্টাল।",
                        "hi": "पश्चिम बंगाल सरकार का युवा सशक्तिकरण, इंटर्नशिप और कौशल विकास पोर्टल।"
                },
                "category": "sports-youth",
                "category_name": {
                        "en": "Sports, Youth Welfare & Khelo India",
                        "bn": "ক্রীড়া ও যুব কল্যাণ",
                        "hi": "खेल और युवा कल्याण"
                },
                "subcategory": "Youth Services WB",
                "authority": "Department of Youth Services and Sports, Government of West Bengal",
                "government_level": "State",
                "service_type": "Youth",
                "target_users": [
                        "Youth",
                        "Student",
                        "Job Seeker"
                ],
                "eligibility": {
                        "en": [
                                "Youth aged 18 to 35 residing in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের ১৮ থেকে ৩৫ বছর বয়সী তরুণ-তরুণী।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के 18-35 वर्ष के युवा।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card",
                                "Educational Proof",
                                "Mobile Number & Photo"
                        ],
                        "bn": [
                                "আধার কার্ড",
                                "শিক্ষাগত যোগ্যতার প্রমাণ",
                                "মোবাইল নম্বর ও ছবি।"
                        ],
                        "hi": [
                                "आधार कार्ड और शैक्षणिक प्रमाण पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Free Government Initiative.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি উদ্যোগ।",
                        "hi": "निःशुल्क सरकारी योजना।"
                },
                "benefits": {
                        "en": [
                                "Skill workshops, digital enablement, and state-level youth competitions."
                        ],
                        "bn": [
                                "দক্ষতা উন্নয়ন কর্মশালা ও রাজ্যভিত্তিক যুব প্রকল্পের সুবিধা।"
                        ],
                        "hi": [
                                "कौशल कार्यशालाएं और राज्य स्तरीय अवसर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit the official Government of West Bengal youth portal.",
                                "Register with Aadhaar and mobile verification.",
                                "Explore available youth schemes, training camps, and apply online."
                        ],
                        "bn": [
                                "সরকারি পোর্টালে আধার দিয়ে রেজিস্ট্রেশন করুন ও যুব প্রকল্পের সুবিধা নিন।"
                        ],
                        "hi": [
                                "आधिकारिक पोर्टल पर पंजीकरण करें और योजनाओं का लाभ उठाएं।"
                        ]
                },
                "official_homepage": "https://wb.gov.in/",
                "official_apply_url": "https://wb.gov.in/",
                "official_status_url": "https://wb.gov.in/",
                "official_helpline": "1800-345-0117",
                "official_email": "youthservices@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "banglar yuva sathi",
                        "yuva sathi",
                        "wb youth scheme",
                        "বাংলার যুব সাথী",
                        "যুব সাথী",
                        "बांगलार युवा साथी"
                ],
                "scam_warning": {
                        "en": "Always access through official wb.gov.in portal. Beware of fake portal names like 'Yuva Shakti'.",
                        "bn": "সর্বদা সরকারি wb.gov.in পোর্টাল ব্যবহার করুন। ভুয়া নামের পোর্টাল থেকে দূরে থাকুন।",
                        "hi": "केवल आधिकारिक wb.gov.in पोर्टल का उपयोग करें।"
                }
        },
        {
                "service_id": "pvt-sbi-online-banking",
                "service_name": {
                        "en": "State Bank of India (SBI Online Banking)",
                        "bn": "স্টেট ব্যাঙ্ক অফ ইন্ডিয়া (এসবিআই ইন্টারনেট ব্যাঙ্কিং)",
                        "hi": "भारतीय स्टेट बैंक (एसबीआई ऑनलाइन)"
                },
                "short_description": {
                        "en": "Official retail and corporate internet banking portal of State Bank of India (SBI) for fund transfers, account statements, debit card management, and fixed deposits.",
                        "bn": "স্টেট ব্যাঙ্ক অফ ইন্ডিয়ার অফিসিয়াল ইন্টারনেট ব্যাঙ্কিং পোর্টাল—টাকা ট্রান্সফার, স্টেটমেন্ট ডাউনলোড ও ফিক্সড ডিপোজিটের নিরাপদ সেবা।",
                        "hi": "भारतीय स्टेट बैंक का आधिकारिक ऑनलाइन पोर्टल - फंड ट्रांसफर, खाता विवरण और सावधि जमा की सुविधा।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Banking",
                "authority": "State Bank of India (Corporate Entity)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "SBI Account Holder",
                        "Citizen",
                        "Business"
                ],
                "eligibility": {
                        "en": [
                                "Active SBI Savings/Current account holders with registered mobile number."
                        ],
                        "bn": [
                                "এসবিআই-এর রেজিস্টার্ড মোবাইল নম্বর সহ সেভিংস/কারেন্ট অ্যাকাউন্টধারী।"
                        ],
                        "hi": [
                                "एसबीआई खाताधारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "SBI Account Number & CIF Number",
                                "Registered Mobile Number for OTP",
                                "SBI ATM / Debit Card for online activation."
                        ],
                        "bn": [
                                "এসবিআই অ্যাকাউন্ট নম্বর ও CIF নম্বর",
                                "রেজিস্টার্ড মোবাইল ও এটিএম কার্ড।"
                        ],
                        "hi": [
                                "एसबीआई खाता संख्या, सीआईएफ नंबर और एटीएम कार्ड।"
                        ]
                },
                "application_fee": {
                        "en": "Free online banking access.",
                        "bn": "ইন্টারনেট ব্যাঙ্কিং সম্পূর্ণ বিনামূল্যে।",
                        "hi": "निःशुल्क ऑनलाइन बैंकिंग।"
                },
                "benefits": {
                        "en": [
                                "24x7 IMPS, NEFT, RTGS, and UPI transfers.",
                                "Download official stamped e-statements for government form submissions."
                        ],
                        "bn": [
                                "২৪x৭ ফান্ড ট্রান্সফার ও সরকারি ফর্ম ফিলাপের জন্য ই-স্টেটমেন্ট ডাউনলোড।"
                        ],
                        "hi": [
                                "24x7 फंड ट्रांसफर और ई-स्टेटमेंट डाउनलोड।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official SBI portal (onlinesbi.sbi).",
                                "Click 'Personal Banking' > 'Login'.",
                                "Enter your Username, Password, and Captcha.",
                                "Verify using High-Security Password (OTP) received on your registered mobile.",
                                "Access banking dashboard for transactions and statements."
                        ],
                        "bn": [
                                "অফিসিয়াল onlinesbi.sbi পোর্টালে গিয়ে ইউজারনেম, পাসওয়ার্ড ও ওটিপি দিয়ে নিরাপদে লগইন করুন।"
                        ],
                        "hi": [
                                "onlinesbi.sbi पर जाएं और सुरक्षित लॉगिन करें।"
                        ]
                },
                "official_homepage": "https://www.sbi.co.in/",
                "official_apply_url": "https://www.onlinesbi.sbi/",
                "official_status_url": "https://www.onlinesbi.sbi/",
                "official_helpline": "1800 1234 / 1800 2100 (SBI Toll Free)",
                "official_email": "customercare@sbi.co.in",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.onlinesbi.sbi/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "sbi",
                        "sbi online",
                        "state bank of india",
                        "sbi netbanking",
                        "sbi statement",
                        "yono sbi",
                        "এসবিআই",
                        "স্টেট ব্যাঙ্ক",
                        "এসবিআই লগইন",
                        "एसबीआई",
                        "स्टेट बैंक"
                ],
                "scam_warning": {
                        "en": "NEVER share your SBI Username, Password, ATM PIN, or OTP with anyone. SBI NEVER calls asking for OTPs.",
                        "bn": "কখনোই এসবিআই পাসওয়ার্ড, এটিএম পিন বা ওটিপি কাউকে জানাবেন না। এসবিআই ফোন করে ওটিপি চায় না।",
                        "hi": "एसबीआई पासवर्ड, पिन या ओटीपी किसी के साथ साझा न करें।"
                }
        },
        {
                "service_id": "pvt-npci-bhim-upi",
                "service_name": {
                        "en": "BHIM & NPCI Digital Payments Portal",
                        "bn": "ভিম (BHIM) ও এনপিসিআই ডিজিটাল পেমেন্ট",
                        "hi": "भीम (BHIM) और एनपीसीआई डिजिटल भुगतान"
                },
                "short_description": {
                        "en": "Official National Payments Corporation of India (NPCI) portal for Unified Payments Interface (UPI) consumer guidance, dispute resolution, and BHIM app authentication.",
                        "bn": "ভারতের জাতীয় পেমেন্ট কর্পোরেশনের (NPCI) অফিসিয়াল পোর্টাল—ইউপিআই লেনদেন বিরোধ নিষ্পত্তি ও ভিম পেমেন্ট সহায়তা।",
                        "hi": "एनपीसीआई का आधिकारिक यूपीआई उपभोक्ता सहायता और शिकायत निवारण पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Payments",
                "authority": "National Payments Corporation of India (NPCI)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "All Indian Citizens",
                        "UPI Users"
                ],
                "eligibility": {
                        "en": [
                                "All Indian bank account holders using UPI payments."
                        ],
                        "bn": [
                                "ইউপিআই ব্যবহারকারী সমস্ত ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "सभी यूपीआई उपयोगकर्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Bank Account Number",
                                "Transaction Reference ID / UTR Number"
                        ],
                        "bn": [
                                "ব্যাংক অ্যাকাউন্ট ও ইউটিআর (UTR) ট্রানজাকশন নম্বর।"
                        ],
                        "hi": [
                                "बैंक खाता और यूटीआर नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Public Utility.",
                        "bn": "সম্পূর্ণ বিনামূল্যে।",
                        "hi": "निःशुल्क सेवा।"
                },
                "benefits": {
                        "en": [
                                "Direct official channel to escalate failed UPI transactions.",
                                "Verify genuine UPI handles and merchant QR codes."
                        ],
                        "bn": [
                                "ব্যর্থ ইউপিআই লেনদেনের টাকা ফেরতের সরাসরি অভিযোগ নিষ্পত্তির পথ।"
                        ],
                        "hi": [
                                "विफल यूपीआई लेनदेन के लिए शिकायत निवारण।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official NPCI portal (npci.org.in/what-we-do/upi/dispute-redressal-mechanism).",
                                "Select 'Complaint' and choose nature of transaction (Person-to-Person / Person-to-Merchant).",
                                "Enter 12-digit UPI Transaction ID (UTR), Bank Name, Amount, and Date.",
                                "Submit complaint for direct inter-bank automated reconciliation."
                        ],
                        "bn": [
                                "অফিসিয়াল npci.org.in পোর্টালে যান ও ইউপিআই সংক্রান্ত অভিযোগ দাখিল করুন।"
                        ],
                        "hi": [
                                "npci.org.in पर जाएं और यूपीआई शिकायत दर्ज करें।"
                        ]
                },
                "official_homepage": "https://www.npci.org.in/",
                "official_apply_url": "https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism",
                "official_status_url": "https://www.npci.org.in/",
                "official_helpline": "1800-120-1740 (NPCI Toll Free)",
                "official_email": "contact@npci.org.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.npci.org.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "bhim",
                        "npci",
                        "upi dispute",
                        "failed transaction",
                        "upi refund",
                        "ভিম",
                        "ইউপিআই",
                        "এনপিসিআই",
                        "भीम",
                        "यूपीआई"
                ],
                "scam_warning": {
                        "en": "Remember: UPI PIN is ONLY needed to SEND money, NEVER to receive money or refunds.",
                        "bn": "মনে রাখবেন: টাকা পাঠানোর জন্যই শুধু ইউপিআই পিন লাগে, টাকা পাওয়ার জন্য কখনোই পিন দিতে হয় না।",
                        "hi": "याद रखें: पैसे प्राप्त करने के लिए कभी भी यूपीआई पिन की आवश्यकता नहीं होती।"
                }
        },
        {
                "service_id": "esic-medical-portal",
                "service_name": {
                        "en": "ESIC Insured Person Portal & Health Benefits",
                        "bn": "ইএসআইসি (ESIC) স্বাস্থ্য সুবিধা ও আইপি পোর্টাল",
                        "hi": "ईएसआईसी (ESIC) स्वास्थ्य लाभ और आईपी पोर्टल"
                },
                "short_description": {
                        "en": "Official Employees' State Insurance Corporation portal for Insured Persons (IP) to download Pehchan card, view dispensary details, medical claims, and maternity benefits.",
                        "bn": "কর্মচারী রাজ্য বীমা নিগমের (ESIC) অফিসিয়াল পোর্টাল—পহেচান কার্ড ডাউনলোড, ডিসপেনসারি ও চিকিৎসা দাবি।",
                        "hi": "कर्मचारी राज्य बीमा निगम (ESIC) पोर्टल—पहचान कार्ड डाउनलोड, औषधालय और चिकित्सा लाभ।"
                },
                "category": "labour-workers",
                "category_name": {
                        "en": "Workers & Labour Welfare",
                        "bn": "শ্রমিক ও শ্রম কল্যাণ",
                        "hi": "श्रमिक और श्रम कल्याण"
                },
                "subcategory": "Social Security",
                "authority": "Employees' State Insurance Corporation (Ministry of Labour & Employment)",
                "government_level": "Central",
                "service_type": "Social Security",
                "target_users": [
                        "Formal Sector Employee",
                        "Worker",
                        "Insured Person"
                ],
                "eligibility": {
                        "en": [
                                "Employees earning up to ₹21,000/month (₹25,000 for persons with disabilities) in covered establishments."
                        ],
                        "bn": [
                                "অন্তর্ভুক্ত সংস্থায় কর্মরত মাসিক ২১,০০০ টাকা পর্যন্ত বেতনভুক্ত কর্মচারী।"
                        ],
                        "hi": [
                                "₹21,000 प्रति माह तक कमाने वाले कर्मचारी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "ESIC Insurance Number (IP Number)",
                                "Registered Mobile Number for OTP authentication."
                        ],
                        "bn": [
                                "ইএসআইসি ইন্স্যুরেন্স নম্বর (IP Number) ও রেজিস্টার্ড মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "ईएसआईसी बीमा संख्या और पंजीकृत मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free for insured beneficiaries (employer/employee payroll contribution).",
                        "bn": "সম্পূর্ণ বিনামূল্যে (সংবিধিবদ্ধ অবদান)।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Comprehensive medical care for self and family.",
                                "Sickness, maternity, and disablement cash benefits."
                        ],
                        "bn": [
                                "নিজের ও পরিবারের সম্পূর্ণ বিনামূল্যে চিকিৎসা ও আর্থিক ক্ষতিপূরণ।"
                        ],
                        "hi": [
                                "स्वयं और परिवार के लिए चिकित्सा देखभाल व मातृत्व लाभ।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official ESIC portal (esic.gov.in).",
                                "Navigate to 'Insured Person / Beneficiary Login'.",
                                "Enter your 10-digit Insurance Number and password.",
                                "Download e-Pehchan card and check medical entitlement."
                        ],
                        "bn": [
                                "অফিসিয়াল esic.gov.in পোর্টালে যান।",
                                "'Insured Person Login'-এ গিয়ে IP নম্বর দিয়ে লগইন করুন ও পহেচান কার্ড সংগ্রহ করুন।"
                        ],
                        "hi": [
                                "esic.gov.in पर जाएं और आईपी लॉगिन द्वारा ई-पहचान कार्ड डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://www.esic.gov.in/",
                "official_apply_url": "https://www.esic.gov.in/",
                "official_status_url": "https://www.esic.gov.in/",
                "official_helpline": "1800-11-2526 (Toll Free)",
                "official_email": "helpdesk@esic.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.esic.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "esic",
                        "esi card",
                        "pehchan card",
                        "esic login",
                        "medical benefit",
                        "ইএসআইসি",
                        "ইএসআই কার্ড",
                        "ईएसआईसी"
                ]
        },
        {
                "service_id": "national-apprenticeship-portal",
                "service_name": {
                        "en": "National Apprenticeship Training Scheme (NAPS / NATS)",
                        "bn": "জাতীয় শিক্ষানবিশী প্রশিক্ষণ পোর্টাল (NAPS / NATS)",
                        "hi": "राष्ट्रीय शिक्षुता प्रशिक्षण पोर्टल (NAPS / NATS)"
                },
                "short_description": {
                        "en": "Official Government of India apprenticeship portal for ITI, Diploma, and Graduate students to get industrial on-the-job training with government stipend support.",
                        "bn": "ভারত সরকারের ন্যাশনাল অ্যাপ্রেন্টিসশিপ পোর্টাল—আইটিআই, ডিপ্লোমা ও গ্র্যাজুয়েটদের সরকারি স্টাইপেন্ড সহ ট্রেনিং।",
                        "hi": "आईटीआई, डिप्लोमा और स्नातकों के लिए सरकारी वजीफे के साथ उद्योग प्रशिक्षण पोर्टल।"
                },
                "category": "internships",
                "category_name": {
                        "en": "Government & AICTE Internships",
                        "bn": "ইন্টার্নশিপ ও শিক্ষানবিশী",
                        "hi": "इंटर्नशिप और प्रशिक्षण"
                },
                "subcategory": "Skill Training",
                "authority": "Ministry of Skill Development & Entrepreneurship (MSDE)",
                "government_level": "Central",
                "service_type": "Education & Career",
                "target_users": [
                        "ITI Passouts",
                        "Diploma Holders",
                        "Graduates",
                        "Youth"
                ],
                "eligibility": {
                        "en": [
                                "Indian nationals above 14 years with 10th, 12th, ITI, Diploma, or Degree qualification."
                        ],
                        "bn": [
                                "১০ম, ১২ম, আইটিআই, ডিপ্লোমা বা ডিগ্রি উত্তীর্ণ ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "10वीं, 12वीं, आईटीआई, डिप्लोमा या डिग्री धारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card",
                                "Educational certificates & marksheets",
                                "Bank passbook for Direct Benefit Transfer (DBT) stipend."
                        ],
                        "bn": [
                                "আধার কার্ড, শিক্ষাগত যোগ্যতার মার্কশিট ও ব্যাংক পাসবুক।"
                        ],
                        "hi": [
                                "आधार कार्ड, अंकतालिका और बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Candidate Registration.",
                        "bn": "বিনামূল্যে রেজিস্ট্রেশন।",
                        "hi": "निःशुल्क पंजीकरण।"
                },
                "benefits": {
                        "en": [
                                "Monthly government-subsidized stipend.",
                                "National Apprenticeship Certificate (NAC) recognized nationwide."
                        ],
                        "bn": [
                                "মাসিক স্টাইপেন্ড ও জাতীয় শিক্ষানবিশী শংসাপত্র (NAC)।"
                        ],
                        "hi": [
                                "मासिक वजीफा और राष्ट्रीय शिक्षुता प्रमाण पत्र।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit apprenticeshipindia.gov.in.",
                                "Click 'Register' > 'Candidate' and complete e-KYC using Aadhaar.",
                                "Search apprenticeship opportunities by trade, sector, and location.",
                                "Apply directly and sign apprenticeship contract upon selection."
                        ],
                        "bn": [
                                "apprenticeshipindia.gov.in-এ গিয়ে ক্যান্ডিডেট হিসেবে আধার ই-কেওয়াইসি সহ রেজিস্টার করুন ও আবেদন করুন।"
                        ],
                        "hi": [
                                "apprenticeshipindia.gov.in पर उम्मीदवार के रूप में पंजीकरण करें और आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.apprenticeshipindia.gov.in/",
                "official_apply_url": "https://www.apprenticeshipindia.gov.in/",
                "official_status_url": "https://www.apprenticeshipindia.gov.in/",
                "official_helpline": "0120 4405000",
                "official_email": "apprenticeship-india@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.apprenticeshipindia.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "apprenticeship",
                        "naps",
                        "nats",
                        "iti training",
                        "stipend",
                        "শিক্ষানবিশী",
                        "অ্যাপ্রেন্টিসশিপ",
                        "शिक्षुता"
                ]
        },
        {
                "service_id": "national-anti-ragging-portal",
                "service_name": {
                        "en": "National Anti-Ragging Portal & Undertaking / 24x7 Helpline",
                        "bn": "জাতীয় অ্যান্টি-র‌্যাগিং পোর্টাল, অনলাইন এফিডেভিট ও ২৪x৭ হেল্পলাইন",
                        "hi": "राष्ट्रीय एंटी-रैगिंग पोर्टल, ऑनलाइन शपथ पत्र और 24x7 हेल्पलाइन"
                },
                "short_description": {
                        "en": "Official UGC & Ministry of Education Anti-Ragging portal for mandatory student/parent anti-ragging undertakings/affidavits, 24x7 toll-free emergency helpline (1800-180-5522), and confidential complaint registration.",
                        "bn": "ইউজিসি এবং শিক্ষা মন্ত্রকের অফিশিয়াল অ্যান্টি-র‌্যাগিং পোর্টাল। প্রতিটি কলেজ/বিশ্ববিদ্যালয় ভর্তির জন্য বাধ্যতামূলক অ্যান্টি-র‌্যাগিং আন্ডারটেকিং (হলফনামা) জমা, ২৪x৭ টোল-ফ্রি হেল্পলাইন (১৮০০-১৮০-৫৫২২) ও গোপন অভিযোগ দায়ের।",
                        "hi": "यूजीसी और शिक्षा मंत्रालय का आधिकारिक एंटी-रैगिंग पोर्टल। कॉलेज प्रवेश हेतु अनिवार्य एंटी-रैगिंग शपथ पत्र (Undertaking), 24x7 टोल-फ्री हेल्पलाइन (1800-180-5522) और गोपनीय शिकायत निवारण।"
                },
                "category": "college-admission",
                "category_name": {
                        "en": "College & University Admission",
                        "bn": "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি",
                        "hi": "कॉलेज और विश्वविद्यालय प्रवेश"
                },
                "subcategory": "Student Safety & Higher Education",
                "authority": "University Grants Commission (UGC) & Ministry of Education, Govt. of India",
                "government_level": "Central",
                "service_type": "Student Protection & Compliance",
                "target_users": [
                        "College Students",
                        "University Students",
                        "Parents / Guardians",
                        "Freshers & Higher Education Applicants"
                ],
                "eligibility": {
                        "en": [
                                "All students enrolled or enrolling in higher education institutions, colleges, and universities across India.",
                                "Parents/Guardians of college and university students.",
                                "Any victim or witness of ragging incidents."
                        ],
                        "bn": [
                                "ভারতের যেকোনো কলেজ বা বিশ্ববিদ্যালয়ে অধ্যয়নরত বা নতুন ভর্তি হওয়া সকল শিক্ষার্থী।",
                                "শিক্ষার্থীদের পিতা-মাতা বা অভিভাবকবৃন্দ।",
                                "র‌্যাগিং-এর শিকার বা প্রত্যক্ষদর্শী যে কেউ।"
                        ],
                        "hi": [
                                "भारत के किसी भी कॉलेज या विश्वविद्यालय में नामांकित या प्रवेश लेने वाले सभी छात्र।",
                                "छात्रों के माता-पिता या अभिभावक।",
                                "रैगिंग के शिकार या प्रत्यक्षदर्शी कोई भी व्यक्ति।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "College / University Name, State & City",
                                "Name of the Principal / Director / Dean & College Phone Number",
                                "Course / Degree Name (e.g. B.Tech, B.Sc, BA, MBBS, MBA)",
                                "Student Registration / Roll / Admission Reference Number",
                                "Valid Student Email Address & Mobile Number",
                                "Valid Parent / Guardian Email Address & Mobile Number"
                        ],
                        "bn": [
                                "কলেজ বা বিশ্ববিদ্যালয়ের নাম, রাজ্য ও জেলা",
                                "অধ্যক্ষ (Principal) বা ডিরেক্টরের নাম ও যোগাযোগ নম্বর",
                                "কোর্সের নাম (যেমন: B.Tech, BA, B.Sc, B.Com, MBBS ইত্যাদি)",
                                "ভর্তি / রোল নম্বর",
                                "শিক্ষার্থী ও অভিভাবকের সক্রিয় মোবাইল নম্বর এবং ইমেল আইডি"
                        ],
                        "hi": [
                                "कॉलेज या विश्वविद्यालय का नाम, राज्य और शहर",
                                "प्राचार्य / निदेशक का नाम और संपर्क विवरण",
                                "कोर्स / डिग्री का नाम",
                                "प्रवेश / रोल नंबर",
                                "छात्र और अभिभावक का सक्रिय मोबाइल नंबर और ईमेल आईडी"
                        ]
                },
                "application_fee": {
                        "en": "100% Free of Cost. No stamp paper or notary required for online undertaking / affidavit.",
                        "bn": "১০০% বিনামূল্যে। অনলাইন আন্ডারটেকিং বা এফিডেভিটের জন্য কোনো স্ট্যাম্প পেপার বা নোটারির প্রয়োজন নেই।",
                        "hi": "100% निःशुल्क। ऑनलाइन शपथ पत्र हेतु किसी स्टाम्प पेपर या नोटरी की आवश्यकता नहीं है।"
                },
                "benefits": {
                        "en": [
                                "Instant generation of statutory Anti-Ragging Undertaking Reference Number & signed PDF for college admission submission.",
                                "24x7 Toll-Free National Emergency Anti-Ragging Helpline (1800-180-5522) with zero charges.",
                                "Strictly confidential reporting with fast-track escalation to Vice Chancellors, Police, and UGC monitoring committee.",
                                "Free compliance tracking and complaint resolution tracking."
                        ],
                        "bn": [
                                "কলেজ ভর্তির জন্য তাৎক্ষণিক অ্যান্টি-র‌্যাগিং রেফারেন্স নম্বর ও সাইন করা পিডিএফ ডাউনলোড।",
                                "২৪x৭ টোল-ফ্রি জাতীয় জরুরি হেল্পলাইন (১৮০০-১৮০-৫৫২২)।",
                                "সম্পূর্ণ গোপনীয়তার সাথে অভিযোগ দায়ের এবং দ্রুত পদক্ষেপ গ্রহণ।",
                                "বিনামূল্যে কমপ্লায়েন্স ও রেজোলিউশন ট্র্যাকিং।"
                        ],
                        "hi": [
                                "कॉलेज प्रवेश हेतु तत्काल एंटी-रैगिंग संदर्भ संख्या और पीडीएफ पावती।",
                                "24x7 टोल-फ्री राष्ट्रीय आपातकालीन हेल्पलाइन (1800-180-5522)।",
                                "गोपनीय शिकायत पंजीकरण और यूजीसी द्वारा त्वरित कार्रवाई।",
                                "निःशुल्क अनुपालन और समाधान ट्रैकिंग।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Step 1: Open the official portal at antiragging.in and click on 'Fill Undertaking / Affidavit'.",
                                "Step 2: Choose your College type (Affiliated College / Standalone / University).",
                                "Step 3: Enter student details, parent details, and college details accurately.",
                                "Step 4: Confirm declaration and submit the online form.",
                                "Step 5: Receive your Reference Number via SMS/Email and download the signed Anti-Ragging Undertaking PDF to submit to your college."
                        ],
                        "bn": [
                                "ধাপ ১: antiragging.in অফিসিয়াল পোর্টালে যান এবং 'Fill Undertaking' অপশনে ক্লিক করুন।",
                                "ধাপ ২: আপনার কলেজ বা বিশ্ববিদ্যালয়ের ধরন নির্বাচন করুন।",
                                "ধাপ ৩: শিক্ষার্থী, অভিভাবক এবং কলেজের সঠিক তথ্য ও ফোন নম্বর পূরণ করুন।",
                                "ধাপ ৪: ঘোষণাপত্র নিশ্চিত করে ফর্ম জমা দিন।",
                                "ধাপ ৫: এসএমএস/ইমেলের মাধ্যমে রেফারেন্স নম্বর পান এবং ডাউনলোড করা পিডিএফ কপি কলেজে জমা দিন।"
                        ],
                        "hi": [
                                "चरण 1: antiragging.in आधिकारिक पोर्टल पर जाएं और 'Fill Undertaking' पर क्लिक करें।",
                                "चरण 2: अपने कॉलेज या विश्वविद्यालय का प्रकार चुनें।",
                                "चरण 3: छात्र, अभिभावक और कॉलेज का सही विवरण दर्ज करें।",
                                "चरण 4: घोषणा की पुष्टि करें और ऑनलाइन फॉर्म जमा करें।",
                                "चरण 5: एसएमएस/ईमेल से संदर्भ संख्या प्राप्त करें और हस्ताक्षरित शपथ पत्र पीडीएफ डाउनलोड कर कॉलेज में जमा करें।"
                        ]
                },
                "official_homepage": "https://www.antiragging.in/",
                "official_apply_url": "https://www.antiragging.in/affidavit_registration_disclaimer.html",
                "official_status_url": "https://www.antiragging.in/complaint_register_form.html",
                "official_helpline": "1800-180-5522 (24x7 Toll-Free)",
                "official_email": "helpline@antiragging.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.antiragging.in/",
                "last_verified": "25 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "anti-ragging",
                        "antiragging",
                        "antiragging.in",
                        "ragging",
                        "anti ragging affidavit",
                        "anti ragging undertaking",
                        "ragging complaint",
                        "ugc anti ragging",
                        "anti ragging helpline",
                        "18001805522",
                        "college admission undertaking",
                        "অ্যান্টি র‍্যাগিং",
                        "র‌্যাগিং",
                        "র‌্যাগিং অভিযোগ",
                        "অ্যান্টি র‍্যাগিং হলফনামা",
                        "एंटी रैगिंग",
                        "रैगिंग",
                        "रैगिंग शिकायत",
                        "एंटी रैगिंग शपथ पत्र"
                ]
        },
        {
                "service_id": "ugc-higher-education-portal",
                "service_name": {
                        "en": "University Grants Commission (UGC Portal & Scholarships)",
                        "bn": "বিশ্ববিদ্যালয় মঞ্জুরি কমিশন (UGC পোর্টাল ও স্কলারশিপ)",
                        "hi": "विश्वविद्यालय अनुदान आयोग (UGC पोर्टल व छात्रवृत्ति)"
                },
                "short_description": {
                        "en": "Official UGC portal for university recognition verification, NET/JRF fellowships, Fake University notices, and higher education regulatory guidelines.",
                        "bn": "বিশ্ববিদ্যালয় অনুমোদন যাচাই, নেট/জেআরএফ ফেলোশিপ ও উচ্চশিক্ষা নির্দেশিকার অফিসিয়াল ইউজিসি পোর্টাল।",
                        "hi": "विश्वविद्यालय मान्यता सत्यापन, नेट/जेआरएफ फेलोशिप और उच्च शिक्षा दिशानिर्देश।"
                },
                "category": "college-admission",
                "category_name": {
                        "en": "College & University Admission",
                        "bn": "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি",
                        "hi": "कॉलेज और विश्वविद्यालय प्रवेश"
                },
                "subcategory": "Higher Education",
                "authority": "University Grants Commission (Ministry of Education)",
                "government_level": "Central",
                "service_type": "Higher Education",
                "target_users": [
                        "College Students",
                        "PhD Scholars",
                        "Professors",
                        "Public"
                ],
                "eligibility": {
                        "en": [
                                "Higher education students and research scholars in India."
                        ],
                        "bn": [
                                "উচ্চশিক্ষার শিক্ষার্থী ও গবেষকবৃন্দ।"
                        ],
                        "hi": [
                                "उच्च शिक्षा के छात्र और शोधकर्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "NET/JRF Roll Number",
                                "Degree Certificates",
                                "Institutional ID."
                        ],
                        "bn": [
                                "নেট/জেআরএফ রোল নম্বর ও ডিগ্রি সার্টিফিকেট।"
                        ],
                        "hi": [
                                "नेट/जेआरएफ रोल नंबर और डिग्री प्रमाण पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Free information & verification portal.",
                        "bn": "বিনামূল্যে তথ্য সেবা।",
                        "hi": "निःशुल्क सेवा।"
                },
                "benefits": {
                        "en": [
                                "Verify genuine approved universities.",
                                "Direct disbursement of junior research fellowships."
                        ],
                        "bn": [
                                "বৈধ বিশ্ববিদ্যালয় যাচাই ও ফেলোশিপ বিতরণ।"
                        ],
                        "hi": [
                                "मान्यता प्राप्त विश्वविद्यालयों का सत्यापन।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official UGC portal (ugc.gov.in).",
                                "Access 'Universities' tab to verify statutory recognition.",
                                "Access 'Scholarships and Fellowships' portal for JRF/SRF disbursement tracking."
                        ],
                        "bn": [
                                "ugc.gov.in-এ গিয়ে বিশ্ববিদ্যালয় অনুমোদন যাচাই ও স্কলারশিপ পোর্টাল দেখুন।"
                        ],
                        "hi": [
                                "ugc.gov.in पर जाकर विश्वविद्यालय मान्यता और फेलोशिप की जांच करें।"
                        ]
                },
                "official_homepage": "https://www.ugc.gov.in/",
                "official_apply_url": "https://www.ugc.gov.in/",
                "official_status_url": "https://www.ugc.gov.in/",
                "official_helpline": "011-23604446 / 23604200",
                "official_email": "webmaster.ugc.help@gmail.com",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.ugc.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "ugc",
                        "university recognition",
                        "net jrf",
                        "fake university list",
                        "ইউজিসি",
                        "বিশ্ববিদ্যালয় অনুমোদন",
                        "यूजीसी"
                ]
        },
        {
                "service_id": "aicte-technical-education-portal",
                "service_name": {
                        "en": "AICTE Technical Education & Pragati / Saksham Scholarships",
                        "bn": "এআইসিটিই (AICTE) কারিগরি শিক্ষা ও প্রগতি স্কলারশিপ",
                        "hi": "एआईसीटीई (AICTE) तकनीकी शिक्षा और प्रगति छात्रवृत्ति"
                },
                "short_description": {
                        "en": "Official All India Council for Technical Education portal for engineering/diploma college approvals, Pragati Scholarship for Girls, and Saksham Scholarship for Divyang.",
                        "bn": "ইঞ্জিনিয়ারিং/ডিপ্লোমা কলেজের স্বীকৃতি ও ছাত্রীদের জন্য প্রগতি স্কলারশিপের অফিসিয়াল এআইসিটিই পোর্টাল।",
                        "hi": "इंजीनियरिंग/डिप्लोमा कॉलेज अनुमोदन और प्रगति/सक्षम छात्रवृत्ति पोर्टल।"
                },
                "category": "scholarships",
                "category_name": {
                        "en": "Scholarships (National & State)",
                        "bn": "স্কলারশিপ ও অনুদান (SVMCM/Oasis)",
                        "hi": "छात्रवृत्ति और अनुदान"
                },
                "subcategory": "Technical Education",
                "authority": "All India Council for Technical Education (AICTE)",
                "government_level": "Central",
                "service_type": "Education & Scholarships",
                "target_users": [
                        "Engineering Students",
                        "Diploma Students",
                        "Girl Students"
                ],
                "eligibility": {
                        "en": [
                                "Students admitted to AICTE-approved degree/diploma technical courses; Pragati requires maximum 2 girls per family with family income < ₹8 Lakh."
                        ],
                        "bn": [
                                "AICTE অনুমোদিত প্রতিষ্ঠানে অধ্যয়নরত ছাত্রছাত্রী; প্রগতি স্কলারশিপ ছাত্রীদের জন্য (বার্ষিক আয় < ৮ লক্ষ)।"
                        ],
                        "hi": [
                                "एआईसीटीई से मान्यता प्राप्त तकनीकी संस्थानों के छात्र; बालिकाओं के लिए प्रगति छात्रवृत्ति।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Admission fee receipt & allotment letter",
                                "Income Certificate (< ₹8 LPA)",
                                "Aadhaar Card & Bank passbook."
                        ],
                        "bn": [
                                "ভর্তি রশিদ, ইনকাম সার্টিফিকেট ও আধার সংযুক্ত ব্যাংক অ্যাকাউন্ট।"
                        ],
                        "hi": [
                                "प्रवेश रसीद, आय प्रमाण पत्र और आधार लिंक बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "Free application via National Scholarship Portal (NSP).",
                        "bn": "বিনামূল্যে আবেদন।",
                        "hi": "निःशुल्क आवेदन।"
                },
                "benefits": {
                        "en": [
                                "₹50,000 per annum scholarship grant for college fees and books."
                        ],
                        "bn": [
                                "বছরে ৫০,০০০ টাকা পর্যন্ত স্কলারশিপ অনুদান।"
                        ],
                        "hi": [
                                "₹50,000 प्रति वर्ष छात्रवृत्ति अनुदान।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Verify institution approval status on aicte-india.org.",
                                "Apply for AICTE Pragati/Saksham/Swanath schemes via National Scholarship Portal (scholarships.gov.in)."
                        ],
                        "bn": [
                                "aicte-india.org থেকে কলেজ যাচাই করুন ও NSP পোর্টাল থেকে স্কলারশিপ আবেদন করুন।"
                        ],
                        "hi": [
                                "aicte-india.org से कॉलेज सत्यापन करें और छात्रवृत्ति के लिए आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.aicte-india.org/",
                "official_apply_url": "https://scholarships.gov.in/",
                "official_status_url": "https://www.aicte-india.org/",
                "official_helpline": "011-29581333 / 29581338",
                "official_email": "helpdesk-aicte@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.aicte-india.org/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "aicte",
                        "pragati scholarship",
                        "saksham",
                        "engineering scholarship",
                        "এআইসিটিই",
                        "প্রগতি স্কলারশিপ",
                        "एआईसीटीई"
                ]
        },
        {
                "service_id": "abc-academic-bank-credits",
                "service_name": {
                        "en": "Academic Bank of Credits (ABC ID / APAAR Digital Identity)",
                        "bn": "একাডেমিক ব্যাংক অফ ক্রেডিট (ABC ID / অপার আইডি)",
                        "hi": "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC ID / अपार आईडी)"
                },
                "short_description": {
                        "en": "Official National Educational Technology Forum & DigiLocker portal to create APAAR / ABC ID for storing student academic credits digitally across higher education institutions.",
                        "bn": "উচ্চশিক্ষার সমস্ত একাডেমিক ক্রেডিট ডিজিটালভাবে জমা রাখতে ১২ সংখ্যার অপার/এবিসি আইডি তৈরির সরকারি পোর্টাল।",
                        "hi": "छात्रों के शैक्षणिक क्रेडिट को डिजिटल रूप से सहेजने के लिए 12-अंकीय एबीसी/अपार आईडी पोर्टल।"
                },
                "category": "college-admission",
                "category_name": {
                        "en": "College & University Admission",
                        "bn": "কলেজ ও বিশ্ববিদ্যালয়ে ভর্তি",
                        "hi": "कॉलेज और विश्वविद्यालय प्रवेश"
                },
                "subcategory": "Academic Identity",
                "authority": "Ministry of Education & DigiLocker (NeGD)",
                "government_level": "Central",
                "service_type": "Digital Identity",
                "target_users": [
                        "All School & College Students",
                        "University Students"
                ],
                "eligibility": {
                        "en": [
                                "All enrolled students in recognized Indian schools, colleges, and universities."
                        ],
                        "bn": [
                                "ভারতের সমস্ত স্বীকৃত স্কুল, কলেজ ও বিশ্ববিদ্যালয়ে পাঠরত শিক্ষার্থী।"
                        ],
                        "hi": [
                                "भारत के सभी स्कूलों, कॉलेजों और विश्वविद्यालयों के छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Number with linked mobile for OTP",
                                "Name of University/College/Board and Roll Number."
                        ],
                        "bn": [
                                "আধার নম্বর ও মোবাইল ওটিপি, কলেজ/বিশ্ববিদ্যালয়ের নাম ও রোল নম্বর।"
                        ],
                        "hi": [
                                "आधार संख्या और मोबाइल ओटीपी, कॉलेज का नाम व रोल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Public Digital Utility.",
                        "bn": "সম্পূর্ণ বিনামূল্যে।",
                        "hi": "निःशुल्क डिजिटल सेवा।"
                },
                "benefits": {
                        "en": [
                                "Lifelong 12-digit student identity.",
                                "Seamless credit transfer between universities (NEP 2020)."
                        ],
                        "bn": [
                                "আজীবন ১২ সংখ্যার অপার স্টুডেন্ট আইডি ও বিভিন্ন বিশ্ববিদ্যালয়ের মধ্যে ক্রেডিট ট্রান্সফার সুবিধা।"
                        ],
                        "hi": [
                                "आजीवन 12-अंकीय छात्र पहचान और आसान क्रेडिट ट्रांसफर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit abc.gov.in or digilocker.gov.in.",
                                "Log in with DigiLocker credentials using Aadhaar OTP.",
                                "Select 'Academic Bank of Credits' and enter your Institution Name.",
                                "Generate 12-digit ABC ID / APAAR card and save for university admission."
                        ],
                        "bn": [
                                "abc.gov.in অথবা DigiLocker-এ যান, আধার ওটিপি দিয়ে লগইন করে ১২ সংখ্যার ABC ID তৈরি করুন।"
                        ],
                        "hi": [
                                "abc.gov.in पर डिजिलॉकर के माध्यम से लॉगिन करें और 12-अंकीय एबीसी आईडी बनाएं।"
                        ]
                },
                "official_homepage": "https://www.abc.gov.in/",
                "official_apply_url": "https://www.abc.gov.in/",
                "official_status_url": "https://www.abc.gov.in/",
                "official_helpline": "011-24303714",
                "official_email": "support@abc.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.abc.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "abc id",
                        "apaar card",
                        "academic bank of credits",
                        "digilocker abc",
                        "অপার আইডি",
                        "এবিসি আইডি",
                        "अपार कार्ड",
                        "एबीसी आईडी"
                ]
        },
        {
                "service_id": "nta-entrance-examinations-portal",
                "service_name": {
                        "en": "National Testing Agency (NTA Exams — CUET, JEE Main, NEET UG)",
                        "bn": "জাতীয় পরীক্ষা সংস্থা (NTA — CUET, JEE Main, NEET UG)",
                        "hi": "राष्ट्रीय परीक्षा एजेंसी (NTA — CUET, JEE Main, NEET UG)"
                },
                "short_description": {
                        "en": "Official NTA examinations portal for online application, admit card download, answer keys, and scorecards for CUET UG/PG, JEE Main, and NEET UG nationwide.",
                        "bn": "জেইই মেন, নিট এবং সিইউইটি প্রবেশিকা পরীক্ষার ফর্ম ফিলাপ, অ্যাডমিট কার্ড ও রেজাল্ট পোর্টাল।",
                        "hi": "जेईई मेन, नीट और सीयूईटी प्रवेश परीक्षाओं के लिए ऑनलाइन आवेदन, एडमिट कार्ड और परिणाम पोर्टल।"
                },
                "category": "entrance-exams",
                "category_name": {
                        "en": "Entrance Examinations (JEE/NEET)",
                        "bn": "প্রবেশিকা পরীক্ষা (JEE/NEET)",
                        "hi": "प्रवेश परीक्षाएं (JEE/NEET)"
                },
                "subcategory": "National Entrance",
                "authority": "National Testing Agency (Department of Higher Education)",
                "government_level": "Central",
                "service_type": "Entrance Exam",
                "target_users": [
                        "Class 12 Students",
                        "Medical/Engineering Aspirants",
                        "UG/PG Applicants"
                ],
                "eligibility": {
                        "en": [
                                "Class 12 appearing or passed candidates meeting exam-specific age/subject criteria."
                        ],
                        "bn": [
                                "দ্বাদশ শ্রেণী উত্তীর্ণ বা পরীক্ষার্থী ছাত্রছাত্রী।"
                        ],
                        "hi": [
                                "12वीं कक्षा में अध्ययनरत या उत्तीर्ण छात्र।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Recent passport photograph (10KB–200KB, white background)",
                                "Scanned signature (4KB–30KB)",
                                "Class 10 & 12 marksheets",
                                "Category certificate (SC/ST/OBC/EWS/PwD) if applicable."
                        ],
                        "bn": [
                                "পাসপোর্ট ছবি, স্বাক্ষর, ১০ম ও ১২শ শ্রেণীর মার্কশিট ও কাস্ট সার্টিফিকেট।"
                        ],
                        "hi": [
                                "पासपोर्ट फोटो, हस्ताक्षर, 10वीं व 12वीं की मार्कशीट और जाति प्रमाण पत्र।"
                        ]
                },
                "application_fee": {
                        "en": "Varies by exam & category (typically ₹500–₹1,700 paid online).",
                        "bn": "পরীক্ষা ও ক্যাটাগরি অনুযায়ী সরকারি ফি অনলাইনে প্রদেয়।",
                        "hi": "परीक्षा व वर्गानुसार आधिकारिक ऑनलाइन शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Centralized admission to IITs, NITs, AIIMS, and Central Universities across India."
                        ],
                        "bn": [
                                "ভারতের শীর্ষ কেন্দ্রীয় শিক্ষা প্রতিষ্ঠান, আইআইটি ও এইমস-এ ভর্তির একক প্রবেশিকা।"
                        ],
                        "hi": [
                                "आईआईटी, एनआईटी, एम्स और केंद्रीय विश्वविद्यालयों में प्रवेश।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (exams.nta.ac.in).",
                                "Select specific examination (e.g., JEE Main, NEET UG, CUET UG).",
                                "Complete registration with Mobile & Email OTP to generate Application Number.",
                                "Fill academic details, upload calibrated photo/signature, pay fee, and save Confirmation Page."
                        ],
                        "bn": [
                                "exams.nta.ac.in পোর্টালে গিয়ে পরীক্ষা সিলেক্ট করে নির্ভুল তথ্য ও ছবি আপলোড করে আবেদন সম্পন্ন করুন।"
                        ],
                        "hi": [
                                "exams.nta.ac.in पर जाकर संबंधित परीक्षा का चयन करें और ऑनलाइन आवेदन पूरा करें।"
                        ]
                },
                "official_homepage": "https://nta.ac.in/",
                "official_apply_url": "https://exams.nta.ac.in/",
                "official_status_url": "https://exams.nta.ac.in/",
                "official_helpline": "011-40759000 / 011-69227700",
                "official_email": "jeemain@nta.ac.in / neet@nta.ac.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://exams.nta.ac.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "nta",
                        "cuet",
                        "jee main",
                        "neet ug",
                        "nta admit card",
                        "nta result",
                        "সিইউইটি",
                        "জেইই মেন",
                        "নিট",
                        "एनटीए",
                        "सीयूईटी",
                        "नीट"
                ]
        },
        {
                "service_id": "enam-national-agriculture-market",
                "service_name": {
                        "en": "e-NAM (National Agriculture Market Portal)",
                        "bn": "ই-ন্যাম (জাতীয় কৃষি বাজার পোর্টাল — e-NAM)",
                        "hi": "ई-नाम (राष्ट्रीय कृषि बाजार पोर्टल — e-NAM)"
                },
                "short_description": {
                        "en": "Official Ministry of Agriculture online trading platform connecting agricultural mandis across India for transparent crop bidding and direct online payments to farmers.",
                        "bn": "কৃষকদের ফসলের সঠিক দাম পাওয়ার জন্য সারা ভারতের কৃষি মন্ডির অনলাইন ট্রেডিং পোর্টাল।",
                        "hi": "किसानों को फसलों का पारदर्शी और उचित मूल्य दिलाने वाला अखिल भारतीय ऑनलाइन कृषि व्यापार पोर्टल।"
                },
                "category": "agriculture",
                "category_name": {
                        "en": "Farmers & Agriculture",
                        "bn": "কৃষক ও কৃষি সেবা",
                        "hi": "किसान और कृषि"
                },
                "subcategory": "Crop Trading",
                "authority": "Small Farmers' Agribusiness Consortium (Ministry of Agriculture & Farmers Welfare)",
                "government_level": "Central",
                "service_type": "Agriculture",
                "target_users": [
                        "Farmers",
                        "Traders",
                        "Commission Agents",
                        "FPOs"
                ],
                "eligibility": {
                        "en": [
                                "All Indian farmers registered with an APMC / Mandi with valid land records."
                        ],
                        "bn": [
                                "জমির নথি সহ নিবন্ধিত সমস্ত ভারতীয় কৃষক।"
                        ],
                        "hi": [
                                "वैध भूमि रिकॉर्ड वाले सभी किसान।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card",
                                "Bank Passbook with IFSC",
                                "Land RoR / Khatian copy",
                                "Mandi Entry Slip."
                        ],
                        "bn": [
                                "আধার কার্ড, ব্যাংক পাসবুক ও জমির খতিয়ান।"
                        ],
                        "hi": [
                                "आधार कार्ड, बैंक पासबुक और भूमि खतौनी।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Farmer Registration.",
                        "bn": "কৃষকদের জন্য সম্পূর্ণ বিনামূল্যে।",
                        "hi": "किसानों के लिए निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Competitive nationwide online bidding for crops.",
                                "Direct payment directly into farmer's bank account."
                        ],
                        "bn": [
                                "দেশজুড়ে ফসলের স্বচ্ছ নিলাম ও সরাসরি ব্যাংকে টাকা প্রাপ্তি।"
                        ],
                        "hi": [
                                "देशभर में प्रतिस्पर्धी बोली और सीधे बैंक खाते में भुगतान।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (enam.gov.in).",
                                "Click 'Registration' > 'Farmer' and enter Aadhaar and bank details.",
                                "Bring produce to nearest e-NAM mandi for quality assaying and electronic lot creation."
                        ],
                        "bn": [
                                "enam.gov.in-এ কৃষক হিসেবে নাম নথিভুক্ত করুন ও অনলাইন মন্ডিতে ফসল বিক্রি করুন।"
                        ],
                        "hi": [
                                "enam.gov.in पर किसान पंजीकरण करें और पारदर्शी मूल्य प्राप्त करें।"
                        ]
                },
                "official_homepage": "https://www.enam.gov.in/",
                "official_apply_url": "https://www.enam.gov.in/",
                "official_status_url": "https://www.enam.gov.in/",
                "official_helpline": "1800 270 0224 (Toll Free)",
                "official_email": "nam@sfac.in",
                "state": "All India",
                "availability": "Online + Mandi",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.enam.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "enam",
                        "mandi price",
                        "crop selling",
                        "farmer market",
                        "ই-ন্যাম",
                        "কৃষি বাজার",
                        "ई-नाम",
                        "मंडी भाव"
                ]
        },
        {
                "service_id": "soil-health-card-portal",
                "service_name": {
                        "en": "Soil Health Card Scheme Portal",
                        "bn": "মৃত্তিকা স্বাস্থ্য কার্ড প্রকল্প পোর্টাল (Soil Health Card)",
                        "hi": "मृदा स्वास्थ्य कार्ड पोर्टल (Soil Health Card)"
                },
                "short_description": {
                        "en": "Official portal providing customized crop-wise fertilizer dosage recommendations and soil nutrient status reports to farmers across India.",
                        "bn": "কৃষি জমিতে সুষম সার প্রয়োগ ও মাটির পুষ্টিমান পরীক্ষার রিপোর্ট পাওয়ার সরকারি পোর্টাল।",
                        "hi": "फसलों के अनुसार संतुलित उर्वरक उपयोग और मिट्टी की पोषण स्थिति की रिपोर्ट।"
                },
                "category": "agriculture",
                "category_name": {
                        "en": "Farmers & Agriculture",
                        "bn": "কৃষক ও কৃষি সেবা",
                        "hi": "किसान और कृषि"
                },
                "subcategory": "Soil Testing",
                "authority": "Department of Agriculture & Farmers Welfare",
                "government_level": "Central",
                "service_type": "Agriculture",
                "target_users": [
                        "Farmers",
                        "Agri-Entrepreneurs"
                ],
                "eligibility": {
                        "en": [
                                "All land-holding farmers in India."
                        ],
                        "bn": [
                                "সমস্ত চাষী ও জমির মালিক।"
                        ],
                        "hi": [
                                "सभी किसान।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Land Survey/Plot Number",
                                "Aadhaar Card",
                                "Soil Sample."
                        ],
                        "bn": [
                                "জমির দাগ নম্বর ও মাটির নমুনা।"
                        ],
                        "hi": [
                                "खसरा नंबर और मिट्टी का नमूना।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Soil Testing by Government.",
                        "bn": "সম্পূর্ণ বিনামূল্যে মাটি পরীক্ষা।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Save fertilizer costs and increase crop yield by 10%–25%."
                        ],
                        "bn": [
                                "সারের অপচয় রোধ ও ফলন বৃদ্ধি।"
                        ],
                        "hi": [
                                "उर्वरक लागत में बचत और उपज में वृद्धि।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit soilhealth.dac.gov.in.",
                                "Select 'Farmers Corner' > 'Print Soil Health Card'.",
                                "Select State, District, Block, and Village, then enter Farmer Name to download official card."
                        ],
                        "bn": [
                                "soilhealth.dac.gov.in-এ গিয়ে জেলা ও গ্রামের নাম দিয়ে মৃত্তিকা কার্ড ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "soilhealth.dac.gov.in पर जाकर अपनी मृदा स्वास्थ्य कार्ड रिपोर्ट डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://soilhealth.dac.gov.in/",
                "official_apply_url": "https://soilhealth.dac.gov.in/",
                "official_status_url": "https://soilhealth.dac.gov.in/",
                "official_helpline": "011-23381012",
                "official_email": "soilhealth-agri@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://soilhealth.dac.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "soil health",
                        "soil test",
                        "fertilizer dose",
                        "মাটি পরীক্ষা",
                        "মৃত্তিকা স্বাস্থ্য কার্ড",
                        "मृदा स्वास्थ्य कार्ड"
                ]
        },
        {
                "service_id": "mca21-company-incorporation",
                "service_name": {
                        "en": "MCA21 Portal (Company & LLP Incorporation / Filings)",
                        "bn": "এমসিএ২১ পোর্টাল (কোম্পানি ও এলএলপি রেজিস্ট্রি — MCA21)",
                        "hi": "एमसीए21 पोर्टल (कंपनी और एलएलपी निगमन — MCA21)"
                },
                "short_description": {
                        "en": "Official Ministry of Corporate Affairs portal for SPICe+ company incorporation, DIN/DSC services, Master Data verification, and annual statutory returns.",
                        "bn": "প্রাইভেট লিমিটেড কোম্পানি ও এলএলপি গঠন, ডিরেক্টর ডিআইএন এবং মাস্টার ডেটা যাচাইয়ের সরকারি পোর্টাল।",
                        "hi": "कंपनी व एलएलपी निगमन, डीआईएन सेवाएं और मास्टर डेटा सत्यापन के लिए आधिकारिक पोर्टल।"
                },
                "category": "business-startup",
                "category_name": {
                        "en": "Business & MSME (Udyam Registration)",
                        "bn": "ব্যবসা ও এমএসএমই (উদ্যম)",
                        "hi": "व्यवसाय और एमएसएमई (उद्यम)"
                },
                "subcategory": "Corporate Compliance",
                "authority": "Ministry of Corporate Affairs (MCA)",
                "government_level": "Central",
                "service_type": "Corporate & Legal",
                "target_users": [
                        "Founders",
                        "Entrepreneurs",
                        "Chartered Accountants",
                        "Directors"
                ],
                "eligibility": {
                        "en": [
                                "Indian & foreign citizens establishing a Private Limited Company, OPC, LLP, or Section 8 Company in India."
                        ],
                        "bn": [
                                "ভারতে কোম্পানি বা এলএলপি গঠনকারী উদ্যোক্তা।"
                        ],
                        "hi": [
                                "भारत में कंपनी या एलएलपी स्थापित करने वाले उद्यमी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "PAN and Aadhaar of Directors",
                                "Digital Signature Certificate (DSC Class 3)",
                                "Proof of registered office address with Electricity Bill & NOC."
                        ],
                        "bn": [
                                "ডিরেক্টরদের প্যান ও আধার, ডিএসসি (DSC) এবং অফিস ঠিকানার প্রমাণপত্র।"
                        ],
                        "hi": [
                                "निदेशकों का पैन और आधार, डीएससी और पंजीकृत कार्यालय का पता प्रमाण।"
                        ]
                },
                "application_fee": {
                        "en": "Zero MCA incorporation fee for capital up to ₹15 Lakhs (nominal stamp duty applicable by state).",
                        "bn": "১৫ লক্ষ টাকা পর্যন্ত মূলধনে সরকারি ফি শূন্য (স্ট্যাম্প ডিউটি প্রযোজ্য)।",
                        "hi": "₹15 लाख तक की पूंजी पर केंद्र सरकार का शुल्क शून्य।"
                },
                "benefits": {
                        "en": [
                                "Integrated single-window SPICe+ form for Company Name, PAN, TAN, EPFO, ESIC, GSTIN & Bank Account."
                        ],
                        "bn": [
                                "একক স্পাইস+ ফর্মে প্যান, ট্যান, জিএসটি ও কোম্পানি রেজিস্ট্রেশন।"
                        ],
                        "hi": [
                                "एक ही फॉर्म में पैन, टैन, जीएसटी और कंपनी पंजीकरण।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (mca.gov.in).",
                                "Log in with V3 MCA credentials.",
                                "Access 'SPICe+ Part A' for Name Reservation.",
                                "Complete 'SPICe+ Part B' for Incorporation, DIN, and statutory registrations.",
                                "Attach DSC and submit online."
                        ],
                        "bn": [
                                "mca.gov.in পোর্টালে SPICe+ ফর্মের মাধ্যমে কোম্পানি রেজিস্ট্রেশন করুন।"
                        ],
                        "hi": [
                                "mca.gov.in पर जाकर SPICe+ फॉर्म द्वारा कंपनी पंजीकरण करें।"
                        ]
                },
                "official_homepage": "https://www.mca.gov.in/",
                "official_apply_url": "https://www.mca.gov.in/content/mca/global/en/home.html",
                "official_status_url": "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html",
                "official_helpline": "0124-4832500 / 0124-2244222",
                "official_email": "appl.helpdesk@mca.gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.mca.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "mca",
                        "company registration",
                        "pvt ltd",
                        "llp registration",
                        "master data",
                        "din number",
                        "কোম্পানি রেজিস্ট্রেশন",
                        "এমসিএ",
                        "कंपनी पंजीकरण"
                ]
        },
        {
                "service_id": "startup-india-hub-portal",
                "service_name": {
                        "en": "Startup India Portal (DPIIT Recognition & Seed Fund)",
                        "bn": "স্টার্টআপ ইন্ডিয়া পোর্টাল (DPIIT স্বীকৃতি ও অনুদান)",
                        "hi": "स्टार्टअप इंडिया पोर्टल (DPIIT मान्यता व बीज कोष)"
                },
                "short_description": {
                        "en": "Official Government of India platform for DPIIT Startup Recognition, 80-IAC tax exemptions, fast-tracked patent examination, and Startup India Seed Fund Scheme (SISFS).",
                        "bn": "সরকারি স্টার্টআপ স্বীকৃতি (DPIIT), ৩ বছরের আয়কর ছাড় ও সিড ফান্ড অনুদানের অফিসিয়াল পোর্টাল।",
                        "hi": "डीपीआईआईटी स्टार्टअप मान्यता, 80-आईएसी कर छूट और स्टार्टअप इंडिया सीड फंड योजना।"
                },
                "category": "business-startup",
                "category_name": {
                        "en": "Business & MSME (Udyam Registration)",
                        "bn": "ব্যবসা ও এমএসএমই (উদ্যম)",
                        "hi": "व्यवसाय और एमएसएमई (उद्यम)"
                },
                "subcategory": "Startups & Innovation",
                "authority": "Department for Promotion of Industry and Internal Trade (DPIIT)",
                "government_level": "Central",
                "service_type": "Startup Support",
                "target_users": [
                        "Startups",
                        "Innovators",
                        "Tech Founders",
                        "Students"
                ],
                "eligibility": {
                        "en": [
                                "Entity incorporated as Pvt Ltd / LLP / Registered Partnership in India within last 10 years with turnover < ₹100 Crore."
                        ],
                        "bn": [
                                "১০ বছরের মধ্যে গঠিত প্রাইভেট লিমিটেড বা এলএলপি যার টার্নওভার ১০০ কোটি টাকার কম।"
                        ],
                        "hi": [
                                "पिछले 10 वर्षों में निगमित प्राइवेट लिमिटेड या एलएलपी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Certificate of Incorporation",
                                "Pitch deck / Brief write-up on innovation and scalability",
                                "Director PAN and Aadhaar."
                        ],
                        "bn": [
                                "কোম্পানি সার্টিফিকেট ও ইনোভেশন পিচ ডেক।"
                        ],
                        "hi": [
                                "निगमन प्रमाण पत्र और नवाचार विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free DPIIT Recognition Application.",
                        "bn": "বিনামূল্যে আবেদন।",
                        "hi": "निःशुल्क मान्यता आवेदन।"
                },
                "benefits": {
                        "en": [
                                "3-year 100% Income Tax exemption (Section 80-IAC).",
                                "80% rebate on patent filing fees.",
                                "Access to ₹50 Lakh seed fund grants."
                        ],
                        "bn": [
                                "৩ বছর সম্পূর্ণ আয়কর ছাড় ও ৫০ লাখ পর্যন্ত সরকারি অনুদান পাওয়ার সুযোগ।"
                        ],
                        "hi": [
                                "3 वर्ष आयकर छूट और ₹50 लाख तक का सरकारी अनुदान।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (startupindia.gov.in).",
                                "Click 'Register' and create startup profile.",
                                "Navigate to 'DPIIT Recognition' and fill company details.",
                                "Upload incorporation certificate and pitch summary to receive DPIIT Certificate instantly upon review."
                        ],
                        "bn": [
                                "startupindia.gov.in পোর্টালে গিয়ে DPIIT রেকগনিশনের জন্য আবেদন করুন।"
                        ],
                        "hi": [
                                "startupindia.gov.in पर जाकर डीपीआईआईटी मान्यता के लिए आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.startupindia.gov.in/",
                "official_apply_url": "https://www.startupindia.gov.in/",
                "official_status_url": "https://www.startupindia.gov.in/",
                "official_helpline": "1800 115 565 (Toll Free)",
                "official_email": "dipp-startups@nic.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.startupindia.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "startup india",
                        "dpiit recognition",
                        "seed fund",
                        "tax exemption 80iac",
                        "স্টার্টআপ ইন্ডিয়া",
                        "সিড ফান্ড",
                        "स्टार्टअप इंडिया"
                ]
        },
        {
                "service_id": "gem-government-emarketplace",
                "service_name": {
                        "en": "GeM Portal (Government e-Marketplace Seller Onboarding)",
                        "bn": "জিইএম পোর্টাল (সরকারি ই-মার্কেটপ্লেস বিক্রেতা নিবন্ধন — GeM)",
                        "hi": "जीईएम पोर्टल (सरकारी ई-मार्केटप्लेस विक्रेता पंजीकरण — GeM)"
                },
                "short_description": {
                        "en": "Official public procurement portal for businesses, MSMEs, and service providers to sell goods and services directly to Central & State government departments.",
                        "bn": "সরকারি দপ্তর ও পিএসইউ-তে সরাসরি পণ্য ও সেবা বিক্রির জন্য জাতীয় সরকারি ই-মার্কেটপ্লেস পোর্টাল।",
                        "hi": "सरकारी विभागों को सीधे उत्पाद और सेवाएं बेचने के लिए राष्ट्रीय सार्वजनिक खरीद पोर्टल।"
                },
                "category": "procurement",
                "category_name": {
                        "en": "Government Procurement (GeM)",
                        "bn": "সরকারি টেন্ডার ও GeM",
                        "hi": "सरकारी खरीद (GeM)"
                },
                "subcategory": "Public Procurement",
                "authority": "GeM SPV (Ministry of Commerce and Industry)",
                "government_level": "Central",
                "service_type": "Commercial & Business",
                "target_users": [
                        "Sellers",
                        "Manufacturers",
                        "Service Providers",
                        "MSMEs"
                ],
                "eligibility": {
                        "en": [
                                "Any registered business entity (Proprietorship, Partnership, Company, LLP) with active GSTIN and PAN."
                        ],
                        "bn": [
                                "বৈধ প্যান ও জিএসটি নম্বরধারী যেকোনো রেজিস্টার্ড ব্যবসা।"
                        ],
                        "hi": [
                                "सक्रिय जीएसटी और पैन धारक कोई भी पंजीकृत व्यवसाय।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "PAN Card",
                                "Udyam Registration / CIN",
                                "GSTIN Certificate",
                                "Bank Account with linked PFMS.",
                                "Income Tax Return (ITR) for last 2 years."
                        ],
                        "bn": [
                                "প্যান, জিএসটি সার্টিফিকেট, উদ্যম নম্বর ও ব্যাংক ডিটেলস।"
                        ],
                        "hi": [
                                "पैन, जीएसटी प्रमाण पत्र, उद्यम संख्या और बैंक विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "Free Seller Registration (caution money deposit applicable per turnover slab).",
                        "bn": "বিনামূল্যে সেলার অ্যাকাউন্ট রেজিস্ট্রেশন।",
                        "hi": "निःशुल्क विक्रेता पंजीकरण।"
                },
                "benefits": {
                        "en": [
                                "Direct access to over ₹2 Lakh Crore annual public procurement tenders.",
                                "Guaranteed automated payment timelines."
                        ],
                        "bn": [
                                "লাখ লাখ সরকারি টেন্ডারে সরাসরি অংশগ্রহণের সুবর্ণ সুযোগ।"
                        ],
                        "hi": [
                                "लाखों सरकारी टेंडरों में सीधी भागीदारी का अवसर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit gem.gov.in.",
                                "Click 'Sign Up' > 'Seller'.",
                                "Verify Aadhaar of authorized signatory and validate GSTIN / ITR.",
                                "Deposit mandatory caution money, catalog your products/services, and bid on tenders."
                        ],
                        "bn": [
                                "gem.gov.in-এ গিয়ে সেলার হিসেবে সাইন আপ করুন ও সরকারি টেন্ডারে বিড করুন।"
                        ],
                        "hi": [
                                "gem.gov.in पर विक्रेता के रूप में पंजीकरण करें और निविदाओं में भाग लें।"
                        ]
                },
                "official_homepage": "https://gem.gov.in/",
                "official_apply_url": "https://gem.gov.in/",
                "official_status_url": "https://gem.gov.in/",
                "official_helpline": "1800-419-3436 / 1800-102-3436",
                "official_email": "helpdesk-gem@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://gem.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "gem",
                        "gem portal",
                        "government tender",
                        "seller registration",
                        "সরকারি টেন্ডার",
                        "জিইএম",
                        "सरकारी टेंडर",
                        "जेम पोर्टल"
                ]
        },
        {
                "service_id": "esanjeevani-teleconsultation",
                "service_name": {
                        "en": "eSanjeevani National Telemedicine Service (Free Doctor Consultation)",
                        "bn": "ই-সঞ্জীবনী জাতীয় টেলিমেডিসিন সেবা (বিনামূল্যে ডাক্তার পরামর্শ)",
                        "hi": "ई-संजीवनी राष्ट्रीय टेलीमेडिसिन सेवा (निःशुल्क डॉक्टर परामर्श)"
                },
                "short_description": {
                        "en": "Official Government of India telemedicine portal for citizens to consult government MBBS doctors and medical specialists from home via video call for free digital prescriptions.",
                        "bn": "ভারত সরকারের জাতীয় টেলিমেডিসিন সেবা—ঘরে বসেই ভিডিও কলের মাধ্যমে সরকারি বিশেষজ্ঞ ডাক্তারের বিনামূল্যে পরামর্শ ও প্রেসক্রিপশন।",
                        "hi": "घर बैठे वीडियो कॉल द्वारा सरकारी डॉक्टरों से निःशुल्क परामर्श और ई-प्रिस्क्रिप्शन।"
                },
                "category": "healthcare",
                "category_name": {
                        "en": "Healthcare & Insurance",
                        "bn": "স্বাস্থ্যসেবা ও বীমা",
                        "hi": "स्वास्थ्य सेवा और बीमा"
                },
                "subcategory": "Telehealth",
                "authority": "Ministry of Health and Family Welfare & C-DAC Mohali",
                "government_level": "Central",
                "service_type": "Healthcare",
                "target_users": [
                        "All Indian Citizens",
                        "Patients",
                        "Elderly",
                        "Rural Residents"
                ],
                "eligibility": {
                        "en": [
                                "All residents of India seeking medical consultation."
                        ],
                        "bn": [
                                "চিকিৎসা পরামর্শপ্রার্থী সমস্ত ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "सभी भारतीय निवासी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mobile Number for OTP",
                                "Past medical records / test reports (optional)."
                        ],
                        "bn": [
                                "মোবাইল নম্বর ও আগের প্রেসক্রিপশন (ঐচ্ছিক)।"
                        ],
                        "hi": [
                                "मोबाइल नंबर और पुरानी रिपोर्ट (वैकल्पिक)।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Public Healthcare Service.",
                        "bn": "সম্পূর্ণ বিনামূল্যে সরকারি সেবা।",
                        "hi": "100% निःशुल्क सरकारी सेवा।"
                },
                "benefits": {
                        "en": [
                                "Consult registered specialist doctors without traveling to hospital.",
                                "Download legally valid digital prescription immediately."
                        ],
                        "bn": [
                                "হাসপাতালে না গিয়েও বিশেষজ্ঞ ডাক্তারের সাথে ভিডিও কল ও বৈধ ডিজিটাল প্রেসক্রিপশন।"
                        ],
                        "hi": [
                                "अस्पताल जाए बिना विशेषज्ञ डॉक्टर से परामर्श और डिजिटल पर्चा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit esanjeevani.in or download eSanjeevani App.",
                                "Select 'Patient Registration / Login' and enter Mobile Number.",
                                "Select Health Department / Specialty clinic and enter symptoms.",
                                "Join virtual doctor waiting room and complete video consultation.",
                                "Download e-Prescription with doctor's digital signature."
                        ],
                        "bn": [
                                "esanjeevani.in পোর্টালে যান, মোবাইল ওটিপি দিয়ে লগইন করে ডাক্তারের সাথে ভিডিও কলে কথা বলুন ও প্রেসক্রিপশন ডাউনলোড করুন।"
                        ],
                        "hi": [
                                "esanjeevani.in पर मोबाइल नंबर से लॉगिन करें, वीडियो परामर्श लें और ई-पर्चा डाउनलोड करें।"
                        ]
                },
                "official_homepage": "https://esanjeevani.in/",
                "official_apply_url": "https://esanjeevani.in/",
                "official_status_url": "https://esanjeevani.in/",
                "official_helpline": "011-23978046",
                "official_email": "esanjeevani-support@cdac.in",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://esanjeevani.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "esanjeevani",
                        "online doctor",
                        "free prescription",
                        "telemedicine",
                        "ডাক্তার পরামর্শ",
                        "ই-সঞ্জীবনী",
                        "टेलीमेडिसिन",
                        "डॉक्टर परामर्श"
                ]
        },
        {
                "service_id": "pfms-public-financial-management",
                "service_name": {
                        "en": "PFMS Portal (Direct Benefit Transfer DBT & Payment Status)",
                        "bn": "পিএফএমএস পোর্টাল (ডিবিটি পেমেন্ট স্ট্যাটাস ও সরকারি অনুদান ট্র্যাকিং)",
                        "hi": "पीएफएमएस पोर्टल (डीबीटी भुगतान स्थिति व सरकारी सब्सिडी ट्रैकिंग)"
                },
                "short_description": {
                        "en": "Official Public Financial Management System (PFMS) portal to track Direct Benefit Transfer (DBT) payments for scholarships, PM-KISAN, pensions, and subsidies by bank account number.",
                        "bn": "স্কলারশিপ, পিএম-কিষাণ, বার্ধক্য ভাতা ও অন্যান্য সরকারি অনুদান ব্যাংকে ঢুকেছে কিনা তা ট্র্যাকিং এর অফিসিয়াল পোর্টাল।",
                        "hi": "छात्रवृत्ति, पीएम-किसान, पेंशन और सब्सिडी के डीबीटी भुगतान की स्थिति जांचने का आधिकारिक पोर्टल।"
                },
                "category": "banking-finance",
                "category_name": {
                        "en": "Banking & Financial Services (Jan Dhan)",
                        "bn": "ব্যাঙ্কিং ও আর্থিক অন্তর্ভুক্তি",
                        "hi": "बैंकिंग और वित्तीय सेवाएं"
                },
                "subcategory": "DBT Tracking",
                "authority": "Controller General of Accounts (Ministry of Finance)",
                "government_level": "Central",
                "service_type": "Financial Tracking",
                "target_users": [
                        "Students",
                        "Farmers",
                        "Pensioners",
                        "Scheme Beneficiaries"
                ],
                "eligibility": {
                        "en": [
                                "Any Indian citizen receiving Central or State government benefits/scholarships via DBT."
                        ],
                        "bn": [
                                "সরকারি অনুদান ও স্কলারশিপ প্রাপক সমস্ত নাগরিক।"
                        ],
                        "hi": [
                                "सरकारी योजना और छात्रवृत्ति के सभी लाभार्थी।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Bank Name and Account Number",
                                "NSP Application ID (for scholarship beneficiaries)."
                        ],
                        "bn": [
                                "ব্যাংকের নাম ও অ্যাকাউন্ট নম্বর অথবা স্কলারশিপ অ্যাপ্লিকেশন আইডি।"
                        ],
                        "hi": [
                                "बैंक खाता संख्या या छात्रवृत्ति आवेदन आईडी।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Public Verification.",
                        "bn": "বিনামূল্যে ট্র্যাকিং।",
                        "hi": "निःशुल्क सत्यापन।"
                },
                "benefits": {
                        "en": [
                                "Real-time transaction status with UTR number for credit confirmation."
                        ],
                        "bn": [
                                "টাকা কখন একাউন্টে জমা হবে বা আটকে আছে কিনা তা সঠিক ইউটিআর (UTR) সহ জানা।"
                        ],
                        "hi": [
                                "यूटीआर नंबर के साथ वास्तविक समय में भुगतान स्थिति।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official PFMS portal (pfms.nic.in).",
                                "Click 'Know Your Payments' on the homepage.",
                                "Enter Bank Name, Account Number, and Captcha code.",
                                "Verify with mobile OTP to view complete itemized payment history."
                        ],
                        "bn": [
                                "pfms.nic.in-এ 'Know Your Payments'-এ গিয়ে ব্যাংক অ্যাকাউন্ট নম্বর দিয়ে টাকা ক্রেডিট হওয়ার স্ট্যাটাস দেখুন।"
                        ],
                        "hi": [
                                "pfms.nic.in पर जाकर बैंक खाता दर्ज करें और डीबीटी भुगतान स्थिति देखें।"
                        ]
                },
                "official_homepage": "https://pfms.nic.in/",
                "official_apply_url": "https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx",
                "official_status_url": "https://pfms.nic.in/",
                "official_helpline": "1800 118 111 (Toll Free)",
                "official_email": "helpdesk-pfms@gov.in",
                "state": "All India",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://pfms.nic.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "pfms",
                        "dbt payment",
                        "scholarship payment status",
                        "pm kisan payment status",
                        "ডিবিটি স্ট্যাটাস",
                        "পিএফএমএস",
                        "पीएफएमएस",
                        "डीबीटी स्टेटस"
                ]
        },
        {
                "service_id": "pmjdy-financial-inclusion",
                "service_name": {
                        "en": "Pradhan Mantri Jan Dhan Yojana (PMJDY Zero Balance Account)",
                        "bn": "প্রধানমন্ত্রী জন ধন যোজনা (PMJDY জিরো ব্যালেন্স একাউন্ট)",
                        "hi": "प्रधानमंत्री जन धन योजना (PMJDY जीरो बैलेंस खाता)"
                },
                "short_description": {
                        "en": "Official National Mission on Financial Inclusion portal detailing zero-balance savings accounts, RuPay debit card with ₹2 Lakh accident insurance, and ₹10,000 overdraft facility.",
                        "bn": "জিরো ব্যালেন্স সেভিংস অ্যাকাউন্ট, রূপের কার্ড ও ২ লাখ টাকার দুর্ঘটনা বীমার সরকারি পোর্টাল।",
                        "hi": "जीरो बैलेंस खाता, रुपे डेबिट कार्ड पर ₹2 लाख का दुर्घटना बीमा और ओवरड्राफ्ट सुविधा।"
                },
                "category": "banking-finance",
                "category_name": {
                        "en": "Banking & Financial Services (Jan Dhan)",
                        "bn": "ব্যাঙ্কিং ও আর্থিক অন্তর্ভুক্তি",
                        "hi": "बैंकिंग और वित्तीय सेवाएं"
                },
                "subcategory": "Financial Inclusion",
                "authority": "Department of Financial Services (Ministry of Finance)",
                "government_level": "Central",
                "service_type": "Banking Scheme",
                "target_users": [
                        "Unbanked Citizens",
                        "Women",
                        "Workers",
                        "Rural Residents"
                ],
                "eligibility": {
                        "en": [
                                "Any Indian citizen aged 10 years and above who does not have any bank account."
                        ],
                        "bn": [
                                "১০ বছর বা তার বেশি বয়সী যেকোনো ভারতীয় নাগরিক।"
                        ],
                        "hi": [
                                "10 वर्ष और उससे अधिक आयु का कोई भी भारतीय नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card (if available)",
                                "Voter ID / Driving Licence / NREGA Card / Passport (if Aadhaar not available)."
                        ],
                        "bn": [
                                "আধার কার্ড বা ভোটার কার্ড ও পাসপোর্ট ছবি।"
                        ],
                        "hi": [
                                "आधार कार्ड या वोटर आईडी व फोटो।"
                        ]
                },
                "application_fee": {
                        "en": "Zero balance opening fee (100% Free).",
                        "bn": "বিনামূল্যে অ্যাকাউন্ট খোলা যায়।",
                        "hi": "निःशुल्क खाता खोलना।"
                },
                "benefits": {
                        "en": [
                                "No minimum balance requirement.",
                                "RuPay Debit Card with built-in ₹2 Lakh accidental insurance cover.",
                                "Direct receipt of all government welfare funds."
                        ],
                        "bn": [
                                "মিনিমাম ব্যালেন্সের কোনো বাধ্যবাধকতা নেই ও সরকারি অনুদান সরাসরি জমা।"
                        ],
                        "hi": [
                                "कोई न्यूनतम बैलेंस आवश्यकता नहीं व सरकारी योजनाओं का सीधा लाभ।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit pmjdy.gov.in to download PMJDY Account Opening Form.",
                                "Fill the application form and attach photocopy of Aadhaar Card.",
                                "Submit to any nearest Nationalized Bank branch, Grameen Bank, or Bank Mitra (CSP kiosk) for instant account opening."
                        ],
                        "bn": [
                                "pmjdy.gov.in থেকে ফর্ম ডাউনলোড করে নিকটস্থ যেকোনো ব্যাংক বা গ্রাহক সেবা কেন্দ্রে আধার সহ জমা দিন।"
                        ],
                        "hi": [
                                "pmjdy.gov.in से फॉर्म डाउनलोड करें और निकटतम बैंक शाखा में आधार के साथ जमा करें।"
                        ]
                },
                "official_homepage": "https://pmjdy.gov.in/",
                "official_apply_url": "https://pmjdy.gov.in/",
                "official_status_url": "https://pmjdy.gov.in/",
                "official_helpline": "1800 11 0001 / 1800 180 1111",
                "official_email": "pmjdy-dfs@nic.in",
                "state": "All India",
                "availability": "Online Info + Bank Branch",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://pmjdy.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "pmjdy",
                        "jan dhan",
                        "zero balance account",
                        "rupay card",
                        "জন ধন যোজনা",
                        "জিরো ব্যালেন্স অ্যাকাউন্ট",
                        "जन धन योजना"
                ]
        },
        {
                "service_id": "wb-edeed-property-registration",
                "service_name": {
                        "en": "West Bengal e-Deed & Property Registration (wbregistration.gov.in)",
                        "bn": "পশ্চিমবঙ্গ জমি ও ফ্ল্যাট রেজিস্ট্রেশন এবং ই-দলিল (e-Deed)",
                        "hi": "पश्चिम बंगाल भूमि व संपत्ति पंजीकरण और ई-डीड (e-Deed)"
                },
                "short_description": {
                        "en": "Official Directorate of Registration and Stamp Revenue portal to draft e-Deeds, calculate market value, pay stamp duty/registration fees online, and book registration appointments.",
                        "bn": "জমি ও সম্পত্তির বাজার দর নির্ণয়, ই-দলিল ড্রাফটিং, স্ট্যাম্প ডিউটি জমা ও রেজিস্ট্রি অ্যাপয়েন্টমেন্টের অফিসিয়াল পোর্টাল।",
                        "hi": "जमीन-मकान का बाजार मूल्य, ई-डीड, स्टांप शुल्क और रजिस्ट्री स्लॉट बुकिंग पोर्टल।"
                },
                "category": "land-property",
                "category_name": {
                        "en": "Land & Property (Banglarbhumi)",
                        "bn": "জমি ও সম্পত্তি (বাংলারভূমি)",
                        "hi": "भूमि और संपत्ति (बांगलारभूमि)"
                },
                "subcategory": "Deed & Stamp Duty",
                "authority": "Directorate of Registration and Stamp Revenue (Finance Department, Govt of West Bengal)",
                "government_level": "West Bengal",
                "service_type": "Property Registration",
                "target_users": [
                        "Property Buyers",
                        "Sellers",
                        "Advocates",
                        "Deed Writers",
                        "Citizens"
                ],
                "eligibility": {
                        "en": [
                                "Buyers and sellers executing sale, gift, partition, or lease deed in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গে জমি, ফ্ল্যাট বা সম্পত্তি ক্রয়-বিক্রয় ও হস্তান্তরকারী নাগরিক।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल में संपत्ति का क्रय-विक्रय व हस्तांतरण करने वाले।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Prior Deed (Dalil) copy",
                                "Current Banglarbhumi RoR (Porcha) & Khajna receipt",
                                "PAN & Aadhaar of Buyer, Seller, and 2 Witnesses."
                        ],
                        "bn": [
                                "পূর্বের দলিল, পরচা, খাজনা রশিদ এবং ক্রেতা-বিক্রেতা ও সাক্ষীদের প্যান-আধার।"
                        ],
                        "hi": [
                                "पिछली डीड, पर्चा, खजाना रसीद और क्रेता-विक्रेता के पैन-आधार।"
                        ]
                },
                "application_fee": {
                        "en": "Stamp duty and registration fee calculated automatically based on official market value (GRIPS online payment).",
                        "bn": "সরকারি বাজার মূল্যের ভিত্তিতে স্ট্যাম্প ডিউটি ও রেজিস্ট্রি ফি অনলাইনে প্রদেয়।",
                        "hi": "बाजार मूल्य के आधार पर स्टांप शुल्क व पंजीकरण शुल्क।"
                },
                "benefits": {
                        "en": [
                                "Transparent computerized market valuation without overcharging.",
                                "Legally compliant e-Deed system with downloadable registered deed."
                        ],
                        "bn": [
                                "স্বচ্ছ সরকারি বাজার মূল্য যাচাই ও অনলাইনে স্ট্যাম্প ডিউটি দিয়ে ঝামেলামুক্ত রেজিস্ট্রি।"
                        ],
                        "hi": [
                                "पारदर्शी बाजार मूल्यांकन और ई-डीड द्वारा सुरक्षित रजिस्ट्री।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit wbregistration.gov.in.",
                                "Click 'Market Value of Land / Property' to calculate official circle rates.",
                                "Select 'e-Deed' to enter Buyer, Seller, and Plot details.",
                                "Pay Stamp Duty and Registration Fee online via GRIPS portal.",
                                "Book slot at ADSR / DSR office for biometric verification and instant deed delivery."
                        ],
                        "bn": [
                                "wbregistration.gov.in-এ বাজার দর যাচাই করুন, e-Deed পূরণ করুন, GRIPS-এ ফি দিয়ে রেজিস্ট্রি অফিসে বায়োমেট্রিক দিন।"
                        ],
                        "hi": [
                                "wbregistration.gov.in पर बाजार मूल्य जांचें, ई-डीड भरें और ऑनलाइन स्टांप शुल्क जमा करें।"
                        ]
                },
                "official_homepage": "https://wbregistration.gov.in/",
                "official_apply_url": "https://wbregistration.gov.in/Index.aspx",
                "official_status_url": "https://wbregistration.gov.in/",
                "official_helpline": "033-2223 0150 / 033-2223 0151",
                "official_email": "grievance.registration-wb@gov.in",
                "state": "West Bengal",
                "availability": "Online + ADSR Office",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://wbregistration.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "wbregistration",
                        "e deed",
                        "property registration wb",
                        "market value land",
                        "dalil registry",
                        "দলিল রেজিস্ট্রি",
                        "জমির রেজিস্ট্রি",
                        "ই-দলিল",
                        "डीड रजिस्ट्री",
                        "बाजार मूल्य"
                ]
        },
        {
                "service_id": "wb-annapurna-yojana-food",
                "service_name": {
                        "en": "Annapurna Scheme (Free Foodgrain for Indigent Senior Citizens — WB)",
                        "bn": "অন্নপূর্ণা যোজনা (নিঃস্ব প্রবীণ নাগরিকদের জন্য বিনামূল্যে খাদ্যশস্য)",
                        "hi": "अन्नपूर्णा योजना (वरिष्ठ नागरिकों के लिए निःशुल्क खाद्यान्न)"
                },
                "short_description": {
                        "en": "Official Food & Supplies Department scheme providing 10 kg of free foodgrains monthly to indigent senior citizens aged 65+ who are not receiving National Old Age Pension.",
                        "bn": "৬৫ বছর বা তদূর্ধ্ব নিঃস্ব প্রবীণ নাগরিক যাঁরা বার্ধক্য ভাতা পান না, তাঁদের জন্য প্রতি মাসে ১০ কেজি বিনামূল্যে খাদ্যশস্য।",
                        "hi": "65 वर्ष से अधिक आयु के ऐसे वरिष्ठ नागरिकों के लिए प्रति माह 10 किलोग्राम मुफ्त खाद्यान्न जो वृद्धावस्था पेंशन नहीं पाते।"
                },
                "category": "ration-food",
                "category_name": {
                        "en": "Ration & Food Security",
                        "bn": "রেশন ও খাদ্য সুরক্ষা",
                        "hi": "राशन और खाद्य सुरक्षा"
                },
                "subcategory": "Senior Nutrition",
                "authority": "Department of Food & Supplies (Government of West Bengal)",
                "government_level": "West Bengal",
                "service_type": "Food Security",
                "target_users": [
                        "Senior Citizens (65+)",
                        "Indigent Elders"
                ],
                "eligibility": {
                        "en": [
                                "Senior citizens aged 65 years or above residing in West Bengal with no regular source of subsistence and not receiving NOAPS or other government pensions."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের বাসিন্দা ৬৫ বছর বা তার বেশি বয়সী নিঃস্ব প্রবীণ নাগরিক যাঁদের কোনো নিয়মিত আয়ের উৎস নেই।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के 65 वर्ष या अधिक आयु के असहाय बुजुर्ग।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Age Proof (Aadhaar / Voter ID / Birth Certificate)",
                                "Income / Destitution Certificate from Panchayat Pradhan / Councillor",
                                "Ration Card (if existing)."
                        ],
                        "bn": [
                                "বয়সের প্রমাণপত্র ও পঞ্চায়েত প্রধান/কাউন্সিলরের দেওয়া নিঃস্ব শংসাপত্র।"
                        ],
                        "hi": [
                                "आयु प्रमाण पत्र और पंचायत/वार्ड पार्षद से आय प्रमाण।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Government Scheme.",
                        "bn": "সম্পূর্ণ বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "10 kg foodgrain per month free of cost from Fair Price Shop."
                        ],
                        "bn": [
                                "রেশন দোকান থেকে প্রতি মাসে ১০ কেজি বিনামূল্যে চাল/গম।"
                        ],
                        "hi": [
                                "राशन की दुकान से प्रति माह 10 किलो मुफ्त अनाज।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Apply via Food & Supplies Department (food.wb.gov.in) or submit form at BDO / SDO Food Office or Duare Sarkar camps.",
                                "Local inspection verifies eligibility.",
                                "Special Annapurna Card issued for monthly ration withdrawal."
                        ],
                        "bn": [
                                "দুয়ারে সরকার ক্যাম্প বা বিডিও অফিসে অন্নপূর্ণা ফর্ম জমা দিন এবং রেশন কার্ড সংগ্রহ করুন।"
                        ],
                        "hi": [
                                "द्वारे सरकार या बीडीओ कार्यालय में आवेदन जमा करें और कार्ड प्राप्त करें।"
                        ]
                },
                "official_homepage": "https://food.wb.gov.in/",
                "official_apply_url": "https://food.wb.gov.in/",
                "official_status_url": "https://food.wb.gov.in/",
                "official_helpline": "1800 345 5505 / 1967 (Toll Free)",
                "official_email": "itcell.food@wb.gov.in",
                "state": "West Bengal",
                "availability": "Online + Duare Sarkar",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://food.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "annapurna",
                        "annapurna yojana",
                        "senior citizen ration",
                        "wb food dept",
                        "অন্নপূর্ণা যোজনা",
                        "বিনামূল্যে রেশন",
                        "अन्नपूर्णा योजना"
                ]
        },
        {
                "service_id": "wb-krishak-bandhu-scheme",
                "service_name": {
                        "en": "Krishak Bandhu (Assured Financial Assistance & ₹2 Lakh Death Benefit)",
                        "bn": "কৃষক বন্ধু প্রকল্প (নিশ্চিত আর্থিক অনুদান ও ২ লাখ টাকার মৃত্যু সহায়তা)",
                        "hi": "कृषक बंधु योजना (वार्षिक सहायता और ₹2 लाख मृत्यु लाभ)"
                },
                "short_description": {
                        "en": "Flagship Government of West Bengal agricultural assistance scheme providing up to ₹10,000 annually in two installments per acre, plus ₹2 Lakh family assistance on farmer death (18–60 years).",
                        "bn": "পশ্চিমবঙ্গ সরকারের কৃষকদের জন্য বছরে একর প্রতি সর্বোচ্চ ১০,০০০ টাকা অনুদান এবং ১৮–৬০ বছর বয়সী কৃষকের মৃত্যুতে পরিবারকে ২ লাখ টাকার সহায়তা।",
                        "hi": "प्रति एकड़ ₹10,000 वार्षिक सहायता और किसान की मृत्यु पर ₹2 लाख की आर्थिक सहायता।"
                },
                "category": "agriculture",
                "category_name": {
                        "en": "Farmers & Agriculture",
                        "bn": "কৃষক ও কৃষি সেবা",
                        "hi": "किसान और कृषि"
                },
                "subcategory": "Direct Benefit Transfer",
                "authority": "Department of Agriculture (Government of West Bengal)",
                "government_level": "West Bengal",
                "service_type": "Agriculture Welfare",
                "target_users": [
                        "Farmers",
                        "Bhagchasi (Sharecroppers)",
                        "Agricultural Land Owners"
                ],
                "eligibility": {
                        "en": [
                                "All agricultural landowners and recorded sharecroppers (Bhagchasi) in West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত কৃষক ও নথিবদ্ধ ভাগচাষী।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के सभी भूमि मालिक किसान व बटाईदार।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Current Banglarbhumi Land RoR (Porcha / Khatian)",
                                "Aadhaar Card & Voter ID",
                                "Bank Passbook with linked single account.",
                                "Death certificate & age proof (for Death Benefit claims)."
                        ],
                        "bn": [
                                "জমির হাল পরচা/খতিয়ান, আধার, ভোটার কার্ড ও ব্যাংক পাসবুক।"
                        ],
                        "hi": [
                                "जमीन का पर्चा, आधार कार्ड, वोटर कार्ड और बैंक पासबुक।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Scheme Registration.",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন।",
                        "hi": "निःशुल्क आवेदन।"
                },
                "benefits": {
                        "en": [
                                "Up to ₹10,000 per year for 1 acre or more (minimum ₹4,000/year for smaller holdings).",
                                "₹2 Lakh one-time insurance on untimely death."
                        ],
                        "bn": [
                                "বছরে সর্বোচ্চ ১০,০০০ টাকা নিশ্চিত অনুদান ও কৃষকের মৃত্যুতে ২ লাখ টাকার সুরক্ষা।"
                        ],
                        "hi": [
                                "₹10,000 तक वार्षिक सहायता और मृत्यु पर ₹2 लाख का बीमा।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit krishakbandhu.wb.gov.in.",
                                "Click 'নথিভুক্ত কৃষকের তথ্য' to check status using Voter ID.",
                                "For new enrollment, submit Krishak Bandhu application at Duare Sarkar camps or block ADA office with porcha."
                        ],
                        "bn": [
                                "krishakbandhu.wb.gov.in-এ ভোটার আইডি দিয়ে নাম ও টাকার স্ট্যাটাস দেখুন, নতুন আবেদনের জন্য দুয়ারে সরকার বা কৃষি অফিসে যোগাযোগ করুন।"
                        ],
                        "hi": [
                                "krishakbandhu.wb.gov.in पर वोटर आईडी से स्टेटस चेक करें और योजना का लाभ लें।"
                        ]
                },
                "official_homepage": "https://krishakbandhu.wb.gov.in/",
                "official_apply_url": "https://krishakbandhu.wb.gov.in/",
                "official_status_url": "https://krishakbandhu.wb.gov.in/check_status",
                "official_helpline": "8336957370 / 8597857373 / 033-2214-1378",
                "official_email": "krishak.bandhu@yahoo.com",
                "state": "West Bengal",
                "availability": "Online Status + Duare Sarkar",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://krishakbandhu.wb.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "krishak bandhu",
                        "krishak bandhu status",
                        "wb agriculture",
                        "death benefit 2 lakh",
                        "কৃষক বন্ধু",
                        "কৃষক বন্ধু টাকা",
                        "কৃষক বন্ধু স্ট্যাটাস",
                        "कृषक बंधु"
                ]
        },
        {
                "service_id": "wb-matir-katha-agriculture",
                "service_name": {
                        "en": "Matir Katha (Agriculture Technology & Crop Advisory Portal — WB)",
                        "bn": "মাটির কথা (কৃষি প্রযুক্তি, আবহাওয়া ও ফসল পরামর্শ পোর্টাল)",
                        "hi": "मातिर कथा (कृषि तकनीक व फसल सलाह पोर्टल — प. बंगाल)"
                },
                "short_description": {
                        "en": "Official Agriculture Department ICT portal providing customized weather forecasts, pest alerts, crop disease diagnosis, and farm mechanization subsidies to farmers in West Bengal.",
                        "bn": "পশ্চিমবঙ্গের কৃষকদের জন্য আবহাওয়া পূর্বাভাস, ফসলের রোগ প্রতিরোধ ও কৃষি যন্ত্রপাতি ক্রয়ে সরকারি ভরতুকির পোর্টাল।",
                        "hi": "मौसम पूर्वानुमान, कीट चेतावनी और कृषि यंत्र सब्सिडी पोर्टल।"
                },
                "category": "agriculture",
                "category_name": {
                        "en": "Farmers & Agriculture",
                        "bn": "কৃষক ও কৃষি সেবা",
                        "hi": "किसान और कृषि"
                },
                "subcategory": "Agri-Tech",
                "authority": "Department of Agriculture (Government of West Bengal)",
                "government_level": "West Bengal",
                "service_type": "Agriculture Advisory",
                "target_users": [
                        "Farmers",
                        "Agri-Entrepreneurs",
                        "Custom Hiring Centers"
                ],
                "eligibility": {
                        "en": [
                                "All farmers and agrarian workers across West Bengal."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের সমস্ত কৃষক ও চাষী।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के सभी किसान।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Krishak Bandhu ID / Aadhaar Number",
                                "Mobile Number for SMS alerts."
                        ],
                        "bn": [
                                "কৃষক বন্ধু আইডি ও মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "कृषक बंधु आईडी और मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Public Advisory.",
                        "bn": "সম্পূর্ণ বিনামূল্যে পরামর্শ।",
                        "hi": "निःशुल्क सेवा।"
                },
                "benefits": {
                        "en": [
                                "Real-time block-level weather & pest advisories.",
                                "Up to 50%–60% subsidy on modern tractors, power tillers, and harvesters."
                        ],
                        "bn": [
                                "ব্লক অনুযায়ী আবহাওয়ার পূর্বাভাস ও আধুনিক কৃষি যন্ত্রপাতিতে ৫০%–৬০% পর্যন্ত সরকারি ভরতুকি।"
                        ],
                        "hi": [
                                "मौसम अलर्ट और कृषि यंत्रों पर 50%-60% तक की सब्सिडी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit matirkatha.net.",
                                "Access 'Farm Mechanization' for online subsidy application for agricultural implements.",
                                "Access crop advisory and mandi rates section."
                        ],
                        "bn": [
                                "matirkatha.net পোর্টালে যান ও কৃষি যন্ত্রপাতি ভর্তুকির জন্য আবেদন করুন।"
                        ],
                        "hi": [
                                "matirkatha.net पर जाकर कृषि यंत्र सब्सिडी और सलाह प्राप्त करें।"
                        ]
                },
                "official_homepage": "https://matirkatha.net/",
                "official_apply_url": "https://matirkatha.net/",
                "official_status_url": "https://matirkatha.net/",
                "official_helpline": "033-2214-5555",
                "official_email": "support@matirkatha.net",
                "state": "West Bengal",
                "availability": "Online",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://matirkatha.net/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "matir katha",
                        "tractor subsidy",
                        "crop advisory",
                        "wb agriculture portal",
                        "মাটির কথা",
                        "কৃষি যন্ত্রপাতি ভর্তুকি",
                        "मातिर कथा"
                ]
        },
        {
                "service_id": "wb-bmssy-social-security",
                "service_name": {
                        "en": "Bina Mulya Samajik Suraksha Yojana (BMSSY Unorganized Workers Scheme)",
                        "bn": "বিনা মূল্যে সামাজিক সুরক্ষা যোজনা (BMSSY — অসংগঠিত শ্রমিক কল্যাণ)",
                        "hi": "बिना मूल्य सामाजिक सुरक्षा योजना (BMSSY असंगठित श्रमिक कल्याण)"
                },
                "short_description": {
                        "en": "Flagship Labour Department scheme providing 100% state-funded provident fund, accidental death grant of ₹2 Lakh, and disability assistance to unorganized sector workers in West Bengal.",
                        "bn": "অসংগঠিত শ্রমিকদের জন্য সম্পূর্ণ বিনামূল্যে প্রভিডেন্ট ফান্ড, দুর্ঘটনাজনিত মৃত্যুতে ২ লাখ টাকা এবং অক্ষমতায় আর্থিক সহায়তার সরকারি প্রকল্প।",
                        "hi": "असंगठित श्रमिकों के लिए राज्य सरकार द्वारा वित्तपोषित भविष्य निधि और ₹2 लाख तक का दुर्घटना बीमा।"
                },
                "category": "labour-workers",
                "category_name": {
                        "en": "Workers & Labour Welfare",
                        "bn": "শ্রমিক ও শ্রম কল্যাণ",
                        "hi": "श्रमिक और श्रम कल्याण"
                },
                "subcategory": "Worker Social Security",
                "authority": "Labour Department (Government of West Bengal)",
                "government_level": "West Bengal",
                "service_type": "Social Security",
                "target_users": [
                        "Unorganized Workers",
                        "Transport Workers",
                        "Construction Workers",
                        "Gig Workers"
                ],
                "eligibility": {
                        "en": [
                                "Unorganized workers aged 18 to 60 years residing in West Bengal with family income up to ₹6,500/month (construction/transport workers exempt from income ceiling)."
                        ],
                        "bn": [
                                "পশ্চিমবঙ্গের ১৮–৬০ বছর বয়সী অসংগঠিত শ্রমিক, নির্মাণ শ্রমিক ও পরিবহন কর্মী।"
                        ],
                        "hi": [
                                "पश्चिम बंगाल के 18 से 60 वर्ष के असंगठित क्षेत्र के श्रमिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Aadhaar Card & Voter ID",
                                "Bank Passbook with single account",
                                "Passport photograph",
                                "Self-declaration of occupation."
                        ],
                        "bn": [
                                "আধার, ভোটার কার্ড, ব্যাংক পাসবুক ও পেশার স্ব-ঘোষণা।"
                        ],
                        "hi": [
                                "आधार, वोटर कार्ड, बैंक पासबुक और व्यवसाय घोषणा।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free (Monthly ₹30 worker contribution is paid entirely by the West Bengal Government).",
                        "bn": "সম্পূর্ণ বিনামূল্যে (মাসিক প্রিমিয়াম সম্পূর্ণ রাজ্য সরকার দেয়)।",
                        "hi": "100% निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "State-funded Provident Fund with interest on maturity at age 60.",
                                "₹2,00,000 assistance on accidental death; ₹50,000 on normal death."
                        ],
                        "bn": [
                                "৬০ বছর বয়সে সুদে-আসলে প্রভিডেন্ট ফান্ডের টাকা ও দুর্ঘটনায় মৃত্যুতে ২ লাখ টাকার ক্ষতিপূরণ।"
                        ],
                        "hi": [
                                "60 वर्ष की आयु में पीएफ राशि और आकस्मिक मृत्यु पर ₹2 लाख।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit bmssy.wblabour.gov.in.",
                                "Click 'New Registration' or submit application at Duare Sarkar camp / Bangla Sahayata Kendra (BSK).",
                                "Download BMSSY digital Samajik Suraksha card upon approval."
                        ],
                        "bn": [
                                "bmssy.wblabour.gov.in অথবা দুয়ারে সরকার/BSK কেন্দ্রে গিয়ে বিনামূল্যে BMSSY কার্ডের জন্য আবেদন করুন।"
                        ],
                        "hi": [
                                "bmssy.wblabour.gov.in या द्वारे सरकार कैंप में आवेदन करें और कार्ड पाएं।"
                        ]
                },
                "official_homepage": "https://bmssy.wblabour.gov.in/",
                "official_apply_url": "https://bmssy.wblabour.gov.in/",
                "official_status_url": "https://bmssy.wblabour.gov.in/",
                "official_helpline": "1800 103 0009 (Toll Free)",
                "official_email": "support.bmssy@wblabour.gov.in",
                "state": "West Bengal",
                "availability": "Online + Duare Sarkar + BSK",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://bmssy.wblabour.gov.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "bmssy",
                        "samajik suraksha",
                        "unorganized workers wb",
                        "labour scheme",
                        "সামাজিক সুরক্ষা যোজনা",
                        "শ্রমিক সুরক্ষা",
                        "বিএমএসএসওয়াই",
                        "सामाजिक सुरक्षा योजना"
                ]
        },
        {
                "service_id": "pvt-hdfc-netbanking",
                "service_name": {
                        "en": "HDFC Bank NetBanking Portal",
                        "bn": "এইচডিএফসি ব্যাংক নেটব্যাঙ্কিং (HDFC NetBanking)",
                        "hi": "एचडीएफसी बैंक नेटबैंकिंग (HDFC NetBanking)"
                },
                "short_description": {
                        "en": "Official HDFC Bank secure digital banking gateway for account holders to transfer funds via IMPS/NEFT, download stamped statements, manage debit/credit cards, and book fixed deposits.",
                        "bn": "এইচডিএফসি ব্যাংকের সুরক্ষিত ইন্টারনেট ব্যাংকিং পোর্টাল—তাত্ক্ষণিক ফান্ড ট্রান্সফার ও স্টেটমেন্ট ডাউনলোড।",
                        "hi": "एचडीएफसी बैंक सुरक्षित इंटरनेट बैंकिंग—फंड ट्रांसफर और बैंक स्टेटमेंट डाउनलोड।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Private Banking",
                "authority": "HDFC Bank Limited (Corporate Entity)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "HDFC Account Holders",
                        "Businesses",
                        "Citizens"
                ],
                "eligibility": {
                        "en": [
                                "Active HDFC Savings or Current account holders."
                        ],
                        "bn": [
                                "সচল এইচডিএফসি ব্যাংক অ্যাকাউন্টধারী।"
                        ],
                        "hi": [
                                "एचडीएफसी बैंक खाताधारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Customer ID",
                                "Registered Mobile Number for OTP",
                                "Debit Card / IPIN for authentication."
                        ],
                        "bn": [
                                "কাস্টমার আইডি, রেজিস্টার্ড মোবাইল ও ডেবিট কার্ড।"
                        ],
                        "hi": [
                                "कस्टमर आईडी और पंजीकृत मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free online banking access.",
                        "bn": "সম্পূর্ণ বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Secure 24x7 fund transfers.",
                                "Instant e-statements for visa, loan, and government form verification."
                        ],
                        "bn": [
                                "২৪x৭ ফান্ড ট্রান্সফার ও ফর্ম ফিলাপের জন্য ডাউনলোডযোগ্য স্টেটমেন্ট।"
                        ],
                        "hi": [
                                "24x7 फंड ट्रांसफर और ऑनलाइन स्टेटमेंट।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (netbanking.hdfcbank.com).",
                                "Enter Customer ID and click 'Continue'.",
                                "Enter IPIN (Password) and complete OTP validation.",
                                "Access banking dashboard."
                        ],
                        "bn": [
                                "netbanking.hdfcbank.com পোর্টালে গিয়ে কাস্টমার আইডি ও পাসওয়ার্ড দিয়ে নিরাপদে লগইন করুন।"
                        ],
                        "hi": [
                                "netbanking.hdfcbank.com पर जाकर कस्टमर आईडी से सुरक्षित लॉगिन करें।"
                        ]
                },
                "official_homepage": "https://www.hdfcbank.com/",
                "official_apply_url": "https://netbanking.hdfcbank.com/netbanking/",
                "official_status_url": "https://netbanking.hdfcbank.com/",
                "official_helpline": "1800 202 6161 / 1800 1600 (Toll Free)",
                "official_email": "support@hdfcbank.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://netbanking.hdfcbank.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "hdfc",
                        "hdfc netbanking",
                        "hdfc login",
                        "hdfc statement",
                        "এইচডিএফসি",
                        "এইচডিএফসি ব্যাংক",
                        "एचडीएफसी बैंक"
                ],
                "scam_warning": {
                        "en": "NEVER share HDFC Customer ID, Password, Card PIN, or OTP. HDFC Bank NEVER calls asking for OTPs.",
                        "bn": "কখনোই এইচডিএফসি পাসওয়ার্ড বা ওটিপি কাউকে জানাবেন না।",
                        "hi": "एचडीएफसी बैंक पासवर्ड या ओटीपी किसी के साथ साझा न करें।"
                }
        },
        {
                "service_id": "pvt-icici-netbanking",
                "service_name": {
                        "en": "ICICI Bank Internet Banking Portal",
                        "bn": "আইসিআইসিআই ব্যাংক ইন্টারনেট ব্যাংকিং (ICICI NetBanking)",
                        "hi": "आईसीआईसीआई बैंक इंटरनेट बैंकिंग"
                },
                "short_description": {
                        "en": "Official ICICI Bank internet banking portal for secure retail and corporate transactions, e-tax payments, statement generation, and FASTag recharges.",
                        "bn": "আইসিআইসিআই ব্যাংকের অফিসিয়াল ইন্টারনেট ব্যাংকিং পোর্টাল—ফান্ড ট্রান্সফার ও স্টেটমেন্ট।",
                        "hi": "आईसीआईसीआई बैंक इंटरनेट बैंकिंग—फंड ट्रांसफर और ई-स्टेटमेंट।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी ডিজিটাল सेवाएं"
                },
                "subcategory": "Private Banking",
                "authority": "ICICI Bank Limited (Corporate Entity)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "ICICI Account Holders",
                        "Citizens"
                ],
                "eligibility": {
                        "en": [
                                "Active ICICI Bank account holders."
                        ],
                        "bn": [
                                "আইসিআইসিআই অ্যাকাউন্টধারী।"
                        ],
                        "hi": [
                                "आईसीआईसीआई खाताधारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "User ID / Account Number",
                                "Registered Mobile Number for OTP."
                        ],
                        "bn": [
                                "ইউজার আইডি ও রেজিস্টার্ড মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "यूजर आईडी और पंजीकृत मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free online banking access.",
                        "bn": "বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "24x7 fund transfers and instant e-statements."
                        ],
                        "bn": [
                                "২৪x৭ লেনদেন ও ডাউনলোডযোগ্য ব্যাংক স্টেটমেন্ট।"
                        ],
                        "hi": [
                                "24x7 बैंकिंग और ई-स्टेटमेंट।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit official portal (icicibank.com).",
                                "Click 'Login' and enter User ID and Password.",
                                "Verify via SMS OTP to access banking dashboard."
                        ],
                        "bn": [
                                "icicibank.com পোর্টালে গিয়ে ইউজার আইডি ও ওটিপি দিয়ে নিরাপদে লগইন করুন।"
                        ],
                        "hi": [
                                "icicibank.com पर सुरक्षित लॉगिन करें।"
                        ]
                },
                "official_homepage": "https://www.icicibank.com/",
                "official_apply_url": "https://www.icicibank.com/",
                "official_status_url": "https://www.icicibank.com/",
                "official_helpline": "1800 1080 (Toll Free)",
                "official_email": "customer.care@icicibank.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.icicibank.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "icici",
                        "icici netbanking",
                        "icici login",
                        "iMobile",
                        "আইসিআইসিআই",
                        "आईसीआईसीआई"
                ],
                "scam_warning": {
                        "en": "Never share OTP or PIN with anyone.",
                        "bn": "কখনোই ওটিপি বা পিন কাউকে জানাবেন না।",
                        "hi": "ओटीपी या पिन किसी के साथ साझा न करें।"
                }
        },
        {
                "service_id": "pvt-axis-netbanking",
                "service_name": {
                        "en": "Axis Bank Internet Banking Portal",
                        "bn": "অ্যাক্সিস ব্যাংক ইন্টারনেট ব্যাংকিং (Axis NetBanking)",
                        "hi": "एक्सिस बैंक इंटरनेट बैंकिंग"
                },
                "short_description": {
                        "en": "Official Axis Bank digital banking gateway for account management, fund transfers, and credit card services.",
                        "bn": "অ্যাক্সিস ব্যাংকের ডিজিটাল ইন্টারনেট ব্যাংকিং পোর্টাল।",
                        "hi": "एक्सिस बैंक डिजिटल बैंकिंग पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Private Banking",
                "authority": "Axis Bank Limited (Corporate Entity)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Axis Bank Account Holders"
                ],
                "eligibility": {
                        "en": [
                                "Active Axis Bank account holders."
                        ],
                        "bn": [
                                "অ্যাক্সিস ব্যাংক গ্রাহক।"
                        ],
                        "hi": [
                                "एक्सिस बैंक खाताधारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Login ID / Customer ID",
                                "Registered Mobile Number."
                        ],
                        "bn": [
                                "কাস্টমার আইডি ও মোবাইল।"
                        ],
                        "hi": [
                                "कस्टमर आईडी।"
                        ]
                },
                "application_fee": {
                        "en": "Free.",
                        "bn": "বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "24x7 online banking."
                        ],
                        "bn": [
                                "২৪x৭ অনলাইন ব্যাংকিং।"
                        ],
                        "hi": [
                                "24x7 बैंकिंग।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit axisbank.com and login via secure customer portal."
                        ],
                        "bn": [
                                "axisbank.com-এ গিয়ে নিরাপদে লগইন করুন।"
                        ],
                        "hi": [
                                "axisbank.com पर लॉगिन करें।"
                        ]
                },
                "official_homepage": "https://www.axisbank.com/",
                "official_apply_url": "https://www.axisbank.com/",
                "official_status_url": "https://www.axisbank.com/",
                "official_helpline": "1800 419 5959 (Toll Free)",
                "official_email": "customer.service@axisbank.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.axisbank.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "axis",
                        "axis bank",
                        "axis netbanking",
                        "অ্যাক্সিস ব্যাংক",
                        "एक्सिस बैंक"
                ]
        },
        {
                "service_id": "pvt-pnb-netbanking",
                "service_name": {
                        "en": "Punjab National Bank (PNB Internet Banking & PNB One)",
                        "bn": "পাঞ্জাব ন্যাশনাল ব্যাংক (PNB ইন্টারনেট ব্যাংকিং)",
                        "hi": "पंजाब नेशनल बैंक (PNB इंटरनेट बैंकिंग)"
                },
                "short_description": {
                        "en": "Official Punjab National Bank digital banking portal for savings accounts, DBT credit tracking, and e-statements.",
                        "bn": "পাঞ্জাব ন্যাশনাল ব্যাংকের ইন্টারনেট ব্যাংকিং ও স্টেটমেন্ট পোর্টাল।",
                        "hi": "पंजाब नेशनल बैंक इंटरनेट बैंकिंग और स्टेटमेंट।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Public Sector Banking",
                "authority": "Punjab National Bank (Public Sector Undertaking)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "PNB Account Holders"
                ],
                "eligibility": {
                        "en": [
                                "PNB account holders."
                        ],
                        "bn": [
                                "পিএনবি গ্রাহক।"
                        ],
                        "hi": [
                                "पीएनबी खाताधारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "User ID",
                                "Mobile OTP."
                        ],
                        "bn": [
                                "ইউজার আইডি ও ওটিপি।"
                        ],
                        "hi": [
                                "यूजर आईडी।"
                        ]
                },
                "application_fee": {
                        "en": "Free.",
                        "bn": "বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "DBT scheme support and 24x7 banking."
                        ],
                        "bn": [
                                "ডিবিটি সরকারি অনুদান গ্রহণ ও অনলাইন ব্যাংকিং।"
                        ],
                        "hi": [
                                "डीबीटी सहायता व बैंकिंग।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit pnbindia.in and login via Retail Internet Banking."
                        ],
                        "bn": [
                                "pnbindia.in-এ গিয়ে রিটেল ব্যাংকিংয়ে লগইন করুন।"
                        ],
                        "hi": [
                                "pnbindia.in पर लॉगिन करें।"
                        ]
                },
                "official_homepage": "https://www.pnbindia.in/",
                "official_apply_url": "https://netpnb.com/",
                "official_status_url": "https://netpnb.com/",
                "official_helpline": "1800 1800 / 1800 2021 (Toll Free)",
                "official_email": "care@pnb.co.in",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.pnbindia.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "pnb",
                        "punjab national bank",
                        "pnb netbanking",
                        "pnb one",
                        "পাঞ্জাব ন্যাশনাল ব্যাংক",
                        "पंजाब नेशनल बैंक"
                ]
        },
        {
                "service_id": "pvt-bob-netbanking",
                "service_name": {
                        "en": "Bank of Baroda (bob World & Baroda Connect)",
                        "bn": "ব্যাংক অফ বরোদা (Bank of Baroda নেটব্যাঙ্কিং)",
                        "hi": "बैंक ऑफ बड़ौदा (bob World इंटरनेट बैंकिंग)"
                },
                "short_description": {
                        "en": "Official Bank of Baroda digital banking portal for retail net banking, DBT subsidy credits, and account statements.",
                        "bn": "ব্যাংক অফ বরোদার অফিসিয়াল ইন্টারনেট ব্যাংকিং পোর্টাল।",
                        "hi": "बैंक ऑफ बड़ौदा इंटरनेट बैंकिंग व स्टेटमेंट पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Public Sector Banking",
                "authority": "Bank of Baroda (Public Sector Undertaking)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "BOB Account Holders"
                ],
                "eligibility": {
                        "en": [
                                "BOB account holders."
                        ],
                        "bn": [
                                "বিওবি গ্রাহক।"
                        ],
                        "hi": [
                                "बॉब खाताधारक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "User ID & Password."
                        ],
                        "bn": [
                                "ইউজার আইডি ও পাসওয়ার্ড।"
                        ],
                        "hi": [
                                "यूजर आईडी।"
                        ]
                },
                "application_fee": {
                        "en": "Free.",
                        "bn": "বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "24x7 online banking."
                        ],
                        "bn": [
                                "২৪x৭ লেনদেন।"
                        ],
                        "hi": [
                                "24x7 बैंकिंग।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit bankofbaroda.in and login via Baroda Connect."
                        ],
                        "bn": [
                                "bankofbaroda.in-এ গিয়ে লগইন করুন।"
                        ],
                        "hi": [
                                "bankofbaroda.in पर लॉगिन करें।"
                        ]
                },
                "official_homepage": "https://www.bankofbaroda.in/",
                "official_apply_url": "https://www.bobibanking.com/",
                "official_status_url": "https://www.bobibanking.com/",
                "official_helpline": "1800 5700 (Toll Free)",
                "official_email": "customersupport@bankofbaroda.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.bankofbaroda.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "bank of baroda",
                        "bob netbanking",
                        "bob world",
                        "ব্যাংক অফ বরোদা",
                        "बैंक ऑफ बड़ौदा"
                ]
        },
        {
                "service_id": "pvt-phonepe-payments",
                "service_name": {
                        "en": "PhonePe UPI & Digital Payments Portal",
                        "bn": "ফোনপে (PhonePe) ইউপিআই ও পেমেন্ট সার্ভিস",
                        "hi": "फोनपे (PhonePe) यूपीआई व डिजिटल भुगतान"
                },
                "short_description": {
                        "en": "Official PhonePe platform for zero-cost instant UPI money transfers, utility bill payments (electricity, gas, mobile recharge), and FASTag management.",
                        "bn": "ইউপিআই পেমেন্ট, বিদ্যুৎ বিল জমা ও মোবাইল রিচার্জের জনপ্রিয় ডিজিটাল প্ল্যাটফর্ম।",
                        "hi": "यूपीआई मनी ट्रांसफर, बिजली बिल और मोबाइल रिचार्ज पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Digital Payments",
                "authority": "PhonePe Private Limited (NPCI Regulated)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "All Smartphone Users",
                        "Shoppers",
                        "Citizens"
                ],
                "eligibility": {
                        "en": [
                                "Indian mobile number with linked bank account."
                        ],
                        "bn": [
                                "ব্যাংক সংযুক্ত মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "बैंक लिंक मोबाइल नंबर।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Debit Card / Aadhaar for initial UPI PIN setup."
                        ],
                        "bn": [
                                "ডেবিট কার্ড বা আধার।"
                        ],
                        "hi": [
                                "डेबिट कार्ड या आधार।"
                        ]
                },
                "application_fee": {
                        "en": "Free UPI transfers.",
                        "bn": "ইউপিআই ট্রান্সফার বিনামূল্যে।",
                        "hi": "निःशुल्क यूपीआई।"
                },
                "benefits": {
                        "en": [
                                "Instant money transfer to any bank in India."
                        ],
                        "bn": [
                                "যেকোনো ব্যাংকে তাৎক্ষণিক টাকা পাঠানো।"
                        ],
                        "hi": [
                                "तुरंत बैंक ट्रांसफर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Download PhonePe app from Google Play or App Store.",
                                "Link bank account via SMS verification and set 4/6-digit UPI PIN."
                        ],
                        "bn": [
                                "অ্যাপ ডাউনলোড করে ব্যাংক লিংক করুন।"
                        ],
                        "hi": [
                                "ऐप डाउनलोड कर बैंक लिंक करें।"
                        ]
                },
                "official_homepage": "https://www.phonepe.com/",
                "official_apply_url": "https://www.phonepe.com/",
                "official_status_url": "https://www.phonepe.com/",
                "official_helpline": "080-68727374 / 022-68727374",
                "official_email": "support@phonepe.com",
                "state": "All India",
                "availability": "App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.phonepe.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "phonepe",
                        "upi payment",
                        "bill payment",
                        "phone pe",
                        "ফোনপে",
                        "ইউপিআই",
                        "फोनपे"
                ],
                "scam_warning": {
                        "en": "Entering UPI PIN always DEBITS money from your account. You NEVER need to enter UPI PIN to receive money.",
                        "bn": "টাকা পাওয়ার জন্য কখনো ইউপিআই পিন দিতে হয় না। পিন দিলে টাকা কেটে যায়।",
                        "hi": "पैसे प्राप्त करने के लिए कभी यूपीआई पिन दर्ज न करें।"
                }
        },
        {
                "service_id": "pvt-google-pay-payments",
                "service_name": {
                        "en": "Google Pay India (GPay UPI Payments)",
                        "bn": "গুগল পে (Google Pay GPay ইউপিআই)",
                        "hi": "गूगल पे (Google Pay यूपीआई भुगतान)"
                },
                "short_description": {
                        "en": "Official Google Pay India UPI application for fast peer-to-peer money transfers, merchant QR scanning, and utility bill payments.",
                        "bn": "গুগল পে ইউপিআই—সহজে কিউআর কোড স্ক্যান ও দ্রুত টাকা পাঠানোর বিশ্বস্ত মাধ্যম।",
                        "hi": "गूगल पे यूपीआई—क्यूआर कोड स्कैनिंग और त्वरित मनी ट्रांसफर।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Digital Payments",
                "authority": "Google India Digital Services Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "All Smartphone Users"
                ],
                "eligibility": {
                        "en": [
                                "Active Indian bank account with debit card/Aadhaar."
                        ],
                        "bn": [
                                "সচল ভারতীয় ব্যাংক অ্যাকাউন্ট।"
                        ],
                        "hi": [
                                "भारतीय बैंक खाता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Bank Account Details & Mobile Number."
                        ],
                        "bn": [
                                "ব্যাংক অ্যাকাউন্ট ও মোবাইল।"
                        ],
                        "hi": [
                                "बैंक विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "Free UPI transfers.",
                        "bn": "বিনামূল্যে।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Bank-grade security with NPCI UPI framework."
                        ],
                        "bn": [
                                "নিরাপদ ইউপিআই লেনদেন।"
                        ],
                        "hi": [
                                "सुरक्षित यूपीआई भुगतान।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Install GPay, register mobile number, link bank account and set UPI PIN."
                        ],
                        "bn": [
                                "গুগল পে ইনস্টল করে ব্যাংক লিংক করুন।"
                        ],
                        "hi": [
                                "जीपे इंस्टॉल कर बैंक लिंक करें।"
                        ]
                },
                "official_homepage": "https://pay.google.com/about/",
                "official_apply_url": "https://pay.google.com/about/",
                "official_status_url": "https://pay.google.com/about/",
                "official_helpline": "1800-419-0157",
                "official_email": "support-in@google.com",
                "state": "All India",
                "availability": "App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://pay.google.com/about/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "google pay",
                        "gpay",
                        "upi transfer",
                        "গুগল পে",
                        "জিপে",
                        "गूगल पे"
                ]
        },
        {
                "service_id": "pvt-amazon-india-shopping",
                "service_name": {
                        "en": "Amazon India (E-Commerce & Digital Marketplace)",
                        "bn": "অ্যামাজন ইন্ডিয়া (Amazon India অনলাইন শপিং)",
                        "hi": "अमेज़न इंडिया (Amazon India ऑनलाइन शॉपिंग)"
                },
                "short_description": {
                        "en": "Official Amazon India portal for verified online shopping of books, electronics, home essentials, and educational study materials with customer buyer protection.",
                        "bn": "বই, ইলেকট্রনিক্স ও পড়াশোনার সামগ্রী কেনাকাটার নির্ভরযোগ্য অনলাইন শপিং পোর্টাল।",
                        "hi": "किताबें, इलेक्ट्रॉनिक्स और घरेलू सामान की ऑनलाइन खरीदारी पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "E-Commerce",
                "authority": "Amazon Seller Services Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Shoppers",
                        "Students",
                        "General Public"
                ],
                "eligibility": {
                        "en": [
                                "All citizens with valid delivery address."
                        ],
                        "bn": [
                                "সমস্ত নাগরিক।"
                        ],
                        "hi": [
                                "सभी नागरिक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Delivery Address & Mobile Number."
                        ],
                        "bn": [
                                "ঠিকানা ও মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "पता व मोबाइल।"
                        ]
                },
                "application_fee": {
                        "en": "Free account creation.",
                        "bn": "অ্যাকাউন্ট খোলা সম্পূর্ণ ফ্রি।",
                        "hi": "निःशुल्क खाता।"
                },
                "benefits": {
                        "en": [
                                "100% genuine purchase protection and easy return policy."
                        ],
                        "bn": [
                                "অরিজিনাল পণ্য ও সহজ রিটার্ন সুবিধা।"
                        ],
                        "hi": [
                                "खरीद सुरक्षा और आसान वापसी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit amazon.in, create account with mobile/email, and shop securely."
                        ],
                        "bn": [
                                "amazon.in-এ গিয়ে অ্যাকাউন্ট তৈরি করে কেনাকাটা করুন।"
                        ],
                        "hi": [
                                "amazon.in पर सुरक्षित खरीदारी करें।"
                        ]
                },
                "official_homepage": "https://www.amazon.in/",
                "official_apply_url": "https://www.amazon.in/",
                "official_status_url": "https://www.amazon.in/",
                "official_helpline": "1800 3000 9009 (Toll Free)",
                "official_email": "cis@amazon.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.amazon.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "amazon",
                        "amazon india",
                        "online shopping",
                        "books",
                        "electronics",
                        "অ্যামাজন",
                        "অনলাইন শপিং",
                        "अमेज़न"
                ]
        },
        {
                "service_id": "pvt-flipkart-shopping",
                "service_name": {
                        "en": "Flipkart Online Shopping Marketplace",
                        "bn": "ফ্লিপকার্ট (Flipkart অনলাইন শপিং)",
                        "hi": "फ्लिपकार्ट (Flipkart ऑनलाइन शॉपिंग)"
                },
                "short_description": {
                        "en": "Official Flipkart e-commerce portal for mobile phones, electronics, fashion, and competitive exam books with doorstep delivery across India.",
                        "bn": "মোবাইল, ইলেকট্রনিক্স, জামাকাপড় ও পরীক্ষার বই কেনার জনপ্রিয় অনলাইন শপিং পোর্টাল।",
                        "hi": "मोबाइल, इलेक्ट्रॉनिक्स, कपड़े और किताबों की ऑनलाइन खरीदारी।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "E-Commerce",
                "authority": "Flipkart Internet Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "General Public",
                        "Students"
                ],
                "eligibility": {
                        "en": [
                                "All consumers in India."
                        ],
                        "bn": [
                                "সমস্ত গ্রাহক।"
                        ],
                        "hi": [
                                "सभी उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mobile Number."
                        ],
                        "bn": [
                                "মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free account.",
                        "bn": "ফ্রি অ্যাকাউন্ট।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Fast delivery and wide merchant selection."
                        ],
                        "bn": [
                                "দ্রুত ডেলিভারি ও ক্যাশ অন ডেলিভারি সুবিধা।"
                        ],
                        "hi": [
                                "तेज डिलीवरी और आसान भुगतान।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit flipkart.com and browse verified products."
                        ],
                        "bn": [
                                "flipkart.com-এ গিয়ে কেনাকাটা করুন।"
                        ],
                        "hi": [
                                "flipkart.com पर खरीदारी करें।"
                        ]
                },
                "official_homepage": "https://www.flipkart.com/",
                "official_apply_url": "https://www.flipkart.com/",
                "official_status_url": "https://www.flipkart.com/",
                "official_helpline": "1800 202 9898 (Toll Free)",
                "official_email": "support@flipkart.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.flipkart.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "flipkart",
                        "flipkart shopping",
                        "online books",
                        "ফ্লিপকার্ট",
                        "অনলাইন কেনাকাটা",
                        "फ्लिपकार्ट"
                ]
        },
        {
                "service_id": "pvt-meesho-shopping",
                "service_name": {
                        "en": "Meesho (Affordable Fashion & Reselling Marketplace)",
                        "bn": "মিশো (Meesho বাজেট শপিং প্ল্যাটফর্ম)",
                        "hi": "मीशो (Meesho बजट शॉपिंग प्लेटफॉर्म)"
                },
                "short_description": {
                        "en": "Official Meesho platform for affordable fashion, household items, and direct-from-manufacturer products across India.",
                        "bn": "বাজেট ফ্রেন্ডলি জামাকাপড় ও গৃহস্থালির পণ্যের অনলাইন প্ল্যাটফর্ম।",
                        "hi": "किफायती कपड़े और घरेलू सामान का ऑनलाइन प्लेटफॉर्म।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "E-Commerce",
                "authority": "Fashnear Technologies Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Budget Shoppers",
                        "Micro-Entrepreneurs"
                ],
                "eligibility": {
                        "en": [
                                "All shoppers."
                        ],
                        "bn": [
                                "সমস্ত গ্রাহক।"
                        ],
                        "hi": [
                                "सभी ग्राहक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mobile Number."
                        ],
                        "bn": [
                                "মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Low-cost items with free delivery across pin codes."
                        ],
                        "bn": [
                                "বিনামূল্যে হোম ডেলিভারি ও কম দামে পণ্য।"
                        ],
                        "hi": [
                                "कम कीमत और मुफ्त डिलीवरी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit meesho.com or app."
                        ],
                        "bn": [
                                "meesho.com ভিজিট করুন।"
                        ],
                        "hi": [
                                "meesho.com पर जाएं।"
                        ]
                },
                "official_homepage": "https://www.meesho.com/",
                "official_apply_url": "https://www.meesho.com/",
                "official_status_url": "https://www.meesho.com/",
                "official_helpline": "080-61799600",
                "official_email": "help@meesho.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.meesho.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "meesho",
                        "meesho shopping",
                        "budget clothes",
                        "মিশো",
                        "मीशो"
                ]
        },
        {
                "service_id": "pvt-myntra-fashion",
                "service_name": {
                        "en": "Myntra (Fashion & Lifestyle E-Commerce)",
                        "bn": "মিন্ট্রা (Myntra ফ্যাশন ও লাইফস্টাইল)",
                        "hi": "मिंत्रा (Myntra फैशन व लाइफस्टाइल)"
                },
                "short_description": {
                        "en": "Official Myntra portal for genuine branded apparel, footwear, accessories, and beauty products with verified brand authenticity.",
                        "bn": "ব্র্যান্ডেড পোশাক, জুতো ও লাইফস্টাইল সামগ্রীর অনলাইন ফ্যাশন স্টোর।",
                        "hi": "ब्रांडेड कपड़े, जूते और फैशन उत्पादों का ऑनलाइन स्टोर।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Fashion E-Commerce",
                "authority": "Myntra Designs Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Fashion Shoppers",
                        "Youth"
                ],
                "eligibility": {
                        "en": [
                                "All shoppers."
                        ],
                        "bn": [
                                "সমস্ত গ্রাহক।"
                        ],
                        "hi": [
                                "सभी ग्राहक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mobile Number."
                        ],
                        "bn": [
                                "মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free account.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "100% original brand guarantee."
                        ],
                        "bn": [
                                "১০০% অরিজিনাল ব্র্যান্ডের নিশ্চয়তা।"
                        ],
                        "hi": [
                                "100% मूल ब्रांड गारंटी।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit myntra.com and shop."
                        ],
                        "bn": [
                                "myntra.com ভিজিট করুন।"
                        ],
                        "hi": [
                                "myntra.com पर जाएं।"
                        ]
                },
                "official_homepage": "https://www.myntra.com/",
                "official_apply_url": "https://www.myntra.com/",
                "official_status_url": "https://www.myntra.com/",
                "official_helpline": "080-61561999",
                "official_email": "support@myntra.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.myntra.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "myntra",
                        "myntra fashion",
                        "clothes shopping",
                        "মিন্ট্রা",
                        "মিশ্ট্রা",
                        "मिंत्रा"
                ]
        },
        {
                "service_id": "pvt-ajio-shopping",
                "service_name": {
                        "en": "AJIO (Reliance Digital Fashion Marketplace)",
                        "bn": "আজিও (AJIO রিলায়েন্স ডিজিটাল ফ্যাশন)",
                        "hi": "आजियो (AJIO रिलायंस फैशन)"
                },
                "short_description": {
                        "en": "Official Reliance Retail AJIO online shopping portal for trendy apparel, international brands, and ethnic wear.",
                        "bn": "রিলায়েন্স রিটেলের অফিসিয়াল অনলাইন ফ্যাশন ও ট্রেন্ডি পোশাকের প্ল্যাটফর্ম।",
                        "hi": "रिलायंस रिटेल का आधिकारिक ऑनलाइन फैशन और वस्त्र स्टोर।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Fashion E-Commerce",
                "authority": "Reliance Retail Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Fashion Consumers",
                        "Youth"
                ],
                "eligibility": {
                        "en": [
                                "All consumers."
                        ],
                        "bn": [
                                "সমস্ত গ্রাহক।"
                        ],
                        "hi": [
                                "सभी उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mobile Number."
                        ],
                        "bn": [
                                "মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free account.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Exclusive trends with easy returns."
                        ],
                        "bn": [
                                "সহজ রিটার্ন ও ব্র্যান্ডেড কালেকশন।"
                        ],
                        "hi": [
                                "आसान वापसी और ब्रांडेड कपड़े।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit ajio.com."
                        ],
                        "bn": [
                                "ajio.com ভিজিট করুন।"
                        ],
                        "hi": [
                                "ajio.com पर जाएं।"
                        ]
                },
                "official_homepage": "https://www.ajio.com/",
                "official_apply_url": "https://www.ajio.com/",
                "official_status_url": "https://www.ajio.com/",
                "official_helpline": "1800 889 9991",
                "official_email": "customercare@ajio.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.ajio.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "ajio",
                        "reliance ajio",
                        "clothes",
                        "আজিও",
                        "আজীয়",
                        "आजियो"
                ]
        },
        {
                "service_id": "pvt-linkedin-careers",
                "service_name": {
                        "en": "LinkedIn (Professional Network & Career Search)",
                        "bn": "লিঙ্কডইন (LinkedIn প্রফেশনাল নেটওয়ার্ক ও ক্যারিয়ার)",
                        "hi": "लिंक्डइन (LinkedIn पेशेवर नेटवर्क और नौकरियां)"
                },
                "short_description": {
                        "en": "Official LinkedIn global professional networking platform to build verified work profiles, connect with industry recruiters, and apply for corporate & tech jobs.",
                        "bn": "পেশাদার সিভি তৈরি, কর্পোরেট চাকরি আবেদন ও নেটওয়ার্কিং এর বিশ্বের সর্ববৃহৎ প্ল্যাটফর্ম।",
                        "hi": "पेशेवर सीवी निर्माण, कॉर्पोरेट नौकरी आवेदन और नेटवर्किंग प्लेटफॉर्म।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "subcategory": "Professional Networking",
                "authority": "LinkedIn Corporation (Microsoft)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Professionals",
                        "Graduates",
                        "Job Seekers",
                        "Students"
                ],
                "eligibility": {
                        "en": [
                                "Individuals aged 16+ building a professional career."
                        ],
                        "bn": [
                                "চাকরিপ্রার্থী ও পেশাদারবৃন্দ।"
                        ],
                        "hi": [
                                "पेशेवर और स्नातक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Email Address / Phone Number",
                                "Resume / Work History."
                        ],
                        "bn": [
                                "ইমেল ও সিভি (CV)।"
                        ],
                        "hi": [
                                "ईमेल और बायोडाटा।"
                        ]
                },
                "application_fee": {
                        "en": "Free basic profile and job applications.",
                        "bn": "ফ্রি প্রোফাইল ও চাকরির আবেদন।",
                        "hi": "निःशुल्क बुनियादी खाता।"
                },
                "benefits": {
                        "en": [
                                "Direct reach to hiring managers and recruiters across Fortune 500 companies."
                        ],
                        "bn": [
                                "সরাসরি রিক্রুটারদের সাথে যোগাযোগ ও চাকরির সুযোগ।"
                        ],
                        "hi": [
                                "कंपनियों के रिक्रूटर्स से सीधा संपर्क।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit linkedin.com, create verified profile, upload resume, and search 'Jobs'."
                        ],
                        "bn": [
                                "linkedin.com-এ প্রোফাইল বানিয়ে চাকরির জন্য আবেদন করুন।"
                        ],
                        "hi": [
                                "linkedin.com पर प्रोफाइल बनाएं और नौकरियों के लिए आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.linkedin.com/",
                "official_apply_url": "https://www.linkedin.com/jobs/",
                "official_status_url": "https://www.linkedin.com/",
                "official_helpline": "Online Help Center (linkedin.com/help)",
                "official_email": "support@linkedin.com",
                "state": "All India / Global",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.linkedin.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "linkedin",
                        "corporate jobs",
                        "software jobs",
                        "resume builder",
                        "লিঙ্কডইন",
                        "বেসরকারি চাকরি",
                        "लिंक्डइन"
                ]
        },
        {
                "service_id": "pvt-naukri-portal",
                "service_name": {
                        "en": "Naukri.com (India's Largest Job Portal)",
                        "bn": "নকরি ডট কম (Naukri.com চাকরি সন্ধান পোর্টাল)",
                        "hi": "नौकरी.कॉम (Naukri.com जॉब पोर्टल)"
                },
                "short_description": {
                        "en": "Official Info Edge Naukri.com portal for job seekers to create free resumes, receive job recruiter calls, and apply for private sector vacancies across India.",
                        "bn": "ভারতের বৃহত্তম বেসরকারি চাকরি সন্ধান পোর্টাল—বায়োডাটা আপলোড ও কর্পোরেট চাকরির সন্ধান।",
                        "hi": "भारत का प्रमुख निजी नौकरी पोर्टल—बायोडाटा अपलोड और कॉर्पोरेट नौकरियां।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "subcategory": "Private Jobs",
                "authority": "Info Edge (India) Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Job Seekers",
                        "Freshers",
                        "Experienced Professionals"
                ],
                "eligibility": {
                        "en": [
                                "All job seekers."
                        ],
                        "bn": [
                                "সমস্ত চাকরিপ্রার্থী।"
                        ],
                        "hi": [
                                "सभी नौकरी चाहने वाले।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Resume / CV (PDF/DOCX)",
                                "Educational details."
                        ],
                        "bn": [
                                "সিভি (CV) ও শিক্ষাগত যোগ্যতা।"
                        ],
                        "hi": [
                                "बायोडाटा और शैक्षणिक विवरण।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Candidate Registration & Job Applications.",
                        "bn": "চাকরির আবেদন সম্পূর্ণ বিনামূল্যে।",
                        "hi": "उम्मीदवारों के लिए निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct visibility to over 50,000+ active recruiters."
                        ],
                        "bn": [
                                "হাজার হাজার রিক্রুটারের কাছে সরাসরি সিভি পৌঁছে দেওয়ার সুযোগ।"
                        ],
                        "hi": [
                                "हजारों कंपनियों में सीधी नौकरी के अवसर।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit naukri.com, click 'Register for Free', upload resume, and apply to matched jobs."
                        ],
                        "bn": [
                                "naukri.com-এ সিভি আপলোড করে সরাসরি আবেদন করুন।"
                        ],
                        "hi": [
                                "naukri.com पर बायोडाटा अपलोड करें और आवेदन करें।"
                        ]
                },
                "official_homepage": "https://www.naukri.com/",
                "official_apply_url": "https://www.naukri.com/",
                "official_status_url": "https://www.naukri.com/",
                "official_helpline": "1800-102-5558 (Toll Free)",
                "official_email": "support@naukri.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.naukri.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "naukri",
                        "naukri.com",
                        "private jobs",
                        "fresher jobs",
                        "resume upload",
                        "নকরি",
                        "বেসরকারি কাজ",
                        "नौकरी"
                ]
        },
        {
                "service_id": "pvt-indeed-india-jobs",
                "service_name": {
                        "en": "Indeed India (Global Job Search Engine)",
                        "bn": "ইনডিড ইন্ডিয়া (Indeed India চাকরি অনুসন্ধান)",
                        "hi": "इंडीड इंडिया (Indeed India जॉब सर्च)"
                },
                "short_description": {
                        "en": "Official Indeed India job aggregator for discovering local city jobs, remote work, IT jobs, and office vacancies with one-click resume application.",
                        "bn": "লোকাল ও রিমোট বেসরকারি চাকরির সন্ধান ও এক ক্লিকে আবেদনের পোর্টাল।",
                        "hi": "स्थानीय और वर्क फ्रॉम होम नौकरियों की खोज व आवेदन पोर्टल।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "subcategory": "Private Jobs",
                "authority": "Indeed India Operations Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Job Seekers",
                        "Remote Workers",
                        "Freshers"
                ],
                "eligibility": {
                        "en": [
                                "All job seekers."
                        ],
                        "bn": [
                                "সমস্ত চাকরিপ্রার্থী।"
                        ],
                        "hi": [
                                "सभी नौकरी चाहने वाले।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Resume (PDF/DOC)."
                        ],
                        "bn": [
                                "সিভি।"
                        ],
                        "hi": [
                                "बायोडाटा।"
                        ]
                },
                "application_fee": {
                        "en": "Free.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct company reviews and salary insights."
                        ],
                        "bn": [
                                "কোম্পানির রিভিউ ও বেতন যাচাইয়ের সুবিধা।"
                        ],
                        "hi": [
                                "कंपनी समीक्षा और वेतन विवरण।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit in.indeed.com, search by job title and city (e.g. Kolkata, Mumbai)."
                        ],
                        "bn": [
                                "in.indeed.com-এ গিয়ে শহরের নাম দিয়ে চাকরি খুঁজুন।"
                        ],
                        "hi": [
                                "in.indeed.com पर शहर और पद के अनुसार खोजें।"
                        ]
                },
                "official_homepage": "https://in.indeed.com/",
                "official_apply_url": "https://in.indeed.com/",
                "official_status_url": "https://in.indeed.com/",
                "official_helpline": "Online Help Center",
                "official_email": "support-in@indeed.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://in.indeed.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "indeed",
                        "indeed india",
                        "job search",
                        "remote job",
                        "ইনডিড",
                        "চাকরি খোঁজা",
                        "इंडीड"
                ]
        },
        {
                "service_id": "pvt-internshala-internships",
                "service_name": {
                        "en": "Internshala (Paid Student Internships & Entry-Level Jobs)",
                        "bn": "ইন্টার্নশালা (Internshala পেইড ইন্টার্নশিপ ও চাকরি)",
                        "hi": "इंटर्नशाला (Internshala पेड इंटर्नशिप व नौकरियां)"
                },
                "short_description": {
                        "en": "Official Internshala platform connecting college students and freshers with verified paid internships, work-from-home gigs, and early-career jobs with monthly stipends.",
                        "bn": "কলেজ পড়ুয়া ও ফ্রেশারদের জন্য মাসিক স্টাইপেন্ড সহ ভেরিফায়েড পেইড ইন্টার্নশিপের বৃহত্তম ভারতীয় প্ল্যাটফর্ম।",
                        "hi": "कॉलेज छात्रों और नए स्नातकों के लिए मासिक वजीफे के साथ सत्यापित पेड इंटर्नशिप पोर्टल।"
                },
                "category": "internships",
                "category_name": {
                        "en": "Government & AICTE Internships",
                        "bn": "ইন্টার্নশিপ ও শিক্ষানবিশী",
                        "hi": "इंटर्नशिप और प्रशिक्षण"
                },
                "subcategory": "Student Internships",
                "authority": "Scholiverse Educare Private Limited (AICTE Partner)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "College Students",
                        "Fresh Graduates",
                        "Career Starters"
                ],
                "eligibility": {
                        "en": [
                                "Enrolled college students or recent graduates from any stream."
                        ],
                        "bn": [
                                "কলেজ পড়ুয়া বা সদ্য পাশ করা গ্র্যাজুয়েট।"
                        ],
                        "hi": [
                                "कॉलेज छात्र और नए स्नातक।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Student College Details",
                                "Resume / Project links (GitHub/Portfolio)."
                        ],
                        "bn": [
                                "কলেজ ডিটেলস ও সিভি।"
                        ],
                        "hi": [
                                "कॉलेज विवरण व बायोडाटा।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Student Account and Applications.",
                        "bn": "ছাত্রদের জন্য আবেদন সম্পূর্ণ বিনামূল্যে।",
                        "hi": "छात्रों के लिए 100% निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Guaranteed stipend on all non-NGO internships (typically ₹5,000–₹25,000/month).",
                                "Official Certificate of Completion."
                        ],
                        "bn": [
                                "মাসিক নিশ্চিত স্টাইপেন্ড ও ইন্টার্নশিপ সার্টিফিকেট।"
                        ],
                        "hi": [
                                "मासिक वजीफा और पूर्णता प्रमाण पत्र।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit internshala.com, register as student, build profile, and apply with cover letter."
                        ],
                        "bn": [
                                "internshala.com-এ প্রোফাইল তৈরি করে স্টাইপেন্ড সহ ইন্টার্নশিপে আবেদন করুন।"
                        ],
                        "hi": [
                                "internshala.com पर छात्र प्रोफाइल बनाएं और आवेदन करें।"
                        ]
                },
                "official_homepage": "https://internshala.com/",
                "official_apply_url": "https://internshala.com/internships/",
                "official_status_url": "https://internshala.com/",
                "official_helpline": "0124-4367427",
                "official_email": "support@internshala.com",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://internshala.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "internshala",
                        "paid internship",
                        "work from home internship",
                        "college internship",
                        "ইন্টার্নশালা",
                        "পেইড ইন্টার্নশিপ",
                        "স্টাইপেন্ড",
                        "इंटर्नशाला",
                        "इंटर्नशिप"
                ]
        },
        {
                "service_id": "pvt-apna-career-app",
                "service_name": {
                        "en": "Apna (Local City Jobs & Skill Community)",
                        "bn": "আপনা (Apna লোকাল চাকরি ও ডেলিভারি জবস)",
                        "hi": "अपना (Apna स्थानीय नौकरियां और रोजगार)"
                },
                "short_description": {
                        "en": "Official Apna job platform connecting local job seekers directly with HR recruiters for sales, delivery, telecalling, accounts, and technician roles without middleman charges.",
                        "bn": "কোনো দালাল ছাড়াই সরাসরি এইচআর-এর সাথে ফোনে কথা বলে লোকাল চাকরির আবেদন।",
                        "hi": "बिना किसी बिचौलिए के सीधे एचआर से बात कर स्थानीय नौकरियां पाने का पोर्टल।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "subcategory": "Local Jobs",
                "authority": "Apna Technologies Private Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "10th/12th Pass",
                        "Graduates",
                        "Technicians",
                        "Drivers",
                        "Office Staff"
                ],
                "eligibility": {
                        "en": [
                                "Anyone looking for local employment in tier 1/2/3 cities."
                        ],
                        "bn": [
                                "চাকরিপ্রার্থী যেকোনো নাগরিক।"
                        ],
                        "hi": [
                                "स्थानीय नौकरी चाहने वाले।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Mobile Number & Basic Profile."
                        ],
                        "bn": [
                                "মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "मोबाइल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "100% Free Job Applications (Zero recruitment fees).",
                        "bn": "সম্পূর্ণ বিনামূল্যে আবেদন।",
                        "hi": "100% निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct HR calling and same-day interview scheduling."
                        ],
                        "bn": [
                                "সরাসরি ইন্টারভিউ শিডিউলিং।"
                        ],
                        "hi": [
                                "सीधे एचआर से साक्षात्कार।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit apna.co or download Apna app to find local jobs."
                        ],
                        "bn": [
                                "apna.co থেকে লোকাল চাকরি খুঁজুন।"
                        ],
                        "hi": [
                                "apna.co पर स्थानीय नौकरियां खोजें।"
                        ]
                },
                "official_homepage": "https://apna.co/",
                "official_apply_url": "https://apna.co/",
                "official_status_url": "https://apna.co/",
                "official_helpline": "Online Help Center (apna.co)",
                "official_email": "support@apna.co",
                "state": "All India",
                "availability": "App + Web",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://apna.co/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "apna",
                        "apna app",
                        "local jobs",
                        "driver jobs",
                        "delivery jobs",
                        "আপনা",
                        "লোকাল চাকরি",
                        "अपना ऐप"
                ]
        },
        {
                "service_id": "pvt-foundit-career-search",
                "service_name": {
                        "en": "Foundit India (Formerly Monster India Careers)",
                        "bn": "ফাউন্ডইট (Foundit ইন্ডিয়া — পূর্ববর্তী Monster)",
                        "hi": "फाउंडइट (Foundit इंडिया — पूर्व में Monster)"
                },
                "short_description": {
                        "en": "Official Foundit talent platform for smart AI job matching, resume scoring, and enterprise employment applications across India and Southeast Asia.",
                        "bn": "স্মার্ট এআই ম্যাচিং এর মাধ্যমে বেসরকারি ও আইটি চাকরির সন্ধান পোর্টাল।",
                        "hi": "एआई जॉब मैचिंग और करियर अवसर पोर्टल।"
                },
                "category": "private-jobs",
                "category_name": {
                        "en": "Private Jobs & Career Portals",
                        "bn": "বেসরকারি চাকরি ও ক্যারিয়ার",
                        "hi": "निजी नौकरियां और करियर"
                },
                "subcategory": "Private Jobs",
                "authority": "Monster.com India Private Limited (Foundit)",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Experienced Professionals",
                        "Tech Graduates"
                ],
                "eligibility": {
                        "en": [
                                "All job seekers."
                        ],
                        "bn": [
                                "সমস্ত চাকরিপ্রার্থী।"
                        ],
                        "hi": [
                                "सभी नौकरी चाहने वाले।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Resume (PDF/DOCX)."
                        ],
                        "bn": [
                                "সিভি।"
                        ],
                        "hi": [
                                "बायोडाटा।"
                        ]
                },
                "application_fee": {
                        "en": "Free candidate account.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "AI resume parsing and premium employer matching."
                        ],
                        "bn": [
                                "এআই নির্ভর সিভি ম্যাচিং।"
                        ],
                        "hi": [
                                "एआई आधारित जॉब मैचिंग।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit foundit.in and upload resume."
                        ],
                        "bn": [
                                "foundit.in ভিজিট করুন।"
                        ],
                        "hi": [
                                "foundit.in पर जाएं।"
                        ]
                },
                "official_homepage": "https://www.foundit.in/",
                "official_apply_url": "https://www.foundit.in/",
                "official_status_url": "https://www.foundit.in/",
                "official_helpline": "1800-419-6666",
                "official_email": "support@foundit.in",
                "state": "All India",
                "availability": "Online + App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.foundit.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "foundit",
                        "monster india",
                        "job vacancy",
                        "ফাউন্ডইট",
                        "চাকরি পোর্টাল",
                        "फाउंडइट"
                ]
        },
        {
                "service_id": "pvt-jio-telecom-services",
                "service_name": {
                        "en": "Reliance Jio (Jio Prepaid, Postpaid & JioFiber Broadband)",
                        "bn": "রিলায়েন্স জিও (Jio রিচার্জ, ফাইবার ব্রডব্যান্ড ও পোর্টাল)",
                        "hi": "रिलायंस जियो (Jio रिचार्ज, फाइबर ब्रॉडबैंड)"
                },
                "short_description": {
                        "en": "Official Reliance Jio portal for online 5G mobile recharges, eSIM activation, JioFiber / AirFiber home broadband connections, and bill payments.",
                        "bn": "জিও ৫জি রিচার্জ, ই-সিম ও জিওফাইবার ব্রডব্যান্ড কানেকশনের অফিসিয়াল পোর্টাল।",
                        "hi": "जियो 5जी रिचार्ज, ई-सिम और फाइबर ब्रॉडबैंड पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी ডিজিটাল सेवाएं"
                },
                "subcategory": "Telecom & Internet",
                "authority": "Reliance Jio Infocomm Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Jio Subscribers",
                        "Broadband Users"
                ],
                "eligibility": {
                        "en": [
                                "All consumers."
                        ],
                        "bn": [
                                "সমস্ত গ্রাহক।"
                        ],
                        "hi": [
                                "सभी उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Jio Mobile Number / Broadband Service ID."
                        ],
                        "bn": [
                                "জিও মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "जियो नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free portal access (recharge plan costs as selected).",
                        "bn": "পোর্টাল ফ্রি।",
                        "hi": "निःशुल्क पोर्टल।"
                },
                "benefits": {
                        "en": [
                                "Instant zero-convenience-fee recharges and live data balance."
                        ],
                        "bn": [
                                "জিরো কনভেনিয়েন্স ফি দিয়ে তাৎক্ষণিক রিচার্জ।"
                        ],
                        "hi": [
                                "तुरंत रिचार्ज व डेटा बैलेंस जांच।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit jio.com, enter Jio number, and recharge via UPI or NetBanking."
                        ],
                        "bn": [
                                "jio.com-এ গিয়ে নম্বর দিয়ে রিচার্জ করুন।"
                        ],
                        "hi": [
                                "jio.com पर जाकर रिचार्ज करें।"
                        ]
                },
                "official_homepage": "https://www.jio.com/",
                "official_apply_url": "https://www.jio.com/selfcare/recharge/mobility/",
                "official_status_url": "https://www.jio.com/",
                "official_helpline": "198 / 1991 (From Jio) or 1800 889 9999",
                "official_email": "care@jio.com",
                "state": "All India",
                "availability": "Online + MyJio App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.jio.com/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "jio",
                        "jio recharge",
                        "jio fiber",
                        "jio 5g",
                        "jio airfiber",
                        "myjio",
                        "জিও",
                        "জিও রিচার্জ",
                        "জিও ফাইবার",
                        "जियो",
                        "जियो रिचार्ज"
                ]
        },
        {
                "service_id": "pvt-airtel-telecom-services",
                "service_name": {
                        "en": "Bharti Airtel (Airtel Prepaid, Postpaid & Xstream Fiber)",
                        "bn": "ভারতী এয়ারটেল (Airtel রিচার্জ ও এক্সস্ট্রিম ফাইবার)",
                        "hi": "भारती एयरटेल (Airtel रिचार्ज व एक्सट्रीम फाइबर)"
                },
                "short_description": {
                        "en": "Official Bharti Airtel portal for 5G mobile recharges, postpaid bill clearance, DTH top-up, and Airtel Xstream high-speed fiber broadband connections.",
                        "bn": "এয়ারটেল ৫জি রিচার্জ, ডিটিএইচ এবং এক্সস্ট্রিম ফাইবার ব্রডব্যান্ড বিল পেমেন্ট পোর্টাল।",
                        "hi": "एयरटेल 5जी मोबाइल रिचार्ज, डीटीएच और फाइबर ब्रॉडबैंड पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Telecom & Internet",
                "authority": "Bharti Airtel Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Airtel Subscribers"
                ],
                "eligibility": {
                        "en": [
                                "All consumers."
                        ],
                        "bn": [
                                "সমস্ত গ্রাহক।"
                        ],
                        "hi": [
                                "सभी उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Airtel Mobile Number / Account ID."
                        ],
                        "bn": [
                                "এয়ারটেল নম্বর।"
                        ],
                        "hi": [
                                "एयरटेल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free portal access.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct instant recharge with bank cashback offers."
                        ],
                        "bn": [
                                "তাৎক্ষণিক রিচার্জ ও ক্যাশব্যাক সুবিধা।"
                        ],
                        "hi": [
                                "त्वरित रिचार्ज व कैशबैक।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit airtel.in, enter Airtel number, choose pack, and pay online."
                        ],
                        "bn": [
                                "airtel.in-এ গিয়ে রিচার্জ সম্পন্ন করুন।"
                        ],
                        "hi": [
                                "airtel.in पर जाकर रिचार्ज करें।"
                        ]
                },
                "official_homepage": "https://www.airtel.in/",
                "official_apply_url": "https://www.airtel.in/recharge-online",
                "official_status_url": "https://www.airtel.in/",
                "official_helpline": "121 / 198 (From Airtel) or 1800 103 4444",
                "official_email": "121@in.airtel.com",
                "state": "All India",
                "availability": "Online + Thanks App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.airtel.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": true,
                "intent_tags": [
                        "airtel",
                        "airtel recharge",
                        "xstream fiber",
                        "airtel thanks",
                        "এয়ারটেল",
                        "এয়ারটেল রিচার্জ",
                        "एयरटेल",
                        "एयरटेल रिचार्ज"
                ]
        },
        {
                "service_id": "pvt-vi-telecom-services",
                "service_name": {
                        "en": "Vodafone Idea (Vi Prepaid & Postpaid Services)",
                        "bn": "ভোডাফোন আইডিয়া (Vi রিচার্জ ও পোস্টপেইড পোর্টাল)",
                        "hi": "वोडाफोन आइडिया (Vi रिचार्ज व पोस्टपेड पोर्टल)"
                },
                "short_description": {
                        "en": "Official Vi (Vodafone Idea) portal for instant online prepaid recharges, international roaming packs, hero unlimited data plans, and postpaid bill payments.",
                        "bn": "ভোডাফোন আইডিয়া (Vi) মোবাইল রিচার্জ ও বিল পেমেন্টের অফিসিয়াল পোর্টাল।",
                        "hi": "वोडाफोन आइडिया (Vi) मोबाइल रिचार्ज और बिल भुगतान पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Telecom & Internet",
                "authority": "Vodafone Idea Limited",
                "government_level": "Private",
                "service_type": "Private",
                "target_users": [
                        "Vi Mobile Subscribers"
                ],
                "eligibility": {
                        "en": [
                                "Vi subscribers."
                        ],
                        "bn": [
                                "ভি গ্রাহক।"
                        ],
                        "hi": [
                                "वीआई उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "Vi Mobile Number."
                        ],
                        "bn": [
                                "ভি মোবাইল নম্বর।"
                        ],
                        "hi": [
                                "वीआई नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free portal.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Direct online discounts and zero transaction surcharge."
                        ],
                        "bn": [
                                "জিরো ট্রানজাকশন ফিতে দ্রুত রিচার্জ।"
                        ],
                        "hi": [
                                "तुरंत ऑनलाइन रिचार्ज।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit myvi.in, enter 10-digit number, and pay securely."
                        ],
                        "bn": [
                                "myvi.in-এ গিয়ে রিচার্জ করুন।"
                        ],
                        "hi": [
                                "myvi.in पर रिचार्ज करें।"
                        ]
                },
                "official_homepage": "https://www.myvi.in/",
                "official_apply_url": "https://www.myvi.in/prepaid/online-mobile-recharge",
                "official_status_url": "https://www.myvi.in/",
                "official_helpline": "199 (From Vi) or 1800 120 1111",
                "official_email": "customercare@vodafoneidea.com",
                "state": "All India",
                "availability": "Online + Vi App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.myvi.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "vi",
                        "vodafone idea",
                        "vi recharge",
                        "vodafone recharge",
                        "ভি",
                        "ভোডাফোন রিচার্জ",
                        "वीआई",
                        "वोडाफोन"
                ]
        },
        {
                "service_id": "pvt-bsnl-telecom-services",
                "service_name": {
                        "en": "BSNL (Bharat Sanchar Nigam Limited — Mobile & Bharat Fibre)",
                        "bn": "বিএসএনএল (BSNL রিচার্জ ও ভারত ফাইবার ব্রডব্যান্ড)",
                        "hi": "बीएसएनएल (BSNL रिचार्ज व भारत फाइबर ब्रॉडबैंड)"
                },
                "short_description": {
                        "en": "Official BSNL public sector telecom portal for online 4G/3G prepaid recharge, landline billing, Bharat Fibre FTTH broadband booking, and corporate leased lines.",
                        "bn": "ভারত সঞ্চার নিগম লিমিটেডের (BSNL) অনলাইন মোবাইল রিচার্জ ও ভারত ফাইবার ব্রডব্যান্ড পেমেন্ট পোর্টাল।",
                        "hi": "बीएसएनएल मोबाइल रिचार्ज, लैंडलाइन बिल और भारत फाइबर ब्रॉडबैंड पोर्टल।"
                },
                "category": "private-digital",
                "category_name": {
                        "en": "Essential Private Digital Tools",
                        "bn": "প্রয়োজনীয় বেসরকারি ডিজিটাল সেবা",
                        "hi": "आवश्यक निजी डिजिटल सेवाएं"
                },
                "subcategory": "Public Sector Telecom",
                "authority": "Bharat Sanchar Nigam Limited (Government of India Enterprise)",
                "government_level": "Central",
                "service_type": "Telecom & Internet",
                "target_users": [
                        "BSNL Mobile & Landline Subscribers",
                        "Broadband Users"
                ],
                "eligibility": {
                        "en": [
                                "All BSNL subscribers."
                        ],
                        "bn": [
                                "বিএসএনএল গ্রাহক।"
                        ],
                        "hi": [
                                "बीएसएनएल उपभोक्ता।"
                        ]
                },
                "required_documents": {
                        "en": [
                                "BSNL Mobile Number / Landline STD & Phone Number."
                        ],
                        "bn": [
                                "বিএসএনএল নম্বর।"
                        ],
                        "hi": [
                                "बीएसएनएल नंबर।"
                        ]
                },
                "application_fee": {
                        "en": "Free portal access.",
                        "bn": "ফ্রি।",
                        "hi": "निःशुल्क।"
                },
                "benefits": {
                        "en": [
                                "Highly affordable state-owned telecom tariff plans across rural and urban India."
                        ],
                        "bn": [
                                "সাশ্রয়ী সরকারি টেলিকম প্ল্যান ও ওয়াইড কভারেজ।"
                        ],
                        "hi": [
                                "किफायती सरकारी टेलीकॉम प्लान।"
                        ]
                },
                "process_steps": {
                        "en": [
                                "Visit portal.bsnl.in or bsnl.co.in to recharge or pay landline/FTTH bills online."
                        ],
                        "bn": [
                                "portal.bsnl.in-এ গিয়ে অনলাইন রিচার্জ সম্পন্ন করুন।"
                        ],
                        "hi": [
                                "portal.bsnl.in पर जाकर ऑनलाइन बिल भुगतान करें।"
                        ]
                },
                "official_homepage": "https://www.bsnl.co.in/",
                "official_apply_url": "https://portal.bsnl.in/",
                "official_status_url": "https://portal.bsnl.in/",
                "official_helpline": "1800-180-1503 / 1500 (Toll Free)",
                "official_email": "portalhelpdesk@bsnl.co.in",
                "state": "All India",
                "availability": "Online + BSNL Selfcare App",
                "active_status": true,
                "verification_status": "officially_verified",
                "source_url": "https://www.bsnl.co.in/",
                "last_verified": "15 Sep 2026",
                "is_popular": false,
                "intent_tags": [
                        "bsnl",
                        "bsnl recharge",
                        "bharat fibre",
                        "bsnl bill payment",
                        "বিএসএনএল",
                        "ভারত ফাইবার",
                        "बीएसएनएल"
                ]
        }
];

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
