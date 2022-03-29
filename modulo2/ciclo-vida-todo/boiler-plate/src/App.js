import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), // Explicação abaixo
        texto: 'Fazer Exercício',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Assistir Aula',
        completa: true // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    localStorage.setItem("mudancaTarefa", JSON.stringify(this.state.tarefas))


  };

  componentDidMount() {
    const novaMudancaTarefa = localStorage.getItem("mudancaTarefa")
    const tarefaNovaMudanca = JSON.parse(novaMudancaTarefa)
    this.setState({mudancaTarefa:tarefaNovaMudanca})

  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }

  criaTarefa = () => {
    const criandoUmaTarefa =   
    {
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false 
    }
    const novaTarefa = [...this.state.tarefas, criandoUmaTarefa];
    this.setState({tarefas:novaTarefa,
    inputValue:""})/*Aqui deixo o input vazio*/ 
  }

  selectTarefa = (id) => {
    const  novaListaDeTarefas = this.state.tarefas.map((tarefa)=>{
      if(tarefa.id === id){
        const novasTarefas = {
          ...tarefa,
          completa: !tarefa.completa

        }
        return novasTarefas
      
      }
      })
    
        this.setState({tarefas:novaListaDeTarefas})

  };

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
