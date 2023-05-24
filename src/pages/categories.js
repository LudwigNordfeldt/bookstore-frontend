import { Link, useParams } from "react-router-dom"
import { beautify } from "../components/categoriesMini"
import Shelf from "../components/shelf"
import BookService from "../services/books"
import { useState, useEffect } from "react"

const Categories = () => {
    const category = useParams().cat
    const [books, setBooks] = useState(null)

    useEffect(() => {
        const getBooks = async () => {
            let newBooks = await BookService.getBooks(`/subjects/${category}`, {
                limit: 20,
            })
            setBooks(newBooks.works)
        }

        getBooks()
    } )

    return (
        <div>
            <p>Categories are working</p>
            {books ? <Shelf books={books} genre={beautify(category)} rows={4}></Shelf> : <p>Loading</p>}
            <Link to="/">Back</Link>
        </div>
    )
}

export default Categories