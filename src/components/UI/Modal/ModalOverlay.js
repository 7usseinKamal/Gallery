import classes from "./ModalOverlay.module.css";

const ModalOverlay = ({ img }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <img src={img.url} alt={img.name} />
        <h3>{img.name}</h3>
      </div>
    </div>
  );
};

export default ModalOverlay;
