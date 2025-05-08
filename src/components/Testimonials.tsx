import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ali Baran Karaca",
    position: "Villa Sahibi",
    testimonial:
      "Global Grup İnşaat ekibi, taş ev hayalimizi gerçekleştirirken her adımda profesyonellik gösterdi. Kullanılan malzemeler ve işçilik kalitesi olağanüstü. Şimdi muhteşem bir taş evde yaşıyoruz.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kaan Demir",
    position: "Konut Sahibi",
    testimonial:
      "Bahçe duvarı projemizde gösterdikleri özen ve titizlik için teşekkür ederiz. Zamanında ve bütçeye uygun şekilde tamamlanan işin kalitesi beklentilerimizin üzerindeydi.",
    rating: 5,
  },
  {
    id: 3,
    name: "Faruk Gül",
    position: "Butik Otel Sahibi",
    testimonial:
      "Otelimizin taş restorasyonu için Global Grup ile çalışmak büyük bir zevkti. Tarihi dokuyu koruyarak modern dokunuşlar eklediler. Müşterilerimizden sürekli olumlu geri dönüşler alıyoruz.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
      <div className="absolute -top-5 right-6 bg-[#FAAA26] rounded-full p-2 text-white">
        <Quote size={20} />
      </div>
      <div className="flex items-center mb-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < testimonial.rating
                ? "text-[#FAAA26] fill-[#FAAA26]"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-gray-600 italic">{testimonial.testimonial}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Müşteri Yorumları
          </h2>
          <div className="w-20 h-1 bg-[#FAAA26] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Müşterilerimizin memnuniyeti en büyük önceliğimizdir. İşte onların
            deneyimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 bg-[#FAAA26] rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Hayalinizdeki Taş Evi Birlikte İnşa Edelim
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Biz sadece bina yapmıyoruz, yaşam alanları oluşturuyoruz. Global
            Grup kalitesiyle projelerinizi hayata geçirelim.
          </p>
          <a
            href="#iletisim"
            className="inline-block bg-white text-[#FAAA26] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Ücretsiz Keşif İçin Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
