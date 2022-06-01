import express, { Request, Response } from "express";
import cors from "cors";
import { Product, products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 01 

app.get("/test", (request: Request, response: Response) => {
    response.status(200).send("Testando a API!")
})

//Exercício 03 - Endpoint que cria novo produto e retorna lista de produtos atualizada. Id do produto gerar automaticamente pela API!

app.post("/criaProduto", (req: Request, res: Response) => {
    const namePostman = String (req.body.name)
    const pricePostman = Number (req.body.price)
    //passo as propriedades  que espero receber do body da minha requisicao do postman
    
    const criandoProduto = 
    {id:Date.now().toString(), name:namePostman, price:pricePostman} 
    //id automatico aqui o name do produto novo recebe o nome que vem do postman.

    products.push(criandoProduto)
    //empurrando o produto novo no array de produtos 

    console.table(criandoProduto);
    //imprimir a funcao nova 

    res.status(200).send(products)//aqui apenas chamo o array de produtos
})

//exercicio 04 - retornando os produtos 
app.get("/retornaProdutos", (request: Request, response: Response) => {
    response.status(200).send(products)

})

// Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.

app.put("/editaPreco/:id", (req: Request, res: Response) => {
    const id = req.params.id as string
    const price = req.body.price;
    
    //Aqui faço um filtro em products pelo id do Produto
    //guardo as informações em findProduct
    const findProduct = products.find((product)=>{
        return product.id === id
        
    }) 
    //Aqui manda a mensagem de ERRO pro usuário
    if(!findProduct){
        throw new Error("Produto não encontrado")
    }
    findProduct.price = price
    
    res.status(200).send(products)
    //fazer uma funcao pra editar o o que usuario vai digitar no postman 

})

app.delete("/deletaProduto/:id", (request: Request, response: Response) => {
    const id = String (request.params.id) 
    //aqui estou fazendo um filto dos productos sem o id produto que o usuário digitar
    const deleteProduct = products.filter((product)=>{
        if ( product.id !== id){//id do produto diferente/negacao! id do ususario
            return product
        }
        
    }) 

    response.status(200).send({deleteProduct})
})


app.post("/criaProduto2", (req: Request, res: Response) => {
    const authorization = req.headers.authorization;
    const namePostman = String (req.body.name)
    const pricePostman = Number (req.body.price)

    const criandoProduto = 
    {id:Date.now().toString(), name:namePostman, price:pricePostman} 
    products.push(criandoProduto)

    if (namePostman !== "string" && pricePostman <= 0){//Se o usuário digitar o nome do produto no postman push na função
        // products.push(criandoProduto)
        // res.status(201).send({products})
        res.status(400).send("Insira uma string e um numero acima de 0")
    }
    // if (pricePostman <= 0){
    //     res.status(400).send("Insira um número acima de 0")
    // }

       
     // console.table(criandoProduto);
    // res.status(200).send(products)
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});