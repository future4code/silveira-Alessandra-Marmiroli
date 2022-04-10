import React from "react";
import axios from "axios";
import styled from "styled-components";


const CardPlaylist = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export default class VejaPlaylist extends React.Component {
  state = {
    playlist: [],
  };

  componentDidMount() {
    this.verPlaylist();
    
}
  verPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "alessandra-sandeski-silveira",
        },
      })
      .then((res) => {
        this.setState({ playlist: res.data.result.list });
      })
      .catch((err) => {
        alert("Ocorreu um erro tente novamente");
      });
  };
  deletaItemDaPlaylist = (id) => {
    if (window.confirm(`Tem certeza que deseja deletar?`)) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      axios.delete(url, {
          headers: {
            Authorization: "alessandra-sandeski-silveira",
          },
        })
        .then((res) => {
          alert("Playlist deletada com sucesso!")
          this.verPlaylist()
        })
        .catch((err) => {
          alert("Erro! Tente novamente");
        });
    } else {
      alert(`Playlist não deletada`);
    }
  };

  render() {
    const listaDePlaylist = this.state.playlist.map((playlist) => {
      return (
        <CardPlaylist key={playlist.id}>
          {playlist.name}
          
              


          <button onClick={()=> this.deletaItemDaPlaylist(playlist.id)}>X</button>
        </CardPlaylist>
      );
    });

    return (
      <div>
        <ul>{listaDePlaylist}</ul>
      </div>
    );
  }
}
