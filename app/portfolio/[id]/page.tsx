"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

// ТА ЖЕ БАЗА ПРОЕКТОВ, ЧТО И В PORTFOLIO
const projects = [
  {
    id: "project1",
    title: "E-Commerce Landing Page",
    description:
      "A modern responsive landing page with product sections, animations, and clean UI.",
    details:
      "This project demonstrates high-quality landing page development using modern UI/UX techniques. Includes animations, responsive grids, and full mobile adaptivity.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/project1.jpg",
  },
  {
    id: "project2",
    title: "Weather App",
    description:
      "A weather forecasting application with API integration and beautiful UI.",
    details:
      "Weather App that integrates a public weather API and displays current weather, forecasts, and dynamic icons depending on conditions.",
    tech: ["React", "API", "CSS Modules"],
    image: "/projects/project2.jpg",
  },
  {
    id: "project3",
    title: "Portfolio Website",
    description:
      "Personal portfolio with animations, pages, and dynamic components.",
    details:
      "A fully animated Next.js portfolio with reusable components, transitions, modals, and dynamic routing.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project3.jpg",
  },
];

export default function ProjectPage({ params }) {
  const router = useRouter();

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="text-center text-2xl mt-32">
        ❌ Project not found
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 mt-24 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Назад */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:underline text-sm"
      >
        ← Back
      </button>

      {/* Заголовок */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

      {/* Фото */}
      <motion.div
        className="w-full h-72 relative overflow-hidden rounded-xl shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Краткое описание */}
      <p className="text-gray-700 text-lg mb-6">{project.description}</p>

      {/* Подробности */}
      <h2 className="text-2xl font-semibold mb-3">Details</h2>
      <p className="text-gray-700 mb-6">{project.details}</p>

      {/* Технологии */}
      <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
      <div className="flex flex-wrap gap-3 mb-12">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Кнопка назад */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/portfolio")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
      >
        Back to Portfolio
      </motion.button>
    </motion.div>
  );
}
