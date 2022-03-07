/*Exercícios de interpretação de código

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

Neste caso o programa recebeu a informação de número com 
o codigo de string e aprendemos a usar Number para números 

Fazendo então dessa forma: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

//PRIMEIRO PROGRAMA 

const idadeDoUsuario = prompt ("Qual sua idade?")
const idadeAmigo = prompt ("Qual a idade do seu melhor amigo ou da sua melhor amiga?")

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario>idadeAmigo)

console.log("A Diferença de idade é: ", Number(idadeDoUsuario-idadeAmigo))

//SEGUNDO PROGRAMA 

const usuarioPrimeiroValor = Number(prompt ("Insira um número par"))
resultado = usuarioPrimeiroValor % 2
console.log(resultado)

Percebi que todo numero par quando dividido por 2 - sempre resulta em 0. Quando impar resulta
em 1. 

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

*******************************************************************************
a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

const kelvin = (77 - 32)*(5/9) + 273.15
console.log(kelvin)

//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

const fahrenheit = (80)*(9/5) + 32
console.log(fahrenheit)

//Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

const farhrenheit2 = (30)*(9/5) + 32
const  kelvin2 = (farhrenheit2 - 32)*(5/9) + 273.15

console.log(farhrenheit2)
console.log(kelvin2)

//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
const recebeUsuario = prompt("Digite um valor em graus Celsius que deseja converter")
const farhrenheit3 = (recebeUsuario)*(9/5) + 32
const  kelvin3 = (farhrenheit3 - 32)*(5/9) + 273.15

console.log(farhrenheit3)
console.log(kelvin3)

*****************************************************************************
2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto


let quilowatts = 0.05
let consumidoQuilowatts = 280
let calculo = (0.05 * 280)

console.log(calculo)

let calculo2 = (0.05 * 280) * 0.85

console.log(calculo2)
*/

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//20lb equivalem a X kg

//1 lb equivale a 0.454kg 

let libras = 20 
let kg = 0.454
let calcule = (libras * kg)
console.log(calcule)

//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//10.5oz equivalem a X kg
//01 onça equivale a = 0.0283495kg 

let onca = 10.5 
let kg = 0.0283495
let calcule2 = (onca * kg)
console.log(calcule2)

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//100mi equivalem a X m
//01 milha equivale a 1609,34 metros 

let milha = 100
let metros = 1609.34 
let calcule3 = (milha * metros) 
console.log(calcule3)

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//50ft equivalem a X m
//01 ft equivale a 0.3048 metros 

let ft = 50
let metros2 = 0.3048 
let calcule4 = (ft * metros2) 
console.log(calcule4)

//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//103.56gal equivalem a X l
//01 gal equivale a 3.78541

let gal = 103.56 
let litros = 3.78541 
let calcule5 = (gal * litros) 
console.log(calcule5)

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//450 xic equivalem a X l
//01 xic equivale a 0.24 litros 

let xicara = 450 
let litros2 = 0.24 
let calcule6 = (xicara * litros2) 
console.log(calcule6)

//g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

let xicara2 = Number (prompt("Digite quantas xícaras quer converter em litros"))
let litros3 = 0.24 
let calcule7 = (xicara2*litros3)
console.log(calcule7)

//*************DESAFIO CUMPRIDO*****************









