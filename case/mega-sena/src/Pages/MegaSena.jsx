import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";
import CardNumbers from "../Components/CardNumbers";
import imagem from "../Assets/imagem.jpg";
import { Img } from "../Assets/styled";

const ConcursoLoterias = () => {
  const [result, setResult] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concursosId, setConcursosId] = useState([]);
  const [valueSelect, setValueSelect] = useState([]);

  const getLoterias = async () => {
    await axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDetalhesLoterias = async () => {
    await axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const getlAllNumbers = async (id) => {
    const filterConcursos = concursos.length >0 && concursos.filter((concurso)=>{
      return concurso.loteriaId === Number(valueSelect)
    })
    if(filterConcursos[0]){
      await axios
      .get(`${BASE_URL}/concursos/${Number(filterConcursos[0].concursoId)}`)
      .then((res) => {
        setConcursosId(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
   
  };
  console.log(concursosId)

  useEffect(() => {
    getLoterias();
    getDetalhesLoterias();
   
  }, []);

  useEffect(()=>{
    getlAllNumbers();
  },[valueSelect])
    

  const newLoterias = result.length > 0 && result.map((loteria) => {
      return (
        <option key={loteria.id} value={loteria.id}>
          {loteria.nome}
        </option>
      );
    });

  const onChangeHandler = (event) => {
    setValueSelect(event.target.value);
  };
 

  return (
    <div>
      <Img src={imagem} />
      <p>Concurso Loteria</p>
      <select name="valueSelect" onChange={onChangeHandler} value={valueSelect}>
        <option value="" disabled>
          Escolha um concurso:
        </option>
        {newLoterias}
      </select>

      <div>
        <CardNumbers />
      </div>
    </div>
  );
};
export default ConcursoLoterias;
