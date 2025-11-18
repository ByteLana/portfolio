"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
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

  return (
    <>
      <Header />

      <motion.main
        className="mt-24 px-8 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Заголовок */}
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg bg-white border hover:shadow-xl transition relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Картинка */}
              <div
                className="relative h-48 w-full overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-110"
                />

                {/* Тёмный градиент */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Контент */}
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Кнопка открывает модалку */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Модалка */}
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.main>
    </>
  );
}
