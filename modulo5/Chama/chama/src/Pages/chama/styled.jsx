import styled from "styled-components";

export const DivGeral = styled.div`
  width: auto;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #5333ed;
  width: 100%;
  height: 400px;
  padding: 0 10px;

  z-index: 9999;
`;
export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  font-weight: 700;
  font-family: Roboto;
  font-size: 48px;
  line-height: 56px;
`;
export const ContainerMapInfo = styled.div`
  display: flex;

  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: #dcdcdc;

  /* justify-content: space-between; */
`;

export const Img = styled.img`
  margin-top: 20px;
  border-radius: 20%;
  box-shadow: 2px 5px 2px 3px #2cd4d9;
`;

export const DivButton = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Form = styled.form`
  border: thick solid #190172;
  left: 20%;
`;
