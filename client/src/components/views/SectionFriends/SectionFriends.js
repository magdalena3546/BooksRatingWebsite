import Button from "../../common/Button.js/Button";
import styles from "./SectionFriends.module.scss";

const SectionFriends = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.waveTop}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,256L80,261.3C160,267,320,277,480,256C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <div className={styles.imageFriends}></div>
      <div className={styles.text}>
        <h3>Meet other book lovers!</h3>
        <p>Share your opinion with others and make new friends</p>
      </div>
      <svg
        className={styles.waveBottom}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,256L80,261.3C160,267,320,277,480,256C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className={styles.coffeePart}>
        <div className={styles.imageCoffee}>
          <div className={styles.words}>
            <h4 className={styles.white}>Just grab a coffee and gooo!</h4>
            <Button name={"gooo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFriends;
