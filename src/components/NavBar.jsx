import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  grid-column: 2; /* Ensure it spans the middle column */
  width: 100%;
`;

const HighlightText = styled.div`
  position: fixed;
  left: 15%; /* Align with the grid */
  width: 70%; /* Align with the grid */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #e6e6e6;
  top: 0;
  z-index: 1000;
  align-items: center;
  font-size: ${(props) => (props.isScrolled ? "1.2rem" : "1.8rem")};
  font-weight: 600;
  box-sizing: border-box;
  padding: ${(props) => (props.isScrolled ? "0.5rem 1rem" : "1rem 1rem")};
  height: ${(props) => (props.isScrolled ? "50px" : "80px")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1440px) {
    font-size: ${(props) => (props.isScrolled ? "1rem" : "1.5rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.4rem 0.8rem" : "0.8rem 0.8rem"};
    height: ${(props) => (props.isScrolled ? "45px" : "70px")};
  }
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.isScrolled ? "0.9rem" : "1.3rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.3rem 0.6rem" : "0.6rem 0.6rem"};
    height: ${(props) => (props.isScrolled ? "40px" : "60px")};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isScrolled ? "0.8rem" : "1.2rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.2rem 0.4rem" : "0.4rem 0.4rem"};
    height: ${(props) => (props.isScrolled ? "35px" : "50px")};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => (props.isScrolled ? "0.7rem" : "1rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.1rem 0.2rem" : "0.2rem 0.2rem"};
    height: ${(props) => (props.isScrolled ? "30px" : "40px")};
  }
`;

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer>
      <HighlightText isScrolled={isScrolled}>
        <Link
          to="/portfolio/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span style={{ backdropFilter: "blur(5px)" }}>Andres Velasquez</span>
        </Link>

        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <span style={{ backdropFilter: "blur(5px)" }}>About</span>
        </Link>
      </HighlightText>
    </NavBarContainer>
  );
}

export default NavBar;
