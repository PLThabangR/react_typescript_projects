import Genre from "../model/Genre";
import { Request, Response } from "express";


export const createGnere = async(req: Request, res: Response) => {
    try {
        //get genre from request body
    const { name } = req.body;
   

    if(!name){
     throw new Error("Please add genre name");
    }

    //check if genre already exists
    const genreExists = await Genre.findOne({name});
    if(genreExists){
        throw new Error("Genre already exists");
    }

    //upper case first letter before saving
   const  nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    //create genre in database
    const genre = new Genre({nameUpper});

    //save genre to the database
    await genre.save();
    //send response with genre details
    res.status(201).json(genre);
    } catch (error:any) {
        res.status(400).json({message: (error as Error).message});
    }
};

const getAllGenres = async(req: Request, res: Response) => {
    try {
        //get all genres from database
        const genres = await Genre.find({}).select('-_id -__v');
        //send response with all genres
        res.status(200).json(genres);
    } catch (error) {
        //throw error 
        res.status(401).json({message: (error as Error).message})
    }
}

export const updateGenre = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        //Defenssive programmig
        if(!name){
            throw new Error("Please add genre name");
           }
        if(!id){
            throw new Error("No genre id");
           }
        //get genre from database
        const existingGenre = await Genre.findById(id);
        //if existingGenre not found
        if(!existingGenre){
           throw new Error("Genre not found");
        }
        //update existingGenre name
        existingGenre.name = name;
        //save existingGenre to the database
        await existingGenre.save();
        //send response with existingGenre details
        res.status(200).json(existingGenre);
    } catch (error) {
        //throw error 
        res.status(401).json({message: (error as Error).message})
    }
    


}