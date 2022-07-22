import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgb(239, 239, 239);
  @media(max-width: 800px) {
        flex-direction: column;
    }
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
  background: radial-gradient(50% 140% at right, #efefef 50%, ${(p)=>getBackground(p.loteria)} 50.1%);
  background-color:${(p)=>getBackground(p.loteria)};
  width: 38.3125vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media(max-width: 800px) {
        width: 100%;
        background: radial-gradient(100% 10% at bottom, #dcdcdc 50%, ${(p) => getBackground(p.loteria)} 50.1%);
        padding-right: 0px;
    }
`;

export const P = styled.p`
  margin: 0px 20px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  color:whitesmoke;
  padding: 20px;//70   55
  @media(max-width: 800px) {
        padding: 30px;
    }


   `;

export const Select = styled.select`
  background-color: #dcdcdc;
  height: 36px;
  font-style: normal;
  font-weight: 550;
  margin-left: 20%;
  border-radius: 20px;
  width: 50%;
  padding: 10px;
  text-transform: uppercase;
  border: none;
  outline: transparent;
  font-family: Montserrat,sans-serif;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  `;

export const Img = styled.img`
padding-left: 100px;
margin: 25px 50px;
`

export const NumberConcurso = styled.p`
 width: 100vw;
 text-transform: uppercase;
 padding-left: 80px;
 font-weight: bold;
 
 
`
export const NumberId = styled.p`
  width: 100vw;
  padding-left: 60px;
  font-weight: bold;
  
   
`
export const ContainerNumbers = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
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

export const Text = styled.p`
margin-top: 250px;
@media(max-width: 800px) {
        line-height: 20px;
        font-size: 12px;
        width: 260px;
    }
`
