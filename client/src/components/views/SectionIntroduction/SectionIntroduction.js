import styles from "./SectionIntroduction.module.scss";
import Button from "../../common/Button.js/Button";

const SectionIntroduction = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="#F9F5E7"
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,106.7C384,85,480,75,576,112C672,149,768,235,864,229.3C960,224,1056,128,1152,112C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
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
