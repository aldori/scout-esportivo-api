import ActionService from "../services/action.service.js";

async function createAction(req, res, next) {
  try {
    let action = req.body;
    if (!action.name || !action.color) {
      throw new Error("Name and Color  of action are required.");
    }
    action = await ActionService.createAction(action);
    res.send(action);
    logger.info(`POST /action - ${JSON.stringify(action)}`);
  } catch (err) {
    next(err);
  }
}

async function getActions(req, res, next) {
  try {
    res.send(await ActionService.getActions());
    logger.info("GET /action");
  } catch (err) {
    next(err);
  }
}

async function getAction(req, res, next) {
  try {
    res.send(await ActionService.getAction(req.params.id));
    logger.info("GET /action/:id");
  } catch (err) {
    next(err);
  }
}

async function updateAction(req, res, next) {
  try {
    const action = req.body;
    if (!action.actionId || !action.name || !action.color) {
      throw new Error("Id, Name and Color are required.");
    }
    res.send(await ActionService.updateAction(action));
    logger.info(`PUT /action - ${JSON.stringify(action)}`);
  } catch (err) {
    next(err);
  }
}


export default {
  createAction,
  getActions,
  getAction,
  updateAction,
};
