const mongoose = require("mongoose")

const Ranking = mongoose.model("Ranking", {
  id: { type: String },
  awareness: { type: Array },
  interest: { type: Array },
  satisfaction: { type: Array },
})

module.exports = Ranking
