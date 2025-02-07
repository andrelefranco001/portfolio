import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Componente personalizado para la flecha izquierda
const PrevArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      left: "-90px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
      color: "#6e6e6e",
      fontSize: "30px",
    }}
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

// Componente personalizado para la flecha derecha
const NextArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      right: "-90px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
      color: "#6e6e6e",
      fontSize: "30px",
    }}
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

function ImageCarousel({ images = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", position: "relative" }}>
      <Slider {...settings}>
        {images.length > 0 ? (
          images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "15px",
                }}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
