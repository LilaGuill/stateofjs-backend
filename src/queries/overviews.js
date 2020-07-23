const Overview = require("../models/Overview")

//get all overview from database
const getOverviews = async () => {
  const overview = await Overview.find()
  return overview
}

module.exports = { getOverviews }
