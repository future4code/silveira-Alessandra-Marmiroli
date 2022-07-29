import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardActor from "../../Components/CardActor/CardActor";
import { ContainerCardActor, ContainerElenco, ContainerSinopse, DivGeral, DivTrailer, ElencoP, HeaderDetailStyled, Img, Infos, InfosFilme, P, Poster, Psinops, TextSinopse, Title, VetorDetail, Vote } from "./styled";
import { Vetor } from "../../Components/Header/styled";
// import { HeaderStyled } from "../../Components/Header/styled";

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
        // console.log(res.data);
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
        // console.log(res.data);
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

  const mapGenreDetail = detailMovie.genres?.map((genres)=>{
    return (
    <p>{genres.name}</p>)
  })

   return (
    <DivGeral>
      <VetorDetail>Alessandra</VetorDetail>
      <ContainerSinopse>
      <HeaderDetailStyled>
        <Poster>
      {
        <Img        
          component="img"
          height="400"
          src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
          alt="Poster"/>}
      </Poster>


      <Infos>
      <Title>{detailMovie.original_title}</Title>

      <InfosFilme> {detailMovie.release_date} - {mapGenreDetail} - {detailMovie.runtime}</InfosFilme>
            
     <Vote>{detailMovie.vote_average}</Vote>
           
      <TextSinopse>
      <Psinops>Sinopse: {detailMovie.overview}</Psinops>
      </TextSinopse>
      </Infos>

      </HeaderDetailStyled>

      </ContainerSinopse>
      
      <ContainerElenco>
      <ElencoP>Elenco Original</ElencoP>
      </ContainerElenco>

      <ContainerCardActor>
        {mapActor}
      </ContainerCardActor>

      <DivTrailer>
        <ElencoP>Trailler</ElencoP>
        <img component="img" width="900px" src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`} alt="Poster" ></img>
      </DivTrailer>

      <DivTrailer>
        <ElencoP>Recomendações</ElencoP>
      <ContainerCardActor>
        //Card actor depois 
      </ContainerCardActor>
      </DivTrailer>
    </DivGeral>
  );
};
export default MovieDetail;
