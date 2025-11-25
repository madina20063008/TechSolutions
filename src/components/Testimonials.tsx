import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface TestimonialCardProps {
  image: string;
  nameKey: string;
  positionKey: string;
  companyKey: string;
  textKey: string;
  rating: number;
  delay: number;
}

function TestimonialCard({ image, nameKey, positionKey, companyKey, textKey, rating, delay }: TestimonialCardProps) {
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
      className={`bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all duration-500 border border-[#00FFFF]/30 hover:border-[#00FFFF]/60 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#00FFFF]/20 group-hover:ring-[#00FFFF]/50 transition-all">
            <ImageWithFallback
              src={image}
              alt={t(nameKey)}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-[#00FFFF] to-[#00D9FF] rounded-full flex items-center justify-center shadow-lg">
            <Quote className="text-black" size={14} />
          </div>
        </div>
        <div>
          <h4 className="text-[#00FFFF] mb-1">{t(nameKey)}</h4>
          <p className="text-gray-400 text-sm">{t(positionKey)}</p>
          <p className="text-[#00FFFF]/80 text-sm">{t(companyKey)}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-[#00FFFF] text-[#00FFFF]" : "text-gray-600"}
          />
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed italic">&ldquo;{t(textKey)}&rdquo;</p>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#00D9FF] text-transparent bg-clip-text text-sm uppercase tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
              {t("testimonials.badge")}
            </span>
          </div>
          <h2 className="text-[#00FFFF] mb-6 max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            nameKey="testimonials.testimonial1.name"
            positionKey="testimonials.testimonial1.position"
            companyKey="testimonials.testimonial1.company"
            textKey="testimonials.testimonial1.text"
            rating={5}
            delay={0}
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            nameKey="testimonials.testimonial2.name"
            positionKey="testimonials.testimonial2.position"
            companyKey="testimonials.testimonial2.company"
            textKey="testimonials.testimonial2.text"
            rating={5}
            delay={100}
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            nameKey="testimonials.testimonial3.name"
            positionKey="testimonials.testimonial3.position"
            companyKey="testimonials.testimonial3.company"
            textKey="testimonials.testimonial3.text"
            rating={5}
            delay={200}
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            nameKey="testimonials.testimonial4.name"
            positionKey="testimonials.testimonial4.position"
            companyKey="testimonials.testimonial4.company"
            textKey="testimonials.testimonial4.text"
            rating={5}
            delay={300}
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            nameKey="testimonials.testimonial5.name"
            positionKey="testimonials.testimonial5.position"
            companyKey="testimonials.testimonial5.company"
            textKey="testimonials.testimonial5.text"
            rating={5}
            delay={400}
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            nameKey="testimonials.testimonial6.name"
            positionKey="testimonials.testimonial6.position"
            companyKey="testimonials.testimonial6.company"
            textKey="testimonials.testimonial6.text"
            rating={5}
            delay={500}
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-[#00FFFF]/30 hover:border-[#00FFFF]/60 transition-all">
            <div className="text-4xl text-[#00FFFF] mb-2">4.9/5.0</div>
            <p className="text-gray-400">{t("testimonials.rating")}</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-[#00FFFF]/30 hover:border-[#00FFFF]/60 transition-all">
            <div className="text-4xl text-[#00FFFF] mb-2">100+</div>
            <p className="text-gray-400">{t("testimonials.reviews")}</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-[#00FFFF]/30 hover:border-[#00FFFF]/60 transition-all">
            <div className="text-4xl text-[#00FFFF] mb-2">98%</div>
            <p className="text-gray-400">{t("testimonials.recommend")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}