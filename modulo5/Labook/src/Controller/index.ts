import UserBusiness from '../Business/UserBusiness';
import { app }  from '../Controller/app';
import UserData from '../Data/UserData';
import Authenticator from '../Services/Authenticator';
import { HashManager } from '../Services/hashManager';
import { IdGenerator } from '../Services/IdGenerator';
import { PostController } from './PostController';
import UserController from './UserController';

//Aqui chamo os endpoints de acordo com as entidades!

//Entidade de User
const userController = new UserController(
    new UserBusiness(
        new UserData,
        new IdGenerator(),
        new HashManager(), 
        new Authenticator()
    )
);

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)

//Entidade Post 
const postController = new PostController(
//         new UserBusiness(
//         new UserData,
//         new IdGenerator(),
//         new HashManager(), 
//         new Authenticator()
//     )
// );

// app.post("/post/create", postController.post)