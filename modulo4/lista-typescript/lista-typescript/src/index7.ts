type DadosProduto = {
    nome:string,
    quantidade:number,
    valorUnitario:number | string,
}

const produtosDaEmpresa: Array<DadosProduto>=[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco:number):string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

function corrigePreco (produtosDaEmpresa:Array<DadosProduto>){
    for ( var i = 0; i < produtosDaEmpresa.length; i++ ){
        // console.log(produtosDaEmpresa[i])
        // console.log(produtosDaEmpresa[i].valorUnitario)
        const novoValor:any = produtosDaEmpresa[i].valorUnitario
        const precoAjustado = (ajustaPreco(novoValor))
        console.log(`{ nome: ${produtosDaEmpresa[i].nome}, quantidade: ${produtosDaEmpresa[i].quantidade}, valor unitário: ${precoAjustado} }`)
    }
}

corrigePreco(produtosDaEmpresa)