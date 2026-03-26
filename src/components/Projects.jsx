import { motion } from "framer-motion";
import { Github, ExternalLink, Play, Gamepad2, Users } from "lucide-react";
import { cn } from "../utils.js";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "Responsive Netflix UI clone with HTML, CSS, JavaScript. Features homepage, login page, movie browsing.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/sujalmishra68/netflix-clone",
    live: null,
    image:
      "https://images.unsplash.com/photo-1613679073017-b3519de90ee5?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Quiz Platform",
    description:
      "Interactive quiz application with real-time scoring, timers, and result analytics.",
    tags: ["JavaScript", "HTML", "CSS", "Interactive"],
    github: "https://github.com/sujalmishra68/quiz-platform",
    live: null,
    image:
      "https://images.unsplash.com/photo-1517433456452-d1e5257b0572?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "VolunteerHub",
    description:
      "Full stack volunteer management platform (Upcoming). React frontend + Spring Boot backend + PostgreSQL.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Full Stack"],
    github: "https://github.com/sujalmishra68/volunteerhub",
    live: null,
    image:
      "https://images.unsplash.com/photo-1559027310-0d097949e3e7?w=800&auto=format&fit=crop&q=80",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative bg-gradient-to-b from-transparent to-slate-900/50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -20, scale: 1.02 }}
              className="glass rounded-3xl overflow-hidden shadow-2xl shadow-black/30 group hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 glass rounded-xl hover:bg-white/20 transition-all flex-1 text-center"
                  >
                    <Github size={20} />
                    <span className="text-sm block mt-1 font-medium">Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 glass rounded-xl hover:bg-white/20 transition-all flex-1 text-center"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm block mt-1 font-medium">
                        Live
                      </span>
                    </motion.a>
                  )}
                  {!project.live && (
                    <motion.div className="p-3 glass rounded-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 flex-1 text-center opacity-60">
                      <Play size={20} className="mx-auto" />
                      <span className="text-sm block mt-1 font-medium">
                        Coming Soon
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-24"
        >
          <motion.a
            href="https://github.com/sujalmishra68?tab=repositories"
            target="_blank"
            className="btn-primary max-w-sm mx-auto px-12 group"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects on GitHub
            <Github
              className="group-hover:translate-x-2 transition-transform ml-2"
              size={20}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
