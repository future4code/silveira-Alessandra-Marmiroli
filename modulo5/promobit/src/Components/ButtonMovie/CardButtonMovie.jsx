import React from "react" 
import { CardGenreMovie } from "./styled";


const CardButtonMovie = (props) => {
    return (
      <div>
       <CardGenreMovie>{props.genre}</CardGenreMovie>
      </div>
    );
};
export default CardButtonMovie;
//Card dos genero de filmes. 