import React, { useContext } from "react";
import { MdZoomOutMap } from "react-icons/md";
import GalleryContext from "../../store/gallery-context";

import classes from "./Gallery.module.css";

const Gallery = ({ image }) => {
  const ctx = useContext(GalleryContext);

  return (
    <div className={classes.container}>
      <div
        className={classes.overlay}
        id={image.uuid}
        onClick={ctx.getImageHandler.bind(null, image.uuid)}
      >
        <MdZoomOutMap />
      </div>
      <img src={image.url} alt={image.name} />
    </div>
  );
};

export default Gallery;
