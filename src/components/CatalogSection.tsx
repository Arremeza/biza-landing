import { ChevronRight, Play } from "lucide-react";

const categories = [
  {
    title: "Películas",
    subtitle: "Estrenos y clásicos",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1090569/2026-04-05/78572cae-a338-4b7c-b4da-f801e01f749d.png",
    count: "2,500+",
  },
  {
    title: "Series",
    subtitle: "Temporadas completas",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1090569/2026-04-05/cf0c5f9c-f3d6-4c4e-8e81-dbf5aaddd04b.png",
    count: "1,800+",
  },
  {
    title: "Deportes en Vivo",
    subtitle: "Todos los eventos",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1090569/2026-04-05/f144ca80-102e-4214-ab50-569980da5d04.png",
    count: "500+",
  },
  {
    title: "TV en Vivo",
    subtitle: "Canales 24/7",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1090569/2026-04-05/d94fbfe7-1a22-4dcf-a203-08115db8ee93.png",
    count: "5,000+",
  },
];

const CatalogSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0F]" id="catalog">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#B026FF]/10 border border-[#B026FF]/20 text-[#B026FF] text-sm font-semibold mb-4">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Explora nuestro{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#B026FF] bg-clip-text text-transparent">
                contenido
              </span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-1 text-[#00E5FF] hover:text-[#00E5FF]/80 font-semibold transition-colors">
            Ver todo <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Catalog cards - horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[300px] md:w-[340px] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer snap-start"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent" />

              {/* Live badge for sports and TV */}
              {(index === 2 || index === 3) && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-white text-xs font-bold">EN VIVO</span>
                </div>
              )}

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 backdrop-blur-md border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                  <Play className="w-7 h-7 text-[#00E5FF] ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-[#A0A0B0] text-sm">{cat.subtitle}</p>
                  </div>
                  <span className="text-[#00E5FF] font-bold text-sm bg-[#00E5FF]/10 px-3 py-1 rounded-full">
                    {cat.count}
                  </span>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00E5FF]/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile "Ver todo" */}
        <button className="md:hidden flex items-center gap-1 text-[#00E5FF] hover:text-[#00E5FF]/80 font-semibold transition-colors mt-6 mx-auto">
          Ver todo <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default CatalogSection;