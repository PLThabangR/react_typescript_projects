import { Request, Response, NextFunction } from 'express';


/**
 * asyncHandler is a helper that catches errors in async routes and
 * passes them to Express error handling
 *  (avoids having to wrap try/catch everywhere).
 */

//
export const asyncHandler = (fn: any): (req: Request, res: Response, next: NextFunction) => Promise<void> => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // passing function to the hanlder
            await fn(req, res, next);
        } catch (error) {
            // throw the error to the error handling middleware
           res.status(500).json({ error: (error as Error).message });
        }
    };
};
