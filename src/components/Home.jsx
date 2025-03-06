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
          Welcome to my <HighlightText>Digital Playground</HighlightText>.
          Here’s a curated selection of projects where design and functionality
          come together.
        </p>
      </div>

      <Link
        to="/detail/kinoestreaming"
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
      </Link>

      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: "10rem",
        }}
      >
        <span>
          <p style={{ fontWeight: "600" }}>Kino E - Streaming Platform</p>
          <p>
            Discover the cinema you didn’t know you were looking for. At Kino E,
            we bring you a curated selection of unique films, independent gems,
            and cult classics. Every week, a fresh collection designed for true
            cinephiles — stories that challenge, inspire, and stay with you.
          </p>
        </span>
        <Link
          to="/detail/kinoestreaming"
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
        <Link
          to="/detail/thepoemmind"
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
        </Link>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <span style={{ width: "auto", marginLeft: "3rem" }}>
            <p style={{ fontWeight: "600" }}>The Poem Mind</p>
            <p>
              The Poem Mind is an ever-expanding canvas of poetry, where works
              from writers of all generations flow together in a continuous
              vertical scroll. Every visit reveals a new path — poems appear
              randomly, without filters or categories, allowing words to find
              the reader at just the right moment. From timeless classics to
              contemporary voices, The Poem Mind is a celebration of poetry’s
              endless forms, thoughts, and emotions — a space where literature
              breathes freely.
            </p>
          </span>
          <Link
            to="/detail/thepoemmind"
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
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "row",
          marginBottom: "10rem",
        }}
      >
        <Link
          to="/detail/barryandbrothers"
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
            src="../../src/assets/BarryandBrothers_banner_2.webp"
            alt="Barry & Brothers Banner"
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
            display: "flex",
            width: "30%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <span style={{ width: "auto", marginLeft: "3rem" }}>
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
    </>
  );
}

export default Home;
