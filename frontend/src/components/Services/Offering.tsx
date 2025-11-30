interface Props {
  title: string;
  desc: string;
  thumbnail: string;
  price: number;
}

function Offering({title, desc, thumbnail, price }: Props) {
  return (
    <div
      className={`group flex flex-col m-auto md:w-4/6 h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden hover:cursor-pointer bg-lashwhite shadow-md`}
    >
      <img
        src={thumbnail}
        alt={`Imagem do serviço ${desc}`}
        className="w-full h-full md:h-full object-cover shadow-lg bg-lashpink transition duration-300 group-hover:opacity-75"
      />

      <div className="service-desc text-left px-10 py-6 ">
        <h3 className="text-xl md:text-xl">{title}</h3>
        <p className="text-price text-sm">{desc}</p>
        <p>€{price}</p>
      </div>
    </div>
  );
}

export default Offering;
