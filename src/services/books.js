import axios from "axios"

// request "https://openlibrary.org/%subrequest%?%query%", 
// subrequest examples - trending/daily, trending/weekly, search, search/author
// query examples - title=Lord+Of+The+Rings, limit=5, author=J.R.R.Tolkien&limit=2
const getBooks = async (type, query) => {
    const response = await axios.get(`/books${type}`, { params: query })
    return response.data
}

export default {getBooks}