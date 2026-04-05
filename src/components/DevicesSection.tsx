import { Monitor, Smartphone, Tablet, Tv, Laptop, Gamepad2 } from "lucide-react";

const devices = [
  { icon: Tv, name: "Smart TV", desc: "Samsung, LG, Sony, Android TV" },
  { icon: Smartphone, name: "Celular", desc: "iOS y Android" },
  { icon: Tablet, name: "Tablet", desc: "iPad y Android" },
  { icon: Laptop, name: "Laptop", desc: "Windows y Mac" },
  { icon: Monitor, name: "PC", desc: "Cualquier navegador" },
  { icon: Gamepad2, name: "Fire Stick", desc: "Amazon Fire TV" },
];

const DevicesSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0F]" id="devices">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B026FF]/10 border border-[#B026FF]/20 text-[#B026FF] text-sm font-semibold mb-4">
            Multi-dispositivo
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Disponible en{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              todos tus dispositivos
            </span>
          </h2>
          <p className="text-[#A0A0B0] text-lg max-w-2xl mx-auto">
            Lleva tu entretenimiento a donde vayas. Compatible con los
            dispositivos más populares del mercado.
          </p>
        </div>

        {/* Devices grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {devices.map((device, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF]/10 to-[#B026FF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <device.icon className="w-8 h-8 text-[#00E5FF] group-hover:text-[#B026FF] transition-colors duration-300" />
              </div>
              <h3 className="text-white font-bold mb-1">{device.name}</h3>
              <p className="text-[#A0A0B0] text-xs">{device.desc}</p>
            </div>
          ))}
        </div>

        {/* Setup info */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#00E5FF]/5 to-[#B026FF]/5 border border-white/5 text-center">
          <p className="text-white font-semibold text-lg mb-2">
            ⚡ Configuración en menos de 5 minutos
          </p>
          <p className="text-[#A0A0B0] text-sm">
            Te enviamos las instrucciones paso a paso para que empieces a
            disfrutar de inmediato. Sin complicaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;