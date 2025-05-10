import React from "react";
import {
  Home,
  Layers,
  Mountain,
  PenTool,
  PaintBucket,
  Shovel,
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-[#FAAA26]"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1 }}
        whileHover={{ rotate: 360 }}
        className="inline-flex items-center justify-center p-3 bg-[#FAAA26]/10 rounded-full mb-4"
      >
        {icon}
      </motion.div>
      <motion.h3
        whileHover={{ scale: 1.05 }}
        className="text-xl font-semibold mb-3 text-gray-800"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1 }}
        className="text-gray-600"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Home size={24} className="text-[#FAAA26]" />,
      title: "Taş Ev Yapımı",
      description:
        "Modern mimari ile geleneksel taş işçiliğini birleştirerek dayanıklı, estetik taş evler inşa ediyoruz.",
    },
    {
      icon: <Layers size={24} className="text-[#FAAA26]" />,
      title: "Taş Duvar İnşaatı",
      description:
        "Bahçe duvarları, istinat duvarları ve dekoratif taş duvarlar için uzman ekibimizle hizmetinizdeyiz.",
    },
    {
      icon: <PenTool size={24} className="text-[#FAAA26]" />,
      title: "Mimari Tasarım",
      description:
        "Projeleriniz için özel mimari tasarım hizmetimizle, hayalinizdeki yapıyı çizimlerimizle somutlaştırıyoruz.",
    },
    {
      icon: <Mountain size={24} className="text-[#FAAA26]" />,
      title: "Restorasyon",
      description:
        "Tarihi taş yapıların orijinal dokusunu koruyarak profesyonel restorasyon hizmetleri sunuyoruz.",
    },
    {
      icon: <PaintBucket size={24} className="text-[#FAAA26]" />,
      title: "İç Tasarım",
      description:
        "Taş evinizin iç mekanları için, doğal taşın sıcaklığını yansıtan iç tasarım çözümleri üretiyoruz.",
    },
    {
      icon: <Shovel size={24} className="text-[#FAAA26]" />,
      title: "Peyzaj Düzenleme",
      description:
        "Taş yapınızın çevresini doğayla uyumlu, fonksiyonel ve estetik peyzaj tasarımlarıyla tamamlıyoruz.",
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
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
            Hizmetlerimiz
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
            Global Grup İnşaat olarak, taş yapı konusunda uzmanlaşmış kadromuzla
            aşağıdaki hizmetleri sunmaktayız.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
