import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Globe,
  Code,
  Briefcase,
  Users,
  MessageCircle,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
} from "lucide-react"; // 👈 Safe Icons

// 👇 Images Imports
import appIcon from "./assets/icon.png";
import ss1 from "./assets/Screenshot111.png";
import ss2 from "./assets/Screenshot112.png";
import ss3 from "./assets/Screenshot113.png";
import ss4 from "./assets/Screenshot114.png";

/* ============================================================================
   CONTENT (Bilingual)
============================================================================ */
const CONTENT = {
  en: {
    nav: { work: "Work", writing: "Writing", contact: "Connect" },
    hero: {
      role: "Systems Architect • Futurist • Dhamma-Tech",
      tagline: "Building the cognitive infrastructure for 2101.",
      sub: "Where deep tech meets timeless wisdom.",
    },
    work: { title: "Selected Architectures", code: "Source", live: "Access" },
    projects: [
      {
        id: "abc-app",
        title: "abc (a bodhi citta)",
        description:
          "A Zen-inspired cognitive engine. Transforms complex syllabi into navigable mind maps with spaced repetition, interactive neural-games, and a distraction-free focus mode.",
        stack: ["Flutter", "Firebase", "Hive", "AI Integration"],
        status: "Live & Open Source",
        link: "https://a-bodhi-citta.web.app/",
        repo: "https://github.com/GauravSamrat/abc",
      },
      {
        id: "invoice-follow",
        title: "Invoice Follow",
        description:
          "A frictionless tool helping freelancers and small businesses track invoices and payments seamlessly.",
        stack: ["React", "Razorpay"],
        status: "Live",
        link: "https://invoicefollow-gold.vercel.app/",
        repo: "https://github.com/GauravSamrat/invoicefollow",
      },
      {
        id: "taxsimple",
        title: "TaxSimple",
        description:
          "A free, fast, and accurate income tax calculator. Compare Old vs New Regime side by side.",
        stack: ["HTML", "CSS", "Vanilla JS"],
        status: "Live",
        link: "https://gauravsamrat.github.io/TaxSimple/",
        repo: "https://github.com/GauravSamrat/TaxSimple",
      },
    ],
    vision: {
      label: "The 2101 Manifesto",
      text: "The next era of the internet won't be won by companies that capture attention, but by those that cultivate awareness. We are moving from the Information Age to the Consciousness Age. My mission is to build tools that bridge the gap between artificial intelligence and human mindfulness—systems that don't just make us smarter, but wiser.",
      highlight: "Technology is the vehicle. Dhamma is the compass.",
    },
    contact: {
      title: "Establish Connection",
      subtitle:
        "Open for collaborations, deep tech discussions, and building the future.",
      links: [
        {
          id: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/gauravsamrat/",
          icon: Briefcase,
          color: "text-[#0A66C2]",
        },
        {
          id: "github",
          label: "GitHub",
          url: "https://github.com/GauravSamrat",
          icon: Terminal,
          color: "text-[#E8D5B7]",
        },
        {
          id: "whatsapp",
          label: "WhatsApp",
          url: "https://wa.me/919205748440",
          icon: MessageCircle,
          color: "text-[#25D366]",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/iamgauravsamrat",
          icon: Users,
          color: "text-[#1877F2]",
        },
      ],
    },
    writing: { title: "Transmissions & Writing" },
  },
  hi: {
    nav: { work: "कार्य", writing: "लेखन", contact: "जुड़ें" },
    hero: {
      role: "सिस्टम्स आर्किटेक्ट • फ्यूचरिस्ट • धम्म-टेक",
      tagline: "2101 के लिए कॉग्निटिव इंफ्रास्ट्रक्चर का निर्माण।",
      sub: "जहाँ डीप टेक, शाश्वत ज्ञान से मिलता है।",
    },
    work: { title: "चयनित आर्किटेक्चर", code: "कोड", live: "लाइव" },
    projects: [
      {
        id: "abc-app",
        title: "abc (a bodhi citta)",
        description:
          "एक ज़ेन-प्रेरित कॉग्निटिव इंजन। जटिल पाठ्यक्रमों को माइंड मैप्स में बदलता है, जिसमें स्पेस्ड रिपिटिशन, इंटरैक्टिव गेम्स और फोकस मोड शामिल है।",
        stack: ["Flutter", "Firebase", "Hive", "AI Integration"],
        status: "लाइव और ओपन सोर्स",
        link: "https://a-bodhi-citta.web.app/",
        repo: "https://github.com/GauravSamrat/abc",
      },
      {
        id: "invoice-follow",
        title: "Invoice Follow",
        description:
          "फ्रीलांसरों और छोटे व्यवसायों के लिए इनवॉइस और भुगतान ट्रैक करने का एक स्मार्ट टूल।",
        stack: ["React", "Razorpay"],
        status: "लाइव",
        link: "https://invoicefollow-gold.vercel.app/",
        repo: "https://github.com/GauravSamrat/invoicefollow",
      },
      {
        id: "taxsimple",
        title: "TaxSimple",
        description: "आयकर की गणना के लिए एक मुफ्त, तेज और सटीक टूल।",
        stack: ["HTML", "CSS", "Vanilla JS"],
        status: "लाइव",
        link: "https://gauravsamrat.github.io/TaxSimple/",
        repo: "https://github.com/GauravSamrat/TaxSimple",
      },
    ],
    vision: {
      label: "2101 का घोषणापत्र",
      text: "इंटरनेट के अगले युग में वे कंपनियां नहीं जीतेंगी जो ध्यान खींचती हैं, बल्कि वे जीतेंगी जो जागरूकता पैदा करती हैं। हम सूचना युग से चेतना के युग (Consciousness Age) की ओर बढ़ रहे हैं। मेरा मिशन ऐसे टूल्स बनाना है जो AI और मानव माइंडफुलनेस के बीच सेतु बनें—ऐसे सिस्टम जो हमें सिर्फ स्मार्ट नहीं, बल्कि बुद्धिमान (wise) बनाएं।",
      highlight: "तकनीक वाहन है। धम्म दिशा है।",
    },
    contact: {
      title: "संपर्क स्थापित करें",
      subtitle: "सहयोग, डीप टेक चर्चाओं और भविष्य के निर्माण के लिए तैयार।",
      links: [
        {
          id: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/gauravsamrat/",
          icon: Briefcase,
          color: "text-[#0A66C2]",
        },
        {
          id: "github",
          label: "GitHub",
          url: "https://github.com/GauravSamrat",
          icon: Terminal,
          color: "text-[#E8D5B7]",
        },
        {
          id: "whatsapp",
          label: "WhatsApp",
          url: "https://wa.me/919205748440",
          icon: MessageCircle,
          color: "text-[#25D366]",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/iamgauravsamrat",
          icon: Users,
          color: "text-[#1877F2]",
        },
      ],
    },
    writing: { title: "ट्रांसमिशन और लेखन" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ============================================================================
   COMPONENTS
============================================================================ */

function Nav({ lang, setLang, t }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 md:px-16 py-5 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      <a
        href="#top"
        className="font-['Fraunces'] text-lg text-[#E8D5B7] tracking-tight flex items-center gap-2"
      >
        <Terminal size={18} className="text-[#E8D5B7]" /> Gaurav Samrat
      </a>
      <div className="flex items-center gap-6 sm:gap-8">
        <a
          href="#work"
          className="font-['Work_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors"
        >
          {t.nav.work}
        </a>
        <a
          href="#vision"
          className="font-['Work_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors"
        >
          Vision
        </a>
        <a
          href="#writing"
          className="font-['Work_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors"
        >
          {t.nav.writing}
        </a>
        <a
          href="#contact"
          className="font-['Work_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors"
        >
          {t.nav.contact}
        </a>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className="ml-2 font-['JetBrains_Mono'] text-xs border border-white/20 text-[#E8D5B7] px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Globe size={12} /> {lang === "en" ? "HI" : "EN"}
        </button>
      </div>
    </motion.nav>
  );
}

function Hero({ t }) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 sm:px-10 md:px-16 pt-32 pb-20 bg-[#050505] overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8D5B7]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-4xl relative z-10"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8D5B7]/30 bg-[#E8D5B7]/5 mb-8"
        >
          <Sparkles size={14} className="text-[#E8D5B7]" />
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase text-[#E8D5B7]">
            {t.hero.role}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-['Fraunces'] text-5xl sm:text-7xl md:text-8xl text-white leading-[1.05] tracking-tight mb-6"
        >
          Gaurav{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5B7] to-gray-500">
            Samrat
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-['Fraunces'] italic text-2xl sm:text-3xl text-[#A0A0A0] leading-snug max-w-2xl mb-4"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-['Work_Sans'] text-lg text-[#666666] max-w-xl"
        >
          {t.hero.sub}
        </motion.p>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, t }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:border-[#E8D5B7]/30 hover:shadow-[0_0_30px_rgba(232,213,183,0.05)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-4">
          {project.id === "abc-app" && (
            <img
              src={appIcon}
              alt="icon"
              className="w-12 h-12 rounded-xl shadow-[0_0_15px_rgba(232,213,183,0.2)]"
            />
          )}
          <h3 className="font-['Fraunces'] text-3xl text-white leading-tight group-hover:text-[#E8D5B7] transition-colors">
            {project.title}
          </h3>
          <span className="px-2 py-1 rounded border border-[#E8D5B7]/20 bg-[#E8D5B7]/5 font-['JetBrains_Mono'] text-[10px] tracking-wide uppercase text-[#E8D5B7]">
            {project.status}
          </span>
        </div>
      </div>
      <p className="font-['Work_Sans'] text-[#888888] leading-relaxed max-w-2xl mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-['JetBrains_Mono'] text-[10px] tracking-wide uppercase text-[#888888] bg-white/5 rounded-md px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 sm:ml-auto">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['Work_Sans'] text-sm text-[#A0A0A0] hover:text-[#E8D5B7] transition-colors"
            >
              <Code size={14} /> {t.work.code}
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['Work_Sans'] text-sm text-[#050505] bg-[#E8D5B7] px-4 py-2 rounded-lg hover:bg-white transition-colors"
            >
              <Zap size={14} /> {t.work.live}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Work({ t }) {
  return (
    <section id="work" className="px-6 sm:px-10 md:px-16 py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <Cpu size={20} className="text-[#E8D5B7]" />
          <h2 className="font-['JetBrains_Mono'] text-sm tracking-[0.25em] uppercase text-[#E8D5B7]">
            {t.work.title}
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {t.projects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Vision({ t }) {
  return (
    <section
      id="vision"
      className="px-6 sm:px-10 md:px-16 py-32 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E8D5B7]/5 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-['JetBrains_Mono'] text-xs tracking-[0.3em] uppercase text-[#E8D5B7] mb-8"
        >
          {t.vision.label}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-['Fraunces'] text-3xl sm:text-4xl text-white leading-tight mb-8"
        >
          "{t.vision.text}"
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-['Work_Sans'] text-xl text-[#888888] italic"
        >
          — {t.vision.highlight}
        </motion.p>
      </div>
    </section>
  );
}

function Writing({ lang, t }) {
  return (
    <section id="writing" className="px-6 sm:px-10 md:px-16 py-32 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <Terminal size={20} className="text-[#E8D5B7]" />
          <h2 className="font-['JetBrains_Mono'] text-sm tracking-[0.25em] uppercase text-[#E8D5B7]">
            {t.writing.title}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <img
            src={appIcon}
            alt="abc app icon"
            className="w-24 h-24 rounded-2xl shadow-[0_0_30px_rgba(232,213,183,0.15)] mb-8"
          />
          <h1 className="font-['Fraunces'] text-4xl sm:text-5xl text-white leading-tight mb-6">
            {lang === "en"
              ? 'Building "abc": The Antidote to Digital Chaos'
              : '"abc" का निर्माण: डिजिटल अराजकता का इलाज'}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://a-bodhi-citta.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8D5B7] text-[#050505] rounded-full font-['Work_Sans'] text-sm font-bold hover:bg-white transition-colors"
            >
              <Globe size={16} /> Try Web App
            </a>
            <a
              href="https://github.com/GauravSamrat/abc/releases/download/v1.0.0-beta/app-release.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-['Work_Sans'] text-sm hover:bg-white/10 transition-colors"
            >
              <Download size={16} /> Download APK
            </a>
          </div>
        </motion.div>

        <div className="font-['Work_Sans'] text-[#A0A0A0] text-lg leading-relaxed space-y-6">
          {lang === "en" ? (
            <>
              <p>
                We live in an age of information overload. We have Notion for
                notes, Obsidian for mind maps, Anki for flashcards, and a dozen
                other apps for productivity. Yet, we feel more overwhelmed than
                ever.
              </p>
              <p>
                As a developer, I realized the problem wasn’t a lack of
                information—it was a lack of clarity.
              </p>
              <p>
                So, I built{" "}
                <strong className="text-white">abc (a bodhi citta)</strong> - a
                cognitive mind-mapping and learning engine that strips away the
                noise and focuses on one thing: helping you learn without
                burning out.
              </p>

              <h3 className="font-['Fraunces'] text-2xl text-white mt-10 mb-4">
                🧠 The Philosophy
              </h3>
              <p>
                The name abc derives from <em>A Bodhi Citta</em> (The mind that
                awakens). The core philosophy is simple:{" "}
                <strong className="text-white">
                  Decluttering is not deletion—it is the creation of navigable
                  structure.
                </strong>
              </p>
              <p>
                Most apps today suffer from "Feature Bloat." They give you 50
                tools, and you end up spending 80% of your time organizing, and
                only 20% actually learning.
              </p>
              <p>
                "abc" is designed around cognitive load theory. It uses{" "}
                <strong className="text-[#E8D5B7]">Progressive Reveal</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#E8D5B7]">
                <li>A new user only sees basic features.</li>
                <li>As you master concepts, new tools unlock automatically.</li>
                <li>
                  The app doesn't force you to learn how to use the app; it lets
                  you focus on the subject.
                </li>
              </ul>

              <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src={ss1}
                  alt="abc Dashboard"
                  className="rounded-xl border border-white/10 w-full"
                />
                <img
                  src={ss2}
                  alt="abc Radial View"
                  className="rounded-xl border border-white/10 w-full"
                />
                <img
                  src={ss3}
                  alt="abc Canvas View"
                  className="rounded-xl border border-white/10 w-full"
                />
                <img
                  src={ss4}
                  alt="abc Focus Mode"
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>

              <h3 className="font-['Fraunces'] text-2xl text-white mt-10 mb-4">
                ✨ Core Features
              </h3>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#E8D5B7]">
                <li>
                  <strong className="text-white">The Zen UI:</strong> Forest
                  Green and Cream palette. It feels like reading a book in a
                  quiet forest.
                </li>
                <li>
                  <strong className="text-white">
                    Focus Mode & Active Recall:
                  </strong>{" "}
                  A 3-minute timer auto-reviews the node. With a tap, the notes
                  blur (Flashcards), forcing your brain to actively recall the
                  concept.
                </li>
                <li>
                  <strong className="text-white">
                    Spaced Repetition (The Decay Rule):
                  </strong>{" "}
                  Master a concept in 2 days, review in 7 days. Ignore it for 21
                  days, and memory decay kicks in. <em>Use it or lose it.</em>
                </li>
                <li>
                  <strong className="text-white">Mind Forest:</strong>{" "}
                  Gamification without shame. As you master nodes, you grow a
                  visual "Forest".
                </li>
                <li>
                  <strong className="text-white">AI Fallback:</strong> If a
                  topic isn't in the store, get a custom AI prompt. Paste it
                  into ChatGPT, and import the JSON directly into the app.
                </li>
              </ul>
            </>
          ) : (
            <>
              <p>
                आज हम सूचनाओं के एक ऐसे युग में जी रहे हैं जहाँ हर चीज़ अत्यधिक
                (overload) है। हमारे पास नोट्स के लिए Notion, फ्लैशकार्ड के लिए
                Anki और ढेरों productivity apps हैं। फिर भी, हम पहले से कहीं
                ज्यादा थके हुए और उलझे हुए महसूस करते हैं।
              </p>
              <p>
                एक डेवलपर के रूप में, मैंने महसूस किया कि समस्या जानकारी की कमी
                नहीं थी—बल्कि स्पष्टता (clarity) की कमी थी।
              </p>
              <p>
                इसलिए मैंने{" "}
                <strong className="text-white">abc (a bodhi citta)</strong>{" "}
                बनाया - एक cognitive mind-mapping और learning engine जो शोर को
                हटाकर सिर्फ एक चीज़ पर फोकस करता है:{" "}
                <strong className="text-white">
                  बिना थके सीखने में आपकी मदद करना।
                </strong>
              </p>

              <h3 className="font-['Fraunces'] text-2xl text-white mt-10 mb-4">
                🧠 दर्शन
              </h3>
              <p>
                abc नाम <em>A Bodhi Citta</em> से लिया गया है, जिसका अर्थ है 'वह
                मन जो जागृत है'। इसका मूल दर्शन सरल है:{" "}
                <strong className="text-white">
                  क्लटर हटाना (Decluttering) मिटाना नहीं है—यह एक नेविगेट करने
                  योग्य संरचना बनाना है।
                </strong>
              </p>
              <p>
                आजकल ज्यादातर ऐप्स 'Feature Bloat' से ग्रस्त हैं। वे आपको 50
                टूल्स देते हैं, और आप अपना 80% समय नोट्स व्यवस्थित करने में लगा
                देते हैं।
              </p>
              <p>
                "abc" को cognitive load theory के आसपास डिज़ाइन किया गया है। यह{" "}
                <strong className="text-[#E8D5B7]">Progressive Reveal</strong>{" "}
                का उपयोग करता है:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#E8D5B7]">
                <li>एक नया उपयोगकर्ता केवल बुनियादी सुविधाएँ देखता है।</li>
                <li>
                  जैसे-जैसे आप अवधारणाओं में महारत हासिल करते हैं, नए टूल्स अपने
                  आप अनलॉक होते जाते हैं।
                </li>
                <li>
                  ऐप आपको यह नहीं सिखाता कि ऐप का उपयोग कैसे करना है; यह आपको
                  विषय पर ध्यान केंद्रित करने देता है।
                </li>
              </ul>

              <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src={ss1}
                  alt="abc Dashboard"
                  className="rounded-xl border border-white/10 w-full"
                />
                <img
                  src={ss2}
                  alt="abc Radial View"
                  className="rounded-xl border border-white/10 w-full"
                />
                <img
                  src={ss3}
                  alt="abc Canvas View"
                  className="rounded-xl border border-white/10 w-full"
                />
                <img
                  src={ss4}
                  alt="abc Focus Mode"
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>

              <h3 className="font-['Fraunces'] text-2xl text-white mt-10 mb-4">
                ✨ मुख्य विशेषताएं
              </h3>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#E8D5B7]">
                <li>
                  <strong className="text-white">द ज़ेन यूआई:</strong> फॉरेस्ट
                  ग्रीन और क्रीम पैलेट। ऐसा महसूस होता है जैसे आप किसी शांत जंगल
                  में किताब पढ़ रहे हों।
                </li>
                <li>
                  <strong className="text-white">
                    फोकस मोड और एक्टिव रिकॉल:
                  </strong>{" "}
                  एक 3 मिनट का टाइमर नोड को रिव्यू करता है। एक टैप के साथ, नोट्स
                  ब्लर हो जाते हैं, जिससे दिमाग खुद सोचने पर मजबूर होता है।
                </li>
                <li>
                  <strong className="text-white">
                    स्पेस्ड रिपिटिशन (डिके का नियम):
                  </strong>{" "}
                  कांसेप्ट को 2 दिनों में मास्टर करें, 7 दिनों में रिव्यू। 21
                  दिनों तक नज़रअंदाज़ करने पर मेमोरी डिके हो जाती है।{" "}
                  <em>इसे इस्तेमाल करो या खो दो।</em>
                </li>
                <li>
                  <strong className="text-white">माइंड फॉरेस्ट:</strong> शर्म के
                  बिना गेमिफिकेशन। जैसे-जैसे आप नोड्स में महारत हासिल करते हैं,
                  आप एक "फॉरेस्ट" उगाते हैं।
                </li>
                <li>
                  <strong className="text-white">AI फॉलबैक:</strong> अगर कोई
                  विषय स्टोर में नहीं है, तो ChatGPT से JSON जनरेट कर सीधे ऐप
                  में इम्पोर्ट करें।
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 md:px-16 py-32 bg-[#0A0A0A] border-t border-white/5 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#E8D5B7]/5 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-['Fraunces'] text-4xl sm:text-5xl text-white mb-4"
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-['Work_Sans'] text-[#888888] mb-12"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {t.contact.links.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                variants={fadeUp}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`p-3 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300 ${link.color}`}
                >
                  <Icon size={24} />
                </div>
                <span className="font-['JetBrains_Mono'] text-xs tracking-wider uppercase text-[#A0A0A0] group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================================
   ROOT
============================================================================ */
export default function PortfolioApp() {
  const [lang, setLang] = useState("en");
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E8D5B7] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Work t={t} />
      <Vision t={t} />
      <Writing lang={lang} t={t} />
      <Contact t={t} />

      <footer className="px-6 py-8 bg-[#050505] border-t border-white/5 flex flex-col items-center justify-center gap-2">
        <p className="font-['JetBrains_Mono'] text-xs text-[#555] tracking-widest uppercase">
          © 2101 Gaurav Samrat
        </p>
        <p className="font-['Work_Sans'] text-[10px] text-[#333]">
          Built for the next evolution of consciousness.
        </p>
      </footer>
    </div>
  );
}
