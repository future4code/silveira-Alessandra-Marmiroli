import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: auto;
`;

export const LineHeader = styled.hr`
  width: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  width: 84vw;
  height: 15vh;
  line-height: 9px;
  margin-top: -20px;
  margin-bottom: -2px;
  justify-content: space-between;
`;


export const Perfil = styled.div`
  width: 70%;
  height: 75%;
  position: relative;
  top: 0;
`;

export const BoxAddress = styled.div`
  width: 100%;
  height: 15vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #efeff4;
  margin-bottom: 20px;
  font-size: 15px;
  padding: 10px 0 0 30px;
`;
export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 85vw;
  align-items: center;
  justify-content: space-around;
  position: relative;
  right: 12px;
  width: 100vw;
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid black;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  border-radius: 12px;
`;
