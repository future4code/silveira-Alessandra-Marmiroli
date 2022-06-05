import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (body, clear, navigate, setButtonHeader) => {
  axios
    .post(`${BASE_URL}users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(navigate);
      setButtonHeader(`Logout`);
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data.message);
    });
};

export const signUp = (body, clear, navigate) => {
  console.log(body);
  axios
    .post(`${BASE_URL}users/signup`, body)
    .then((res) => {
      console.log(res);
      alert("Cadastro realizado com Sucesso");
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
