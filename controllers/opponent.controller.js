import OpponentService from "../services/opponent.service.js";

async function createOpponent(req, res, next) {
  try {
    let opponent = req.body;
    if (!opponent.name) {
      throw new Error("Name are required.");
    }
    opponent = await OpponentService.createOpponent(opponent);
    res.send(opponent);
    logger.info(`POST /opponent - ${JSON.stringify(opponent)}`);
  } catch (err) {
    next(err);
  }
}

async function getOpponents(req, res, next) {
  try {
    res.send(await OpponentService.getOpponents());
    logger.info("GET /opponent");
  } catch (err) {
    next(err);
  }
}

async function getOpponent(req, res, next) {
  try {
    res.send(await OpponentService.getOpponent(req.params.id));
    logger.info("GET /opponent/:id");
  } catch (err) {
    next(err);
  }
}

async function updateOpponent(req, res, next) {
  try {
    const opponent = req.body;
    if (!opponent.opponentId || !opponent.name) {
      throw new Error("Id, Name are required.");
    }
    res.send(await OpponentService.updateOpponent(opponent));
    logger.info(`PUT /opponent - ${JSON.stringify(opponent)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createOpponent,
  getOpponents,
  getOpponent,
  updateOpponent,
};
