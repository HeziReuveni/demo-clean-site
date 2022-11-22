import styled, { keyframes } from "styled-components";

const titleFade = keyframes`
from{
  opacity: 0;
  transform: translateX(50px);
}
to{
  opacity: 1;
  transform: translateX(0px);
}

`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(30px);
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  @media screen and (max-width: 768px) {
    overflow-y: auto;
    z-index: 999;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 45rem;
  max-height: 95vh;
  padding: 1rem;
  animation: ${titleFade} 1s ease-in-out;
  background: linear-gradient(rgba(80, 80, 80) 0%, rgb(60, 60, 60) 100%);
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: scroll;
    max-height: unset;
    max-width: 100vw;
    /* border-radius: none; */
  }
`;

export const Textarea = styled.textarea`
  width: 80%;
  min-height: 6rem;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  resize: none;
  font-size: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
  background-color: white;
  border: none;
  color: rgb(108, 108, 108);
  &:focus {
    border: 1px solid #00bcd4;
    outline: none;
  }
`;

export const InputForm = styled.input`
  width: 80%;
  border: none;
  height: 3rem;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  outline: none;
  background-color: white;
  color: black;
  &:focus {
    border: 1px solid #00bcd4;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  min-height: 1rem;
  letter-spacing: 2px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: aliceblue;
  &:focus {
    border: 1px solid #00bcd4;
    outline: none;
  }
`;

export const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 3rem;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  outline: none;
  letter-spacing: 3px;
  background: none;
  border: 1px solid aliceblue;
  color: aliceblue;
  transition: 0.3s ease-in-out;
  &:hover {
    letter-spacing: 7px;
    background-color: rgb(0, 0, 0, 0.2);
  }
`;
