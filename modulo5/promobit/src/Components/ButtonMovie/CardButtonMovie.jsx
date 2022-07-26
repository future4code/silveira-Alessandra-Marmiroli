import React from "react" 
import { CardGenreMovie } from "./styled";


const CardButtonMovie = (props) => {
    return (
      <div>
        <p>Generos dos filmes </p>
        <CardGenreMovie>{props.genre}</CardGenreMovie>
      </div>
    );
};
//Card dos genero de filmes. 