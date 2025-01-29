import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import styled from "styled-components";
import DetailProject from "./components/DetailProject";
import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 70% 1fr;
  /* gap: 16px; */
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  /* right: 20px; */
  margin-left: 2rem;
  background-color: transparent;
  color: #5a5a5a;
  border: solid 1px #5a5a5a;
  padding: 9px 10px;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.visible ? "block" : "none")};
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
      <GridContainer>
        <span />
        <Content>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail" element={<DetailProject />} />
          </Routes>
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
