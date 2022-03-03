import { createContext, useState } from "react";

// Create Context for User to be accessed throughout the component hierarchy; in this case the App
export const UserContext = createContext();

// Create Provider Function for the Context that takes the App as children and passes VALUES instead of using props manually later
export const UserProvider = ({ children }) => {

    // Set current user variable either from local storage or default value
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

    // Create useState that returns a user Stateful Value and setUser Function to update it
    // Initializing the user as currentUser
    const [user, setUser] = useState(currentUser)

    // Function setUserHandler: Set User in variable and local storage as 'user'
    const setUserHandler = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    return (
        // Provider Wraps around the children(the app), with a user variable and setUserHandler Functions as the VALUES
        <UserContext.Provider value={{ user, setUserHandler }}>
            {children}
        </UserContext.Provider>
    );

}