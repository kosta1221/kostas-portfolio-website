import {
  SiAzuredevops,
  SiCircleci,
  SiGmail,
  SiGooglecloud,
  SiKubernetes,
  SiTypescript,
} from "react-icons/si";
import {
  FaLinkedin,
  FaMedium,
  FaGithub,
  FaJava,
  FaReact,
  FaNode,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";

const menuLinks = [
  { name: "About Me", route: "/about" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/articles" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Kosta K. All Rights Reserved.`,
  author: {
    name: "Kosta K",
    accounts: [
      {
        url: process.env.GITHUB_URL,
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: process.env.LINKEDIN_URL,
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: process.env.MEDIUM_URL,
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: process.env.MAILTO_URL,
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const techStacks = [
  {
    name: "TypeScript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "NodeJS",
    icon: <FaNode fontSize="20px" />,
    url: "https://nodejs.org",
  },
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactjs.org",
  },
  {
    name: "Python",
    icon: <FaPython fontSize="20px" />,
    url: "https://www.python.org",
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com",
  },
  {
    name: "Docker",
    icon: <FaDocker fontSize="20px" />,
    url: "https://www.docker.com",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes fontSize="20px" />,
    url: "https://kubernetes.io",
  },
  {
    name: "AWS",
    icon: <FaAws fontSize="20px" />,
    url: "https://aws.amazon.com",
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud fontSize="20px" />,
    url: "https://cloud.google.com",
  },
  {
    name: "Azure",
    icon: <SiAzuredevops fontSize="20px" />,
    url: "https://azure.microsoft.com",
  },
  {
    name: "Github, Bitbucket",
    icon: <FaGithub fontSize="20px" />,
    url: "https://github.com",
  },
  {
    name: "CircleCi, GH Actions",
    icon: <SiCircleci fontSize="20px" />,
    url: "https://circleci.com",
  },
];

export { menuLinks, siteConfig, techStacks };
