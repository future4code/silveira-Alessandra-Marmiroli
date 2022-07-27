import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Header from "../../Components/Header/Header";
import { BASE_URL2 } from "../../Constants/url";
import { ContainerCardMovie, ContainerHeader, DivGeral } from "./styled";


const Movie = () => {
  const [movie, setMovie] = useState([]);
   
  // const navigate = useNavigate();

  const getMovie = async () => {
    await axios
      .get(`${BASE_URL2}`) //Endpoint que retorna os filmes
      .then((res) => {
        setMovie(res.data);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

   useEffect(() => {
    getMovie();
   }, []);

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

  return (
    <DivGeral>
      <ContainerHeader>
        <Header/>
        
      </ContainerHeader>

      <ContainerCardMovie>{filmes}</ContainerCardMovie>
    </DivGeral>
  );
};
export default Movie;
