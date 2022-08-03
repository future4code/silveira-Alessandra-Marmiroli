const array = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 ] 

//Acima temos um Array de todos os números sem excluir nenhum você soma tudo e o resultado dele será 5050

//Imagina que você tem um array que agora falta um número como o de cima se somar todos os número e subtrair pelo resultado do array completo vai obter o número que falta no array. 

// Exemplo Array completo [1, 2, 3] = somatotal 1+2+3 = 6
//Array faltando apenas um número pode ser o que vc escolher [1, 3] = 1+3 = 4 
//Eu escolhi o número dois para faltar ou seja 6 - 4 = "2" o número que falta no array 

const acharNumero = (array) => {
    const total = 5050 //soma de todos os números sem faltar nenhum número
    let soma = 0 // variável iniciada em 0 
    for (const result of array){//crio uma nova variável do array 
        soma += result
    }
    console.log(total - soma) //soma total do array - soma do novo array e falta um número 
}
acharNumero(array)

const arrayTwo = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47, 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 ] 

const acharNumeroTwo = (array) => {
    const total = 5050 //soma de todos os números sem faltar nenhum número
    let soma = 0 // variável iniciada em 0 
    for (const result of array){//crio uma nova variável do array 
        soma += result
    }
    console.log(total - soma) //soma total do array - soma do novo array e falta um número 
}
acharNumero(arrayTwo)

//***************************************************************************************/
//Não ordenado 
const array2 = [ 86, 18, 19, 33, 67, 10, 93, 34, 50, 25, 55, 44, 83, 73, 13,  4,  3, 36, 80, 56, 91, 96, 32, 69, 97, 59, 70, 20,  2, 87, 54,  9,  7, 27, 43,  8, 17, 95, 53,  1, 39, 21, 31, 81, 24,  6, 62, 58, 57, 51, 23, 99, 84, 79, 38, 66, 60, 72, 88, 40, 22, 37, 35, 52, 26, 41, 90, 49, 89, 76, 74, 75, 14, 16, 82, 65, 48, 30, 68,100, 94, 64, 42, 11, 46, 92, 85, 77, 29, 71, 15, 45,  5, 78, 98, 61, 12, 63, 28]

const array3 = [ 86, 18, 19, 33, 67, 10, 93, 34, 50, 25, 55, 44, 83, 73, 13,  4,  3, 36, 80, 56, 91, 96, 32, 69, 97, 59, 47, 20,  2, 87, 54,  9,  7, 27, 43,  8, 17, 95, 53,  1, 39, 21, 31, 81, 24,  6, 62, 58, 57, 51, 23, 99, 84, 79, 38, 66, 60, 72, 88, 40, 22, 37, 35, 52, 26, 41, 90, 49, 89, 76, 74, 75, 14, 16, 82, 65, 48, 30, 68,100, 94, 64, 42, 11, 46, 92, 85, 77, 29, 71, 15, 45,  5, 78, 98, 61, 12, 63, 28]

const faltaUm = (arr) => {//passando um parâmetro que seria o array 
    arr.sort();//método que ordena o Array 

    for(i = 0; i < arr.length; i++){//verifica a posição 0 do array e o tamanho do array 
        if(i > 0 && arr.includes(i) === false){//se i for maior que zero && includes verifica se a posição consta no array === false 
            return i;//retorna i 
        }
    }
}


console.log(faltaUm(array2))//chamo a função dentro do console.log passando o array2 v
console.log(faltaUm(array3))


