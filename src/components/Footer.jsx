import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "10rem",
        textAlign: "start",
        // fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          marginTop: "10rem",
          width: "600px",
          fontWeight: "200",
          fontSize: "1.5rem",
        }}
      >
        <p>
          Whether you have a project in mind, want to collaborate, or just say
          hi—I'd love to connect! I'm currently open to new opportunities.
        </p>
      </div>

      <div
        style={{
          margin: "5rem 0rem",
          width: "600px",
          fontWeight: "600",
          fontSize: "1.5rem",
        }}
      >
        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            margin: "0 0 10px 0",
          }}
        >
          andresvelasquezfranco@gmail.com
        </p>
        <a
          href="https://www.linkedin.com/in/andressoftwareengineer/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "rgba(0, 0, 0, 0.87)",
            fontWeight: "200",
          }}
        >
          Find me on{" "}
          <span style={{ fontWeight: "600", textDecoration: "underline" }}>
            LinkedIn
          </span>
        </a>
      </div>

      <p
        style={{
          fontSize: "0.9rem",
          color: "#555",
          marginTop: "15px",
        }}
      >
        © Andres Velasquez Franco {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
