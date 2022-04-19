import React, { useContext, useEffect } from "react";
import GalleryContext from "../../store/gallery-context";
import LoadingSpinner from "../UI/Loading/LoadingSpinner";
import Gallery from "../Gallery/Gallery";
import Modal from "../UI/Modal/Modal";

import classes from "./Insert.module.css";

const Insert = () => {
  const ctx = useContext(GalleryContext);

  useEffect(() => {
    ctx.fetchImagesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // loading when data not fetching from API
  let putData = <LoadingSpinner />;

  // check if we get data override putData variable
  if (ctx.images.length) {
    putData = ctx.images.map((image) => {
      return <Gallery key={image.uuid} image={image} />;
    });
  }

  return (
    <div className={classes.container}>
      {putData}
      {ctx.modal && (
        <Modal image={ctx.singleImg} onClose={ctx.closeModalHandler} />
      )}
    </div>
  );
};

export default Insert;
