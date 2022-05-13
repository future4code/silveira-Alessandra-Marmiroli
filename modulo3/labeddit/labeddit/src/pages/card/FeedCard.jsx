import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ContainerFeed } from "./styled";
import { Button, Card, CardActions, Typography } from "@material-ui/core";


const FeedCard = (props) => {
  useProtectedPage();
  const { title, body, username, userVote, commentCount, voteSum, id } =
    props.post;
  return (
    <ContainerFeed align={"center"}>
      <Card sx={{ maxWidth: 345 }}>
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
          <Button color={"primary"} variant={"contained"}>Like</Button>
          <Button  color={"primary"} variant={"contained"}>Deslike</Button>
          <Button
            variant={"contained"}
            onClick={() => props.onClickDetalhes(id)}
          >
           Comentários
          </Button>
        </CardActions>
      </Card>
    </ContainerFeed>
  );
};
export default FeedCard;
