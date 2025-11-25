import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Eye, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

function StatItem({ icon, value, label, suffix = "", delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => {
            setHasStarted(true);
            animateCount();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [hasStarted, delay]);

  const animateCount = () => {
    const target = parseFloat(value);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
  };

  const formatNumber = (num: number) => {
    if (value.includes("M")) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (value.includes("%")) {
      return Math.round(num) + "%";
    }
    return Math.round(num).toLocaleString();
  };

  return (
    <div
      ref={statRef}
      className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-[#FFD700]/30 text-center hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:border-[#FFD700]/50 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/10 group-hover:to-transparent transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-[#00FFFF]/20 rounded-xl group-hover:bg-[#00FFFF]/30 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]">
            {icon}
          </div>
        </div>
        <div className="text-3xl md:text-4xl text-[#00FFFF] mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
          {hasStarted ? formatNumber(count) : "0"}
          {suffix}
        </div>
        <p className="text-white/90 text-lg">{label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMGxhcHRvcHxlbnwxfHx8fDE3NjM3MDY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-white text-2xl uppercase tracking-wider">Bizning natijalarimiz</span>
          </div>
          <h2 className="text-white mb-6 max-w-3xl mx-auto">
            Raqamlar o'zi gapiradi
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Mijozlarimiz uchun erishgan yutuqlar. Professional yondashuv va zamonaviy texnologiyalar natijasi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatItem
            icon={<Eye className="text-[#FFD700]" size={48} />}
            value="1200000"
            label="Taassurotlar"
            delay={0}
          />
          <StatItem
            icon={<Users className="text-[#FFD700]" size={48} />}
            value="87"
            label="Jalb qilish darajasi"
            suffix="%"
            delay={200}
          />
          <StatItem
            icon={<TrendingUp className="text-[#FFD700]" size={48} />}
            value="2860000"
            label="Qamrov"
            delay={400}
          />
          <StatItem
            icon={<ShoppingBag className="text-[#FFD700]" size={48} />}
            value="90"
            label="Onlayn xaridorlar"
            suffix="%"
            delay={600}
          />
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl px-8 py-6 rounded-2xl border border-[#FFD700]/30 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-2xl text-[#FFD700] mb-2">+20%</div>
            <p className="text-white/90">O'sish so'nggi 6 oyda</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl px-8 py-6 rounded-2xl border border-[#FFD700]/30 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-2xl text-[#FFD700] mb-2">100+</div>
            <p className="text-white/90">Mamnun mijozlar</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl px-8 py-6 rounded-2xl border border-[#FFD700]/30 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-2xl text-[#FFD700] mb-2">24/7</div>
            <p className="text-white/90">Qo'llab-quvvatlash</p>
          </div>
        </div>
      </div>
    </section>
  );
}