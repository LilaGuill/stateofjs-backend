const mongoose = require("mongoose")

const Framework = mongoose.model("Framework", {
  stars: { type: Number },
  symbol: { type: String },
  name: { type: String },
  url: { type: String },
})

module.exports = Framework
