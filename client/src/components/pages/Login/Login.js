import styles from "./Login.module.scss";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API_URL } from "../../../config";
const Login = () => {
  const google = () => {
    window.open(`${API_URL}/auth/google`, "_self");
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
