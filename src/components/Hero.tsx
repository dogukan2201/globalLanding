import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/fPWPaEC.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Taş İşçiliğinde <span className="text-[#FAAA26]">Mükemmellik</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-100 mb-8 leading-relaxed"
          >
            Global Grup İnşaat olarak taş duvar ve taş ev projelerinizi
            profesyonel ekibimizle hayata geçiriyoruz.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#iletisim"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              İletişime Geçin{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="#projeler"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent hover:bg-white/10 text-white border-2 border-white py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Projelerimiz
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.a
          href="#hakkimizda"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-[#FAAA26] mix-blend-overlay"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
      />
    </section>
  );
};

export default Hero;
