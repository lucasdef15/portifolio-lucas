import { useState } from "react";
import { projectsData } from "../../data/ProjectsData";
import Card from "../common/Card";
import FullCard from "../common/FullCard";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-24 lg:py-28" id="projects">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus{" "}
            <span className="text-transparent bg-clip-text text-brand-gradient">
              Projetos
            </span>
          </h2>
          <p className="text-muted/80 text-lg max-w-2xl mx-auto">
            Uma seleção de trabalhos que demonstram minha jornada entre a
            engenharia e o desenvolvimento.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              index={index}
              project={project}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedId !== null && (
          <FullCard
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            projectsData={projectsData}
          />
        )}
      </div>
    </section>
  );
}
