import express from "express";

//import middlewares
import { authenticateUser ,authorizationAdmin} from "../middleware/authMiddleware";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controller/movieController";
import  checkId  from "../middleware/checkId";


const router = express.Router();

//public routes
router.get("/",getAllMovies);
router.get("/:id",getMovieById)
//restricted routes
router.post("/",authenticateUser,authorizationAdmin,createMovie);
router.put("/:id",authenticateUser,authorizationAdmin,checkId,updateMovie);
router.delete("/:id",authenticateUser,authorizationAdmin,checkId,deleteMovie)






export default router