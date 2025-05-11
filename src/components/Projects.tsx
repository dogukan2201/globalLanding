import React, { useState } from "react";
import { Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  location?: string;
  completionDate?: string;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dükkan Projesi",
    category: "Yapı Projesi",
    imageUrl: "https://i.imgur.com/h4qecaa.jpeg",
    description:
      "Maçka Metin Usta Hamsiköy Sültacı firma dükkan projesi Global Grup İnşaat ekibi tarafından yaptırılmıştır.",
    location: "Maçka, Trabzon, Türkiye",
    completionDate: "2024",
  },
  {
    id: 2,
    title: "Taş Duvar Projesi",
    category: "Taş Duvar",
    imageUrl: "https://i.imgur.com/JJ5VSK8.jpeg",
    description:
      "Trabzon Maçka'da inşa ettiğimiz taş duvar projesi, doğal taşların ustaca kullanımıyla dikkat çekiyor.",
    location: "Maçka, Trabzon, Türkiye",
    completionDate: "2024",
  },
  {
    id: 3,
    title: "Taş Duvar Projesi",
    category: "Taş Duvar",
    imageUrl: "https://i.imgur.com/qqRfy1S.jpeg",
    description:
      "Trabzon Maçka'da inşa ettiğimiz taş duvar projesi, sağlam yapısıyla dikkat çekiyor.",
    location: "Maçka, Trabzon, Türkiye",
    completionDate: "2024",
  },
  {
    id: 4,
    title: "Lüks Villa Projesi",
    category: "Yapı Projesi",
    imageUrl: "https://i.imgur.com/e81sKpr.jpeg",
    description:
      "Lüks villa projesi Global Grup İnşaat ekibi tarafından yaptırılmıştır.",
    location: "Maçka, Trabzon, Türkiye",
    completionDate: "2024",
  },
  {
    id: 5,
    title: "Taş Ev Projesi",
    category: "Taş Ev",
    imageUrl: "https://i.imgur.com/OouSXw1.jpeg",
    description:
      "Trabzon Maçka'da inşa ettiğimiz taş ev projesi, yapımız düzenli ve estetik olmasıyla dikkat çekiyor .",
    location: "Maçka, Trabzon, Türkiye",
    completionDate: "2024",
  },
  {
    id: 6,
    title: "Dükkan Projesi",
    category: "Yapı Projesi",
    imageUrl: "https://i.imgur.com/4UdNZXS.jpeg",
    description:
      "Firma dükkan projesi Global Grup İnşaat ekibi tarafından yaptırılmıştır.",
    location: "Maçka, Trabzon, Türkiye",
    completionDate: "2024",
  },
];

const ProjectModal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 md:h-80 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h3>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-[#FAAA26]/20 text-[#FAAA26] px-3 py-1 rounded-full text-sm font-medium"
              >
                {project.category}
              </motion.span>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-6"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="bg-gray-50 p-3 rounded">
              <span className="block text-sm text-gray-500">Konum</span>
              <span className="font-medium">{project.location}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="block text-sm text-gray-500">Tamamlanma</span>
              <span className="font-medium">{project.completionDate}</span>
            </div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-2 rounded-md transition-colors"
            onClick={onClose}
          >
            Kapat
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projeler" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Tamamlanan Projelerimiz
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-[#FAAA26] mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Yıllar içinde tamamladığımız bazı önemli projelerimizi
            inceleyebilirsiniz.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["all", "Taş Ev", "Taş Duvar", "Yapı Projesi"].map(
            (category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-[#FAAA26] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter(category)}
              >
                {category === "all" ? "Tümü" : category}
              </motion.button>
            )
          )}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-2 px-4 rounded-md flex items-center gap-2"
                  >
                    <Eye size={18} />
                    Detayları Gör
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-white p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#FAAA26]">
                    {project.category}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
