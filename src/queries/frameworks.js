const Framework = require("../models/Framework")

//get all frameworks from database
const getFrameworks = async () => {
  console.log("ici")
  const frameworks = await Framework.find()
  return frameworks
}

module.exports = { getFrameworks }
