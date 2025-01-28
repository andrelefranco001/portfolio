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
        to="/detail"
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: "15px",
          //   width: "200px",
          height: "700px",
        }}
      />
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
          <p style={{ fontWeight: "600" }}>Untitled project 1</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore.
          </p>
        </span>
        <Link to="/detail" style={{ textDecoration: "none", color: "#8b8b8b" }}>
          <span
            style={{ display: "flex", flexDirection: "row", color: "#8b8b8b" }}
          >
            {/* <p>Show more </p>{" "} */}

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
          // justifyContent: "space-between",
          marginBottom: "10rem",
          // border: "red solid 1px",
        }}
      >
        <span
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            width: "900px",
            height: "500px",
            marginRight: "3rem",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // border: "red solid 1px",
          }}
        >
          {" "}
          <span style={{ width: "auto" }}>
            <p style={{ fontWeight: "600", margin: "auto" }}>
              Untitled project 2
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
      </div>

      {/*  */}
      <div
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
      </div>
      {/*  */}
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          marginBottom: "10rem",
          // border: "red solid 1px",
        }}
      >
        <span
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            width: "900px",
            height: "500px",
            marginRight: "3rem",
          }}
        />
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
              Untitled project 4
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
    </>
  );
}

export default Home;
