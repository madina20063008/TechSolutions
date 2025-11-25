import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#00FFFF]/20" 
          : "bg-black/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-11 h-11 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[#00FFFF]/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-black">ATS</span>
            </div>
            <span className="text-white group-hover:text-[#00FFFF] transition-colors">AUTOMATIC TECHNOLOGY SOLUTIONS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-[#00FFFF] transition-colors relative group"
            >
              {t("header.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFFF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#00FFFF] transition-colors relative group"
            >
              {t("header.about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFFF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-white hover:text-[#00FFFF] transition-colors relative group"
            >
              {t("header.partners")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFFF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#00FFFF] transition-colors relative group"
            >
              {t("header.services")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFFF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-white hover:text-[#00FFFF] transition-colors relative group"
            >
              {t("header.results")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFFF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#00FFFF] transition-colors relative group"
            >
              {t("header.contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFFF] group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-all duration-300">
                <span className="text-white text-sm uppercase">{language}</span>
                <svg className="w-4 h-4 text-[#00FFFF] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-xl border border-[#00FFFF]/30 shadow-xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                <button
                  onClick={() => setLanguage("uzb")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "uzb"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇺🇿</span>
                  <span className="text-sm">O'zbekcha</span>
                </button>
                <button
                  onClick={() => setLanguage("rus")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "rus"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇷🇺</span>
                  <span className="text-sm">Русский</span>
                </button>
                <button
                  onClick={() => setLanguage("eng")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "eng"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-sm">English</span>
                </button>
                <button
                  onClick={() => setLanguage("ara")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "ara"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇸🇦</span>
                  <span className="text-sm">العربية</span>
                </button>
                <button
                  onClick={() => setLanguage("zho")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "zho"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇨🇳</span>
                  <span className="text-sm">中文</span>
                </button>
                <button
                  onClick={() => setLanguage("tur")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "tur"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇹🇷</span>
                  <span className="text-sm">Türkçe</span>
                </button>
                <button
                  onClick={() => setLanguage("deu")}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                    language === "deu"
                      ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#00D9FF]/20 text-[#00FFFF] border-l-2 border-[#00FFFF]"
                      : "text-white hover:bg-white/5 hover:text-[#00FFFF]"
                  }`}
                >
                  <span className="text-xl">🇩🇪</span>
                  <span className="text-sm">Deutsch</span>
                </button>
              </div>
            </div>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#00FFFF] text-black shadow-lg shadow-[#00FFFF]/30 hover:shadow-xl hover:shadow-[#00FFFF]/50 transition-all duration-300 hover:scale-105"
            >
              {t("header.start")}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#00FFFF] transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-[#00FFFF]/20 flex flex-col gap-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-[#00FFFF] transition-colors text-left py-2 hover:pl-2 transition-all"
            >
              {t("header.home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#00FFFF] transition-colors text-left py-2 hover:pl-2 transition-all"
            >
              {t("header.about")}
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-white hover:text-[#00FFFF] transition-colors text-left py-2 hover:pl-2 transition-all"
            >
              {t("header.partners")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#00FFFF] transition-colors text-left py-2 hover:pl-2 transition-all"
            >
              {t("header.services")}
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-white hover:text-[#00FFFF] transition-colors text-left py-2 hover:pl-2 transition-all"
            >
              {t("header.results")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#00FFFF] transition-colors text-left py-2 hover:pl-2 transition-all"
            >
              {t("header.contact")}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="grid grid-cols-4 gap-2 bg-white/5 rounded-lg p-2 border border-[#00FFFF]/20">
              <button
                onClick={() => setLanguage("uzb")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "uzb"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                UZB
              </button>
              <button
                onClick={() => setLanguage("rus")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "rus"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                RUS
              </button>
              <button
                onClick={() => setLanguage("eng")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "eng"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage("ara")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "ara"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                AR
              </button>
              <button
                onClick={() => setLanguage("zho")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "zho"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage("tur")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "tur"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("deu")}
                className={`px-2 py-2 rounded-md text-xs transition-all duration-300 ${
                  language === "deu"
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black"
                    : "text-white"
                }`}
              >
                DE
              </button>
            </div>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#00FFFF] text-black w-full shadow-lg"
            >
              {t("header.start")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}