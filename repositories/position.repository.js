import Position from "../models/position.model.js";

async function getPositions() {
  try {
    return await Position.findAll();
  } catch (error) {
    throw error;
  }
}

async function getPosition(id) {
  try {
    return await Position.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function insertPosition(position) {
  try {
    return await Position.create(position);
  } catch (error) {
    throw error;
  }
}

async function updatePosition(position) {
  try {
    await Position.update(position, {
      where: {
        positionId: position.positionId,
      },
    });
    return await getPosition(position.positionId);
  } catch (error) {
    throw error;
  }
}

export default {
  getPositions,
  getPosition,
  insertPosition,
  updatePosition,
};
