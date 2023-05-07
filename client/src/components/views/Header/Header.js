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
    </div>
  );
};
export default Header;
