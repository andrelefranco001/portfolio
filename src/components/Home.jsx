import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

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

function Home() {
  return (
    <>
      <div
        style={{
          // border: "red solid 1px",
          marginTop: "9rem",
          marginBottom: "5rem",
        }}
      >
        <p style={{ fontSize: "1.7rem", fontWeight: "200" }}>
          Designing and developing intuitive digital experiences with <br /> a{" "}
          <HighlightText>creative touch.</HighlightText>
        </p>
      </div>

      <Link
        to="/detail/barryandbrothers"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "15px",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <img
          src="../../src/assets/BarryandBrothers_banner_2.webp"
          alt="Barry and Brothers Banner"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "15px",
            display: "block",
          }}
        />
      </Link>

      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10rem",
        }}
      >
        <span>
          <p style={{ fontWeight: "600" }}>Barry & Brothers</p>
          <p>
            Barry & Brothers is a fashion eCommerce brand that blends elegance
            and tradition, <br /> inspired by the rich legacy of a historic
            brand.
          </p>
        </span>
        <Link
          to="/detail/barryandbrothers"
          style={{ textDecoration: "none", color: "#8b8b8b" }}
        >
          <span
            style={{ display: "flex", flexDirection: "row", color: "#8b8b8b" }}
          >
            <p> Show more</p>
            <HiArrowLongRight
              style={{ marginLeft: "1rem", marginTop: "2rem" }}
            />
          </span>
        </Link>
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "row",
          marginBottom: "10rem",
        }}
      >
        <span
          style={{
            display: "block",
            width: "70%",
            height: "auto",
            borderRadius: "15px",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <img
            src="../../src/assets/kino_banner.webp"
            alt="Kino E Banner"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "15px",
              display: "block",
            }}
          />
        </span>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <span style={{ width: "100%", marginLeft: "3rem" }}>
            <p style={{ fontWeight: "600", margin: "auto" }}>
              "Kino E" Streaming Platform
            </p>
            <p>
              Discover the cinema you didn’t know you were looking for. At Kino
              E, we bring you a curated selection of unique films, independent
              gems, and cult classics. Every week, a fresh collection designed
              for true cinephiles — stories that challenge, inspire, and stay
              with you.
            </p>
          </span>
          <Link
            to="/detail/kinoestreaming"
            style={{ textDecoration: "none", color: "#8b8b8b" }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                color: "#8b8b8b",
                marginLeft: "3rem",
              }}
            >
              <p> Show more</p>
              <HiArrowLongRight
                style={{ marginLeft: "1rem", marginTop: "2rem" }}
              />
            </span>
          </Link>
        </div>
      </div>

      <div>
        {" "}
        {/* <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10rem",
          // border: "red solid 1px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // border: "red solid 1px",
          }}
        >
          {" "}
          <span style={{ width: "500px" }}>
            <p style={{ fontWeight: "600", margin: "auto" }}>
              Untitled project 3
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore.
            </p>
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "#8b8b8b",
              padding: "0px",
              // border: "red solid 1px",
            }}
          >
            <p style={{ margin: "0px" }}>Show more </p>{" "}
            <HiArrowLongRight
              style={{ marginLeft: "1rem", marginTop: "0.6rem" }}
            />
          </div>
        </div>
        <span
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            width: "900px",
            height: "500px",
            marginLeft: "3rem",
          }}
        />
      </div> */}
        {/*  */}
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "row",
          marginBottom: "10rem",
        }}
      >
        <span
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: "15px",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <img
            src="../../src/assets/poem_banner.webp"
            alt="The Poem Mind Banner"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "15px",
              display: "block",
            }}
          />
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <span style={{ width: "auto", marginLeft: "3rem" }}>
            <p style={{ fontWeight: "600", margin: "auto" }}>The Poem Mind</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore.
            </p>
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "#8b8b8b",
              padding: "0px",
              // border: "red solid 1px",
            }}
          >
            <p style={{ margin: "0px", marginLeft: "3rem" }}>Show more </p>{" "}
            <HiArrowLongRight
              style={{ marginLeft: "1rem", marginTop: "0.6rem" }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}

      <span
        style={{
          marginTop: "10rem",
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
    </>
  );
}

export default Home;
