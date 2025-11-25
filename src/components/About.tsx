import { useLanguage } from "../contexts/LanguageContext";
import { Award, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="text-[#00FFFF]" size={32} />,
      title: "Профессионализм",
      description: "Более 5 лет опыта в разработке",
    },
    {
      icon: <Users className="text-[#00FFFF]" size={32} />,
      title: "Команда экспертов",
      description: "20+ специалистов высокого уровня",
    },
    {
      icon: <Lightbulb className="text-[#00FFFF]" size={32} />,
      title: "Инновации",
      description: "Используем передовые технологии",
    },
    {
      icon: <Target className="text-[#00FFFF]" size={32} />,
      title: "Результативность",
      description: "100+ успешных проектов",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-black via-[#001a1a] to-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-transparent bg-clip-text text-sm uppercase tracking-wider">
              {t("about.badge")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            {t("about.title")}
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFFF]/30 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:border-[#00FFFF]/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00FFFF]/20 to-[#00D9FF]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#00FFFF]/30">
                {feature.icon}
              </div>
              <h3 className="text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] mb-2">100+</div>
            <p className="text-gray-400">Проектов</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] mb-2">20+</div>
            <p className="text-gray-400">Специалистов</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] mb-2">5+</div>
            <p className="text-gray-400">Лет на рынке</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] mb-2">8</div>
            <p className="text-gray-400">Стран</p>
          </div>
        </div>
      </div>
    </section>
  );
}
