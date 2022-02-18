// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // A função soma recebe duas variáveis num1 num2 e retorna a soma das duas.
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // A função imprimeMensagem vai receber uma mensagem que esta registrada na const mensagem que o Usuario vai digitar e o console vai imprimir esta mensagem.
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(b, a) {
  let multiplicacao =  (b * a)
  console.log(multiplicacao)
  //funcao calculaAreaRetangulo recebe dois parametros e a variavel multiplicação registra o calculo, o console imprime a multiplicação

}
calculaAreaRetangulo(20, 10)

// EXERCÍCIO 02
function imprimeIdade() {//Funcao vai imprimir a idade 
  const anoAtual = Number (prompt("Qual ano atual?"))
  //variavel anoAtual vai receber do usuário ano atual.
  const anoNascimento = Number (prompt("Digite o ano do seu nascimento"))
 //variavel anoNascimento vai receber do usuário do seu nascimento.
  const calcule = anoAtual - anoNascimento
  //variavel vai calcular anoAtual - anoNascimento
  console.log("Sua idade é:"(calcule))
  //console imprime o texto Sua idade é: (calculo)
}
imprimeIdade()


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = (altura*altura)/peso
  console.log(imc)
}
(calculaIMC(160, 160, 60))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const dadosDoUsuario = prompt("Digite seu nome")
  const dadosDoUsuario2 = Number (prompt("Digite sua idade"))
  const dadosDoUsuario3 = prompt("Digite seu e-mail")
  console.log("Meu nome é:", dadosDoUsuario, "tenho", dadosDoUsuario2, "e o meu e-mail é:", dadosDoUsuario3)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores = prompt("Digite 3 cores favoritas?")
  console.log(cores) 
  // Dada a função imprimeTresCoresFavoritas a variavel cores registra 3 cores favoritas do usuário e imprimi elas na tela
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const frase = prompt("Qual seu nome?")
  const frase2 = prompt("Qual seu sobrenome")
  const frase3 = prompt("Informe aqui seu e-mail")
  const maiuscula = frase.toUperCase() + frase2.toUpperCase() + frase3.toUpperCase()
  console.log("Seu nome é:", frase, "Sobrenome", frase2, "seu e-mail:", frase3.toUperCase())
  // A função retornaStringEmMaiuscula rece do usuario três informações nome,sobrenome e e-mail, transforma tudo em maiusculo e imprimi no console.log 
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let  = 
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const check = (string1, string2)
  console.log(check.length)
  // função checastrings recebe dois parametros, a variavel check vai receber os parametros e imprimir no console se essas variáveis tem o mesmo tamanho. 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let retorna = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(retorna(0))
  // função retornaprimeiroelemento recebe um array na variavel contem a informação do array, o console imprime o primeiro elemento. 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let retorna = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(retorna(9))
  // função retornaultimoelemeto recebe um array na variavel contem a informação do array, o console imprime o ultimo elemento. 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let troca = alert ("Eu adoro torta de frango")
  let mudancaDePalavra = 
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}