import React from "react" 
import { CardMovieStyled } from "./styled";

const CardMovie = (props) => {
    return (
      <div>
       <CardMovieStyled>
        {props.movie}
        {props.foto}
        {props.date}
        </CardMovieStyled>
      </div>
    );
};
export default CardMovie;

// Este é o Card dos filmes 
