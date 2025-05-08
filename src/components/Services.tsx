import React from 'react';
import { Home, Layers, Mountain, PenTool, PaintBucket, Shovel } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#FAAA26]">
      <div className="inline-flex items-center justify-center p-3 bg-[#FAAA26]/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Home size={24} className="text-[#FAAA26]" />,
      title: 'Taş Ev Yapımı',
      description: 'Modern mimari ile geleneksel taş işçiliğini birleştirerek dayanıklı, estetik taş evler inşa ediyoruz.',
    },
    {
      icon: <Layers size={24} className="text-[#FAAA26]" />,
      title: 'Taş Duvar İnşaatı',
      description: 'Bahçe duvarları, istinat duvarları ve dekoratif taş duvarlar için uzman ekibimizle hizmetinizdeyiz.',
    },
    {
      icon: <PenTool size={24} className="text-[#FAAA26]" />,
      title: 'Mimari Tasarım',
      description: 'Projeleriniz için özel mimari tasarım hizmetimizle, hayalinizdeki yapıyı çizimlerimizle somutlaştırıyoruz.',
    },
    {
      icon: <Mountain size={24} className="text-[#FAAA26]" />,
      title: 'Restorasyon',
      description: 'Tarihi taş yapıların orijinal dokusunu koruyarak profesyonel restorasyon hizmetleri sunuyoruz.',
    },
    {
      icon: <PaintBucket size={24} className="text-[#FAAA26]" />,
      title: 'İç Tasarım',
      description: 'Taş evinizin iç mekanları için, doğal taşın sıcaklığını yansıtan iç tasarım çözümleri üretiyoruz.',
    },
    {
      icon: <Shovel size={24} className="text-[#FAAA26]" />,
      title: 'Peyzaj Düzenleme',
      description: 'Taş yapınızın çevresini doğayla uyumlu, fonksiyonel ve estetik peyzaj tasarımlarıyla tamamlıyoruz.',
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hizmetlerimiz
          </h2>
          <div className="w-20 h-1 bg-[#FAAA26] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Global Grup İnşaat olarak, taş yapı konusunda uzmanlaşmış kadromuzla aşağıdaki hizmetleri sunmaktayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;