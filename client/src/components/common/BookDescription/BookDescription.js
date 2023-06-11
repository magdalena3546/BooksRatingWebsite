import styles from "./BookDescription.module.scss";
import Button from "../Button/Button.js";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const BookDescription = ({ image, title, authors, link }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} alt="book cover" />
      </div>
      <div className={styles.text}>
        <div className={styles.stars}>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                />
                <FaStar
                  className={styles.star}
                  size={15}
                  color={
                    currentRating <= (hover || rating) ? "#ABC4AA" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
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
