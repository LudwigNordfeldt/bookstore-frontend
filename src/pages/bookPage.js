import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import BookService from '../services/books'
import Book from "../components/book"

const BookPage = () => {
    const w = useParams().w
    const key = useParams().key
    const [book, setBook] = useState(null)
    const [author, setAuthor] = useState('')

    useEffect (() => {
        const getBook = async () => {
            let res = await BookService.getBooks(`/${w}/${key}`, {})
            setBook(res)
            let author = await BookService.getBooks(res.authors[0].author.key, {})
            setAuthor(author.name)
        }
        getBook()
    }, [] )

    return (book ? <Book book={book} author={author}></Book> : <p></p>)
}

export default BookPage