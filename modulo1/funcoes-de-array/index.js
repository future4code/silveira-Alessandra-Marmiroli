Exercícios de interpretação de código
1 - A Variável usuários guarda um array lista. Uma nova variável noArray= recebe a variável usuario e mapeia o item de cada nome o index a posição e o tamanho desse array aqui no caso contém 3 itens e imprime isso no console.log. 
Nome: Amanda Rangel, apelido: Mandi sua posição no array: 0
Nome: Lais Petra, apelido: Laura sua posição no array: 1
Nome: Letícia Chijo, apelido: Chijo sua posição no array: 2
*********************************************************************************
2  - A Variável usuários guarda um array lista.Uma nova variável noArrayB = recebe a variável usuario e mapeia o item de cada nome o index a posição e o tamanho desse array porém retorna apenas o item nome o console imprime 
Amanda Rangel 
Laís Petra 
Letícia Chijo
*********************************************************************************
3 - A Variável usuários guarda um array lista.Uma nova variável noArrayC = recebe a variável usuario e filtra apenas o item de cada nome o index a posição e o tamanho desse array porém aqui vai retornar "Mandi" e "Laura" porque "Chijo" esta em negação.
********************************************************************************* 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const arrayDeCachorrinho = pets.map((item, index, array) => {
    return item.nome
 })
const novoArrayCachorrinho = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
 })
const arrayMensagem = pets.filter((item, index, array) => {
   return item.raca == "Poodle"  
   
})
.map(item =>{
   const cachorrinho = ("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome + item.raca)
   return cachorrinho

}) 

console.log(arrayMensagem)

EXERCICIO 02

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const arrayProdutos = produtos.map((item, index, array) => {
   return item.nome   
   
})
console.log(produtos)




