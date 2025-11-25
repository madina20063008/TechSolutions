import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import globeImage from "figma:asset/7ac024cf84ec174615de750da34b5b3bef218846.png";
import heroBackgroundImage from "figma:asset/8896b9f5eb9698276e27ad8b42210bfe61d865f4.png";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }}></div>

      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl animate-float shadow-[0_0_100px_rgba(0,255,255,0.3)]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#00FFFF]/5 rounded-full blur-3xl animate-float-delayed shadow-[0_0_150px_rgba(0,255,255,0.2)]"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#00D9FF]/5 rounded-full blur-2xl animate-pulse-slow shadow-[0_0_80px_rgba(0,255,255,0.25)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#00FFFF]/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#00FFFF]/30 hover:bg-[#00FFFF]/20 transition-all duration-300 group">
              <Sparkles className="text-[#00FFFF] group-hover:scale-110 transition-transform" size={20} />
              <span className="text-sm text-[#00FFFF]">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-left font-normal">
              {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#00D9FF] to-[#00FFFF] animate-shimmer bg-[length:200%_100%] font-bold">{t("hero.titleHighlight")}</span> {t("hero.titleEnd")}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#00FFFF] text-black gap-2 shadow-lg shadow-[#00FFFF]/30 hover:shadow-xl hover:shadow-[#00FFFF]/50 transition-all duration-300 hover:scale-105 group"
              >
                {t("hero.consultation")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                variant="outline"
                className="bg-transparent backdrop-blur-md border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 hover:scale-105"
              >
                {t("hero.viewServices")}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">100+ {t("hero.clients")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">5+ {t("hero.experience")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">24/7 {t("hero.support")}</span>
              </div>
            </div>
          </div>

          {/* Right: Animated Globe Image */}
          <div className="relative hidden lg:block">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/20 via-[#0099FF]/20 to-[#00FFFF]/20 rounded-full blur-3xl animate-pulse-slow"></div>
            
            {/* Rotating rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120%] h-[120%] border-2 border-[#00FFFF]/20 rounded-full animate-spin-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110%] h-[110%] border-2 border-[#0099FF]/10 rounded-full animate-spin-reverse"></div>
            </div>
            
            {/* Main Globe Image */}
            <div className="relative z-10 animate-float">
              <img
                src={globeImage}
                alt="Digital Globe Network"
                className="absolute inset-0 w-full h-full object-cover opacity-30 drop-shadow-2xl animate-glow"
              />
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00FFFF] rounded-full animate-float-particle-1 shadow-lg shadow-[#00FFFF]/50"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#0099FF] rounded-full animate-float-particle-2 shadow-lg shadow-[#0099FF]/50"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00FFFF] rounded-full animate-float-particle-3 shadow-lg shadow-[#00FFFF]/50"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#00D9FF] rounded-full animate-float-particle-4 shadow-lg shadow-[#00D9FF]/50"></div>
          </div>
        </div>

        {/* Stats Preview - moved below on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#00FFFF]/50 group">
            <div className="text-4xl text-[#00FFFF] mb-2 group-hover:scale-110 transition-transform">1.2M+</div>
            <p className="text-white/90 text-sm">{t("hero.impressions")}</p>
            <div className="mt-2 text-xs text-[#00FFFF]">{t("hero.growth")}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#00FFFF]/50 group">
            <div className="text-4xl text-[#00FFFF] mb-2 group-hover:scale-110 transition-transform">87%</div>
            <p className="text-white/90 text-sm">{t("hero.engagement")}</p>
            <div className="mt-2 text-xs text-[#00FFFF]">{t("hero.highResult")}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#00FFFF]/50 group">
            <div className="text-4xl text-[#00FFFF] mb-2 group-hover:scale-110 transition-transform">2.86M</div>
            <p className="text-white/90 text-sm">{t("hero.coverage")}</p>
            <div className="mt-2 text-xs text-[#00FFFF]">{t("hero.wideAudience")}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#00FFFF]/50 group">
            <div className="text-4xl text-[#00FFFF] mb-2 group-hover:scale-110 transition-transform">90%</div>
            <p className="text-white/90 text-sm">{t("hero.buyers")}</p>
            <div className="mt-2 text-xs text-[#00FFFF]">{t("hero.digitalMarket")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}