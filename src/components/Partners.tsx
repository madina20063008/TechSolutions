import { useLanguage } from "../contexts/LanguageContext";
import { Globe, MapPin } from "lucide-react";

interface Partner {
  city: string;
  country: string;
  flag: string;
  projects: number;
}

const partners: Partner[] = [
  { city: "Ташкент", country: "Узбекистан", flag: "🇺🇿", projects: 45 },
  { city: "Москва", country: "Россия", flag: "🇷🇺", projects: 32 },
  { city: "Дубай", country: "ОАЭ", flag: "🇦🇪", projects: 28 },
  { city: "Стамбул", country: "Турция", flag: "🇹🇷", projects: 24 },
  { city: "Пекин", country: "Китай", flag: "🇨🇳", projects: 19 },
  { city: "Берлин", country: "Германия", flag: "🇩🇪", projects: 15 },
  { city: "Лондон", country: "Великобритания", flag: "🇬🇧", projects: 12 },
  { city: "Нью-Йорк", country: "США", flag: "🇺🇸", projects: 10 },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="relative py-20 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00FFFF]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#00FFFF]/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#00FFFF]/30 mb-6">
            <Globe className="text-[#00FFFF]" size={20} />
            <span className="text-sm text-[#00FFFF]">{t("partners.badge")}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            {t("partners.title")}
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            // Map city images
            const cityImages: { [key: string]: string } = {
              'Dubai': 'https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjM5NjQ3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'Москва': 'https://images.unsplash.com/photo-1512494103629-063d0a5ed3c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3Njb3clMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NjM5NjQ3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'İstanbul': 'https://images.unsplash.com/photo-1679762904523-51f1f000e9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc3RhbmJ1bCUyMHNreWxpbmV8ZW58MXx8fHwxNzYzOTY0NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
              '上海': 'https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjM5NjQ3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'New York': 'https://images.unsplash.com/photo-1529408466330-f2732a30eac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc2Mzk2NDc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
              'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBza3lsaW5lfGVufDF8fHx8MTc2Mzk2NDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
              'Berlin': 'https://images.unsplash.com/photo-1736084194273-c6da63e42d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZXJsaW4lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYzOTY0NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
              '東京': 'https://images.unsplash.com/photo-1740313503651-2dc67b10fe5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2t5byUyMG5pZ2h0JTIwc2t5bGluZXxlbnwxfHx8fDE3NjM5NjQ3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
            };
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-black/60 backdrop-blur-xl rounded-2xl border border-[#00FFFF]/30 hover:border-[#00FFFF]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00FFFF]/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* City Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cityImages[partner.city] || ''})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Flag - Larger and more prominent */}
                  <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500 text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    {partner.flag}
                  </div>

                  {/* City & Country with Map Icon */}
                  <div className="text-center mb-4 flex-grow">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="bg-[#00FFFF]/10 p-2 rounded-lg border border-[#00FFFF]/30">
                        <MapPin className="text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" size={20} />
                      </div>
                    </div>
                    <h3 className="text-white text-xl mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">{partner.city}</h3>
                    <p className="text-gray-400 text-sm mb-3">{partner.country}</p>
                    
                    {/* Map visualization line */}
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00FFFF]/50"></div>
                      <Globe className="text-[#00FFFF]/50" size={14} />
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00FFFF]/50"></div>
                    </div>
                  </div>

                  {/* Projects count - Enhanced */}
                  <div className="text-center pt-4 border-t border-[#00FFFF]/30 bg-white/5 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-3xl text-[#00FFFF] mb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">{partner.projects}</div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Проектов</p>
                  </div>
                </div>

                {/* Animated border glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 via-transparent to-[#00D9FF]/10 rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* World Map Decoration */}
        <div className="mt-16 relative">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse"></div>
              <span className="text-sm">8 стран</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm">185+ проектов</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm">3 континента</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}