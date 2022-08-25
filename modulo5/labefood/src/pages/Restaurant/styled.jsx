import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputsContainer = styled.div`
  padding: 20px;//AQUI
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: center;
  margin-bottom: 20px;
  
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid black;
`;

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  width: auto;
  height: 10px;
  border-radius: 4px;
  margin: 5px;
  background-color: #e32636;
  color: whitesmoke;
 `;

export const ContainerRestaurant = styled.div`
 
`;

export const ContainerImage = styled.div`
 margin: 0;
 display: flex;
 justify-content: flex-end;
 align-items: flex-end;
 flex-wrap: wrap;
 width: 90vw;
 height: 5vh;
`;

export const Img = styled.img`
margin: 15px;
`;