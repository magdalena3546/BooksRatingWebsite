import { useSelector } from "react-redux";
import { getAllBooks } from "../../../redux/booksRedux";
import SearchEngine from "../../views/SearchEngine.js/SearchEngine";
import styles from "./Main.module.scss";
import BookDescription from "../../common/BookDescription/BookDescription";
const Main = () => {
  const books = useSelector(getAllBooks);

  return (
    <div className={styles.wrapper}>
      <SearchEngine />
      <div className={styles.books}>
        {books.length >= 1 &&
          books.map((book) => {
            let thumbnail =
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail;
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
                  />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Main;
