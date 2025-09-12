import  { Response, Request } from "express";
import User from "../model/User";
import bcryptjs from 'bcryptjs';
import generateToken from "../utils/genetrateToken";
import { User as UserType } from "../types/User";



export  const createUser = async(req: Request, res: Response) => {
    const { name, email, password } = req.body;
try {
    
   if(!name || !email || !password){
    res.status(400);
    throw new Error('Please add all fields');
   }

    //Check if email is valid using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(email)){
      res.status(400)
throw new Error("Invalid email format")
}

//Password length < 6
if(password.length <6){
     res.status(400)
    throw new Error("Password must be up to 6 characters")  
}


    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }
        //hash password
    const salt = await bcryptjs.genSalt(10);
    //generate hash
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create user
    const user = new User({
        name,
        email,
        password: hashedPassword
    });
    //save user to the db
    await user.save();

    if(user){
        //send token
         generateToken(res,user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
           
        })
    }
    
} catch (error) {
    res.status(401).json({message: (error as Error).message});
}
}

export  const loginUser = async(req: Request, res: Response) => {
   const { email, password } = req.body;

  console.log(email,password)

   try {

    const user = await User.findOne({email});

    if(!user){
        res.status(400);
        throw new Error('Invalid user credentials');
       
    }

 const isPasswordMatch = await bcryptjs.compare(password, user?.password);

    if(!isPasswordMatch){
        res.status(400);
        throw new Error('Invalid credentials');
       
    }

     //send token
        generateToken(res,user._id)
        res.status(201).json({
            _id: user?._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
           
        })
    
   } catch (error) {
    res.status(401).json({message: (error as Error).message});
   }


}

export const logoutUser = async(req: Request, res: Response) => {
 
    try {
           //clear cookie
    res.cookie('jwt', '', {
        httpOnly: true,
       expires: new Date(0),
        
       
    })
    //send response
    res.status(200).json({message: 'Logout successful'})
        
    } catch (error) {
        res.status(401).json({message: (error as Error).message});
    }
}

export const getAllUsers = async(req: Request, res: Response) => {
    //get all users
    try {
        //get all users without password from database
        const users = await User.find({}).select('-password');
        //send response with all users
        res.status(200).json(users);
    } catch (error) {
        //throw error 
        res.status(401).json({message: (error as Error).message});
    }
}   