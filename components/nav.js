import React from "react";
import { css } from "../static/variables";
// import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className="header">
      <div className="names">ayesha & aman</div>
    </div>

    <style jsx>{`
      nav {
        z-index: ${css.zIndex.navigation};
        position: fixed;
        width: 100%;
        top: 0;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 0;
        background: rgba(255, 255, 255, 0.75);
      }

      .names {
        font-family: 'Pacifico', cursive;
        font-size: 28px;
        margin: 0 0 0 20px;
      }
    `}</style>
  </nav>
);

export default Nav;
