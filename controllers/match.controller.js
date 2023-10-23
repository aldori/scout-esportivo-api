import MatchService from "../services/match.service.js";

async function createMatch(req, res, next) {
  try {
    let match = req.body;
    if (!match.place || !match.date || !match.hour || !match.opponentId) {
      throw new Error("Place, Date, hour and Opponent are required");
    }
    match = await MatchService.createMatch(match);
    res.send(match);
    logger.info(`POST /match - ${JSON.stringify(match)}`);
  } catch (err) {
    next(err);
  }
}

async function getMatches(req, res, next) {
  try {
    res.send(await MatchService.getMatches());
    logger.info("GET /match");
  } catch (err) {
    next(err);
  }
}

async function getMatch(req, res, next) {
  try {
    res.send(await MatchService.getMatch(req.params.id));
    logger.info("GET /match/:id");
  } catch (err) {
    next(err);
  }
}

async function updateMatch(req, res, next) {
  try {
    const match = req.body;
    if (
      !match.matchId ||
      !match.place ||
      !match.date ||
      !match.hour ||
      !match.opponentId
    ) {
      throw new Error("Id, Place, Date, hour and Opponent are required.");
    }

    res.send(await MatchService.updateMatch(match));
    logger.info(`PUT /match - ${JSON.stringify(match)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createMatch,
  getMatches,
  getMatch,
  updateMatch,
};
