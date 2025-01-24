import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <div
      style={{
        // border: "1px solid red",
        position: "fixed",
        width: "69.5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "1.8rem",
        fontWeight: "600",
        boxSizing: "border-box",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <p>Andres Velasquez</p>
      </Link>

      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        <p>About</p>
      </Link>
    </div>
  );
}

export default NavBar;
