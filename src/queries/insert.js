const Framework = require("../models/Framework")
const frameworksList = require("../data/frameworks")

const insertFrameworks = async () => {
  frameworksList.forEach(async (frameworkItem) => {
    const newFramework = new Framework({
      stars: frameworkItem.stars,
      symbol: frameworkItem.symbol,
      name: frameworkItem.name,
      url: "",
    })
    await newFramework.save()
  })
}

module.exports = { insertFrameworks }
