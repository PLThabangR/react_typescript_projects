import Genre from "../model/Genre";
import { Request, Response } from "express";


export const createGnere = async(req: Request, res: Response) => {
    try {
        //get genre from request body
    const { name } = req.body;
  
////Defenssive programmig
    if(!name){
     throw new Error("Please add genre name");
    }

    //check if genre already exists
    const genreExists = await Genre.findOne({name});
    if(genreExists){
        throw new Error("Genre already exists");
    }
   


    //create genre in database
    const genre = new Genre({name});

    //save genre to the database
    await genre.save();
    //send response with genre details
    res.status(201).json(genre);
    } catch (error:any) {
        res.status(400).json({message: (error as Error).message});
    }
};

export const getAllGenres = async(req: Request, res: Response) => {
    try {
        //get all genres from database
        const genres = await Genre.find({});
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
        res.status(500).json({message: (error as Error).message})
    }
    }


    export const deleteGenre = async(req: Request, res: Response) => {
        const { id } = req.params;
        try {
            //Defenssive programmig
            if(!id){
                throw new Error("No genre id");
            }
            //get genre from database
            const existingGenre = await Genre.findByIdAndDelete(id);
            //if existingGenre not found
            if(!existingGenre){
               throw new Error("Genre not found");
            }
            /*//delete genre from the database
              // const existingGenre = await Genre.findById(id);
            // await Genre.deleteOne({ _id: id });
            */
            //send response with existingGenre details
            res.status(200).json({message:"Genre deleted",existingGenre});
        } catch (error) {
            //throw error 
            res.status(500).json({message: (error as Error).message})
        }
        }