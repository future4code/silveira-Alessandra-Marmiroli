//ATIVIDADE 16/02
let array
console.log('a. ', array)
//variável não declarada undefined
array = null
console.log('b. ', array)
//variavel declarada Null - valor nulo - objeto inesistente 
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//A propriedade length nos diz a quantidade de itens dentro do array 
let i = 0
console.log('d. ', array[i])
//a variavel i = 0 portanto dentro da array quem ocupa essa posição 0 é o 3 portanto console imprime array [i] que será o numero 3
array[i+1] = 19
console.log('e. ', array)
//alteracao na váriavel de array retirando o 4 que esta na posicao 1 por e substituindo por 19 nao entendi pq o numero 11 apresentado no console  
const valor = array[i+6]
console.log('f. ', valor)
//propriedade array quem esta na posição i = 3 + 6 numeros retirar o numero 9 

const frase = prompt("Digite uma frase")
//Usuario digite uma frase 
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ONIBUS EM MIRROCOS - 5 ELEMENTOS 
/**console imprime a frase com letras maiusculas, mude as letras A por I e diga por quantos elementos/palavras essa frase é formada. **/

const nome = prompt("Qual seu Nome?")
const emailDoUsuario = prompt("Qual seu E-mail?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}.`)**/

const comidaFavoritas = ["Filé Parmegiana", "churrasco", "lasanha", "salada", "caldos"];
console.log(comidaFavoritas[0], comidaFavoritas[1], comidaFavoritas[2], comidaFavoritas[3], comidaFavoritas[4] )

console.log (`Essas são minhas comidas preferidas:`)
console.log(comidaFavoritas[0])
console.log(comidaFavoritas[1])
console.log(comidaFavoritas[2])
console.log(comidaFavoritas[3])
console.log(comidaFavoritas[4])

const favoritaDoUsuario = prompt ("Qual sua comida favorita?")
comidaFavoritas[1] = favoritaDoUsuario
console.log(comidaFavoritas) 

let listaDeTarefas = []

let tarefa1 = prompt ("Indique a primeira tarefa")
let tarefa2 = prompt ("Indique a primeira tarefa")
let tarefa3 = prompt ("Indique a primeira tarefa")
/**PRETENDO TERMINAR O EXERCICIO E ENVIAR O RESTANTE DEPOIS */