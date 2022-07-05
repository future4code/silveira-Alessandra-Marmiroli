import User from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import { BaseDatabase } from "./BaseDataBase"

export default class UserData extends BaseDatabase {
    protected tableName = "labook_user"

    insert = async (user: User) => {
        try {
            await UserData
            .connection(this.tableName)
            .insert(user)
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }


    findByEmail = async (email: string) => {
        try {
            const queryResult: FindByEmailResponse = await UserData
                .connection(this.tableName)
                .select()
                .where({ email })

            return queryResult[0]

        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")

        }
    }


}