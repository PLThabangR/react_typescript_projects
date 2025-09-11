import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import cookieParser from 'cookie-parser'
import path from 'path'





//Instace of express
const app : Express = express()
//Dotenv
dotenv.config()
//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT,()=>

console.log(`Server running on port ${process.env.PORT}`))

connectDB()

