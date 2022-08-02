import UserDataBase from "../Data/UserDataBase";
import Authenticator from "../services/authenticator";
import { hashManager } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user, UserLogin } from "../types/user";



export class UserBusiness {
    //método da classe  criando um usuário que recebe de parâmetro um tipo user que contem exatamente os campos do user. 
    async createUser(user: user) {
        try {

            if (
                !user.name ||
                !user.email ||
                !user.password ||
                !user.role
            ) {
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
            await newUserDataBase.createUser(id, user.email, user.name, passwordHash, user.role);

            const tokenNew = new Authenticator()
            const token = tokenNew.generateToken({
                id: id,
                role: user.role
            })
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }
    async getLogin(user: UserLogin) {
        try {
            const userData = {
                email: user.email,
                password: user.password
            };
            const userLogin = await new UserDataBase().login(userData.email);
            const HashManager: hashManager = new hashManager()

            // comparando a senha do meu banco de dados com a senha que foi enviada no body da requisição pelo usuário.
            const resultCompare = HashManager.compareHash(
                userData.password,
                userLogin.password
            )

            if (!resultCompare) {
                throw new Error("Invalid credentials!");
            }
            //É preciso fazer a validação de comparação das senhas!

            const newAuthenticator = new Authenticator()
            //Faço uma isntância para usar o Authenticator e uso ela para acessar o token quando o usuário informar o id e role. 

            const token = newAuthenticator.generateToken({
                id: userLogin.id,
                role: userLogin.role
            })

            return token
        } catch (error: any) {
            throw new Error(error.message || "Error to login. Please check your system administrator.");
        }
    }
}

