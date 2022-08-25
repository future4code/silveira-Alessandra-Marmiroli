import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

export const useRequestData = (initialState, BASE_URL) => {
  const [data, setData] = useState(initialState);

  const getData = async () => {
    await axios
      .get(BASE_URL, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return data;
};
//FAZENDO O USE REQUEST DATA JA QUE NO PROJETO VAI USAR MUITAS REQUISIÇÕES 