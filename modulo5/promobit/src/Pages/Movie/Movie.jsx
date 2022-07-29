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
  // console.log(generos)
   
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

  //  const generoFilter = generos?.filter((generos)=>{
  //    return generos.name === "genres"
  //  }) PRECISA FAZER O FILTER 
   

  const filmes = movie.results?.map((filme) => {
    return (
      <CardMovie
        id={filme.id}
        key={filme.id}
        foto={
          <img
            component="img"
            height="200"
            src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            alt="Poster"
          />
        }
        movie={filme.title}
        date={filme.release_date}
      />
    );
  });
  console.log(generos)
  return (
    <DivGeral>
      <ContainerHeader>
        <Header setGeneros={setGeneros} generos={generos}/>
        
      </ContainerHeader>

      <ContainerCardMovie>{filmes}</ContainerCardMovie>
    </DivGeral>
  );
};
export default Movie;
