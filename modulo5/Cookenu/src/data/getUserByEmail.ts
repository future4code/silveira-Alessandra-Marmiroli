import { BaseDatabase } from "./BaseDatabase";

export const getUserByEmail = async (id: string): Promise<any> => {
    const result = await BaseDatabase.connection()
        .select("*")
        .from("User")
}