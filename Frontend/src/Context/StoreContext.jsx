
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = `${window.location.origin}`;
    const [token, setToken] = useState("");
    const [foodList, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        // If the item is not in the cart, set its count to 1
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            // If the item is already in the cart, increment its count
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        // Check if the item exists in the cart and its count is greater than 0
        if (cartItems[itemId] && cartItems[itemId] > 0) {
            // Decrement the count of the item in the cart
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            if (token) {
                await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = foodList.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    };

    const loadCartdata = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartdata(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
