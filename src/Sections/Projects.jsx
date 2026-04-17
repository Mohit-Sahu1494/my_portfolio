import { motion } from "framer-motion";
import { ExternalLink, GitBranchPlusIcon } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Event Platform",
      description:
        "A full-stack event management platform with authentication, event creation, and real-time updates",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "Modern social platform with posts, likes, comments, and user profiles",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
      tags: ["React", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Complete e-commerce system with admin panel, product management, and secure APIs",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      tags: ["React", "Node", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Online Voting System",
      description:
        "Secure voting platform with authentication and real-time vote counting",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
      tags: ["Node.js", "MongoDB", "Auth"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">

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
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects showcasing full-stack development and problem solving
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, rotateX: 5, rotateY: 5 }}
              className="group relative perspective"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500">

                {/* Neon Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-cyan-500/20" />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition" />

                  {/* Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg hover:bg-cyan-600"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GitBranchPlusIcon size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}