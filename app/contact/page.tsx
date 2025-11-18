"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Header />

      <motion.main
        className="mt-24 px-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Заголовок */}
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        {/* Текст */}
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          I’d love to hear from you! Whether it's a collaboration, a question,
          or just to say hello — feel free to send me a message using the form
          below.
        </motion.p>

        {/* Форма */}
        <motion.form
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Name */}
          <motion.div
            className="flex flex-col gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <label className="font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <label className="font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            className="flex flex-col gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <label className="font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            ></textarea>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.main>
    </>
  );
}