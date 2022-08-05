import React from "react";
import {
  ContainerInfoUser,
  ContainerMapInfo,
  DivButton,
  DivGeral,
  Form,
  H1,
  Img,
} from "./styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import { BASE_URL } from "../../constants/url/url";
import axios from "axios";
import { useEffect } from "react";
// import CardUser from "../../components/Card/CardUser";

const Chama = () => {
  const [user, setUser] = useState([]); //estado do endpoint
  const [userSingle, setUserSingle] = useState([]);

  // const [input, setInput] = useState([])//estado da função Input
  // const [value, setValue] = useState([])//estado d função Textfield
  // console.log(setUser)

  const getUser = async () => {
    //Endpoint que retorna um alista de usuário do GitHub
    await axios
      .get(`${BASE_URL}/${userSingle}`) //userSingle novo estado com um usúario único
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  // const getAllUser = user?.map((users)=>{
  //   console.log(getAllUser)
  //   return (
  //     <CardUser
  //     key={users.id}
  //     avatar={users.avatar_url}
  //     bio={users.bio}
  //     email={users.email}
  //     name={users.name}
  //     >
  //     {users.name}
  //     </CardUser>
  //   )
  // });

  const onChangeButton = (event) => {
    //função que envia informações do usuário
    setUserSingle(event.target.value);
  };

  return (
    <DivGeral>
      <ContainerInfoUser>
        <div>
          <Img
            height="150px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMFdsUl9b1zLVBxNNnJPyovDPinngoRGbLw&usqp=CAU"
            alt="logo GitHub"
          />
        </div>
        <H1>Projeto Chama</H1>

        
          <Form>
            <TextField
              onChange={onChangeButton}
              value={userSingle}
              style={{ background: "#DCDCDC", width: "250px" }}
              label="Nome do usuário usado no GitHub"
              variant="filled"
            />
            <Button style={{width: "200px", height:"100%" }} variant="contained">Enviar</Button>
          </Form>
        
      </ContainerInfoUser>

      <ContainerMapInfo>
        <p>Aqui vem as informações do usuário</p>
        {}
      </ContainerMapInfo>

      <DivButton>
        <Button color="primary" variant="contained">
          Ir para página de detalhes
        </Button>
      </DivButton>
    </DivGeral>
  );
};
export default Chama;
