import axios from "axios"

const Edit = async (id, access_token, first_name, last_name, gender, age, phone) => {

    return await axios.patch("http://127.0.0.1:8000/api/user", 
    {
        id: id,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        age: age,
        phone:phone
    },
    { headers: {"Authorization" : `Bearer ${access_token}`} }
    )
}

export default {Edit};