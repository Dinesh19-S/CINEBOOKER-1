export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' }
];

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    movies: 'Movies',
    theaters: 'Theaters',
    bookings: 'My Bookings',
    profile: 'My Profile',
    admin: 'Admin Panel',
    logout: 'Logout',
    
    // Common
    search: 'Search movies...',
    selectLocation: 'Select Location',
    selectLanguage: 'Language',
    bookNow: 'Book Now',
    continueBooking: 'Continue',
    back: 'Back',
    next: 'Next',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    
    // Movie details
    duration: 'Duration',
    rating: 'Rating',
    releaseDate: 'Release Date',
    genre: 'Genre',
    cast: 'Cast',
    director: 'Director',
    synopsis: 'Synopsis',
    
    // Booking flow
    selectDate: 'Select Date',
    selectTheater: 'Select Theater',
    selectShowtime: 'Select Show Time',
    selectSeats: 'Select Seats',
    payment: 'Payment',
    bookingSummary: 'Booking Summary',
    
    // Payment
    paymentMethods: 'Payment Methods',
    upiPayment: 'UPI Payment',
    netBanking: 'Net Banking',
    cardPayment: 'Card Payment',
    
    // Profile
    personalInfo: 'Personal Information',
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    address: 'Address',
    dateOfBirth: 'Date of Birth',
    gender: 'Gender',
    
    // Admin
    manageMovies: 'Manage Movies',
    manageTheaters: 'Manage Theaters',
    manageScreens: 'Manage Screens',
    manageShowtimes: 'Manage Showtimes',
    
    // Footer
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    termsConditions: 'Terms & Conditions',
    privacyPolicy: 'Privacy Policy',
    followUs: 'Follow Us'
  },
  hi: {
    // Navigation
    home: 'होम',
    movies: 'फिल्में',
    theaters: 'थिएटर',
    bookings: 'मेरी बुकिंग',
    profile: 'मेरी प्रोफाइल',
    admin: 'एडमिन पैनल',
    logout: 'लॉगआउट',
    
    // Common
    search: 'फिल्में खोजें...',
    selectLocation: 'स्थान चुनें',
    selectLanguage: 'भाषा',
    bookNow: 'अभी बुक करें',
    continueBooking: 'जारी रखें',
    back: 'वापस',
    next: 'आगे',
    cancel: 'रद्द करें',
    save: 'सेव करें',
    edit: 'संपादित करें',
    delete: 'हटाएं',
    add: 'जोड़ें',
    
    // Movie details
    duration: 'अवधि',
    rating: 'रेटिंग',
    releaseDate: 'रिलीज़ डेट',
    genre: 'शैली',
    cast: 'कलाकार',
    director: 'निर्देशक',
    synopsis: 'कहानी',
    
    // Booking flow
    selectDate: 'तारीख चुनें',
    selectTheater: 'थिएटर चुनें',
    selectShowtime: 'शो टाइम चुनें',
    selectSeats: 'सीट चुनें',
    payment: 'भुगतान',
    bookingSummary: 'बुकिंग सारांश',
    
    // Payment
    paymentMethods: 'भुगतान के तरीके',
    upiPayment: 'UPI भुगतान',
    netBanking: 'नेट बैंकिंग',
    cardPayment: 'कार्ड भुगतान',
    
    // Profile
    personalInfo: 'व्यक्तिगत जानकारी',
    name: 'नाम',
    email: 'ईमेल',
    phone: 'फोन नंबर',
    address: 'पता',
    dateOfBirth: 'जन्म तिथि',
    gender: 'लिंग',
    
    // Admin
    manageMovies: 'फिल्में प्रबंधित करें',
    manageTheaters: 'थिएटर प्रबंधित करें',
    manageScreens: 'स्क्रीन प्रबंधित करें',
    manageShowtimes: 'शो टाइम प्रबंधित करें',
    
    // Footer
    aboutUs: 'हमारे बारे में',
    contactUs: 'संपर्क करें',
    termsConditions: 'नियम और शर्तें',
    privacyPolicy: 'गोपनीयता नीति',
    followUs: 'हमें फॉलो करें'
  },
  ta: {
    // Navigation
    home: 'முகப்பு',
    movies: 'திரைப்படங்கள்',
    theaters: 'திரையரங்குகள்',
    bookings: 'எனது முன்பதிவுகள்',
    profile: 'எனது சுயவிவரம்',
    admin: 'நிர்வாக பேனல்',
    logout: 'வெளியேறு',
    
    // Common
    search: 'திரைப்படங்களைத் தேடுங்கள்...',
    selectLocation: 'இடத்தைத் தேர்ந்தெடுக்கவும்',
    selectLanguage: 'மொழி',
    bookNow: 'இப்போது முன்பதிவு செய்யுங்கள்',
    continueBooking: 'தொடரவும்',
    back: 'பின்னால்',
    next: 'அடுத்து',
    cancel: 'ரத்து செய்',
    save: 'சேமி',
    edit: 'திருத்து',
    delete: 'நீக்கு',
    add: 'சேர்',
    
    // Movie details
    duration: 'கால அளவு',
    rating: 'மதிப்பீடு',
    releaseDate: 'வெளியீட்டு தேதி',
    genre: 'வகை',
    cast: 'நடிகர்கள்',
    director: 'இயக்குனர்',
    synopsis: 'கதைச்சுருக்கம்',
    
    // Booking flow
    selectDate: 'தேதியைத் தேர்ந்தெடுக்கவும்',
    selectTheater: 'திரையரங்கைத் தேர்ந்தெடுக்கவும்',
    selectShowtime: 'நேரத்தைத் தேர்ந்தெடுக்கவும்',
    selectSeats: 'இருக்கைகளைத் தேர்ந்தெடுக்கவும்',
    payment: 'கட்டணம்',
    bookingSummary: 'முன்பதிவு சுருக்கம்',
    
    // Payment
    paymentMethods: 'கட்டண முறைகள்',
    upiPayment: 'UPI கட்டணம்',
    netBanking: 'நெட் பேங்கிங்',
    cardPayment: 'கார்டு கட்டணம்',
    
    // Profile
    personalInfo: 'தனிப்பட்ட தகவல்',
    name: 'பெயர்',
    email: 'மின்னஞ்சல்',
    phone: 'தொலைபேசி எண்',
    address: 'முகவரி',
    dateOfBirth: 'பிறந்த தேதி',
    gender: 'பாலினம்',
    
    // Admin
    manageMovies: 'திரைப்படங்களை நிர்வகிக்கவும்',
    manageTheaters: 'திரையரங்குகளை நிர்வகிக்கவும்',
    manageScreens: 'திரைகளை நிர்வகிக்கவும்',
    manageShowtimes: 'நேரங்களை நிர்வகிக்கவும்',
    
    // Footer
    aboutUs: 'எங்களைப் பற்றி',
    contactUs: 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
    termsConditions: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
    privacyPolicy: 'தனியுரிமைக் கொள்கை',
    followUs: 'எங்களைப் பின்தொடருங்கள்'
  },
  te: {
    // Navigation
    home: 'హోమ్',
    movies: 'సినిమాలు',
    theaters: 'థియేటర్లు',
    bookings: 'నా బుకింగ్‌లు',
    profile: 'నా ప్రొఫైల్',
    admin: 'అడ్మిన్ ప్యానెల్',
    logout: 'లాగ్ అవుట్',
    
    // Common
    search: 'సినిమాలను వెతకండి...',
    selectLocation: 'స్థానాన్ని ఎంచుకోండి',
    selectLanguage: 'భాష',
    bookNow: 'ఇప్పుడే బుక్ చేయండి',
    continueBooking: 'కొనసాగించండి',
    back: 'వెనుకకు',
    next: 'తదుపరి',
    cancel: 'రద్దు చేయండి',
    save: 'సేవ్ చేయండి',
    edit: 'సవరించండి',
    delete: 'తొలగించండి',
    add: 'జోడించండి',
    
    // Movie details
    duration: 'వ్యవధి',
    rating: 'రేటింగ్',
    releaseDate: 'విడుదల తేదీ',
    genre: 'శైలి',
    cast: 'తారాగణం',
    director: 'దర్శకుడు',
    synopsis: 'కథాంశం',
    
    // Booking flow
    selectDate: 'తేదీని ఎంచుకోండి',
    selectTheater: 'థియేటర్‌ను ఎంచుకోండి',
    selectShowtime: 'షో టైమ్‌ను ఎంచుకోండి',
    selectSeats: 'సీట్లను ఎంచుకోండి',
    payment: 'చెల్లింపు',
    bookingSummary: 'బుకింగ్ సారాంశం',
    
    // Payment
    paymentMethods: 'చెల్లింపు పద్ధతులు',
    upiPayment: 'UPI చెల్లింపు',
    netBanking: 'నెట్ బ్యాంకింగ్',
    cardPayment: 'కార్డ్ చెల్లింపు',
    
    // Profile
    personalInfo: 'వ్యక్తిగత సమాచారం',
    name: 'పేరు',
    email: 'ఇమెయిల్',
    phone: 'ఫోన్ నంబర్',
    address: 'చిరునామా',
    dateOfBirth: 'పుట్టిన తేదీ',
    gender: 'లింగం',
    
    // Admin
    manageMovies: 'సినిమాలను నిర్వహించండి',
    manageTheaters: 'థియేటర్లను నిర్వహించండి',
    manageScreens: 'స్క్రీన్‌లను నిర్వహించండి',
    manageShowtimes: 'షో టైమ్‌లను నిర్వహించండి',
    
    // Footer
    aboutUs: 'మా గురించి',
    contactUs: 'మమ్మల్ని సంప్రదించండి',
    termsConditions: 'నిబంధనలు మరియు షరతులు',
    privacyPolicy: 'గోప్యతా విధానం',
    followUs: 'మమ్మల్ని అనుసరించండి'
  },
  ml: {
    // Navigation
    home: 'ഹോം',
    movies: 'സിനിമകൾ',
    theaters: 'തിയേറ്ററുകൾ',
    bookings: 'എന്റെ ബുക്കിംഗുകൾ',
    profile: 'എന്റെ പ്രൊഫൈൽ',
    admin: 'അഡ്മിൻ പാനൽ',
    logout: 'ലോഗ് ഔട്ട്',
    
    // Common
    search: 'സിനിമകൾ തിരയുക...',
    selectLocation: 'സ്ഥലം തിരഞ്ഞെടുക്കുക',
    selectLanguage: 'ഭാഷ',
    bookNow: 'ഇപ്പോൾ ബുക്ക് ചെയ്യുക',
    continueBooking: 'തുടരുക',
    back: 'പിന്നോട്ട്',
    next: 'അടുത്തത്',
    cancel: 'റദ്ദാക്കുക',
    save: 'സേവ് ചെയ്യുക',
    edit: 'എഡിറ്റ് ചെയ്യുക',
    delete: 'ഇല്ലാതാക്കുക',
    add: 'ചേർക്കുക',
    
    // Movie details
    duration: 'ദൈർഘ്യം',
    rating: 'റേറ്റിംഗ്',
    releaseDate: 'റിലീസ് തീയതി',
    genre: 'വിഭാഗം',
    cast: 'അഭിനേതാക്കൾ',
    director: 'സംവിധായകൻ',
    synopsis: 'കഥാസംഗ്രഹം',
    
    // Booking flow
    selectDate: 'തീയതി തിരഞ്ഞെടുക്കുക',
    selectTheater: 'തിയേറ്റർ തിരഞ്ഞെടുക്കുക',
    selectShowtime: 'ഷോ ടൈം തിരഞ്ഞെടുക്കുക',
    selectSeats: 'സീറ്റുകൾ തിരഞ്ഞെടുക്കുക',
    payment: 'പേയ്മെന്റ്',
    bookingSummary: 'ബുക്കിംഗ് സംഗ്രഹം',
    
    // Payment
    paymentMethods: 'പേയ്മെന്റ് രീതികൾ',
    upiPayment: 'UPI പേയ്മെന്റ്',
    netBanking: 'നെറ്റ് ബാങ്കിംഗ്',
    cardPayment: 'കാർഡ് പേയ്മെന്റ്',
    
    // Profile
    personalInfo: 'വ്യക്തിഗത വിവരങ്ങൾ',
    name: 'പേര്',
    email: 'ഇമെയിൽ',
    phone: 'ഫോൺ നമ്പർ',
    address: 'വിലാസം',
    dateOfBirth: 'ജനനത്തീയതി',
    gender: 'ലിംഗം',
    
    // Admin
    manageMovies: 'സിനിമകൾ നിയന്ത്രിക്കുക',
    manageTheaters: 'തിയേറ്ററുകൾ നിയന്ത്രിക്കുക',
    manageScreens: 'സ്ക്രീനുകൾ നിയന്ത്രിക്കുക',
    manageShowtimes: 'ഷോ ടൈമുകൾ നിയന്ത്രിക്കുക',
    
    // Footer
    aboutUs: 'ഞങ്ങളെ കുറിച്ച്',
    contactUs: 'ഞങ്ങളെ ബന്ധപ്പെടുക',
    termsConditions: 'നിബന്ധനകളും വ്യവസ്ഥകളും',
    privacyPolicy: 'സ്വകാര്യതാ നയം',
    followUs: 'ഞങ്ങളെ പിന്തുടരുക'
  },
  kn: {
    // Navigation
    home: 'ಮುಖ್ಯಪುಟ',
    movies: 'ಚಲನಚಿತ್ರಗಳು',
    theaters: 'ಚಿತ್ರಮಂದಿರಗಳು',
    bookings: 'ನನ್ನ ಬುಕಿಂಗ್‌ಗಳು',
    profile: 'ನನ್ನ ಪ್ರೊಫೈಲ್',
    admin: 'ಅಡ್ಮಿನ್ ಪ್ಯಾನೆಲ್',
    logout: 'ಲಾಗ್ ಔಟ್',
    
    // Common
    search: 'ಚಲನಚಿತ್ರಗಳನ್ನು ಹುಡುಕಿ...',
    selectLocation: 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectLanguage: 'ಭಾಷೆ',
    bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
    continueBooking: 'ಮುಂದುವರಿಸಿ',
    back: 'ಹಿಂದೆ',
    next: 'ಮುಂದೆ',
    cancel: 'ರದ್ದುಮಾಡಿ',
    save: 'ಉಳಿಸಿ',
    edit: 'ಸಂಪಾದಿಸಿ',
    delete: 'ಅಳಿಸಿ',
    add: 'ಸೇರಿಸಿ',
    
    // Movie details
    duration: 'ಅವಧಿ',
    rating: 'ರೇಟಿಂಗ್',
    releaseDate: 'ಬಿಡುಗಡೆ ದಿನಾಂಕ',
    genre: 'ಪ್ರಕಾರ',
    cast: 'ನಟರು',
    director: 'ನಿರ್ದೇಶಕ',
    synopsis: 'ಕಥಾಸಾರಾಂಶ',
    
    // Booking flow
    selectDate: 'ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectTheater: 'ಚಿತ್ರಮಂದಿರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectShowtime: 'ಶೋ ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectSeats: 'ಆಸನಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    payment: 'ಪಾವತಿ',
    bookingSummary: 'ಬುಕಿಂಗ್ ಸಾರಾಂಶ',
    
    // Payment
    paymentMethods: 'ಪಾವತಿ ವಿಧಾನಗಳು',
    upiPayment: 'UPI ಪಾವತಿ',
    netBanking: 'ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್',
    cardPayment: 'ಕಾರ್ಡ್ ಪಾವತಿ',
    
    // Profile
    personalInfo: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ',
    name: 'ಹೆಸರು',
    email: 'ಇಮೇಲ್',
    phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    address: 'ವಿಳಾಸ',
    dateOfBirth: 'ಜನ್ಮ ದಿನಾಂಕ',
    gender: 'ಲಿಂಗ',
    
    // Admin
    manageMovies: 'ಚಲನಚಿತ್ರಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    manageTheaters: 'ಚಿತ್ರಮಂದಿರಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    manageScreens: 'ಪರದೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    manageShowtimes: 'ಶೋ ಸಮಯಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    
    // Footer
    aboutUs: 'ನಮ್ಮ ಬಗ್ಗೆ',
    contactUs: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    termsConditions: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು',
    privacyPolicy: 'ಗೌಪ್ಯತೆ ನೀತಿ',
    followUs: 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ'
  }
};