import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class DetalheDoUsuario extends React.Component {
  state = {
    detalhesDoUsuario: {},
  };
  componentDidMount() {
    this.detalhes();
  }

  detalhes = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.identificacaoUsuario}`;
    axios
      .get(url, {
        headers: {
          Authorization: "alessandra-sandeski-silveira",
        },
      })
      .then((res) => {
        this.setState({ detalhesDoUsuario: res.data });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  render() {
    return (
      <div>
        <p>{this.state.detalhesDoUsuario.name}</p>
        <p>{this.state.detalhesDoUsuario.email}</p>

        <button onClick={this.state.trocandoPagina}>Página Anterior</button>
      </div>
    );
  }
}
