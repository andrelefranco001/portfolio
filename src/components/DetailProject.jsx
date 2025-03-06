import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

function DetailProject({
  title,
  description,
  bannerImages,
  carousels,
  extraImages,
}) {
  return (
    <div style={{ marginTop: "10rem", marginBottom: "5rem" }}>
      {/* Título y Descripción */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "3.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "200",
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </p>
      </div>

      {/* Imágenes y Carruseles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px 10px",
        }}
      >
        {/* Banners principales */}
        {bannerImages.map((img, index) => (
          <div
            key={index}
            style={{
              gridColumn: "span 2",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={img}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ))}

        {/* Carruseles */}
        {carousels
          .filter((carousel) => carousel.id === 1) // Cambia el 1 por el id que quieras mostrar
          .map((carousel) => (
            <div
              key={carousel.id}
              style={{
                display: "flex",
                justifyContent: "center",
                gridColumn: "span 2",
                padding: "5rem",
                borderRadius: "15px",
              }}
            >
              <ImageCarousel images={carousel.images} />
            </div>
          ))}

        {/* Imágenes extra */}
        {extraImages.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "space-around",
              gridColumn: "span 2 / span 2",
              borderRadius: "15px",
              height: "fit-content",
            }}
          >
            {row.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                style={{ width: "40%", height: "40%", objectFit: "contain" }}
              />
            ))}
          </div>
        ))}

        {/* Carruseles */}
        {carousels
          .filter((carousel) => carousel.id === 2)
          .map((carousel) => (
            <div
              key={carousel.id}
              style={{
                display: "flex",
                justifyContent: "center",
                gridColumn: "span 2",
                padding: "5rem",
                borderRadius: "15px",
              }}
            >
              <ImageCarousel images={carousel.images} />
            </div>
          ))}
      </div>

      {/* Botón para regresar */}
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
          <div>Show all projects</div>
        </Link>
      </div>
    </div>
  );
}

export default DetailProject;
