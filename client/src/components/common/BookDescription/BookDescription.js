import styles from "./BookDescription.module.scss";
import Button from "../Button/Button.js";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { RiCloseFill } from "react-icons/ri";
import Modal from "../Modal/Modal";
import { API_URL } from "../../../config";

const BookDescription = ({
  image,
  title,
  authors,
  link,
  id,
  userId,
  userRate,
}) => {
  const [rating, setRating] = useState(userRate);
  const [hover, setHover] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = async (rate) => {
    setRating(rate);
    try {
      const response = await axios.patch(`${API_URL}/users/${userId}`, {
        bookId: id,
        rate: rate,
      });
    } catch (err) {
      alert("Sorry, something go wrong! Try agin!");
    }
  };

  const handleRemoveRate = async () => {
    setOpenModal(false);
    try {
      const response = await axios.patch(
        `${API_URL}/users/removeRate/${userId}`,
        {
          bookId: id,
        }
      );
    } catch (err) {
      alert("Sorry, something go wrong! Try agin!");
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={styles.wrapper}>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onRemove={() => handleRemoveRate()}
      />
      <div className={styles.image}>
        <img src={image} alt="book cover" />
      </div>
      {rating && (
        <RiCloseFill
          className={styles.icon}
          onClick={() => handleOpenModal()}
        />
      )}
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
                  onClick={() => handleClick(currentRating)}
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
