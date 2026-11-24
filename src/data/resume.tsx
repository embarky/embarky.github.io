import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Hang Yang",
  initials: "HY",
  url: "https://embarky.github.io",
  location: "Lausanne, Switzerland",
  locationLink: "https://www.google.com/maps/place/lausanne",
  description:
    "IT master's student at HEC Lausanne. I connect business processes and software: ERP integration, IoT and web platforms.",
  summary:
    "I study at [HEC Lausanne, University of Lausanne](/#education), where my work sits between business and technology. I like taking a real process (selling, renting, monitoring a room) and turning it into a system people can use: modelling it, integrating the tools a company already has, and shipping something that runs with one command.\n\nRecent work includes [opening an Odoo ERP sales process to customers](/#projects) through an API and web portals, [an IoT air-quality assistant](/#projects) with voice alerts and a cloud dashboard, and a full-stack rental platform in Jakarta EE.\n\nI am looking for an **industrial PhD** or an **industry role** in Switzerland, in digital transformation, enterprise systems or applied IoT.",
  avatarUrl: "https://github.com/embarky.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: false, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Selected work",
      text: "Each project runs locally with a single docker compose command, with tests and CI on GitHub.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Open to industrial PhD positions and roles in Switzerland. The quickest way to reach me is through [GitHub](https://github.com/embarky).",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "Docker", icon: Docker },
    { name: "FastAPI" },
    { name: "Flask" },
    { name: "Jakarta EE" },
    { name: "SQL / MySQL" },
    { name: "BigQuery" },
    { name: "Odoo ERP" },
    { name: "Node-RED" },
    { name: "BPMN & UML" },
    { name: "MicroPython / IoT" },
    { name: "CI with GitHub Actions" },
  ],
  navbar: [{ href: "/", icon: House, label: "Home" }],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/embarky",
        icon: Icons.github,
        navbar: true,
      },
    },
  },

  work: [],
  education: [
    {
      school: "HEC Lausanne, University of Lausanne",
      href: "https://www.unil.ch/hec",
      degree: "Master of Science in Information Systems",
      logoUrl: "https://www.google.com/s2/favicons?domain=unil.ch&sz=128",
      start: "",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Odoo Sales Integration",
      href: "https://github.com/embarky/odoo-sales-integration",
      dates: "2025",
      active: true,
      description:
        "Opened a company's Odoo ERP sales process to its customers. Modelled the process in BPMN and UML, exposed Odoo through a documented REST API, and built a customer portal, back office, service desk and KPI dashboards on top of it.",
      technologies: ["Odoo ERP", "FastAPI", "XML-RPC", "Node-RED", "BPMN", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/embarky/odoo-sales-integration",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/odoo-portal.png",
      video: "",
    },
    {
      title: "AuraSense",
      href: "https://github.com/embarky/AuraSense-M5StackCore2",
      dates: "2026",
      active: true,
      description:
        "An indoor air-quality assistant on an M5Stack Core2: live sensing, light and spoken alerts that work offline, a Gemini voice assistant, and a cloud backend with a web dashboard. 89 automated tests, down to the firmware.",
      technologies: ["MicroPython", "Flask", "BigQuery", "Gemini", "Streamlit", "Docker"],
      links: [
        {
          type: "Video",
          href: "https://www.youtube.com/watch?v=-8rTBZ_OiJc",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/embarky/AuraSense-M5StackCore2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/aurasense.jpg",
      video: "",
    },
    {
      title: "Luxury Car Rental",
      href: "https://github.com/embarky/LuxuryCarRental",
      dates: "",
      active: true,
      description:
        "A car rental platform in a three-layer Jakarta EE architecture: JSF front end, secured REST API and MySQL. Covers the full booking life cycle, from licence checks and payment to hand-over, return and refund, plus an admin dashboard.",
      technologies: ["Java 17", "Jakarta EE 10", "JSF", "JAX-RS", "MySQL", "Testcontainers"],
      links: [
        {
          type: "Source",
          href: "https://github.com/embarky/LuxuryCarRental",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/carrental.jpg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
