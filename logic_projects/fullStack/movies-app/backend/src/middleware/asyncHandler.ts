import { Request, Response, NextFunction } from 'express';


export const asyncHandler = (handler: any) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            // passing function to the hanlder
            await handler(req, res, next);
        } catch (error) {
            next(error);
        }
    };