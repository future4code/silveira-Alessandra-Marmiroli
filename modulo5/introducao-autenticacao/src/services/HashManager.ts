import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManagers {
    hash = (s: string): string => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = genSaltSync(rounds);
        const result = hashSync(s, salt);
        return result;
    }

    compare = (s: string, hash: string): boolean => {
        return compareSync(s, hash);
    }
}

//Uma outra de forma de reproduzir essa função de comparar
//compareHash = (plainText:string, cypherText:string):boolean =>{
//     return compareSync(plainText, cypherText)
// }









