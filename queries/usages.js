const Usage = require("../models/Usage")

//get all frameworks from database
const getUsages = async () => {
  const usages = await Usage.find()
  return usages
}

module.exports = { getUsages }
