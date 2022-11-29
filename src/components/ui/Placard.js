import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Placard = (props) => {


  return (
    <Col md="4">  
      <Card className="d-inline-flex my-3 mx-4">  
        <Card.Img variant="top" src={props.image} />  
        <Card.Body>  
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>{props.status}</Card.Subtitle>
          <small className="text-muted">First seen in:</small>
          <Card.Text>The Ricklantis Mixup</Card.Text>
        </Card.Body>
      </Card>  
    </Col>   
  );
};

export default Placard;