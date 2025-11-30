import Carousel from './Carousel';

export interface Offerings {
  title: string;
  desc: string;
  thumbnail: string;
  price: number;
}

const offerings: Offerings[] = [
  { title: 'Volume Egípcio', desc:"Volume 3D, volumoso mas natural.", thumbnail: '/img/hero-bg.jpg', price: 45 },
  { title: 'Volume Brasileiro',desc:"Volume 3D, volumoso mas natural.", thumbnail: '/img/hero-bg.jpg', price: 40 },
  { title: 'Volume Português',desc:"Volume 3D, volumoso mas natural.", thumbnail: '/img/hero-bg.jpg', price: 40 },
  { title: 'Volume Amadorense',desc:"Volume 3D, volumoso mas natural.", thumbnail: '/img/hero-bg.jpg', price: 40 },
];

function Offerings() {
  return (
    <section id="offerings" className="py-16 bg-lashgold w-full">
      <h2 className="section-title text-center text-4xl md:text-6xl font-bold md:mb-20 ">
        Serviços
      </h2>

      <div className="max-w-full m-auto p-4">
        <Carousel list={offerings}/>
      </div>
    </section>
  );
}

export default Offerings;
