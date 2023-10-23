import express from "express";
import MatchController from "../controllers/match.controller.js";

const router = express.Router();

router.post("/", MatchController.createMatch);
router.get("/", MatchController.getMatches);
router.get("/:id", MatchController.getMatch);
router.put("/", MatchController.updateMatch);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;