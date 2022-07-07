import { BaseDatabase } from "./BaseDataBase";

export default class FriendData extends BaseDatabase {
    protected tableName = "LabookFriendship"

    userId = async (id: string) => {
        try {
            const Data = await FriendData
                .connection(this.tableName)
                .select(`*`)
                .where({ id });
            return Data[0]
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário por id!")
        }
    }
}