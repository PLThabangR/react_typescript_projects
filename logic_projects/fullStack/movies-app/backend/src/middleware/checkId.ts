import { isValidObjectId } from "mongoose";
import { Request, Response, NextFunction } from "express";


function checkId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        return res.status(404).json({ message: "Invalid Id" });
    }
    next();
}
export default checkId