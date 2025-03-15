import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const TitleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  white-space: pre-line;

  @media (max-width: 1440px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 10px;
`;

const BannerImageContainer = styled.div`
  grid-column: span 2;
  border-radius: 15px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: span 2;
  padding: 1rem;
  border-radius: 15px;
  margin: 10rem 0rem;

  @media (max-width: 1440px) {
    margin: 1rem 0rem;
  }
`;

const ExtraImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  grid-column: span 2 / span 2;
  border-radius: 15px;
  height: fit-content;
  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExtraImage = styled.img`
  width: 40%;
  height: 40%;
  object-fit: contain;
  margin-bottom: 1rem; /* Add margin to separate images when in column */
  @media (max-width: 1440px) {
    width: 100%;
    /* margin-bottom: 5rem; */
    /* height: 100%; */
  }
`;

const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  width: 50%;
  border: solid 1px #8b8b8b;
  border-radius: 15px;
  color: #8b8b8b;
  text-decoration: none;
  font-weight: 200;
  font-size: 2rem;
  padding: 1rem;

  &:hover {
    color: white;
    background-color: #8b8b8b;
  }

  @media (max-width: 1440px) {
    font-size: 1.3rem;
    padding: 1rem;
    margin-top: 2rem;
    width: 100%;
  }
`;

function DetailProject({
  title,
  description,
  bannerImages,
  carousels,
  extraImages,
}) {
  return (
    <Container>
      {/* Título y Descripción */}
      <TitleDescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleDescriptionContainer>

      {/* Imágenes y Carruseles */}
      <ImagesContainer>
        {/* Banners principales */}
        {bannerImages.map((img, index) => (
          <BannerImageContainer key={index}>
            <BannerImage src={img} />
          </BannerImageContainer>
        ))}

        {/* Carruseles */}
        {carousels
          .filter((carousel) => carousel.id === 1) // Cambia el 1 por el id que quieras mostrar
          .map((carousel) => (
            <CarouselContainer key={carousel.id}>
              <ImageCarousel images={carousel.images} />
            </CarouselContainer>
          ))}

        {/* Imágenes extra */}
        {extraImages.map((row, rowIndex) => (
          <ExtraImagesContainer key={rowIndex}>
            {row.map((img, imgIndex) => (
              <ExtraImage key={imgIndex} src={img} />
            ))}
          </ExtraImagesContainer>
        ))}

        {/* Carruseles */}
        {carousels
          .filter((carousel) => carousel.id === 2)
          .map((carousel) => (
            <CarouselContainer key={carousel.id}>
              <ImageCarousel images={carousel.images} />
            </CarouselContainer>
          ))}
      </ImagesContainer>

      {/* Botón para regresar */}
      <BackButtonContainer>
        <BackButton to="/portfolio/">Show all projects</BackButton>
      </BackButtonContainer>
    </Container>
  );
}

export default DetailProject;
