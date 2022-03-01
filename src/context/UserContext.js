import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
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
        expires_in: 0 //seconds
    })


    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );

}