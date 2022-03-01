import axios from "axios"

const PostMessage = async (email, subject, text) => {
    return await axios.post("http://127.0.0.1:8000/api/message/create", 
    {
        email: email,
        subject: subject,
        text: text
    })
}

export default { PostMessage };