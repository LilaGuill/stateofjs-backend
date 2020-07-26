const mongoose = require("mongoose")

const Usage = mongoose.model("Usage", {
  average: { type: String },
  total: { type: Number },
  id: { type: String },
  ranges: { type: Array },
})

module.exports = Usage
