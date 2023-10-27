import React from "react";
import "./about.css";
import Image from "../../assets/port-mei.JPG";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hey there👋 , welcome to my portfolio. I am originally from China
              and based in Tokyo. In the past, I worked in the logistics
              industry as a product coordinator, but my curiosity led me on a
              journey into web development. While working as a product
              coordinator, I collaborated closely with the tech team to
              troubleshoot system issues. The potential of technology to achieve
              great things led me to want to become part of it. Also, my
              husband's prowess as a data analyst boosted my intrigue for
              coding. My adventure officially started at Le Wagon Tokyo. Every
              day was very hard but with every challenge I conquered, my
              appetite for knowledge grew stronger. The more I learned, the more
              eager I became for the next coding puzzle. Currently, I'm
              laser-focused on honing my coding skills. I aim to join the field
              of dedicated developers shaping the digital landscape.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
