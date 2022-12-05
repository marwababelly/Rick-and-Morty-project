import axios from "axios";
import { useReducer } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    const selectedStatus = action.target.value.toLowerCase();
    
    if(!selectedStatus) {
      return;
    }

    return axios.get(`https://rickandmortyapi.com/api/character/?status=${selectedStatus}`)
    .then(response => {
      LoadCard = [];

      for (const key in response.data.results) {
        LoadCard.push({
          id: response.data.results[key].id,
          name: response.data.results[key].name,
          image: response.data.results[key].image,
          status: response.data.results[key].status,
          location: response.data.results[key].location.name
        });
      }
      LoadCard = [...state.item];
    })
};

const CartProvider = (props) => {
    const [CartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const getFilteredCards = (item) => {
        dispatchCartAction({type: Filter, id: item.id})
    };

    return (
        <CartContext.Provider>
            {propTypes.children}
        </CartContext.Provider>
    );
};

export default CartProvider;