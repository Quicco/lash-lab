import Slider from 'react-slick';
import Offering from './Offering';
import type { Offerings } from './Offerings';

interface Props {
  list: Offerings[];
}

export default function Carousel({ list }: Props) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings} className="w-4/5 md:1/2 m-auto">
        {list.map((offering) => (
          <Offering
            key={offering.title}
            title={offering.title}
            desc={offering.desc}
            thumbnail={offering.thumbnail}
            price={offering.price}
          />
        ))}
      </Slider>
    </div>
  );
}
