import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../model/User';
import { asyncHandler } from './asyncHandler';

import dotenv from 'dotenv';

//Dotenv
dotenv.config();

//extend the request so typescript will know user is any
interface AuthRerquest extends Request{
    user?: any
}

//check if user is authenticated
const authenticateUser = async (req: AuthRerquest, res: Response, next: NextFunction) => {
   let token;
  //Get jwt from cookies and save it in new variable token
     token = req.cookies.jwt;

try {
     if(token){

        
         //if token available then verify
       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
       const user = await User.findById(decoded.userId).select('-password');

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
 res.status(500).json({error: (error as Error).message});    
}
}



//check if user is admin or not
const authorizationAdmin =(req: AuthRerquest, res: Response, next: NextFunction) => {

    //check if user exists and is admin 
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401)
        throw new Error("Unauthorized: User not authorized for admin role")
    }
}



export {authenticateUser,authorizationAdmin}

