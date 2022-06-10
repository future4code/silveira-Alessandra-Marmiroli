import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./connection";


const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", async (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Por gentileza preencha os campos acima")
        }
        await connection("Users")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,

            });

        res.status(200).send(`Usuário Criado!`);
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message);
    };
});



app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const usuario = await connection("Users")
        .where("id", req.params.id)
        res.status(200).send({usuario})
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})
//FAZER A VALIDAÇÃO 

app.put("/users/edit/:id", async (req: Request, res: Response) => {
    try {
        const editaUsuario = await connection(`Users`)
            .update({
                name: req.body.name,
                nickname: req.body.nickname
            })
            .where({ id: req.params.id })

        res.status(200).send(`${editaUsuario} Usuário editado com sucesso`)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Usuário não foi alterado")
    }
})

//FAZER A VALIDACAO 

app.post("/task", async (req: Request, res: Response) => {
    try {
        if (!req.body.title || !req.body.description || !req.body.limitDate || !req.body.createUserId || !req.body.createNickname) {
            throw new Error("Por gentileza preencha os campos acima!")
        }
        await connection("Tarefas")
            .insert({
                title: req.body.title,
                description: req.body.description,
                limitDate: req.body.limitDate,
                createUserId: Date.now(),
                createNickname:req.body.createNickname

            });

        res.status(200).send(`Tarefa criada com sucesso!`);
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message);
    };
});














app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});