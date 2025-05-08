import { Building2, Shield, Clock, Leaf, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hakkımızda
            </h2>
            <div className="w-24 h-1 bg-[#FAAA26] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Global Grup İnşaat olarak, yılların getirdiği tecrübe ve uzman
                kadromuzla, mühendislik disiplinine bağlı yaklaşımımızla inşaat
                projelerinizi güvenle hayata geçiriyoruz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#FAAA26] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Kapsamlı Hizmet
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Taş duvar yapımından temel kazı işlerine, konut ve yapı
                      inşaatından çevre düzenlemelerine kadar her aşamada hizmet
                      veriyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield
                    className="text-[#FAAA26] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Kalite ve Güven
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Malzeme kalitesinden ödün vermeyen yaklaşımımız ve güvenli
                      iş süreçlerimizle projelerinizi güvence altına alıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="text-[#FAAA26] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Zamanında Teslim
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Projelerinizi planlanan süre içinde tamamlıyor, müşteri
                      memnuniyetini ön planda tutuyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf
                    className="text-[#FAAA26] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">Çevre Dostu</h3>
                    <p className="text-gray-600 text-sm">
                      Yerel mimariye ve doğaya uyumlu uygulamalarımızla
                      sürdürülebilir yapılar inşa ediyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#FAAA26] h-80 w-full rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/projectImages/about/about.jpeg"
                  alt="İnşaat Sahası"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Building2
                    className="text-[#FAAA26] mx-auto mb-2"
                    size={32}
                  />
                  <p className="text-gray-800 font-semibold">20+ Yıllık</p>
                  <p className="text-gray-600 text-sm">Tecrübe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
