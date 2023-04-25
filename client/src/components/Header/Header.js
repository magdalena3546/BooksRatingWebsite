import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={styles.banner}>
        <img
          className={styles.image}
          alt="women is sitting on the window and reading books"
          src="/images/women.png"></img>
          <div className={styles.text}>
            <h1>Welcome! Join to our community</h1>
          </div>
      </div>
    </div>
  );
};
export default Header;
