import React, { useContext, useState } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
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
  const { states, requests } = useContext(GlobalStateContext);
  
 const [modal, setModal] = useState(false);
 const {addToCart, removeCart} = requests
// const addToCart = requests

const choiceQuantity = (quantity) => {
  setModal(false)
  if (addToCart.length > 0) {
    return addToCart(product, quantity, restaurant)
  }
}

  

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
          <P>Preço: R$ {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.price)}</P>
          <ButtonAdd onClick={()=> setModal(true)}>Remover</ButtonAdd>
        </Price>
        <ModalSelectQuantity open={modal} setOpen={setModal} choiceQuantity={choiceQuantity}/>
      </CardP>
    </CardBigStyle>
  );
};
export default CardBigRestaurant;
