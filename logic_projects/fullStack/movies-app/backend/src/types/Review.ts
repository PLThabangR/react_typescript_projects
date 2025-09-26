import { ObjectId } from "mongoose";


export interface Review{
     _id?: Object;
    name?: any;
    rating: number;
    comment: string;
    user:any ;
    createdAt?: Date
} 