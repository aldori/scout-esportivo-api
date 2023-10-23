import TeamRepository from "../repositories/team.repository.js";

async function createTeam(team) {
  return await TeamRepository.insertTeam(team);
}

async function getTeams() {
  return await TeamRepository.getTeams();
}

async function getTeam(id) {
  return await TeamRepository.getTeam(id);
}

async function updateTeam(team) {
  return await TeamRepository.updateTeam(team);
}


export default {
  createTeam,
  getTeams,
  getTeam,
  updateTeam,
};
