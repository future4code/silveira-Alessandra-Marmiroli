import  profile  from './endpoints/profile'
import { app } from "./app"
import createUser from "./endpoints/createUser"
import login from "./endpoints/login"
import { HashManagers } from './services/HashManager'




const hashsManagers = new HashManagers().hash("batata")

const compare = new HashManagers().compare("batata", hashsManagers)
console.log(compare)

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', profile)
