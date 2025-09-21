import express from "express";

//import middlewares
import { authenticateUser ,authorizationAdmin} from "../middleware/authMiddleware";
import  checkId  from "../middleware/checkId";

//import controllers
import { createMovie, getAllMovies, getMovieById } from "../controller/moviesController";


const router = express.Router();

//public routes
router.get("/all-movies",getAllMovies);
 router.get("/:id",checkId,getMovieById)

//restricted routes
router.post("/create-movie",authenticateUser,authorizationAdmin,createMovie);
// router.put("/edit-movie/:id",authenticateUser,authorizationAdmin,checkId,updateMovie);
// router.delete("/:id",authenticateUser,authorizationAdmin,checkId,deleteMovie)






export default router