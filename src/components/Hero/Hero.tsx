import { motion, type Variants } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Button from "../common/Button";
import HeroModel from "../3d/HeroModel";

const floatAnimation: Variants = {
  initial: { y: 20 },
  visible: {
    y: -20,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 4,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const container3D = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-text-content > *",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1.2 },
      );

      if (container3D.current) {
        tl.fromTo(
          container3D.current,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.8, ease: "expo.out" },
          "-=1",
        );
      }
    },
    { scope: container },
  );

  return (
    <section ref={container} id="hero" className="py-32 md:py-40 lg:py-35">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-20 pointer-events-none">
          <div className="rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-18 items-center w-full">
          <div className="hero-text-content flex flex-col gap-6 z-20 order-1 lg:order-1">
            <div className="space-y-2">
              <h1>
                Lucas{" "}
                <span className="text-transparent bg-clip-text text-brand-gradient">
                  Faria
                </span>
              </h1>
              <h2>
                Desenvolvedor Fullstack & Especialista em Engenharia Clínica
              </h2>
            </div>

            <p>
              Unindo a precisão do hardware médico à escalabilidade do software
              moderno para criar soluções de alto impacto no setor de saúde.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="inline-block">
                <Button variant="primary" size="lg">
                  Ver Projetos
                </Button>
              </a>
              <a href="/contact" className="inline-block">
                <Button variant="outline" size="lg">
                  Contato
                </Button>
              </a>
            </div>
          </div>

          <motion.div
            ref={container3D}
            variants={floatAnimation}
            initial="initial"
            animate="visible"
            className="order-2 lg:order-2 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] aspect-square rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-slate-950/50 to-transparent">
              <HeroModel />

              <div className="absolute inset-0 bg-cyan-400/10 blur-3xl -z-10 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
