import { Request, Response , NextFunction} from "express";
import Movie from "../model/Movies";
import Genre from "../model/Genre";

export const createMovie = async (res: Response, req: Request, next: NextFunction) => {
    const { title, image, year, details, genre, cast } = req.body;
    try{
        if(!title || !image || !year || !details || !genre || !cast){
            throw new Error("All fields are required");
        }

        //check if movie already exists
        const movieExists = await Movie.findOne({title});
        if(movieExists){
            throw new Error("Movie already exists");
        }

        //check if genre exists
        const genreExists = await Genre.findOne({name: genre});
        if(!genreExists){
            throw new Error("Genre does not exist");
        }

        //create new movie object
        const newMovie = new Movie({title, image, year, details, genre, cast});


        //save movie to the database
        await newMovie.save();
        //send response with new movie details
        res.status(201).json(newMovie);

    }catch(error:any){
    return res.status(500).json({message: (error as Error).message});
    }
}


export const getAllMovies = async (res: Response, req: Request, next: NextFunction) => {}


export const getMovieById = async (res: Response, req: Request, next: NextFunction) => {}


export const updateMovie = async (res: Response, req: Request, next: NextFunction) => {}


export const deleteMovie = async (res: Response, req: Request, next: NextFunction) => {}

