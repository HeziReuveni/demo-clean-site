import React, { useContext } from "react";
import "./About.css";
import { GiGearHammer } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { Zoom } from "react-reveal";
import { UserContext } from "./context/context";

const About = () => {
  const { state, setState } = useContext(UserContext);
  return (
    <div className="about" id="about">
      <div className="container">
        <Zoom>
          <div className="logo-image">
            <h1>
              <BsStars />
            </h1>
            <p
              style={{
                fontSize: "50px",
              }}
              dir="rtl"
            >
              {state.title}
            </p>
            <p dir="rtl">כל שירותי הנקיון והגינון במקום אחד.</p>
          </div>
        </Zoom>
        <Zoom delay={200}>
          <div className="col-2">
            <h2>אודות</h2>
            <span className="line"></span>
            <p dir="rtl" style={{ textAlign: "center", padding: "1rem" }}>
              הקמנו את Home & Garden Services אי שם בתחילת שנת 2013 מתוך אהבה
              לתחום ואמונה שבאמת אפשר לתת שירות ברמה שלא נראתה כמותה, המוטו שלי
              ושל כל צוות העובדים הוא שירות אמינות ומקצועיות לפני הכל. וההוכחה
              לכך היא שלכל עבודה אנו מעניקים אחריות מלאה! אנו נדע איך לעשות אתכם
              מרוצים. חברתנו תשמח לעמוד לשירותכם ולספק לכם חווית
              שירות ומקצועיות.
            </p>
            <h2>
              <BsFillSuitHeartFill style={{ color: "red" }} />
              <GiGearHammer style={{ color: "orange" }} />
              <FaMedal style={{ color: "green" }} />
            </h2>
            <a href={state.facebookSrc} className="button">
              גלה עלינו עוד
            </a>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default About;
