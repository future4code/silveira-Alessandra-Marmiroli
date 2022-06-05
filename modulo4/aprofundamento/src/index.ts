import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 01 

app.get("/ping", (request: Request, response: Response) => {
    response.status(200).send("Pong!")
})

//Exercício 02 

type Users = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

//Exercício 03 


const titleUsers: Array<Users> =

    [
        { userId: 1, id: 1, title: "Ir ao Mercado.", completed: false },
        { userId: 2, id: 2, title: "Comprar água.", completed: true },
        { userId: 3, id: 3, title: "Participar do Grupo de Evangelho no Lar.", completed: true },
        { userId: 4, id: 4, title: "Levar as crianças em festinha de aniversário.", completed: true },
        { userId: 5, id: 5, title: "Comprar lanche da semana para escola.", completed: false },
        { userId: 6, id: 6, title: "Fazer um projeto de react no final de semana.", completed: true },
        { userId: 7, id: 7, title: "Comprar carnes para semana", completed: false },
        { userId: 8, id: 8, title: "Doação de roupas", completed: true },
        { userId: 9, id: 9, title: "Finalizar livro Desbloqueie o poder da sua mente.", completed: true },
        { userId: 10, id: 10, title: "Comprar carnes para semana", completed: false },

    ]

//EXERCICIO 04 

app.get("/users", (request: Request, response: Response) => {
   
    const returnCompleted = titleUsers.filter((title) => {
        if (title.completed === true) {
            return title
        }

    })

    response.status(200).send(returnCompleted)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//Exercicio 05 

app.post("/creatUser", (req:Request, res:Response) =>{

    const userAuthorization = req.headers.authorization
    const crieiUser = req.body.user
    
      console.log("Create user!")
    
    const query = req.body.user;
      console.table({userAuthorization,crieiUser})
    
    
      const title = {
        userId: Date.now().toString(),
        id:query,
        title: [],
        completed: Boolean, 
      }
          
      
      res.send({userAuthorization, crieiUser})
  })