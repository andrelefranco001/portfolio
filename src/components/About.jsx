import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../src/assets/VOSTOK282982.jpg";

const Container = styled.div`
  margin-top: 20rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
    margin-bottom: 3rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-right: 3rem;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Spinner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
`;

const ProfileImage = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.isLoading ? "none" : "block")};
`;

const TextContainer = styled.div`
  display: flex;
  width: inherit;
  font-weight: 600;
  font-size: 2rem;
  flex-direction: column;
  justify-content: end;

  p {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const SubText = styled.p`
  font-size: 1.3rem;
  color: #6e6e6e;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 200;
  margin-top: 5rem;
  text-align: left;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
    font-size: 1rem;
  }
`;

const SectionTitle = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  margin: auto;
  margin-top: 5rem;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ExperienceContainer = styled.div`
  background-color: #d9d9d9;
  border-radius: 15px;
  height: auto;
  margin-top: 3rem;
  padding: 2rem 3rem;
  width: auto;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const ExperienceList = styled.ul`
  font-size: 1.7rem;
  font-weight: 200;
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ExperienceItem = styled.li`
  margin-bottom: 1rem;
`;

const StrongText = styled.strong`
  font-weight: 600;
`;

function About() {
  const [isLoading, setIsLoading] = useState(true);

  const workExperience = [
    {
      title: "Frontend Developer & UX/UI Designer",
      company: "Decimetrix SAS",
      period: "2023 - 2024",
    },
    {
      title: "Frontend Developer & UX/UI Designer",
      company: "Freelance",
      period: "2022 - present",
    },
    {
      title: "Gallery Coordinator",
      company: "Aura Arte Gallery",
      period: "2019 - 2021",
    },
    {
      title: "Gallery Coordinator",
      company: "Casa Enso Gallery",
      period: "2019",
    },
  ];

  const education = [
    {
      title: "Certified Tech Developer (FullStack)",
      institution: "Digital House",
      period: "2022",
    },
    {
      title: "Bachelor’s Degree in Visual Arts",
      institution: "Instituto Tecnológico Metropolitano",
      period: "2014 - 2021",
    },
  ];

  return (
    <Container>
      <FlexRow>
        {/* Contenedor de la imagen con loader */}
        <ImageContainer>
          {isLoading && (
            <Spinner>
              <div className="spinner" />
            </Spinner>
          )}
          <ProfileImage
            src={profile}
            onLoad={() => setIsLoading(false)}
            isLoading={isLoading}
          />
        </ImageContainer>

        {/* Texto */}
        <TextContainer>
          <p>
            Frontend Developer & UX/UI Designer
            <hr />
            <SubText>Building experiences that make sense.</SubText>
          </p>
        </TextContainer>
      </FlexRow>

      <Paragraph>
        I’m a frontend developer and UX/UI designer with a strong focus on
        creating interfaces that are not only visually appealing but also
        intuitive and efficient. My work blends creativity and functionality,
        always putting users at the center. <br />
        <br /> With hands-on experience developing and optimizing web
        applications in industries like oil & gas, I’ve learned how to design
        for complex workflows where clarity and performance are critical.
        Whether it’s simplifying technical processes or crafting elegant user
        journeys, I thrive at turning challenging requirements into seamless
        experiences. <br />
        <br /> I’m passionate about solving problems through design and
        technology, constantly exploring new tools and methods to enhance
        usability and innovation. Comfortable working in agile teams, I enjoy
        the collaborative process that turns ideas into fully functional
        products. <br />
      </Paragraph>

      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceContainer>
        <ExperienceList>
          {workExperience.map((item, index) => (
            <ExperienceItem key={index}>
              <StrongText>{item.title}</StrongText> - {item.company}
              <br />
              <span>{item.period}</span>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ExperienceContainer>

      <SectionTitle>Education</SectionTitle>
      <ExperienceContainer>
        <ExperienceList>
          {education.map((item, index) => (
            <ExperienceItem key={index}>
              <StrongText>{item.title}</StrongText> - {item.institution}
              <br />
              <span>{item.period}</span>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ExperienceContainer>

      {/* Estilos para el spinner */}
      <style>
        {`
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgb(255, 255, 255);
            border-left-color: #f8a100;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Container>
  );
}

export default About;
