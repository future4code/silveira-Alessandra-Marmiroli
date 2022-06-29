import { app } from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"

//É aqui que chamo meus endpoints 

app.post("/user/signup", createUser)
app.post("/user/login", login)
