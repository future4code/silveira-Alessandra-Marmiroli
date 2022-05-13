import { Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer, ListContainer } from "./styled";

const Post = () => {
  useProtectedPage();
  const params = useParams();
  const post = useRequestData([], `${BASE_URL}posts/${params.id}`)[0];

  console.log(params.id);
  return (
    <ScreenContainer>
      <ListContainer>
        <Typography variant={"h5"} color={"primary"}>
          {post && post.title}
        </Typography>
      </ListContainer>
    </ScreenContainer>
  );
};

export default Post;
