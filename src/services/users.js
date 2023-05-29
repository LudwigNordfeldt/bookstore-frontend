import axios from "axios";

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const login = async (username, password) => {
    const response = await axios.post("/users/login", {username, password})
    return response.data
}

const register = async (username, name, password) => {
    console.log("DATA IN FRONTEND SERVICE:", username, name, password)
    let user = {username, name, password}
    const response = await axios.post("/users", user)
    return response.data
}

export default {login, register, setToken}