import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from "./Main.module.css";
import image1 from "../../assets/images1.png"
import p1 from "../../assets/p1.jpeg"
import p2 from "../../assets/p2.jpeg"
import p3 from "../../assets/p3.jpeg"
import p4 from "../../assets/p4.jpeg"
import p5 from "../../assets/p5.jpeg"
import p6 from "../../assets/p6.jpeg"
import {Container, Button} from 'react-bootstrap';  



const Main = () => {
  return (
<div className="App">  
   <Container className={style.test}>  
  <Col md="4">  
  <Card className="d-inline-flex my-3 mx-4">  
  <Card.Img variant="top" src={p1} />  
  <Card.Body>  
  <Card.Title>Investigator Rick</Card.Title>
    <Card.Subtitle>Dead - Human</Card.Subtitle>
    <small className="text-muted">First seen in:</small>
    <Card.Text>The Ricklantis Mixup</Card.Text>
  </Card.Body>
</Card>  
    </Col>  

    <Col md="4">  
  <Card className="d-inline-flex my-3 mx-4">  
  <Card.Img variant="top" src={p2} />  
  <Card.Body>  
  <Card.Title>Investigator Rick</Card.Title>
    <Card.Subtitle>Dead - Human</Card.Subtitle>
    <small className="text-muted">First seen in:</small>
    <Card.Text>The Ricklantis Mixup</Card.Text>
  </Card.Body>
</Card>  
    </Col> 

    <Col md="4">  
  <Card className="d-inline-flex my-3 mx-4">  
  <Card.Img variant="top" src={p3} />  
  <Card.Body>  
  <Card.Title>Investigator Rick</Card.Title>
    <Card.Subtitle>Dead - Human</Card.Subtitle>
    <small className="text-muted">First seen in:</small>
    <Card.Text>The Ricklantis Mixup</Card.Text>
  </Card.Body>
</Card>  
    </Col>  

    <Col md="4">  
  <Card className="d-inline-flex my-3 mx-4">  
  <Card.Img variant="top" src={p4} />  
  <Card.Body>  
  <Card.Title>Investigator Rick</Card.Title>
    <Card.Subtitle>Dead - Human</Card.Subtitle>
    <small className="text-muted">First seen in:</small>
    <Card.Text>The Ricklantis Mixup</Card.Text>
  </Card.Body>  
</Card>  
    </Col>  

    <Col md="4">  
  <Card className="d-inline-flex my-3 mx-4">  
  <Card.Img variant="top" src={p5} />  
  <Card.Body>  
  <Card.Title>Investigator Rick</Card.Title>
    <Card.Subtitle>Dead - Human</Card.Subtitle>
    <small className="text-muted">First seen in:</small>
    <Card.Text>The Ricklantis Mixup</Card.Text>
  </Card.Body> 
</Card>  
    </Col>  

    <Col md="4">  
  <Card className="d-inline-flex my-3 mx-4">  
  <Card.Img variant="top" src={p6} />  
  <Card.Body>  
  <Card.Title>Investigator Rick</Card.Title>
    <Card.Subtitle>Dead - Human</Card.Subtitle>
    <small className="text-muted">First seen in:</small>
    <Card.Text>The Ricklantis Mixup</Card.Text>
  </Card.Body>  
</Card>  
    </Col>   
</Container> 
    </div>  

    );
};

export default Main;