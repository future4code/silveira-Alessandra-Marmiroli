//Exercícios de interpretação de código
//01 - A variável (valor) recebe 0 de número - o (for) laço vai verificar se  (i) é igual a 0 e se (i)é menor que 5 seguindo em frente para o próximo número pois esta contando de um em um. O console imprime (0, 1, 2, 3, 4). 
//******************************************************************************
/*a) O que vai ser impresso no console?
//[19, 21, 23, 25, 27, 30]
/*b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
É possível desde que exista um array dentro da function [10, 20, 30] ou váriavel informando a posicao do numero e imprimindo no console sua posicao [0] = 10
//03 - Este programa recebe um número do usuário verifica se a partir do numero atual sendo 0 a partida inicial a cada leitura ele aumenta de um em um até chegar no número do usuário a quantidade de asteriscos do for.  

//Exercícios de escrita de código

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let bichos = Number(prompt ("Quantos bichinhos de estimação você tem?"))
    if (bichos == 0){
        console.log("Que pena! Você pode adotar um pet!")
    }
    if (bichos > 0){
        let i = 0
        array = []
        while (i < bichos){
            let estimacao = prompt("Qual o nome deles?")
            array.push (estimacao)
            i++
        }
        
    }
    console.log([array])

//EXERCÍCIO 02

LETRA A -
function imprimeArray (){
    arrayOriginal = [10, 20, 30, 40, 50]
    let i = 0
    while (i < arrayOriginal.length){
        console.log(arrayOriginal[i])
        i++    
    }
}
imprimeArray()

LETRA B - 

function dividePorDez (){
    arrayOriginal = [10, 20, 30, 40, 50]
    let i = 0
    while (i < arrayOriginal.length){
        let divide = arrayOriginal[i]/10
        console.log(divide)
        i++    
    }
}
dividePorDez()


LETRA C  - 

function novoArray (){
    arrayOriginal = [ 5, 10, 15, 20, 25]
    arrayNovo = []
    let i = 0
    while (i < arrayOriginal.length){
        let numero = arrayOriginal[i]
        if (numero % 2 == 0){
            arrayNovo.push (numero)}
        i++    
        }
    console.log(arrayNovo)
}
novoArray()


//LETRA D - 

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

function arrayStrings (){
    arrayOriginal = [2, 4, 6, 8, 10]
    arrayNovo = []
    const index = "O elemento do índex é: "
}
console.log()*/

const array = ["banana", "morango", "kiwi", "melancia", "abacaxi"]
console.log (array [0])
console.log (array [1])
console.log (array [2])
console.log (array [3])
console.log (array [4])

//for(let i=0; i<5; i++){
//    console.log (array[i])
//}
for(let i=0; i<5; i++){
if (array[i] === "abacaxi"){
    console.log("Achou!")
}
else{
    console.log("Não é")
}
}

    

    

    



