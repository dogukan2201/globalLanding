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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-[#FAAA26]">GLOBAL</span> GRUP İNŞAAT
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#anasayfa"
              className="text-gray-800 hover:text-[#FAAA26] font-medium transition-colors flex items-center gap-1"
            >
              <Home size={18} />
              Anasayfa
            </a>

            <a
              href="#hizmetler"
              className="text-gray-700 hover:text-[#FAAA26] font-medium transition-colors flex items-center gap-1"
            >
              <Briefcase size={18} />
              Hizmetler
            </a>
            <a
              href="#projeler"
              className="text-gray-700 hover:text-[#FAAA26] font-medium transition-colors flex items-center gap-1"
            >
              <Building2 size={18} />
              Projeler
            </a>
            <a
              href="#hakkimizda"
              className="text-gray-700 hover:text-[#FAAA26] font-medium transition-colors flex items-center gap-1"
            >
              <Info size={18} />
              Hakkımızda
            </a>
            <a
              href="#iletisim"
              className="text-gray-700 hover:text-[#FAAA26] font-medium transition-colors flex items-center gap-1"
            >
              <Mail size={18} />
              İletişim
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <a
                href="#anasayfa"
                className="text-gray-700 hover:text-[#FAAA26] px-4 py-2 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} />
                Anasayfa
              </a>
              <a
                href="#hakkimizda"
                className="text-gray-700 hover:text-[#FAAA26] px-4 py-2 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={18} />
                Hakkımızda
              </a>
              <a
                href="#hizmetler"
                className="text-gray-700 hover:text-[#FAAA26] px-4 py-2 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Briefcase size={18} />
                Hizmetler
              </a>
              <a
                href="#projeler"
                className="text-gray-700 hover:text-[#FAAA26] px-4 py-2 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Building2 size={18} />
                Projeler
              </a>
              <a
                href="#iletisim"
                className="text-gray-700 hover:text-[#FAAA26] px-4 py-2 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={18} />
                İletişim
              </a>
              <a
                href="tel:+905001234567"
                className="flex items-center gap-2 bg-[#FAAA26] text-white mx-4 py-2 px-4 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>0500 123 45 67</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
