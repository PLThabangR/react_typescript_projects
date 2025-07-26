import express,{Request, Response} from "express"
import cors from "cors"
import dotenv from "dotenv"


dotenv.config()//load env variables

const app = express()//create express app

app.use(cors())//cross origin resource sharing
app.use(express.json())//parse json


app.get("/", async (req:Request, res:Response) => {
    res.json({message:"Hello "})
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))   
