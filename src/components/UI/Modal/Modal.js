import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import GalleryContext from "../../../store/gallery-context";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

// get root element
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const ctx = useContext(GalleryContext);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onClose={props.onClose}
          num={ctx.currentImage}
          length={ctx.images.length}
          onNext={ctx.nextImgHandler}
          onBack={ctx.backImgHandler}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay img={props.image}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
