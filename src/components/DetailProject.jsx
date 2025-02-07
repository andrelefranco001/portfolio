import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ImageCarousel from "./ImageCarousel";

const images1 = [
  "/src/assets/pd01.png",
  "/src/assets/pd01_2.png",
  "/src/assets/pd01_3.png",
];

const images2 = [
  "/src/assets/sd_1.png",
  "/src/assets/sd_2.png",
  "/src/assets/sd_3.png",
];

function DetailProject() {
  return (
    <div
      style={{
        // border: "red solid 1px",
        marginTop: "10rem",
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
      {/* desde aca */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          // gridTemplateRows: "250px 550px 1200px 1200px 1200px",
          gridTemplateRows: "repeat(5, auto)",

          gap: "40px 10px",
        }}
      >
        <div
          style={{
            gridColumn: "span 2 / span 2",
            gridRow: "1 / 2",

            // backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            height: "15rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src="../../src/assets/pdbanner02.png"
            style={{
              display: "block",

              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "1 / 1",
              // border: "solid 1px red",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gridColumn: "span 2 / span 2",

            gridRow: "2 / 3",

            // backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            width: "100%",
            // height: "650px",
            overflow: "hidden",
          }}
        >
          <img
            src="../../src/assets/pdbanner01.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              // aspectRatio: "1 / 1",
              // border: "solid 1px red",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gridColumn: "span 2 / span 2",
            gridRow: " 4 / 5",

            // backgroundColor: "#D9D9D9",
            padding: "5rem",
            borderRadius: "15px",
            height: "fit-content",
          }}
        >
          <ImageCarousel images={images1} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gridColumn: "span 2 / span 2",
            gridRow: " 6 / 7",

            // backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            height: "fit-content",
          }}
        >
          <img
            src="../../src/assets/longframe_1.png"
            style={{
              width: "40%",
              height: "40%",
              objectFit: "contain",
              // aspectRatio: "1 / 1",
              // border: "solid 1px red",
            }}
          />
          <img
            src="../../src/assets/longframe_2.png"
            style={{
              width: "40%",
              height: "40%",
              objectFit: "contain",
              // aspectRatio: "1 / 1",
              // border: "solid 1px red",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gridColumn: "span 2 / span 2",
            gridRow: " 8 / 9",

            // backgroundColor: "#D9D9D9",
            padding: "5rem",
            borderRadius: "15px",
            height: "fit-content",
          }}
        >
          <ImageCarousel images={images2} />
        </div>
        <div
          style={{
            display: "flex",
            gridColumn: "span 2 / span 2",

            gridRow: "10 / 11",

            // backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            width: "100%",
            // height: "650px",
            overflow: "hidden",
          }}
        >
          <img
            src="../../src/assets/pdbanner03.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              // aspectRatio: "1 / 1",
              // border: "solid 1px red",
            }}
          />
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
