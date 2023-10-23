import PositionRepository from "../repositories/position.repository.js";

async function createPosition(position) {
  return await PositionRepository.insertPosition(position);
}

async function getPositions() {
  return await PositionRepository.getPositions();
}

async function getPosition(id) {
  return await PositionRepository.getPosition(id);
}

async function updatePosition(position) {
  return await PositionRepository.updatePosition(position);
}

export default {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
};
