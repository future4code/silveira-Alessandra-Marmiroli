import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/authenticator"
import { authenticationData } from "../services/types"

export default async function profileId(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) as authenticationData
        const userDB = new UserDataBase()
        

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Não autorizado, token inválido")
        }
        if (!id) {
            res.statusCode = 400
            throw new Error("Não existe esse ID")
        }
        const userId = await userDB.getUserById(id)

        //Envio de dados do usuário, agora com o role, utilizando a variável UserId 
        res.status(200).send({
            id: userId.id,
            email: userId.email,
            role: userId.role
        })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        } else {
            res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }
}
