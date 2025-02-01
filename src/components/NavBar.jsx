import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Reduce el navbar al bajar 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        // border: "1px solid red",
        position: "fixed",
        width: "69.6%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "rgb(230, 230, 230)",
        top: 0,
        zIndex: 1000,

        alignItems: "center",
        fontSize: isScrolled ? "1.2rem" : "1.8rem", // Cambia el tamaño del texto
        fontWeight: "600",
        boxSizing: "border-box",
        padding: isScrolled ? "0.5rem 1rem" : "1rem 1rem", // Ajusta el padding
        height: isScrolled ? "50px" : "80px", // Reduce la altura del navbar
        transition: "all 0.3s ease-in-out", // Transición suave
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <p style={{ backdropFilter: "blur(5px)" }}>Andres Velasquez</p>
      </Link>

      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        <p style={{ backdropFilter: "blur(5px)" }}>About</p>
      </Link>
    </div>
  );
}

export default NavBar;
