import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <Link
      onClick={props.click}
      to={props.link}
      className={styles.btn}
      target={props.target}>
      {props.name}
    </Link>
  );
};

export default Button;
