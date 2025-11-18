"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
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

export default function PortfolioPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 rounded-xl border border-gray-700 bg-gray-900"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <Image
                src={project.image}
                width={600}
                height={350}
                alt={project.title}
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}