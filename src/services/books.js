import axios from "axios"

const getBooks = async (type, query) => {
    const response = await axios.get(`/books${type}`, { params: query })
    return response.data
}

export default {getBooks}