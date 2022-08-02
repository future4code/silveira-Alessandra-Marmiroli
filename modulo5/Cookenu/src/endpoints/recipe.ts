import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, recipes } from "../services/types";

export default async function recipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) as authenticationData
        // const userDB = new UserDataBase()

        const { titulo, descricao, modo_de_preparo } = req.body

        if (!titulo || !descricao || !modo_de_preparo) {
            res.statusCode = 422
            throw new Error("Preencha os campos acima corretamente")
        }

        const userData: recipes = {
            id: new IdGenerator().id(),
            titulo,
            descricao,
            modo_de_preparo,
            data_de_criacao: new Date(),
            criadorID: tokenData.id
        };
        //Inserindo a receita no banco de dados 
        const recipe = await new RecipesDataBase().createRecipe(userData)


        res.status(201).send({ message: "Receita criada com sucesso!" })

    } catch (error: any) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })

        }
    }
}