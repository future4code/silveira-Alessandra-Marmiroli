import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";
import CardNumbers from "../Components/CardNumbers";

const ConcursoLoterias = () => {
  const [result, setResult] = useState([]);

  //Crio uma função de uma requisição API que será responsável por coletar os números que serão informados na tela.
  //Incluir o async e await
  const getLoterias = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDetalhesLoterias = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const gelAllNumbers = () =>{
    axios 
    .get (`${BASE_URL}/concursos{id}`)
    .then((res) => {
        setResult(res.data);
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err)
    });
  };

  //Usando UseEffect invocando a função GetNumbers acima
  useEffect(() => {
    getLoterias();
    getDetalhesLoterias();
    gelAllNumbers();
  }, []);

  // Aqui faço uma função que recebe o resultado usando o método Map passando como parâmetro loteria que imprime a loteria.id
  const newLoterias = result.map((loteria) => {
    return <option>{loteria.nome}</option>;
  });
  //Esse map traz o resultado dos nomes de cada concurso

  const newNumber = result.map((concurso) => {
    return <div>{concurso.Id}</div>
  });
  //Esse mao traz o concurso pelo ID. 

  return (
    <div>
      Consurso Loteria
      <select>{newLoterias}</select>
      <div>
        <CardNumbers />
      </div>
    </div>
  );
};
export default ConcursoLoterias;
