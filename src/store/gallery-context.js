import React from "react";

const GalleryContext = React.createContext({
  images: [],
  singleImg: {},
  modal: false,
  currentImage: 0,
  fetchImagesHandler: async () => {},
  getImageHandler: (id) => {},
  closeModalHandler: () => {},
  nextImgHandler: () => {},
  backImgHandler: () => {},
});

export default GalleryContext;
