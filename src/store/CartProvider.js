import axios from "axios";
import { useReducer } from "react";
import CartContext from "./cart-context";

const initialStatus = {};

const cartReducer = (state, action) => {
    const selectedStatus = action.target.value.toLowerCase();
    
    if(!selectedStatus) {
      return CardStatus;
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
      LoadCard = [state.item];
    })
};

const CartProvider = (props) => {
    const [CardStatus, dispatchCardAction] = useReducer(
        cartReducer,
        initialStatus
    );

    const getFilteredCards = (item) => {
        dispatchCardAction({type: Filter, id: item.id})
    };

    const cardContext = {
        filteredCards: getFilteredCards
    }

    return (
        <CartContext.Provider value={cardContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;