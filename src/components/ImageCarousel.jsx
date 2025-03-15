import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

// Componente personalizado para la flecha izquierda
const PrevArrowContainer = styled.div`
  position: absolute;
  left: -90px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  color: #6e6e6e;
  font-size: 30px;

  @media (max-width: 768px) {
    left: -50px;
    font-size: 20px;
  }
`;

const PrevArrow = ({ onClick }) => (
  <PrevArrowContainer onClick={onClick}>
    <FaChevronLeft />
  </PrevArrowContainer>
);

// Componente personalizado para la flecha derecha
const NextArrowContainer = styled.div`
  position: absolute;
  right: -90px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  color: #6e6e6e;
  font-size: 30px;

  @media (max-width: 768px) {
    right: -50px;
    font-size: 20px;
  }
`;

const NextArrow = ({ onClick }) => (
  <NextArrowContainer onClick={onClick}>
    <FaChevronRight />
  </NextArrowContainer>
);

const CarouselContainer = styled.div`
  /* width: 100%; */
  width: 70vw;

  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 15px;
  @media (max-width: 768px) {
    /* height: 100%; */
  }
`;

function ImageCarousel({ images = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.length > 0 ? (
          images.map((src, index) => (
            <div key={index}>
              <CarouselImage src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))
        ) : (
          <></>
        )}
      </Slider>
    </CarouselContainer>
  );
}

export default ImageCarousel;
