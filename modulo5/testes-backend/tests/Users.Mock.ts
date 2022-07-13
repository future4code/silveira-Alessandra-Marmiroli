import { adminMock, userMock } from "./User.Mock"


export class getUserByIdMocks {
     getUserById = async (id:string) =>{
        switch(id){
            case "idUser1":
                return userMock
            case "idUser2":
                return adminMock
                default:
                    return undefined
        }
    }
}