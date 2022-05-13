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
import { Button, TextareaAutosize } from "@material-ui/core";
import FeedForm from './FeedForm'
import Loading from '../../Assets/Loading-Orange.gif'

const Feed = () => {
  useProtectedPage();
  const [loading, setLoading] = useState(false);
  const feedList = useRequestData([], `${BASE_URL}posts`);
    const navigate = useNavigate();

    

  const cardFeed = feedList.map((post) => {
    return (
      <FeedCard key={post.id} post={post} />
    );
  });
  return (
    <ListContainer>
       <FeedForm />
      <ContainerListPost>
        {cardFeed}
      </ContainerListPost>
      <ButtonList color={"primary"} onClick={() => goToPost(navigate)}>
        <Add />
      </ButtonList>
      {/* {loading && <img src={Loading}/>} */}
    </ListContainer>
  );
};

export default Feed;
