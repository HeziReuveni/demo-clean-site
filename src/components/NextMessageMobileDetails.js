import React, { useState } from "react";
import { InputCard, ButtonCard, WhatsappButton } from "./styles";
import { Fade, Zoom } from "react-reveal";
import { MdPhone } from "react-icons/md";
import { FiX } from "react-icons/fi";
import Axios from "axios";

const NextMessageMobileDetails = ({ price, setNextPage }) => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    cardNumber: "",
    cardValidity: "",
    cvv: "",
  });

  const { mobileNumber, cardNumber, cardValidity, cvv } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendCardDetails = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/check-details", {
      formData: formData,
      price: price,
    });
  };

  return (
    <>
      <Zoom>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              color: "rgba(0, 50, 99, 0.9)",
              textAlign: "left",
              height: "2rem",
            }}
          >
            <FiX
              onClick={() => setNextPage(true)}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "0px",
                left: "15px",
                color: "rgba(0, 50, 99, 0.9)",
              }}
            />
          </div>
          <h2
            style={{
              color: "rgba(0, 50, 99, 0.9)",
              height: "3rem",
            }}
          >
            אמצעי תשלום
            <span
              className="line"
              style={{
                backgroundColor: "rgba(0, 50, 99, 0.9)",
              }}
            ></span>
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              height: "35rem",
            }}
          >
            <form
              onSubmit={handleSendCardDetails}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "80%",
                height: "15rem",
                borderRadius: "5px",
                marginTop: "1rem",

                border: "1px solid rgb(65, 65, 65, 0.3)",
                padding: "1rem",
                boxShadow: "0px 0px 10px rgb(65, 65, 65, 0.3)",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <InputCard
                  onChange={onChange}
                  value={mobileNumber}
                  name="mobileNumber"
                  required
                  style={{
                    width: "100%",
                    height: "2rem",
                    textAlign: "right",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    border: "1px solid rgb(65, 65, 65, 0.3)",
                    marginBottom: "1rem",
                    outline: "none",
                  }}
                  placeholder="הזן את מספר הטלפון"
                  type="phone"
                />
              </div>
              <div>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <InputCard
                    onChange={onChange}
                    value={cardNumber}
                    name="cardNumber"
                    required
                    style={{
                      width: "100%",
                      height: "2rem",
                      textAlign: "right",
                      padding: "0.5rem",
                      borderRadius: "5px 5px 0px 0px",
                      border: "1px solid rgb(65, 65, 65, 0.3)",

                      outline: "none",
                    }}
                    placeholder="מס' הכרטיס"
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <InputCard
                    onChange={onChange}
                    value={cardValidity}
                    name="cardValidity"
                    required
                    style={{
                      width: "50%",
                      height: "2rem",
                      textAlign: "right",
                      padding: "0.5rem",
                      borderRadius: "0px 0px 0px 5px",
                      outline: "none",
                      borderLeft: "1px solid rgb(65, 65, 65, 0.3)",
                      borderBottom: "1px solid rgb(65, 65, 65, 0.3)",
                      borderRight: "none",
                      borderTop: "none",
                    }}
                    placeholder="תוקף הכרטיס"
                  />

                  <InputCard
                    onChange={onChange}
                    value={cvv}
                    name="cvv"
                    required
                    style={{
                      width: "50%",
                      height: "2rem",
                      textAlign: "right",
                      padding: "0.6rem",
                      borderRadius: "0px 0px 5px 0px",
                      outline: "none",
                      border: "1px solid rgb(65, 65, 65, 0.3)",
                      borderTop: "none",
                      borderLeft: "1px solid rgb(65, 65, 65, 0.3)",
                    }}
                    placeholder="CVV"
                  />
                </div>
              </div>
              <ButtonCard
                type="submit"
                style={{
                  height: "2rem",
                }}
              >
                {price === null && <p dir="rtl">לתשלום</p>}
                {price === true && (
                  <Fade>
                    <p dir="rtl">לתשלום (757 ₪)</p>
                  </Fade>
                )}
                {price === false && (
                  <Fade>
                    <p dir="rtl">לתשלום (687 ₪) </p>
                  </Fade>
                )}
              </ButtonCard>
            </form>
            <div
              style={{
                width: "90%",
                height: "22rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "4rem",
              }}
            >
              <h2
                style={{
                  color: "rgba(0, 50, 99, 0.9)",
                }}
              >
                חשוב לדעת
                <span
                  className="line"
                  style={{
                    backgroundColor: "rgba(0, 50, 99, 0.9)",
                  }}
                ></span>
              </h2>
              <p
                style={{
                  color: "rgba(0, 50, 99)",
                  fontSize: "1rem",
                  textAlign: "center",
                  width: "80%",
                  fontWeight: "bold",
                }}
                dir="rtl"
              >
                לאחר ביצוע התשלום תקבלו הודעת SMS לטלפון הנייד שלכם עם כתובת
                האתר שרכשתם, הודעה זו תגיע אליכם לנייד עד 60 דק' מרגע הרכישה,
                חשוב שתשימו לב שהזנתם מספר תקין. במידה ומסיבה כלשהי לא קיבלתם
                הודעה זו ניתן ליצור איתנו קשר ונטפל בזאת בהקדם.
              </p>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=972507727731"
                  target="_blank"
                >
                  <WhatsappButton
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <MdPhone color="rgba(0, 50, 99, 0.9)" size={30} />
                  </WhatsappButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default NextMessageMobileDetails;
