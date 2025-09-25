import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../model/User';


import dotenv from 'dotenv';
import type { User } from '../types/User';

//Dotenv
dotenv.config();

//extend the request so typescript will know user is any
interface AuthRequest extends Request{
    user?: User
}

//check if user is authenticated
const authenticateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
   let token;
  //Get jwt from cookies and save it in new variable token
     token = req.cookies.jwt;

try {
     if(token){

        
         //if token available then verify
       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
       const user = await UserModel.findById(decoded.userId).select('-password');

       //if user not found
       if(!user){
        res.status(401)
        throw new Error("Unauthorized: User not found")
       }
       
       //save user in the request
       req.user = user;
       
       //if user found move to the next function
       next();
   

        
    }else{
        res.status(401)
        throw new Error("Unauthorized: No token provided")
    }
    
} catch (error) {
 res.status(500).json({message: (error as Error).message});    
}
}



//check if user is admin or not
const authorizationAdmin =(req: AuthRerquest, res: Response, next: NextFunction) => {

   try {
     //check if user exists and is admin 
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401)
        throw new Error("Unauthorized: User not authorized for admin role")
    }
   } catch (error) {
     res.status(500).json({message: (error as Error).message});  
   }
}



export {authenticateUser,authorizationAdmin}

