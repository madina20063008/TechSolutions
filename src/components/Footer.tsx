import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import techNetworkBg from "figma:asset/03dfbb468e8d10e2a6f47f07c174d0d7a83f594f.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative text-[#00FFFF] py-12 border-t border-[#00FFFF]/30 shadow-[0_-4px_20px_rgba(0,255,255,0.3)] overflow-hidden"
      style={{
        backgroundImage: `url(${techNetworkBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 bg-[rgba(252,252,252,0)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.6)]">
                <span className="text-black text-lg">ATS</span>
              </div>
              <span className="text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">AUTOMATIC TECHNOLOGY SOLUTIONS</span>
            </div>
            <p className="text-gray-400 mb-4">
              Biznesingiz o'sishi uchun innovatsion IT-yechimlar. Raqamli marketing, fintex-ishlab chiqarish va e-commerce sohasida professional xizmatlar.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00FFFF] hover:to-[#00D9FF] hover:text-black transition-all border border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00FFFF] hover:to-[#00D9FF] hover:text-black transition-all border border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00FFFF] hover:to-[#00D9FF] hover:text-black transition-all border border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00FFFF] hover:to-[#00D9FF] hover:text-black transition-all border border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#00FFFF] mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("home");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all"
                >
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all"
                >
                  Xizmatlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("stats");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all"
                >
                  Natijalar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all"
                >
                  Aloqa
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#00FFFF] mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">Xizmatlar</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all cursor-pointer">Raqamli marketing</li>
              <li className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all cursor-pointer">Mahalliy SEO</li>
              <li className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all cursor-pointer">Fintex-ishlab chiqarish</li>
              <li className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all cursor-pointer">E-commerce yechimlar</li>
              <li className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all cursor-pointer">Onlayn-kommersiya</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00FFFF]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} TechSolutions. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all">
              Maxfiylik siyosati
            </a>
            <a href="#" className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}