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
  linkedin: "https://linkedin.com/in/nareshgadhiya",
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
    question: "Do you offer both visa guidance and holiday planning?",
    answer:
      "Yes. End-to-end visa consultancy and customized travel planning are the two core services. You can request either service independently or discuss both together.",
  },
  {
    question: "Can you guarantee that my visa will be approved?",
    answer:
      "No consultant can guarantee a visa. Decisions are made solely by the respective embassy, consulate or immigration authority. Naresh Gadhiya provides professional guidance, documentation review and application support.",
  },
  {
    question: "Are your tours fixed group packages?",
    answer:
      "Trips can be designed around who is travelling, your interests, dates, pace and budget. Group-tour guidance may also be available depending on your requirement.",
  },
  {
    question: "Can I consult from outside Navi Mumbai?",
    answer:
      "Yes. Personalized remote consultation is available for travellers across India through phone, video call, email and WhatsApp.",
  },
  {
    question: "Do you specialize in Europe?",
    answer:
      "Europe receives special focus because of Naresh Gadhiya's extensive professional experience with European tours and international groups.",
  },
  {
    question: "How do I begin?",
    answer:
      "Send a WhatsApp message or complete the smart enquiry form. Share your visa country or travel idea, tentative dates and your city, and Naresh Gadhiya can guide the next conversation.",
  },
];
