import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());



app.get("/retornaName", (request:Request, response:Response) => {          
    response.status(200).send("Meu primeiro endpoint!")
})

type Usuario = {
    id: number,
    name:string,
    phone: number,
    email:string,
    website:string|number,
}

const dadosDoUsuario: Array<Usuario>=

 [
	{id: 1, name: "Rogério", phone: 9999-9999, email: "roger@email.com", website: "wwww.casamento.com.br"},
    {id: 2, name: "Maria Eduarda", phone: 9999-9999, email: "maria@email.com", website: "wwww.beleza.com.br"},
    {id: 3, name: "Alessandra", phone: 9999-9999, email: "alessandra@email.com", website: "wwww.beleza.com.br"},
    {id: 4, name: "Heloísa", phone: 9999-9999, email: "heloísa@email.com", website: "wwww.doçura.com.br"},
    {id: 5, name: "Henrique", phone: 9999-9999, email: "henrique@email.com", website: "wwww.estilo.com.br"},
	   
] 

app.get("/usuarios", (request:Request, response:Response) => {          
    response.status(200).send({message:dadosDoUsuario})
})


type InformUsers = {
    id: number,
    title:string,
    body: string,
    userId:string | number
    
}
/**Acredito que o melhor para o código é sempre deixar cada informação separada para não quebrar os dados. */
const postdDUsers: Array<InformUsers>=[
    
	{id: 1, title: "Viagem para Itália", body: "O lugar onde a gastronomia te envolve com sabores.", userId: 1},
    {id: 2, title: "Viagem para Maldivas", body: "O lugar onde estão os melhores hotéis de relaxamento.", userId: 2},
    {id: 3, title: "Viagem para Minas", body: "O lugar onde estão as melhores cachaças e queijos.", userId: 3},
    {id: 4, title: "Viagem para Rio Janeiro", body: "O lugar onde estão as praias mais incríveis.", userId: 4},
    {id: 5, title: "Viagem para Rio Mato Grosso", body: "O lugar onde estão as cachoeiras mais lindas.", userId: 5},
]

app.get("/postUsers/:id", (request:Request, response:Response) => {  
    const idPessoa = Number(request.params.id)

    const retornaUmPost =  postdDUsers.filter((post)=>{
        if (post.id === idPessoa){
            return post
        }
    }) 
    response.status(200).send({message:retornaUmPost})
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});









