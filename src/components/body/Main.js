import React from "react";
import { Container } from "react-bootstrap";
import AvailableCards from "./AvailableCards";
import style from './Main.module.css';


const Main = () => {
  return (
    <div className="App">  
    <Container className={style.container}>
      <AvailableCards />
    </Container>
    </div>  
  );
};

export default Main;