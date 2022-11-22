import React, { useContext } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { UserContext } from "./context/context";

const Gallery = () => {
  const [images, setImages] = React.useState(null);
  const { listToDisplay } = useContext(UserContext);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      setImages(
        listToDisplay.map((url) => ({
          original: url,
          thumbnail: url,
        }))
      );
    };

    call();
    return () => (shouldCancel = true);
  }, [listToDisplay]);

  return images ? (
    // <div style={{ width: "500px", margin: "0 auto" }}>
    <ImageGallery items={images} />
  ) : // </div>
  null;
};

export default Gallery;
