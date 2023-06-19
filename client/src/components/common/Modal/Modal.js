import Button from "../Button/Button";
import styles from "./Modal.module.scss";
import { RiCloseFill } from "react-icons/ri";
const Modal = ({ open, onClose, onRemove }) => {
  if (!open) return null;
  return (
    <div className={styles.modal}>
      <RiCloseFill className={styles.icon} onClick={onClose} />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Are you sure that you want remove your rate?</p>
        </div>
        <div className={styles.buttons}>
          <Button name="yes" click={onRemove} />
          <Button name="no" click={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
