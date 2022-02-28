import axios from "axios"

const Login = async (email, password) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/login", 
    {
        email: email,
        password: password
    })
}

export default {Login};