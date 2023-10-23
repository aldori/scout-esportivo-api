import MatchRepository from "../repositories/match.repository.js";

async function createMatch(match) {
  return await MatchRepository.insertMatch(match);
}

async function getMatches() {
  return await MatchRepository.getMatches();
}

async function getMatch(id) {
  return await MatchRepository.getMatch(id);
}

async function updateMatch(match) {
  return await MatchRepository.updateMatch(match);
}

export default {
  createMatch,
  getMatches,
  getMatch,
  updateMatch,
};
