import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 4rem;
  text-align: start;
  /* padding: 0 1rem; */
  @media (max-width: 768px) {
    margin-top: 5rem;
    /* text-align: center; */
  }

  .CopyrightText {
    font-size: 0.9rem;
    color: #555;
    margin-top: 15px;
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .LinkText {
    font-size: 1.5rem;
    color: #f75252;

    font-weight: 600;
    text-decoration: underline;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const TextContainer = styled.div`
  margin-top: 10rem;
  width: 600px;
  font-weight: 200;
  font-size: 1.5rem;
  @media (max-width: 1440px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;

const TextEmail = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 2rem;
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 5rem;
  }
`;

const LinkText = styled.a`
  font-size: 1.5rem;

  color: #000000;
  font-weight: 600;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const FindMeOnText = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  @media (max-width: 1440px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        Whether you have a project in mind, want to collaborate, or just say
        hi—I'd love to connect! I'm currently open to new opportunities.
      </TextContainer>

      <TextEmail>andresvelasquezfranco@gmail.com</TextEmail>

      <FindMeOnText>
        Find me on{" "}
        <a
          className="LinkText"
          href="https://www.linkedin.com/in/andressoftwareengineer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </FindMeOnText>

      <p className="CopyrightText">
        © Andres Velasquez Franco {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
