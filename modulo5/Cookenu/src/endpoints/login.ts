import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManagers } from "../services/HashManager";



export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body

        if (!email ||email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        if (!password || password.length < 6) {
            throw new Error("Invalid password");
          }
       

        const userData = {
            email,
            password,
        };
        //criando uma instancia para pegar um método que esta dentro de uma class
        const user = await new UserDataBase().getUserByEmail(userData.email);
        //verificando se a senha que usuario inseriu é a senha cadastrada no banco de dados 
        const senhaCriptografada = await new HashManagers().compare(
            userData.password,
            user.password
        )
        if (!user || !senhaCriptografada) {
            throw new Error("Invalid");
        }

        const pegarToken = new Authenticator()

        const token = pegarToken.generateToken({
            id: user.id,
            role:user.role
        });


        res.status(200).send({
            token,
        });
    } catch (err: any) {
        console.log(err)
        res.status(400).send({
            message: err.message,
        });
    }
}; 