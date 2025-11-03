export default function HeroSection() {

  return (
    <section>
      <div className="relative min-h-[500px] md:min-h-[900px] w-full bg-lashpink">
        <img
          src={"/img/hero-bg-test.jpg"}
          alt="Lash Lab by Kate - Beautiful Lashes"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-lashwhite p-4 mt-5">
          <h1 className="text-xl md:text-4xl m-10 text-center">
            Detalhes que realçam a tua beleza e transformam a tua confiança
          </h1>
          <button className="bg-lashdark px-8 py-3 text-lg rounded-xs hover:bg-lashdark transition-colors duration-300">
            Ver serviços
          </button>
        </div>
      </div>
    </section>
  );
}
