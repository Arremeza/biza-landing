import { MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-[#08080D] border-t border-white/5">
      {/* CTA Banner */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/5 via-[#B026FF]/5 to-[#00E5FF]/5" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[200px] rounded-full bg-[#00E5FF]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-[#B026FF]/5 blur-[100px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para disfrutar{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              BIZA+
            </span>
            ?
          </h2>
          <p className="text-[#A0A0B0] text-lg mb-8 max-w-xl mx-auto">
            Contáctanos por WhatsApp y empieza a disfrutar hoy mismo. Activación
            inmediata.
          </p>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-10 py-6 rounded-xl shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://wa.me/521234567890?text=Hola!%20Me%20interesa%20BIZA%2B%20TV", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contactar por WhatsApp
          </Button>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/1090569/2026-04-05/0081e50c-d41c-4b5b-af9d-a5f8ed16a099.png"
              alt="BIZA+ TV México"
              className="w-40 mb-4"
            />
            <p className="text-[#A0A0B0] text-sm leading-relaxed max-w-sm">
              BIZA+ TV México - Tu servicio de streaming IPTV premium. Miles de
              canales en vivo, películas y series en la mejor calidad para toda
              la familia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#" },
                { label: "Catálogo", href: "#catalog" },
                { label: "Planes", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A0A0B0] hover:text-[#00E5FF] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Send, label: "Telegram" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[#A0A0B0] group-hover:text-[#00E5FF] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A0A0B0] text-xs">
            © 2026 BIZA+ TV México. Todos los derechos reservados.
          </p>
          <p className="text-[#A0A0B0]/50 text-xs">
            Servicio de streaming IPTV premium
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;