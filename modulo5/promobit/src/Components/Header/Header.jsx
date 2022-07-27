import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../Constants/url";
import { HeaderStyled, H1, DivGenres, P } from "./styled";
import CardButtonMovie from '../../Components/ButtonMovie/CardButtonMovie'


function Header(props) {
  const [listGenre, setListGenre] = useState ([])
  

  const getGenreMovie = async () => {//Endpoint que retorna os lista generos dos filmes
    await axios
      .get(`${base_url}`)
      .then((res) => {
        setListGenre(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getGenreMovie();
   
   }, []);

  const mapListGenres = listGenre.genres?.map((genres)=>{
    return (
      <CardButtonMovie
      genre={genres.name}
      />
    )
  });

  return (
    <HeaderStyled>
      <H1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</H1>
      <P>FILTRE POR:</P>
      <DivGenres>
        {mapListGenres}
      </DivGenres>
    </HeaderStyled>
  );
}

export default Header;
