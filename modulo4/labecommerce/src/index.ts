import express, { Express, Request, Response, } from "express";
import cors from "cors";
import { connection } from "./data/connection";


const app: Express = express();
app.use(express.json());
app.use(cors());

//Criando o usuário - função assíncrona utilizando async e await, body, uma resposta de sucesso. 

app.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            throw new Error("Por gentileza informe os campos corretamente")
        }
        await connection("labecommerce_users")
            .insert({
                id: Date.now().toString(),
                name,
                email,
                password
            });
        res.status(200).send({ message: "Usuário criado com sucesso!" })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


// Busca por todos os usuários!

app.get("/users", async (req: Request, res: Response) => {
    try {
        const table = await connection("labecommerce_users")
        res.status(200).send({ table })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})

// CRIAR PRODUTO 

app.post("/products", async (req: Request, res: Response) => {
    try {
        const { name, price, image_url } = req.body
        if (!name || !price || !image_url) {
            throw new Error("Por gentileza informe os campos corretamente")
        }
        await connection("labecommerce_products")
            .insert({
                id: Date.now().toString(),
                name,
                price,
                image_url
            });
        res.status(200).send({ message: "Produto criado com sucesso!" })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// PEGAR OS PRODUTOS 

app.get("/products", async (req: Request, res: Response) => {
    try {
        const table = await connection("labecommerce_products")
        res.status(200).send({ table })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})

// REGISTRO DE COMPRAS 
app.post("/purchases", async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            throw new Error("Por gentileza informe os campos corretamente")
        }
        await connection("labecommerce_purchases ")
            .insert({
                id: Date.now().toString(),
            });
        await connection("labecommerce_purchases ")
        
        res.status(200).send({ message: "!" })

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})


const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});