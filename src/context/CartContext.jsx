import { createContext, useEffect, useState } from "react";
import { saveCart, getCart } from "../helpers/storage"
export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getCart);

    useEffect(() => {
        saveCart(cartItems);
    }, [cartItems]);

    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    };

    const addToCart = (product, quantity) => {
        const existedProduct = cartItems.find((item) => product.id === item.id);
        if (existedProduct) {
            const updatedCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            )
            setCartItems(updatedCart);
            return;
        }
        setCartItems([
            ...cartItems, { ...product, quantity }
        ]);

    }

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(
            item => item.id !== id
        );
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        setCartItems([]);
    };


    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };
    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
        setCartItems(updatedCart);
    };


    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0);

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0);

    const getCartQuantity = (id) => {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : 0;
    };

    const deliveryFee = cartItems.length > 0 ? 40 : 0;
    const grandTotal = cartTotal + deliveryFee;

    return (
        <CartContext.Provider value={{ cartItems, isInCart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, cartCount, cartTotal, getCartQuantity, deliveryFee, grandTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider