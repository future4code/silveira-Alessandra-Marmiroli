import { BaseDatabase } from "./BaseDataBase"
import { user } from "../types/user"

class UserDataBase extends BaseDatabase {
    private static tableName = "User_Arq"

    public async createUser(user: user): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role
                })

                .into(UserDataBase.tableName)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
export default UserDataBase
//Aqui estou criando o usuário e inserindo os dados no banco de dados 