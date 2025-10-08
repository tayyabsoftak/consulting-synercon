import type { NavigationItem, NewsItem, Offering, SocialLink } from "../types";

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Career", href: "/careers" },
];

// Footer Data
export const footerSocials: SocialLink[] = [
  {
    icon: "/icons/mdi_linkedin.svg",
    href: "https://www.linkedin.com/company/synerconpk/",
    alt: "LinkedIn",
  },
];

export const industrylinks = {
  title: "INDUSTRY",
  links: [
    { label: "Synercongroup", href: "https://synercongroup.org" },
    { label: "Technology", href: "https://tech.synercongroup.org" },
    { label: "Engineering", href: "https://engineering.synercongroup.org" },
    { label: "Minerals", href: "https://minerals.synercongroup.org" },
    { label: "Trade", href: "https://trade.synercongroup.org" },
  ],
};

export const locations = {
  title: "LOCATIONS",
  names: [
    { label: "Islamabad" },
    { label: "Bishkek" },
    { label: "Riyadh" },
    { label: "Kabul" },
    { label: "Moscow" },
    { label: "Toronto" },
    { label: "Dubai" },
  ],
};

// Home Offering Data
export const offeringsData: Offering[] = [
  {
    image: "/images/agriculture.jpg",
    name: "Agriculture",
    description: `Our agriculture experts at Synercon build resilient and profitable food systems. We specialize in deploying climate-smart agriculture for food security, facilitating vital market linkages, and applying precision technologies to empower farmers, strengthen supply chains, and secure sustainable growth.`,
    points: [
      "Climate-Resilient Crop Planning",
      "Sustainable Soil Management",
      "Water Resource Management ",
      "Agroforestry Systems",
      "Precision Agriculture",
      "Integrated Pest Management",
      "Renewable Energy Solutions for Agriculture",
      "Agricultural Value Chain Analysis",
      "Climate Change Adaptation",
      "Policy Support/Reforms",
      "Farmers Mobilization",
    ],
  },
  {
    image: "/images/tvt-sector.jpg",
    name: "TVET Sector",
    description: `We ensure the long-term employability of individuals and the productivity of businesses by aligning technical training with market needs, developing career pathways, and promoting skills for sustainable development.`,
    points: [
      "Labour Market Analysis and Skills Forecasting",
      "Industry-Driven Curriculum Development",
      "Competency-Based Training (CBT) and Assessment",
      "Capacity Building of Instructors and Trainers",
      "Establishment and Strengthening of Sector Skill Councils",
      "Digital Skills and Future-Ready Occupations",
      "Entrepreneurship and Self-Employment Promotion",
      "Inclusion of Women and Marginalized Groups in TVET",
      "Public–Private Partnerships (PPP) in Skills Development",
      "Quality Assurance and Accreditation Systems",
      "Green and Sustainable Skills Integration",
      "Policy Support and Institutional Reforms",
      "TVET Awareness and Youth Mobilization",
    ],
  },
  {
    image: "/images/monitring.jpg",
    name: "Monitoring & Evaluation (M&E) Sector",
    description: `We ensure that every project's outcomes are rigorously tracked and evaluated, providing the transparency required by donors and the strategic insights organizations need to adapt, improve, and amplify their impact.`,
    points: [
      "Results-Based Management (RBM) Frameworks",
      "Theory of Change and Logical Framework Development",
      "Performance Indicators and KPI Design",
      "Baseline, Midline, and Endline Studies",
      "Data Collection, Validation, and Quality Assurance",
      "Quantitative and Qualitative Evaluation Methods",
      "Real-Time and Digital M&E Systems",
      "Impact Assessment and Outcome Evaluation",
      "Participatory Monitoring and Community Feedback Mechanisms",
      "Capacity Building for M&E Units and Field Teams",
      "Gender-Responsive and Inclusive M&E",
      "Evidence-Based Decision-Making and Learning Loops",
      "Reporting, Visualization, and Knowledge Dissemination",
      "Policy Support and Institutional Strengthening",
    ],
  },
  {
    image: "/images/sector-developement.jpg",
    name: "Private Sector Development & Market Access",
    description: `We develop and execute strategies that connect smallholder farmers and agribusinesses to formal markets, establish viable value chains, and negotiate linkages that increase incomes, ensure fair value, and drive inclusive economic growth.`,
    points: [
      "SME Competitiveness and Enterprise Growth",
      "Public–Private Dialogue and Policy Advocacy",
      "Industrial Cluster Development and Value Chain Strengthening",
      "Market Linkages and Export Promotion",
      "Innovation, Digitalization, and Technology Adoption",
      "Inclusive Business Models and Youth/Women Entrepreneurship",
      "Green and Sustainable Enterprise Practices",
      "Institutional Strengthening and Capacity Building",
      "Regional and Global Market Integration",
    ],
  },
];
// News Feed Data
export const newsFeeds: NewsItem[] = [
//  {
//     id: 1,
//     title:
//       "Synercon & LMKR Leaders Unite to Strengthen Pakistan’s Minerals and IT Sectors",
//     image: "/news/1.jpg",
//     description: `Synercon’s CEO, Mr. Jabbar Rahim Khan, met with LMKR’s Chairman, Mr. Atif Rais Khan, for a strategic discussion on 
//     strengthening Pakistan’s Minerals and IT sectors. The leaders explored opportunities to combine Synercon’s expertise in 
//     engineering and sustainable industrial solutions with LMKR’s global strengths in digital geoscience and IT innovation. Both 
//     emphasized the importance of leveraging advanced technologies for smarter exploration, processing, and trade of minerals, 
//     while fostering collaborations that drive sustainable development and industrial growth. This engagement marks the beginning 
//     of a shared vision to transform Pakistan’s resource economy through innovation and technology-driven partnerships.`,
//     date: "2025-08-15",
//   },
//   {
//     id: 2,
//     title:
//       "Synercon Leadership Explores Rock Phosphate Mines in Khyber Pakhtunkhwa",
//     image: "/news/2.jpeg",
//     description: `Synercon’s leadership team, CEO Jabbar Khan and Group Director Saadat Khattak, explored the rock phosphate mines in the majestic 
//     mountains of Khyber Pakhtunkhwa. Phosphate is a cornerstone for agriculture and industry, powering both local productivity and global supply 
//     chains. This visit reflects Synercon’s commitment to sustainable extraction practices and our vision to unlock new opportunities that drive 
//     innovation, growth, and resilience in Pakistan’s mining and agriculture sector.`,
//     date: "2025-08-10",
//   },
];
