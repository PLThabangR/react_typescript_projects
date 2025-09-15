import express from "express";
//import middlewares
import { authenticateUser, authorizationAdmin } from "../middleware/authMiddleware";
import { createGnere, updateGenre } from "../controller/genreController";

const router = express.Router();


router.post("/",authenticateUser, authorizationAdmin,createGnere)
router.put("/",authenticateUser, authorizationAdmin,updateGenre)



export default router