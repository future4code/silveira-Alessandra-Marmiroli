import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { signupInput } from "../types/signInput";

export default class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }
    //O método constructor obriga quem chamar o UserController há criar a instância

    signup = async (req: Request, res: Response) => {

        const { name, email, password } = req.body
        //Desestruturação do req.boby 

        //Estruturação do objeto que seria o mesmo acima.(Tratamento dos dados acima)
        const input: signupInput = {
            name,
            email,
            password

        }
        //signupInput é um objeto que vai tranferir informações dentro do código entre as camadas. 
        //UserController precisa do UserBusiness vai usar UserData
        try {
            const token = await this.userBusiness.signup(input)

            res.status(201).send({ message: "Usuário criado com sucesso!", token })

        } catch (error: any) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

}