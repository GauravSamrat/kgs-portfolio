import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ============================================================================
   CONTENT — sirf yeh edit karo jab naya project add karna ho
============================================================================ */

const CONTENT = {
  hero: {
    name: "Gaurav Samrat",
    role: "Web & App Developer",
    tagline: "Building purposeful digital tools for India.",
  },

  projects: [
    {
      id: "invoice-follow",
      title: "Invoice Follow", // ← project ka naam
      subtitle: "Follow your invoices", // ← chhota description
      description: "A tool that ...", // ← 2-3 line explanation
      stack: ["React", "Razorpay"],
      year: "2026",
      status: "Live",
      link: "https://invoicefollow-gold.vercel.app/", // ← Vercel URL
      repo: "https://github.com/GauravSamrat/invoicefollow",
    },
    {
      id: "taxsimple",
      title: "TaxSimple",
      subtitle: "Income Tax Calculator",
      description:
        "A free, fast, and accurate income tax calculator for FY 2026-27. Compare Old vs New Regime side by side, with age-aware slabs, deduction inputs, and personalised tax-saving suggestions.",
      stack: ["HTML", "CSS", "Vanilla JS"],
      year: "2026",
      status: "Live",
      link: "https://gauravsamrat.github.io/TaxSimple/",
      repo: "https://github.com/GauravSamrat/TaxSimple",
    },
  ],

  contact: {
    label: "Elsewhere",
    github: "https://github.com/GauravSamrat",
  },
};

/* ============================================================================
   MOTION
============================================================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ============================================================================
   NAV
============================================================================ */

function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 sm:px-10 md:px-16 py-5 bg-[#FAF7F0]/85 backdrop-blur-sm"
    >
      <a
        href="#top"
        className="font-['Fraunces'] text-base text-[#2A2620] tracking-tight"
      >
        Gaurav Samrat
      </a>
      <div className="flex items-center gap-8">
        <a
          href="#work"
          className="font-['Work_Sans'] text-sm text-[#5C564C] hover:text-[#2A2620] transition-colors"
        >
          Work
        </a>
        <a
          href="#contact"
          className="font-['Work_Sans'] text-sm text-[#5C564C] hover:text-[#2A2620] transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

/* ============================================================================
   HERO
============================================================================ */

function Hero() {
  const { hero } = CONTENT;
  return (
    <section
      id="top"
      className="relative min-h-[80vh] flex items-center px-6 sm:px-10 md:px-16 pt-32 pb-20 bg-[#FAF7F0]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase text-[#8C5A3C] mb-8"
        >
          {hero.role}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-['Fraunces'] text-5xl sm:text-6xl md:text-7xl text-[#2A2620] leading-[1.02] tracking-tight mb-8"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-['Fraunces'] italic text-xl sm:text-2xl text-[#5C564C] leading-snug max-w-xl"
        >
          {hero.tagline}
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ============================================================================
   WORK
============================================================================ */

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group border-t border-[#E5DFD2] pt-10 pb-12"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-6">
        <div className="flex items-baseline gap-4">
          <h3 className="font-['Fraunces'] text-3xl sm:text-4xl text-[#2A2620] leading-tight">
            {project.title}
          </h3>
          <span className="font-['JetBrains_Mono'] text-xs tracking-wide uppercase text-[#8C5A3C]">
            {project.status}
          </span>
        </div>
        <span className="font-['JetBrains_Mono'] text-xs text-[#A8A093]">
          {project.year}
        </span>
      </div>

      <p className="font-['Work_Sans'] text-base text-[#5C564C] leading-relaxed max-w-2xl mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-['JetBrains_Mono'] text-[11px] tracking-wide uppercase text-[#7A7364] border border-[#E5DFD2] rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 sm:ml-auto">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Work_Sans'] text-sm text-[#5C564C] hover:text-[#2A2620] transition-colors"
            >
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Work_Sans'] text-sm text-[#2A2620] hover:text-[#8C5A3C] transition-colors"
            >
              Live <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="px-6 sm:px-10 md:px-16 py-24 sm:py-32 bg-[#FAF7F0]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase text-[#8C5A3C] mb-12"
        >
          Selected Work
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {CONTENT.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================================
   CONTACT
============================================================================ */

function Contact() {
  const { contact } = CONTENT;
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 md:px-16 py-24 sm:py-32 bg-[#F2EDE2]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase text-[#8C5A3C] mb-6"
        >
          {contact.label}
        </motion.p>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 font-['Fraunces'] text-2xl sm:text-3xl text-[#2A2620] hover:text-[#8C5A3C] transition-colors"
        >
          <span>github.com/GauravSamrat</span>
          <ArrowUpRight
            size={22}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>
      </div>
    </section>
  );
}

/* ============================================================================
   ROOT
============================================================================ */

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>
      <Nav />
      <Hero />
      <Work />
      <Contact />
      <footer className="px-6 sm:px-10 md:px-16 py-10 bg-[#F2EDE2] border-t border-[#E5DFD2]">
        <p className="font-['JetBrains_Mono'] text-xs text-[#A8A093] text-center">
          © 2026 Gaurav Samrat
        </p>
      </footer>
    </div>
  );
}
