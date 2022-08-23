import React, { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  ButtonAdd,
  CardBigStyle,
  CardP,
  Img,
  P,
  Price,
  Restaurant,
  Services,
} from "./styled";

const CardBigRestaurant = (props) => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const onClickButtonAdd = () => {
    states.setButtonAdd()
  }
  //Criar a lógica de mudar o botão de Adicionar! 
  

  return (
    <CardBigStyle>
      <Img src={props.photoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <P>{props.name}</P>
        </Restaurant>
        <Services>
          <P>{props.description}</P>
        </Services>
        <Price>
          <P>Preço: R$ {props.price}</P>
          <ButtonAdd onClick={onClickButtonAdd}>Adicionar</ButtonAdd>
        </Price>
      </CardP>
    </CardBigStyle>
  );
};
export default CardBigRestaurant;
