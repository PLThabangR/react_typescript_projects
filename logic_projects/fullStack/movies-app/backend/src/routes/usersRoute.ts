
import express from "express";
import { createUser, loginUser, logoutUser ,getAllUsers,updateUserDetails,getCurrentUSer} from "../controller/userController";
//import middlewares
import { authenticateUser, authorizationAdmin } from "../middleware/authMiddleware";

// Initialize router
const router = express.Router();

//Admin routersrouter.route("/").get(authenticate, authorization)

//type for the authenticate middleware


// Define routes
router.post("/", createUser)
router.get("/",authenticateUser, authorizationAdmin,getAllUsers);
router.get("/profile", authenticateUser,getCurrentUSer)
router.put("/profile",authenticateUser,updateUserDetails);

router.post("/login",loginUser);
router.post("/logout", logoutUser);



export default router