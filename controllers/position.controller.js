import PositionService from "../services/position.service.js";

async function createPosition(req, res, next) {
  try {
    let position = req.body;
    if (!position.name ) {
      throw new Error("Name are required.");
    }
    position = await PositionService.createPosition(position);
    res.send(position);
    logger.info(`POST /position - ${JSON.stringify(position)}`);
  } catch (err) {
    next(err);
  }
}

async function getPositions(req, res, next) {
  try {
    res.send(await PositionService.getPositions());
    logger.info("GET /position");
  } catch (err) {
    next(err);
  }
}

async function getPosition(req, res, next) {
  try {
    res.send(await PositionService.getPosition(req.params.id));
    logger.info("GET /position/:id");
  } catch (err) {
    next(err);
  }
}

async function updatePosition(req, res, next) {
  try {
    const position = req.body;
    if (!position.positionId || !position.name) {
      throw new Error("Id and Name are required.");
    }
    res.send(await PositionService.updatePosition(position));
    logger.info(`PUT /position - ${JSON.stringify(position)}`);
  } catch (err) {
    next(err);
  }
}


export default {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
};
