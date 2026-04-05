import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "$99",
    period: "/mes",
    description: "Perfecto para empezar",
    features: [
      "1,000+ canales en vivo",
      "Calidad HD",
      "1 dispositivo simultáneo",
      "Películas y series",
      "Soporte por WhatsApp",
    ],
    popular: false,
    icon: Zap,
    accentColor: "#00E5FF",
  },
  {
    name: "Premium",
    price: "$179",
    period: "/mes",
    description: "El más popular",
    features: [
      "3,000+ canales en vivo",
      "Calidad Full HD",
      "2 dispositivos simultáneos",
      "Películas, series y deportes",
      "Soporte prioritario 24/7",
      "EPG (Guía de programación)",
    ],
    popular: true,
    icon: Star,
    accentColor: "#B026FF",
  },
  {
    name: "Ultra",
    price: "$249",
    period: "/mes",
    description: "La experiencia completa",
    features: [
      "5,000+ canales en vivo",
      "Calidad 4K Ultra HD",
      "4 dispositivos simultáneos",
      "Todo el contenido incluido",
      "Soporte VIP 24/7",
      "EPG + Catch-up TV",
      "VOD premium ilimitado",
    ],
    popular: false,
    icon: Zap,
    accentColor: "#00E5FF",
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0F]" id="pricing">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#B026FF]/5 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-sm font-semibold mb-4">
            Planes
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Elige tu plan{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              ideal
            </span>
          </h2>
          <p className="text-[#A0A0B0] text-lg max-w-2xl mx-auto">
            Todos nuestros planes incluyen acceso inmediato. Sin contratos, cancela cuando quieras.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#B026FF]/10 to-[#12121A] border-2 border-[#B026FF]/40 shadow-[0_0_40px_rgba(176,38,255,0.15)]"
                  : "bg-[#12121A] border border-white/5 hover:border-[#00E5FF]/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#B026FF] text-white text-sm font-bold shadow-[0_0_20px_rgba(176,38,255,0.4)]">
                  ⭐ Más Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${plan.accentColor}15` }}
                >
                  <plan.icon
                    className="w-6 h-6"
                    style={{ color: plan.accentColor }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-[#A0A0B0] text-sm">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-[#A0A0B0] text-lg">{plan.period}</span>
                </div>
                <p className="text-[#A0A0B0] text-xs mt-1">MXN</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${plan.accentColor}20` }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: plan.accentColor }}
                      />
                    </div>
                    <span className="text-[#A0A0B0] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-6 rounded-xl font-bold text-base transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#00E5FF] to-[#B026FF] hover:from-[#00C8E0] hover:to-[#9B20E0] text-white shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:shadow-[0_0_40px_rgba(176,38,255,0.5)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#00E5FF]/30"
                }`}
              >
                Contratar ahora
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <p className="text-center text-[#A0A0B0] text-sm mt-10">
          🔒 Pago seguro · Sin contratos · Activación inmediata · Garantía de 24 horas
        </p>
      </div>
    </section>
  );
};

export default PricingSection;