import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es IPTV?",
    answer:
      "IPTV (Internet Protocol Television) es un servicio que transmite contenido de televisión a través de internet. A diferencia de la TV tradicional por cable o satélite, IPTV utiliza tu conexión a internet para ofrecer canales en vivo, películas y series bajo demanda con la mejor calidad.",
  },
  {
    question: "¿Qué necesito para usar BIZA+?",
    answer:
      "Solo necesitas una conexión a internet estable (mínimo 10 Mbps para HD, 25 Mbps para 4K) y un dispositivo compatible: Smart TV, celular, tablet, laptop, PC o Amazon Fire Stick. Nosotros te proporcionamos la app y las credenciales de acceso.",
  },
  {
    question: "¿Cuánto tarda la activación?",
    answer:
      "La activación es inmediata. Una vez realizado tu pago, recibirás tus credenciales de acceso por WhatsApp en menos de 5 minutos. Incluimos instrucciones paso a paso para configurar tu dispositivo.",
  },
  {
    question: "¿Puedo probar el servicio antes de pagar?",
    answer:
      "¡Sí! Ofrecemos una prueba de 24 horas para que puedas verificar la calidad del servicio, la estabilidad de los canales y la variedad de contenido antes de contratar un plan.",
  },
  {
    question: "¿Se puede ver en varios dispositivos al mismo tiempo?",
    answer:
      "Depende de tu plan. El plan Básico permite 1 dispositivo, el Premium 2 dispositivos y el Ultra hasta 4 dispositivos simultáneos. Todos los planes permiten instalar la app en dispositivos ilimitados.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, depósito en OXXO, PayPal y tarjeta de crédito/débito. El pago es mensual y sin contratos de permanencia.",
  },
  {
    question: "¿Qué pasa si tengo problemas con el servicio?",
    answer:
      "Contamos con soporte técnico por WhatsApp disponible 24/7. Nuestro equipo te ayudará a resolver cualquier problema en minutos. Los planes Premium y Ultra tienen soporte prioritario.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0F]" id="faq">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#B026FF]/3 blur-[150px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/5 rounded-xl px-6 bg-[#12121A] hover:border-[#00E5FF]/20 transition-colors duration-300 data-[state=open]:border-[#00E5FF]/30 data-[state=open]:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
            >
              <AccordionTrigger className="text-white font-semibold text-left hover:no-underline py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#A0A0B0] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;