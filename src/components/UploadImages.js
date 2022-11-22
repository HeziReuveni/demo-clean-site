import React, { useContext, useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import gif from "../components/images/needRight.gif";
import { UserContext } from "./context/context";
import {
  ButtonUpdateGallery,
  ButtonsImagesGallery,
  ContainerButtons,
  ContainerImageGallery,
  ImageItem,
  MessageToMobileNeedRight,
} from "./styles";
import { RiImageAddFill } from "react-icons/ri";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { CgEye } from "react-icons/cg";
import { HiSwitchHorizontal } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { Fade, Zoom } from "react-reveal";
import Axios from "axios";

export function UploadImages({
  setImagesListToUpdate,
  imagesListToUpdate,
  setOpenGallery,
}) {
  const maxNumber = 20;
  const { setListToDisplay } = useContext(UserContext);
  const [messageNeedRight, setMessageNeedRight] = useState(false);
  const [replaceList, seReplaceList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (imagesListToUpdate.length === 2) {
      setTimeout(() => {
        setMessageNeedRight(true);
      }, 500);
      setTimeout(() => {
        setMessageNeedRight(false);
      }, 4000);
    } else {
      setMessageNeedRight(false);
    }
  }, [imagesListToUpdate]);

  const onChange = (imageList) => {
    setImagesListToUpdate(imageList);
    seReplaceList(imageList);
  };

  const handleReplaceList = () => {
    const thisListToDisplay = [];
    for (let i = 0; i < replaceList.length; i++) {
      thisListToDisplay.push(replaceList[i].data_url);
    }
    setListToDisplay(thisListToDisplay);
    setOpenGallery(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ImageUploading
        multiple
        value={imagesListToUpdate}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              background: "none",
            }}
          >
            {messageNeedRight && (
              <MessageToMobileNeedRight>
                <Zoom>
                  <img src={gif} alt="gif" width={200} />
                </Zoom>
              </MessageToMobileNeedRight>
            )}
            <ContainerButtons>
              <Fade right>
                <ButtonUpdateGallery
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <RiImageAddFill size={22} />
                  הוסף תמונה
                </ButtonUpdateGallery>
              </Fade>
              <Fade right delay={200}>
                <ButtonUpdateGallery onClick={onImageRemoveAll}>
                  <MdOutlineDeleteSweep size={22} />
                  מחק את כל התמונות
                </ButtonUpdateGallery>
              </Fade>
              <Fade right delay={300}>
                <ButtonUpdateGallery onClick={handleReplaceList}>
                  <CgEye size={22} />
                  הצג תמונות בגלריה
                </ButtonUpdateGallery>
              </Fade>
            </ContainerButtons>
            <ContainerImageGallery>
              {imagesListToUpdate.map((image, index) => (
                <Zoom>
                  <div key={index}>
                    <ImageItem
                      style={{
                        borderRadius: "5px",
                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
                      }}
                      src={image["data_url"]}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "91%",
                      }}
                    >
                      <ButtonsImagesGallery
                        onClick={() => onImageUpdate(index)}
                      >
                        <HiSwitchHorizontal size={22} />
                      </ButtonsImagesGallery>
                      <ButtonsImagesGallery
                        onClick={() => onImageRemove(index)}
                      >
                        <AiOutlineDelete size={22} />
                      </ButtonsImagesGallery>
                    </div>
                  </div>
                </Zoom>
              ))}
            </ContainerImageGallery>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default UploadImages;
