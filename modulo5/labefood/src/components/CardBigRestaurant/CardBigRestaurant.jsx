import React, { useState } from "react";
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
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
 const [modal, setModal] = useState();

  // const onClickButtonAdd = () => {
  //   states.setButtonAdd()
  // }
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
          <ButtonAdd onClick={()=> setModal(true)}>Adicionar</ButtonAdd>
        </Price>
        <ModalSelectQuantity open={modal} setOpen={setModal} />
      </CardP>
    </CardBigStyle>
  );
};
export default CardBigRestaurant;
