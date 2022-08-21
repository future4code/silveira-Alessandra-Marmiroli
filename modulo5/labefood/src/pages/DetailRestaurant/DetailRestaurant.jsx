import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { ScreenContainer } from "./styled";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant"
import { useParams } from "react-router-dom";
import CardResultRestaurant from "../../components/CardResultRestaurant/CardResultRestaurant";

const DetailRestaurant = () => {
    const { states, setters, values, requests } = useContext(GlobalStateContext);
    const params = useParams(); //toda vezz que usar o id precisa usar o params 

    useEffect(() => {
        requests.getRestaurantDetail(params.id);
      }, []);
    
      const mapDetailRestaurant = states.cardapio?.map((rest) => {
        return (
          <CardBigRestaurant
            key={rest.id}
            photoUrl={rest.photoUrl}
            name={rest.name}
            description={rest.description}
            price={rest.price}
        />
        );
      });

      //RETORNANDO O CARD DO INÍCIO NA PAGE DETAIL 

      // const mapRestaurant = states.restaurant?.map((rest) => {
      //   return (
      //     <CardResultRestaurant
      //       key={rest.id}
      //       logoUrl={logoUrl}
      //       name={rest.name}
      //       deliveryTime={rest.deliveryTime}
      //       shipping={rest.shipping}
      //       address={rest.address}
      //   />
      //   );
      // });

    return(
        <ScreenContainer>
            <div>{mapDetailRestaurant}</div>
            {/* <div>{mapRestaurant}</div> */}
        </ScreenContainer>
    )
}

export default DetailRestaurant;