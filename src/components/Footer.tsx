import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#FAAA26]">GLOBAL</span> GRUP İNŞAAT
            </h3>
            <p className="text-gray-300 mb-4">
              2005 yılından bu yana sektörde kaliteli ve güvenilir hizmet veren
              firmamız, taş ev ve taş duvar projeleriniz için yanınızda.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/globalgrup.insaat/"
                target="_blank"
                className="text-gray-300 hover:text-[#FAAA26] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#FAAA26] transition-colors">
                  Taş Ev Yapımı
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FAAA26] transition-colors">
                  Taş Duvar İnşaatı
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FAAA26] transition-colors">
                  Mimari Tasarım
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FAAA26] transition-colors">
                  Restorasyon
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FAAA26] transition-colors">
                  İç Tasarım
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FAAA26] transition-colors">
                  Peyzaj Düzenleme
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#anasayfa"
                  className="hover:text-[#FAAA26] transition-colors"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="#hakkimizda"
                  className="hover:text-[#FAAA26] transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#hizmetler"
                  className="hover:text-[#FAAA26] transition-colors"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="hover:text-[#FAAA26] transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="hover:text-[#FAAA26] transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 text-[#FAAA26] mt-1 flex-shrink-0" />
                <span>
                  Atatürk Caddesi, No: 123, Merkez Mahallesi, Muğla, Türkiye
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-5 w-5 mr-2 text-[#FAAA26] flex-shrink-0" />
                <span>+90 500 123 45 67</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2 text-[#FAAA26] flex-shrink-0" />
                <span>info@globalgrupinsaat.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Global Grup İnşaat. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
