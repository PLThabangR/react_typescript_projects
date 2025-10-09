import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';

//importing middlewares
import connectDB from './config/db';
import { logger } from './middleware/logger';
import { notFoundErrorHandler } from './middleware/error';



//importing packages
import cookieParser from 'cookie-parser'
import path from 'path';
//importiojng routes
// import uploadRoutes from './routes/uploadRoutes'
import movieRouter from './routes/moviesRoutes';
import userRoutes from './routes/usersRoute';
import genreRoutes from './routes/genreRoutes';

//Instace of express
const app : Express = express()
//Dotenv
dotenv.config()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(logger)
app.use(notFoundErrorHandler)



//Routes
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/genres',genreRoutes)
app.use('/api/v1/movies',movieRouter)
//app.use('/api/v1/upload',uploadRoutes)


//Get the local directory
//const __dirname = path.resolve()

//app.use("/uploads",express.static(path.join(__dirname,"/uploads")))




//Running app uinsing listen
app.listen(process.env.PORT,()=>
console.log(`Server running on port ${process.env.PORT}`))
//Connect to DB
connectDB()

