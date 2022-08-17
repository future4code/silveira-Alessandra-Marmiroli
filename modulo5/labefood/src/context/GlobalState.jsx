import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  
  const token = window.localStorage.getItem("token");
    const headers = {
      headers: {
          auth: token
      }
  }

  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  
  const getRestaurants = async () => {
    await axios.get(`${BASE_URL}/restaurants`, headers)
      .then((res)=>{
      console.log('RESPOSTA', res)
      setRestaurants(res.data.restaurants)
    })
    .catch((erro) => {
      alert("Erro!");
    });
  };
  const getRestaurantDetail = (id) => {
    axios
        .get(`${BASE_URL}/restaurants/${1}`, headers)
        .then((res) => {
            console.log('DETAIL', res.data.restaurants)
            setRestaurantDetail(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
        })
}
 
  const states = {restaurants, restaurantDetail};
  const setters = {setRestaurants, setRestaurantDetail};
  const requests = {getRestaurants, getRestaurantDetail};
  const values = {token, headers}

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
