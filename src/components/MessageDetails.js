import React, { useState, useEffect } from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
// import "react-credit-cards/es/styles-compiled.css";
import { Fade, Zoom } from "react-reveal";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { ImWarning } from "react-icons/im";
import { ImSad2 } from "react-icons/im";
import { BsCartPlusFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import {
  ContainerMessage,
  FontStyleMessage,
  ButtonsStyleMessage,
  ButtonsDomain,
  ButtonsDomain2,
  InputSearchDomain,
  ButtonSearchDomain,
  InputCard,
  ButtonCard,
  WhatsappButton,
} from "./styles";
import { FcApproval, FcCheckmark } from "react-icons/fc";
import { MdPhone } from "react-icons/md";
import Axios from "axios";

const MessageDetails = ({
  setOpenWindowIfIsDetails,
  setDisplayButtonsFixed,
}) => {
  const [iconOnMouse, setIconOnMouse] = useState(false);
  const [iconOnMouse2, setIconOnMouse2] = useState(false);
  const [thisWindowIsOpen, setThisWindowIsOpen] = useState(false);
  const [wontDomain, setWontDomain] = useState(false);
  const [doNotWontDomain, setDoNotWontDomain] = useState(false);
  const [nameDomain, setNameDomain] = useState("");
  const [statusName, setStatusName] = useState(null);
  const [nameAvailable, setNameNameAvailable] = useState(null);
  const [nameNotAvailable, setNameNotNameAvailable] = useState(null);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(null);

  const handleCheckDomain = async (e) => {
    e.preventDefault();
    await Axios.get(
      `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_5X9KMoEmqyZGeQ7C08ICmab3nsz2d&domainName=${nameDomain}&credits=DA`
    )
      .then((res) => {
        setStatusName(res.data.DomainInfo.domainAvailability);
      })
      .catch((err) => {
        setError(err);
        setNameNotNameAvailable(false);
        setNameNameAvailable(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (statusName === "AVAILABLE") {
      setNameNameAvailable(true);
      setNameNotNameAvailable(false);
      setError(false);
      console.log("שם הדומיין פנוי");
    }
    if (statusName === "UNAVAILABLE") {
      console.log("שם הדומיין לא פנוי");
      setNameNotNameAvailable(true);
      setNameNameAvailable(false);
      setError(false);
    }
  }, [statusName]);

  return (
    <>
      {!thisWindowIsOpen ? (
        <Zoom top>
          <ContainerMessage>
            <div
              style={{
                width: "100%",
                height: "35vh",
                backgroundColor: "rgba(0, 50, 99, 0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontStyleMessage dir="rtl">
                <strong>
                  רגע לפניי שאנחנו מעלים את האתר שלכם לאוויר חשוב לנו שתעברו שוב
                  על הפרטים שהזנתם.
                </strong>
                <MdOutlineScreenSearchDesktop size={50} />
              </FontStyleMessage>
            </div>
            <div
              style={{
                backgroundColor: "aliceblue",
                width: "100%",
                height: "10vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <ButtonsStyleMessage
                onClick={() => {
                  setOpenWindowIfIsDetails(false);
                  setDisplayButtonsFixed(true);
                }}
                onMouseOver={() => {
                  setIconOnMouse2(true);
                }}
                onMouseOut={() => {
                  setIconOnMouse2(false);
                }}
              >
                {iconOnMouse2 ? (
                  <Fade>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IoCloseOutline color="rgb(255, 39, 39)" size={30} />
                    </div>
                  </Fade>
                ) : (
                  <Fade>
                    <p> לא. מעדיף לבדוק</p>
                  </Fade>
                )}
              </ButtonsStyleMessage>
              <ButtonsStyleMessage
                onClick={() => {
                  setThisWindowIsOpen(true);
                }}
                onMouseOver={() => {
                  setIconOnMouse(true);
                }}
                onMouseOut={() => {
                  setIconOnMouse(false);
                }}
              >
                {iconOnMouse ? (
                  <Fade>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IoCheckmarkOutline color="rgb(22, 217, 0)" size={30} />
                    </div>
                  </Fade>
                ) : (
                  <Fade>
                    <p> כן. אלו הפרטים</p>
                  </Fade>
                )}
              </ButtonsStyleMessage>
            </div>
          </ContainerMessage>
        </Zoom>
      ) : (
        <div
          style={{
            width: "50%",
            height: "90vh",
            background: "none",
          }}
        >
          <Zoom top>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "48vh",
                  backgroundColor: "rgba(0, 50, 99, 0.6)",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "1vh",
                    marginLeft: "0.5vw",
                    marginTop: "0.5vh",
                    width: "100%",
                  }}
                >
                  <FiX
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setThisWindowIsOpen(false);
                      setOpenWindowIfIsDetails(false);
                      setDisplayButtonsFixed(true);
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <h2>פירוט ההזמנה</h2>
                  <span
                    className="line"
                    style={{
                      backgroundColor: "aliceblue",
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "23vh",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingRight: "1rem",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      textAlign: "right",
                      width: "100%",
                      fontSize: "1rem",
                    }}
                  >
                    <p dir="rtl">- אתר סטנדרט בעלות חד פעמית של 499 ₪</p>
                    <p dir="rtl">- עלות שנתית עבור איחסון האתר על סך 188 ₪</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          width: "8vw",
                          height: "3.5vh",
                          marginLeft: "8rem",
                        }}
                      >
                        <ButtonsDomain2
                          doNotWontDomain={doNotWontDomain}
                          onClick={() => {
                            setWontDomain(false);
                            setDoNotWontDomain(true);
                            setNameNotNameAvailable(false);
                            setNameNameAvailable(false);
                            setError(false);
                            setPrice(false);
                          }}
                        >
                          {doNotWontDomain ? (
                            <Fade>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FcApproval size={22} />
                              </div>
                            </Fade>
                          ) : (
                            <p> לא</p>
                          )}
                        </ButtonsDomain2>
                        <ButtonsDomain
                          wontDomain={wontDomain}
                          onClick={() => {
                            setDoNotWontDomain(false);
                            setWontDomain(true);
                          }}
                        >
                          {wontDomain ? (
                            <Fade>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FcApproval size={22} />
                              </div>
                            </Fade>
                          ) : (
                            <p> כן</p>
                          )}
                        </ButtonsDomain>
                      </div>
                      <p dir="rtl">
                        - האם תרצו דומיין? (שם ייחודי לאתר שלכם) בעלות שנתית של
                        70 ₪
                      </p>
                    </div>
                    <div
                      style={{
                        height: "3vh",
                      }}
                    >
                      {wontDomain && (
                        <Fade>
                          <form onSubmit={handleCheckDomain}>
                            <div dir="rtl">
                              שימו לב, על הדומיין להכיל אותיות באנגלית בלבד, עם
                              הסיומות - com / .net / .org / .link.
                              <br></br>
                              לדוגמה - demosite.com
                            </div>
                            <ButtonSearchDomain
                              style={{
                                height: "4vh",
                              }}
                              type="submit"
                            >
                              חפש
                            </ButtonSearchDomain>
                            <InputSearchDomain
                              dir="rtl"
                              placeholder="הזן את שם הדומיין"
                              onChange={(event) =>
                                setNameDomain(event.target.value)
                              }
                            />
                          </form>
                        </Fade>
                      )}
                      <div
                        style={{
                          marginTop: "1rem",
                        }}
                      >
                        {nameAvailable && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "right",
                            }}
                          >
                            <Fade>
                              <p
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "right",
                                  width: "40%",
                                }}
                              >
                                <ButtonsDomain
                                  onClick={() => setPrice(true)}
                                  style={{
                                    marginRight: "0.5rem",
                                    height: "3.5vh",
                                    justifyContent: "space-evenly",
                                    width: "9vw",
                                  }}
                                >
                                  <BsCartPlusFill />
                                  הוסף להזמנה
                                </ButtonsDomain>
                                <FcCheckmark
                                  style={{
                                    marginRight: "0.5rem",
                                  }}
                                />
                                שם הדומיין פנוי
                              </p>
                            </Fade>
                          </div>
                        )}
                        {nameNotAvailable && (
                          <Fade>
                            <p
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "right",
                              }}
                            >
                              <ImSad2
                                size={22}
                                style={{
                                  marginRight: "0.5rem",
                                  color: "rgb(201, 211, 0)",
                                }}
                              />
                              שם הדומיין כבר קיים
                            </p>
                          </Fade>
                        )}

                        {error && (
                          <Fade>
                            <p
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "right",
                              }}
                            >
                              <ImWarning
                                style={{
                                  marginRight: "0.5rem",
                                  color: "rgb(255, 174, 0)",
                                }}
                              />
                              הוזן דומיין שאינו חוקי
                            </p>
                          </Fade>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "42vh",
                  backgroundColor: "aliceblue",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "aliceblue",
                    width: "50%",
                    height: "40vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <h2
                    style={{
                      color: "rgba(0, 50, 99, 0.9)",
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

                  <form
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "75%",
                      height: "30vh",
                      flexDirection: "column",
                      borderRadius: "5px",
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
                        style={{
                          width: "100%",
                          height: "5vh",
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
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      <InputCard
                        style={{
                          width: "100%",
                          height: "5vh",
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
                        style={{
                          width: "50%",
                          height: "5vh",
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
                        style={{
                          width: "50%",
                          height: "5vh",
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
                    <ButtonCard doNotWontDomain={doNotWontDomain}>
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
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "38vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "0 auto",
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
                      fontSize: "1.1rem",
                      textAlign: "center",
                      width: "80%",
                      fontWeight: "bold",
                    }}
                    dir="rtl"
                  >
                    לאחר ביצוע התשלום תקבלו הודעת SMS לטלפון הנייד שלכם עם כתובת
                    האתר שרכשתם, הודעה זו תגיע לכם לנייד עד 60 דק' מרגע הרכישה,
                    חשוב שתשימו לב שהזנתם מספר תקין. במידה ומסיבה כלשהי לא
                    קיבלתם הודעה זו ניתן ליצור איתנו קשר ונטפל בזאת בהקדם.
                  </p>
                  <div
                    style={{
                      height: "5vh",

                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=972507727731"
                      target="_blank"
                    >
                      <WhatsappButton>
                        <MdPhone color="rgba(0, 50, 99, 0.9)" size={30} />
                      </WhatsappButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      )}
    </>
  );
};

export default MessageDetails;
