"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
};

type ProjectPageProps = {
  params: {
    id: string;
  };
};

const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Landing",
    description:
      "Modern landing page with product sections, animations, and clean UI.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/project1.jpg",
  },
  {
    id: "project2",
    title: "Weather App",
    description:
      "A weather forecasting application with API integration and beautiful UI.",
    tech: ["React", "API", "CSS Modules"],
    image: "/projects/project2.jpg",
  },
  {
    id: "project3",
    title: "Portfolio Website",
    description:
      "Personal portfolio with animations, pages, and dynamic components.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project3.jpg",
  },
];
