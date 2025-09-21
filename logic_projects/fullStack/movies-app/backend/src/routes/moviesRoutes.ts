import express from "express";

//import middlewares
import { authenticateUser ,authorizationAdmin} from "../middleware/authMiddleware";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controller/movieController";
import { checkId } from "../middleware/checkId";


const router = express.Router();






export default router