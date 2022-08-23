import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { ContainerCardDetail, ScreenContainer } from "./styled";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant";
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

  return (
    <ScreenContainer>
      <ContainerCardDetail>
          <CardResultRestaurant
          key={states.restaurantDetail.id}
          logoUrl={states.restaurantDetail.logoUrl}
          name={states.restaurantDetail.name}
          category={states.restaurantDetail.category}
          deliveryTime={states.restaurantDetail.deliveryTime}
          shipping={states.restaurantDetail.shipping}
          address={states.restaurantDetail.address}
        />
      </ContainerCardDetail>
      <div>{mapDetailRestaurant}</div>
    </ScreenContainer>
  );
};

export default DetailRestaurant;
