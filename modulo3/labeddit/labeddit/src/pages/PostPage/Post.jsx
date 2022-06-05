import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer, ListContainer } from "./styled";
import FeedCard from '../../pages/card/FeedCard'

//Pegar comentários feito na linha 15
//Pegar outra vez a Requisição de pegar post useRequestData 

const Post = () => {
  useProtectedPage();
  const [comentarios, setComentarios] = useState([])
  const [post, setPost] = useState([])



  const params = useParams();
  const pegarComentarios = useRequestData([], `${BASE_URL}posts/${params.id}/comments`);
  const feedList = useRequestData([], `${BASE_URL}posts`);

  console.log(pegarComentarios);
  console.log(feedList);

  const postDetail = feedList.filter((feed)=>{
    if (feed.id === params.id){
      return true
    }
  })
  console.log(postDetail[0])
  
  return (
    <ScreenContainer>
      <ListContainer>
        <Typography variant={"h5"} color={"primary"}>
       {postDetail.length > 0 && <FeedCard
        post = {postDetail[0]}
      />}
        </Typography>
      </ListContainer>
    </ScreenContainer>
  );
};

export default Post;
