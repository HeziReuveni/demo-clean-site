import React, { useState, useEffect } from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import "react-credit-cards/es/styles-compiled.css";
import { Fade, Zoom } from "react-reveal";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { FcApproval, FcCheckmark } from "react-icons/fc";
import { BsCartPlusFill } from "react-icons/bs";
import { ImSad2 } from "react-icons/im";
import { ImWarning } from "react-icons/im";
import { FiX } from "react-icons/fi";
import { BsFillCreditCardFill } from "react-icons/bs";
import {
  ContainerMessage,
  FontStyleMessage,
  ButtonsStyleMessage,
  ButtonsDomain2,
  ButtonsDomain,
  InputSearchDomain,
  ButtonSearchDomain,
  ContentFirstDisplay,
  ContentSecondDisplay,
} from "./styles";
import Axios from "axios";
import NextMessageMobileDetails from "./NextMessageMobileDetails";

const MessageMobileDetails = ({
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
  const [notPrice, setNotPrice] = useState(null);
  const [nextPage, setNextPage] = useState(true);

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
      });
  };

  useEffect(() => {
    if (statusName === "AVAILABLE") {
      setNameNameAvailable(true);
      setNameNotNameAvailable(false);
      setError(false);
    }
    if (statusName === "UNAVAILABLE") {
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
            width: "100%",
            height: "100vh",
            background: "none",
          }}
        >
          <Zoom top>
            <ContentSecondDisplay nextPage={nextPage}>
              <NextMessageMobileDetails
                price={price}
                notPrice={notPrice}
                setNextPage={setNextPage}
                setThisWindowIsOpen={setThisWindowIsOpen}
              />
            </ContentSecondDisplay>

            <ContentFirstDisplay nextPage={nextPage}>
              <div>
                <div
                  style={{
                    textAlign: "left",
                  }}
                >
                  <FiX
                    style={{
                      marginTop: "2rem",
                      marginLeft: "1rem",
                    }}
                    color="aliceblue"
                    onClick={() => {
                      setThisWindowIsOpen(false);
                      setOpenWindowIfIsDetails(false);
                      setDisplayButtonsFixed(true);
                    }}
                  />
                </div>
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
                  fontSize: "1rem",
                  textAlign: "right",
                  marginTop: "1rem",
                  width: "95%",
                }}
              >
                <p dir="rtl">- אתר סטנדרט בעלות חד פעמית של 499 ₪</p>
                <br></br>
                <p dir="rtl">- עלות שנתית עבור איחסון האתר על סך 188 ₪</p>
                <br></br>
                <p dir="rtl">
                  - האם תרצו דומיין? (שם ייחודי לאתר שלכם) בעלות שנתית של 70 ₪
                </p>
                <br></br>

                <div
                  style={{
                    textAlign: "center",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <ButtonsDomain2
                    style={{
                      width: "30%",
                    }}
                    doNotWontDomain={doNotWontDomain}
                    onClick={() => {
                      setWontDomain(false);
                      setDoNotWontDomain(true);
                      setNameNotNameAvailable(false);
                      setNameNameAvailable(false);
                      setNotPrice(true);
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
                    style={{
                      width: "30%",
                    }}
                    wontDomain={wontDomain}
                    onClick={() => {
                      setDoNotWontDomain(false);
                      setNotPrice(false);
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
                <br></br>

                {wontDomain && (
                  <Fade>
                    <form
                      style={{
                        textAlign: "center",
                        width: "100vw",
                      }}
                      onSubmit={handleCheckDomain}
                    >
                      <div
                        style={{
                          padding: "1rem",
                        }}
                        dir="rtl"
                      >
                        שימו לב, על הדומיין להכיל אותיות באנגלית בלבד, עם
                        הסיומות - com / .net / .org / .link.
                        <br></br>
                        לדוגמה - demosite.com
                      </div>
                      <ButtonSearchDomain
                        style={{
                          width: "20%",
                        }}
                        type="submit"
                      >
                        חפש
                      </ButtonSearchDomain>
                      <InputSearchDomain
                        dir="rtl"
                        placeholder="הזן את שם הדומיין"
                        onChange={(event) => setNameDomain(event.target.value)}
                      />
                    </form>
                  </Fade>
                )}
                <div
                  style={{
                    marginTop: "1rem",
                    width: "100vw",
                    textAlign: "center",

                    height: "5vh",
                  }}
                >
                  {error && (
                    <Fade>
                      <p
                        style={{
                          fontSize: "1.3rem",
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
                  {nameNotAvailable && (
                    <Fade>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.3rem",
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
                  {nameAvailable && (
                    <Fade>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",

                          justifyContent: "space-evenly",
                          flexDirection: "row",
                          width: "100%",
                          height: "6vh",
                        }}
                      >
                        <ButtonsDomain
                          onClick={() => setPrice(true)}
                          style={{
                            justifyContent: "space-evenly",
                            fontSize: "1.1rem",
                          }}
                        >
                          <BsCartPlusFill />
                          הוסף להזמנה
                        </ButtonsDomain>
                        <div
                          style={{
                            fontSize: "1.3rem",
                          }}
                        >
                          <FcCheckmark
                            style={{
                              marginRight: "1rem",
                            }}
                          />
                          שם הדומיין פנוי
                        </div>
                      </div>
                    </Fade>
                  )}

                  <br></br>
                  {price && (
                    <Zoom>
                      <div
                        style={{
                          width: "80%",
                          margin: "0 auto",
                        }}
                        dir="rtl"
                      >
                        <p
                          style={{
                            border: "1px solid aliceblue",
                            padding: "1.5rem",
                            fontSize: "15px",
                            backgroundColor: "rgba(0, 50, 99, 0.6)",

                            color: "aliceblue",
                            fontWeight: "bold",
                          }}
                        >
                          סך הכל לתשלום - 757 ₪
                        </p>
                        <br></br>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ButtonsDomain
                            onClick={() => setNextPage(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                              padding: "10px",
                              width: "60%",
                            }}
                          >
                            המשך לתשלום
                            <BsFillCreditCardFill />
                          </ButtonsDomain>
                        </div>
                      </div>
                    </Zoom>
                  )}
                  {notPrice && (
                    <Zoom>
                      <div
                        style={{
                          width: "80%",
                          margin: "0 auto",
                        }}
                        dir="rtl"
                      >
                        <p
                          style={{
                            border: "1px solid aliceblue",
                            padding: "1.5rem",
                            fontSize: "15px",
                            backgroundColor: "rgba(0, 50, 99, 0.6)",

                            color: "aliceblue",
                            fontWeight: "bold",
                          }}
                        >
                          סך הכל לתשלום - 670 ₪
                        </p>
                        <br></br>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ButtonsDomain
                            onClick={() => setNextPage(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                              padding: "10px",
                              width: "60%",
                            }}
                          >
                            המשך לתשלום
                            <BsFillCreditCardFill />
                          </ButtonsDomain>
                        </div>
                      </div>
                    </Zoom>
                  )}
                </div>
              </div>
            </ContentFirstDisplay>
          </Zoom>
        </div>
      )}
    </>
  );
};

export default MessageMobileDetails;
