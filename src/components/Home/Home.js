import React, { useState, useEffect } from "react";
import "./Home.css";
import MayankImg from "../../Images/mayank-image.png";
import MayankImgGreen from "../../Images/mayankImg-green.png";
import MayankImgRed from "../../Images/mayankImg-red.png";
import MayankImgYellow from "../../Images/mayankImg-yellow.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Img1 from "../../Images/my-images/img1-FF2626.png";
import Img2 from "../../Images/my-images/img2-31C9C5.png";
import Img3 from "../../Images/my-images/img3-F0A500.png";
import Img4 from "../../Images/my-images/img4-FF4C29.png";
import Img5 from "../../Images/my-images/img5-892CDC.png";
import Img6 from "../../Images/my-images/img6-FF1E56.png";

const Home = (props) => {
  const [image, setimage] = useState(MayankImg);
  function colorHai(color) {
    switch (color) {
      case "#FA8812":
        return MayankImg;
      case "#CE1212":
        return MayankImgRed;
      case "#F6C90E":
        return MayankImgYellow;
      case "#5ACFA9":
        return MayankImgGreen;
      case "#FF2626":
        return Img1;
      case "#31C9C5":
        return Img2;
      case "#F0A500":
        return Img3;
      case "#FF4C29":
        return Img4;
      case "#892CDC":
        return Img5;
      case "#FF1E56":
        return Img6;
      default:
        return MayankImg;
    }
  }

  useEffect(() => {
    const imageone = colorHai(props.color);
    setimage(imageone);
  }, [props.color]);

  return (
    <div className="home-container">
      <div className="home-left--container">
        <img className="home-img" src={image} alt="mayank" />
      </div>
      <div className="home-right--container">
        <p style={{ color: props.color }} className="hello-text">
          Hi There!
        </p>
        <h1 className="my-name desktop-lg">I'm Mayank Sonkar.</h1>
        <h1 className="my-name mobile-sm">I'm Mayank.</h1>
        <p className="paragraph-text">
           A <i  style={{ color: props.color }} className="highlight-span">designer</i>  and a <i  style={{ color: props.color }} className="highlight-span">developer</i>. I affectionately play with colors and fonts because my &lt;body/&gt; is highly indulged in it and I am unable to &lt;br/&gt; this consistency.
        </p>
        <div className="social-media-icons ">
          <div
            style={{ marginLeft: 0, borderColor: props.color }}
            className="square icon--container"
          >
            <a href="https://www.linkedin.com/in/mayank-sonkar-17a8401b6/" target="_blank" rel="noreferrer">
              <LinkedInIcon
                style={{ fontSize: "23px", color: props.color }}
                className="icon"
              />
            </a>
          </div>
          <div
            style={{ borderColor: props.color }}
            className="square icon--container"
          >
            <a href="https://github.com/mayank2021" target="_blank" rel="noreferrer">
              <GitHubIcon
                style={{ fontSize: "23px", color: props.color }}
                className="icon"
              />
            </a>
          </div>
          <div
            style={{ borderColor: props.color }}
            className="square icon--container"
          >
            <a href="https://www.instagram.com/heyy._.mayank/" target="_blank" rel="noreferrer">
              <InstagramIcon
                style={{ fontSize: "23px", color: props.color }}
                className="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
