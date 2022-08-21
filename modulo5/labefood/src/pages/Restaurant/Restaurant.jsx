import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Footer from "../../components/Footer/Footer";
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

  const logout = () => {
    localStorage.clear("Token");
    navigate('/')
  }

//   const logout = () => {
//     localStorage.removeItem("Token");
//     navigate('/')
// }//Esse formato também funciona o logout 
  
  return (
    <ScreenContainer>

      <ContainerImage>
        <Img 
        width="50px" 
        src="https://raw.githubusercontent.com/future4code/Silveira-labe-food1/master/src/assets/iconelogout.png"
        onClick={logout}
        />
        </ContainerImage>

      <Typography sx={{ padding: "15px" }}>Rappi4</Typography>
      <Line />
      <InputsContainer>
        <TextField
          variant="outlined"
          //  color='primary'
          type="text"
          margin="normal"
          label="Restaurante"
          placeholder="Restaurante"
          fullWidth
          value={filterRestaurants}
          onChange={(event) => setFilterRestaurants(event.target.value)}
          sx={{ position: "relative", bottom: "15px", width: "95vw" }}
        />
      </InputsContainer>

      <ContainerCategory>{mapCategory}</ContainerCategory>

      <ContainerRestaurant>{mapRestaurant}</ContainerRestaurant>
      {/* <Footer/> */}
    </ScreenContainer>
  );
};
export default Restaurant;
