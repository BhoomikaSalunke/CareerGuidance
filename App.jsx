import React, { useState } from 'react';
import logo from './logo.jpg'; // <-- New import for your logo

// Main App component that contains all logic and sub-components.
export default function App() {
  // State to manage the current "path". Defaults to the home path.
  const [path, setPath] = useState('/');
  // State to manage the selected language. Defaults to English.
  const [language, setLanguage] = useState('en');

  // A translation object to hold all text for both English and Hindi.
  const translations = {
    // Header
    careerGuidanceTitle: { en: "Career Guidance", hi: "करियर मार्गदर्शन" },
    byText: { en: "By CareerCrafters", hi: "कैरियरक्राफ्टर्स द्वारा" },
    homeLink: { en: "Home", hi: "होम" },
    aboutLink: { en: "About", hi: "हमारे बारे में" },
    
    // Home Page
    choosePathTitle: { en: "Choose your path", hi: "अपना रास्ता चुनें" },
    scienceCard: { en: "Science", hi: "विज्ञान" },
    commerceCard: { en: "Commerce", hi: "वाणिज्य" },
    artsCard: { en: "Arts", hi: "कला" },
    lawCard: { en: "Law", hi: "कानून" },
    managementCard: { en: "Management", hi: "प्रबंधन" },
    chooseLanguageText: { en: "Choose Language", hi: "भाषा चुनें" },
    englishButton: { en: "English", hi: "अंग्रेज़ी" },
    hindiButton: { en: "हिंदी", hi: "हिंदी" },

    // About Page
    aboutPageTitle: { en: "About Us", hi: "हमारे बारे में" },
    aboutPageText: { en: "Our mission is to provide clear and concise information to help students make informed decisions about their future careers. We believe that access to the right information is the first step toward a successful and fulfilling professional life.", hi: "हमारा मिशन छात्रों को उनके भविष्य के करियर के बारे में सूचित निर्णय लेने में मदद करने के लिए स्पष्ट औरA concise जानकारी प्रदान करना है। हमारा मानना है कि सही जानकारी तक पहुंच एक सफल औरA fulfilling professional life की ओर पहलाA step है।" },

    // Science Page
    sciencePageTitle: { en: "Science", hi: "विज्ञान" },
    engineeringCard: { en: "Engineering", hi: "इंजीनियरिंग" },
    researchCard: { en: "Research", hi: "अनुसंधान" },
    medicalCard: { en: "Medical", hi: "चिकित्सा" },

    // Engineering Page
    engineeringPageTitle: { en: "Engineering", hi: "इंजीनियरिंग" },
    examsTitle: { en: "Exams", hi: "परीक्षा" },
    collegesTitle: { en: "Best Colleges", hi: "सर्वश्रेष्ठ कॉलेज" },
    specializationsTitle: { en: "Specializations", hi: "विशेषज्ञता" },
    examsEngineering: { en: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "MHT CET","COMEDK", "GATE (for postgraduate)"], hi: ["जेईई मेन", "जेईई एडवांस्ड", "बीआईटीएसएटी", "वीआईटीईईई", "एमएचटी सीईटी", "गेट (स्नातकोत्तर के लिए)"] },
    collegesEngineering: { en: ["IIT Bombay","IIT Madras", "IIT Delhi", "BITS Pilani", "VIT Vellore", "NIT Trichy", "Anna University"], hi: ["आईआईटी बॉम्बे", "आईआईटी दिल्ली", "बिट्स पिलानी", "वीआईटी वेल्लोर", "एनआईटी त्रिची", "अन्ना विश्वविद्यालय"] },
    specializationsEngineering: { en: ["Computer Science","Information Technology", "Mechanical Engineering", "Civil Engineering", "Electronics and Telecommunications Engineering", "Aerospace Engineering", "Chemical Engineering"], hi: ["कंप्यूटर विज्ञान", "मैकेनिकल इंजीनियरिंग", "सिविल इंजीनियरिंग", "इलेक्ट्रिकल इंजीनियरिंग", "एयरोस्पेस इंजीनियरिंग", "केमिकल इंजीनियरिंग"] },
    
    // Research Page
    researchPageTitle: { en: "Research", hi: "अनुसंधान" },
    institutesTitle: { en: "Best Institutes", hi: "सर्वश्रेष्ठ संस्थान" },
    fieldsTitle: { en: "Fields of Research", hi: "अनुसंधान के क्षेत्र" },
    examsResearch: { en: ["CSIR UGC NET", "UGC NET", "JRF", "ICAR AIEEA", "ICMR JRF", "GATE (for research programs)"], hi: ["सीएसआईआर यूजीसी नेट", "यूजीसी नेट", "जेआरएफ", "आईसीएआर एआईईईए", "आईसीएएमआर जेआरएफ", "गेट (अनुसंधान कार्यक्रमों के लिए)"] },
    institutesResearch: { en: ["IISc Bangalore", "TIFR Mumbai", "IITs", "AIIMS", "JNCASR Bangalore", "IISERs"], hi: ["आईआईएससी बैंगलोर", "टीआईएफआर मुंबई", "आईआईटी", "एम्स", "जेएनसीएएसआर बैंगलोर", "आईआईएसईआर"] },
    fieldsResearch: { en: ["Physics", "Chemistry", "Biology", "Mathematics", "Environmental Science", "Computer Science"], hi: ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "गणित", "पर्यावरण विज्ञान", "कंप्यूटर विज्ञान"] },

    // Medical Page
    medicalPageTitle: { en: "Medical", hi: "चिकित्सा" },
    examsMedical: { en: ["NEET UG", "AIIMS MBBS", "JIPMER", "NEET PG", "INI-CET", "FMGE"], hi: ["नीट यूजी", "एम्स एमबीबीएस", "जिपमर", "नीट पीजी", "आईएनआई-सीईटी", "एफएमजीई"] },
    collegesMedical: { en: ["AIIMS, New Delhi", "CMC, Vellore", "Maulana Azad Medical College", "JIPMER, Puducherry", "KGMU, Lucknow", "Armed Forces Medical College, Pune"], hi: ["एम्स, नई दिल्ली", "सीएमसी, वेल्लोर", "मौलाना आज़ाद मेडिकल कॉलेज", "जिपमर, पुडुचेरी", "केजीएमयू, लखनऊ", "सशस्त्र बल मेडिकल कॉलेज, पुणे"] },
    specializationsMedical: { en: ["Cardiology", "Neurology", "Pediatrics", "General Surgery", "Orthopedics", "Ophthalmology"], hi: ["कार्डियोलॉजी", "न्यूरोलॉजी", "बाल रोग", "सामान्य शल्य चिकित्सा", "हड्डी रोग", "नेत्र विज्ञान"] },

    // Commerce Page
    commercePageTitle: { en: "Commerce", hi: "वाणिज्य" },
    examsCommerce: { en: ["CUET (for UG)", "IPMAT", "NPAT", "CAT (for PG)", "CMAT (for PG)", "BBA Exams"], hi: ["सीयूईटी (यूजी के लिए)", "आईपीएमएटी", "एनपीएटी", "कैट (पीजी के लिए)", "सीमैट (पीजी के लिए)", "बीबीए परीक्षा"] },
    collegesCommerce: { en: ["SRCC, Delhi", "Lady Shri Ram College, Delhi", "St. Xavier's College, Mumbai", "Christ University, Bangalore", "Symbiosis, Pune", "Narsee Monjee College, Mumbai"], hi: ["एसआरसीसी, दिल्ली", "लेडी श्री राम कॉलेज, दिल्ली", "सेंट जेवियर्स कॉलेज, मुंबई", "क्राइस्ट यूनिवर्सिटी, बैंगलोर", "सिम्बायोसिस, पुणे", "नारसी मोनजी कॉलेज, मुंबई"] },
    specializationsCommerce: { en: ["Accounting and Finance", "Banking and Insurance", "Marketing", "Human Resources", "Economics", "Taxation"], hi: ["लेखांकन औरA वित्त", "बैंकिंग औरA बीमा", "विपणन", "मानव संसाधन", "अर्थशास्त्र", "कराधान"] },

    // Arts Page
    artsPageTitle: { en: "Arts", hi: "कला" },
    examsArts: { en: ["CUET (for UG)", "TISS BAT", "SET", "IPU CET", "UGAT", "NIFT Entrance Exam"], hi: ["सीयूईटी (यूजी के लिए)", "टीआईएसएस बीएटी", "एसईटी", "आईपीयू सीईटी", "यूजीएटी", "निफ्ट प्रवेश परीक्षा"] },
    collegesArts: { en: ["St. Stephen's College, Delhi", "Hindu College, Delhi", "Miranda House, Delhi", "Presidency College, Kolkata", "Loyola College, Chennai", "Fergusson College, Pune"], hi: ["सेंट स्टीफंस कॉलेज, दिल्ली", "हिंदू कॉलेज, दिल्ली", "मिरांडा हाउस, दिल्ली", "प्रेसीडेंसी कॉलेज, कोलकाता", "लोयोला कॉलेज, चेन्नई", "फर्ग्यूसन कॉलेज, पुणे"] },
    specializationsArts: { en: ["History", "Political Science", "Sociology", "Psychology", "Literature", "Fine Arts"], hi: ["इतिहास", "राजनीति विज्ञान", "समाजशास्त्र", "मनोविज्ञान", "साहित्य", "ललित कला"] },

    // Law page content
    lawPageTitle: { en: "Law", hi: "कानून" },
    examsLaw: { en: ["CLAT", "AILET", "LSAT India", "SET SLAT", "MH CET Law", "TS LAWCET"], hi: ["सीएलएटी", "एआईएलईटी", "एलएसएटी इंडिया", "एसईटी एसएलएटी", "एमएच सीईटी लॉ", "टीएस एलएडब्ल्यूसीईटी"] },
    collegesLaw: { en: ["National Law School of India University (NLSIU), Bangalore", "NALSAR University of Law, Hyderabad", "The West Bengal National University of Juridical Sciences (NUJS), Kolkata", "IIT Kharagpur", "Gujarat National Law University (GNLU), Gandhinagar", "Symbiosis Law School (SLS), Pune"], hi: ["नेशनल लॉ स्कूल ऑफ इंडिया यूनिवर्सिटी (एनएलएसआईयू), बैंगलोर", "एनएएलएसएआर यूनिवर्सिटी ऑफ लॉ, हैदराबाद", "द वेस्ट बंगाल नेशनल यूनिवर्सिटी ऑफ जुरिडिकल साइंसेज (एनयूजेएस), कोलकाता", "आईआईटी खड़गपुर", "गुजरात नेशनल लॉ यूनिवर्सिटी (जीएनएलयू), गांधीनगर", "सिम्बायोसिस लॉ स्कूल (एसएलएस), पुणे"] },
    specializationsLaw: { en: ["Criminal Law", "Civil Law", "Corporate Law", "Cyber Law", "Environmental Law", "Intellectual Property Rights (IPR)"], hi: ["आपराधिक कानून", "सिविल कानून", "कॉर्पोरेट कानून", "साइबर कानून", "पर्यावरण कानून", "बौद्धिक संपदा अधिकार (आईपीआर)"] },
    branches10thLawTitle: { en: "Branches to choose after 10th", hi: "10वीं के बाद चुनने के लिएA शाखाएँ" },
    branches10thLaw: { en: "To pursue Law, students can choose any stream (Science, Commerce, or Arts) after 10th. However, a strong foundation in subjects like Political Science, History, and Economics, often found in the Arts and Commerce streams, can be beneficial for law entrance exams and studies.", hi: "कानून की पढ़ाई के लिए, छात्र 10वीं के बाद किसी भीA स्ट्रीम (विज्ञान, वाणिज्य, या कला) का चयन कर सकते हैं। हालांकि, राजनीति विज्ञान, इतिहास, औरA अर्थशास्त्र जैसे विषयों में मजबूतA पकड़, जोA अक्सर कला औरA वाणिज्यA स्ट्रीम में पाए जाते हैं, कानून प्रवेश परीक्षा औरA अध्ययन के लिएAAA फायदेमंदA हो सकती है।" },

    // Management page content
    managementPageTitle: { en: "Management", hi: "प्रबंधन" },
    examsManagement: { en: ["CAT", "XAT", "GMAT", "MAT", "CMAT", "NMAT"], hi: ["कैट", "एक्सएटी", "जीमैट", "मैट", "सीमैट", "एनमैट"] },
    collegesManagement: { en: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "ISB Hyderabad", "FMS Delhi", "XLRI Jamshedpur"], hi: ["आईआईएम अहमदाबाद", "आईआईएम बैंगलोर", "आईआईएम कलकत्ता", "आईएसबी हैदराबाद", "एफएमएस दिल्ली", "एक्सएलआरआई जमशेदपुर"] },
    specializationsManagement: { en: ["Marketing", "Finance", "Human Resources", "Operations", "Information Technology", "Business Analytics"], hi: ["विपणन", "वित्त", "मानव संसाधन", "संचालन", "सूचना प्रौद्योगिकी", "व्यापारA विश्लेषण"] },
    branches10thManagementTitle: { en: "Branches to choose after 10th", hi: "10वीं के बाद चुनने के लिएA शाखाएँ" },
    branches10thManagement: { en: "To pursue Management, students can choose any stream (Science, Commerce, or Arts) after 10th. A Commerce background is often preferred due to its focus on subjects like business studies, economics, and mathematics, which are highly relevant for management studies.", hi: "प्रबंधन की पढ़ाई के लिए, छात्र 10वीं के बाद किसी भीA स्ट्रीम (विज्ञान, वाणिज्य, या कला) का चयन कर सकते हैं। वाणिज्यA पृष्ठभूमि कोA अक्सर प्राथमिकता दी जाती है क्योंकि इसमें व्यवसायA अध्ययन, अर्थशास्त्र, औरA गणित जैसे विषयों परA ध्यान केंद्रितA किया जाता है, जोA प्रबंधनA अध्ययन के लिएAAA बहुतAAAAA relevant हैं।" },

    // Footer
    footerLinkText: { en: "Find out more about what a career is:", hi: "करियर क्या है, इसके बारे में और जानें:" },
    footerLink: { en: "What is Career?", hi: "करियर क्या है?" },
    footerCopyright: { en: "© 2024 CareerCrafters. All rights reserved.", hi: "© 2024 कैरियरक्राफ्टर्स। सभी अधिकार सुरक्षित।" }
  };

  // Function to simulate navigation by updating the path state.
  const navigate = (newPath) => {
    setPath(newPath);
  };

  // Renders a reusable card component.
  const Card = ({ titleKey, path }) => (
    <div
      onClick={() => navigate(path)}
      className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-1 min-w-[250px] max-w-sm"
      style={{ backgroundColor: '#260052' }}
    >
      <h2 className="text-2xl font-bold text-center text-white">{translations[titleKey][language]}</h2>
    </div>
  );

  // Renders a navigation header.
  const Header = ({ language, setLanguage }) => (
    <header className="text-white p-4 shadow-lg sticky top-0 z-10" style={{ backgroundColor: '#140029' }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          {/* Replaced the SVG with an <img> tag for the custom logo */}
          <img
            src={logo}
            alt="CareerCrafters AI Logo"
            className="w-12 h-12"
          />
          <div>
            {/* The font for "Career Guidance" is changed to Times New Roman here */}
            <h1 className="text-4xl font-bold font-times-new-roman">
              {translations.careerGuidanceTitle[language]}
            </h1>
            <p className="text-sm font-light text-blue-400">{translations.byText[language]}</p>
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                onClick={() => navigate('/')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {translations.homeLink[language]}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => navigate('/about')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {translations.aboutLink[language]}
              </a>
            </li>
          </ul>
          {/* Language selection buttons moved to the header */}
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-lg font-bold text-sm transition-colors duration-300 ${
                language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600'
              }`}
              style={{ backgroundColor: language === 'en' ? '#260052' : '#1e004d' }}
            >
              {translations.englishButton[language]}
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 rounded-lg font-bold text-sm transition-colors duration-300 ${
                language === 'hi' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600'
              }`}
              style={{ backgroundColor: language === 'hi' ? '#260052' : '#1e004d' }}
            >
              {translations.hindiButton[language]}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );

  // Home page view
  const HomePage = () => (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Language selection is removed from here */}
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.choosePathTitle[language]}
      </h2>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <Card titleKey="scienceCard" path="/science" />
        <Card titleKey="commerceCard" path="/commerce" />
        <Card titleKey="artsCard" path="/arts" />
        <Card titleKey="lawCard" path="/law" />
        <Card titleKey="managementCard" path="/management" />
      </div>
    </div>
  );

  // About page view
  const AboutPage = () => (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-4">{translations.aboutPageTitle[language]}</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        {translations.aboutPageText[language]}
      </p>
    </div>
  );

  // Science page view
  const SciencePage = () => (
    <div className="p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.sciencePageTitle[language]}
      </h2>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <Card titleKey="engineeringCard" path="/science/engineering" />
        <Card titleKey="researchCard" path="/science/research" />
        <Card titleKey="medicalCard" path="/science/medical" />
      </div>
    </div>
  );

  // Engineering page view
  const EngineeringPage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.engineeringPageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsEngineering[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.collegesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.collegesEngineering[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Specializations Column (added for more detail) */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.specializationsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.specializationsEngineering[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
  // Research page view with Exams, Best Colleges, and Fields of Research
  const ResearchPage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.researchPageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsResearch[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges/Institutes Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.institutesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.institutesResearch[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Fields of Research Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.fieldsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.fieldsResearch[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // Medical page view with Exams, Best Colleges, and Specializations
  const MedicalPage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.medicalPageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsMedical[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.collegesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.collegesMedical[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Specializations Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.specializationsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.specializationsMedical[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // Commerce page view with Exams and Best Colleges
  const CommercePage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.commercePageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsCommerce[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.collegesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.collegesCommerce[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Specializations Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.specializationsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.specializationsCommerce[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // Arts page view with Exams and Best Colleges
  const ArtsPage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.artsPageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsArts[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.collegesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.collegesArts[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Specializations Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.specializationsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.specializationsArts[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // Law Page View with new "Branches" card
  const LawPage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.lawPageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsLaw[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.collegesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.collegesLaw[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Specializations Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.specializationsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.specializationsLaw[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* New Branches to choose after 10th card for Law */}
        <div className="md:col-span-3 p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.branches10thLawTitle[language]}
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            {translations.branches10thLaw[language]}
          </p>
        </div>
      </div>
    </div>
  );
  
  // Management Page View with new "Branches" card
  const ManagementPage = () => (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {translations.managementPageTitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exams Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.examsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.examsManagement[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Best Colleges Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.collegesTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.collegesManagement[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Specializations Column */}
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.specializationsTitle[language]}
          </h3>
          <ul className="space-y-3 text-gray-200">
            {translations.specializationsManagement[language].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* New Branches to choose after 10th card for Management */}
        <div className="md:col-span-3 p-6 rounded-xl shadow-md" style={{ backgroundColor: '#260052' }}>
          <h3 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
            {translations.branches10thManagementTitle[language]}
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            {translations.branches10thManagement[language]}
          </p>
        </div>
      </div>
    </div>
  );

  // Conditional rendering based on the current 'path' state.
  let content;
  switch (path) {
    case '/':
      content = <HomePage />;
      break;
    case '/about':
      content = <AboutPage />;
      break;
    case '/science':
      content = <SciencePage />;
      break;
    case '/science/engineering':
      content = <EngineeringPage />;
      break;
    case '/science/research':
      content = <ResearchPage />;
      break;
    case '/science/medical':
      content = <MedicalPage />;
      break;
    case '/commerce':
      content = <CommercePage />;
      break;
    case '/arts':
      content = <ArtsPage />;
      break;
    case '/law':
      content = <LawPage />;
      break;
    case '/management':
      content = <ManagementPage />;
      break;
    default:
      content = <HomePage />;
  }

  // A small component to render the animated squares
  const AnimatedSquares = () => {
    // Array to hold JSX for the squares
    const squares = [];
    // Number of squares to generate
    const count = 30;
    for (let i = 0; i < count; i++) {
      squares.push(
        <div
          key={i}
          className="absolute rounded-md opacity-0 animate-pulse"
          style={{
            // Randomly position the squares across the screen
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            // Randomly size them
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            // Randomize animation duration and delay for a non-uniform effect
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 10}s`,
            backgroundColor: '#007BFF'
          }}
        />
      );
    }
    return <>{squares}</>;
  };


  return (
    <div className="flex flex-col min-h-screen font-sans text-white relative overflow-hidden" style={{ backgroundColor: '#140029' }}>
      
      {/* Custom CSS for the pulsing animation and Times New Roman font */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1);
              opacity: 0.1;
            }
            100% {
              transform: scale(0.5);
              opacity: 0;
            }
          }
          .animate-pulse {
            animation: pulse infinite cubic-bezier(0.4, 0, 0.6, 1);
          }
          .font-times-new-roman {
            font-family: 'Times New Roman', Times, serif;
          }
        `}
      </style>

      {/* The new animated background squares */}
      <div className="absolute inset-0 z-0">
        <AnimatedSquares />
      </div>

      <Header language={language} setLanguage={setLanguage} />
      <main className="container mx-auto py-8 flex-1 relative z-10">{content}</main>
      <footer className="text-gray-400 p-8 mt-8 shadow-inner" style={{ backgroundColor: '#140029' }}>
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 gap-8">
            {/* Career Definition Section */}
            <div className="mb-4 md:mb-0">
              <p className="mb-2 text-lg font-semibold text-blue-400">{translations.footerLinkText[language]}</p>
              <a
                href="https://www.youtube.com/watch?v=x6WjRSOySe0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors duration-300"
              >
                {translations.footerLink[language]}
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>{translations.footerCopyright[language]}</p>
        </div>
      </footer>
    </div>
  );
}


