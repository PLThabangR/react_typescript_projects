import express from "express";
//import middlewares
import { authenticateUser, authorizationAdmin } from "../middleware/authMiddleware";
import { createGnere, deleteGenre, getAllGenres, getGenreById, updateGenre } from "../controller/genreController";

const router = express.Router();


router.post("/",authenticateUser, authorizationAdmin,createGnere)
router.put("/:id",authenticateUser, authorizationAdmin,updateGenre)
router.delete("/:id",authenticateUser, authorizationAdmin,deleteGenre)
router.get("/",authenticateUser, authorizationAdmin,getAllGenres)
router.get("/:id",authenticateUser, authorizationAdmin,getGenreById)



export default router