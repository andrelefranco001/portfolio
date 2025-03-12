import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import styled from "styled-components";
import DetailProject from "./components/DetailProject";
import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";
import projectsData from "./components/projectsData";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 100%;
  min-height: 100vh;

  /* @media (max-width: 768px) {
    grid-template-columns: 5% 90% 5%;
  } */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: 2; /* Ensure it spans the middle column */
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  margin-left: 2rem;
  background-color: #e6e6e6;
  color: #5a5a5a;
  border: solid 1px #5a5a5a;
  padding: 9px 10px;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.visible ? "block" : "none")};

  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop />
      <GridContainer>
        <span />
        <Content>
          <NavBar />
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {projectsData.map((project) => (
              <Route
                key={project.id}
                path={`/detail/${project.id}`}
                element={<DetailProject {...project} />}
              />
            ))}
          </Routes>
          <Footer />
        </Content>
        <span>
          <ScrollToTopButton onClick={scrollToTop} visible={showScroll}>
            <GoArrowUp />
          </ScrollToTopButton>
        </span>
      </GridContainer>
    </Router>
  );
}

export default App;
