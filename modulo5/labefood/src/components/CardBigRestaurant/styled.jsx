import styled from "styled-components";

export const CardBigStyle = styled.div`
  display: flex;
  flex-direction: initial; //para imagem ficar no início
  width: auto;
  height: auto;
  border: 4px;
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #8e8e93;
  font-family: "Roboto", sans-serif;
    
`;

export const Img = styled.img`
  width: 150px;
  height: 115px;
`;

export const CardP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  padding: 10px;
  margin-bottom: 10px;
  color: #d1d1d6;
  font-size: 16px;
  
`;

export const Restaurant = styled.div`
  color: #e86e5a;
  display: flex;//alteração de janaylla 
  justify-content: space-between;//alteração de janaylla 
  display: flex;
  justify-content: space-between;
   
`;

export const P = styled.p`
  font-size: 16px;
  margin: 3px;
  padding:5px;
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
  width: 340px;
  
`;

export const ButtonAdd = styled.button`
  border-radius: 15px 0px 15px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;//estava 15
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #000000;
   `;

export const QuantityProduct = styled.div`//Este é o botão que aparece no canto superior com a quantidade de produto dentro 
  display: flex; 
  justify-content:center;
  align-items: center;
  border: solid 1px red; 
  width: 2.063rem;
  height: 2.063rem;
  border-radius: 8px 0 8px 0;
  color: red; 
`