//TAREFA DO ZERO 

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) 

/**comentário: é possível observar que na primeira situacao a = 10 e b = 10 
o console irá imprimir esses valores 
Algo muda onde b recebe um novo valor no caso 5 então b = 5 o console vai imprimir

a = 10, b = 5 
**/
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
/**No primeiro momento a = 10 e b = 20 logo abaixo c vai ser igual a letra a, portanto
a = 10 e c = 10 e b = c  sendo assim b = 10 **/


let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let recebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebePorDia/horasTrabalhadas} por hora`)


const nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual sua idade?")

console.log (typeof nome, typeof idade) 
/**Comentário Aqui foi usado o comando typeof para identificar
a string usada refere-se à texto.**/


const nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual sua idade?")

console.log (nome, "Alessandra");
console.log (idade, "34 anos");


const nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual sua idade?")

console.log (typeof nome, "Alessandra");
console.log (typeof idade, "34 anos");

//COMENTÁRIO: AQUI NO CASO IMPRIME AS STRINGS 
