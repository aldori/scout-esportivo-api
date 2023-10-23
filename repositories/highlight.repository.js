import Athlete from "../models/athlete.model.js";
import Highlight from "../models/highlight.model.js";
import Match from "../models/match.model.js";
import Position from "../models/position.model.js";

async function getHighlights(matchId) {
  try {
    return await Highlight.findAll({
      include: [
        {
          model: Athlete,
        },
        {
          model: Position,
        },
        {
          model: Match,
        },
      ],
      where: {
        matchId: matchId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function insertHighlight(highlight) {
  try {
    return await Highlight.create(highlight);
  } catch (error) {
    throw error;
  }
}

async function getHighlight(id) {
  try {
    return await Highlight.findByPk(id, {
      include: [
        {
          model: Athlete,
        },
        {
          model: Position,
        },
        {
          model: Match,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function updateHighlight(highlight) {
  try {
    await Highlight.update(highlight, {
      where: {
        highlightId: highlight.highlightId,
      },
    });
    return await getHighlight(highlight.highlightId);
  } catch (error) {
    throw error;
  }
}

async function deleteHighlight(highlightId) {
  try {
    await Highlight.destroy({
      where: {
        highlightId: highlightId,
      },
    });
    return {};
  } catch (error) {
    throw error;
  }
}

export default {
  getHighlights,
  insertHighlight,
  updateHighlight,
  deleteHighlight,
};
