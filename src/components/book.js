const Book = (book) => {
  // return (
  //     <div className="book">
  //         <img src={`https://covers.openlibrary.org/b/olid/${book.book.cover_edition_key}-M.jpg`} alt="" height = "150" width = "70"></img>
  //         <p>{book.book.title} by {book.book.author_name[0]}</p>
  //         <p>First published: {book.book.first_publish_year}</p>
  //     </div>
  // )
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
