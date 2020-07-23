const { GraphQLServer } = require("graphql-yoga") // initialise le serveur
const mongoose = require("mongoose")
const { getFrameworks } = require("./queries/frameworks")
const { getRankings } = require("./queries/rankings")
const { getOverviews } = require("./queries/overviews")
const { getUsages } = require("./queries/usages")
const { getExperiences } = require("./queries/experiences")

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
    experiences: (parents, args) => getExperiences(args),
  },
  // Mutation: {},
}

const server = new GraphQLServer({
  typeDefs: "./src/schema/schema.graphql",
  resolvers,
})
server.start(() => {
  console.log("server started")
})
