import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../utils.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300",
        scrolled ? "glass shadow-2xl shadow-purple-500/10" : "glass bg-white/5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-3">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Sujal  Kumar Mishra
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-lg font-medium text-white/90 hover:text-white transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            {/* Social */}
            <div className="flex space-x-4 ml-4">
              <motion.a
                href="https://github.com/sujalmishra68"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-2 hover:text-purple-400"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sujalkumarmishra/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-2 hover:text-blue-400"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg glass"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4 border-t border-white/10"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ scale: 1.05 }}
                className="block w-full text-left py-3 px-4 text-lg font-medium text-white/90 hover:text-white hover:pl-4 transition-all"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="pt-4 pb-2 flex space-x-4 px-4">
              <motion.a
                href="https://github.com/sujalmishra68"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-2 hover:text-purple-400"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sujalkumarmishra/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-2 hover:text-blue-400"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
