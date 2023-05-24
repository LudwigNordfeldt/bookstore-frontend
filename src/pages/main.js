import { useState, useEffect } from "react";
import Shelf from "../components/shelf";
import BookService from "../services/books";
import CategoriesMini from "../components/categoriesMini";

const Main = () => {
  const [popular, setPopular] = useState(null);
  const [scienceFic, setScienceFic] = useState(null);
  const [Fic, setFic] = useState(null);
  const [history, setHistory] = useState(null);
  const [fantasy, setFantasy] = useState(null);

  //get 5 books from each query
  useEffect(() => {
    const getBooks = async () => {
      let newBooks = await BookService.getBooks("/trending/daily", {
        limit: 5,
      });
      setPopular(newBooks.works);

      let newBooks2 = await BookService.getBooks("/subjects/science_fiction", {
        limit: 5,
      });
      setScienceFic(newBooks2.works);

      let newBooks3 = await BookService.getBooks("/subjects/fiction", {
        limit: 5,
      });
      setFic(newBooks3.works);

      let newBooks4 = await BookService.getBooks("/subjects/history", {
        limit: 5,
      });
      setHistory(newBooks4.works);

      let newBooks5 = await BookService.getBooks("/subjects/fantasy", {
        limit: 5,
      });
      setFantasy(newBooks5.works);
    };

    getBooks();
  }, []);

  // display 5 shelves 5 covers each or "loading" while they load
  return (
    <div>
      <div className="main">
        {console.log("POPULAR:", popular)}
        {popular ? (
          <Shelf books={popular} genre='Popular' rows={1}></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div className="main">
      {console.log("SCI-FI:", scienceFic)}
        {scienceFic ? (
          <Shelf books={scienceFic} genre="Science fiction" rows={1}></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div className="main">
        {console.log("FIC:", Fic)}
        {Fic ? <Shelf books={Fic} genre="Fiction" rows={1}></Shelf> : <p>Loading</p>}
      </div>

      <div className="main">
        {history ? (
          <Shelf books={history} genre="History" rows={1}></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div className="main">
        {fantasy ? (
          <Shelf books={fantasy} genre="Fantasy" rows={1}></Shelf>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <CategoriesMini></CategoriesMini>
    </div>
  );
};

export default Main;
