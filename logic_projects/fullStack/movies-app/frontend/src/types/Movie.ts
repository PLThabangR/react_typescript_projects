import type { Genre } from "./Genre";
import type { Review } from "./Review";

export interface Movie{
    _id?: object;
    title: string;
    image: string;
    year: number;
    details: string;
    genre: Genre;
    cast: string[];
    reviews?: (Review | object)[];
    rating?: number;
    numReviews?: number;
    createdAt?: Date;
}