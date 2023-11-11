import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  css,
  docker,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  openai,
  python,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  threejs,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    name: "HTML 5",
    imageURL: html,
    type: "Frontend",
  },
  {
    name: "CSS 3",
    imageURL: css,
    type: "Frontend",
  },
  {
    name: "JavaScript",
    imageURL: javascript,
    type: "Frontend",
  },
  //   {
  //     name: "Python",
  //     imageURL: python,
  //     type: "Backend",
  //   },
  {
    name: "React JS",
    imageURL: react,
    type: "Frontend",
  },
  {
    name: "Redux",
    imageURL: redux,
    type: "State Management",
  },
  {
    name: "Tailwind CSS",
    imageURL: tailwindcss,
    type: "Frontend",
  },
  {
    name: "Node JS",
    imageURL: nodejs,
    type: "Backend",
  },
  {
    name: "MongoDB",
    imageURL: mongodb,
    type: "Database",
  },
  //   {
  //     name: "Three JS",
  //     imageURL: threejs,
  //     type: "Frontend",
  //   },
  {
    name: "Git",
    imageURL: git,
    type: "Version Control",
  },
  {
    name: "GitHub",
    imageURL: github,
    type: "Version Control",
  },
  //   {
  //     name: "docker",
  //     imageURL: docker,
  //     type: "Database",
  //   },
  //   {
  //     name: "openai",
  //     imageURL: openai,
  //     type: "API",
  //   },
  {
    name: "Next JS",
    imageURL: nextjs,
    type: "Frontend",
  },
  {
    name: "Express",
    imageURL: express,
    type: "Backend",
  },
  //   {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    iconUrl: "",
    theme: "btn-back-red",
    name: "Ai Summarizer",
    description:
      "This is a webpage summarizer app that uses OpenAI's GPT to extract and summarize news or article content from a given URL.",
    git: "https://github.com/avengeance/aiSu",
    link: "https://ai-summarizer-jnku.onrender.com/",
  },
  {
    iconUrl: "",
    theme: "btn-back-green",
    name: "DALL-E Clone",
    description:
      "A clone of the popular web based application created by OpenAI. Where users can use a prompt generator and create images to the limits of their imagination.",
    git: "https://github.com/avengeance/Dalle-e-Clone",
    link: "https://dalle-e-hvpi.onrender.com/",
  },
  {
    iconUrl: "",
    theme: "btn-back-blue",
    name: "ThreeJS AI Shirt Customizer",
    description:
      "A web based appliaction where a user can upload or use an AI prompt to customize a shirt.",
    git: "https://github.com/avengeance/threejs",
    link: "https://threejs-ai-27n4.onrender.com/",
  },
  {
    iconUrl: "",
    theme: "btn-back-pink",
    name: "Whatcha' Makin",
    description:
      "Web-based platform that allows users to search, create, and manage recipes from various providers, providing a convenient and efficient solution for cooking needs.",
    git: "https://github.com/avengeance/whatcha_makin",
    link: "https://whatchamakin.onrender.com/",
  },
  {
    iconUrl: "",
    theme: "btn-back-black",
    name: "SoundCloud clone",
    description:
      "Web application that enables users to upload and listen to songs that other users have created. Users can create playlists of their favorite songs.",
    git: "https://github.com/avengeance/soundcloudClone",
    link: "https://soundcloudclone.onrender.com/",
  },
  {
    iconUrl: "",
    theme: "btn-back-yellow",
    name: "Airbnb Clone",
    description:
      "A web based application where users can upload and book rental properties. Users can also like and review rental properties they've been before.",
    git: "https://github.com/avengeance/AirBnB-Clone",
    link: "https://airbnb-clone-p0y8.onrender.com/",
  },
];
