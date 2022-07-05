import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/user"
import dotenv from "dotenv"

dotenv.config()

const expiresIn = "24min"

export default class Authenticator {
   generateToken = (payload: authenticationData) => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn
         }
      )
   }

   getTokenData = (token: string) => {
      const tokenData = jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) 
      return tokenData as authenticationData
   }
}
//Responsável por gerar e guardar em uma variável o Token. 