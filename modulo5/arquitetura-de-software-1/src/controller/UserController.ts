import { Request, Response } from "express"
import UserBusiness from "../Business/UserBusiness"
import { InputUser } from "../types/user"

class UserController {
    async signUp(req:Request, res:Response) {
        try {
            const { name, email, password, role } = req.body
            
            const newUser: InputUser = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                role:req.body.role
            }
            const userBusiness = new UserBusiness()
            const token = await userBusiness.createUser(newUser)

            res.status(201).send({ message: "User created successfully!", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async login(req: Request, res: Response) {
    }

}
export default UserController

