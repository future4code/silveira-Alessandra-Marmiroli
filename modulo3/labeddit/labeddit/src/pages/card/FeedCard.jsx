import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ContainerFeed } from "./styled";
import { Button, Card, CardActions, Typography } from "@material-ui/core";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const FeedCard = (props) => {
  useProtectedPage();
  const { title, body, username, userVote, commentCount, voteSum, id } =
    props.post;
  console.log(props);
  const navigate = useNavigate();

  //função + API de Like

  const like = async () => {
    const body = { direction: 1 };
    await axios
      .post(`${BASE_URL}posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log();
        alert("Post adicionado com sucesso!");
      })
      .catch((err) => {
        console.log();
        alert("Erro, tente novamente");
      });
  };

  const deslike = async () => {
    const body = { direction: - 1 };
    await axios
      .post(`${BASE_URL}posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log();
        alert("Post adicionado com sucesso!");
      })
      .catch((err) => {
        console.log();
        alert("Erro, tente novamente");
      });
  };

  
  return (
    <ContainerFeed align={"center"} onClick={() => goToPost(navigate, id)}>
      <Card >
        <Typography variant="h5" align={"center"}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="body2" align={"center"}>
          {username.toUpperCase()}
        </Typography>
        <Typography variant="body2" align={"center"}>
          {body}
        </Typography>

        <CardActions>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => like()}
          >
            Like
          </Button>
          <Button 
          color={"primary"} 
          variant={"contained"}
          onClick={() => deslike()}
          >
            Deslike
          </Button>
        </CardActions>
      </Card>
    </ContainerFeed>
  );
};
export default FeedCard;
