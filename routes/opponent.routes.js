import express from "express";
import OpponentController from "../controllers/opponent.controller.js";

const router = express.Router();

router.post("/", OpponentController.createOpponent);
router.get("/", OpponentController.getOpponents);
router.get("/:id", OpponentController.getOpponent);
router.put("/", OpponentController.updateOpponent);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;