// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const array = ["azul", "amarelo", "vermelho"]

function retornaTamanhoArray(array) {
    return array.length
    
}
console.log([array.length])

// EXERCÍCIO 02

const numeros = [0,8,23,16,10,15,41,12,13]

function retornaArrayInvertido(array) {
     return array.reverse();
}

// EXERCÍCIO 03

let array = [36,12,56,7,3]
function comparar(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
function retornaArrayOrdenado(array) {
    return array.sort(comparar);
}


// EXERCÍCIO 04
let array = [1, 2, 3, 4, 5, 6, 7, 8]

function retornaNumerosPares(array) {
    let arrayNovo = []

    for (var i = 0; i < 8; i++)
        if (array[i] % 2 == 0){
            arrayNovo.push(array[i])
        }
    return arrayNovo
}   

// EXERCÍCIO 05

let array = [1, 2, 3, 4, 5, 6]
function retornaNumerosParesElevadosADois(array) {
    let arrayNovo = []
    for (var i = 0; i < 6; i++)
        if (array[i] % 2 == 0){
            arrayNovo.push(array[i] **2)
        }
    return arrayNovo 
}

// EXERCÍCIO 06
let array = [1, 5, 3, 7, 5, 2]
function retornaMaiorNumero(array) {
    const max = Math. max(...array);
    return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
let escaleno = [1, 2, 4]
let isosceles = [1, 2, 1]
let equilatero = [5, 5, 5]

function classificaTriangulo(ladoA, ladoB, ladoC) {
   const calculo = ladoA * ladoB / ladoC
    if (ladoA == ladoB && ladoB == ladoC) {
        "Triangulo Equilátero"

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}