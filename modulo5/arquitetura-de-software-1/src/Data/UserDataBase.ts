import { BaseDatabase } from "./BaseDataBase"
import { USER_ROLES } from "../types/user"

class UserDataBase extends BaseDatabase {
    private static tableName = "User_Arq"

    public async createUser(id: string, name: string, email: string, password: string, role: USER_ROLES): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    name,
                    email,
                    password,
                    role
                })

                .into(UserDataBase.tableName)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    //Acima estou criando um usuário que recebe de parâmetro um id, name, email, password, role.

    public async login(email: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.tableName)
            .where({ email })
        return result[0]
        }
        //Acima estou a conexão com o banco de dados para o login que recebe de parâmetro email e password. 

}
export default UserDataBase
//Aqui estou criando o usuário e inserindo os dados no banco de dados 