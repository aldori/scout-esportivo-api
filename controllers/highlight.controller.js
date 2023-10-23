import HighlightService from "../services/highlight.service.js";

async function createHighlight(req, res, next) {
  try {
    let highlight = req.body;
    if (
      !highlight.minute ||
      !highlight.pointX ||
      !highlight.pointY ||
      !highlight.matchId ||
      !highlight.actionId ||
      !highlight.athleteId 
    ) {
      throw new Error("Minuto, PointoX, PointoY, Jogo, Ação e ID do Atleta são obrigatórios.");
    }
    highlight = await HighlightService.createHighlight(highlight);
    res.send(highlight);
    logger.info(`POST /highlight - ${JSON.stringify(highlight)}`);
  } catch (err) {
    next(err);
  }
}

async function getHighlights(req, res, next) {
  try {
    res.send(await HighlightService.getHighlights(req.params.matchId));
    logger.info("GET /highlight/matchId");
  } catch (err) {
    next(err);
  }
}

async function deleteHighlight(req, res, next) {
  try {
    res.send(await HighlightService.deleteHighlight(req.params.id));
    logger.info("DELETE /highlight/:id");
  } catch (err) {
    next(err);
  }
}

async function updateHighlight(req, res, next) {
  try {
    const highlight = req.body;
    if (
      !highlight.highlightId ||
      !highlight.minute ||
      !highlight.pointX ||
      !highlight.pointY ||
      !highlight.actionId ||
      !highlight.athleteId 
    ) {
      throw new Error("ID, Minuto, PointoX, PointoY, Jogo, Ação e ID do Atleta são obrigatórios.");
    }
    res.send(await HighlightService.updateHighlight(highlight));
    logger.info(`PUT /highlight - ${JSON.stringify(highlight)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createHighlight,
  getHighlights,
  deleteHighlight,
  updateHighlight,
};
