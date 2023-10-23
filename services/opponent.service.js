import OpponentRepository from "../repositories/opponent.repository.js";

async function createOpponent(opponent) {
  return await OpponentRepository.insertOpponent(opponent);
}

async function getOpponents() {
  return await OpponentRepository.getOpponents();
}

async function getOpponent(id) {
  return await OpponentRepository.getOpponent(id);
}

async function updateOpponent(opponent) {
  return await OpponentRepository.updateOpponent(opponent);
}

export default {
  createOpponent,
  getOpponents,
  getOpponent,
  updateOpponent,
};
