import React from "react";

const CartContext = React.createContext({
    getFilteredCards: (item) => {}
});

export default CartContext;