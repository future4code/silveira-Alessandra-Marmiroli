import React from "react";
import {ContainerInfoUser,ContainerMapInfo,DivButton,DivGeral,Form,H1,Img, P} from "./styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import { BASE_URL } from "../../constants/url/url";
import axios from "axios";
import { useEffect } from "react";
import CardUser from "../../components/Card/CardUser";
import { useNavigate } from "react-router-dom";


const Chama = () => {
  const [user, setUser] = useState([]); //estado do endpoint
  const [input, setInput] = useState("");//controla o que é escrito no input
  const [inputStore, setInputStore] = useState("")//guarda a informação no estado 
 
  
  const navigate = useNavigate()
  
  const getUser = async () => {
    //Endpoint que retorna um alista de usuário do GitHub
    await axios
      .get(`${BASE_URL}`) //input novo estado com um usúario único
      .then((res) => {
        // console.log('LISTA',res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(input.avatar_url)

  const getUserSingle = async () => {//Não quero dentro do useEffect
    //Endpoint que retorna um usuário único do GitHub
    await axios
      .get(`${BASE_URL}/${input}`) //input novo estado com um usúario único
      .then((res) => {
        console.log('UNICO', res.data);
        setInputStore(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

   useEffect(() => {
    getUser();
   
  }, []);
  console.log(input)
  // const getAllUser = user?.map((users)=>{
  //   console.log(getAllUser)
  //   return (
    //   )
  // });

const handleChange = (event) => {// recebendo a informação que usuário digita 
  setInput(event.target.value)
}

const handleSubmit = (event) => { //envia a informação que o usuário digitou 
    event.preventDefault();//prevenir a página de ser recarregada (nao deixar atualizar a pagina quando clicar no botao enviar)
    getUserSingle()
    setInput("")
    // console.log('clicou')
}

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
        <H1>Chama</H1>

        <Form onSubmit={handleSubmit}>

          <TextField
            onChange={handleChange}
            value={input}
            type="text"
            style={{ background: "#DCDCDC", width: "250px" }}
            label="Nome do usuário usado no GitHub"
            variant="filled"
          />
          <Button
            type="submit"//propriedade que permite o envio das informações 
            style={{ width: "200px", height: "100%" }}
            variant="contained"
          >
            Enviar
          </Button>
        </Form>
      </ContainerInfoUser>

      <ContainerMapInfo>
        <P>Informações do usuário do Github</P>
        
        <CardUser
          key={inputStore.id}
          avatar_url={inputStore.avatar_url}
          bio={inputStore.bio}
          email={inputStore.email}
          name={inputStore.name}
          login={inputStore.login}
        ></CardUser>

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
