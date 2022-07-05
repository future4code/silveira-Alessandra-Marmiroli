import UserData from "../Data/UserData";
import User from "../model/User";
import Authenticator from "../Services/authenticator";
import { HashManager } from "../Services/hashManager";
import { IdGenerator } from "../Services/idGenerator";
import { signupInput } from "../types/signInput";


export default class UserBusiness {
    constructor(
        private userData:UserData, 
        private idGenerator:IdGenerator,
        private hashManager:HashManager, 
        private authenticator:Authenticator
    ){}
    signup = async (input: signupInput) => {
        //Para criar um usuário: validação, conferir se existe, criar um id, hashear o password, criar o usuário no banco, criar e retornar o token.

        //VALIDAÇÃO!!!
        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Por gentileza preencha os campos acima corretamente!")
        }

        if (email.indexOf("@") === -1) {
            throw new Error("Email Inválido!")
        }

        if (password.length < 6) {
            throw new Error("Password precisa ter no mínimo 6 caracteres!")
        }
        // CONFERIR SE O USUÁRIO EXISTE: 
        const userEmail = await this.userData.findByEmail(email)
        if(userEmail){
            throw new Error("O email informado já existe!")
        }

        //CRIAR ID 
        const id = this.idGenerator. generatorId()

        //HASHEAR PASSWORD 
        const hashearPassword = await this.hashManager.hash(password)

        //CRIAR USUÁRIO E INSERIR ELE NO BANCO 
        const createUser = new User(
            id,
            name,
            email,
            hashearPassword
        )
        await this.userData.insert(createUser)

        //CRIAR TOKEN PASSANDO ID COMO PARÂMETRO
        const token = this.authenticator.generateToken({id})

        //RETORNA O TOKEN 
        return token

    }

}