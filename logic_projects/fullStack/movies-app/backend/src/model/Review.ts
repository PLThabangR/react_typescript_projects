import mongoose from "mongoose";
import type {Review}  from "../types/Review";



//Destructuring the object id
const ObjectId = mongoose.Schema.Types.ObjectId

export const reviewSchema = new mongoose.Schema<Review>({
name: {type: String,required: true},
rating: {type: Number,required: true},
comment: {type: String,required: true},
user: {type:ObjectId, ref: 'User'},
  createdAt: { type: Date, default: Date.now }

}
,{timestamps: true}

)

 const ReviewModel = mongoose.model('Review', reviewSchema)
export default  ReviewModel;