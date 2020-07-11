const mongoose = require("mongoose")

const Overview = mongoose.model("Overview", {
  id: { type: String },
  buckets: { type: Array },
})

module.exports = Overview
