const Ranking = require("../models/Ranking")

//get all rankings from database
const getRankings = async () => {
  const ranking = await Ranking.find()
  return ranking
}

module.exports = { getRankings }
