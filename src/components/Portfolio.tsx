import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectCardProps {
  image: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  statsKey: string;
  delay: number;
}

function ProjectCard({ image, titleKey, categoryKey, descriptionKey, statsKey, delay }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
      className={`group relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all duration-500 border border-[#00FFFF]/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-[#00FFFF]">
        <div className="mb-2">
          <span className="inline-block bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-black px-3 py-1 rounded-full text-sm shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            {t(categoryKey)}
          </span>
        </div>
        <h3 className="text-[#00FFFF] mb-2 group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)] transition-all">{t(titleKey)}</h3>
        <p className="text-gray-300 mb-3 text-sm leading-relaxed">{t(descriptionKey)}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#00FFFF] text-sm drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">{t(statsKey)}</span>
          <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#00FFFF] group-hover:to-[#00D9FF] transition-all duration-300 group-hover:scale-110 border border-[#00FFFF]/30 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]">
            <ArrowUpRight className="text-[#00FFFF] group-hover:text-black" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-transparent bg-clip-text text-sm uppercase tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
              {t("portfolio.badge")}
            </span>
          </div>
          <h2 className="text-[#00FFFF] mb-6 max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard
            image="https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MzY2MTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            titleKey="portfolio.project1.title"
            categoryKey="portfolio.project1.category"
            descriptionKey="portfolio.project1.description"
            statsKey="portfolio.project1.stats"
            delay={0}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjM2NTkwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            titleKey="portfolio.project2.title"
            categoryKey="portfolio.project2.category"
            descriptionKey="portfolio.project2.description"
            statsKey="portfolio.project2.stats"
            delay={100}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzYxMzA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            titleKey="portfolio.project3.title"
            categoryKey="portfolio.project3.category"
            descriptionKey="portfolio.project3.description"
            statsKey="portfolio.project3.stats"
            delay={200}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzYyMDQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            titleKey="portfolio.project4.title"
            categoryKey="portfolio.project4.category"
            descriptionKey="portfolio.project4.description"
            statsKey="portfolio.project4.stats"
            delay={300}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1700561570982-5f845601c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MzY4NTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            titleKey="portfolio.project5.title"
            categoryKey="portfolio.project5.category"
            descriptionKey="portfolio.project5.description"
            statsKey="portfolio.project5.stats"
            delay={400}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjM2NDYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            titleKey="portfolio.project6.title"
            categoryKey="portfolio.project6.category"
            descriptionKey="portfolio.project6.description"
            statsKey="portfolio.project6.stats"
            delay={500}
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#00FFFF] text-black px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] inline-flex items-center gap-2"
          >
            {t("portfolio.button")}
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}