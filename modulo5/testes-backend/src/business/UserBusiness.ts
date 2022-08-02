import { CustomError } from "../error/CustomError";
import { TokenGenerator } from "../services/tokenGenerator";
import { HashGenerator } from "../services/hashGenerator"
import { User, userRoler } from "../model/User";
import { idGenerator } from "../services/idGenerator"
import { UserDatabase } from "../Data/UserDataBase";



export class UserBusiness {

    constructor(
        private idGenerator: idGenerator,
        private hashGenerator: HashGenerator,
        private tokenGenerator: TokenGenerator,
        private userDatabase: UserDatabase
    ) { }

    public async getUserById(id: string) {
        const user = await this.userDatabase.getUserById(id);

        if (!user) {
            throw new CustomError(404, "User not found");
        }

        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
        };
    }
    //função que recebe o id por parametro e retorna dados do user 

    public async signup(
        name: string,
        email: string,
        password: string,
        role: string

    ) {
        try {
            if (!name || !email || !password || !role) {
                throw new CustomError(422, "Missing input");
            }
            if (email.indexOf("@") === -1) {
                throw new CustomError(422, "Invalid email");
            }
            if (password.length < 6) {
                throw new CustomError(422, "Invalid password")
            }
            const id = this.idGenerator.generateId();
            const cypherText = await this.hashGenerator.hash(password);

            await this.userDatabase.createUser(
                new User(id, name, email, cypherText, userRoler(role))
            )
            const accessToken = this.tokenGenerator.generate({
                id,
                role
            });
            return { accessToken };
        } catch (error: any) {
            if (error.message.includes("Key 'email'")) {
                throw new CustomError(409, "Email already in use")
            }
            throw new CustomError(error.statusCode, error.message)

        }
    }
}
export default new UserBusiness(new idGenerator(), new HashGenerator(), new TokenGenerator(), new UserDatabase())