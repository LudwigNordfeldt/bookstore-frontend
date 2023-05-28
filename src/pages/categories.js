import { useParams } from "react-router-dom"
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
    }, [] )

    return (
        <div>
            {books ? <Shelf books={books} genre={beautify(category)} rows={4}></Shelf> : <p></p>}
        </div>
    )
}

export default Categories