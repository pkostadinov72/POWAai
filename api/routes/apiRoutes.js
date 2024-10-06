import express from "express";
import { generatePrompt } from "../controllers/aiController.js";
import { authenticateImageKit } from "../controllers/imagekitController.js";

const router = express.Router();

router.post("/powa/generate-prompt", generatePrompt);
router.get("/images/auth", authenticateImageKit);

export default router;
