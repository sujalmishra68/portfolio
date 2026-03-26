import { motion } from "framer-motion";
import { Github, Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../utils.js";

const roles = ["Java & Full Stack Developer", "Full Stack Developer"];
const typingSpeed = 150;
const eraseSpeed = 100;
const pauseTime = 2000;

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        if (currentText.length > 0) {
          timeoutId = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, eraseSpeed);
        } else {
          setIsDeleting(false);
          timeoutId = setTimeout(() => {
            const nextRoleIndex = (currentRoleIndex + 1) % roles.length;
            setCurrentRoleIndex(nextRoleIndex);
          }, 500);
        }
      } else {
        if (currentText.length < currentRole.length) {
          timeoutId = setTimeout(() => {
            setCurrentText(currentRole.slice(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    timeoutId = setTimeout(handleTyping, isDeleting ? eraseSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 animate-pulse"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 rounded-full bg-purple-400/30 top-20 left-10 animate-float"></div>
          <div className="absolute w-3 h-3 delay-1000 rounded-full bg-pink-400/30 top-40 right-20 animate-float"></div>
          <div className="absolute w-1 h-1 rounded-full bg-blue-400/30 bottom-32 left-1/4 animate-float delay-2000"></div>
          <div className="absolute w-4 h-4 rounded-full bg-indigo-400/30 bottom-20 right-1/3 animate-float delay-3000"></div>
        </div>
      </div>

      <div className="container relative z-10 max-w-4xl px-4 mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="mb-6 text-5xl font-black leading-tight text-transparent md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text">
              SUJAL KUMAR
            </h1>
            <div className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl text-white/90">
              <span className="gradient-text">I'm a </span>
              <span>{currentText}</span>
              <span className="ml-2 animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Stats/Intro */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto text-xl leading-relaxed md:text-2xl text-white/70"
          >
            Motivated Java and Full Stack Developer building responsive web apps
            and backend services with React, Spring Boot, Nodejs ,Expressjs,PostgreSQL.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <motion.a
              href="#projects"
              className="btn-primary group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight
                className="transition-transform group-hover:translate-x-2"
                size={20}
              />
            </motion.a>
            <motion.a
              href="https://github.com/sujalmishra68"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 glass rounded-xl hover:bg-white/20 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center w-8 h-12 mx-auto border-2 rounded-full border-white/30"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="w-2 h-4 mt-2 rounded-sm bg-gradient-to-b from-purple-400 to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
