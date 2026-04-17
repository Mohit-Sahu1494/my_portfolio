import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "React / Next.js",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js / Express",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "JavaScript",
      level: 88,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "MongoDB",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express.js",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Git & GitHub",
      level: 82,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "REST APIs",
      level: 87,
      icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I build modern full-stack applications using powerful technologies and clean architecture
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">

                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

                {/* Blur glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-cyan-500/20" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 rounded-xl bg-white flex items-center justify-center shadow-md">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  </div>

                  {/* Percentage */}
                  <p className="text-xs text-gray-400">
                    {skill.level}%
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}