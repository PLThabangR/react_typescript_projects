import { Genre } from "./Genre"
import { Review } from "./Review"
export interface Movie{
    _id: string,
    title: string,
    image: string,
    year: number,
    details: string,
    genre: Genre,
    cast: string,
    reviews: Review[],
    numRiviews: number
}