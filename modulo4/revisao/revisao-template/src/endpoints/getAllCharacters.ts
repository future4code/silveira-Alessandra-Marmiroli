import { Request, Response } from "express";
import {characters} from "../data"

export default function(
    req:Request,
    res:Response
):void{
   res.send(characters) 
}