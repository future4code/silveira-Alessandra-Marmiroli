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

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState ([]);
  const [history, setHistory] = useState ([]);
  const [quantity, setQuantity] = useState ([]);//criando state para receber a quantidade do modal

  //Criando estados que receberão as novas informações do Usuário isso deve ser informado dentro do Endpoint PUT de atualização
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [cpf, setCpf] = useState("");

  // setName(states.profile.user && states.profile.user.name)
  // setEmail(states.profile.user && states.profile.user.email)
  // setCpf(states.profile.user && states.profile.user.cpf)

  // setName(states.profile.user && states.profile.user.name)
  // setEmail(states.profile.user && states.profile.user.email)
  // setCpf(states.profile.user && states.profile.user.cpf)

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
        console.log(res.data);
        setUpProfile(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const placeOrder = (id, body) => {
    axios
      .post(`${BASE_URL}/restaurants/${id}/order`, body, headers)
      .then((res) => {
        // console.log(res);
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const activeOrder = () => {
    axios
      .get(`${BASE_URL}/active-order`, headers)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ordersHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, headers)
      .then((res) => {
        setOrder(res.data);
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
    cart, 
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
    setCart, 
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
