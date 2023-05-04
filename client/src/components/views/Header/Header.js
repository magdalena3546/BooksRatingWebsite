import Button from "../../common/Button.js/Button";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <Navbar />
        <img
          className={styles.image}
          alt="women is sitting on the window and reading books"
          src="/images/women.png"></img>
        <div className={styles.text}>
          <h1>Welcome</h1>
          <h2>Join to us!</h2>
          <Button name={"sing in"} />
          <Button name={"sing up"} />
        </div>
      </div>
      <svg
        className={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="#F3DEBA"
          fill-opacity="1"
          d="M0,192L34.3,202.7C68.6,213,137,235,206,218.7C274.3,203,343,149,411,128C480,107,549,117,617,144C685.7,171,754,213,823,234.7C891.4,256,960,256,1029,240C1097.1,224,1166,192,1234,176C1302.9,160,1371,160,1406,160L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
    </div>
  );
};
export default Header;
