import Post from "../model/Post"
import { BaseDatabase } from "./BaseDataBase"
import PostData from "../Data/PostData"


export default class UserData extends BaseDatabase {
    protected tableName = "LabookPost"

    insert = async (post: Post) => {
        try {
            await UserData
                .connection(this.tableName)
                .insert(post)
        } catch (error: any) {
            throw new Error("Erro ao buscar post no banco")
        }
    }
    postId = async (id:string) => {
        try {
            const Data = await PostData
                .connection(this.tableName)
                .select(`*`)
                .where({ id });
            return Data
        } catch (error: any) {
            throw new Error("Erro ao buscar post por id!")
        }
    }
}
//Inseriando o Post no Banco de dados!