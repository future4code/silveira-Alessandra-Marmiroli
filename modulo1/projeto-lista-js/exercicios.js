
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

 //EXERCÍCIO 0A
function soma(num1, num2) {
     //A função soma recebe duas variáveis num1 num2 e retorna a soma das duas.
    return num1 + num2
  }

  console.log(soma(2, 4))


  //EXERCÍCIO 0B
function imprimeMensagem() {
   //A função imprimeMensagem vai receber uma mensagem que esta registrada na variável mensagem que o Usuario vai digitar e o console vai imprimir esta mensagem.
  const mensagem = prompt("Digite uma mensagem!")

  console.log(mensagem)
}
imprimeMensagem()//a função só funciona se você chamar ela em algum lugar!

 // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

  // EXERCÍCIO 01
  function calculaAreaRetangulo(b, a) {
    let multiplicacao =  (b * a)
    console.log(multiplicacao)
    }
    calculaAreaRetangulo(20, 10)
    //funcao calculaAreaRetangulo recebe dois parametros e a variavel multiplicação registra o calculo, o console imprime a multiplicação

     
  // EXERCÍCIO 02
  function imprimeIdade() {//Funcao vai imprimir a idade 
    const anoAtual = Number (prompt("Qual ano atual?"))
    //variavel anoAtual vai receber do usuário ano atual.
    const anoNascimento = Number (prompt("Digite o ano do seu nascimento"))
   //variavel anoNascimento vai receber do usuário do seu nascimento.
    const calcule = anoAtual - anoNascimento
    //variavel vai calcular anoAtual - anoNascimento
    console.log("Sua idade é: " + calcule + " anos!")
    //console imprime o texto Sua idade é: (calculo)
  }
  imprimeIdade()

   
  
  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
    let imc = peso/(altura*altura)
    console.log(imc)
  }
  calculaIMC(65, 1.57)
  //Na programação sempre usamos ponto ao invés de virgula

  
 
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
    const cor1 = prompt("Digite uma cor")
    const cor2 = prompt("Digite outra cor")
    const cor3 = prompt("Digite a ultima cor")
    
    console.log("Suas cores favoritas são:" , cor1, cor2, cor3)
    // Dada a função imprimeTresCoresFavoritas a variavel cores registra 3 cores favoritas do usuário e imprimi elas na tela
  }
  imprimeTresCoresFavoritas()
  
 // EXERCÍCIO 06
 function retornaStringEmMaiuscula(string) {
  const texto = string.toUpperCase()
  console.log(texto)
  // A função retornaStringEmMaiuscula rece do usuario três informações nome,sobrenome e e-mail, transforma tudo em maiusculo e imprimi no console.log 
}
retornaStringEmMaiuscula("Tenho uma filha que se chama Heloísa e um filho que se chama Matteo")

 // EXERCÍCIO 07
 function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingresso = custo / valorIngresso
  console.log(ingresso)
}
calculaIngressosEspetaculo(1000, 10)
  // a função calculaIngressosEspetaculo recebe dois parâmetros custo e valorIngresso a variavel ingresso faz a divisão do custo pelo valor do ingresso. 


  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    let tamanho1 = string1.length
    let tamanho2 = string2.length
    console.log(tamanho1 == tamanho2)
}
checaStringsMesmoTamanho("amor", "amizade")
checaStringsMesmoTamanho("casa", "amor")
    // a função checaStringsMesmoTamhanho recebe dois parâmetros, na váriavel tamanho1 verifica o tamanho da string1, na variável tamanho2 verifica o tamanho da string2 
    //console.log imprimi se a varivale tamanho 1 é ==(igual) a variável tamanho 2 

// EXERCÍCIO 09
function retornaPrimeiroElemento (array) {
  const numero = array  
  console.log(numero[0])
  // função retornaprimeiroelemento recebe um array na variavel contem a informação do array, o console imprime o primeiro elemento. 
}
retornaPrimeiroElemento([25, 2, 3])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  var ultimo = array
  console.log(ultimo[ultimo.length - 1])
 }
 retornaUltimoElemento([1, 2, 3, 4, 5, 6])


 //EXERCÍCIO 11
 function trocaPrimeiroEUltimo(frase) {
   const fraseCompleta = frase
   const novaFrase = fraseCompleta.replaceAll("laranja", "abacate")
   console.log(novaFrase)
  }
  trocaPrimeiroEUltimo("Eu amo laranja!")

   // EXERCÍCIO 12
 function checaIgualdadeDesconsiderandoCase(string1, string2) {
   console.log(string1.toUpperCase() == string2.toUpperCase())
}
checaIgualdadeDesconsiderandoCase("AMOR", "aMor")



// EXERCÍCIO 13
function checaRenovacaoRG() {
  let documento = Number (prompt("Digite o ano atual"))
  let documento2 = Number (prompt("Digite o ano de vencimento da sua habilitação"))
  let calculoVencimento =  documento2 - documento
  console.log("Faltam " + calculoVencimento + " anos para o vencimento." )

}
checaRenovacaoRG()

//EXERCÍCIO 14
function checaAnoBissexto() {
  let ano = Number (prompt("Digite o ano atual"))
  if (ano % 400 == 0)
        resposta = "É bissexto";
       else
        if (ano % 4 == 0 && ano % 100 !=0 )
         resposta = "É bissexto";
        else
         resposta = "Não é bissexto";
  console.log(resposta)
     }
     checaAnoBissexto()




  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu(dataAtual) {
    
    var dataHoje = dataAtual
    var encerramentoDeInscricao = ('2022-02-25');
    if (dataHoje > encerramentoDeInscricao)
      resposta = "Prazo de inscrição encerrado...";
    else
      resposta = "Você esta dentro do prazo!";


    console.log(resposta)
  }
  checaValidadeInscricaoLabenu('2022-02-19')