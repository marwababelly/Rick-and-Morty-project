import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import style from './Placard.module.css';

const Placard = (props) => {

  return (
    <Col md="4">  
      <Card className="d-inline-flex my-3 mx-4 bg-secondary w-22rem h-20vh">  
        <Card.Img 
          variant="top" 
          src={props.image} 
        />  

        <Card.Body>  
          <Card.Title className={style.cardTitle}>
            {props.name}
          </Card.Title>

          <Card.Subtitle className={style.cardSubtitle}>
            {props.status}
          </Card.Subtitle>

          <small className={style.firstSeen}>
            First seen in:
          </small>

          <Card.Text className={style.cardText}>
            {props.location}
          </Card.Text>
        </Card.Body>
        
      </Card>  
    </Col>   
  );
};

export default Placard;