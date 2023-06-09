import axios from "axios";

export const getAllBooks = ({ books }) => books;
export const getBookById = ({ books }, bookId) =>
  books.find((book) => book.id === bookId);
const reducerName = "books";
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_BOOKS = createActionName("LOAD_BOOKS");

export const loadBooks = (payload) => ({ payload, type: LOAD_BOOKS });

export const fetchBooks = (search) => {
  return (dispatch) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_BOOK_KEY}&maxResults=30`
      )
      .then((res) => dispatch(loadBooks(res.data.items)))
      .catch((err) => {
        alert("Sorry, we don't find this, please try again!");
      });
  };
};

const BooksReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default BooksReducer;
