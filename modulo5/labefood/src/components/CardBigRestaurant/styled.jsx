import styled from "styled-components";

export const CardBigStyle = styled.div`
  display: flex;
  flex-direction: initial;//para imagem ficar no início
  width: auto;
  height: auto;
  border: 4px;
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #8E8E93;
  font-family: 'Roboto', sans-serif;
`;

export const Img = styled.img`
  width: 150px;
  height: 115px;
`;

export const CardP = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
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
`;


