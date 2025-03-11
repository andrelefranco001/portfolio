import React from "react";
import styled from "styled-components";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import BarryandBrothers_banner from "../../src/assets/BarryandBrothers_banner_2.webp";
import kino_banner from "../../src/assets/kino_banner.webp";
import poem_banner from "../../src/assets/poem_banner.webp";

const HighlightText = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
  background: rgb(96, 7, 148);
  background: linear-gradient(
    90deg,
    rgba(96, 7, 148, 1) 0%,
    rgba(217, 56, 15, 1) 58%,
    rgba(245, 131, 4, 1) 88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Container = styled.div`
  margin-top: 9rem;
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    margin-top: 7rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 480px) {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;

const BannerLink = styled(Link)`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }

  .size {
    width: 70%;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  display: block;
  /* @media (max-width: 1440px) {
    width: 100%;
  } */
`;

const ProjectContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10rem;
  @media (max-width: 1024px) {
    margin-bottom: 8rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

const ProjectDescription = styled.span`
  .weight {
    font-weight: 600;
  }
  .margin-description {
    @media (min-width: 1440px) {
      margin-left: 3rem;
      margin-top: auto;
    }
    @media (max-width: 1440px) {
      font-size: 1.3rem;
    }
  }

  .margin-principal {
    @media (max-width: 1440px) {
      font-size: 1.3rem;
    }
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #8b8b8b;
  display: flex;
  flex-direction: row;
  color: #8b8b8b;
  /* margin-left: 3rem; */
  /* @media (max-width: 1024px) {
    margin-left: 2rem;
  } */
  @media (max-width: 768px) {
    margin-left: 0;
  }

  .margin-description {
    @media (min-width: 1440px) {
      margin-left: 3rem;
      color: red;
    }
  }
`;

const ProjectRow = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  display: flex;
  flex-direction: row;
  margin-bottom: 10rem;
  @media (max-width: 1440px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 9rem;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 8rem;
  }
  @media (max-width: 1024px) {
    /* flex-direction: column; */
    margin-bottom: 8rem;
  }
  @media (max-width: 768px) {
    /* flex-direction: column; */
    margin-bottom: 5rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 3rem;
  }
  .clas {
    font-size: 5.5rem;
  }
`;

const ProjectColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

function Home() {
  return (
    <>
      <Container>
        <p style={{ fontSize: "1.7rem", fontWeight: "200" }}>
          Welcome to my <HighlightText>Digital Playground</HighlightText>.
          Here’s a curated selection of projects where design and functionality
          come together.
        </p>
      </Container>

      <BannerLink to="/detail/kinoestreaming">
        <BannerImage src={kino_banner} alt="Kino E Banner" />
      </BannerLink>

      <ProjectContainer>
        <ProjectDescription>
          <p className="weight margin-principal">Kino E - Streaming Platform</p>
          <p className="margin-principal">
            Discover the cinema you didn’t know you were looking for. At Kino E,
            we bring you a curated selection of unique films, independent gems,
            and cult classics. Every week, a fresh collection designed for true
            cinephiles — stories that challenge, inspire, and stay with you.
          </p>
        </ProjectDescription>
        <ProjectLink to="/detail/kinoestreaming">
          <p> Show more</p>
          <HiArrowLongRight style={{ marginLeft: "1rem", marginTop: "2rem" }} />
        </ProjectLink>
      </ProjectContainer>

      <ProjectRow>
        <BannerLink to="/detail/thepoemmind" className="size">
          <BannerImage src={poem_banner} alt="The Poem Mind Banner" />
        </BannerLink>
        <ProjectColumn>
          <ProjectDescription style={{ width: "auto" }}>
            <p className="weight margin-description">The Poem Mind</p>
            <p className="margin-description">
              The Poem Mind is a canvas where poetry flows freely — from
              timeless classics to contemporary voices, words find the reader.
            </p>
          </ProjectDescription>
          <ProjectLink to="/detail/thepoemmind">
            <p className="margin-description"> Show more</p>
            <HiArrowLongRight
              style={{ marginLeft: "1rem", marginTop: "2rem" }}
            />
          </ProjectLink>
        </ProjectColumn>
      </ProjectRow>

      <ProjectRow className="clas">
        <BannerLink to="/detail/barryandbrothers" className="size">
          <BannerImage
            src={BarryandBrothers_banner}
            alt="Barry & Brothers Banner"
          />
        </BannerLink>
        <ProjectColumn>
          <ProjectDescription
            className="margin-description"
            style={{ width: "auto" }}
          >
            <p className="weight margin-description">Barry & Brothers</p>
            <p className="margin-description">
              Barry & Brothers is a fashion eCommerce brand that blends elegance
              and tradition, <br /> inspired by the rich legacy of a historic
              brand.
            </p>
          </ProjectDescription>
          <ProjectLink to="/detail/barryandbrothers">
            <p className="margin-description"> Show more</p>
            <HiArrowLongRight
              style={{ marginLeft: "1rem", marginTop: "2rem" }}
            />
          </ProjectLink>
        </ProjectColumn>
      </ProjectRow>
    </>
  );
}

export default Home;
