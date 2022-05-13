import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import FeedCard from "../card/FeedCard";
import loadingImg from "../../Assets/Loading-Orange.gif";
import { ButtonList, ContainerListPost, ListContainer } from "./styled";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Add } from "@material-ui/icons";

const Feed = () => {
  useProtectedPage();
  
  const feedList = useRequestData([], `${BASE_URL}posts`);
  console.log(feedList);
  const navigate = useNavigate();


//   const [post, setPost] = useState([]);

  const onClickDetalhes = (id) => {
    console.log("cliquei");
    goToPost(navigate, id);
  };

  const cardFeed = feedList.map((post) => {
    return (
      <FeedCard key={post.id} post={post} onClickDetalhes={onClickDetalhes} />
    );
  });
  return (
    <ListContainer>
      <ContainerListPost >
        {/* {loading && <img src={loadingImg} />} */}
        {cardFeed}
      </ContainerListPost>
      <ButtonList color={"primary"} onClick={() => goToPost(navigate)}>
        <Add />
      </ButtonList>
    </ListContainer>
  );
};

export default Feed;
