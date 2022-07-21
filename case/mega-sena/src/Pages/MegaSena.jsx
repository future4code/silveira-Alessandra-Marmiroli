import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";
import CardNumbers from "../Components/CardNumbers";
import { ContainerConcurso, ContainerNumbers, Div, DivCard, P, Select } from "./styled";


const ConcursoLoterias = () => {
  const [result, setResult] = useState([]);//crio um estado para cada endpoint 
  const [concursos, setConcursos] = useState([]);
  const [concursosId, setConcursosId] = useState([]);
  const [valueSelect, setValueSelect] = useState();

  const getLoterias = async () => {
    //este endpoint é responsável por pegar uma lista de nomes de concursos
    await axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setResult(res.data);//salvo a resposta do endpoint em uma variavel
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDetalhesLoterias = async () => {
    //endpoint responsável por pegar os detalhes de loterias e concursos
    await axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);//salvo a res. (resposta) nesta variavel
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(concursos)
  
  const getlAllNumbers = async (id) => {//endpoint responsável por pegar os números de cada concurso 
    const filterConcursos = concursos.length >0 && concursos.filter((concurso)=>{
      return concurso.loteriaId === Number(valueSelect)
    })//variavel filterConcursos recebe enquanto o tamanho do concurso for maior que 0 e concurso existir retorna concurso
    if(filterConcursos[0]){//If verifica se existir o filterConcursos na posição [0]
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
  

  useEffect(() => {
    getLoterias();
    getDetalhesLoterias();
   
  }, []);

  useEffect(()=>{//Este outro useEffect foi criado apenas pq toda vez que o usuário clicar select para selecionar a opção de um concurso o endpoint getAllNumbers() será invocado mostrando um array [com um valor] que foi referenciado em value dentro do select. 
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
  //função responsável por receber uma mudança de estado (no caso toda vez que o usuário clicar no botão para mudar a opção do select ela é invocada)
  
  const mapNumbers = concursosId.numeros?.map((number,index)=>{
    return(
      <CardNumbers key={index} number={number}></CardNumbers>
    )
  });
 

    return (
    <Div>
      <ContainerConcurso loteria={valueSelect}>
      <P>Concurso Loteria</P>
      <Select name="valueSelect" onChange={onChangeHandler} value={valueSelect}>
        <option value="" disabled>
          Escolha um concurso:
        </option>
        {newLoterias} 
       </Select>
       <p>{concursosId.id}</p>
      </ContainerConcurso>

      <ContainerNumbers>
      <DivCard>
        {mapNumbers}
      </DivCard>
      </ContainerNumbers>
    </Div>
  );
};
export default ConcursoLoterias;
