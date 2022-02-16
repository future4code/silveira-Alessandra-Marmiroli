//Exercícios de interpretação de código//

const bool1 = true //(verdadeira)
const bool2 = false //(falsa)
const bool3 = !bool2 //(true)

let resultado = bool1 && bool2
console.log("a.", resultado)//= false 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //= false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //= false

console.log("d. ", typeof resultado) // = boolean 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/**Neste caso o programa recebeu a informação de número com 
o codigo de string e aprendemos a usar Number para números 

Fazendo então dessa forma: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)**/

//PRIMEIRO PROGRAMA 

const idadeDoUsuario = prompt ("Qual sua idade?")
const idadeAmigo = prompt ("Qual a idade do seu melhor amigo ou da sua melhor amiga?")

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario>idadeAmigo)

console.log("A Diferença de idade é: ", Number(idadeDoUsuario-idadeAmigo))

//SEGUNDO PROGRAMA 

const usuarioPrimeiroValor = Number(prompt ("Insira um número par"))
resultado = usuarioPrimeiroValor % 2
console.log(resultado)

/**Percebi que todo numero par quando dividido por 2 - sempre resulta em 0. Quando impar resulta
em 1. **/

const idade = Number (prompt ("Qual sua idade?"))
console.log ("Sua idade em meses é ", idade * 12)
console.log ("Sua idade em dias é ", idade * 365)
console.log ("Sua idade em horas é ", idade * 365 * 24)

const primeiroNumero = Number(prompt("Digite o primeiro número: "))
const segundoNumero = Number(prompt("Digite o segundo número: "))

console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero)
console.log("O primeiro é divisível pelo segundo?", primeiroNumero % segundoNumero == 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero == 0)

