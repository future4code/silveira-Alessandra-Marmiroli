import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardActor from "../../Components/CardActor/CardActor";
import { ContainerCardActor, ContainerSinopse, DivGeral, Img } from "./styled";
import { HeaderStyled } from "../../Components/Header/styled";

const MovieDetail = () => {
  const [detailMovie, setDetailMovie] = useState([]);
  const [detailActor, setDetailActor] = useState([]);
 

  const params = useParams();

  const getDetailMovie = async () => {
    //Endpoint que retorna os detalhes de cada filmes
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.filmes}?api_key=ee906153f1e34c7932d8e497d2ebe284`
      )
      .then((res) => {
        setDetailMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDetailActor = async () => {
    //Endpoint que retorna os atores de cada filme
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.filmes}/credits?api_key=ee906153f1e34c7932d8e497d2ebe284`
      )
      .then((res) => {
        setDetailActor(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDetailMovie();
    getDetailActor();
  }, []);

  const mapActor = detailActor.cast?.map((actor) => {
    if(actor.order < 10){
      return (
        <CardActor
          key={actor.id}
          profile_path={<img component="img" height="240" src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="Poster" />}
          name={actor.name}
          character={actor.character}
        />
      );
    }
   
  });


  return (
    <DivGeral>
      <ContainerSinopse>
      <HeaderStyled>
      Título: {detailMovie.original_title}
      Data do filme: {detailMovie.release_date}
      {
        <Img        
          component="img"
          height="250"
          src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
          alt="Poster"
        />
      }
      {/* Média: {detailMovie.vote_average} */}
      Sinopse: {detailMovie.overview}
      </HeaderStyled>
      </ContainerSinopse>
      <ContainerCardActor>{mapActor}</ContainerCardActor>
    </DivGeral>
  );
};
export default MovieDetail;
