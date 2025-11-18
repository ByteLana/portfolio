"use client";

import { motion } from "framer-motion";

export default function Modal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Тёмный фон */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Модальное окно */}
      <motion.div
        className="relative z-10 bg-white rounded-xl max-w-lg w-full p-6 shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Кнопка закрытия */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Заголовок */}
        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

        {/* Описание */}
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Теги */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string, idx: number) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Кнопки */}
        <div className="flex gap-4">
          <a
            href={`/portfolio/${project.id}`}
            className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg font-medium"
          >
            Open Full Page
          </a>
          <button
            onClick={onClose}
            className="flex-1 text-center border py-2 rounded-lg font-medium"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
