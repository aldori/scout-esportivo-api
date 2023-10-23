import AthleteRepository from "../repositories/athlete.repository.js";

async function createAthlete(athlete) {
  return await AthleteRepository.insertAthlete(athlete);
}

async function getAthletes() {
  return await AthleteRepository.getAthletes();
}

async function getAthlete(id) {
  return await AthleteRepository.getAthlete(id);
}

async function updateAthlete(athlete) {
  return await AthleteRepository.updateAthlete(athlete);
}

export default {
  createAthlete,
  getAthletes,
  getAthlete,
  updateAthlete,
};
