
import express from "express";
import { createUser, loginUser } from "../controller/userController";
//import { registerUser, loginUser } from "../controllers/userController";

// Initialize router
const router = express.Router();
// Define routes
router.post("/register", createUser);
router.post("/login",loginUser);



export default router