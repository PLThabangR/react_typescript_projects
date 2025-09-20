
import mongoose from "mongoose";   
import Review from "./Review";



//Destructuring the object id
const ObjectId = mongoose.Schema.Types.ObjectId


const movieSchema = new mongoose.Schema({

    title: { type: String,required: true},
       image: { type: String,required: true},
    year :{type: Number,required: true },
    details: {type: String,required: true},
  genre: {type: ObjectId, ref: 'Genre',required: true},
cast : {type: String,required: true },  
    reviews :[Review] ,
    numRiviews : { type: Number,required: true,default: 0},
    createdAt:{type : Date,default: Date.now()}

}
{timestamps: true}
)//end of schema
   
      


export default mongoose.model('Movie', movieSchema)