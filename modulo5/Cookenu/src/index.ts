import { app } from "./app"
import recipe from "./endpoints/recipe"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import profile from "./endpoints/profile"
import profileId from "./endpoints/profileId"

//É aqui que chamo meus endpoints 

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/profile", profile)
app.get("/user/:id", profileId)
app.post("/recipe", recipe)

