import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness"


export class UserController { 
    public async signup (req:Request, res:Response){
        try {
            const { name, email, password, role } = req.body
            const result = await UserBusiness.signup(
                name,
                email,
                password,
                role
            );
            res.status(200).send(result);
            
        } catch (error:any) {
            const {statusCode, message } = error
            res.status (statusCode || 400).send({message});            
        }
    }
}
export default new UserController()