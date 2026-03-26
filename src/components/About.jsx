import { motion } from "framer-motion";
import {
  Code,
  Database,
  GitBranch,
  Cloud,
  GraduationCap,
  Users,
} from "lucide-react";
import { cn } from "../utils.js";

const About = () => {
  const skills = [
    { name: "Java", level: 90, icon: Code, color: "text-orange-400" },
    { name: "React.js", level: 85, icon: Code, color: "text-cyan-400" },
    { name: "Spring Boot", level: 80, icon: Code, color: "text-green-400" },
    { name: "MySQL", level: 85, icon: Database, color: "text-blue-400" },
    { name: "MongoDB", level: 75, icon: Database, color: "text-emerald-400" },
    { name: "Git/GitHub", level: 90, icon: GitBranch, color: "text-gray-400" },
    { name: "AWS Basics", level: 60, icon: Cloud, color: "text-yellow-400" },
    { name: "Node.js", level: 70, icon: Code, color: "text-green-300" },
  ];

  const stats = [
    { label: "Projects", value: "6+" },
    { label: "Technologies", value: "15+" },
    { label: "CGPA", value: "8.14" },
    { label: "Hackathons", value: "2+" },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-slate-900/50 to-transparent"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="glass p-12 rounded-3xl mb-16 shadow-2xl shadow-purple-500/10">
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Motivated{" "}
              <span className="gradient-text font-semibold">
                Java and Full Stack Developer
              </span>{" "}
              with hands-on experience in building responsive web applications
              and backend services using{" "}
              <span className="font-semibold">Java, React.js, Node.js</span>.
              Currently undergoing cloud reliability training through{" "}
              <span className="font-semibold text-yellow-400">
                Infosys Springboard internship
              </span>
              .
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 glass rounded-2xl hover:bg-white/10 transition-all"
                >
                  <h3 className="text-3xl font-black gradient-text mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white/70 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-8 rounded-3xl text-center hover:bg-white/10 hover:scale-105 transition-all group shadow-xl shadow-black/20"
              >
                <div
                  className={`w-16 h-16 ${skill.color} bg-gradient-to-br from-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-all duration-500`}
                >
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {skill.name}
                </h4>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    className={`h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg`}
                  />
                </div>
                <p className="text-white/60 mt-2 font-mono text-sm">
                  {skill.level}%
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
