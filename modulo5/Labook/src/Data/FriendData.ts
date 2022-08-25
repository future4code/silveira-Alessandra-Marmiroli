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
    //Pega o usuário 1 e usuário 2 
    newFriend = async (userFollow:string, userFollowed:string):Promise<any>=>{
        try {
            const Data = await FriendData
            .connection(this.tableName)
            //Aqui vou inserir essa amizade pq ela ainda não existe 
            .insert({userFollow, userFollowed
            })
            
            return Data            
        } catch (error:any) {
            
        }

    }
}