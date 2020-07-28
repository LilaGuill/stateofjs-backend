const Overview = require("../models/Overview")

//get all overviews from database
const getOverviews = async () => {
  const overview = await Overview.find()
  return overview
}

module.exports = { getOverviews }
