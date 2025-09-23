import { Request, Response } from "express";
import MovieModel from "../model/Movies";
import type { Review } from "../types/Review";
import { ObjectId, Types } from "mongoose";

export const addReview =async (req: Request, res: Response) => {
        const {rating,comment} = req.body
        const {id} = req.params
      
    try {

        if(!id){
            throw new Error("No movie id");
        }
        //find movie by id so we can add comment
        const movie = await MovieModel.findById(id);

        //if movie not found
        if(!movie){
            throw new Error("Movie not found");
        }
        //check if user has already reviewed
        const existingReview = movie?.reviews?.find((review:Review| Types.ObjectId) => 
           {  // If populated (Review object)
  if ("user" in (review as Review)) {
    return (review as Review).user?.toString() === id.toString();
  }

  // If it's just an ObjectId (unpopulated), can't match user directly
  return false;


           });
        if(existingReview){
            throw new Error("You have already reviewed this movie");
        }

        // //add review to movie
        // movie.reviews.push({rating,comment});
        // movie.numReviews = movie.reviews.length;
        // movie.rating = movie.reviews.reduce((acc, item) => item.rating + acc, 0) / movie.reviews.length;
          
        
    } catch (error:any) {
        return res.status(500).json({message: (error as Error).message});
    }

}