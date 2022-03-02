import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const currentUser = JSON.parse(localStorage.getItem('user')) || {
        id: 0,
        email: "unknown",
        first_name: "unknown",
        last_name: "unknown",
        gender: "f",
        age: 0,
        phone: "0",
        created_at: "unknown",
        access_token: "unknown",
        token_type: "unknown",
        expires_in: 0, //seconds
        isAuth: false
    };

    const [user, setUser] = useState(currentUser)

    const setUserHandler = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    return(
        <UserContext.Provider value={{user, setUserHandler}}>
            {children}
        </UserContext.Provider>
    );

}