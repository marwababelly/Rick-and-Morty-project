import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Placard from "../ui/Placard";
import style from './Main.module.css';

// const baseURL = "https://rickandmortyapi.com/api/character";

// const scrollTop = document.documentElement.scrollTop;
// const scrollHeight = document.documentElement.scrollHeight;
// const clientHeight = document.documentElement.clientHeight;

const LoadCard = [];

const AvailableCards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [currentPage, setCurrrntPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const listInnerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );

      console.log(response.data.results);

      if(!response.data.results.length) {
        setWasLastList(true);
        return;
      }

      for (const key in response.data.results) {
        LoadCard.push({
          id: response.data.results[key].id,
          name: response.data.results[key].name,
          image: response.data.results[key].image,
          status: response.data.results[key].status,
        });
      }
      
      setIsLoading(false);
      setPrevPage(currentPage);
      setCards([...cards, ...LoadCard]);

    };

    if(!wasLastList && prevPage !== currentPage) {
      fetchData();
    }

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, [currentPage]);

  const onScroll = () => {
    if(listInnerRef.current) {
      const {scrollTop, scrollHeight, clientHeight} = listInnerRef.current;
      if(scrollTop + clientHeight >= scrollHeight) {
        setCurrrntPage(currentPage + 1);
      }
    }
  };

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
    // key={card.id}
    id={card.id}
    image={card.image}
    name={card.name}
    status={card.status}
    />
  ));

  return (
    <div className="App"
    ref={listInnerRef}
    >  
    <Container className={style.test}>
      {cardList}
    </Container>
    </div>  
  );
};

export default AvailableCards;