import styles from "./SearchEngine.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../../redux/booksRedux";

const SearchEngine = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchBooks(search));
  };
  const searchBook = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <h5>Just find something you like...</h5>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchBook}
        />
        <button onClick={handleClick}>
          <FontAwesomeIcon className={styles.icon} icon={faSearchengin} />
        </button>
      </div>
    </div>
  );
};

export default SearchEngine;
