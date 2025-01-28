import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import styled from "styled-components";
import DetailProject from "./components/DetailProject";

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

function App() {
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
        <span />
      </GridContainer>
    </Router>
  );
}

export default App;
