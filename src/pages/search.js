import { Link } from "react-router-dom"
import { useState } from "react"
import Shelf from "../components/shelf"
import { categories } from "./allCategories"
import BookService from '../services/books'

import { Autocomplete, Select, TextField, MenuItem } from "@mui/material"

const Search = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [subject, setSubject] = useState('')
    const [numOfResults, setNum] = useState(5)
    const [books, setBooks] = useState(null)

    const search = async () => {
        const res = await BookService.getBooks('/search', {
            title: name,
            author: author,
            subject: subject,
            limit: numOfResults
        })
        setBooks(res.docs)
    }

    return (
        <div className="search">
            <form onSubmit={search}>


                <input defaultValue="title" type="text" value={name} onChange={(target) => setName(target.value)}>
                </input>
                <input defaultValue="author" type="text" value={author} onChange={(target) => setAuthor(target.value)}>
                </input>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    value={subject}
                    onChange={(target) => setSubject(target.value)}
                    options={categories.map((option) => option.label)}
                    renderInput={(params) => <TextField {...params} label="freeSolo" />}
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Number of search results shown:"
                >
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                </Select>
                <button type="submit">Search</button>
            </form>


            {books ? <Shelf books={books} genre="Search Results" rows={numOfResults / 4}></Shelf> : <p></p>}

            <Link to="/">Back</Link>
        </div>
    )
}

export default Search