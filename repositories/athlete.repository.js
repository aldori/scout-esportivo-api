import Athlete from "../models/athlete.model.js";

async function getAthletes() {
  try {
    return await Athlete.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAthlete(id) {
  try {
    return await Athlete.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function insertAthlete(athlete) {
  try {
    return await Athlete.create(athlete);
  } catch (error) {
    throw error;
  }
}

async function updateAthlete(athlete) {
  try {
    await Athlete.update(athlete, {
      where: {
        athleteId: athlete.athleteId,
      },
    });
    return await getAthlete(athlete.athleteId);
  } catch (error) {
    throw error;
  }
}

export default {
  getAthletes,
  getAthlete,
  insertAthlete,
  updateAthlete,
};
