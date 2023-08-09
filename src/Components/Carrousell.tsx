import NetCard from "./NetworkCard";
import { user1, user2, user3, user4, user5, user6 } from "./NetworkCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Carrousell() {
    const aux = [user1, user2, user3, user4, user5, user6] ;
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
<Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="sliderContainer"
        containerClass="container-whit-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
>
        {
            aux.map((userName) => (
                <NetCard {...userName}/>
            ))
        }
</Carousel>
    )
}
/* export default function Carrousell() {
    return (
        <div className="container mt-4">
            <div id="cardCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user1} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user2} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user3} />
                                </div>
                            </div> */
                            {/* <!-- Repite este bloque de col- para cada card --> */}
                        {/* </div>
                    </div> */}
                    {/* <!-- Repite este bloque de .carousel-item para mostrar más cards --> */}
                 {/*    <div className="carousel-item active">
                        <div className="carousel-item active">

                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#cardCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#cardCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
} */}
/* 

import React, { useState } from 'react';
import '../css/Slider.css'; // Estilos del slider
const Carrousell = ({ aux }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica para avanzar y retroceder entre las tarjetas
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aux.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? aux.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {aux.map((index) => (
          <NetCard key={index} {...index} active={index === currentIndex} />
        ))}
      </div>
      <div className="dots">
        {aux.map((index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <button className="arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carrousell; */
