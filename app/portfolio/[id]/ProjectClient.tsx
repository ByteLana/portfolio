"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  tech: string[];
  image: string;
};

export default function ProjectClient({ project }: { project: Project }) {
  const router = useRouter();

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
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:underline text-sm"
      >
        ← Back
      </button>

      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

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

      <p className="text-gray-700 text-lg mb-6">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Details</h2>
      <p className="text-gray-700 mb-6">{project.details}</p>

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