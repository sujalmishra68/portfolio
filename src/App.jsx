import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    /*
     * Respect prefers-reduced-motion.
     * When reduced motion is requested, do not initialize Lenis.
     */
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    /*
     * ------------------------------------------------------------
     * LENIS
     * ------------------------------------------------------------
     * Single global Lenis instance.
     */
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    });

    /*
     * Keep GSAP ScrollTrigger synchronized with Lenis.
     */
    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleLenisScroll);

    /*
     * GSAP ticker drives Lenis.
     * GSAP ticker time is seconds.
     * Lenis raf expects milliseconds.
     */
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    /*
     * Prevent GSAP ticker from accumulating large time jumps.
     */
    gsap.ticker.lagSmoothing(1000, 16);

    /*
     * ------------------------------------------------------------
     * SCROLL PROGRESS
     * ------------------------------------------------------------
     * Update the progress bar directly instead of causing
     * React re-renders on every scroll event.
     */
    const updateProgress = ({ progress }) => {
      if (!progressBarRef.current) return;

      const clampedProgress = Math.max(0, Math.min(progress, 1));

      progressBarRef.current.style.transform = `scaleX(${clampedProgress})`;
    };

    lenis.on("scroll", updateProgress);

    /*
     * Initial state.
     */
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = "scaleX(0)";
    }

    /*
     * Give ScrollTrigger time to calculate the final document
     * after all sections/images have mounted.
     */
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    /*
     * ------------------------------------------------------------
     * CLEANUP
     * ------------------------------------------------------------
     */
    return () => {
      window.clearTimeout(refreshTimer);

      lenis.off("scroll", handleLenisScroll);
      lenis.off("scroll", updateProgress);

      gsap.ticker.remove(updateLenis);

      lenis.destroy();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="site-shell">
      {/* Global scroll progress */}
      <div
        ref={progressBarRef}
        className="scroll-progress-bar"
        aria-hidden="true"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;