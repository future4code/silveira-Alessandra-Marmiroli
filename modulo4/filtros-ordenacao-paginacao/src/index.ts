import express, { Request, Response } from "express";
import { app } from "./app";
import { connection } from './data/connection'

// app.get("/recipes", getAllRecipes)


//EXERCICIO 01 LETRA A)
export default async function selectAllUsers(name: string): Promise<any> {
    const result = await connection.raw(`
       SELECT name FROM aula49_exercicio;
    `)

    return result[0]
}

app.get("/users", async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name
        const users = await selectAllUsers(name as string)

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

//a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**. O parametro é name as string que esta dentro da funcao selectAllUsers.

//LETRA B)

async function usersType(type: string): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE type LIKE "%${type}%";
    `)

    return result[0]
}

app.get("/users/:type", async (req: Request, res: Response): Promise<void> => {
    try {
        const tipo = req.params.type
        const users = await usersType(tipo as string)

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

//EXERCÍCIO 02 

/**Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email. */

async function ordenacaoSort(name: string): Promise<any> {


    // return result[0]
}

app.get("/usersorder", async (req: Request, res: Response): Promise<void> => {
    try {
        const table = "aula49_exercicio"
        const name = req.query.name
        let sort = req.query.sort as string
        let order = req.query.order as string

        const result = await connection(table)
            .where('name', 'LIKE', `%${name}%`)
            .orderBy(sort, order)


        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

//EXERCÍCIO 03
//Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.

app.get("/userspage", async (req: Request, res: Response): Promise<void> => {
    try {

        const table = "aula49_exercicio"
        let page = Number(req.query.page)
        
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        let size = 5
        let offset = size * (page - 1)
        const result = await connection(table)
            .limit(size)
            .offset(offset)


        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

//EXERCÍCIO 04 



















