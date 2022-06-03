import express, { Request, Response } from "express";
import cors from "cors";
import { usersBank, UsersBank } from './data/type'

const app = express();

app.use(express.json());
app.use(cors());


//EXERCICIO 05
app.post("/users", (req: Request, res: Response) => {
    let codeError: number = 400;


    try {
        const { name, cpf, dataDeNascimento, saldoExtrato, movimentacao } = req.body
        if (!name || !cpf || !dataDeNascimento || !saldoExtrato || !movimentacao) {
            let errorCode = 422
            throw new Error('Por favor verifique se os campos foram preenchidos corretamente')
        }
        const novosUsuarios: UsersBank = {
            name,
            cpf,
            dataDeNascimento,
            saldoExtrato,
            movimentacao,
        }
        const [dia, mes, ano] = dataDeNascimento.split("/")
        let verificandoIdade = 2022 - ano >= 18 ? true : false
        if (verificandoIdade === true) {
            usersBank.push(novosUsuarios)
            res.status(201).send({ message: "Usuário criado com Sucesso" })
        } else {
            throw new Error("Você é um cliente potencial e vamos ter o prazer em atendê-lo, mas é importante ter 18 anos completos!")
        }

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }

})
//EXERCICIO 06 
app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {
        if (usersBank) {
            res.status(200).send(usersBank)
        } else {
            codeError = 404
            throw new Error('Lista de usuário não encontrada')
        }

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});