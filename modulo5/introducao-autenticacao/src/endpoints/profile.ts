import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { authenticator } from "../services/authenticator";
import { AuthenticationData } from '../types'



export default async function profile(req: Request, res: Response) {
    try {

        const token = req.headers.authorization as string;


        const authenticatorNew = new authenticator()
        
        const tokenAutheticator = authenticatorNew.getTokenData(token)

        if (tokenAutheticator.role !== "NORMAL") {
            throw new Error("Only a normal user can access this funcionality");
          }


        const user = await getUserById(tokenAutheticator.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};