import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../../components/CardCategory/CardCategory";
import GlobalStateContext from "../../context/GlobalStateContext";
import { InputsContainer, ScreenContainer, Line, ContainerCategory } from "./styled";

const Restaurant = () => {
  const navigate = useNavigate();
  const { states, setters, values, requests } = useContext(GlobalStateContext);
  const { getRestaurants } = requests;
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [filterFood, setFilterFood] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    localStorage.getItem("token") !== null
      ? getRestaurants()
      : navigate("/login");
  }, []);

  // if(localStorage.getItem('token') === token){
  //   return getRestaurants()
  // }else{
  //   navigate("/login")
  // }

  const mapCategory = states.restaurants?.map((cat) => {
    return (<CardCategory key={cat.id} category={cat.category} />)
  });
  console.log(mapCategory)

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
    </ScreenContainer>
  );
};
export default Restaurant;
