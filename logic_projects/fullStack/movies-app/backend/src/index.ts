import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';
//importing modules
import connectDB from './config/db';
import userRoutes from './routes/usersRoute';
import genreRoutes from './routes/genreRoutes';

//importing packages
import cookieParser from 'cookie-parser'
import path from 'path'

//Instace of express
const app : Express = express()
//Dotenv
dotenv.config()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//Routes
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/genres',genreRoutes)



//Running app uinsing listen
app.listen(process.env.PORT,()=>
console.log(`Server running on port ${process.env.PORT}`))
//Connect to DB
//connectDB()

