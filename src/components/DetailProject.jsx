import React from "react";
import { Link } from "react-router-dom";

function DetailProject() {
  return (
    <div
      style={{
        // border: "red solid 1px",
        marginTop: "20rem",
        marginBottom: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "5rem",
        }}
      >
        <p
          style={{
            fontSize: "3.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Untitled project 1
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: "200" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies vel
          in duis hendrerit suscipit. Arcu interdum neque nam aptent tortor non
          nisi varius duis accumsan suspendisse nulla, ad at odio potenti lectus
          ante vitae habitant vel tempus fringilla tincidunt, mollis pulvinar
          porttitor semper vehicula sagittis himenaeos diam malesuada eu
          penatibus. Phasellus dui interdum blandit dapibus mattis massa proin,
          magnis natoque lacus sociosqu ac vitae, ridiculus penatibus nullam
          dignissim erat aenean.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "650px 650px 650px 20px 650px",
          gap: "50px",
        }}
      >
        <div
          style={{
            gridColumn: "span 2 / span 2",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          1
        </div>
        <div
          style={{
            gridColumnStart: "3",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          3
        </div>
        <div
          style={{
            gridColumn: "span 3 / span 3",
            gridRowStart: "2",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          4
        </div>
        <div
          style={{
            gridColumnStart: "3",
            gridRowStart: "3",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          5
        </div>
        <div
          style={{
            gridColumnStart: "2",
            gridRowStart: "3",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          6
        </div>
        <div
          style={{
            gridColumnStart: "1",
            gridRowStart: "3",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          7
        </div>
        <div
          style={{
            gridColumn: "span 3 / span 3",
            gridRowStart: "4",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            height: "20px",
          }}
        >
          8
        </div>
        <div
          style={{
            gridColumn: "span 3 / span 3",
            gridRowStart: "5",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
          }}
        >
          9
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "15rem",
            textDecoration: "none",
            border: "solid 1px #8b8b8b",
            borderRadius: "15px",
            color: "#8b8b8b",
            fontWeight: "200",
            fontSize: "32px",
            padding: "1rem 5rem",
          }}
        >
          <div>Show all projects</div>{" "}
        </Link>
      </div>

      {/* Footer */}

      <span
        style={{
          marginTop: "20rem",
          width: "600px",
          fontWeight: "200",
          fontSize: "1.5rem",
        }}
      >
        <p>
          Whether you have a project in mind, want to collaborate,
          <br /> or just say hi—I'd love to connect! I'm currently open to new
          opportunities.
        </p>
      </span>
      <span
        style={{
          margin: "5rem 0rem",
          width: "600px",
          fontWeight: "600",
          fontSize: "1.5rem",
        }}
      >
        <p style={{ fontSize: "3.5rem", fontWeight: "600" }}>
          andresvelasquezfranco@gmail.com
        </p>
        <p>LinkedIn</p>
      </span>
      <p>© Andres Velasquez Franco</p>
    </div>
  );
}

export default DetailProject;
