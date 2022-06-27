import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types";


const expiresIn = "1min"

export class authenticator {
     generateToken = (payload: AuthenticationData): string => {
        const token = jwt.sign({
            payload
        },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );
        return token
    }

    getTokenData = (token: string) => {

        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string
        )
        return tokenData
    }
}



//Exemplo de uma função que gera o token de autenticação do usuário. 