import { motion } from "framer-motion";
import { Code, Database, Globe, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "I build complete web applications from frontend to backend with clean architecture and scalable solutions.",
      features: [
        "React.js Frontend",
        "Node.js & Express Backend",
        "Authentication (JWT)",
        "REST API Development",
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      description:
        "Designing secure and efficient backend systems with optimized database structures.",
      features: [
        "MongoDB Database",
        "CRUD Operations",
        "API Integration",
        "Data Security",
      ],
    },
    {
      icon: Globe,
      title: "Project Development",
      description:
        "Developing real-world projects like Event Platforms, Social Media Apps, and E-commerce systems.",
      features: [
        "Event Management Platform",
        "Social Media Features",
        "Online Voting System",
        "Admin Dashboard",
      ],
    },
    {
      icon: Zap,
      title: "Performance & UI",
      description:
        "Creating fast, responsive, and user-friendly interfaces with modern UI/UX design.",
      features: [
        "Responsive Design",
        "Tailwind CSS UI",
        "Fast Loading",
        "Smooth Animations",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I help build modern, scalable, and high-performance web applications
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-cyan-500/20" />

                  <div className="relative z-10">

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg"
                    >
                      <Icon size={30} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium overflow-hidden shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Build Something 🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}