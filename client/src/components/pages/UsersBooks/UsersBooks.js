import styles from "./UsersBooks.module.scss";
import BookDescription from "../../common/BookDescription/BookDescription";
import { useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
const UsersBooks = ({ userId, userRate }) => {
  const booksId = [];
  if (userRate) {
    for (let elm of userRate) {
      booksId.push(elm.bookId);
    }
  }
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setShow(true);
      const userBooks = [];
      for (let bookId of booksId) {
        await axios
          .get(
            `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_API_BOOK_KEY}`
          )
          .then((res) => userBooks.push(res.data))
          .catch((err) => {
            console.log("Something go wrong");
          });
      }
      setShow(false);
      setBooks(userBooks);
    };
    getData().catch(console.error);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.books}>
        {show && <BeatLoader color="#ABC4AA" />}
        {!show && books.length === 0 && <p>You don't have any books yet</p>}
        {books.length >= 1 &&
          books.map((book) => {
            let thumbnail =
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail;
            let stars = userRate.find((elm) => elm.bookId === book.id);
            if (
              thumbnail !== undefined &&
              book.volumeInfo.authors !== undefined
            ) {
              return (
                <div className={styles.book} key={book.id}>
                  <BookDescription
                    {...book}
                    image={thumbnail}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    link={book.volumeInfo.infoLink}
                    id={book.id}
                    userId={userId}
                    userRate={stars.rate}
                  />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default UsersBooks;
