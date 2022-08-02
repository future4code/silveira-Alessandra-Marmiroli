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
