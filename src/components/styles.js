import styled from "styled-components";

export const ContentHero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 4.5rem;
  color: aliceblue;
  letter-spacing: 2px;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  min-height: 10vh;
  min-width: 80vh;
  width: auto;
  height: auto;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border-radius: 50px 10px 50px 10px;
  /* border: 2px solid rgb(0, 98, 172); */
  color: rgb(0, 98, 172);
  background-color: rgba(255, 255, 255, 0.8);
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    min-width: 80vw;
    min-height: 20vh;
    font-size: 2rem;
  }
`;

export const HeroContent = styled.div`
  height: 100vh;
  width: 100%;
`;

export const ButtonFixed = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100px;
  height: 100px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: aliceblue;
  background: linear-gradient(rgba(80, 80, 80) 0%, rgb(60, 60, 60) 100%);
  box-shadow: 12px 12px 24px rgb(60, 60, 60, 0.64);
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 1rem;
  }

  &:hover,
  &:focus {
    transform: translateY(-6px);
    &::after {
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* animation: ring 1.5s infinite; */
    }
  }
`;

export const ButtonPay = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  width: 100px;
  height: 100px;
  padding: 10px;
  border: none;
  letter-spacing: 1.5px;
  background: linear-gradient(90deg, rgb(16, 158, 0) 0%, rgb(0, 109, 0) 100%);
  box-shadow: 12px 12px 24px rgb(0, 109, 0, 0.64);
  font-size: 1.2rem;
  border-radius: 50%;
  font-weight: 700;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: aliceblue;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 1rem;
  }
  &:hover {
    transform: translateY(-6px);
  }
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid rgb(18, 176, 0);
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s 5;
    animation-fill-mode: forwards;
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`;

export const ButtonGallery = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: none;
  letter-spacing: 1.5px;
  background: linear-gradient(rgba(80, 80, 80) 0%, rgb(60, 60, 60) 100%);
  box-shadow: 12px 12px 24px rgb(60, 60, 60, 0.64);
  font-size: 1rem;
  border-radius: 50%;
  font-weight: 700;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: aliceblue;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 30%;
  }
  &:hover,
  &:focus {
    transform: translateY(-6px);
    &::after {
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 100%;
      /* border: ${(props) =>
        props.openButton ? "none" : "4px solid rgb(17, 128, 255)"}; */
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ring 1.5s infinite;
    }
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`;

export const ButtonUpdateGallery = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: none;
  border: none;
  color: aliceblue;
  width: 16vw;
  height: 6vh;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  letter-spacing: 1px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  &:hover {
    background-color: rgb(250, 250, 250, 0.1);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;

export const ButtonsImagesGallery = styled(ButtonUpdateGallery)`
  width: 3vw;
  height: 5vh;
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  @media screen and (max-width: 768px) {
    width: 12vw;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 4rem;
  justify-content: space-evenly;
  height: 35vh;
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 80%;
    padding: 0;
    height: 30vh;
  }
`;

export const ContainerImageGallery = styled.div`
  width: 90%;
  max-height: 200vh;
  padding-left: 6rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-y: auto;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 90%;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow-x: auto;
  }
`;

export const ImageItem = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const MessageToMobileNeedRight = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30vh;
    height: 20vh;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const ContainerMessageDetails = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(50, 50, 50, 0.7);
  backdrop-filter: blur(30px);
  z-index: 98;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 45vh;
  width: 55%;
  box-shadow: 0px 0px 15px rgba(50, 50, 50, 0.5);
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const FontStyleMessage = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 55%;
  color: aliceblue;
  height: 65%;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ButtonsStyleMessage = styled.button`
  background-color: rgba(0, 50, 99, 0.9);
  border: none;
  width: 30%;
  height: 6vh;
  border-radius: 5px;
  color: aliceblue;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 45%;
    font-size: 0.9rem;
  }
`;

export const ButtonsDomain = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 2rem;
  background: ${(props) =>
    props.wontDomain ? "rgba(255, 255, 255, 0.1)" : "none"};
  border: ${(props) => (props.wontDomain ? "none" : "1px solid aliceblue")};
  color: aliceblue;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ButtonsDomain2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 2rem;
  background: ${(props) =>
    props.doNotWontDomain ? "rgba(255, 255, 255, 0.1)" : "none"};
  border: ${(props) =>
    props.doNotWontDomain ? "none" : "1px solid aliceblue"};
  color: aliceblue;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const InputSearchDomain = styled.input`
  width: 40%;
  height: 4vh;
  border: 1px solid aliceblue;
  background: none;
  padding: 0.5rem;
  margin-top: 1rem;
  outline: none;
  color: aliceblue;
  border-radius: 0px 5px 5px 0px;
  font-style: italic;
  font-size: 1rem;
  &::placeholder {
    color: aliceblue;
    letter-spacing: 0.05rem;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 2rem;
  }
`;

export const ButtonSearchDomain = styled.button`
  height: 2rem;
  border: 1px solid aliceblue;
  width: 10%;
  border-radius: 5px 0px 0px 5px;
  background: none;
  font-style: italic;
  color: aliceblue;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    letter-spacing: 0.2rem;
  }
`;

export const InputCard = styled.input`
  transition: all 0.3s ease-in-out;
  &::placeholder {
    color: rgba(0, 50, 99, 0.9);
    font-style: italic;
    letter-spacing: 0.01rem;
    font-weight: bold;
  }
  &:focus {
    font-size: 0.9rem;
    background-color: rgba(0, 50, 99, 0.1);
  }
`;

export const ButtonCard = styled.button`
  background-color: rgba(0, 50, 99, 0.9);
  font-size: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: aliceblue;
  width: 100%;
  margin-top: 1rem;
  height: 5vh;
  border-radius: 5px;
  border: none;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    letter-spacing: 0.2rem;
  }
`;

export const InputPhone = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 5vh;
  text-align: right;
  padding: 0.5rem;
  outline: none;
  border: 1.5px solid rgba(0, 50, 99, 0.9);
  &::placeholder {
    color: rgba(0, 50, 99, 0.9);
    font-style: italic;
    letter-spacing: 0.01rem;
    font-weight: bold;
  }
  &:focus {
    background-color: rgba(0, 50, 99, 0.1);
  }
`;

export const WhatsappButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: rgba(0, 50, 99, 0.1);
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 50, 99, 0.9);
  }
`;

export const ContentFirstDisplay = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    width: 100%;
    height: 100vh;
    max-height: 120vh;
    background-color: rgba(0, 50, 99, 0.6);
    text-align: center;
    display: ${(props) => (props.nextPage ? "block" : "none")};
  }
`;

export const ContentSecondDisplay = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
    text-align: center;
    display: ${(props) => (props.nextPage ? "none" : "block")};
  }
`;
