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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://travelwithnareshgadhiya.com",
};

export const navItems = [
  { href: "/about", label: "About Naresh" },
  { href: "/visa-consultancy", label: "Visa Consultancy" },
  { href: "/custom-travel-tours", label: "Travel & Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/travel-stories", label: "Travel Stories" },
  { href: "/customer-experiences", label: "Experiences" },
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
    description:
      "Thoughtfully paced European journeys shaped by extensive first-hand tour-management experience.",
  },
  {
    slug: "usa-canada",
    name: "USA & Canada",
    eyebrow: "North America",
    description:
      "Personal planning for family visits, holidays, multi-city itineraries and visa-readiness support.",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    eyebrow: "Culture & heritage",
    description:
      "Personalized UK journeys with practical guidance drawn from international group experience.",
  },
  {
    slug: "australia-new-zealand",
    name: "Australia & New Zealand",
    eyebrow: "Long-haul journeys",
    description:
      "Balanced itineraries for iconic cities, natural landscapes and comfortable family travel.",
  },
  {
    slug: "middle-east",
    name: "Middle East",
    eyebrow: "Modern & historic",
    description:
      "Tailored city breaks, stopovers and family holidays across diverse Middle Eastern destinations.",
  },
  {
    slug: "far-east-asia",
    name: "Far East & Asia",
    eyebrow: "First-hand insight",
    description:
      "Destination guidance informed by professional experience across Thailand, Singapore, Malaysia and China.",
  },
  {
    slug: "south-africa",
    name: "South Africa",
    eyebrow: "Nature & culture",
    description:
      "Personalized journeys combining cities, scenery, wildlife and considered travel pacing.",
  },
  {
    slug: "other-international",
    name: "Other International Destinations",
    eyebrow: "Let us explore",
    description:
      "Start with your interests, dates and budget—then build the right international journey together.",
  },
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
      "No consultant can guarantee a visa. Decisions are made solely by the respective embassy, consulate or immigration authority. Naresh provides professional guidance, documentation review and application support.",
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
      "Europe receives special focus because of Naresh's extensive professional experience with European tours and international groups.",
  },
  {
    question: "How do I begin?",
    answer:
      "Send a WhatsApp message or complete the smart enquiry form. Share your visa country or travel idea, tentative dates and your city, and Naresh can guide the next conversation.",
  },
];
