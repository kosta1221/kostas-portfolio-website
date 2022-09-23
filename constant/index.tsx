import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";

const menuLinks = [
  { name: "About Me", route: "/about" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/articles" },
  { name: "Contact", route: "/contact" },
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

export { menuLinks, siteConfig };
