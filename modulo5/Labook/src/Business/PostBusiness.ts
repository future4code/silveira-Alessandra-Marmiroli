import Post from "../model/Post"
import Authenticator from "../Services/Authenticator"
import { IdGenerator } from "../Services/IdGenerator"
import { postType } from "../types/postType"
import PostData from "../Data/PostData"

export class PostBusiness {
    // constructor(
    //     private postData: PostData,
    //     private idGenerator: IdGenerator,
    //     private authenticator: Authenticator
    // ) { }
    createPost = async (post: postType) => {

        //VALIDAÇÃO!!!
        const { photo, description, creationDate, type } = post

        if (!photo || !description || !creationDate || !type) {
            throw new Error("Por gentileza preencha os campos acima corretamente!")
        }

        //CRIAR ID 
        const idGenerator = new IdGenerator()
        const id = idGenerator.generatorId()

        //CRIAR USUÁRIO E INSERIR ELE NO BANCO 
        const createPost = new Post(
            id,
            photo,
            description,
            creationDate,
            type,

        )
        const postData = new PostData()
        await postData.insert(createPost)

        //CRIAR TOKEN PASSANDO ID COMO PARÂMETRO
        const tokenId = new Authenticator()
        const token = tokenId.generateToken({ id })

        //RETORNA O TOKEN 
        return token
    }
}