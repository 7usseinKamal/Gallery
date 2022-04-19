import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  let numberOverTotalImages = `Image ${props.num}/${props.length}`;

  return (
    <div className={classes.backdrop} onClick={props.onClose} id="backdrop">
      <button type="button" onClick={props.onBack}>
        <MdArrowBackIos />
      </button>
      <div className={classes.length}>{numberOverTotalImages}</div>
      <button type="button" onClick={props.onNext}>
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default Backdrop;
