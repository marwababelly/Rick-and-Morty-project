import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Placard from "../ui/Placard";
import style from './Main.module.css';

const baseURL = "https://rickandmortyapi.com/api/character";

const AvailableCards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchCard = axios.get(baseURL).then((response) => {

    if(!response.ok) {
        throw new Error('Something went wrong!');
    }
    
    const LoadCard = [];

    for(let item in response.data.results) {
      LoadCard.push({
        id: item.id,
        image: item.image,
        name: item.name,
        status: item.status,
      });
    }

    setCards(LoadCard);
    setIsLoading(false);
    });

    fetchCard.catch((error) => {
    setIsLoading(false);
    setHttpError(error.message);
    });
  }, []);

  if(isLoading) {
    return(
      <section className={style.cardLoading}>
        <p>Loading...</p>
        </section>
    );
  };

  if(httpError) {
    return(
    <section className={style.cardsError}>
      <p>{httpError}</p>
    </section>
    );
  };

  const cardList = cards.map((card) => (
    <Placard 
    id={card.id}
    image={card.image}
    name={card.name}
    status={card.status}
    />
  ));

  return (
    <div className="App">  
    <Container className={style.test}>
      {cardList}
    </Container>
    </div>  
  );
};

export default AvailableCards;