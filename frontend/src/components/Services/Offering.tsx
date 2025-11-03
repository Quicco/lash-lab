interface Props {
  title: string;
  desc: string;
  thumbnail: string;
  price: number;
}

function Offering({title, desc, thumbnail, price }: Props) {
  return (
    <div
      key={desc}
      className={`flex flex-col w-full items-center text-center gap-8 mb-8 rounded-lg md:h-[400px]`}
    >
      <img
        src={thumbnail}
        alt={`Imagem do serviço ${desc}`}
        className="w-full md:w-8/10 h-72 md:h-full object-cover object-center rounded-t-lg shadow-md"
      />

      <div className="service-desc text-left">
        <h3 className="text-lg md:text-xl">{title}</h3>
        <p className="text-price">{desc}</p>
        <p className="text-price">€{price}</p>
      </div>
    </div>
  );
}

export default Offering;
