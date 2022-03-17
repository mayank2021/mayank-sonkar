import React, { useState } from "react";
import "./Navigation.css";
import Logo from "../../Images/mayank-sonkar-logo.svg";

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <a href="/" style={{ cursor: "pointer" }} className="nav-logo">
            <img src={Logo} alt="logo" />
          </a>
          <ul className={`${hamburger ? "active" : null} nav-menu`}>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                onClick={() => setHamburger(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#project"
                className="nav-link"
                onClick={() => setHamburger(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#tech"
                className="nav-link"
                onClick={() => setHamburger(false)}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#about"
                className="nav-link"
                onClick={() => setHamburger(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1SpC-2Bby_BJcStzL2RcPIOVJpqv76jev/view"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHamburger(false)}
              >
                Resume
              </a>
            </li>
          </ul>
          <div
            className={`${hamburger ? "active" : null} hamburger`}
            onClick={() =>
              hamburger ? setHamburger(false) : setHamburger(true)
            }
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
