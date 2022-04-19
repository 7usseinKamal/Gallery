import React, { useState, useRef } from "react";
import GalleryContext from "./gallery-context";

export const GalleryProvider = (props) => {
  // images data that we fetch from API
  const [images, setImages] = useState([]);
  // one images by getting it when click
  const [singleImg, setSingleImg] = useState({});
  // modal state to control show or hide modal
  const [modal, setModal] = useState(false);
  // ref to control slide number
  const slideRef = useRef(0);

  // fetch images from API function
  const fetchImagesHandler = async () => {
    const response = await fetch(
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
    );

    /* 
    -- if we work in real project we will write this lines of code if fetch failed to show error message
    and not only this we will need some code 

    if (!response.ok) {
      throw new Error("Fetch Failed");
    } 
    */

    const data = await response.json();
    setImages(data);
  };

  // to show modal and get gallery object on click the image
  const getImageHandler = (id) => {
    setModal(true);
    slideRef.current = images.findIndex((image) => image.uuid === id);
    setSingleImg(images[slideRef.current]);
  };

  // next slide
  const nextImgHandler = () => {
    /*
      why (-2) because if we click next or previous button will get to us... 
      previous image index the was aleady show
    */
    if (slideRef.current > images.length - 2) {
      slideRef.current = 0;
    } else {
      slideRef.current++;
    }

    setSingleImg(images[slideRef.current]);
  };

  // back slide
  const backImgHandler = () => {
    if (slideRef.current < 1) {
      slideRef.current = images.length - 1;
    } else {
      slideRef.current--;
    }

    setSingleImg(images[slideRef.current]);
  };

  // close modal
  const closeModalHandler = (e) => {
    console.log(e.target);
    // check if we hit the backdrop itself not next & previous buttons
    if (e.target.id === "backdrop") {
      setModal(false);
    }
  };

  const galleryContext = {
    images: images,
    singleImg,
    modal,
    // number of slide of cuurent image
    currentImage: slideRef.current + 1,
    fetchImagesHandler,
    getImageHandler,
    closeModalHandler,
    nextImgHandler,
    backImgHandler,
  };

  return (
    <GalleryContext.Provider value={galleryContext}>
      {props.children}
    </GalleryContext.Provider>
  );
};
