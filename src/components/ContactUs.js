import React, { useState, useContext } from "react";
import facebook from "./images/facebook.png";
import gmail from "./images/gmail.png";
import whatsapp from "./images/whatsapp.png";
import "./ContactUs.css";
import { Link } from "react-scroll";
import { Zoom, Fade } from "react-reveal";
import { UserContext } from "./context/context";

const ContactUs = () => {
  const { state, setState } = useContext(UserContext);
  const [isPending, setIsPending] = useState(false);
  const copy = () => {
    setIsPending(!isPending);
    setTimeout(() => {
      setIsPending(false);
    }, 5000);
  };

  return (
    <div className="contact-us" id="contact-us">
      <div className="container">
        <Fade top>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            יצירת קשר
          </h2>
          <span className="line"></span>
        </Fade>
        <div className="content">
          <Zoom delay={100}>
            <div className="card">
              <img src={facebook} alt="facebook" width="95px" />
              <p className="para-facebook">
                בפייסבוק יש לנו עוד מגוון רחב של עבודות, נשמח שתכנסו ותתרשמו
                מחלקם
              </p>
              <p>
                <a
                  style={{ color: "rgb(14, 145, 0)" }}
                  href={state.facebookSrc}
                >
                  Facebook
                </a>
              </p>
            </div>
          </Zoom>
          <Zoom delay={200}>
            <div className="card">
              <img src={gmail} alt="gmail" width="90px" />
              <p id="gmail-id">
                ניתן ליצור איתנו קשר גם דרך המייל ונענה לכם בהקדם כדי לספק לכם
                את השירות הטוב ביותר<br></br>
              </p>
              <p>
                <a style={{ color: "rgb(14, 145, 0)" }} onClick={copy}>
                  Gmail
                </a>
                {isPending && (
                  <Zoom>
                    <div className="copied-message">{state.email}</div>
                  </Zoom>
                )}
              </p>
            </div>
          </Zoom>
          <Zoom delay={300}>
            <div className="card">
              <img src={whatsapp} alt="gmail" width="110px" height="100px" />
              <p>נשמח לקבל מכם הודעה בווטסאפ, אנחנו תמיד זמינים עבורכם</p>
              <p>
                <a
                  style={{ color: "rgb(14, 145, 0)" }}
                  href={`https://api.whatsapp.com/send?phone=972${state.whatsapp}`}
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </Zoom>
        </div>
        <div className="arrow-down">
          <Link
            to="demo"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
