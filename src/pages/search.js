import { useState } from "react";
import Shelf from "../components/shelf";
import { categories } from "./allCategories";
import BookService from "../services/books";

import { Autocomplete, TextField} from "@mui/material";

const Search = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [numOfResults, setNum] = useState(5);
  const [books, setBooks] = useState(null);

  const search = async (event) => {
    event.preventDefault();
    let res = await BookService.getBooks("/search", {
      title: name,
      author: author,
      subject: subject,
      limit: numOfResults,
    });
    setBooks(res.docs);
  };

  return (
    <div>
      <div className="search">
        <form onSubmit={search}>
          <div style={{ padding: 10 }}>
            <input
              id="title"
              name="Title"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            ></input>
          </div>
          <div style={{ padding: 10 }}>
            <input
              id="author"
              name="Author"
              type="text"
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            ></input>
          </div>
          <div style={{ padding: 10 }}>
            <Autocomplete
              id="Subject"
              freeSolo
              sx={{ width: "40vw" }}
              value={subject ? subject : ""}
              inputValue={subject ? subject : ""}
              onChange={(event, newVal) => {
                setSubject(newVal);
              }}
              onInputChange={(event, newVal) => {
                setSubject(newVal);
              }}
              options={categories.map((option) => option.label)}
              renderInput={(params) => (
                <TextField {...params} label="Subject" />
              )}
            />
          </div>

          <div style={{ padding: 10 }}>
            <select
              value={numOfResults}
              onChange={({ target }) => setNum(target.value)}
            >
              <option value={5}>Five</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
            </select>
          </div>

          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {books ? (
          <Shelf books={books} genre="Results" rows={4}></Shelf>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Search;
