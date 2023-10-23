import express from "express";
import PositionController from "../controllers/position.controller.js";

const router = express.Router();

router.post("/", PositionController.createPosition);
router.get("/", PositionController.getPositions);
router.get("/:id", PositionController.getPosition);
router.put("/", PositionController.updatePosition);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;