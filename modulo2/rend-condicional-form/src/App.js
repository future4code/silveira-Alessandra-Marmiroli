import logo from "./logo.svg";
import "./App.css";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 15px;
  margin-left: 43%;
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState ({etapa:this.state.etapa + 1})
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <Final />;
    }
  };

  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        
        {/* <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button> */}

        {this.state.pagina !==4 && <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button>}

        {/* {this.state.pagina !==4 ? <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button> : <div></div>} */}

        
        
      </div>
    );
  }
}
