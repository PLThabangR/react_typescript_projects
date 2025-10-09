import express from "express";

//import middlewares
import { authenticateUser ,authorizationAdmin} from "../middleware/authMiddleware";
import  checkId  from "../middleware/checkId";

//import controllers
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie,getNewMovies } from "../controller/moviesController";
import { addReview } from "../controller/reviewMovieController";


const router = express.Router();

//public routes all users can access without authentication
router.get("/all-movies",getAllMovies);
 router.get("/:id",checkId,getMovieById);
 router.get("new-movies",getNewMovies)

//restricted routes for admin
router.post("/create-movie",authenticateUser,authorizationAdmin,createMovie);
 router.put("/edit-movie/:id",authenticateUser,authorizationAdmin,checkId,updateMovie);
 router.delete("delete-movie/:id",authenticateUser,authorizationAdmin,checkId,deleteMovie)
  router.delete("delete-comment/:id",authenticateUser,authorizationAdmin,checkId,deleteMovie)


//Movie review only the authenticate user can commnet on a movie
router.post("/review-movie/:id",authenticateUser,checkId,addReview)






export default router