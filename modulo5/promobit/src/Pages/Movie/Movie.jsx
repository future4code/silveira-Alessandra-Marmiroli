import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Header from "../../Components/Header/Header";
import { BASE_URL2 } from "../../Constants/url";
import { ContainerCardMovie, ContainerHeader, DivGeral } from "./styled";


const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([])//Criei um estado de generos 
  // const [pagination, setPagination] = useState([])//Criando o estado da paginação 
  // const [itensPages, setItensPages] = useState(5)//Numeros de itens por page
  // const [currentPage, setCurrentPage] = useState(0) //Page atual que esta vendo 

  // const pages = Math.ceil(pagination.lenght / itensPages) // tamanho da paginação / itens 
  // const start = currentPage * itensPages; // 
  // const endStart = start + itensPages; //
  // const currentItens = pagination
  
  console.log(movie)
   
  // const navigate = useNavigate();

  const getMovie = async () => {
    await axios
      .get(`${BASE_URL2}`) //Endpoint que retorna os filmes
      .then((res) => {
       setMovie(res.data);
        console.log(res.data.results);
      })
      .catch((err) => {
        alert(err.response.data.status_message);//Tratamento de Erro res endpoint 
      });
  };

    useEffect(() => {
      getMovie();
   }, []);

   const filmes = movie.results?.filter((filme) => {
    if(generos.length === 0){
      return filme
    }else{
      return generos.every((genero)=>{//Every filtro retorna uma lista onde o usuário vai clicar 
        return filme.genre_ids.includes(genero)
      })
    }
  })
  .map((filme) => { return (
    <CardMovie
      id={filme.id}
      key={filme.id}
      foto={
        <img
          component="img"
          height="200"
          src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
          alt="Poster"/>}
      movie={filme.title}
      date={filme.release_date}
    />
  )});
   
    
  return (
    <DivGeral>
      <ContainerHeader>
        <Header setGeneros={setGeneros} generos={generos}/>
        
      </ContainerHeader>

      <ContainerCardMovie>{filmes}</ContainerCardMovie>
      {/* <div>
        {Array.from(Array(pages), (item, index)=>{
          return <button>{index}</button>
        })}</div> */}
    </DivGeral>
  );
};
export default Movie;
