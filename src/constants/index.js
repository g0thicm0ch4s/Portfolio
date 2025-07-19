import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import outlier from "../assets/company/outlier.png";
import techgyan from "../assets/company/techgyan.png";
import jobhub from "../assets/jobhub.png";
import healthbot from "../assets/healthbot.png";
import python from "../assets/tech/python.png";
import c from "../assets/tech/c.png";
import cpp from "../assets/tech/cpp.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "ML Enthusiast",
    icon: web,
  },
  {
    title: "Tech Explorer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI Model Trainer",
    company_name: "Outlier AI",
    icon: outlier,
    iconBg: "#383E56",
    date: "September 2024 - February 2025",
    points: [
      "Worked at Outlier.ai as an AI Model Trainer, focused on enhancing the performance of large language models (LLMs) through techniques like Reinforcement Learning from Human Feedback (RLHF).",
      "Contributed to improving model accuracy, relevance, and alignment with human intent.",
      "Actively participated in workshops, training sessions, and mentorship programs to support continuous learning and professional growth.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Techgyan Solutions New Delhi",
    icon: techgyan,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Worked on projects utilizing regression techniques such as linear, logistic, and polynomial regression.",
      "Analyzed data trends and built predictive models to uncover patterns and inform decision-making.",
      "Derived actionable insights by applying statistical analysis to real-world datasets.",
    ],
  },
];

const projects = [
  {
    name: "JobHub",
    description:
      "JobHub is a web application designed to streamline the job application process. It provides a user-friendly interface for job seekers to apply for jobs and for employers to manage job postings",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobhub,
    source_code_link: "https://github.com/",
  },
  {
    name: "Healthbot",
    description:
      "Developed an AI-enabled healthbot that interacts with patients to identify possible common illnesses—such as cold, fever, and cough—based on their symptoms, and provides referrals to doctors for further diagnosis and care.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: healthbot,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
