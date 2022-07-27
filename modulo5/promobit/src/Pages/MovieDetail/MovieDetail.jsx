import { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import { BASE_URL } from '../../Constants/url';
import axios from 'axios'
import {useParams} from 'react-router-dom'
// import { useNavigate } from "react-router-dom"

const MovieDetail = () => {
    // const navigate = useNavigate();
    const [detailMovie, setDetailMovie] = useState([]);

    const params = useParams();
    console.log('params', params.filmes)

    const getDetailMovie = async ()=> {//Endpoint que retorna os detalhes de cada filmes 
        await axios
        .get(`${BASE_URL}`)
          .then((res) => {
            setDetailMovie(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      useEffect(() => {
        getDetailMovie()
      }, []);

      
    return (
        <div>
            <Header/>
            <p>Eu sou a página de detalhes</p>
        </div>
    )
}
export default MovieDetail;