//Exercícios de interpretação de código
//01 - A variável (valor) recebe 0 de número - o (for) laço vai verificar se  (i) é igual a 0 e se (i)é menor que 5 seguindo em frente para o próximo número pois esta contando de um em um. O console imprime (0, 1, 2, 3, 4). 
//******************************************************************************
/*a) O que vai ser impresso no console?
//[19, 21, 23, 25, 27, 30]
/*b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
É possível desde que exista um array dentro da function [10, 20, 30] ou váriavel informando a posicao do numero e imprimindo no console sua posicao [0] = 10*/
//03 - Este programa recebe um número do usuário verifica se a partir do numero atual sendo 0 a partida inicial a cada leitura ele aumenta de um em um até chegar no número do usuário a quantidade de asteriscos do for.  
//Exercícios de escrita de código

//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let bichos = Number(prompt ("Quantos bichinhos de estimação ele tem"))
    if (bichos == 0){
console.log("Que pena! Você pode adotar um pet!")
}else if(bichos > 0){
    let i = 0 
    while(i < bichos){
        nomeBicho = prompt("Digite o nome do seus pets: ")
        i++;
    }
    console.log(nomeBicho)
}




