import React, { useState } from "react";
import styles from "./portfolio.css";
import Menu from "./Menu";
import { getImageUrl } from "../../index.js";
const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curEl) => {
      return curEl.category === categoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="about__title">Project</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Groupwork")}>
          Groupwork
        </span>
        <span className="work__item" onClick={() => filterItem("Personalwork")}>
          Personalwork
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const {
            id,
            image,
            title,
            category,
            description,
            skills,
            demo,
            source,
          } = elem;
          return (
            <div className="work__card" key={id}>
              <img
                src={image}
                alt={`Image of ${title}`}
                className="work__img"
              />
              <div className="work__thumbnail">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <ul className="skills">
                  {skills.map((skill, id) => {
                    return <i key={id} className={`devicon-${skill}`}></i>;
                  })}
                </ul>
                <div className="links">
                  {demo && (
                    <a href={demo} className="link">
                      Demo
                    </a>
                  )}
                  <a href={source} className="link">
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
