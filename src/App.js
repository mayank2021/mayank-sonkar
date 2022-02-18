import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Leaf from "./Images/leaf.png";
import LeafYellow from "./Images/leaf-yellow.png";
import LeafRed from "./Images/leaf-red.png";
import LeafGreen from "./Images/leaf-green.png";
import Leaf1 from "./Images/leaf1.png";
import Leaf5 from "./Images/leaf5.png";
import Leaf2 from "./Images/leaf2.png";
import Leaf3 from "./Images/leaf3.png";
import Leaf4 from "./Images/leaf4.png";
import Leaf6 from "./Images/leaf6.png";
import ProSection from "./sections/Project-section/ProSection";
import TechSection from "./sections/Tech-section/TechSection";
import AboutSection from "./sections/About-section/AboutSection";
import AcchiSection from "./sections/Acchievements-Section/Acchi-section";
import BlogSection from "./sections/Blog-Section/BlogSection";
import InterestSection from "./sections/Interest/InterestSection";
import DemoSection from "./sections/DemoSection/DemoSection";
import Footer from "./sections/Footer/Footer";
import Click from "./Images/click.png";

const App = () => {
  const [color, setColor] = useState("#fa8812"); //fa8812
  //F43B86, FF2626, FF4C29, 39A6A3, 892CDC, F0A500, CF7500, FF1E56, F58B54
  const [image, setimage] = useState(Leaf);
  function colorHai(color) {
    switch (color) {
      case "#FA8812":
        return Leaf;
      case "#CE1212":
        return LeafRed;
      case "#F6C90E":
        return LeafYellow;
      case "#5ACFA9":
        return LeafGreen;
      case "#FF2626":
        return Leaf5;
      case "#31C9C5":
        return Leaf6;
      case "#F0A500":
        return Leaf4;
      case "#FF4C29":
        return Leaf1;
      case "#892CDC":
        return Leaf2;
      case "#FF1E56":
        return Leaf3;
      default:
        return Leaf;
    }
  }

  useEffect(() => {
    const imageone = colorHai(color);
    setimage(imageone);
  }, [color]);
  function colorSelection() {
    const random = Math.floor(Math.random() * 10);

    const colorArray = [
      "#CE1212",
      "#F6C90E",
      "#FA8812",
      "#5ACFA9",
      "#FF2626",
      "#31C9C5",
      "#F0A500",
      "#FF4C29",
      "#892CDC",
      "#FF1E56",
    ];

    const selectedColor = colorArray[random];
    setColor(selectedColor);
  }
  return (
    <div style={{ overflow: "hidden !important" }}>
      <div style={{ borderColor: `${color}` }} className="app-main--container">
        <Nav />
        <Home color={color} />
        <button
          style={{ borderColor: `${color}` }}
          className="variation-button"
          onClick={() => colorSelection()}
        >
          <img src={Click} alt="click" />
        </button>
      </div>
      <section>
        <div style={{ borderColor: `transparent` }} className="set">
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
          <div>
            <img src={image} alt="leaf" />
          </div>
        </div>
      </section>
      <hr style={{ borderColor: color }} className="divider-hr" />
      <div id="project"></div>
      <ProSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <div id="demo"></div>
      <DemoSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <div id="tech"></div>
      <TechSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <div id="about"></div>
      <AboutSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <div id="achievement"></div>
      <AcchiSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <BlogSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <InterestSection color={color} />
      <hr style={{ borderColor: color }} className="divider-hr" />
      <Footer color={color} />
    </div>
  );
};

export default App;
