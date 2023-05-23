import Book from "./book";

const Shelf = (books, debug) => {
  console.log("BOOKS ARE:", books, "SHELF IS:", debug)
  return (
    <div className="shelf">
      {books.books.map((el) => (
        <Book book={el}></Book>
      ))}
    </div>
  );
};

export default Shelf;
