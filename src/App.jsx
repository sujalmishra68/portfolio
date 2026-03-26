import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { cn } from "./utils.js";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading screen
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="text-center"
        >
          <div className="w-24 h-24 border-4 border-white/20 border-t-white rounded-full mx-auto mb-8 animate-spin"></div>
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sujal Mishra
          </div>
          <p className="text-white/60 mt-4">Loading portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-black via-slate-900 to-black overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 z-50 origin-left transition-all duration-300 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-0">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 w-16 h-16 glass p-4 rounded-2xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 border border-white/20 z-40 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
        onClick={() =>
          document
            .getElementById("hero")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>

      {/* Custom Cursor (optional - subtle) */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-30 mix-blend-difference blur-sm opacity-70 -translate-x-2 -translate-y-2"
        style={{ left: 0, top: 0 }}
        id="cursor-dot"
      />
    </div>
  );
}

export default App;
