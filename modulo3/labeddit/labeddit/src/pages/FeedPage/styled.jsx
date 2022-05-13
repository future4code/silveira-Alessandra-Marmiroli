import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30;
  padding: 10px;
`;

export const ContainerListPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonList = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
