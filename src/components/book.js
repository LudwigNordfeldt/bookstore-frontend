const Book = (book) => {
  return (
    <a href={`https://openlibrary.org/${book.book.key}`}>
      <img
        className="cover"
        src={`https://covers.openlibrary.org/b/olid/${book.book.cover_edition_key}-M.jpg`}
        alt=""
        height="250"
        width="120"
      ></img>
    </a>
  );
};

export default Book;
