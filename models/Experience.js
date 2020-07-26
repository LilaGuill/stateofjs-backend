const mongoose = require("mongoose")

const Experience = mongoose.model("Experience", {
  id: { type: String },
  data: { type: Array },
})

module.exports = Experience
