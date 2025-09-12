import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../model/User';
import { asyncHandler } from './asyncHandler';

import dotenv from 'dotenv';

dotenv.config();


const authenticate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
   let token;
  //Get jwt from cookies and save it in new variable token
     token = req.cookies.jwt;


    if(token){

        try {
         //if token available then verify
       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
       const user = await User.findById(decoded.userId).select('-password');

       //if user not found
       if(!user){
        res.status(401)
        throw new Error("Unauthorized: User not found")
       }
       
       //if user found move to the next function
       next();
    
            
        } catch (error) {
            
             res.status(401)
            throw new Error("Unauthorized: token failed")
        }
    }else{
        res.status(401)
        throw new Error("Unauthorized: No token provided")
    }


})





