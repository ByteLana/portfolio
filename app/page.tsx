"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />

      {/* Контейнер всей страницы с fade-in */}
      <motion.main
        className="mt-24 px-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="flex flex-col gap-8">
          
          {/* Заголовок */}
          <motion.h1
            className="text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hi, I'm Ruslana 👋  
            <br />
            <span className="text-blue-600">
              Front-End Developer
            </span>
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            className="text-lg text-gray-600 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I build beautiful, responsive, and user-friendly websites.  
            Welcome to my portfolio — here you can explore my work, skills,
            and get in touch with me.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              View Portfolio
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="border border-gray-400 px-6 py-3 rounded-lg font-medium"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
}
