import { Request, Response } from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { user } from "../types/user"

class UserController {
    async signUp(req:Request, res:Response) {
        try {
            const { name, email, password, role } = req.body
            
            const newUser: user = {
                id:"",
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                role:req.body.role
            }
            const userBusiness = new UserBusiness()
            const token = await userBusiness.createUser(newUser)

            res.status(201).send({ message: "Usuário criado com sucesso!", token })

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
        
    }
    async login(req: Request, res: Response) {
        try {
            //envio as informações que serão recebidas por body 
            const { email, password } = req.body
            //recebo as informações nesta variável 
            const login = {
                email, 
                password 
            }
            //
            const token = await new UserBusiness().getLogin(login)
            res.status(201).send({message:"Login realizado com sucesso!", token})
        } catch (error:any) {
            res.status(400).send({error:error.message});
        }
    }

}
export default UserController

