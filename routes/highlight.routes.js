import express from "express";
import HighlightController from "../controllers/highlight.controller.js";

const router = express.Router();

router.post("/", HighlightController.createHighlight);
router.get("/:matchId", HighlightController.getHighlights);
router.delete("/:id", HighlightController.deleteHighlight);
router.put("/", HighlightController.updateHighlight);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;