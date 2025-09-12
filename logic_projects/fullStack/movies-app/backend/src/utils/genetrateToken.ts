import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

//function to generate token
const generateToken = (res: Response,userId: string ) => {
   //create JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {//create token
        expiresIn: '30d',//token expires in 30 days
    });

    //set JET as an http-only Cookie
    res.cookie('jwt', token, {//set cookie
        httpOnly: true,//cookie only accessible by server
        secure: process.env.NODE_ENV !== 'development',//cookie only works in https
        sameSite: 'strict',//prevent cross-site request forgery
        maxAge: 30 * 24 * 60 * 60 * 1000,//30 days
    });


};

export default generateToken