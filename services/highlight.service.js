import HighlightRepository from "../repositories/highlight.repository.js";

async function createHighlight(highlight) {
  return await HighlightRepository.insertHighlight(highlight);
}

async function getHighlights(matchId) {
  return await HighlightRepository.getHighlights(matchId);
}

async function deleteHighlight(id) {
  return await HighlightRepository.deleteHighlight(id);
}

async function updateHighlight(highlight) {
  return await HighlightRepository.updateHighlight(highlight);
}

export default {
  createHighlight,
  getHighlights,
  deleteHighlight,
  updateHighlight,
};
