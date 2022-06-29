import { sign, verify } from "jsonwebtoken";
import { authenticationData } from './types'
import dotenv from "dotenv";

dotenv.config()

export class Authenticator {

    generateToken = (payload: authenticationData): string => {
        const token = sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        return token
    }

    getTokenData = (token: string) => {
        const payload = verify(
            token,
            process.env.JWT_KEY as string
        )

        return payload as authenticationData
    }
}