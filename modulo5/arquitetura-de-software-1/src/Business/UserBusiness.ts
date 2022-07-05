import UserDataBase from "../Data/UserDataBase";
import { generateToken } from "../services/authenticator";
import { hashManager } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { InputUser } from "../types/user";



class UserBusiness {
    //método da classe 
    async createUser(user:InputUser) {

        if (
            !user.name ||
            !user.email ||
            !user.password ||
            !user.role
        ){
            throw new Error('Preencha os campos acima corretamente')
        }
        if (user.email.indexOf("@") === -1) {
            throw new Error("Invalid Email!")
        }

        if (user.password.length < 6) {
            throw new Error("Password must have at least 6 characters!")
        }
        
        const id = generateId();
        const newPassword = new hashManager()
        const passwordHash = newPassword.hash(user.password)

        
        const newUserDataBase = new UserDataBase()
        await newUserDataBase.createUser(user.email, user.name, passwordHash,user.role);

        const token = new generateToken({
            id: id,
            role: user.role
        })
        return token
    }

}

export default UserBusiness