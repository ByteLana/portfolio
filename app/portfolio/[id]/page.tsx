import ProjectClient from "./ProjectClient";

type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  tech: string[];
  image: string;
};

const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Landing Page",
    description:
      "A modern responsive landing page with product sections, animations, and clean UI.",
    details:
      "This project demonstrates high-quality landing page development using modern UI/UX techniques.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/project1.jpg",
  },
  {
    id: "project2",
    title: "Weather App",
    description:
      "A weather forecasting app with API integration and beautiful UI.",
    details:
      "Weather App that integrates a public weather API and displays current weather conditions.",
    tech: ["React", "API", "CSS Modules"],
    image: "/projects/project2.jpg",
  },
  {
    id: "project3",
    title: "Portfolio Website",
    description:
      "Personal portfolio with animations, pages, and dynamic components.",
    details:
      "A fully animated Next.js portfolio with transitions and dynamic routing.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project3.jpg",
  }
];

// ✅ ОБЯЗАТЕЛЬНО! Next.js требует это для output: "export"
export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return <ProjectClient project={project} />;
}
