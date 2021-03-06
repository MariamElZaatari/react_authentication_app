import axios from "axios"

// Login Function using axios
const Login = async (email, password) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/login",
        {
            email: email,
            password: password
        })
}

// Register Function using axios
const Register = async (email, password, password_confirmation, first_name, last_name, gender, age, phone) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/register",
        {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            age: age,
            phone: phone
        })
}

export default { Login, Register };