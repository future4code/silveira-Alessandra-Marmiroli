import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class hashManager {
    hash = (plainText: string): string => {

        const cost = 12
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText, salt)
        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}

//Responsável pela criptografia da senha/token 