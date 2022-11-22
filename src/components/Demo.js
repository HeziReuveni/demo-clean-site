import React, { useEffect, useState, useContext } from "react";
import { SiSymantec } from "react-icons/si";
import { RiHandHeartFill } from "react-icons/ri";
import { GiVacuumCleaner } from "react-icons/gi";
import { Fade } from "react-reveal";
import img1 from "./views_images/pic1.jpg";
import img2 from "./views_images/pic2.jpg";
import img3 from "./views_images/pic3.jpg";
import img4 from "./views_images/pic4.jpg";
import { UserContext } from "./context/context";

import "./Demo.css";

const Demo = () => {
  const { state } = useContext(UserContext);
  const arrImgs = [img1, img2, img3, img4];
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((second) => (second === 3 ? 0 : second + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="demo" id="demo">
      <div className="container">
        <Fade top>
          <div className="col-1">
            <p></p>
            <p
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              שירותי החברה
            </p>
            <span className="line"></span>
            <br />
            <br />
            <p dir="rtl" style={{ textAlign: "center", padding: "1rem" }}>
              אחזקת מבנים שוטפת. ניקיון ואחזקת חניונים. ניקיון דירות לאחר שיפוץ.
              הברקה ופוליש לכל סוגי המרצפות. ניקיון וחיטוי לספות מזרנים שטיחים
              ומושבי רכב. ניקיון והברקת חלונות. ניקיון וחיטוי לכל סוגי המזגנים.
              ביצוע כל עבודות הגינון עיצוב תכנון והקמת גינות - תחזוקה שוטפת
              ושיקום - כיסוח וטיפול בדשא ועשבים -גיזום / כיסוח עצים, ועוד.
            </p>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <RiHandHeartFill
                style={{
                  color: "red",
                  fontSize: "2rem",
                }}
              />
              <SiSymantec
                style={{
                  color: "green",
                  fontSize: "2rem",
                }}
              />
              <GiVacuumCleaner
                style={{
                  color: "orange",
                  fontSize: "2rem",
                }}
              />
            </div>
          </div>
        </Fade>
        <div className="col-2">
          <img src={arrImgs[seconds]} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
