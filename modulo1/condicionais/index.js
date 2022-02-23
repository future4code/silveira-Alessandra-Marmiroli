Exercícios de interpretação de código
if (numero % 2 === 0) {// se o restante da divisão for igual a 0
  console.log("Passou no teste.")//imprime passou no teste 
} else {//senão for 0 
  console.log("Não passou no teste.")//imprime não passou no teste.
}
a) Explique o que o código faz. Qual o teste que ele realiza? 
//A variavel recebe um número do usuário e devolve uma resposta ao usuário.
//Um teste de comparação do resto da divisão.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Igual a zero

c) Para que tipos de números a mensagem é "Não passou no teste"?
//Qualquer outro número que não seja 0. 


a) Para que serve o código acima?
//Para consultar um item em uma lista de itens.Neste caso o usuário digita uma fruta e quando o código encontrar essa fruta ele vai parar e dizer o preço dela. 

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta Maçã é R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//Vai executar o próximo código que seria preco 5
//O preço da fruta Pêra é R$ 5.00

a) O que a primeira linha está fazendo?
//Recebendo um número qualquer do usuário. 
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se o número for maior que 0: "Essa mensagem é secreta!!!"
//Se o número for menor que 0: Não imprime nenhuma mensagem - Undefined 

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//console.log("Esse número passou no teste") - para ser acessada essa informação deveria estar do lado de fora da função.

//Exercícios de escrita de código

function perguntaIdade (){
  const textoDoUsuario = Number (prompt("Qual sua idade?"));
  if(textoDoUsuario>=18) {
    console.log("Você pode dirigir")
  }
  else {
    console.log("Você não pode dirigir.")
  } 
}

perguntaIdade()

function turnoAluno (){
  const mvn = prompt ("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
  if(mvn == "M" || mvn == "m"){
    console.log( "Bom Dia!")
  }
  if(mvn == "V" || mvn == "v"){
    console.log("Boa Tarde!")
  }
  if(mvn == "N" || mvn == "n"){
    console.log("Boa Noite!")
  }
}
turnoAluno()


function estrutura (periodo){
  switch(periodo){
      case"M":
      console.log("Bom dia!")
          break;
      case "V":
          console.log("Boa Tarde!")
          break;
      case "N":
          console.log("Boa Noite!")
          break;
      default:
          console.log("Outro período indisponível!")
  }
}

const periodo = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
estrutura(periodo)

function verFilme(){
  const genero = prompt("Digite o gênero do filme")
  const preco = Number(prompt("Digite o valor do ingresso"))
  if (genero == "fantasia" && preco <= 15)
    console.log("Bom filme!")
  else
    console.log("Escolha outro filme :(")
}
verFilme()

//DESAFIO 
function verFilme(){
  const genero = prompt("Digite o gênero do filme")
  const preco = Number(prompt("Digite o valor do ingresso"))
  if (genero == "fantasia" && preco <= 15){
    const snack = prompt("Qual snack que você quer comprar?") 
    console.log("Bom filme!")
    console.log("Aproveite o seu " + snack + "!")
  }
  else {
    console.log("Escolha outro filme :(")
  }
}
verFilme()

function vendasIngresso(){
  const nome = prompt("Digite seu nome completo:")
  const tipo = prompt("Digite o tipo de jogo: IN (internacional ou DO (doméstico)")
  const etapa = prompt("Digite a etapa do jogo: ")
}



