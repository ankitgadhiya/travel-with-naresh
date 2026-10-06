export const site = {
  name: "Travel with Naresh Gadhiya",
  shortName: "Travel with Naresh",
  descriptor: "International Travel & Visa Consultancy",
  tagline: "The World, Planned with Experience.",
  experience: "36+ Years of Travel & Tourism Expertise",
  location: "Navi Mumbai, Maharashtra, India",
  phoneDisplay: "+91 98195 44714",
  phone: "919819544714",
  email: "nareshbgadhiya@gmail.com",
  linkedin: "https://www.linkedin.com/in/naresh-gadhiya-79861325/",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://travelwithnaresh.com",
};

export function assetPath(path: string) {
  const basePath =
    process.env.GITHUB_PAGES === "true" && process.env.CUSTOM_DOMAIN !== "true"
      ? "/travel-with-naresh"
      : "";

  return `${basePath}${path}`;
}

export const navItems = [
  { href: "/about", label: "About Naresh Gadhiya" },
  { href: "/visa-consultancy", label: "Visa Services" },
  { href: "/custom-travel-tours", label: "Custom Holidays" },
  { href: "/destinations", label: "Destinations" },
  { href: "/travel-stories", label: "Stories & Reviews" },
  { href: "/contact", label: "Contact" },
];

export const whatsappMessages = {
  general:
    "Hello Mr. Gadhiya, I found Travel with Naresh Gadhiya online and would like to discuss my travel requirements.",
  visa: "Hello Mr. Gadhiya, I found you through your website and would like assistance with a visa for [country].",
  travel:
    "Hello Mr. Gadhiya, I found you through your website and would like your help planning an international holiday.",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}

