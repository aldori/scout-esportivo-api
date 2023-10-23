import express from "express";
import AthleteController from "../controllers/athlete.controller.js";

const router = express.Router();

router.post("/", AthleteController.createAthlete);
router.get("/", AthleteController.getAthletes);
router.get("/:id", AthleteController.getAthlete);
router.put("/", AthleteController.updateAthlete);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;