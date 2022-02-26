/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    function comprarCarta() {
      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
      // Cria array de naipes
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
      // Sorteia uma carta
      const numero = cartas[Math.floor(Math.random() * 13)]
    
      // Sorteia um naipe
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
    
      // Verifica se é uma das letras e coloca o valor correspondente na variável valor
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
      }
    
      // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
   }


console.log ("Bem-vindo (a) ao jogo de Blackjack!")

var confirm = confirm ("Quer iniciar uma nova rodada?")

if(confirm == true){
	console.log("Vamos começar!")
   
   const arrayUsuario = []
 
   let recebeCarta = comprarCarta()
   arrayUsuario.push(recebeCarta)
   
   let recebeCarta2 = comprarCarta()
   arrayUsuario.push(recebeCarta2)
   console.log(arrayUsuario)
   
   const arrayComputador = []
 
   let carta = comprarCarta()
   arrayComputador.push(carta)
 
   let recebe2 = comprarCarta()
   arrayComputador.push(recebe2)
   console.log (arrayComputador)

   let pontosUsuario = recebeCarta.valor + recebeCarta2.valor
   let pontoComputador = carta.valor + recebe2.valor

   console.log(`Pontuação do Usuário :`, pontosUsuario,`Pontuação do Computador :`, pontoComputador)

   if (pontosUsuario > pontoComputador){
      console.log("Parabéns Usuário ganhou!")
   }else if (pontoComputador > pontosUsuario){
      console.log("Parabéns Computador ganhou!")
   }else if (pontoUsuario === pontoComputador){
      console.log("O Jogo deu Empate!")
   }
}
else{
	console.log ("Fim de Jogo!")
}







