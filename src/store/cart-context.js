import React from "react";

const CartContext = React.createContext({
    filteredCards: (item) => {}
});

export default CartContext;