import UserBusiness from '../Business/UserBusiness';
import { app }  from '../Controller/app';
import UserData from '../Data/UserData';
import Authenticator from '../Services/authenticator';
import { HashManager } from '../Services/hashManager';
import { IdGenerator } from '../Services/idGenerator';


import UserController from './UserController';

//Aqui chamo os endpoints de acordo com as entidades!

const userController = new UserController(
    new UserBusiness(
        new UserData,
        new IdGenerator(),
        new HashManager(), 
        new Authenticator()
    )
);
//O index chama o UserController.  Aqui passamos como parâmetro UserBusiness.

app.post("/user/signup", userController.signup)