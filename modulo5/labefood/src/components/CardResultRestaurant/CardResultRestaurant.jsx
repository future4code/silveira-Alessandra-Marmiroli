import React from "react";
import { Address, CardP, CardStyleDetail, Img, Restaurant, Services} from "./styled";

const CardResultRestaurant = (props) => {
  // const [modal, setModal] = useState(false);
  // const [addButton, setAddButton] = useState(true);

  // const { states, setters, requests } = useContext(GlobalStateContext);
  // const { cart } = states
  // const { setCart } = setters;
  // const {removeProduct} = requests;
 
  // const showModal = () => {
  //   setModal(true);
  // }

  // const setRemoveButton = () => {
  //   setAddButton(true)
  // }


  //ESTE É O CARD DO INÍCIO DA PAGE DETAIL 
  return (
    <CardStyleDetail>
      <Img src={props.logoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <p>{props.name}</p>
        </Restaurant>
        <Services>
          <p>{props.deliveryTime}</p>
          <p>{props.shipping}</p>
        </Services>
        <Address>
          <p>{props.address}</p>
        </Address>
      </CardP>
    </CardStyleDetail>
  );
};
export default CardResultRestaurant;

//Este Card será o grande Inicial 
