import express from "express";
//import middlewares
import { authenticateUser, authorizationAdmin } from "../middleware/authMiddleware";
import { createGnere, deleteGenre, updateGenre } from "../controller/genreController";

const router = express.Router();


router.post("/",authenticateUser, authorizationAdmin,createGnere)
router.put("/:id",authenticateUser, authorizationAdmin,updateGenre)
router.delete("/:id",authenticateUser, authorizationAdmin,deleteGenre)



export default router