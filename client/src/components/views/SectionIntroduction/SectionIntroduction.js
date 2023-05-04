import styles from "./SectionIntroduction.module.scss";
import Button from "../../common/Button.js/Button";

const SectionIntroduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.planet}></div>
      <div className={styles.space}></div>
      <div className={styles.rocket}></div>
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <h3>Let's go!</h3>
          <p>Join to us and discover new Worlds!</p>
          <Button name={"start"} />
        </div>
        <img
          className={styles.image}
          alt="women is laying on the floor and reading books"
          src="/images/womenWithBook.png"></img>
      </div>
    </div>
  );
};

export default SectionIntroduction;
