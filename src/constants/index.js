import {
  meta,
  shopify,
  starbucks,
  tesla,
  problemsolve,
  communication,
  teamwork,
  timemanagment,
  leadership,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Problem-solving",
    // company_name: "Starbucks",
    icon: problemsolve,
    iconBg: "#accbe1",
    // date: "March 2020 - April 2021",
    points: [
      "The capability to analyze issues, think critically, and develop effective solutions. This also involves decision-making skills.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Communication",
    // company_name: "Tesla",
    icon: communication,
    iconBg: "#fbc3bc",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "The ability to express ideas clearly and listen actively. This includes written and verbal communication skills.",
    ],
  },
  {
    title: "Time Management",
    // company_name: "Shopify",
    icon: timemanagment,
    iconBg: "#b7e4c7",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Effectively managing one's time and priorities to meet deadlines and achieve goals. This includes organizational skills and the ability to prioritize tasks",
    ],
  },
  {
    title: "Team Work",
    // company_name: "Meta",
    icon: teamwork,
    iconBg: "#a2d2ff",
    // date: "Jan 2023 - Present",
    points: [
      "The capacity to work collaboratively with others towards a common goal. This involves being open to others' ideas, offering support, and resolving conflicts.",
    ],
  },
  {
    title: "Leadership",
    // company_name: "Meta",
    icon: leadership,
    iconBg: "#a2d2ff",
    // date: "Jan 2023 - Present",
    points: [
      "The ability to inspire, motivate, and guide others. Leadership involves taking initiative, making decisions, and being accountable.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/Sathira004/web-scraping.git",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Leaf Classifications",
    description:
      'Developed a binary classification tensorflow keras neural network model for classify leafs',
    link: "https://github.com/Sathira004/Leaf-classification.git",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a web app for finding and comparing cars on the market.",
    link: "https://github.com/Sathira004/car_showcase.git",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Genius AI-tool",
    description:
      "Built a complete ai tool for generating text, audio, video, images and code.",
    link: "https://github.com/Sathira004/Genius.git",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Online food ordering system",
    description:
      "Developed a web application for finding and ordering food.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/Sathira004/AI-summarizing-tool.git",
  },
];
