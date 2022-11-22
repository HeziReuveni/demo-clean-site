import React from "react";
import "./Footer.css";
import { GoChevronUp } from "react-icons/go";
import { Link } from "react-scroll";
import security from "./images/positivessl_trust_seal_md_167x42.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <div style={{ width: "fit-content", margin: "0 auto" }}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              // onClick={closeMenu}
            >
              <h2>
                <GoChevronUp />
              </h2>
            </Link>
          </div>
          <div className="content-footer">
            <p>Designed by Hezi Reuveni</p>
            <img src={security} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
