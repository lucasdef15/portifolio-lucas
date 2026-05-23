import {
  BsFillBuildingFill,
  BsCalendar3,
  BsCheck2Circle,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";
import { routesVariants } from "../animations/animations";
import AboutCard from "../components/common/AboutCard";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        easeOut: true,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.section
      className="py-35 lg:py-30"
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <section className="flex flex-col gap-6">
          <motion.h2
            className="text-brand-gradient text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sobre Mim
          </motion.h2>

          <motion.div
            className="about__description flex max-w-[800px] flex-col gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-lg lg:text-xl leading-relaxed text-subtle">
              Sou um profissional híbrido com sólida experiência em{" "}
              <strong className="text-foreground">Engenharia Clínica</strong> e
              paixão pelo{" "}
              <strong className="text-foreground">
                Desenvolvimento Fullstack
              </strong>
              .
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-subtle">
              Como{" "}
              <strong className="text-foreground">Supervisor Técnico</strong>,
              desenvolvi um olhar crítico para otimização de processos,
              competências que aplico ao arquitetar interfaces de alta
              performance.
            </p>
          </motion.div>
        </section>

        <section className="work flex flex-col gap-12 my-20">
          <motion.h2
            className="text-muted text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight border-b border-white/5 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trajetória Profissional
          </motion.h2>

          <div className="flex flex-col gap-8">
            <AboutCard
              title="Supervisor de Engenharia Clínica"
              badge="Atual"
              company="Equipacare (Hospital São Lucas)"
              location="Ribeirão Preto, SP"
              period="Abr 2026 - Presente"
              index={0}
              cardVariants={cardVariants}
              borderColor="brand-start"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Supervisão técnica hospitalar.",
                  "Gestão de manutenção e calibração.",
                  "Otimização de fluxos de trabalho.",
                  "Liderança de equipes técnicas.",
                ].map((task, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-subtle"
                  >
                    <BsCheck2Circle className="text-brand-end shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </AboutCard>

            <AboutCard
              title="Desenvolvedor Fullstack"
              badge="Ativo"
              period="2022 — Presente"
              index={1}
              cardVariants={cardVariants}
              borderColor="brand-end"
            >
              <p className="text-sm leading-relaxed text-subtle">
                Atuação contínua em projetos independentes e arquitetura de
                software, focando em tecnologias modernas como{" "}
                <strong>React, Next.js e AWS</strong>.
              </p>
            </AboutCard>

            <AboutCard
              title="Técnico de Eletrônica (Metrologia & Calibração)"
              company="Ribertec Hospitalar"
              location="Ribeirão Preto, SP"
              period="Jun 2025 — Mar 2026"
              index={2}
              cardVariants={cardVariants}
              borderColor="none"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <p className="text-sm leading-relaxed text-subtle">
                Foco em metrologia legal e engenharia clínica, realizando
                ensaios de segurança elétrica, calibrações minuciosas e
                manutenções preventivas em equipamentos médicos de alta
                complexidade.
              </p>
            </AboutCard>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
