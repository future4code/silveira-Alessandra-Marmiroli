import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [cardapio, setCardapio] = useState([]);
  const [buttonAdd, setButtonAdd] = useState(false); //criando estado para o button
  const [address, setAddress] = useState({})

  const token = window.localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  //ENDPOINT DE PEGAR O ENDEREÇO QUE ESTA SALVO NO ESTADO E FAZER ALTERAÇÃO!

  const getAllAddress = (setInputForm) => {
    axios
      .get(`${BASE_URL}/profile/address`, headers)
      .then((res) => {
        console.log(res.data);
        setAddress(res.data.address);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  //ENDPOINT QUE ATUALIZA O ENDEREÇO!
  const editAddress = (body) => {
    axios
      .put(`${BASE_URL}/address`, body, headers, )
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        alert("Endereço cadastrado");
        console.log(resp);
      })
      .catch((erro) => {
        alert(erro.data.message);
      });
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
        console.log(res);
        setRestaurantDetail(res.data.restaurant);
        setCardapio(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const states = { restaurants, restaurantDetail, cardapio, buttonAdd, address };
  const setters = {
    setRestaurants,
    setRestaurantDetail,
    setCardapio,
    setButtonAdd,
    setAddress,
  };
  const requests = { getRestaurants, getRestaurantDetail, getAllAddress, editAddress };
  const values = { token, headers };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
