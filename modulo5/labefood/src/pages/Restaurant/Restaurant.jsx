import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Footer from "../../components/Footer/Footer";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  InputsContainer,
  ScreenContainer,
  Line,
  ContainerCategory,
  ContainerRestaurant,
} from "./styled";

const Restaurant = () => {
  const navigate = useNavigate();
  const { states, setters, values, requests } = useContext(GlobalStateContext);
  const { getRestaurants, getRestaurantDetail } = requests;
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [filterFood, setFilterFood] = useState(false);
  const [category, setCategory] = useState(true);
  const [collor, setCollor] = useState("#FF9500");

  useEffect(() => {
    localStorage.getItem("token") !== null
      ? getRestaurants()
      : navigate("/login");
  }, []);

  useEffect(() => {
    setCategory((state) => (category ? "#e32636" : "#FF9500 "));
  }, [category]);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  // if(localStorage.getItem('token') === token){
  //   return getRestaurants()
  // }else{
  //   navigate("/login")
  // }

  const mapCategory = states.restaurants?.map((cat) => {
    return (
      <CardCategory
        onClick={(getItensCategory) => {
          setCategory((state) => !state);
        }}
        key={cat.id}
        category={cat.category}
      />
    );
  });
  console.log(mapCategory);

  const mapRestaurant = states.restaurants?.map((rest) => {
    return (
      <CardRestaurant
        key={rest.id}
        logoUrl={rest.logoUrl}
        deliveryTime={rest.deliveryTime}
        name={rest.name}
        shipping={rest.shipping}
      />
    );
  });
  
  return (
    <ScreenContainer>
      <Typography sx={{ padding: "15px" }}>Rappi4</Typography>
      <Line />
      <InputsContainer>
        <TextField
          variant="outlined"
          //  color='primary'
          fullWidth
          type="text"
          margin="normal"
          label="Restaurante"
          placeholder="Restaurante"
          value={filterRestaurants}
          onChange={(event) => setFilterRestaurants(event.target.value)}
          sx={{ position: "relative", bottom: "15px", width: "95vw" }}
        />
      </InputsContainer>

      <ContainerCategory>{mapCategory}</ContainerCategory>

      <ContainerRestaurant>{mapRestaurant}</ContainerRestaurant>
      <Footer/>
    </ScreenContainer>
  );
};
export default Restaurant;
