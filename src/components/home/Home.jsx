import React from "react";
import "./home.css";
import Me from "../../assets/port-mei.JPG";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Xuemei Huang</h1>
        <span className="home__education">I'm a Front-End developer</span>
        <HeaderSocials />
        {/* <a href="#contact" className="btn">
          Contact Me
        </a> */}
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
