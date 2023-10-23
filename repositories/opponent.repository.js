import Opponent from "../models/opponent.model.js";

async function getOpponents() {
  try {
    return await Opponent.findAll();
  } catch (error) {
    throw error;
  }
}
async function getOpponent(id) {
  try {
    return await Opponent.findByPk(id);
  } catch (error) {
    throw error;
  }
}
async function insertOpponent(opponent) {
  try {
    return await Opponent.create(opponent);
  } catch (error) {
    throw error;
  }
}
async function updateOpponent(opponent) {
  try {
    await Opponent.update(opponent, {
      where: {
        opponentId: opponent.opponentId,
      },
    });
    return await getOpponent(opponent.opponentId);
  } catch (error) {
    throw error;
  }
}

export default {
  getOpponents,
  getOpponent,
  insertOpponent,
  updateOpponent,
};
