import React from "react";

import {Card, CardText, CardTitle} from 'reactstrap';


export default function CharacterCard(props) {

  return (
    <Card className="character-profile">
      <img width="100%" src={props.image} alt="character photo" />
      <CardTitle><h2>{props.name}</h2></CardTitle>
      <CardText>Status: {props.status}</CardText>
      <CardText>Species: {props.species}</CardText>
      <CardText>Gender: {props.gender}</CardText>
    </Card>
  )

}
