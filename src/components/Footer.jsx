import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copyright } from "lucide-react";
import { cn } from "../utils.js";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t bg-gradient-to-t from-black to-slate-900/50 border-white/10">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Main Footer */}
        <div className="grid gap-12 mb-16 md:grid-cols-3 lg:gap-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 shadow-2xl glass rounded-3xl shadow-black/20"
          >
            <div className="mb-6 text-3xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Sujal Mishra
            </div>
            <p className="mb-6 leading-relaxed text-white/70">
              Java  & Full Stack Developer crafting exceptional digital
              experiences.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/sujalmishra68"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="p-3 transition-all border rounded-xl bg-gradient-to-r from-purple-500/20 border-purple-500/30 hover:bg-purple-500/30"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sujalkumarmishra/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="p-3 transition-all border rounded-xl bg-gradient-to-r from-blue-500/20 border-blue-500/30 hover:bg-blue-500/30"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:sujalmishra68@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-3 transition-all border rounded-xl bg-gradient-to-r from-emerald-500/20 border-emerald-500/30 hover:bg-emerald-500/30"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="mb-6 text-2xl font-bold text-white">Quick Links</h4>
            <div className="space-y-4">
              {[
                { name: "Home", href: "#hero" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="block text-lg font-medium transition-all duration-300 text-white/80 hover:text-white hover:pl-4"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 space-y-6 shadow-2xl glass rounded-3xl shadow-black/20"
          >
            <h4 className="mb-6 text-2xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <p className="text-white/80">
                📧{" "}
                <a
                  href="mailto:sujalmishra68@gmail.com"
                  className="font-semibold transition-colors hover:text-purple-400"
                >
                  sujalmishra68@gmail.com
                </a>
              </p>
              <p className="text-white/80">
                📱{" "}
                <a
                  href="tel:+916205302730"
                  className="font-semibold transition-colors hover:text-emerald-400"
                >
                  +91 6205302730
                </a>
              </p>
              <p className="text-white/80">📍 Jaipur, Rajasthan, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="p-6 mt-16 border glass rounded-2xl border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3">
              <Copyright size={20} className="text-white/60" />
              <span className="text-white/70">
                2025 © Sujal Kumar Mishra.
              </span>
            </div>
            <div className="flex gap-2 text-sm text-white/60">
              <span>Designed with</span>
              <span className="text-red-400">❤️</span>
              <span>in Jaipur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
