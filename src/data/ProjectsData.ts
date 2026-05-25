import githubpage1 from "../assets/projects/githubimgs/page1.webp";
import githubpage2 from "../assets/projects/githubimgs/page2.webp";
import githubpage3 from "../assets/projects/githubimgs/page3.webp";
import githubpage4 from "../assets/projects/githubimgs/page4.webp";

import blog1 from "../assets/projects/blog/blog1.jpeg";
import blog2 from "../assets/projects/blog/blog2.jpeg";
import blog3 from "../assets/projects/blog/blog3.jpeg";
import blog4 from "../assets/projects/blog/blog4.jpeg";

import csv1 from "../assets/projects/csv/page1.png";

import personal1 from "../assets/projects/completeBlog/personal1.webp";
import personal2 from "../assets/projects/completeBlog/personal2.webp";
import personal3 from "../assets/projects/completeBlog/personal3.webp";
import personal4 from "../assets/projects/completeBlog/personal4.webp";
import personal5 from "../assets/projects/completeBlog/personal5.webp";
import personal6 from "../assets/projects/completeBlog/personal6.webp";

import auth1 from "../assets/projects/auth/page1.png";

import newsletter1 from "../assets/projects/newsletter/page1.webp";
import newsletter2 from "../assets/projects/newsletter/page2.webp";
import newsletter3 from "../assets/projects/newsletter/page3.webp";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string;
  technologies: string[];
  livePreviewLink: string;
  codeLink: string;
  coverImage: string[];
};

export const projectsData: Project[] = [
  {
    id: "0",
    title: "Plataforma de Gerenciamento de Conteúdo (CMS)",
    description:
      "CMS corporativo customizado de ponta a ponta para cliente internacional. Integra um editor rico (WYSIWYG) para criação e formatação em tempo real, além de arquitetura RBAC para isolamento seguro do painel administrativo.",
    techStack: "React.js, TypeScript, Node.js, Express, Material UI",
    technologies: ["React", "TypeScript", "Node.js", "Express", "RBAC"],
    livePreviewLink: "https://r2619.us/",
    codeLink: "https://github.com/lucasdef15/butterflies-hurricane",
    coverImage: [
      personal6, // Coloquei o personal6 primeiro porque mostra o blog ativo e chama mais atenção visualmente
      personal1,
      personal2,
      personal3,
      personal4,
      personal5,
    ],
  },
  {
    id: "1",
    title: "CSV to PDF Converter",
    description:
      "Ferramenta de conversão de dados estruturados em tempo real utilizando processamento assíncrono no back-end. Desenvolvido com tipagem estrita e validações robustas para garantir estabilidade no processamento.",
    techStack: "React.js, TypeScript, Node.js, Express, Tailwind CSS",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind",
      "Asynchronous",
    ],
    livePreviewLink: "https://csv-to-pdf-livid.vercel.app/",
    codeLink: "https://github.com/lucasdef15/csvToPdf.git",
    coverImage: [csv1],
  },
  {
    id: "2",
    title: "Backend Auth System",
    description:
      "Sistema focado em segurança para autenticação e autorização de utilizadores. Implementa criptografia de palavras-passe, controlo de sessões e conteinerização completa da aplicação e da base de dados via Docker.",
    techStack: "Node.js, Express, Docker, MySQL",
    technologies: ["Node.js", "Express", "Docker", "MySQL", "Security"],
    livePreviewLink: "", // Mantido vazio conforme o original
    codeLink: "https://github.com/lucasdef15/auth_project.git",
    coverImage: [auth1],
  },
  {
    id: "3",
    title: "Personal Blog",
    description:
      "Plataforma de conteúdo estático baseada em renderização dinâmica de Markdown. Focado em performance máxima e UI imersiva, utiliza a biblioteca GSAP para criar transições e animações fluidas de alto padrão.",
    techStack: "React.js, GSAP, React Markdown, React-Router",
    technologies: ["React", "GSAP", "Markdown", "Animations"],
    livePreviewLink: "https://frontend-mentor-blog-delta.vercel.app/",
    codeLink: "https://github.com/lucasdef15/frontend_mentor_blog.git",
    coverImage: [blog4, blog1, blog2, blog3],
  },
  {
    id: "4",
    title: "GitHub User Search",
    description:
      "Dashboard de consulta de dados integrado diretamente com a API oficial do GitHub. Implementa hooks customizados para a persistência de estados no Local Storage e interface ágil construída com Material UI.",
    techStack: "React.js, Context API, Axios, Material UI",
    technologies: ["React", "Material UI", "REST API", "Context API"],
    livePreviewLink: "https://github-user-search-wheat.vercel.app/",
    codeLink: "https://github.com/lucasdef15/github-user-search",
    coverImage: [githubpage1, githubpage2, githubpage3, githubpage4],
  },
  {
    id: "5",
    title: "Newsletter Sign-up",
    description:
      "Aplicação concebida com foco em UX e validação rigorosa de formulários. Utiliza React Hook Form e Yup para garantir a integridade dos dados inseridos, com um layout responsivo via Styled Components.",
    techStack: "React.js, Styled-components, React-Hook-Form, Yup",
    technologies: ["React", "Styled Components", "UX", "Form Validation"],
    livePreviewLink: "https://newsletter-sign-up-sigma.vercel.app/",
    codeLink: "https://github.com/lucasdef15/newsletter-sign-up",
    coverImage: [newsletter1, newsletter2, newsletter3],
  },
];
