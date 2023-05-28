const Book = (props) => {
  return (
    <div>
      <img src={`https://covers.openlibrary.org/b/id/${props.book.covers[0]}-L.jpg`} alt=""></img>
      <h2>{props.book.title}</h2>
      <h3>by {props.author}</h3>
      <p>{props.book.description ? (props.book.description.value ? props.book.description.value : props.book.description) : ''}</p>
      <a href={`https://openlibrary.org/${props.book.key}`}>Book page on OpenLibrary</a>
    </div>
  );
};

export default Book;
