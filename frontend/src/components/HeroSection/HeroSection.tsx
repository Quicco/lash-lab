export default function HeroSection() {

  return (
    <section>
      <div className="relative min-h-[500px] md:min-h-[80vh] bg-[url(/img/hero-bg-2.jpg)] bg-cover bg-center bg-no-repeat md:bg-fixed">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-lashwhite p-4 mt-5">
          <h1 className="text-xl md:text-5xl m-10 text-center">
            Detalhes que realçam a tua beleza e transformam a tua confiança
          </h1>
          <a className="bg-lashdark px-4 md:px-8 py-3 text-sm md:text-lg rounded-xs hover:bg-lashdark transition-colors duration-300">
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}
