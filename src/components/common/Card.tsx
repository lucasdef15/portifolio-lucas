import { motion } from "framer-motion";
import type { Project } from "../../data/ProjectsData";

type CardProps = {
  project: Project;
  setSelectedId: (id: string | null) => void;
  index: number;
};

export default function Card({ project, setSelectedId }: CardProps) {
  return (
    <motion.div
      onClick={() => setSelectedId(project.id)}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer flex flex-col bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Imagem */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.coverImage[0]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-widest font-medium text-blue-400/80 bg-blue-500/5 px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
