import styles from "./Footer.module.scss";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <div className={styles.iconMedia}>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className={styles.iconMedia}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <div className={styles.text}>
        <p>Copyright &copy; BookFreak 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
