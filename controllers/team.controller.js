import TeamService from "../services/team.service.js";

async function createTeam(req, res, next) {
  try {
    let team = req.body;
    if (!team.name || !team.logo) {
      throw new Error("Name and Logo are required.");
    }
    team = await TeamService.createTeam(team);
    res.send(team);
    logger.info(`POST /team - ${JSON.stringify(team)}`);
  } catch (err) {
    next(err);
  }
}

async function getTeam(req, res, next) {
  try {
    res.send(await TeamService.getTeam(req.params.id));
    logger.info("GET /team/:id");
  } catch (err) {
    next(err);
  }
}

async function updateTeam(req, res, next) {
  try {
    const team = req.body;
    if (!team.teamId || !team.logo || !team.name) {
      throw new Error("Id, Name and Logo are required.");
    }
    res.send(await TeamService.updateTeam(team));
    logger.info(`PUT /team - ${JSON.stringify(team)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createTeam,
  getTeam,
  updateTeam,
};
