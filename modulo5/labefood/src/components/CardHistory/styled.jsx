import styled from "styled-components";

export const CardHistoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border: 4px;
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #8e8e93;
  font-family: "Roboto", sans-serif;
`;

export const History = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #e86e5a;
`;

export const P = styled.p`
  margin: 0px;
  display: flex;
  font-size: 12px;
  padding: 8px;
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
  width: 300px;
`;
