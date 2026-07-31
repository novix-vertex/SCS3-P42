const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";
const CART_KEY = "cart";

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

export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export const getCart = () => {
    return localStorage.getItem(CART_KEY);
}