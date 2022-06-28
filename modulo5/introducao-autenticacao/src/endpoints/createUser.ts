import { Request, Response } from "express";
import { connection } from "../data/connection";
import { AuthenticationData, user } from "../types";
import { IdGenerator } from '../services/generateId';
import { authenticator } from "../services/authenticator";



export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body

        if (email.indexOf("@") === -1 || !email) {
            res.statusCode = 422
            throw new Error("Preencha os campos corretamente os campos acima")
        }
        if (!password || password.length < 6) {
            throw new Error("Invalid password");
          }

        const [user] = await connection('User')
            .where({ email, password })

        if (user) {
            res.statusCode = 409
            throw new Error('Verifique o e-mail informado este já possui cadastro')
        }

        const id: string = new IdGenerator().generateId()

        const newUser: user = { id, email, password }

        await connection('User')
            .insert(newUser)
        
        const payload:AuthenticationData = {
            id: newUser.id
        }
        const token = new authenticator().generateToken(payload)

        res.status(201).send({ token })

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }

    }
}