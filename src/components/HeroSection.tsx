import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 0.5,
        color: Math.random() > 0.5 ? "#00E5FF" : "#B026FF",
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://mgx-backend-cdn.metadl.com/generate/images/1090569/2026-04-05/95635f0c-22f3-4613-a0d9-b5a7e467b45f.png)`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A0F]/80" />

      {/* Animated particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00E5FF]/5 blur-[150px] z-[2]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#B026FF]/5 blur-[150px] z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <img
            src="/assets/biza-logo.png"
            alt="BIZA+ TV México"
            className="w-80 md:w-96 lg:w-[28rem] drop-shadow-[0_0_30px_rgba(0,229,255,0.3)] animate-pulse-slow"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Tu entretenimiento{" "}
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
            sin límites
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0B0] mb-4 max-w-2xl mx-auto leading-relaxed">
          Disfruta de miles de canales en vivo, películas, series y deportes en
          la mejor calidad. Streaming IPTV premium para toda la familia.
        </p>

        {/* Live indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
            En vivo ahora
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] hover:from-[#00C8E0] hover:to-[#9B20E0] text-white font-bold text-lg px-10 py-6 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Comenzar ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="!bg-transparent !hover:bg-transparent border-[#00E5FF]/40 text-[#00E5FF] hover:border-[#00E5FF] font-semibold text-lg px-10 py-6 rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300"
          >
            <Zap className="mr-2 h-5 w-5" />
            Ver planes
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              +5000
            </p>
            <p className="text-[#A0A0B0] text-sm mt-1">Canales</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              4K
            </p>
            <p className="text-[#A0A0B0] text-sm mt-1">Ultra HD</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-[#A0A0B0] text-sm mt-1">Soporte</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00E5FF]/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#00E5FF] rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;