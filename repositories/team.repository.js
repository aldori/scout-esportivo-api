import Team from "../models/team.model.js";

async function getTeam(id) {
  try {
    return await Team.findByPk(id);
  } catch (error) {
    throw error;
  }
}
async function insertTeam(team) {
  try {
    return await Team.create(team);
  } catch (error) {
    throw error;
  }
}
async function updateTeam(team) {
  try {
    await Team.update(team, {
      where: {
        teamId: team.teamId,
      },
    });
    return await getTeam(team.teamId);
  } catch (error) {
    throw error;
  }
}

export default {
  getTeam,
  insertTeam,
  updateTeam,
};
