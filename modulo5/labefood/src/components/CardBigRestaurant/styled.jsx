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
`;

export const P = styled.p`
  margin: 0px;
  display: flex;
  font-size: 12px;
  padding: 8px;
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
  width: 300px;
`;

export const ButtonAdd = styled.button`
  border-radius: 15px 0px 15px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  /* margin-left: 200px; */
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #000000;
   `;

// export const ButtonRem = styled.button`
//   border-radius: 15px 0px 15px 0px;
//   // padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   // margin: 4px 2px;
//   cursor: pointer;
//   background-color: white;
//   color: #e86e5a;
//   border: 2px solid #e86e5a;
//   width: 25%;
//   height: 25%;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;

//Estilização do Modal!

// export const ButtonAdd = styled.button`
//   border-radius: 15px 0px 15px 0px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   cursor: pointer;
//   background-color: white;
//   color: black;
//   border: 2px solid #000000;
//   height: 25%;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;

// export const ButtonRem = styled.button`
//   border-radius: 15px 0px 15px 0px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   cursor: pointer;
//   background-color: white;
//   color: #e86e5a;
//   border: 2px solid #e86e5a;
//   width: 25%;
//   height: 25%;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;
