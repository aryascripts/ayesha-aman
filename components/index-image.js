import React from "react";
import { css } from "./../static/variables";

export const HomeImage = () => (
  <div className="home-image">
    <div className="ab-logo"></div>

    <style jsx>
      {`
        .home-image {
          top: 0;
          left: 0;
          position: absolute;
          background-image: url("./images/home3.jpg");
          background-size: cover;
          background-position: 50% 33%;
          height: 90vh;
          width: 100%;
          z-index: ${css.zIndex.homeBg};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ab-logo {
          background-image: url("./images/ab-logo-70.png");
          width: 260px;
          height: 250px;
          background-size: cover;
          position: relative;
        }
      `}
    </style>
  </div>
);
