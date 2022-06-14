import express from "express";
import cors from "cors";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

import { Request, Response } from "express"
import { NOMEM } from "dns";
import { argv } from "process";

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}
/**Resposta letra a - Quando usamos o row  ele entrega o resultado acima solicitado e informações extras que não são utilizadas.*/

//Retorna o ID do Ator 

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = await connection.raw(`
      SELECT * from Actor WHERE id ="${req.params.id}";
      `)
        res.status(200).send(id[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})


const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

//b) Faça uma função que busque um ator pelo nome;

app.get("/users2/:name", async (req: Request, res: Response) => {
    try {
        const name = await connection.raw(`
        SELECT * from Actor WHERE name = "${req.params.name}"`)
        res.status(200).send(name[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// C)

app.get("/users3/:gender", async (req: Request, res: Response) => {
    try {
        const gender = await connection.raw(`
        SELECT * from Actor WHERE gender = "${req.params.gender}"`)
        res.status(200).send(gender[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})


// Exercício 02 - Query builders 

//A

app.put("/user/:id", async (req: Request, res: Response) => {
    try {
        const actorRecebe = await connection(`Actor`)
            .update({
                salary: req.body.salary
            })
            .where({ id: req.params.id })

        res.status(200).send({ actorRecebe })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//B

app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
        const actorDelete = await connection(`Actor`).delete()
            .where({ id: req.params.id })
        res.status(200).send({ actorDelete })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//C 

//c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

app.get("/user/:gender", async (req: Request, res: Response) => {
    try {
        const recebeGender = await connection(`Actor`).avg(`salary`)
            .where({ gender: req.params.gender })
        res.status(200).send({ recebeGender })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EXERCÍCIO 03

//Letra A) Primeiro exercício feito realizado acima na página! 

//letra B)

app.get("/user", async (req: Request, res: Response) => {
    try {
        const recebe2Gender = await connection(`Actor`).count()
            .where({ gender: req.query.gender })
        res.status(200).send({ recebe2Gender })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//EXERCÍCIO 04 

//LETRA A 
const createActor = async (
    id: number,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string,
    favorite_ice_cream_flavor: string,
    type: string
) => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: birth_date,
            gender: gender,
            favorite_ice_cream_flavor: favorite_ice_cream_flavor,
            type: type

        })
        .into("Actor");
};


app.put("/user", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            req.body.birth_date,
            req.body.gender,
            req.body.favorite_ice_cream_flavor,
            req.body.type
        );

        res.status(200).send(`Usuário Criado!`);
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
        const actorDelete = await connection(`Actor`).delete()
            .where({ id: req.params.id })
        res.status(200).send({ actorDelete })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
//EXERCÍCIO FEITO ANTERIORMENTE 













app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

export default app