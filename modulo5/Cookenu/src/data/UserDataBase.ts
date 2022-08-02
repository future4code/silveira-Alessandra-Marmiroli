import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {

    private static tableName = "UserCookenu";

    public createUser = async (user: User): Promise<void> => {
        await BaseDatabase.connection()
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword(),
                role: user.getRole()

            })
            .into(UserDataBase.tableName)
    }
    public getUserByEmail = async (email: string): Promise<any> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("UserCookenu")
            .where({ email });
        return result[0];
    }
    public getUserById = async (id: string): Promise<any> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("UserCookenu")
            .where({ id });
        return result[0] 
    }
}


