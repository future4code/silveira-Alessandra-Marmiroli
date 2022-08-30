import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import HomeFooter from "../../components/Footer/HomeFooter";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../context/GlobalStateContext";
import { goToDetailRestaurant, goToLogin } from "../../routes/Coordinator";
import {
  InputsContainer,
  ScreenContainer,
  Line,
  ContainerCategory,
  ContainerRestaurant,
  ContainerImage,
  Img,
} from "./styled";

const Restaurant = () => {
  const navigate = useNavigate();
  const { states, setters, values, requests } = useContext(GlobalStateContext);
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [filterFood, setFilterFood] = useState(false);
  const [category, setCategory] = useState(true);//Estado das Categorias 
  const [collor, setCollor] = useState("#FF9500");

  
  const logout = () => {
    localStorage.clear("Token");
    navigate('/')
  }

  useEffect(() => {
    localStorage.getItem("token") !== null ? requests.getRestaurants() : goToLogin(navigate);
  }, []);

  useEffect(() => {
    setCategory((state) => (category ? "#e32636" : "#FF9500 "));
  }, [category]);

 const mapCategory = states.restaurants?.map((cat) => {
    return (
      <CardCategory
        onClick={() => { setCategory((state) => !state)}}
        key={cat.id}
        category={cat.category}
      />
    );
  });
    
  const mapRestaurant = states.restaurants?.map((rest) => {
    return (
      <CardRestaurant
        key={rest.id}
        logoUrl={rest.logoUrl}
        deliveryTime={rest.deliveryTime}
        name={rest.name}
        shipping={rest.shipping}
        onClick={()=>goToDetailRestaurant(navigate, rest.id)}
      />
    );
  });


//   const logout = () => {
//     localStorage.removeItem("Token");
//     navigate('/')
// }//Esse formato também funciona o logout 
  
  return (
    <ScreenContainer>
      <Header 
      title={"Rappi4"}
      padding={"15px"}
      />
       <InputsContainer>
        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          label="Restaurante"
          placeholder="Restaurante"
          width="100%"
          value={filterRestaurants}
          onChange={(event) => setFilterRestaurants(event.target.value)}
          sx={{ position: "relative", bottom: "15px", width: "95vw" }}
        />
      </InputsContainer>

      <ContainerCategory>{mapCategory}</ContainerCategory>

      <ContainerRestaurant>{mapRestaurant}</ContainerRestaurant>
      <HomeFooter/>
    </ScreenContainer>
  );
};
export default Restaurant;
