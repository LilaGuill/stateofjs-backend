const Experience = require("../models/Experience")

//get all frameworks from database
const getExperiences = async (args) => {
  const experiences = await Experience.find({ id: args.id })
  return experiences
}

module.exports = { getExperiences }
