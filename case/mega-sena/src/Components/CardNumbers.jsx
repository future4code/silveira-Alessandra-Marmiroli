import React from "react" 
import { CardStyledNumber } from "./styled" 

const CardNumber = (props) => {
  return (
    <div>
      <p>Meus Números</p>
      <CardStyledNumber>{props.number}</CardStyledNumber>
    </div>
  );
};
export default CardNumber;
