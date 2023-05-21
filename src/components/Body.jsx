import React from "react";
import MyWork from "./bodyComponents/MyWork";
import Contact from "./bodyComponents/Contact";
import Home from "./bodyComponents/Home";
import AboutMe from "./bodyComponents/AboutMe";

function Body() {
  return (
    <div>
      <Home />
      <AboutMe />
      <MyWork />
      <Contact />
    </div>
  );
}

export default Body;
