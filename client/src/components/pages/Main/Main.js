import { useSelector } from "react-redux";
import { getAllBooks } from "../../../redux/booksRedux";
import SearchEngine from "../../views/SearchEngine.js/SearchEngine";
import styles from "./Main.module.scss";
import BookDescription from "../../common/Button.js/BookDescription/BookDescription";
const Main = () => {
  const books = useSelector(getAllBooks);
  console.log(books);
  return (
    <div className={styles.wrapper}>
      <SearchEngine />
      <div className={styles.books}>
        {books.map((book) => {
          let thumbnail =
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail;
          if (thumbnail !== undefined) {
            return (
              <div key={book.id}>
                <BookDescription
                  {...book}
                  image={thumbnail}
                  title={book.volumeInfo.title}
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
