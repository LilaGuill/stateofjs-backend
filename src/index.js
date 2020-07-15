const { GraphQLServer } = require("graphql-yoga") // initialise le serveur
const mongoose = require("mongoose")
const { getFrameworks } = require("./utils/frameworks")
const { getRankings } = require("./utils/rankings")
const { getOverviews } = require("./utils/overviews")
const { getUsages } = require("./utils/usages")
const { getExperiences } = require("./utils/experiences")
//connection mongoose database
mongoose.connect("mongodb://localhost/app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.once("open", () => console.log("DB connected"))

const resolvers = {
  Query: {
    frameworks: () => getFrameworks(),
    rankings: () => getRankings(),
    overviews: () => getOverviews(),
    usages: () => getUsages(),
    experiences: () => getExperiences(),
  },
  // Mutation: {},
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
})
server.start(() => {
  console.log("server started")
})
