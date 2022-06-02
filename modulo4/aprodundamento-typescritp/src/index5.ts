type consulta = {
    nome:string,
    idade:number,
    dataDaConsulta:string
}
//typar os elementos para poder acessar seus dados 
const listaClientes:consulta [] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Alessandra", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

  function buscarClienteConsultorio(listaClientes:consulta[] ) {
    return listaClientes.sort(function(a,b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    //Método .Sort faz a ordenação *** Dentro do Return faz uma comparação entre os elementos a.nome é menor b.nome se for retorna na posição -1 anterior : senão a.nome maior que b.nome retorna na posição posterior 1 :
  }

  console.log(buscarClienteConsultorio(listaClientes))
  