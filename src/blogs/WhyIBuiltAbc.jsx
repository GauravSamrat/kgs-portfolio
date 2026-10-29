import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Globe, Code } from "lucide-react";
import { Link } from "react-router-dom";
import appIcon from "../assets/icon.png";
import ss1 from "../assets/Screenshot111.png";
import ss2 from "../assets/Screenshot112.png";
import ss3 from "../assets/Screenshot113.png";
import ss4 from "../assets/Screenshot114.png";

export default function WhyIBuiltAbc() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Top Navigation */}
      <nav className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 sm:px-10 md:px-16 py-5 bg-[#FAF7F0]/85 backdrop-blur-sm border-b border-[#E5DFD2]">
        <Link
          to="/"
          className="flex items-center gap-2 font-['Work_Sans'] text-sm text-[#5C564C] hover:text-[#2A2620] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <span className="font-['Fraunces'] text-base text-[#2A2620] tracking-tight">
          Gaurav Samrat
        </span>
      </nav>

      <article className="px-6 sm:px-10 md:px-16 pt-32 pb-24 max-w-3xl mx-auto">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <img
            src={appIcon}
            alt="abc app icon"
            className="w-24 h-24 rounded-2xl shadow-lg mb-8"
          />
          <h1 className="font-['Fraunces'] text-4xl sm:text-5xl text-[#2A2620] leading-tight mb-6">
            "abc" का निर्माण: लर्निंग में डिजिटल अराजकता का इलाज
          </h1>
          <p className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase text-[#8C5A3C] mb-8">
            By Gaurav Samrat • March 2026
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://a-bodhi-citta.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2620] text-white rounded-full font-['Work_Sans'] text-sm hover:bg-[#8C5A3C] transition-colors"
            >
              <Globe size={16} /> Try Web App
            </a>
            <a
              href="https://github.com/GauravSamrat/abc/releases/download/v1.0.0-beta/app-release.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2620] text-[#2A2620] rounded-full font-['Work_Sans'] text-sm hover:bg-[#2A2620] hover:text-white transition-colors"
            >
              <Download size={16} /> Download APK
            </a>
            <a
              href="https://github.com/GauravSamrat/abc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5DFD2] text-[#5C564C] rounded-full font-['Work_Sans'] text-sm hover:border-[#2A2620] transition-colors"
            >
              <Code size={16} /> Source Code
            </a>
          </div>
        </motion.div>

        {/* Article Body (Hindi) */}
        <div className="font-['Work_Sans'] text-[#5C564C] text-lg leading-relaxed space-y-6">
          <p>
            आज हम सूचनाओं के एक ऐसे युग में जी रहे हैं जहाँ हर चीज़ अत्यधिक
            (overload) है। हमारे पास नोट्स के लिए Notion, माइंड मैप्स के लिए
            Obsidian, फ्लैशकार्ड के लिए Anki और ढेरों productivity apps हैं। फिर
            भी, हम पहले से कहीं ज्यादा थके हुए और उलझे हुए महसूस करते हैं।
          </p>
          <p>
            एक डेवलपर के रूप में, मैंने महसूस किया कि समस्या जानकारी की कमी नहीं
            थी—बल्कि स्पष्टता (clarity) की कमी थी।
          </p>
          <p>
            इसलिए मैंने <strong>abc (a bodhi citta)</strong> बनाया - एक
            cognitive mind-mapping और learning engine जो शोर को हटाकर सिर्फ एक
            चीज़ पर फोकस करता है:{" "}
            <strong>बिना थके सीखने में आपकी मदद करना।</strong>
          </p>
          <p>यह रही "abc" के पीछे की कहानी और सोच।</p>

          <h3 className="font-['Fraunces'] text-2xl text-[#2A2620] mt-10 mb-4">
            🧠 दर्शन: "a bodhi citta"
          </h3>
          <p>
            abc नाम <em>A Bodhi Citta</em> से लिया गया है, जिसका अर्थ है 'वह मन
            जो जागृत है' (The mind that awakens)। इसका मूल दर्शन सरल है:{" "}
            <strong>
              क्लटर हटाना (Decluttering) मिटाना नहीं है—यह एक नेविगेट करने योग्य
              संरचना बनाना है।
            </strong>
          </p>
          <p>
            आजकल ज्यादातर ऐप्स 'Feature Bloat' (बहुत सारे फीचर्स) से ग्रस्त हैं।
            वे आपको 50 टूल्स देते हैं, और आप अपना 80% समय अपने नोट्स को
            व्यवस्थित करने में लगा देते हैं, और सिर्फ 20% समय वास्तव में सीखने
            में।
          </p>
          <p>
            "abc" को cognitive load theory के आसपास डिज़ाइन किया गया है। यह{" "}
            <strong>Progressive Reveal</strong> का उपयोग करता है:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>एक नया उपयोगकर्ता केवल बुनियादी सुविधाएँ देखता है।</li>
            <li>
              जैसे-जैसे आप अवधारणाओं (concepts) में महारत हासिल करते हैं, नए
              टूल्स (जैसे Board views, Analytics, और Infinite Canvas) अपने आप
              अनलॉक होते जाते हैं।
            </li>
            <li>
              ऐप आपको यह नहीं सिखाता कि ऐप का उपयोग कैसे करना है; यह आपको विषय
              पर ध्यान केंद्रित करने देता है।
            </li>
          </ul>

          {/* Screenshots Grid */}
          <div className="my-12">
            <h3 className="font-['Fraunces'] text-2xl text-[#2A2620] mb-6">
              ✨ ऐप की एक झलक
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={ss1}
                alt="abc Dashboard"
                className="rounded-xl shadow-md w-full border border-[#E5DFD2]"
              />
              <img
                src={ss2}
                alt="abc Radial View"
                className="rounded-xl shadow-md w-full border border-[#E5DFD2]"
              />
              <img
                src={ss3}
                alt="abc Canvas View"
                className="rounded-xl shadow-md w-full border border-[#E5DFD2]"
              />
              <img
                src={ss4}
                alt="abc Focus Mode"
                className="rounded-xl shadow-md w-full border border-[#E5DFD2]"
              />
            </div>
          </div>

          <h3 className="font-['Fraunces'] text-2xl text-[#2A2620] mt-10 mb-4">
            ✨ मुख्य विशेषताएं (Minimal लेकिन Powerful)
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>द ज़ेन यूआई (The Zen UI):</strong> सामान्य नीले-डार्क थीम
              के बजाय, मैंने फॉरेस्ट ग्रीन (#435747) और क्रीम (#E6D5B8) पैलेट का
              उपयोग किया है। ऐसा महसूस होता है जैसे आप किसी शांत जंगल में किताब
              पढ़ रहे हों।
            </li>
            <li>
              <strong>फोकस मोड और एक्टिव रिकॉल (Active Recall):</strong> सिर्फ
              पढ़ना बेकार है। फोकस मोड में, एक 3 मिनट का टाइमर नोड को अपने आप
              रिव्यू करता है। एक टैप के साथ, नोट्स ब्लर हो जाते हैं
              (फ्लैशकार्ड), जिससे आपका दिमाग जवाब देखने से पहले खुद सोचने पर
              मजबूर होता है।
            </li>
            <li>
              <strong>स्पेस्ड रिपिटिशन (मेमोरी डिके का नियम):</strong> अगर आप
              किसी कांसेप्ट को 2 दिनों के भीतर छूते हैं और उसमें महारत हासिल
              करते हैं, तो ऐप 7 दिनों में रिव्यू शेड्यूल करता है। लेकिन अगर आप
              इसे 21 दिनों तक नज़रअंदाज़ करते हैं, तो "मेमोरी डिके" शुरू हो जाती
              है—नोड अपनी ताकत खो देता है और आपके रिव्यू क्यू में वापस आ जाता
              है। <em>इसे इस्तेमाल करो या खो दो।</em>
            </li>
            <li>
              <strong>माइंड फॉरेस्ट (शर्म के बिना गेमिफिकेशन):</strong> मैं एक
              और ऐसा ऐप नहीं बनाना चाहता था जो आपको स्ट्रीक तोड़ने पर दोषी महसूस
              कराए। इसके बजाय, जैसे-जैसे आप नोड्स में महारत हासिल करते हैं, आप
              एक दृश्य "फॉरेस्ट" उगाते हैं। आपका ज्ञान सचमुच पेड़ों और पत्तों का
              आकार ले लेता है।
            </li>
            <li>
              <strong>AI फॉलबैक (JSON इम्पोर्ट):</strong> अगर आप कोई विषय खोजते
              हैं और वह स्टोर में नहीं है, तो "abc" आपको एक कस्टम AI प्रॉम्प्ट
              देता है। इसे कॉपी करें, ChatGPT/Claude में पेस्ट करें, और जनरेट
              किया गया JSON सीधे ऐप में इम्पोर्ट करें। अनंत सीखना, शून्य बैकएंड
              AI लागत।
            </li>
          </ul>

          <h3 className="font-['Fraunces'] text-2xl text-[#2A2620] mt-10 mb-4">
            🛠️ टेक स्टैक (Tech Stack)
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Framework:</strong> Flutter (Web & Android)
            </li>
            <li>
              <strong>State Management:</strong> Provider (भारी रूप से अनुकूलित
              लोकल कैशिंग के साथ)
            </li>
            <li>
              <strong>Database:</strong> Hive (Local) और Firebase Firestore
              (Cloud)
            </li>
            <li>
              <strong>Audio:</strong> Flutter TTS (बिना हाथ लगाए पढ़ने के लिए)
            </li>
            <li>
              <strong>Design:</strong> Custom Inline Markdown रेंडरिंग +
              Glassmorphism UI कंपोनेंट्स
            </li>
          </ul>

          <p className="mt-8 pt-8 border-t border-[#E5DFD2] italic">
            "abc" अभी अपने बीटा चरण में है। यह मुफ़्त है, ओपन-सोर्स है, और
            छात्रों, शिक्षकों और आजीवन सीखने वालों के लिए बनाया गया है। मुझे
            अपने विचार बताएं!
          </p>
        </div>
      </article>
    </div>
  );
}
