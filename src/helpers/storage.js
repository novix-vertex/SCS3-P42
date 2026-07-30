const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export const getUsers = () => {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
};

export const saveCurrentUser = (user) => {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const removeCurrentUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};