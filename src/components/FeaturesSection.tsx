import { Tv, Film, Trophy, Globe, Wifi, Shield } from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "TV en Vivo",
    description:
      "Más de 5,000 canales en vivo de todo el mundo. Noticias, entretenimiento, música y más.",
    color: "#00E5FF",
  },
  {
    icon: Film,
    title: "Películas y Series",
    description:
      "Biblioteca con miles de películas y series actualizadas. Estrenos cada semana.",
    color: "#B026FF",
  },
  {
    icon: Trophy,
    title: "Deportes en Vivo",
    description:
      "Fútbol, NBA, NFL, UFC, F1 y más. Todos los eventos deportivos sin perderte nada.",
    color: "#00E5FF",
  },
  {
    icon: Globe,
    title: "Contenido Internacional",
    description:
      "Canales de USA, Latinoamérica, España y más. Contenido en múltiples idiomas.",
    color: "#B026FF",
  },
  {
    icon: Wifi,
    title: "Conexión Estable",
    description:
      "Servidores de alta velocidad para una experiencia sin interrupciones ni buffering.",
    color: "#00E5FF",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description:
      "Conexión encriptada y segura. Tu privacidad es nuestra prioridad.",
    color: "#B026FF",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0F]" id="features">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-[#B026FF]/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-sm font-semibold mb-4">
            ¿Por qué BIZA+?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Todo lo que necesitas en{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              un solo lugar
            </span>
          </h2>
          <p className="text-[#A0A0B0] text-lg max-w-2xl mx-auto">
            BIZA+ TV México te ofrece la mejor experiencia de streaming IPTV con
            contenido premium para toda la familia.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${feature.color}15`,
                  boxShadow: `0 0 20px ${feature.color}10`,
                }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#A0A0B0] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;