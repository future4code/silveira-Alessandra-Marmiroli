import express from "express"
import UserController from "../Controller/UserController";



export const userRouter = express.Router();

userRouter.get("/signup", UserController.signup)

