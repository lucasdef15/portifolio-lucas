import { useState } from "react";
import { MdOutlineMailOutline, MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import cvpdf from "../download/Lucas_cv.pdf";
import Button from "../components/common/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Erro ao enviar e-mail.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Houve um erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSent(false), 4000);
    }
  };

  return (
    <motion.section
      className="py-40 lg:py-35"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f1320] p-8 md:p-12 lg:p-16">
          {/* Efeitos de fundo (Blur Blobs) */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-start/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-end/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center gap-10">
              <div className="space-y-6">
                <h2 className="text-[clamp(2.6rem,7vw,4.2rem)] font-bold leading-[1.05] tracking-tighter">
                  Vamos criar <br />
                  <span className="text-brand-gradient">algo incrível.</span>
                </h2>

                <p className="max-w-md text-lg leading-relaxed text-subtle">
                  Interessado em unir tecnologia e saúde? Estou disponível para
                  desafios em{" "}
                  <span className="font-semibold text-foreground">
                    Ribeirão Preto
                  </span>{" "}
                  ou remoto.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:lucasdefaria2025@gmail.com"
                  className="group flex items-center gap-5 rounded-2xl p-4 hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-start/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 group-hover:bg-brand-start/20 transition-all">
                    <MdOutlineMailOutline className="text-3xl text-brand-start" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-brand-start transition-colors">
                      lucasdefaria2025@gmail.com
                    </p>
                    <p className="text-sm text-muted">E-mail direto</p>
                  </div>
                </a>

                <a
                  href={cvpdf}
                  download="Lucas_Faria_CV.pdf"
                  className="group flex w-full items-center gap-5 rounded-2xl p-4 text-left hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-end/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 group-hover:bg-brand-end/20 transition-all">
                    <MdFileDownload className="text-3xl text-brand-end" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-brand-end transition-colors">
                      Baixar Currículo
                    </p>
                    <p className="text-sm text-muted">PDF • v.2026</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-lg">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-widest text-muted"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-foreground outline-none focus:border-brand-start/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-widest text-muted"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-foreground outline-none focus:border-brand-start/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-widest text-muted"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como posso te ajudar?"
                    className="w-full resize-y rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-foreground outline-none focus:border-brand-start/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className={`mt-4 w-full rounded-2xl py-4 text-base font-bold uppercase tracking-widest transition-all ${
                    isSent
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "hover:brightness-110"
                  } disabled:opacity-50`}
                >
                  {isSubmitting
                    ? "Enviando..."
                    : isSent
                      ? "✓ Mensagem Enviada"
                      : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
