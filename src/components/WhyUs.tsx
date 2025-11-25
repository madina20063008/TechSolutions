import { Award, Target, Zap, Shield, Users, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
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
      className={`bg-[#E6ECF1] p-6 rounded-2xl border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 group hover:border-[#00FFFF]/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]">
        <div className="text-black">{icon}</div>
      </div>
      <h3 className="text-black mb-2 group-hover:text-[#00FFFF] transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#E6ECF1] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-black text-sm uppercase tracking-wider">
                Nega TechSolutions?
              </span>
            </div>
            <h2 className="text-black mb-6">
              Sizning biznesingiz uchun ishonchli hamkor
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Biz faqat xizmat ko'rsatmaymiz - biz sizning muvaffaqiyatingiz uchun sheriklik qilamiz. Har bir loyiha uchun individual yondashuv va zamonaviy texnologiyalar.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              5+ yillik tajriba, 100+ mamnun mijozlar va minglab muvaffaqiyatli loyihalar - bu bizning professionalligimizning isboti.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 p-5 rounded-xl border border-[#FFD700]/30">
                <div className="text-3xl text-black mb-1">100+</div>
                <p className="text-gray-600 text-sm">Bajarilgan loyihalar</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 p-5 rounded-xl border border-[#FFD700]/30">
                <div className="text-3xl text-black mb-1">98%</div>
                <p className="text-gray-600 text-sm">Mijozlar mamnuniyati</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/20 to-[#00D9FF]/20 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-2 border-[#FFD700]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjM3MDM3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bizning jamoa"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Award size={28} />}
            title="Yuqori sifat"
            description="Har bir loyiha professional darajada va eng yuqori standartlarda bajariladi."
            delay={0}
          />
          <FeatureCard
            icon={<Target size={28} />}
            title="Maqsadga yo'naltirilgan"
            description="Sizning biznes maqsadlaringizni tushunamiz va ularga erishishda yordam beramiz."
            delay={100}
          />
          <FeatureCard
            icon={<Zap size={28} />}
            title="Tez ishlash"
            description="Loyihalarni o'z vaqtida va samarali tarzda topshiramiz, sifatni yo'qotmasdan."
            delay={200}
          />
          <FeatureCard
            icon={<Shield size={28} />}
            title="Ishonchlilik"
            description="Ma'lumotlaringiz xavfsizligi va maxfiyligi - bizning birinchi ustuvorligimiz."
            delay={300}
          />
          <FeatureCard
            icon={<Users size={28} />}
            title="Tajribali jamoa"
            description="Professional mutaxassislar jamoasi har doim sizning xizmatingizda."
            delay={400}
          />
          <FeatureCard
            icon={<Headphones size={28} />}
            title="24/7 Qo'llab-quvvatlash"
            description="Doimiy qo'llab-quvvatlash va tez javob berish kafolati."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}