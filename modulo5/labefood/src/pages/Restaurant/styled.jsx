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

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  width: 90%;
  height: 10px;
  border-radius: 4px;
  margin: 5px;
  background-color: #e32636;
  color: whitesmoke;
 `;

export const ContainerRestaurant = styled.div`
`;

export const Img = styled.img`
margin: 15px;
`;

export const Menu = styled.nav`
height: 2.625rem;
display: flex;
align-items: center;
padding: 0 1rem 0 0;
width: 100%;
overflow-x: auto;
`;

export const MenuItem = styled.button`
font-family: 'Bebas Neue', cursive;
font-size:1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: ${(p) => p.select ? "red" : "black"};
background-color: transparent;
border:none;
outline: none;
padding: 0 1rem;
color: black;
:hover{
    color:  red;
}
`