import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "alessandra-sandeski-silveira"
  }
};

export default class App extends React.Component {
  state = {
      usuarios: [],
      InputName: "",
      InputEmail: "",
  }
    
  componentDidMount() {
  this.getAllUsuarios();


  getAllUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios.get(url, headers)
    .then((res) => {
      console.log(res.data);
      this.setState({usuarios:res.data})
    })
    .catch((err) => {
      console.log(err.res.data);
    });
  };
    
  
  PostCreatUser = () => {
    const body = {
      nome: this.state.InputName,
      email: this.state.InputEmail
    };
    
    const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      axios.post(url, body, headers)
       .then((res) => {
        this.getAllUsers();
        this.setState({
          InputName: "",
          InputEmail: ""
        })
        alert(`Cadastro Concluído!`)
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  onChangeName = (event) => {
    this.setState({ InputName: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ InputEmail: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({ InputBusca: event.target.value })
  }

}};

render() {
      const Users = this.state.usuarios.map((usuario)=>{
        return <li key={usuario.name}></li>
    });
    
}
return(
  <div>
    <button>Trocar de Tela</button>
      <label>
        <input/>
        <input/>
      </label>
    <button onClick={this.PostCreateUser}>Criar Usuário</button>
    <ul>{Users}</ul>
  </div>
  )

