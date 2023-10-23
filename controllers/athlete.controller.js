import AthleteService from "../services/athlete.service.js";

async function createAthlete(req, res, next) {
  try {
    let athlete = req.body;
    if (!athlete.name || !athlete.number) {
      throw new Error("Name and number are required.");
    }
    athlete = await AthleteService.createAthlete(athlete);
    res.send(athlete);
    logger.info(`POST /athlete - ${JSON.stringify(athlete)}`);
  } catch (err) {
    next(err);
  }
}

async function getAthletes(req, res, next) {
  try {
    res.send(await AthleteService.getAthletes());
    logger.info("GET /athlete");
  } catch (err) {
    next(err);
  }
}

async function getAthlete(req, res, next) {
  try {
    res.send(await AthleteService.getAthlete(req.params.id));
    logger.info("GET /athlete/:id");
  } catch (err) {
    next(err);
  }
}

async function updateAthlete(req, res, next) {
  try {
    const athlete = req.body;
    if (!athlete.athleteId || !athlete.name || !athlete.number ) {
      throw new Error("Id, Name and number are required.");
    }
    res.send(await AthleteService.updateAthlete(athlete));
    logger.info(`PUT /athlete - ${JSON.stringify(athlete)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAthlete,
  getAthletes,
  getAthlete,
  updateAthlete,
};
