import express from 'express';
import  {uploadMovie }  from '../controller/uploadController';


const router = express.Router();


router.post('/upload',uploadMovie)





export default router;