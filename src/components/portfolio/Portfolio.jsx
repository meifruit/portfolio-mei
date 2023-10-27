import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curEl) => {
      return curEl.category === categoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Project</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Groupwork")}>
          Groupwork
        </span>
        <span className="work__item" onClick={() => filterItem("Personalwork")}>
          PersonalWork
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="work__item" onClick={() => filterItem("Ecsite")}>
          ECsite
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h2 className="work__title">{title}</h2>
              <a href="#" className="work__button">
                <i className="icon-link work__butoon-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
