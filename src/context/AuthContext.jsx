import { createContext, useEffect, useState } from "react";
import { getCurrentUser, getUsers, removeCurrentUser, saveCurrentUser, saveUsers } from "../helpers/storage";
import { nanoid } from "nanoid";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    //With the help of this I'm checking the current user
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }

    }, []);


    // in this code i am first checking if email of the user exist or not and then create new user no existed user with the email id
    const registerUser = (user) => {
        const users = getUsers();
        const existedUser = users.some((usr) => usr.email.toLowerCase() === user.email.trim().toLowerCase());

        if (existedUser) {
            return {
                status: false,
                message: "User already exists"
            }
        }

        const newUser = {
            id: nanoid(),
            name: user.name.trim(),
            email: user.email.trim().toLowerCase(),
            password: user.password,
        }
        users.push(newUser);
        saveUsers(users);

        return {
            status: true,
            message: "User registered successfully"
        }

    }


    //if user email existed in the local storage then login
    const loginUser = (email, password) => {
        const users = getUsers();
        const existedUser = users.find((user) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password.trim());
        if (!existedUser) {
            return {
                status: false,
                message: "Invalid email or password"
            }
        }

        const loggedInUser = { ...existedUser };
        saveCurrentUser(loggedInUser);
        setCurrentUser(loggedInUser);

        return {
            status: true,
            message: "Login Successfully"
        }
    }

    const logoutUser = () => {
        removeCurrentUser();
        setCurrentUser(null);
    };

    const isAuthenticated = !!currentUser;

    return <AuthContext.Provider value={{ registerUser, loginUser, logoutUser, currentUser, isAuthenticated }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;
