import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const categories = [
  {
    image: '/Images/derevo.png',
    category: 'ДЕРЕВА',
    description: 'Величні і стійкі дерева, що надають вашому саду елегантний імпозантний вигляд',
  },
  {
    image: '/Images/yalynka.png',
    category: 'ЯЛИНКИ',
    description: 'Вишукані ялинки, які додають вашому саду елегантності і створюють затишну атмосферу зелені',
  },
  {
    image: '/Images/sosna.png',
    category: 'СОСНИ',
    description: 'Ефектні сосни, що додають монументальність і неповторність вашому ландшафту',
  },
  {
    image: '/Images/kvity.png',
    category: 'КВІТИ',
    description: 'Екзотичні квіти, які прикрашають ваш сад своїми яскравими кольорами і чарівними ароматами',
  },
  {
    image: '/Images/nasinnya.png',
    category: 'НАСІННЯ',
    description: 'Преміальне насіння для створення унікальних кольорових комбінацій у вашому саду',
  },
  {
    image: '/Images/instrument.png',
    category: 'Інструменти',
    description: 'Інструменти, які забезпечують зручність і ефективність у догляді за вашим садом',
  },
  {
    image: '/Images/dobryva.png',
    category: 'Добрива',
    description: 'Поживні речовини, які підтримують здоровий ріст і розвиток вашого саду, роблячи його ще більш привабливим і живучим',
  },
  {
    image: '/Images/zemlya.png',
    category: 'Ґрунт',
    description: 'Найкращий, високоякісний ґрунт для вашого саду, щоб забезпечити чудовий ріст рослин!',
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="slide">
            <img src={category.image} alt={`Slide ${index}`} />
            <div className="category-button">{category.category}</div>
            <div className="category-description">{category.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
