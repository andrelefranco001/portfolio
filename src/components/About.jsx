import React, { useState } from "react";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div style={{ marginTop: "20rem", marginBottom: "5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            justifyContent: "flex-start",
          }}
        >
          {/* Contenedor de la imagen con loader */}
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "300px",
              marginRight: "3rem",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            {isLoading && (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#D9D9D9",
                }}
              >
                <div className="spinner" />
              </div>
            )}
            <img
              src="../../src/assets/VOSTOK282982.jpg"
              onLoad={() => setIsLoading(false)}
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: isLoading ? "none" : "block",
              }}
            />
          </div>

          {/* Texto */}
          <div
            style={{
              display: "flex",
              //   height: "500px",
              width: "inherit",
              fontWeight: "600",
              fontSize: "2rem",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <p style={{ margin: "0px" }}>
              Frontend Developer & UX/UI Designer — Building experiences that
              make sense.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "200",
              marginTop: "5rem",
              textAlign: "justify",
              width: "70%",
            }}
          >
            I’m a frontend developer and UX/UI designer with a strong focus on
            creating interfaces that are not only visually appealing but also
            intuitive and efficient. My work blends creativity and
            functionality, always putting users at the center. <br />
            <br /> With hands-on experience developing and optimizing web
            applications in industries like oil & gas, I’ve learned how to
            design for complex workflows where clarity and performance are
            critical. Whether it’s simplifying technical processes or crafting
            elegant user journeys, I thrive at turning challenging requirements
            into seamless experiences. <br />
            <br /> I’m passionate about solving problems through design and
            technology, constantly exploring new tools and methods to enhance
            usability and innovation. Comfortable working in agile teams, I
            enjoy the collaborative process that turns ideas into fully
            functional products. <br />
          </p>
        </div>

        <div style={{ marginTop: "20rem" }}>
          <p style={{ fontSize: "3.5rem", fontWeight: "600", margin: "auto" }}>
            Work Experience
          </p>
          <div
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: "15px",
              height: "auto",
              marginTop: "3rem",
              // marginRight: "3rem",
              padding: "2rem 3rem",
              width: "auto",
            }}
          >
            <ol
              style={{
                fontSize: "1.7rem",
                fontWeight: "200",
                listStyleType: "none",
              }}
            >
              <strong style={{ fontWeight: "600" }}>
                Frontend Developer & UX/UI Designer
              </strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Decimetrix SAS</strong>
                <li> 2023 - 2024</li>
              </div>
            </ol>
            <ol
              style={{
                marginTop: "5rem",
                fontSize: "1.7rem",
                fontWeight: "200",
                listStyleType: "none",
              }}
            >
              <strong style={{ fontWeight: "600" }}>
                Frontend Developer & UX/UI Designer
              </strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Freelance</strong>
                <li> 2022 - present</li>
              </div>
            </ol>
            <ol
              style={{
                marginTop: "5rem",
                fontSize: "1.7rem",
                fontWeight: "200",
                listStyleType: "none",
              }}
            >
              <strong style={{ fontWeight: "600" }}>Gallery Coordinator</strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Aura Arte Gallery</strong>
                <li> 2019 - 2021</li>
              </div>
            </ol>
            <ol
              style={{
                marginTop: "5rem",
                fontSize: "1.7rem",
                fontWeight: "200",
                listStyleType: "none",
              }}
            >
              <strong style={{ fontWeight: "600" }}>Gallery Coordinator</strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Casa Enso Gallery</strong>
                <li> 2019 </li>
              </div>
            </ol>
          </div>
        </div>
        {/*  */}

        <div style={{ marginTop: "10rem" }}>
          <p style={{ fontSize: "3.5rem", fontWeight: "600", margin: "auto" }}>
            Education
          </p>
          <div
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: "15px",
              height: "auto",
              marginTop: "3rem",
              // marginRight: "3rem",
              padding: "2rem 3rem",
              width: "auto",
            }}
          >
            <ol
              style={{
                fontSize: "1.7rem",
                fontWeight: "200",
                listStyleType: "none",
              }}
            >
              <strong style={{ fontWeight: "600" }}>
                Certified Tech Developer (FullStack)
              </strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Digital House</strong>
                <li> 2022</li>
              </div>
            </ol>
            <ol
              style={{
                marginTop: "5rem",
                fontSize: "1.7rem",
                fontWeight: "200",
                listStyleType: "none",
              }}
            >
              <strong style={{ fontWeight: "600" }}>
                Bachelor’s Degree in Visual Arts
              </strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Instituto Tecnológico Metropolitano</strong>
                <li> 2014 - 2021</li>
              </div>
            </ol>
          </div>
        </div>
      </div>

      {/* Estilos para el spinner */}
      <style>
        {`
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgb(255, 255, 255);
            border-left-color: #f8a100;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}

export default About;
