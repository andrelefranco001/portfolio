import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import styled from "styled-components";

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "auto",
          }}
        >
          <span />
          <NavBar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              // border: "solid 2px blue",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <span />
        </div>
      </Router>
    </>
  );
}

export default App;
