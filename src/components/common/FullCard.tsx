import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import type { Project } from "../../data/ProjectsData";
import Slider from "./Slider";

type FullCardProps = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  projectsData: Project[];
};

export default function FullCard({
  selectedId,
  setSelectedId,
  projectsData,
}: FullCardProps) {
  const selectedProject = projectsData.find((p) => p.id === selectedId);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!selectedProject || selectedId === null) return null;

  const hasLiveLink = Boolean(selectedProject.livePreviewLink?.trim());

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        onClick={() => setSelectedId(null)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative flex max-h-[92vh] w-full max-w-6xl flex-col lg:flex-row overflow-hidden rounded-3xl bg-[#161b22] border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95"
            onClick={() => setSelectedId(null)}
          >
            <IoClose size={26} />
          </button>

          <div className="relative w-full lg:w-[58%] shrink-0 bg-[#0d1117] flex items-center justify-center overflow-hidden">
            <Slider selectedProject={selectedProject} />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col w-full overflow-y-auto p-7 lg:p-10 custom-scrollbar">
            <div className="flex flex-col gap-6 h-full">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs uppercase tracking-widest font-medium text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg border-b border-white/10 pb-2">
                  Sobre o projeto
                </h3>
                <p className="text-base lg:text-lg leading-relaxed text-slate-400">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto pt-8">
                {hasLiveLink && (
                  <a
                    href={selectedProject.livePreviewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 hover:bg-blue-500 py-4 font-semibold text-white transition-all active:scale-[0.985]"
                  >
                    <BsLink45Deg size={24} />
                    Ver Demo ao Vivo
                  </a>
                )}

                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 py-4 font-semibold text-white transition-all active:scale-[0.985]"
                >
                  <BsGithub size={23} />
                  Ver Código no GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
