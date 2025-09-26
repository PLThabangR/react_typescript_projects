import { Request, Response } from 'express';
import mongoose, { Types } from 'mongoose';

//types
import type { Review } from '../types/Review';
import type { User } from '../types/User';
//model
import MovieModel from '../model/Movies';

interface AuthRequest extends Request{
    user?:User
}

export const addReview = async (req: AuthRequest, res: Response) => {
    const { rating, comment } = req.body;
  
    const { id } = req.params;

    try {
        // Input validation
      
    

        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5" });
        }

        if (!comment?.trim()) {
            return res.status(400).json({ message: "Comment is required" });
        }

        // Find movie by id
        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        // Check if user has already reviewed (using id from request body)
        if (id) {
            const existingReview = movie.reviews?.find((review: Review | Types.ObjectId) => {
                // Handle both populated and unpopulated reviews
                if (review instanceof Types.ObjectId) {
                    return false; // Can't check user ID on unpopulated ObjectId
                }
                
                const reviewObj = review as Review;
                return reviewObj.user?.toString() === id.toString();
            });

            if (existingReview) {
                return res.status(400).json({ message: "You have already reviewed this movie" });
            }
        }

        // Create review object
        const newReview: Review = {
            name: req.user?.name,//this comes from the auth middleware
            rating: Number(rating),
            comment: comment.trim(),
            user: req.user?._id, //this comes from the auth middleware
        };

        // Add review to movie
        movie.reviews = movie.reviews || [];
        //
        movie.reviews.push(newReview as Review);
        
        // increment and decrement number of reviews
        movie.numReviews = movie.reviews.length;
        
        // Calculate average rating
             const totalRating = movie.reviews.reduce((acc, item :any) => 
                 acc + item.rating
             ,0);

         movie.rating = Number((totalRating / movie.numReviews).toFixed(1));
     

        // Save the movie with new review
        await movie.save();


        return res.status(201).json({
            message: "Review added successfully"
        });

    } catch (error: any) {
        console.error("Error adding review:", error);
        return res.status(500).json({ 
            message: "Internal server error",
            error: error.message 
        });
    }
};