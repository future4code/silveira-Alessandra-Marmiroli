//EXERCICIO DE FIXACAO NOTE INTERPRETACAO DE CODIGO!

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/**RESPOSTA A - VAI SER IMPRESSO A MULTIPLICACAO 2*5=10 E 10*5= 50 
RESPOSTA B - SE TIRAR O console.LOG NAO VAI IMPRIMIR A FUNÇÃO - VAI APARECER UNDEFINED*/

let textoDoUsuario = prompt("Insira um texto");
//PEDE PARA O USUARIO INSERIR UM TEXTO
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
//CRIA A FUNCAO QUE RETORNA UM TEXTO TRANSFORMADO EM MINUSCULA E VERIFICA SE HÁ A PALAVRA CENOURA RETORNANDO COM TRUE OU FALSE
const resposta = outraFuncao(textoDoUsuario)
//CRIA CONSTANTE QUE RECEBE O RETORNO DA FUNCAO 
console.log(resposta)
//CONSOLE IMPRIME A RESPOSTA -TEXTO DO USUARIO COM AS ALTERAÇÕES CITADAS NO RETURN 

/**LETRA B - SAÍDA DO CONSOLE 
Eu gosto de cenoura  - eu gosto de cenoura - true
CENOURA é bom pra vista - cenoura é bom pra vista - true 
Cenouras crescem na terra - cenoura crescem na terra - true*/

function Eu(){
    console.log("Eu sou Alessandra, tenho 35 anos, moro em Presidente Prudente e sou estudante.")
}
Eu()


function criarFrase (nome, idade, cidade, profissão){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)    
}

criarFrase('Alessandra', '25', 'Presidente Prudente', 'Estudante')


//----------------------------------------
function soma(a,b){
    return a + b
}
console.log(soma(5,5))

function primeiroEhMaiorOuIgual(a,b){
    return a >= b
}
console.log(primeiroEhMaiorOuIgual(1,5))

function ehPar(a){
    return a % 2 == 0
}
console.log(ehPar(3))

function fraseMaior(texto){
    console.log(texto.length)
    texto = texto.toUpperCase()
    console.log(texto)
}
fraseMaior('aaa aaa')
//---------------------------------------

function Operações (){
const Usuario1 = Number (prompt ("Digite um número"))
const Usuario2 = Number (prompt ("Digite outro número"))
let soma = (Usuario1 + Usuario2)
let subtracao = (Usuario1 - Usuario2)
let multiplicacao = (Usuario1 * Usuario2)
let divisao = (Usuario1 / Usuario2)

console.log (soma)
console.log (subtracao)
console.log (multiplicacao)
console.log (divisao)
}
Operações()

