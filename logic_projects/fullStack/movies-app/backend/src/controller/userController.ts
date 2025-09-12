import  { Response, Request } from "express";
import User from "../model/User";
import bcryptjs from 'bcryptjs';



export  const createUser = async(req: Request, res: Response) => {
    res.send('user created');
}

export  const loginUser = (req: Request, res: Response) => {
    res.send('user logged in');
}