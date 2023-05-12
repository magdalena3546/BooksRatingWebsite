import Button from "../../common/Button.js/Button";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <img
          className={styles.image}
          alt="women is sitting on the window and reading books"
          src="/images/women.png"></img>
        <div className={styles.text}>
          <h1>Welcome</h1>
          <h2>Join to us!</h2>
          <Button link="/login" name="sing in" />
          <Button link="/login" name="sing up" />
        </div>
      </div>
    </div>
  );
};
export default Header;
