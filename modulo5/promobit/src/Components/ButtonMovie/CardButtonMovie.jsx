import React from "react" 
import { CardGenreMovie } from "./styled";


const CardButtonMovie = (props) => {
 
      return (//Como o Card precisa ficar clicável aqui acontece a mudançaGenero esse onclick permite o usuário clicar selecionar o genero e tirar ele de seleção
      <div>
       <CardGenreMovie onClick={()=>props.mudancaGenero(props.id)}>{props.genre}</CardGenreMovie>
       </div>
    );
};
export default CardButtonMovie;
//Card dos genero de filmes. 