import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Hang Yang",
  initials: "HY",
  url: "https://embarky.github.io",
  location: "Lausanne, Switzerland",
  locationLink: "https://www.google.com/maps/place/lausanne",
  description:
    "MSc student in Information Systems at HEC Lausanne. I like working with data and building things where business and technology meet.",
  summary:
    "I study [Information Systems and Digital Innovation](/#education) at HEC Lausanne, after a bachelor's in Data Science and Big Data Technology in China.\n\nBefore Lausanne I spent [a year at Dongfeng Huashen](/#work), part of Dongfeng Special Commercial Vehicle, working with truck sensor and fault data: predicting faults with XGBoost, building Power BI dashboards for the R&D team, and making the data pipelines faster and more reliable.\n\nThese days I enjoy [building small systems end to end](/#projects): an ERP integration for Odoo, an air-quality assistant that talks, and a car rental platform in Jakarta EE.",
  avatarUrl: "https://github.com/embarky.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Selected work",
      text: "MSc projects at UNIL. Each one runs locally with a single docker compose command, with tests and CI on GitHub.",
    },
    hackathons: {
      order: 6,
      enabled: true,
      label: "Earlier projects",
      heading: "Competitions & awards",
      text: "Projects from my bachelor's years, most of them recognised in national competitions.",
    },
    photos: {
      order: 7,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Say hi at [hang.yang@unil.ch](mailto:hang.yang@unil.ch), or find my code on [GitHub](https://github.com/embarky).",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL" },
    { name: "Java (Jakarta EE)", icon: Java },
    { name: "pandas" },
    { name: "scikit-learn" },
    { name: "XGBoost / LightGBM" },
    { name: "Spark SQL" },
    { name: "Power BI" },
    { name: "Google Cloud (BigQuery)" },
    { name: "Docker", icon: Docker },
    { name: "FastAPI / Flask" },
    { name: "MySQL / PostgreSQL", icon: Postgresql },
    { name: "Odoo ERP" },
    { name: "OpenCV / YOLOv5" },
  ],
  navbar: [{ href: "/", icon: House, label: "Home" }],
  contact: {
    email: "hang.yang@unil.ch",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/embarky",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:hang.yang@unil.ch",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Dongfeng Huashen (Dongfeng Special Commercial Vehicle)",
      href: "https://www.dfsv.com.cn/huashen.html",
      badges: [],
      location: "Shiyan, China",
      title: "Data Engineer",
      logoUrl: "/logos/dongfeng.webp",
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "- Re-designed the indexes of the vehicle-record tables in a MySQL master-slave setup, cutting query latency from 1.2 s to 0.4 s.\n- Designed data-integrity rules (VIN format, timestamp continuity) that resolved 50+ sensor-data misalignments per month.\n- Built Spark SQL batch jobs that standardised 10+ vehicle signal types into Parquet datasets for the algorithm team.",
    },
    {
      company: "Dongfeng Huashen (Dongfeng Special Commercial Vehicle)",
      href: "https://www.dfsv.com.cn/huashen.html",
      badges: [],
      location: "Shiyan, China",
      title: "Data Analyst Intern",
      logoUrl: "/logos/dongfeng.webp",
      start: "Feb 2023",
      end: "Sep 2023",
      description:
        "- Built an XGBoost classifier on sensor and fault data to predict the risk of critical fault codes (73% accuracy).\n- Developed a Power BI vehicle-performance dashboard (fault heatmap, driving-behaviour radar) that helped R&D find high-failure components; 200+ visits per day.\n- Automated daily and weekly driving reports that flag abnormal fluctuations, saving 15 hours of manual analysis per week.",
    },
  ],
  education: [
    {
      school: "HEC Lausanne, University of Lausanne",
      href: "https://www.unil.ch/hec",
      degree: "MSc in Information Systems and Digital Innovation",
      logoUrl: "/logos/unil.svg",
      start: "2025",
      end: "2027 (expected)",
    },
    {
      school: "China Three Gorges University",
      href: "https://www.ctgu.edu.cn",
      degree: "BEng in Data Science and Big Data Technology",
      logoUrl: "/logos/ctgu.webp",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Odoo Sales Integration",
      href: "https://github.com/embarky/odoo-sales-integration",
      dates: "Autumn 2025 · Enterprise Data and Integration",
      active: true,
      description:
        "Opened a company's Odoo ERP sales process to its customers. Modelled the process in BPMN and UML, exposed Odoo through a FastAPI service with 20+ endpoints (quotations, orders, invoices, purchasing), and built a customer portal, back office and KPI dashboards on top.",
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
      dates: "Spring 2026 · Cloud and Advanced Analytics",
      active: true,
      description:
        "An edge-to-cloud air-quality monitor on an M5Stack Core2: three sensors, light and voice alerts, a Gemini voice assistant, and a Flask + BigQuery back-end with a Streamlit dashboard on Google Cloud.",
      technologies: ["MicroPython", "Flask", "BigQuery", "Gemini API", "GCP", "Docker"],
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
      dates: "Autumn 2025 · Software Architectures",
      active: true,
      description:
        "A multi-tier Jakarta EE platform: domain, REST service (~40 JAX-RS endpoints) and JSF front end, with MySQL, e-mail notifications and an admin dashboard. Covers the full booking life cycle, from licence checks to hand-over and refund.",
      technologies: ["Java 17", "Jakarta EE", "JAX-RS", "JSF", "MySQL", "Docker"],
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
  hackathons: [
    {
      title: "Vehicle Fault Diagnosis",
      dates: "2023",
      location: "6th place (top 2%), 6th Dongfeng Youth Digital Innovation & Skills Challenge",
      description:
        "Cleaned 100,000+ fault codes and sensor records and built an XGBoost model to diagnose high-frequency faults, with a Power BI dashboard of fault heatmaps and health scores. Troubleshooting became 40% faster, saving an estimated USD 150K a year in after-sales costs.",
      image: "",
      links: [],
    },
    {
      title: "Intelligent Power Maintenance System",
      dates: "2022 – 2023 · Bachelor thesis",
      location: "China Three Gorges University",
      description:
        "Trained a YOLOv5 insulator-defect detector with transfer learning on ~2,000 images (91.5% test accuracy) and built a small web service for maintenance records and work orders.",
      image: "",
      links: [],
    },
    {
      title: "Machine-Learning Trading Strategy",
      dates: "2021 – 2022",
      location: "First Prize, 9th National Securities Investment Simulation Competition · Third Prize, 7th Eastmoney Cup",
      description:
        "Designed a LightGBM mid-frequency strategy combining sentiment and momentum factors with dynamic risk parity and adaptive stops (24.3% annualised return in backtesting).",
      image: "",
      links: [],
    },
    {
      title: "Depth-Vision Smart Cane",
      dates: "2021",
      location: "Third Prize, 9th National Digital Media Sci-Tech Works and Creativity Competition",
      description:
        "Calibrated an Intel RealSense RGB-D camera and built a labelled set of 1,000+ depth images for real-time obstacle detection, with audio-vibration feedback for visually impaired users.",
      image: "",
      links: [],
    },
  ],
} as const;
