import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BhumioSyncImg from "@/public/bhumios-sync.png";
import AkashEStoreImg from "@/public/e-commerce.png";
import MyBillBookImg from "@/public/mybillbook.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "BhumioSync",
    description:
      "Built an app using React.js where users can upload or use sample CSV data to parse and view it in the form of a table, and perform multiple operations such as search, delete, edit, and persist data throughout the session. Users can download updated csv and view it in form of Bar chart as well.",
    tags: ["React.js", "Papaparse", "Primereact", "Chart.js"],
    githubLink: "https://github.com/Akash007670/tech-bhumio",
    liveLink: "https://bhumios-sync.netlify.app/",
    imageUrl: BhumioSyncImg,
  },
  {
    title: "Akash's E-store",
    description:
      "Built an e-commerce store using react.js. Users can navigate through the list of items that are present in the UI and can perform multiple operations like adding item to the cart and delete and updating items",
    tags: ["React.js", "Next.js", "Sanity.io"],
    githubLink: "https://github.com/Akash007670/E-commerce",
    liveLink: "https://e-commerce-dusky-seven.vercel.app/",
    imageUrl: AkashEStoreImg,
  },
  {
    title: "MyBillBook",
    description:
      "Built an app in which users can interact with Landing page to log in it will take them to the items page and they can Add/Create/Edit and search items using the form. Users can’t see item page without login as protected routes is implemented here.",
    tags: ["React.js ", "Chakra-UI", "Auth", "Styled-components"],
    githubLink: "https://github.com/Akash007670/MyBillBook",
    liveLink: "https://mybillbook-flobiz.netlify.app/",
    imageUrl: MyBillBookImg,
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech CSE",
    location: "LPU, Jalandhar",
    description:
      " I pursued my Bachelor's degree in Computer Science and Engineering from Lovely Professional University. Throughout my time at university, I was deeply engaged in coursework that ranged from fundamental concepts to advanced topics in the field. This comprehensive education has equipped me with the knowledge and expertise necessary to excel as a Frontend developer",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Disecto Technologies",
    description:
      "I worked as a front-end developer for 1 year at Disecto Technologies where I was responsible for the development of data anonymization application/classification from the scratch and creating good user experience and scaling up the development rate.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer Trainee",
    location: "GoGroup",
    description:
      "Currently I'm working at GoGroup where I Designed and Implemented web application along with dashboards UI Enhancements. Added reusable components using react/redux and sass for better User Experience across all the products. Also revamped the entire landing page for better navigation and improved SEO for the product",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Redux",
  "Git",
  "Chakra-UI",
  "Styled-Components",
  "Figma",
  "Tailwind",
  "MongoDB",
  "Express.js",
  "Chart.js",
  "Sass",
  "Framer Motion",
  "TypeScript",
  "GraphQL",
] as const;
