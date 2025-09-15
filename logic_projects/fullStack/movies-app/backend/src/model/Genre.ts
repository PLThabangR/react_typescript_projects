import { kMaxLength } from "buffer";
import mongoose from "mongoose";

interface Genre {
    name: string
}


const genreSchema = new mongoose.Schema<Genre>({

    name: {
        type: String,
        required: true,
        kMaxLength: 32,
        unique: true
    }
})


export default mongoose.model('Genre', genreSchema) 


