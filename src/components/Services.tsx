import { TrendingUp, MapPin, DollarSign, ShoppingCart, Smartphone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  alt: string;
  delay: number;
}

function ServiceCard({ icon, title, description, image, alt, delay }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-black/90 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-500 overflow-hidden group relative border border-[#00FFFF]/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/0 to-[#00FFFF]/0 group-hover:from-[#00FFFF]/20 group-hover:to-black/50 transition-all duration-500 pointer-events-none"></div>
      
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 p-4 bg-black/90 backdrop-blur-sm rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.4)] group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br group-hover:from-[#00FFFF] group-hover:to-[#00D9FF] border border-[#00FFFF]/30">
          <div className="text-[#00FFFF] group-hover:text-black transition-colors drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">{icon}</div>
        </div>
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-[#00FFFF] mb-3 group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)] transition-all">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        
        {/* Hover arrow */}
        <div className="mt-4 flex items-center text-[#00FFFF] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
          <span className="text-sm mr-2">Batafsil</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0e1a] to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-transparent bg-clip-text text-sm uppercase tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">Bizning xizmatlarimiz</span>
          </div>
          <h2 className="text-[#00FFFF] mb-6 max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            To'liq raqamli yechimlar sizning biznesingiz uchun
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Kichik va o'rta biznes uchun professional xizmatlar. Marketing, e-commerce va fintex sohasida zamonaviy yechimlar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<TrendingUp className="text-[#00FFFF] group-hover:text-black" size={28} />}
            title="Raqamli marketing"
            description="Ijtimoiy tarmoqlarda analitika, qamrovni oshirish va maqsadli auditoriyangizni jalb qilish. 2.86M qamrovga erishish mumkin."
            image="https://images.unsplash.com/photo-1753162661865-27093f29dacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluc2lnaHRzJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjM3MDY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Post-insaytlar: Qamrovni 2.86M ga oshiramiz"
            delay={0}
          />

          <ServiceCard
            icon={<MapPin className="text-[#00FFFF] group-hover:text-black" size={28} />}
            title="Mahalliy SEO"
            description="Yaqin atrofdagi mijozlarni jalb qiling. Kichik biznes uchun mahalliy qidiruvda yuqori o'rinlarni ta'minlaymiz."
            image="https://images.unsplash.com/photo-1731082154898-2e63df0f2a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1hcHMlMjBsb2NhdGlvbnxlbnwxfHx8fDE3NjM3MDY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mahalliy SEO: Yaqin atrofdagi mijozlarni jalb qilamiz"
            delay={100}
          />

          <ServiceCard
            icon={<DollarSign className="text-[#00FFFF] group-hover:text-black" size={28} />}
            title="Fintex-ishlab chiqarish"
            description="Moliyaviy rejalashtirish uchun zamonaviy mobil ilovalar. Hisoblar va balanslarni bir bosishda boshqaring."
            image="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NjM3MDY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fintex-ilovalar: Moliyani bir bosishda boshqarish"
            delay={200}
          />

          <ServiceCard
            icon={<ShoppingCart className="text-[#00FFFF] group-hover:text-black" size={28} />}
            title="E-commerce yechimlar"
            description="Onlayn-do'konlar uchun mobil ilovalar va veb platformalar. To'liq funksional va foydalanuvchilarga qulay interfeyslar."
            image="https://images.unsplash.com/photo-1758598306362-9d2a212d92a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMG1vYmlsZSUyMHBob25lfGVufDF8fHx8MTc2MzcwNjU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="E-commerce yechimlar: Do'koningiz uchun mobil shoping"
            delay={300}
          />

          <ServiceCard
            icon={<Smartphone className="text-[#00FFFF] group-hover:text-black" size={28} />}
            title="Onlayn-kommersiya"
            description="90% xaridorlar onlayn sotib oladi. TechSolutions bilan raqamli savdoda ko'rinib turing va savdolarni oshiring."
            image="https://images.unsplash.com/photo-1557906757-fbb05fc2fcee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzbWFydHBob25lJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYzNzA2NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="90% xaridorlar onlayn: TechSolutions bilan ko'rinib turing"
            delay={400}
          />

          <div className="bg-black/90 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] p-8 flex flex-col justify-center items-center text-center text-[#00FFFF] group transition-all duration-500 relative overflow-hidden border border-[#00FFFF]/30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-[#00FFFF]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#00FFFF]/40 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                <Smartphone className="text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" size={40} />
              </div>
              <h3 className="text-[#00FFFF] mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">Boshqa xizmatlar</h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Sizning loyihangiz uchun maxsus yechimlar ishlab chiqamiz. Biz bilan bog'laning!
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#00FFFF] text-black px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]"
              >
                Bog'lanish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}