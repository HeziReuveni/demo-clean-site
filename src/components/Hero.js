import React, { useState, useEffect, useContext } from "react";
import { ButtonFixed, ButtonPay, ButtonGallery } from "./styles";
import { ContentHero, HeroContent, ContainerMessageDetails } from "./styles";
import { BsStars } from "react-icons/bs";
import { Zoom, Bounce } from "react-reveal";
import gif from "./images/arrow-down.gif";
import imgUrl2 from "./images/hero16.jpg";
import imgUrl3 from "./images/hero17.jpg";
import imgUrl4 from "./images/hero18.jpg";
import imgUrl5 from "./images/hero19.jpg";
import imgUrl6 from "./images/hero20.jpg";
import imgUrl7 from "./images/hero21.jpg";
import imgUrl8 from "./images/hero22.jpg";
import imgUrl9 from "./images/hero23.jpg";
import imgUrl15 from "./images/hero24.jpg";

import Form from "./context/Form";
import { UserContext } from "./context/context";
import { BsFileText } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { ImImages } from "react-icons/im";
import UploadImages from "./UploadImages";
import Axios from "axios";
import MessageDetails from "./MessageDetails";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import MessageMobileDetails from "./MessageMobileDetails";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WaveBorder from "../WaveBorder";

const Hero = () => {
  const [openForm, setOpenForm] = useState(false);
  const [displayButtonsFixed, setDisplayButtonsFixed] = useState(true);
  const [openWindowIfIsDetails, setOpenWindowIfIsDetails] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const {
    state,
    openButton,
    setImagesListToUpdate,
    imagesListToUpdate,
    namesImagesList,
    setNamesImagesList,
  } = useContext(UserContext);

  const handleSendDetails = async () => {
    const formData = new FormData();
    const list = [];
    for (let i = 0; i < imagesListToUpdate.length; i++) {
      formData.append(
        imagesListToUpdate[i].file.name,
        imagesListToUpdate[i].file
      );
      list.push(imagesListToUpdate[i].file.name);
    }
    setNamesImagesList(list);

    formData.append("title", state.title);
    formData.append("about", state.about);
    formData.append("email", state.email);
    formData.append("whatsapp", state.whatsapp);
    formData.append("facebookSrc", state.facebookSrc);
    formData.append("services", state.services);

    try {
      await Axios.post("http://localhost:4000/images", formData);
      setOpenForm(false);
    } catch (error) {}
  };

  const listImages = [
    imgUrl2,
    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    imgUrl7,
    imgUrl8,
    imgUrl9,
    imgUrl15,
  ];

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [backgroundImage, setBackgroundImage] = useState(imagesListToUpdate);
  useEffect(() => {
    let urlBackground = listImages[Math.floor(Math.random() * 9)];
    if (urlBackground) {
      setBackgroundImage(urlBackground);
    }
  }, []);

  return (
    <HeroContent className="hero">
      <div
        style={{
          position: "absolute",
          zIndex: "3",
          width: "100%",
          height: "100vh",
          background: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
      >
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          animationHandler={"fade"}
          transitionTime={2000}
        >
          {listImages.map((item) => (
            <div
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            ></div>
          ))}
        </Carousel>
      </div>

      {openGallery && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(50,50,50,0.7)",
            backdropFilter: "blur(30px)",
            zIndex: "98",
            color: "aliceblue",
          }}
        >
          <UploadImages
            setOpenGallery={setOpenGallery}
            imagesListToUpdate={imagesListToUpdate}
            setImagesListToUpdate={setImagesListToUpdate}
          />
        </div>
      )}
      {openWindowIfIsDetails && (
        <ContainerMessageDetails>
          {isDesktopOrLaptop && (
            <MessageDetails
              setOpenWindowIfIsDetails={setOpenWindowIfIsDetails}
              setDisplayButtonsFixed={setDisplayButtonsFixed}
            />
          )}
          {isTabletOrMobile && (
            <MessageMobileDetails
              setOpenWindowIfIsDetails={setOpenWindowIfIsDetails}
              setDisplayButtonsFixed={setDisplayButtonsFixed}
            />
          )}
        </ContainerMessageDetails>
      )}
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Bounce top>
          <ContentHero>
            <Zoom>
              <BsStars />

              <p
                dir="rtl"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                }}
              >
                {state.title}
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  כל שירותי הנקיון והגינון במקום אחד.
                </div>
              </p>
            </Zoom>
          </ContentHero>
        </Bounce>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: "3",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          backgroundColor: "rgb(0, 98, 172,0.6)",
          paddingRight: "0.3rem",
          paddingTop: "0.4rem",
          borderRadius: "100px",
          height: "5rem",
          width: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            cursor: "pointer",
          }}
          to="about"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          <img src={gif} alt="arrow" width="100px" />
        </Link>
      </div>
    </HeroContent>
  );
};

export default Hero;
