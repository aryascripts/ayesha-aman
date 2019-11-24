import React from "react";
import Nav from "./nav";
import { HomeImage } from "./index-image";
import { HomeContent } from "./home-content";
import { Footer } from "./footer";

export const Body = () => (
  <div>

    <HomeImage />
    <Nav />
    <HomeContent />

    <Footer />


  </div>
);
