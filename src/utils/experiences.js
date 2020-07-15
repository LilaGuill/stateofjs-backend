const Experience = require("../models/Experience")

//get all frameworks from database
const getExperiences = async () => {
  const experiences = await Experience.find()
  return experiences
}

module.exports = { getExperiences }
