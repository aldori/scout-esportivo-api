import Match from "../models/match.model.js";
import Opponent from "../models/opponent.model.js";

async function getMatches() {
  try {
    return await Match.findAll({
      include: [
        {
          model: Opponent,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getMatch(id) {
  try {
    return await Match.findByPk(id, {
      include: [
        {
          model: Opponent,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function insertMatch(match) {
  try {
    return await Match.create(match);
  } catch (error) {
    throw error;
  }
}

async function updateMatch(match) {
  try {
    await Match.update(match, {
      where: {
        matchId: match.matchId,
      },
    });
    return await getMatch(match.matchId);
  } catch (error) {
    throw error;
  }
}

export default {
  getMatches,
  getMatch,
  insertMatch,
  updateMatch,
};
