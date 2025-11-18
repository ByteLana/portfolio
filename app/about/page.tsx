"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header />

      <motion.main
        className="mt-24 px-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Заголовок */}
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Основной текст с плавным появлением */}
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi! I'm <span className="font-semibold">Ruslana</span>, a passionate
          and motivated Front-End Developer. I enjoy creating beautiful,
          intuitive, and high-quality user interfaces. Every day I grow my
          skills, learn new technologies, and explore how to make web
          experiences better.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          I focus on writing clean, maintainable code and always aim to deliver
          polished, responsive layouts. My main tools are{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </motion.p>

        {/* Секция навыков */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>

          <div className="grid grid-cols-2 gap-4 text-gray-800 text-lg">
            <motion.div whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg">
              HTML & CSS
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg">
              JavaScript
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg">
              React
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg">
              Next.js
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg">
              Tailwind CSS
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg">
              TypeScript
            </motion.div>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}
