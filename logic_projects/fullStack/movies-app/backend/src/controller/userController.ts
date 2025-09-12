import  { Response, Request } from "express";
import User from "../model/User";
import bcryptjs from 'bcryptjs';
import generateToken from "../utils/genetrateToken";



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
    res.status(401).json({error: (error as Error).message});
}
}

export  const loginUser = (req: Request, res: Response) => {
    res.send('user logged in');
}