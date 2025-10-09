import path from "path";
import express from "express";
import multer, { FileFilterCallback } from "multer";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

/**
 * ✅ Configure multer storage
 * - destination: folder where images will be saved
 * - filename: unique name to prevent overwriting existing files
 */
const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "uploads/");
  },


  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

/**
 * ✅ File filter for image validation
 * - Only accepts files with MIME type starting with 'image/'
 * - Rejects all other file types
 */

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  const filetypes = /jpe?g|png|webp/i;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/i;

  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Images only"));
  }
};
/**
 * ✅ Initialize multer upload handler
 * - Handles a single file upload from the field name 'image'
 */

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");
/**
 * ✅ POST route for image upload
 * Endpoint: POST /
 * Description: Uploads an image file and returns its saved path
 */
router.post("/", (req: Request, res: Response, next: NextFunction) => {
 uploadSingleImage(req, res,(err ) => {
  /**
     * Handle errors:
     * - Multer errors (e.g., invalid file size/type)
     * - Custom or unexpected errors
     */
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).send({ message: "No image file provided" });
    }

    return res.status(200).send({
      message: "Image uploaded successfully",
      image: `/${req.file.path}`,// File path relative to server root
    });
  });
});

export default router;