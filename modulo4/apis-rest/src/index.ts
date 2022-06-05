import express, { Request, Response } from "express";
import cors from "cors";
import { users } from './data/types'
import { send } from "process";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400;
    
    try {
        if (!users) {
            codeError = 404
            throw new Error('Lista de usuário não encontrada')
            
        }
        // if (users) {
           
        //     // codeError = 404
        //     // throw new Error('Lista de usuário não encontrada')
        // }
        res.status(200).send(users)

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }

})

app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {
        const type = req.params.type
        const filtrando = users.filter((user) => {
            if (user.type === type) {
                return user
            }
        })

        if (!type) {
            codeError = 404
            throw new Error('É preciso digitar algum parametro')

        }
        if (!filtrando.length) {
            codeError = 404
            throw new Error('Lista de usuário não encontrada')
        }
        res.status(200).send(filtrando)

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })

    }

})

app.get("/users2", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {
        const name = (req.query.name) as string
        const filtrandoUsuario: users | undefined = users.find(user => user.name === name)

        if (!filtrandoUsuario) {
            codeError = 404
            throw new Error('Usuário não encontrado por favor digite um nome de usuário!')
        }

        res.status(200).send(filtrandoUsuario)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })

    }


})

app.put("/users", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {
        const { id, name, email, type, age } = req.body

        if (!id || !name || !email || !type || !age) {
            let errorCode = 422
            throw new Error('Por favor verifique se os campos foram preenchidos corretamente')
        }

        const newUser: users = {
            id,
            name,
            email,
            type,
            age
        }

       users.push(newUser)
       res.status(201).send({message:'Usuário criado com sucesso!', users})

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }

})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});