import styles from "./BookDescription.module.scss";

const BookDescription = ({ image, title }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="book cover" />
      <div className={styles.text}>
        <h5>author</h5>
        <h6>{title}</h6>
        <p>type</p>
        <p>text</p>
      </div>
    </div>
  );
};

export default BookDescription;
