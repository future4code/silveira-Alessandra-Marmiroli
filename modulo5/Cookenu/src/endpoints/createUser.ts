import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator";
import { HashManagers } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, USER_ROLE } from "../services/types";



export default async function createUser(req: Request, res: Response): Promise<void> {
    try {

        const {email, name, password, role } = req.body
        
        const userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        };
        

        if (!email || !name || !password || !role) {
            res.statusCode = 422
            throw new Error("Preencha os campos corretamente os campos acima")
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 400
            throw new Error("Email inválido, acrescente @")
        }

        if (password.length < 6) {
            res.statusCode = 400
            throw new Error("A senha precisa ter no mínimo 6 caracteres")
        }
        const id:string = new IdGenerator().id()

        const hashManager: HashManagers = new HashManagers()

        const senhaCriptografada = hashManager.hash(password)
        
        const userNew = new User(id, email, name, senhaCriptografada, role)
        const userDB = new UserDataBase()

        await userDB.createUser(userNew)
               
        const payload:authenticationData = {
            id: userNew.getId(),
            role: userNew.getRole()
        }
        const token = new Authenticator().generateToken(payload)
       
        res.status(200).send({ token })


    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })

        }
    }
}
