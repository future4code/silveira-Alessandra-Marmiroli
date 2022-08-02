import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../services/types";
import { RecipesDataBase } from "../data/RecipesDataBase";

export default async function recipeId(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) as authenticationData
        const recipeDB = new RecipesDataBase()

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Não autorizado, token inválido")
        }
        if (!id) {
            res.statusCode = 400
            throw new Error("Não existe esse ID")
        }
        const userId = await recipeDB.getByRecipe(id)
        res.status(200).send({
            id: userId.id,
            titulo: userId.titulo,
            descricao: userId.descricao,
            modo_De_Preparo: userId.modo_De_Preparo,
            datat_De_Criacao: userId.data_de_criacao,
            criadorID:userId.criadorID

        })
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        } else {
            res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }



}
