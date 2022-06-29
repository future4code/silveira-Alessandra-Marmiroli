import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {

    private static tableName = "UserCookenu";

    public createUser = async (user: User): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: user.getId(),
                    email: user.getEmail(),
                    name: user.getName(),
                    password: user.getPassword(),
                    
                })
                .into(UserDataBase.tableName)

                } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
  

        }
    }
}