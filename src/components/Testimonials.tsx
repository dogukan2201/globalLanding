import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute -top-5 right-6 bg-[#FAAA26] rounded-full p-2 text-white"
      >
        <Quote size={20} />
      </motion.div>
      <div className="flex items-center mb-4">
        <div>
          <motion.h4
            whileHover={{ scale: 1.05 }}
            className="text-lg font-semibold text-gray-800"
          >
            {testimonial.name}
          </motion.h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Star
              size={18}
              className={
                index < testimonial.rating
                  ? "text-[#FAAA26] fill-[#FAAA26]"
                  : "text-gray-300"
              }
            />
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 italic"
      >
        {testimonial.testimonial}
      </motion.p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
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
            Müşteri Yorumları
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
            Müşterilerimizin memnuniyeti en büyük önceliğimizdir. İşte onların
            deneyimleri.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
