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
        const user = await connection ("Users")
        .select("name", "nickname")
        .where ({ id:req.params.id })
        if (user.length === 0) {
            throw new Error("Por gentileza informe o campo ID!")
        }
        res.status(200).send({ user })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})


app.put("/users/edit/:id", async (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Por gentileza informe os campos acima corretamente!")
        }
        const editaUsuario = await connection(`Users`)
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
            .where({ id: req.params.id })

        res.status(200).send(`${editaUsuario} Usuário editado com sucesso`)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Usuário não foi alterado")
    }
})

app.post("/task", async (req: Request, res: Response) => {
    try {

        if (!req.body.title || !req.body.description || !req.body.limitDate || !req.body.status || !req.body.createUserId || !req.body.createNickname) {
            throw new Error("Por gentileza preencha os campos acima corretamente!")
        }
        const { taskId, title, description, limitDate, status, createUserId, createNickname } = req.body
        let estruturaData: string = limitDate.split('/').reverse().join('-');

        await connection("Tarefas")
            .insert({
                taskId: Date.now().toString(),
                title: req.body.title,
                description: req.body.description,
                limitDate: estruturaData,
                status: req.body.status,
                createUserId: req.body.createUserId,
                createNickname: req.body.createNickname

            });

        res.status(200).send(`Tarefa criada com sucesso!`);
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message);
    };
});


app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id
        if (taskId.length === 0) {
            throw new Error("Por gentileza informe o campo ID!")
        }
        const tarefaId = await connection("Tarefas")
            .where("taskId", req.params.id)
        res.status(200).send({ tarefaId })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});