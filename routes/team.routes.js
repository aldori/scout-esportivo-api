import express from "express";
import TeamController from "../controllers/team.controller.js";

const router = express.Router();

router.post("/", TeamController.createTeam);
router.get("/:id", TeamController.getTeam);
router.put("/", TeamController.updateTeam);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;