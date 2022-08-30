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
  const [address, setAddress] = useState({});
  const [profile, setProfile] = useState({});
  const [upProfile, setUpProfile] = useState({});
  const [order, setOrder] = useState ([]);
  const [history, setHistory] = useState ([]);

  const [quantity, setQuantity] = useState ([]);//criando state para receber a quantidade do modal
  const [product, setProduct] = useState([]);

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
        // console.log(res.data);
        setAddress(res.data.address);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  //ENDPOINT QUE ATUALIZA O ENDEREÇO!
  const editAddress = (body) => {
    axios
      .put(`${BASE_URL}/address`, body, headers)
      .then((res) => {
        // console.log("editAddress", res.data);
        localStorage.setItem("token", res.data.token);
        alert("Endereço cadastrado");
        
      })
      .catch((erro) => {
        alert(erro.data.message);
      });
  };

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        console.log(res)
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
        // console.log(res);
        setRestaurantDetail(res.data.restaurant);
        setCardapio(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //ENDPOINT QUE PERMITE PEGAR UM USUÁRIO EXISTENTE E EDITAR O PERFIL E GUARDAR EM UM NOVO STATE.
  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        console.log(res);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //ENDPOINT DE UPDATE EM PROFILE

  const upDateProfile = (body) => {
    axios
      .put(`${BASE_URL}/profile`, body, headers)
      .then((res) => {
        // console.log("upDateProfile", res.data);
        setUpProfile(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const placeOrder = (id, body) => {//REALIZA O PEDIDO!!!
    axios
      .post(`${BASE_URL}/restaurants/${id}/order`, body, headers)
      .then((res) => {
        console.log('placeOrder', res);
        setProduct(res.data);
        setQuantity(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const activeOrder = () => {//RETORNA PEDIDO ATIVO 
    axios
      .get(`${BASE_URL}/active-order`, headers)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ordersHistory = () => {//LISTA DE PEDIDOS FINALIZADOS!!!
    axios
      .get(`${BASE_URL}/orders/history`, headers)
      .then((res) => {
        // setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const states = {
    restaurants,
    restaurantDetail,
    cardapio,
    buttonAdd,
    address,
    profile,
    upProfile,
    product, 
    order,
    history,
    quantity
  };
  const setters = {
    setRestaurants,
    setRestaurantDetail,
    setCardapio,
    setButtonAdd,
    setAddress,
    setProfile,
    setUpProfile,
    setProduct, 
    setOrder, 
    setHistory,
    setQuantity
  };
  const requests = {
    getRestaurants,
    getRestaurantDetail,
    getAllAddress,
    editAddress,
    getProfile,
    upDateProfile,
    placeOrder,
    activeOrder,
    ordersHistory
  };
  const values = { token, headers };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
