import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Home,
  Info,
  Briefcase,
  Building2,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { icon: Home, label: "Anasayfa", href: "#anasayfa" },
    { icon: Briefcase, label: "Hizmetler", href: "#hizmetler" },
    { icon: Building2, label: "Projeler", href: "#projeler" },
    { icon: Info, label: "Hakkımızda", href: "#hakkimizda" },
    { icon: Mail, label: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r text-[#FAAA26] bg-clip-text ">
                GLOBAL
              </span>{" "}
              <span
                className={`${isScrolled ? "text-white" : "text-gray-800"}`}
              >
                GRUP İNŞAAT
              </span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative font-medium transition-colors flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-300 hover:text-[#FAAA26]"
                    : "text-gray-700 hover:text-[#FAAA26]"
                }`}
              >
                <item.icon
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FAAA26] transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none ${
              isScrolled ? "text-white" : "text-gray-700"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-4 py-4 rounded-lg shadow-lg ${
                isScrolled
                  ? "bg-gray-900/95 backdrop-blur-md"
                  : "bg-white/95 backdrop-blur-md"
              }`}
            >
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className={`px-4 py-2 font-medium flex items-center gap-2 ${
                      isScrolled
                        ? "text-gray-300 hover:text-[#FAAA26]"
                        : "text-gray-700 hover:text-[#FAAA26]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
