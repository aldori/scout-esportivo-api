import express from "express";
import ActionController from "../controllers/action.controller.js";

const router = express.Router();

router.post("/", ActionController.createAction);
router.get("/", ActionController.getActions);
router.get("/:id", ActionController.getAction);
router.put("/", ActionController.updateAction);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;