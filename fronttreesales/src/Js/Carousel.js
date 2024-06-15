import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Carousel.css';

const Carousel = ({ categories }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className="carousel-slide">
                       <img src={process.env.PUBLIC_URL + '/images/evro.png'} alt="Evro" className="carousel-image" />
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
