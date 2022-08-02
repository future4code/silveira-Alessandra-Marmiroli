import { Request, Response } from "express";
import { PostBusiness } from "../Business/PostBusiness";
import Authenticator from "../Services/Authenticator";
import { postType } from "../types/postType";
import PostData from "../Data/PostData"

export class PostController {
    // constructor(
    //     private PostBusiness: PostBusiness
    // ) {}
    post = async (req: Request, res: Response) => {

        const { photo, description, creationDate, type } = req.body

        const post: postType = {
            photo,
            description,
            creationDate,
            type
        }
        try {
            const postBusiness = new PostBusiness()
            const postCreate = await postBusiness.createPost(post)

            res.status(201).send({ message: "Post criado com sucesso!", postCreate })
        } catch (error: any) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao criar Post!")
        }
    }

    postId = async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator()
            const authenticatorData = authenticator.getData(token).id
            //conferindo se esta logado 
            if (!authenticatorData) {
                throw new Error("Não autorizado")
            }

            const postData = await new PostData().postId(id)

            res.status(200).send({message:`busca realizada com sucesso`,postData})
        } catch (error: any) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)

            }
            res.status(500).send("Erro ao pegar post por Id!")
        }

    }
}