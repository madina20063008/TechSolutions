import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1557906757-fbb05fc2fcee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzbWFydHBob25lJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYzNzA2NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/98 via-[#1a1a1a]/95 to-black/98"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-transparent bg-clip-text text-sm uppercase tracking-wider">Bog'lanish</span>
            </div>
            <h2 className="text-white mb-6">Loyihangizni boshlang</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Biznesingizni yangi bosqichga olib chiqishga tayyormisiz? Biz bilan bog'laning va bepul maslahat oling.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-black" size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <p className="text-white">info@techsolutions.uz</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-black" size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-2">Telefon</p>
                <p className="text-white">+998 71 123 45 67</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-black" size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-2">Manzil</p>
                <p className="text-white">Toshkent, O'zbekiston</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-[#00FFFF]/30 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="text-black" size={40} />
                    </div>
                    <h3 className="text-white mb-3">Xabar yuborildi!</h3>
                    <p className="text-gray-300 text-lg">
                      Tez orada siz bilan bog'lanamiz. Rahmat!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2 text-sm">
                          Ismingiz
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="bg-white/10 border-[#00FFFF]/30 text-white placeholder:text-gray-500 focus:bg-white/20 focus:border-[#00FFFF] transition-all h-12 rounded-xl"
                          placeholder="Ismingizni kiriting"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white mb-2 text-sm">
                          Email manzilingiz
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="bg-white/10 border-[#00FFFF]/30 text-white placeholder:text-gray-500 focus:bg-white/20 focus:border-[#00FFFF] transition-all h-12 rounded-xl"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-2 text-sm">
                        Xabar
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="bg-white/10 border-[#00FFFF]/30 text-white placeholder:text-gray-500 focus:bg-white/20 focus:border-[#00FFFF] transition-all min-h-40 rounded-xl"
                        placeholder="Loyihangiz haqida bizga ma'lumot bering..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#00FFFF] text-black gap-2 h-14 rounded-xl shadow-lg shadow-[#00FFFF]/30 hover:shadow-xl hover:shadow-[#00FFFF]/50 transition-all duration-300 hover:scale-105"
                    >
                      Yuborish
                      <Send size={20} />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}