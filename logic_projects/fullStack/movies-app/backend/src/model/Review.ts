import mongoose from "mongoose";
import type {Review}  from "../types/Review";

const reviewSchema = new mongoose.Schema<Review>({
name: {type: String,required: true},
rating: {type: Number,required: true},
comment: {type: String,required: true},
user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

}
,{timestamps: true}

)

 const ReviewModel = mongoose.model('Review', reviewSchema)
export default  ReviewModel;