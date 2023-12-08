export type Step = {
  time: string;
  description: string;
  optional?: string;
};

export type Publication = {
  title: string;
  journal: string;
  volume?: string;
  pages: string;
  year: string;
  issn?: string;
  doi: string;
  url?: string;
  authors: Array<string>;
  keywords?: Array<string>;
};

export const education: Array<Step> = [
  {
    time: "2019 - 2021",
    description:
      "Master's Degree in Computer Engineering @ Università degli Studi di Genova (110 cum laude/110)",
  },
  {
    time: "2016 - 2019",
    description:
      "Bachelor's Degree in Computer Engineering @ Università degli Studi di Genova (108/110)",
  },
  {
    time: "2011 - 2016",
    description:
      "High school diploma @ Liceo Scientifico Leonardo da Vinci (95/100)",
  },
];

export const workExperience: Array<Step> = [
  {
    time: "2022 - now",
    description: "Research fellow @ Università degli Studi di Genova",
    optional:
      "Including a cooperation with Liguria Digitale S.p.A on a Mobile E-Health project.",
  },
  {
    time: "Dec 2021 - Feb 2022",
    description: "Research grant @ Università degli Studi di Genova",
  },
];

export const publications: Array<Publication> = [
  {
    title:
      "Enabling Real-Time Remote Monitoring of Ships by Lossless Protocol Transformations",
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    volume: "24",
    pages: "7285-7295",
    year: "2023",
    doi: "https://doi.org/10.1109/TITS.2023.3258365",
    authors: [
      "Giacomo Longo",
      "Alessandro Orlich",
      "Alessio Merlo",
      "Enrico Russo",
    ],
  },
  {
    title: "MaCySTe: A virtual testbed for maritime cybersecurity",
    journal: "SoftwareX",
    volume: "23",
    pages: "101426",
    year: "2023",
    issn: "2352-7110",
    doi: "https://doi.org/10.1016/j.softx.2023.101426",
    url: "https://www.sciencedirect.com/science/article/pii/S235271102300122X",
    authors: [
      "Giacomo Longo",
      "Alessandro Orlich",
      "Stefano Musante",
      "Alessio Merlo",
      "Enrico Russo",
    ],
    keywords: [
      "Maritime cybersecurity",
      "Digital twin",
      "Testbed",
      "Cyber–physical systems",
      "Cybersecurity testing",
      "Cybersecurity training",
      "Cyber ranges",
    ],
  },
  {
    title:
      "Cyber Range and Cyber Defense Exercises: Gamification Meets University Students",
    journal: "Proceedings of the 2nd International Workshop on Gamification in Software Development, Verification, and Validation",
    pages: "29–37",
    year: "2023",
    doi: "https://doi.org/10.1145/3617553.3617888",
    authors: [
      "Enrico Russo",
      "Marina Ribaudo",
      "Alessandro Orlich",
      "Giacomo Longo",
      "Alessandro Armando",
    ],
    keywords: [
      "cybersecurity education", "Gamification", "cyber range"
    ]
  },
];
