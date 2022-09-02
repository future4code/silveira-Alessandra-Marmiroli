import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { ContainerCardDetail, ScreenContainer } from "./styled";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant";
import { useParams } from "react-router-dom";
import CardResultRestaurant from "../../components/CardResultRestaurant/CardResultRestaurant";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";

const DetailRestaurant = () => {
  const { states, requests } = useContext(GlobalStateContext);
  const params = useParams(); //toda vezz que usar o id precisa usar o params

  useEffect(() => {
    requests.getRestaurantDetail(params.id);
  }, []);

  //Map que envia um produto para 
  const mapDetailRestaurant = states.cardapio?.map((product) => {
    return (
      //   <CardBigRestaurant
      //   product={product}
      //   key={product.id}
      //   restaurant={states.restaurantDetail}
      // ></CardBigRestaurant>
      <CardBigRestaurant product={product} key={product.id} restaurant={states.restaurantDetail}></CardBigRestaurant>
    );
  });

  return (
    <ScreenContainer>
      <Header back={true}/>
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
      <HomeFooter/>
    </ScreenContainer>
  );
};

export default DetailRestaurant;
