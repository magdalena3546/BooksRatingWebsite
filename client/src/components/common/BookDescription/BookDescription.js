import styles from "./BookDescription.module.scss";
import Button from "../Button/Button.js";

const BookDescription = ({ image, title, authors, link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} alt="book cover" />
      </div>
      <div className={styles.text}>
        <div className={styles.author}>
          {authors.length === 1 ? (
            <h6>{authors[0]}</h6>
          ) : (
            <h6>
              {authors[0]}, {authors[1]}. et al.
            </h6>
          )}
        </div>
        <p>{title}</p>
        <Button name="see more" link={link} target="_blank" />
      </div>
    </div>
  );
};

export default BookDescription;
