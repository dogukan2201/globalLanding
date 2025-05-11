import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { services, links } from "../constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#FAAA26]">GLOBAL</span> GRUP İNŞAAT
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              2005 yılından bu yana sektörde kaliteli ve güvenilir hizmet veren
              firmamız, taş ev ve taş duvar projeleriniz için yanınızda.
            </p>
            <motion.div className="flex space-x-4" whileHover={{ scale: 1.05 }}>
              <motion.a
                href="https://www.instagram.com/globalgrup.insaat/"
                target="_blank"
                className="text-gray-300 hover:text-[#FAAA26] transition-colors p-2 rounded-full hover:bg-gray-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-[#FAAA26]">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#hizmetler"
                    className="hover:text-[#FAAA26] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FAAA26] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-[#FAAA26]">
              Hızlı Erişim
            </h3>
            <ul className="space-y-3 text-gray-300">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-[#FAAA26] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FAAA26] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-[#FAAA26]">İletişim</h3>
            <ul className="space-y-4 text-gray-300">
              <motion.li
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="h-5 w-5 mr-3 text-[#FAAA26] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#FAAA26] transition-colors">
                  Reşadiye Mah. Hacıosmanoğlu Cad. No:2 Maçka/Trabzon
                </span>
              </motion.li>
              <motion.li
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="h-5 w-5 mr-3 text-[#FAAA26] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#FAAA26] transition-colors">
                  Telefon Numaralarımız
                  <br />
                  0(462) 511 0 511 <br />
                  0(532) 203 45 61 <br />
                  0(532) 165 36 61 <br /> 0(535) 616 86 09
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© {currentYear} Global Grup İnşaat. Tüm Hakları Saklıdır.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
