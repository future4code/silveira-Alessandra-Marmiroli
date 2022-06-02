enum SETORES {
    MARKETING = "marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro"
}

type Pessoas = {
    nome:string,
    salario:number,
    setor:SETORES,
    presencial?:boolean
}

const listaFuncionarios: Array<Pessoas>=[
	{ nome: "Marcos", salario: 2500, setor:SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor:SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor:SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor:SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor:SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor:SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor:SETORES.MARKETING, presencial: true }
]

const funcionario:Pessoas[] = []

function buscarFuncionarios(listaFuncionarios:Array<Pessoas>) {

    return listaFuncionarios.filter(
      (funcionario) => {
        return funcionario.setor === SETORES.MARKETING && funcionario.presencial === true
      }
    )
  }

  console.log(buscarFuncionarios(listaFuncionarios))