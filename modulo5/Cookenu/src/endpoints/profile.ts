import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/authenticator"
import { authenticationData } from "../services/types"

export default async function profile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) as authenticationData
        const userDB = new UserDataBase()

        const user = await userDB.getUserById(tokenData.id)
      
        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Não autorizado, token inválido")
        }
        if (!user) {
            res.statusCode = 400
            throw new Error("Usuário não existe")
        }

        //Envio de dados do usuário, agora com o role
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        } else {
            res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }
}
