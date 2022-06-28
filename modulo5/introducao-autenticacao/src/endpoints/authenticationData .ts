import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { authenticator } from "../services/authenticator";



export default async function Profile(req: Request, res: Response) {
    try {
        
        const token = req.headers.authorization as string;


        const authenticationData = getTokenData(token);
        

        const newAthentication = new authenticator().getTokenData(token)


        const user = await getUserById(authenticationData.id);

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