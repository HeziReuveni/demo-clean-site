import React, { createContext, useState } from "react";
import imgUrl1 from "../images/hero1.jpg";
// import imgUrl2 from "../images/hero2.jpg";
import imgUrl3 from "../images/hero3.jpg";
import imgUrl4 from "../images/hero4.jpg";
import imgUrl5 from "../images/hero5.jpg";
import imgUrl6 from "../images/hero6.jpg";
import imgUrl7 from "../images/hero7.jpg";
import imgUrl8 from "../images/hero8.jpg";
import imgUrl12 from "../images/hero12.jpg";
import imgUrl13 from "../images/hero13.jpg";
import imgUrl14 from "../images/hero14.jpg";
import imgUrl16 from "../images/hero16.jpg";
import imgUrl17 from "../images/hero17.jpg";
import imgUrl18 from "../images/hero18.jpg";
import imgUrl19 from "../images/hero19.jpg";
import imgUrl20 from "../images/hero20.jpg";
import imgUrl21 from "../images/hero21.jpg";
import imgUrl22 from "../images/hero22.jpg";
import imgUrl23 from "../images/hero23.jpg";
import imgUrl24 from "../images/hero24.jpg";
import imgUrl25 from "../images/hero25.jpg";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const listImages = [
    imgUrl1,

    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    imgUrl7,
    imgUrl8,
    imgUrl12,
    imgUrl13,
    imgUrl14,

    imgUrl16,
    imgUrl17,
    imgUrl18,
    imgUrl19,
    imgUrl20,
    imgUrl21,
    imgUrl22,
    imgUrl23,
    imgUrl24,
    imgUrl25,
  ];

  const [listToDisplay, setListToDisplay] = useState(listImages);
  const [openButton, setOpenButton] = useState(false);
  const [imagesListToUpdate, setImagesListToUpdate] = useState([]);
  const [namesImagesList, setNamesImagesList] = useState([]);
  const [state, setState] = useState({
    title: "Home & Garden Services",
    about:
      "ספרו על עצמכם, על העסק שלכם. מומלץ לרשום על וותק החברה במידה וישנו, המלצות מלקוחות, ואת האהבה שלכם למקצוע ולעסק.",
    email: "QuickSite@gmail.com",
    whatsapp: "050-1234567",
    facebookSrc: "https://www.facebook.com/QuickSite",
    services: "רשמו כאן את השירותים שלכם בחברה, ועל הצוות המקצועי שלכם",
  });

  return (
    <UserContext.Provider
      value={{
        state,
        setState,
        setOpenButton,
        openButton,
        setImagesListToUpdate,
        imagesListToUpdate,
        listToDisplay,
        setListToDisplay,
        setNamesImagesList,
        namesImagesList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
