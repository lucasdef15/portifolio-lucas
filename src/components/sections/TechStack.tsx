import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tooltip from "../common/Tooltip";

// ==================== IMPORTS ====================
import html5 from "../../assets/stacks/html5.svg";
import css3 from "../../assets/stacks/css.svg";
import javascript from "../../assets/stacks/javascript.svg";
import typescript from "../../assets/stacks/typescript.svg";

import react from "../../assets/stacks/react.svg";
import nextjs from "../../assets/stacks/nextdotjs.svg";
import tailwind from "../../assets/stacks/tailwindcss.svg";

import nodejs from "../../assets/stacks/nodedotjs.svg";
import express from "../../assets/stacks/express.svg";
import python from "../../assets/stacks/python.svg";

import postgresql from "../../assets/stacks/postgresql.svg";
import mysql from "../../assets/stacks/mysql.svg";

import threejs from "../../assets/stacks/threedotjs.svg";
import gsapSvg from "../../assets/stacks/gsap.svg";

import docker from "../../assets/stacks/docker.svg";
import git from "../../assets/stacks/git.svg";
import jest from "../../assets/stacks/jest.svg";

gsap.registerPlugin(ScrollTrigger);

const teckStackVariants: Variants = {
  initial: { scale: 1, y: 0, rotate: 0 },
  hover: {
    scale: 1.12,
    y: -8,
    rotate: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// ==================== ORDEM LÓGICA ====================
const stacks = [
  // === Frontend Fundamentals ===
  { img: html5, name: "HTML5" },
  { img: css3, name: "CSS3" },
  { img: javascript, name: "JavaScript" },
  { img: typescript, name: "TypeScript" },

  // === Frameworks & Styling ===
  { img: react, name: "React" },
  { img: nextjs, name: "Next.js" },
  { img: tailwind, name: "Tailwind CSS" },

  // === Backend ===
  { img: nodejs, name: "Node.js" },
  { img: express, name: "Express" },
  { img: python, name: "Python" },

  // === Databases ===
  { img: postgresql, name: "PostgreSQL" },
  { img: mysql, name: "MySQL" },

  // === Animation & 3D ===
  { img: gsapSvg, name: "GSAP" },
  { img: threejs, name: "Three.js" },

  // === Tools & Others ===
  { img: git, name: "Git" },
  { img: docker, name: "Docker" },
  { img: jest, name: "Jest" },
];

export default function TechStack() {
  const stackHeadingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".stack-card",
      { y: 50, opacity: 0, scale: 0.8, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        stagger: { each: 0.04, from: "center" },
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".stacks-grid",
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section className="py-20 md:py-24 lg:py-28" id="techstack">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div ref={stackHeadingRef} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Minha{" "}
            <span className="text-transparent bg-clip-text text-brand-gradient">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted/80 text-lg mt-4 max-w-2xl mx-auto">
            Tecnologias que utilizo para construir soluções robustas, do
            hardware médico ao software escalável.
          </p>
        </div>

        <div className="stacks-grid flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {stacks.map((stack) => (
            <Tooltip key={stack.name} text={stack.name}>
              <motion.div
                variants={teckStackVariants}
                whileHover="hover"
                className="stack-card glass-card h-24 w-24 md:h-28 md:w-28 p-5 flex items-center justify-center cursor-pointer hover:border-brand-start/40 transition-all duration-300"
              >
                <img
                  src={stack.img}
                  alt={stack.name}
                  className="h-14 w-14 md:h-16 md:w-16 object-contain 
                     brightness-0 invert-[0.9] hover:invert-[0.75] 
                     transition-all duration-300 drop-shadow-md"
                />
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
