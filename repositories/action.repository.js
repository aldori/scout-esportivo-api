import Action from "../models/action.model.js";

async function getActions() {
  try {
    return await Action.findAll();
  } catch (error) {
    throw error;
  }
}
async function getAction(id) {
  try {
    return await Action.findByPk(id);
  } catch (error) {
    throw error;
  }
}
async function insertAction(action) {
  try {
    return await Action.create(action);
  } catch (error) {
    throw error;
  }
}
async function updateAction(action) {
  try {
    await Action.update(action, {
      where: {
        actionId: action.actionId,
      },
    });
    return await getAction(action.actionId);
  } catch (error) {
    throw error;
  }
}

export default {
  getActions,
  getAction,
  insertAction,
  updateAction,
};
