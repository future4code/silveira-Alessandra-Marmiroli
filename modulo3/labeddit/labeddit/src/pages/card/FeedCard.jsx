import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ContainerFeed } from "./styled";
import { Button, Card, CardActions, Typography } from "@material-ui/core";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";

const FeedCard = (props) => {
  useProtectedPage();
  const { title, body, username, userVote, commentCount, voteSum, id } =
    props.post;
  console.log(props);
  const navigate = useNavigate();
  const [like, onChange, clear] = useForm({ direction: "" });
  // const [deslike, onChange, clear] = useForm({ direction: "" });


  //função + API de Like

  const insertLike = async () => {
    const body = { direction: 1 };
    await axios
      .post(`${BASE_URL}posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log();
        alert("Like adicionado!");
      })
      .catch((err) => {
        console.log();
        alert("Erro, tente novamente");
      });
  };

  const insertDeslike = async () => {
    const body = { direction: -1 };
    await axios
      .put(`${BASE_URL}posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log();
        alert("Acaba de dar deslike!");
      })
      .catch((err) => {
        console.log();
        alert("Erro, tente novamente");
      });
  };

  return (
    <ContainerFeed align={"center"} onClick={() => goToPost(navigate, id)}>
      <Card>
        <Typography variant="h5" align={"center"}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="body2" align={"center"}>
          {username.toUpperCase()}
        </Typography>
        <Typography variant="body2" align={"center"}>
          {body}
        </Typography>
        <Card>
          <Typography variant="body2" align={"center"}>
            {userVote}
          </Typography>
        </Card>

        <CardActions>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => insertLike()}
          >
            Like
          </Button>
          <Button variant="body2" align={"center"}>
            {voteSum}
          </Button>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => insertDeslike}
          >
            Deslike
          </Button>
        </CardActions>
        <Button
          variant="body2"
          align={"center"}
          color={"secondary"}
          label={"Comentários"}
        >
          Comentários: {commentCount}
        </Button>
        <CardActions></CardActions>
      </Card>
    </ContainerFeed>
  );
};
export default FeedCard;
