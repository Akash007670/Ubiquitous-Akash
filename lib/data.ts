import React from "react";
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
    tags: ["React.js ", "Next.js", "Sanity.io"],
    githubLink: "https://github.com/Akash007670/MyBillBook",
    liveLink: "https://mybillbook-flobiz.netlify.app/",
    imageUrl: MyBillBookImg,
  },
] as const;
