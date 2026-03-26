import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Clock, MapPin } from "lucide-react";
import { cn } from "../utils.js";

const experiences = [
  {
    title: "Infosys Springboard Virtual Internship",
    role: "Cloud Reliability & Resilience Training",
    period: "2024 - Present",
    description:
      "Hands-on training in AWS basics, cloud reliability engineering, and system resilience practices.",
    icon: Briefcase,
    color: "text-emerald-400",
  },
  {
    title: "Codetech IT Solution",
    role: "Frontend Development Training",
    period: "2024",
    description:
      "Comprehensive frontend training focusing on HTML, CSS, JavaScript, and React development best practices.",
    icon: GraduationCap,
    color: "text-blue-400",
  },
  {
    title: "TechForce",
    role: "Salesforce Training",
    period: "2024",
    description:
      "CRM platform training with focus on Salesforce configuration, automation, and custom development.",
    icon: GraduationCap,
    color: "text-purple-400",
  },
  {
    title: "Arya College of Engineering & IT",
    role: "B.Tech Computer Science",
    period: "2023 - 2027",
    description:
      "Pursuing B.Tech with CGPA 8.14. Strong foundation in programming, data structures, and software engineering.",
    icon: GraduationCap,
    color: "text-indigo-400",
  },
  {
    title: "Achievements & Competitions",
    role: "",
    period: "",
    description:
      "SKIT Hackathon 2025 participant • Blind Coding Contest (EXERGIE’24)",
    icon: Award,
    color: "text-yellow-400",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 bg-gradient-to-r from-slate-900 to-slate-800/50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-10 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
          <div className="lg:hidden w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-12"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 group"
                >
                  {/* Timeline Dot & Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={cn(
                      "flex flex-col lg:flex-row items-center lg:items-start z-10 w-24 h-24 lg:w-20 lg:h-20 rounded-2xl glass shadow-2xl shadow-purple-500/20 border-4 border-white/20 flex-shrink-0",
                      index % 2 === 1 ? "lg:order-2 lg:ml-auto" : "lg:order-1",
                    )}
                  >
                    <div
                      className={`p-4 rounded-xl ${exp.color} bg-gradient-to-br from-white/20 shadow-lg`}
                    >
                      <Icon size={28} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div
                    className={cn(
                      "glass p-8 rounded-3xl shadow-2xl shadow-black/20 flex-1 group-hover:shadow-purple-500/30 transition-all duration-500 w-full lg:max-w-2xl",
                      index % 2 === 1 ? "lg:mr-auto" : "lg:ml-auto",
                    )}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                      <h3 className="text-2xl font-black text-white flex-1">
                        {exp.title}
                      </h3>
                      {exp.role && (
                        <span className="px-4 py-2 glass text-sm font-semibold text-white/80 rounded-xl border border-white/20">
                          {exp.role}
                        </span>
                      )}
                    </div>
                    {exp.period && (
                      <div className="flex items-center gap-3 text-white/60 mb-4">
                        <Clock size={18} />
                        <span>{exp.period}</span>
                      </div>
                    )}
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
