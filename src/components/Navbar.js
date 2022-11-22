import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { BsStars } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import "./Navbar.css";
import { FiX } from "react-icons/fi";
import { Fade, Zoom } from "react-reveal";
import { UserContext } from "./context/context";

const Navbar = () => {
  const { state } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Zoom>
          <a href="" className="logo">
            <div className="logo-nav">
              <h2>
                <BsStars />
              </h2>
              <p id="text_1">{state.title}</p>
              <p id="text_2"></p>
            </div>
          </a>
        </Zoom>
        <Zoom>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <Zoom>
                <FiX
                  size={25}
                  style={{
                    color: "rgb(0, 98, 172)",
                  }}
                />
              </Zoom>
            ) : (
              <div
                style={{
                  border: "1px solid rgb(80, 80, 80, 0.4)",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px",
                }}
              >
                <CgMenu size={25} style={{ color: "rgb(0, 98, 172)" }} />
              </div>
            )}
          </div>
        </Zoom>
        <Zoom>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onClick={closeMenu}
              >
                עמוד הבית
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                onClick={closeMenu}
              >
                אודות
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="demo"
                spy={true}
                smooth={true}
                offset={-190}
                duration={500}
                onClick={closeMenu}
              >
                שירותים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="gallery-page"
                spy={true}
                smooth={true}
                offset={-105}
                duration={500}
                onClick={closeMenu}
              >
                גלריית תמונות
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                onClick={closeMenu}
              >
                יצירת קשר
              </Link>
            </li>
          </ul>
        </Zoom>
      </nav>
    </div>
  );
};

export default Navbar;
