const Overview = require("../models/Overview")

//get all overview from database
const getOverviews = async () => {
  const overview = await Overview.find()
  console.log(JSON.stringify(overview, null, 4))
  return overview
}

module.exports = { getOverviews }
