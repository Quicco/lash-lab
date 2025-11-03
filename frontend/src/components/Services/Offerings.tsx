import Offering from './Offering';

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
];

function Offerings() {
  return (
    <section id="offerings" className="py-16">
      <h2 className="section-title text-center text-4xl md:text-6xl font-bold mb-10">
        Serviços
      </h2>

      <div className="md:flex md:gap-2 max-w-7/10 md:max-w-6/10 m-auto p-2 md:p-4">
        {offerings.map((offering) => (
          <Offering
            title={offering.title}
            desc={offering.desc}
            thumbnail={offering.thumbnail}
            price={offering.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Offerings;
