
import mongoose from "mongoose";   
import {reviewSchema,} from "./Review";
import { Movie } from "../types/Movies";



//Destructuring the object id
const ObjectId = mongoose.Schema.Types.ObjectId


const movieSchema = new mongoose.Schema<Movie>({

    title: { type: String,required: true},
       image: { type: String,required: true},
    year :{type: Number,required: true },
    details: {type: String,required: true},
  genre: {type: ObjectId, ref: 'Genre',required: true},
cast : [{type: String }],  
    reviews :[reviewSchema ],
    numReviews : { type: Number,required: true,default: 0},
    createdAt:{type: Date,default: Date.now()}

},
{timestamps: true}
)//end of schema
   
      

const MovieModel = mongoose.model<Movie>('Movie', movieSchema)

export default MovieModel