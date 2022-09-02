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
  QuantityProduct,
  Restaurant,
  Services,
} from "./styled";

const CardBigRestaurant = ({product, restaurant}) => {
  const { states, requests } = useContext(GlobalStateContext);
  const [modal, setModal] = useState(false);
  const {addToCart, removeCart} = requests


const choiceQuantity = (quantity) => {
  setModal(false)
  if (addToCart.length > 0) {
    return addToCart(product, quantity, restaurant)
  }
}

const productInCart = states.cart.find((productCart) => productCart.id === product.id)

  return (
    <CardBigStyle>
      <Img src={product.photoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <P>{product.name}</P>
          {productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
        </Restaurant>
        <Services>
          <P>{product.description}</P>
        </Services>
        <Price>
          <P>Preço: R$ {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)}</P>
          { productInCart ?
          <ButtonAdd onClick={()=> removeCart(product.id)}>Remover</ButtonAdd>
          :
          <ButtonAdd onClick={() => setModal(true)}>
                Adicionar
              </ButtonAdd>
          }
        </Price>
        <ModalSelectQuantity open={modal} setOpen={setModal} choiceQuantity={choiceQuantity}/>
      </CardP>
    </CardBigStyle>
  );
};
export default CardBigRestaurant;
