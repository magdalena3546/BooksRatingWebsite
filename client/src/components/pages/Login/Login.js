import styles from "./Login.module.scss";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <div className={styles.wrapper}>
    <div className={styles.box}>
      <div className={styles.btnGoogle} onClick={google}>
        <FontAwesomeIcon className={styles.logoGoogle} icon={faGooglePlusG} />
        <p>Google</p>
      </div>
    </div>
    </div>
  );
};

export default Login;
