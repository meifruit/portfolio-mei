import React from "react";

import "./about.css";
import skills from "../../data/skills.json";
// import { getImageUrl } from "../../index.js";
import Image from "../../assets/port-mei.JPG";
const About = () => {
  return (
    <section className="about container section" id="about">
      <div className="about__container grid">
        <div className="about__data">
          <h2 className="about__title">About Me</h2>
          <div className="about__info">
            <p>
              Hey there👋 , welcome to my portfolio. I am originally from China
              and based in Tokyo. In the past, I worked in the logistics
              industry as a product coordinator, but my curiosity led me on a
              journey into web development.
            </p>
            <p>
              While working as a product coordinator, I collaborated closely
              with the tech team to troubleshoot system issues. The potential of
              technology to achieve great things led me to want to become part
              of it. Also, my husband's prowess as a data analyst boosted my
              intrigue for coding.
            </p>
            <p>
              My adventure officially started at Le Wagon Tokyo. Every day was
              very hard but with every challenge I conquered, my appetite for
              knowledge grew stronger. The more I learned, the more eager I
              became for the next coding puzzle.
            </p>
            <p>
              Currently, I'm laser-focused on honing my coding skills. I aim to
              join the field of dedicated developers shaping the digital
              landscape.
            </p>
          </div>
        </div>
        <div className="about__container">
          <div className="skill__data">
            <h2 className="about__title">Skills</h2>
            <div className="about__skills">
              {skills.map((skill, id) => {
                return (
                  <div key={id} className="about__skill">
                    <div className="about__skillImageContainer">
                      <i className={skill.imageSrc}></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">
                <span className="skills__number">Frontend</span>
              </h3>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>
        </div> */
}
