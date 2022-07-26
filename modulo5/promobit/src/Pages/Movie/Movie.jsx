import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from '../../Components/CardMovie/CardMovie'
import Header from "../../Components/Header/Header";
import { base_url, BASE_URL, BASE_URL2 } from "../../Constants/url";
import { ContainerHeader, DivGeral } from "./styled";


// import { useNavigate } from "react-router-dom"

const Movie = () => {
  // const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [listMovie, setListMovie] = useState([]);

  const getMovie = async () => {
    await axios
      .get(`${BASE_URL2}`) //Endpoint que retorna os filmes
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getDetailMovie = async ()=> {
  //   await axios
  //   .get(`${BASE_URL2}`)//Endpoint que retorna os detalhes
  //     .then((res) => {
  //       setMovie(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // const getGenreMovie = async () => {
  //   await axios
  //     .get(`${base_url}`)//Endpoint que retorna os lista generos dos filmes
  //     .then((res) => {
  //       setListMovie(res.data);
  //       // console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    // getGenreMovie();
    getMovie();
    // getDetailMovie()
  }, []);

  console.log(movie)

  const filmes = movie.results?.map((filme) => {
    return(
        <CardMovie 
        key={filme.id}
        movie={filme.title}
        foto={filme.poster_path}
        date={filme.release_date}
        ></CardMovie>
    )
})

  return (
    <div>
      <Header/>
       <div>
        {filmes}
      </div>
    </div>
  );
};
export default Movie;
