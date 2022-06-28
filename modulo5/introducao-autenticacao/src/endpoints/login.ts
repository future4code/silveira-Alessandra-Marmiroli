import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { authenticator } from "../services/authenticator";


export default async function login(req: Request, res: Response): Promise<void> {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };


        const user = await getUserByEmail(userData.email);

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        }

        const pegarToken = new authenticator()

        const token = pegarToken.generateToken({
            id: user.id,
        });


        res.status(200).send({
            token,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};