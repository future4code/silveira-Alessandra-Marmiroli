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

        usersBank.forEach(user => {
            if (user.cpf === cpf) {
                throw new Error("Este número de CPF ja existe, por gentileza verifique o número CPF digitado acima!")
            }
        })
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

//DESAFIOS - EXERCICIO 02 - Crie um endpoint get que receba um CPF como parâmetro e retorne o saldo da conta do usuário dono daquele CPF. A informação deve ser igual ao que estiver salvo no sistema. Se for diferente, exiba uma mensagem de erro.

app.get("/users2", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {
        const cpf: string = req.query.cpf as string;
        const user: UsersBank | undefined = usersBank.find((user) => user.cpf === cpf)
        console.log(user)
        if (user === undefined) {
            codeError = 404
            throw new Error('O CPF informado não existe verifique seu CPF!')
        }
        const cliente = user
        const saldoExtrato = Number(cliente["saldoExtrato"])
        res.status(200).send({ saldoExtrato })

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })

    }
})

//DESAFIOS - EXERCICIO 03 - Crie um endpoint put que receba um nome, um CPF e um valor. Ele deve adicionar o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema Se algum dos dados for diferente, exiba uma mensagem de erro.

//DESAFIOS - EXERCICIO 04 - Altere o endpoint de adicionar saldo para que ela adicione um item ao extrato da conta do usuário: indicando o valor e a data da transação. A descrição para este tipo de item deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser salva como timestamp ou string. ***fazer***

app.put("/users", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {

        const name: string = req.query.name as string;
        const cpf: string = req.query.cpf as string;
        const valor = Number(req.query.valor)

        const user: UsersBank | undefined = usersBank.find((user) => user.cpf === cpf && user.name === name)
        if (user === undefined) {
            codeError = 404
            throw new Error('Cpf ou nome inválidos!')
        }
        const cliente = user
        const novoSaldoExtrato = Number(cliente["saldoExtrato"] + valor)
        res.status(200).send({ novoSaldoExtrato })

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })

    }

})





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});