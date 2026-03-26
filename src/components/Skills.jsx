import { motion } from "framer-motion";
import {
  Coffee,
  Smartphone,
  Database,
  Server,
  Code2,
  GitBranch,
  Package,
  ChevronRight,
} from "lucide-react";
import { cn } from "../utils.js";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: Coffee, progress: 90 },
      { name: "JavaScript", icon: Code2, progress: 85 },
      { name: "C", icon: Code2, progress: 70 },
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: Smartphone, progress: 85 },
      { name: "HTML/CSS", icon: Code2, progress: 90 },
      { name: "Tailwind CSS", icon: Code2, progress: 80 },
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: Server, progress: 80 },
      { name: "Node.js", icon: Server, progress: 75 },
      { name: "Express.js", icon: Server, progress: 70 },
    ],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: Database, progress: 85 },
      { name: "MongoDB", icon: Database, progress: 75 },
      { name: "JDBC", icon: Database, progress: 80 },
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    category: "Tools",
    skills: [
      { name: "Git/GitHub", icon: GitBranch, progress: 90 },
      { name: "VS Code", icon: Code2, progress: 95 },
      { name: "Eclipse", icon: Code2, progress: 85 },
    ],
    color: "from-purple-500 to-purple-600",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-br from-slate-900/30 to-black/50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Skills Mastery
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              className="glass p-10 lg:p-12 rounded-3xl shadow-2xl shadow-black/20 hover:shadow-purple-500/30 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/10">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}
                >
                  <span className="block w-2 h-2 bg-white rounded-full animate-ping"></span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-2"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="group/skill flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                        >
                          <Icon
                            size={24}
                            className="text-white drop-shadow-lg"
                          />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">
                            {skill.name}
                          </h4>
                          <p className="text-white/60 text-sm">
                            {skill.progress}% Proficiency
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-32">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden shadow-inner">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.progress}%` }}
                              viewport={{ once: true }}
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </div>
                          <span className="text-white/70 font-mono text-xs min-w-[3rem] text-right">
                            {skill.progress}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animations in index.css will be added later */}
    </section>
  );
};

export default Skills;
