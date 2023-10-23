import ActionRepository from "../repositories/action.repository.js";

async function createAction(action) {
  return await ActionRepository.insertAction(action);
}

async function getActions() {
  return await ActionRepository.getActions();
}

async function getAction(id) {
  return await ActionRepository.getAction(id);
}

async function updateAction(action) {
  return await ActionRepository.updateAction(action);
}

export default {
  createAction,
  getActions,
  getAction,
  updateAction,
};
