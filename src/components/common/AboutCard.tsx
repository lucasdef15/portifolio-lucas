import { motion } from "framer-motion";
import { BsCalendar3, BsFillBuildingFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

type AboutCardProps = {
  title: string;
  badge?: string;
  company?: string;
  location?: string;
  period: string;
  index: number;
  cardVariants: any;
  borderColor?: "brand-start" | "brand-end" | "none";
  className?: string;
  children?: React.ReactNode;
};

export default function AboutCard({
  title,
  badge,
  company,
  location,
  period,
  index,
  cardVariants,
  borderColor = "none",
  className = "",
  children,
}: AboutCardProps) {
  const borderClasses = {
    "brand-start": "border-l-4 border-l-brand-start",
    "brand-end": "border-l-4 border-l-brand-end",
    none: "border-l-0",
  };

  return (
    <motion.div
      className={`about__card glass-card flex-col !items-start gap-6 p-8 ${borderClasses[borderColor]} ${className}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        <h3
          className={`font-bold ${badge ? "text-2xl text-foreground" : "text-xl text-muted"}`}
        >
          {title}
        </h3>
        {badge && (
          <span className="bg-brand-gradient px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-background rounded-full">
            {badge}
          </span>
        )}
        {!badge && period && borderColor === "none" && (
          <span className="text-xs font-mono text-subtle">{period}</span>
        )}
      </div>

      <div className="flex flex-wrap gap-6 text-sm font-medium text-subtle/80">
        {company && (
          <div className="flex items-center gap-2">
            <BsFillBuildingFill
              className={
                borderColor !== "none"
                  ? "text-brand-start opacity-100"
                  : "opacity-50"
              }
            />
            <span>{company}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2">
            <GoLocation className="text-brand-start" />
            <span>{location}</span>
          </div>
        )}
        {period && (borderColor !== "none" || badge) && (
          <div className="flex items-center gap-2">
            <BsCalendar3
              className={
                borderColor === "brand-end"
                  ? "text-brand-end"
                  : "text-brand-start"
              }
            />
            <span>{period}</span>
          </div>
        )}
      </div>

      {children && <div className="w-full mt-2">{children}</div>}
    </motion.div>
  );
}
