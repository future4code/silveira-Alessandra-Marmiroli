import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import HomeFooter from "../../components/Footer/HomeFooter";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../context/GlobalStateContext";
import { goToDetailRestaurant } from "../../routes/Coordinator";
import {
  InputsContainer,
  ScreenContainer,
  Menu,
  MenuItem,
} from "./styled";
import Image from "../../assets/image.png";

const Restaurant = () => {
  const navigate = useNavigate();
  const { states, requests } = useContext(GlobalStateContext);
  const [inputText, setInputText] = useState("");
  const [buttonCategory, setButtonCategory] = useState("");


  const restaurantsFilter = states.restaurants.filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase())
        : true
    )
    .filter((restaurant) =>
      buttonCategory
        ? restaurant.category
            .toLowerCase()
            .includes(buttonCategory.toLowerCase())
        : true
    )
    .map((rest) => {
      console.log(rest)
      return (
        <CardRestaurant
          key={rest.id}
          logoUrl={rest.logoUrl}
          name={rest.name}
          deliveryTime={rest.deliveryTime}
          shipping={rest.shipping}
          onClick={() => goToDetailRestaurant(navigate, rest.id)}
        />
      );
    });

    
  useEffect(() => {
    requests.getRestaurants();
    requests.activeOrder();
  }, []);


  const onChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  //   const logout = () => {
  //     localStorage.removeItem("Token");
  //     navigate('/')
  // }//Esse formato também funciona o logout

  return (
    <ScreenContainer>
     <Header title={"Rappi4"} padding={"15px"} />
      <InputsContainer>
        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          label="Restaurante"
          placeholder="Restaurante"
          width="100%"
          value={inputText}
          onChange={onChangeInputText}
          sx={{ position: "relative", bottom: "15px", width: "95vw" }}
        />
        <Menu>
          <MenuItem onClick={() => setButtonCategory("")}>
            Todos
          </MenuItem>
          {states.categoryRestaurant.map((category) => {
            return (
              <CardCategory
                key={category.id}
                select={false}
                onClick={() => setButtonCategory(category.category)}
                category={category.category}
              >
                {category}
              </CardCategory>
            );
          })}
        </Menu>
      </InputsContainer>
      <div>{restaurantsFilter}</div>
      <HomeFooter />
    </ScreenContainer>
  );
};
export default Restaurant;
