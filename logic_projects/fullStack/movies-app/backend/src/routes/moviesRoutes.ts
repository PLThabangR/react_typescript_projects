import express from "express";

//import middlewares
import { authenticateUser ,authorizationAdmin} from "../middleware/authMiddleware";

import  checkId  from "../middleware/checkId";
import { createMovie } from "../controller/moviesController";


const router = express.Router();

//public routes
// router.get("/",getAllMovies);
// router.get("/:id",getMovieById)

//restricted routes
router.post("/create-movie",authenticateUser,authorizationAdmin,createMovie);
// router.put("/edit-movie/:id",authenticateUser,authorizationAdmin,checkId,updateMovie);
// router.delete("/:id",authenticateUser,authorizationAdmin,checkId,deleteMovie)






export default router