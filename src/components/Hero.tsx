import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('src/assets/projectImages/heroImages/Hero.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Taş İşçiliğinde Mükemmellik
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Global Grup İnşaat olarak taş duvar ve taş ev projelerinizi
            profesyonel ekibimizle hayata geçiriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#iletisim"
              className="bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-3 px-8 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              İletişime Geçin <ArrowRight size={20} />
            </a>
            <a
              href="#projeler"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-3 px-8 rounded-md font-semibold transition-all duration-300"
            >
              Projelerimiz
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#hakkimizda"
          className="text-white animate-bounce bg-white/10 p-2 rounded-full"
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
