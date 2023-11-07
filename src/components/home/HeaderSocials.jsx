import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/xuemei-huang/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/meifruit"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="mailto:xuemei.js@gmail.com"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
