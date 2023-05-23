import { useState, useEffect } from "react";
import Shelf from "../components/shelf";
import BookService from "../services/books";

const Main = () => {
  const [popular, setPopular] = useState(null);
  const [scienceFic, setScienceFic] = useState(null);
  const [Fic, setFic] = useState(null);
  const [history, setHistory] = useState(null);
  const [fantasy, setFantasy] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      let newBooks = await BookService.getBooks("/trending/daily", {
        limit: 5,
      });
      setPopular(newBooks.works);

      let newBooks2 = await BookService.getBooks("/search", {
        limit: 5,
        subject: "Science fiction",
      });
      setScienceFic(newBooks2.docs);

      let newBooks3 = await BookService.getBooks("/search", {
        limit: 5,
        subject: "Fiction",
      });
      setFic(newBooks3.docs);

      let newBooks4 = await BookService.getBooks("/search", {
        limit: 5,
        subject: "History",
      });
      setHistory(newBooks4.docs);

      let newBooks5 = await BookService.getBooks("/search", {
        limit: 5,
        subject: "Fantasy",
      });
      setFantasy(newBooks5.docs);
    };

    getBooks();
  }, []);

  return (
    <div>
      <div>
        <h2>Popular</h2>
        {popular ? <Shelf books={popular} debug="pop"></Shelf> : <p>Loading</p>}
      </div>

      <div>
        <h2>Sci-Fi</h2>
        {scienceFic ? (
          <Shelf books={scienceFic} debug="scifi"></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div>
        <h2>Fiction</h2>{" "}
        {Fic ? <Shelf books={Fic} debug="fic"></Shelf> : <p>Loading</p>}
      </div>

      <div>
        <h2>History</h2>
        {history ? (
          <Shelf books={history} debug="history"></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div>
        <h2>Fantasy</h2>
        {fantasy ? (
          <Shelf books={fantasy} debug="fantasy"></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Main;
