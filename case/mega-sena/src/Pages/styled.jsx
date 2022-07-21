import styled from "styled-components";

export const P = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  color: whitesmoke;
  padding: 70px;
  margin-left: 20px;
`;

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgb(239, 239, 239);
`;
const getBackground = (loteria)=> {
   
  switch (loteria){
    case "0": 
      return "#6DF29C"
      
    case "1" :
      return "#7D6BF2"
     
    case "2" :
      return "#D979C9"
     
    case "3" :
      return "#F2955E"
      
    case "4" :
      return "#58A673"
     
    case "5" :
      return "#BFAA84"
       
    default:
      console.log("nenhuma destas opções");
    
  }
}
export const ContainerConcurso = styled.div`
  background-color:${(p)=>getBackground(p.loteria)};
  width: 38.3125vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const ContainerNumbers = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  width: 61.6875vw;
  height: 100vh;
`;
export const DivCard = styled.div`
  width: 100%;
  height: 6.9375vw;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Select = styled.select`
  font-style: normal;
  font-weight: 550;
  margin-left: 12%;
`;