export const destinations = [
  {
    slug: "europe",
    name: "Europe",
    eyebrow: "Specialist destination",
    image: "/images/destinations/europe.webp",
    description:
      "Thoughtfully paced European journeys shaped by extensive first-hand tour-management experience.",
    itineraries: [
      {
        title: "Classic Europe Highlights",
        duration: "9 days",
        route: ["Paris", "Brussels", "Amsterdam", "Cologne", "Black Forest", "Lucerne", "Zurich"],
      },
      {
        title: "Grand Europe Discovery",
        duration: "14 days",
        route: ["London", "Paris", "Brussels", "Amsterdam", "Germany", "Switzerland", "Venice", "Florence", "Rome"],
      },
      {
        title: "Switzerland & Italy at Ease",
        duration: "11 days",
        route: ["Zurich", "Lucerne", "Interlaken", "Milan", "Venice", "Florence", "Rome"],
      },
      {
        title: "Scandinavian Capitals",
        duration: "10 days",
        route: ["Copenhagen", "Oslo", "Norwegian fjords", "Stockholm", "Helsinki"],
      },
    ],
    visaLinks: [
      { label: "Official Schengen visa application guidance", href: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en" },
    ],
  },
  {
    slug: "usa-canada",
    name: "USA & Canada",
    eyebrow: "North America",
    image: "/images/destinations/north-america.webp",
    description:
      "Personal planning for family visits, holidays, multi-city itineraries and visa-readiness support.",
    itineraries: [
      {
        title: "East Coast Icons",
        duration: "10 days",
        route: ["New York", "Philadelphia", "Washington DC", "Niagara Falls", "Toronto"],
      },
      {
        title: "Canadian Rockies & West Coast",
        duration: "9 days",
        route: ["Calgary", "Banff", "Lake Louise", "Jasper", "Vancouver"],
      },
      {
        title: "American West Coast",
        duration: "10 days",
        route: ["San Francisco", "Yosemite region", "Las Vegas", "Grand Canyon", "Los Angeles"],
      },
      {
        title: "Canada Cities & Nature",
        duration: "11 days",
        route: ["Toronto", "Niagara Falls", "Ottawa", "Montreal", "Quebec City"],
      },
    ],
    visaLinks: [
      { label: "Official USA visitor visa information", href: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" },
      { label: "Official Canada visitor visa guidance", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    eyebrow: "Culture & heritage",
    image: "/images/destinations/united-kingdom.webp",
    description:
      "Personalized UK journeys with practical guidance drawn from international group experience.",
    itineraries: [
      {
        title: "Essential Britain",
        duration: "8 days",
        route: ["London", "Oxford", "Stratford-upon-Avon", "Manchester", "Lake District", "Edinburgh"],
      },
      {
        title: "England, Scotland & Wales",
        duration: "11 days",
        route: ["London", "Bath", "Cardiff", "Liverpool", "Lake District", "Edinburgh", "Scottish Highlands"],
      },
      {
        title: "London & Scotland by Rail",
        duration: "9 days",
        route: ["London", "York", "Edinburgh", "Inverness", "Loch Ness", "Glasgow"],
      },
    ],
    visaLinks: [
      { label: "Official UK Standard Visitor visa guidance", href: "https://www.gov.uk/standard-visitor" },
      { label: "Official UK supporting-document guide", href: "https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents" },
    ],
  },
  {
    slug: "australia-new-zealand",
    name: "Australia & New Zealand",
    eyebrow: "Long-haul journeys",
    image: "/images/destinations/australia-new-zealand.webp",
    description:
      "Balanced itineraries for iconic cities, natural landscapes and comfortable family travel.",
    itineraries: [
      {
        title: "Australia & New Zealand Essentials",
        duration: "14 days",
        route: ["Melbourne", "Sydney", "Gold Coast", "Auckland", "Rotorua", "Queenstown"],
      },
      {
        title: "Australia Family Highlights",
        duration: "11 days",
        route: ["Melbourne", "Great Ocean Road", "Sydney", "Blue Mountains", "Gold Coast"],
      },
      {
        title: "New Zealand Scenic Journey",
        duration: "12 days",
        route: ["Auckland", "Rotorua", "Christchurch", "Lake Tekapo", "Queenstown", "Milford Sound"],
      },
    ],
    visaLinks: [
      { label: "Official Australia Visitor visa guidance", href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600" },
      { label: "Official New Zealand Visitor Visa guidance", href: "https://www.immigration.govt.nz/new-zealand-visas/options/visit/visitor-visa/" },
    ],
  },
  {
    slug: "middle-east",
    name: "Middle East",
    eyebrow: "Modern & historic",
    image: "/images/destinations/middle-east.webp",
    description:
      "Tailored city breaks, stopovers and family holidays across diverse Middle Eastern destinations.",
    itineraries: [
      {
        title: "Dubai & Abu Dhabi Family Escape",
        duration: "6 days",
        route: ["Dubai", "Desert Safari", "Palm Jumeirah", "Abu Dhabi", "Yas Island"],
      },
      {
        title: "Dubai, Abu Dhabi & Ras Al Khaimah",
        duration: "8 days",
        route: ["Old Dubai", "Downtown Dubai", "Desert experience", "Abu Dhabi", "Yas Island", "Ras Al Khaimah"],
      },
      {
        title: "Oman Culture & Coast",
        duration: "7 days",
        route: ["Muscat", "Nizwa", "Wahiba Sands", "Wadi Bani Khalid", "Sur"],
      },
    ],
    visaLinks: [
      { label: "Official UAE tourist visa information", href: "https://u.ae/en/information-and-services/visa-and-emirates-id/tourist-visa" },
    ],
  },
  {
    slug: "far-east-asia",
    name: "Far East & Asia",
    eyebrow: "First-hand insight",
    image: "/images/destinations/far-east-asia.webp",
    description:
      "Destination guidance informed by professional experience across Thailand, Singapore, Malaysia and China.",
    itineraries: [
      {
        title: "Singapore, Malaysia & Thailand",
        duration: "10 days",
        route: ["Singapore", "Kuala Lumpur", "Genting Highlands", "Bangkok", "Pattaya"],
      },
      {
        title: "Japan Cultural Journey",
        duration: "9 days",
        route: ["Tokyo", "Mount Fuji", "Hakone", "Kyoto", "Nara", "Osaka"],
      },
      {
        title: "Vietnam & Cambodia Discovery",
        duration: "10 days",
        route: ["Hanoi", "Ha Long Bay", "Da Nang", "Hoi An", "Ho Chi Minh City", "Siem Reap"],
      },
      {
        title: "Singapore & Bali Escape",
        duration: "8 days",
        route: ["Singapore", "Ubud", "Central Bali", "Nusa Dua", "Uluwatu"],
      },
    ],
    visaLinks: [
      { label: "Official Japan visa information", href: "https://www.mofa.go.jp/j_info/visit/visa/index.html" },
      { label: "Official Singapore visa information", href: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements" },
    ],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    eyebrow: "Nature & culture",
    image: "/images/destinations/south-africa.webp",
    description:
      "Personalized journeys combining cities, scenery, wildlife and considered travel pacing.",
    itineraries: [
      {
        title: "South African Highlights",
        duration: "10 days",
        route: ["Cape Town", "Cape Peninsula", "Garden Route", "Johannesburg", "Kruger region"],
      },
      {
        title: "Cape, Winelands & Safari",
        duration: "9 days",
        route: ["Cape Town", "Cape Peninsula", "Stellenbosch", "Franschhoek", "Private game reserve"],
      },
      {
        title: "Garden Route at a Relaxed Pace",
        duration: "8 days",
        route: ["Cape Town", "Hermanus", "Mossel Bay", "Knysna", "Tsitsikamma", "Gqeberha"],
      },
    ],
    visaLinks: [
      { label: "Official South Africa visa information", href: "https://www.dha.gov.za/index.php/immigration-services/types-of-visas" },
    ],
  },
  {
    slug: "other-international",
    name: "Other International Destinations",
    eyebrow: "Let us explore",
    image: "/images/destinations/international.webp",
    description:
      "Start with your interests, dates and budget—then build the right international journey together.",
    itineraries: [
      {
        title: "Built Around Your Wish List",
        duration: "Flexible",
        route: ["Choose your region", "Set your pace", "Balance signature sights", "Add personal experiences"],
      },
      {
        title: "Turkey Heritage Journey",
        duration: "9 days",
        route: ["Istanbul", "Cappadocia", "Pamukkale", "Ephesus", "Kusadasi"],
      },
      {
        title: "Maldives Unhurried Escape",
        duration: "5 days",
        route: ["Malé arrival", "Island resort", "Lagoon experiences", "Leisure days", "Return transfer"],
      },
    ],
    visaLinks: [],
  },
];

export const visaInformationLinks = [
  { destination: "Schengen / Europe", href: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en" },
  { destination: "United Kingdom", href: "https://www.gov.uk/standard-visitor" },
  { destination: "United States", href: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" },
  { destination: "Canada", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" },
  { destination: "Australia", href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600" },
  { destination: "New Zealand", href: "https://www.immigration.govt.nz/new-zealand-visas/options/visit/visitor-visa/" },
];

export const careerTimeline = [
  { period: "1990 onwards", company: "Career begins", role: "International tour management and customer service" },
  { period: "Career chapter", company: "Kavita Tours Pvt. Ltd.", role: "Tour Manager" },
  { period: "Career chapter", company: "Krishna Tours Pvt. Ltd.", role: "Senior Tour Manager" },
  { period: "Career chapter", company: "SOTC / Kuoni India", role: "Senior Tour Manager / Manager on Spot – Thailand" },
  { period: "Career chapter", company: "Thomas Cook India Ltd.", role: "Senior Tour Manager" },
  { period: "Career chapter", company: "Star Tours UK", role: "Global Tour Manager" },
  { period: "Career chapter", company: "Kesari Tours Pvt. Ltd.", role: "Business Development / Gujarat Sales" },
  { period: "Today", company: "Travel with Naresh Gadhiya", role: "Independent Travel & Visa Consultant" },
];

export const faqs = [
  {
    category: "Getting started",
    question: "Do you offer both visa guidance and holiday planning?",
    answer:
      "Yes. End-to-end visa consultancy and customized travel planning are the two core services. You can request either service independently or discuss both together.",
  },
  {
    category: "Visa consultancy",
    question: "Can you guarantee that my visa will be approved?",
    answer:
      "No consultant can guarantee a visa. Decisions are made solely by the respective embassy, consulate or immigration authority. Naresh Gadhiya provides professional guidance, documentation review and application support.",
  },
  {
    category: "Holiday planning",
    question: "Are your tours fixed group packages?",
    answer:
      "Trips can be designed around who is travelling, your interests, dates, pace and budget. Group-tour guidance may also be available depending on your requirement.",
  },
  {
    category: "Consultation",
    question: "Can I consult from outside Navi Mumbai?",
    answer:
      "Yes. Personalized remote consultation is available for travellers across India through phone, video call, email and WhatsApp.",
  },
  {
    category: "Destinations",
    question: "Do you specialize in Europe?",
    answer:
      "Europe receives special focus because of Naresh Gadhiya's extensive professional experience with European tours and international groups.",
  },
  {
    category: "Getting started",
    question: "How do I begin?",
    answer:
      "Send a WhatsApp message or complete the smart enquiry form. Share your visa country or travel idea, tentative dates and your city, and Naresh Gadhiya can guide the next conversation.",
  },
  {
    category: "Visa consultancy",
    question: "What does visa consultancy include?",
    answer:
      "Support may include an initial profile discussion, a personalized document checklist, application-form guidance, review of supporting documents, appointment-process guidance and interview preparation where relevant. The exact scope depends on the destination and visa category.",
  },
  {
    category: "Visa consultancy",
    question: "When should I start preparing my visa application?",
    answer:
      "Start as early as the relevant authority permits, especially around school holidays and peak travel periods. Processing times, appointment availability and document requirements vary by country, so contact Naresh Gadhiya before making time-sensitive arrangements.",
  },
  {
    category: "Visa consultancy",
    question: "Can you help if I have had a previous visa refusal?",
    answer:
      "Naresh Gadhiya can review the information and refusal communication you are comfortable sharing, identify areas that may need clarification and help you prepare more carefully. A previous refusal cannot be erased and a new application still has no guaranteed outcome.",
  },
  {
    category: "Visa consultancy",
    question: "Where can I check the latest visa rules?",
    answer:
      "Use the official government or immigration links provided on the Visa Services and destination pages. Requirements can change without notice; third-party summaries should never replace the latest instructions from the responsible authority.",
  },
  {
    category: "Holiday planning",
    question: "What information is needed to design my holiday?",
    answer:
      "The most useful starting details are who is travelling, departure city, preferred dates, trip duration, destination ideas, approximate budget, room requirements, interests, preferred pace and any mobility, meal or celebration needs.",
  },
  {
    category: "Holiday planning",
    question: "Can you plan travel for families, senior citizens or larger groups?",
    answer:
      "Yes. Routes can account for children, senior travellers, rooming needs, walking comfort, rest time, transport practicality and group coordination. Share any accessibility or medical considerations early so suitable options can be explored.",
  },
  {
    category: "Holiday planning",
    question: "Can Indian or Jain meals be arranged overseas?",
    answer:
      "Meal planning can be explored in many popular destinations through Naresh Gadhiya's professional network. Indian or Jain restaurants, group meals, kitchens or chef coordination are always subject to destination, supplier availability and advance confirmation.",
  },
  {
    category: "Holiday planning",
    question: "Can you help with flights, hotels, transfers and sightseeing?",
    answer:
      "Planning can bring together route guidance, international flights, accommodation, transfers, sightseeing and local coordination. Recommendations depend on live availability, budget and the final services agreed for your trip.",
  },
  {
    category: "Holiday planning",
    question: "Are the sample itineraries ready-to-book packages?",
    answer:
      "No. They are original planning examples designed to help you compare routes and trip lengths. Prices and inclusions are not fixed; each itinerary is adapted after a personal discussion and availability check.",
  },
  {
    category: "Bookings & preparation",
    question: "Should I book non-refundable travel before my visa is issued?",
    answer:
      "Avoid unnecessary non-refundable commitments unless the relevant authority specifically requires a booking and you understand the risk. Naresh Gadhiya can discuss suitable reservation evidence, but the authority's current instructions remain decisive.",
  },
  {
    category: "Bookings & preparation",
    question: "Is travel insurance recommended?",
    answer:
      "Travel insurance is strongly recommended and may be mandatory for some visa applications or destinations. The right cover depends on age, health disclosures, activities, trip value and destination requirements; always review policy terms and exclusions.",
  },
  {
    category: "Bookings & preparation",
    question: "How are consultation and trip-planning charges handled?",
    answer:
      "Charges depend on the service scope, destination and complexity. Naresh Gadhiya will explain the applicable professional fee and any supplier payment terms before you proceed. Government, visa-centre and third-party charges are separate unless expressly stated.",
  },
  {
    category: "Bookings & preparation",
    question: "What happens after I approve an itinerary?",
    answer:
      "The next steps typically include checking live availability, confirming the selected services and payment terms, completing traveller details, progressing visa preparation where needed and receiving practical pre-departure guidance.",
  },
  {
    category: "Customer stories",
    question: "Can I share photographs, videos or feedback after my trip?",
    answer:
      "Yes. Genuine travel photographs, short videos and written or video feedback can be considered for the website. Nothing is published as a customer experience without permission, and personal or sensitive travel documents should never be submitted for public display.",
  },
];
