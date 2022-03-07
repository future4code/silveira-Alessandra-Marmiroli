/*Exercícios de interpretação de código
console.log(filme.elenco[0])
No console este comando busca dentro da variável filme e variável elenco a posição [0] "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1])
Essa propriedade length - 1 busca o último elemento neste caso "Virginia Cavendish"
console.log(filme.transmissoesHoje[2])
O console imprime as informações contidas em transmissõesHoje : {canal: "Globo", horario: "14h"}


//Exercícios 2 de interpretação de código
console.log(cachorro)
imprime: 
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"
console.log(gato)
imprime: 
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"
console.log(tartaruga)
nome: gato.nome.replaceAll("a", "o") - vou buscar em gato.nome JUBA e trocar a leta a pelo o 
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Copia as informações contidas dentro da variável anterior, mantendo um padrão. 

//Exercícios 3 de interpretação de código
console.log(minhaFuncao(pessoa, "backender"))
console imprime em minha função na variável pessoa, "backender" 
FALSE 
console.log(minhaFuncao(pessoa, "altura"))
console imprime minha função pessoa, "altura" 
Undefined.

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

Foi definido uma função que continha uma informação na variável pessoa "backender" mas que essa informação era FALSA. 
E Não havia nenhuma informação em uma variável pessoa "altura". 


const informacao = {
    nome : "Alessandra",
    apelidos: ["Ali", "le","fofa"]
}
console.log(informacao)

	function informacao2 (informacao){
	return `Eu sou a ${informacao.nome}, mas pode me chamar de: ${informacao.apelidos[0]}, ${informacao.apelidos[1]}, ${informacao.apelidos[2]}.`
}
informacao2(informacao)

const novaInformacao = {...informacao, apelidos: ["lele", "ale", "bela"]}
console.log(informacao2(novaInformacao))


const pessoa = {
	nome: "Luana",
	idade: 23,
	profissao: "Estudante"
}
const pessoa2 = {
	nome:"Laura",
	idade: 32,
	profissao: "Professora"
}
function cadastro (pessoa){
	const array = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
	return array
}

console.log(cadastro(pessoa))
console.log(cadastro(pessoa2))

const carrinho = []

const fruta1 = {
	nome: "Banana",
	disponibilidade: true
}	
const fruta2 = {
	nome: "Laranja",
	disponibilidade: true
}
const fruta3 = {
	nome: "Morango",
	disponibilidade: true
}
function acrescentacarrinho (fruta){
	carrinho.push(fruta)
}
acrescentacarrinho(fruta1)
acrescentacarrinho(fruta2)
acrescentacarrinho(fruta3)
console.log(carrinho)

*******************DESAFIO*********************


//Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function perfilUsuario (){
	const pergunta1 = prompt("Qual seu nome?")
	const pergunta2 = Number (prompt("Qual sua idade?"))
	const pergunta3 = prompt("Qual sua profissão?")
	const pessoa = {
		nome: pergunta1,
		idade: pergunta2,
		profissao: pergunta3
	}
	console.log(typeof (pessoa))
	console.log(pessoa)
}
perfilUsuario()

//Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true


const hermanoteu = {
	nome: 'Hermanoteu na terra de Godah',
	lancamento: 2022,
}
const tarsilinha = {
	nome: 'Tarsilinha',
	lancamento: 2022,
}
function objeto (filme, filme2){//Criei uma função que vai comparar dois Objetos!
	console.log(filme.lancamento < filme2.lancamento)
	console.log(filme.lancamento === filme2.lancamento)
}

objeto(hermanoteu, tarsilinha)//Quando chamar a função deve-se passar o nome dos objetos que serão comparados!

//Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. */

const carrinho = []

const fruta1 = {
	nome: "Banana",
	disponibilidade: true
}	
const fruta2 = {
	nome: "Laranja",
	disponibilidade: true
}
const fruta3 = {
	nome: "Morango",
	disponibilidade: true
}
function acrescentacarrinho (fruta){
	carrinho.push(fruta)
}
function disponibilidade (fruta){
	fruta.disponibilidade = false//Apenas passei a informação para a função que retorne como false. 
}
disponibilidade(fruta1)
console.log(fruta1)




















