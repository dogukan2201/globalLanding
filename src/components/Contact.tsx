import React, { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "İsim alanı boş bırakılamaz";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta alanı boş bırakılamaz";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası boş bırakılamaz";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı boş bırakılamaz";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="iletisim" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            İletişim
          </h2>
          <div className="w-20 h-1 bg-[#FAAA26] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. En kısa sürede size dönüş
            yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                İletişim Bilgilerimiz
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FAAA26]/10 p-3 rounded-full mr-4">
                    <Phone className="text-[#FAAA26]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Telefon</h4>
                    <p className="text-gray-600">0(462) 511 0 511</p>
                    <p className="text-gray-600">0(532) 203 45 61</p>
                    <p className="text-gray-600">0(532) 165 36 61</p>
                    <p className="text-gray-600">0(535) 616 86 09</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FAAA26]/10 p-3 rounded-full mr-4">
                    <MapPin className="text-[#FAAA26]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Adres</h4>
                    <p className="text-gray-600">
                      Reşadiye Mah. Hacıosmanoğlu Cad. No:2
                      <br />
                      Maçka/Trabzon
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">
                  Bizi Takip Edin
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/globalgrup.insaat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-[#FAAA26] p-2 rounded-full text-gray-600 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bize Yazın
              </h3>

              {submitSuccess && (
                <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                  <p>
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                    yapacağız.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      İsim Soyisim*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAAA26] ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="İsim Soyisim"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      E-posta*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAAA26] ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="E-posta adresiniz"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Telefon*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAAA26] ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Telefon numaranız"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-2"
                    >
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAAA26]"
                    >
                      <option value="">Konu Seçiniz</option>
                      <option value="Taş Ev Projesi">Taş Ev Projesi</option>
                      <option value="Taş Duvar Projesi">
                        Taş Duvar Projesi
                      </option>
                      <option value="Restorasyon">Restorasyon</option>
                      <option value="Peyzaj Düzenleme">Peyzaj Düzenleme</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mesajınız*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAAA26] h-32 resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mesajınızı yazın..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Gönderiliyor...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
