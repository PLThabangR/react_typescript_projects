import { Types } from "mongoose";
import type { Genre } from "./Genre"
import type { Review } from "./Review"

export interface Movie{
    _id?: Object;
    title: string;
    image: string;
    year: number;
    details: string;
    genre: Genre;
    cast: string;
    reviews?: (Review | Types.ObjectId)[];
    numReviews?: number;
    createdAt?: Date;
}