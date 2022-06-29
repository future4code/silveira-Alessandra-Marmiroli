import { app } from "./app"
import createUser from './endpoints/createUser'

//É aqui que chamo meus endpoints 

app.post("/user/signup", createUser)
