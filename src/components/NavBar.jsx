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
  color: ${(props) => (props.isScrolled ? "#6d6c6c" : "#242424")};
  top: 0;
  z-index: 1000;
  align-items: center;
  font-size: ${(props) => (props.isScrolled ? "1.5rem" : "2rem")};
  font-weight: 600;
  box-sizing: border-box;
  padding: ${(props) => (props.isScrolled ? "0.5rem 1rem" : "1rem 1rem")};
  height: ${(props) => (props.isScrolled ? "55px" : "85px")};
  transition: all 0.3s ease-in-out, color 0.3s ease-in-out;

  :hover {
    color: ${(props) => (props.isScrolled ? "#242424" : "#6d6c6c")};
  }

  @media (max-width: 1440px) {
    font-size: ${(props) => (props.isScrolled ? "1.5rem" : "2rem")};
    /* color: ${(props) => (props.isScrolled ? "red" : "yellow")}; */
    padding: ${(props) =>
      props.isScrolled ? "0.4rem 0.8rem" : "0.8rem 0.8rem"};
    height: ${(props) => (props.isScrolled ? "55px" : "80px")};
  }
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.isScrolled ? "1.5rem" : "2rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.3rem 0.6rem" : "0.6rem 0.6rem"};
    height: ${(props) => (props.isScrolled ? "55px" : "80px")};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isScrolled ? "1.3rem" : "1.5rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.2rem 0.4rem" : "0.4rem 0.4rem"};
    height: ${(props) => (props.isScrolled ? "40px" : "55px")};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => (props.isScrolled ? "1rem" : "1.3rem")};
    padding: ${(props) =>
      props.isScrolled ? "0.1rem 0.2rem" : "0.2rem 0.2rem"};
    height: ${(props) => (props.isScrolled ? "45px" : "55px")};
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
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span>Andres Velasquez</span>
        </Link>

        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <span>About</span>
        </Link>
      </HighlightText>
    </NavBarContainer>
  );
}

export default NavBar;
