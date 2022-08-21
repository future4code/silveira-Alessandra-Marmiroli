import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [cardapio, setCardapio] = useState([]);

  const token = window.localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((erro) => {
        alert("Erro!");
      });
  };

  const getRestaurantDetail = (id) => {
    axios
      .get(`${BASE_URL}/restaurants/${id}`, headers)
      .then((res) => {
        console.log(res)
        setRestaurantDetail(res.data.restaurant);
        setCardapio(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const states = { restaurants, restaurantDetail, cardapio };
  const setters = { setRestaurants, setRestaurantDetail, setCardapio };
  const requests = { getRestaurants, getRestaurantDetail };
  const values = { token, headers };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
