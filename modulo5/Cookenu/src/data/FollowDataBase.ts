import { BaseDatabase } from "./BaseDatabase";


export class UserDataBase extends BaseDatabase{
    static tableName = "cookenu_user_folow"

    public async userFollow (id_usuarioSegue:string, id_usuarioSeguido:string):Promise<any>{
        await BaseDatabase.connection()
        .insert ({
            id_usuarioSegue:id_usuarioSegue,
            id_usuarioSeguido:id_usuarioSeguido})
            .into (UserDataBase.tableName)
            
    }
}