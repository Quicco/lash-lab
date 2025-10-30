export default function HeroSection() {

  return (
    <section>
      <div className="relative h-120 md:min-h-5/10 w-full bg-blue-200">
        <img
          src="/img/hero-bg.jpg" 
          alt="Lash Lab by Kate - Beautiful Lashes"
          className="absolute inset-0 h-full w-full object-cover object-right overflow-hidden brightness-50" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-lashwhite p-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-20 text-center">
            Detalhes que realçam a tua beleza e transformam a tua confiança
          </h1>
          <button className="bg-lashdark px-8 py-3 text-lg font-semibold rounded-xs hover:bg-lashDark transition-colors duration-300">
            Ver serviços
          </button>
        </div>
      </div>
    </section>
  );
}
