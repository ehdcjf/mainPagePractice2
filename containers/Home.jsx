import { useState, useRef, useEffect } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header/index";
import Featuerd from "../components/Featured/index";
import About from "../components/About/index";
import Gallery from "../components/Gallery/index";
import PreLoader from "../components/PreLoader";
import useLocoScroll from "../hooks/useLocoScroll";
import styled from "styled-components";

const StyledHome = styled.div`
  padding: 0 5vw;
  background-color: #f5f0ec;
  font-family: "East Sea Dokdo", cursive;
  section {
    padding: 100px 0;
  }
  .section_header {
    margin-bottom: 50px;
  }
`;

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);

  useLocoScroll();

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  });

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <PreLoader></PreLoader>
      ) : (
        <StyledHome>
          <div id="main-container" data-scroll-container>
            <NavBar />
            <Header />
            <Featuerd />
            <About />
            <Gallery />
            <Footer />
          </div>
        </StyledHome>
      )}
    </>
  );
};

export default Home;
