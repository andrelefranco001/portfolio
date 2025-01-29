import React, { useState } from "react";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* <div
        style={{
          // border: "red solid 1px",
          marginTop: "20rem",
          marginBottom: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >

          <img
            src="../../public/VOSTOK282982.jpg"
            // alt="Descripción de la imagen"
            style={{
              borderRadius: "15px",
              width: "300px",
              height: "300px",
              marginRight: "3rem",
              objectFit: "cover",
            }}
          /> */}

      <div style={{ marginTop: "20rem", marginBottom: "5rem" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
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
              width: "50%",
              fontWeight: "600",
              fontSize: "2rem",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <p style={{ margin: "0px" }}>
              Senior Product Designer specializing in user-centric innovation
              and product evolution.
            </p>
          </div>
        </div>
        <p style={{ fontSize: "1.5rem", fontWeight: "200", marginTop: "5rem" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies vel
          in duis hendrerit suscipit. Arcu interdum neque nam aptent tortor non
          nisi varius duis accumsan suspendisse nulla, ad at odio potenti lectus
          ante vitae habitant vel tempus fringilla tincidunt, mollis pulvinar
          porttitor semper vehicula sagittis himenaeos diam malesuada eu
          penatibus. Phasellus dui interdum blandit dapibus mattis massa proin,
          magnis natoque lacus sociosqu ac vitae, ridiculus penatibus nullam
          dignissim erat aenean.
        </p>
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
                FrontEnd Developer and UX/UI Design
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
                FrontEnd Developer and UX/UI Design
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
                Bachelor of Visual Arts/
              </strong>
              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <strong>Freelance</strong>
                <li> 2022 - present</li>
              </div>
            </ol>
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
