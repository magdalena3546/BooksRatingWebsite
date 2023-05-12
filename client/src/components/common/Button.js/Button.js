import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <Link to={props.link} className={styles.btn}>
      {props.name}
    </Link>
  );
};

export default Button;
